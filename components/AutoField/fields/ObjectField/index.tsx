import getClassNameFactory from "@/lib/get-class-name-factory";
import styles from "./styles.module.css";
import { ChevronDown, ChevronUp, LayoutTemplate } from "lucide-react";
import { FieldPropsInternal } from "@/components/AutoField/index";
import { useNestedFieldContext } from "@/components/AutoField/context";
import { useAppStore } from "@/store";
import { getDeep } from "@/lib/data/get-deep";
import { SubField } from "@/components/AutoField/subfield";
import { useFieldStoreApi } from "@/components/AutoField/store";
import { useState } from "react";

const getClassName = getClassNameFactory("ObjectField", styles);

export const ObjectField = ({
  field,
  onChange,
  id,
  name = id,
  label,
  labelIcon,
  Label,
  readOnly,
}: FieldPropsInternal) => {
  const { localName = name } = useNestedFieldContext();
  const [isOpen, setIsOpen] = useState(false);

  const fieldStore = useFieldStoreApi();

  const canEdit = useAppStore(
    (s) => s.permissions.getPermissions({ item: s.selectedItem }).edit
  );

  const getValue = () => getDeep(fieldStore.getState(), name) ?? {};

  if (field.type !== "object" || !field.objectFields) {
    return null;
  }

  return (
    <div className={getClassName({ isOpen })}>
      <button
        type="button"
        className={getClassName("header")}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {labelIcon || <LayoutTemplate size={12} strokeWidth={2.5} />}
          <div style={{ fontWeight: 600 }}>{label || name}</div>
        </div>
        <div className={getClassName("headerIcon")}>
          {isOpen ? (
            <ChevronUp size={12} strokeWidth={2.5} />
          ) : (
            <ChevronDown size={12} strokeWidth={2.5} />
          )}
        </div>
      </button>
      {isOpen && (
        <div className={getClassName("content")}>
          <fieldset className={getClassName("fieldset")}>
            {Object.keys(field.objectFields!).map((subName) => {
              const subField = field.objectFields![subName];
              const subPath = `${localName}.${subName}`;

              return (
                <SubField
                  key={subPath}
                  id={`${id}_${subName}`}
                  name={name}
                  subName={subName}
                  localName={localName}
                  field={subField}
                  forceReadOnly={!canEdit}
                  onChange={(subValue, ui, subName) => {
                    const value = getValue();

                    if (value[subName] === subValue) {
                      return;
                    }

                    onChange({ ...value, [subName]: subValue }, ui);
                  }}
                />
              );
            })}
          </fieldset>
        </div>
      )}
    </div>
  );
};
