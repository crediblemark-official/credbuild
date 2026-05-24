import { useComponentList } from "@/lib/use-component-list";
import { useAppStore } from "@/store";
import { ComponentList } from "@/components/ComponentList";
import { useMemo, useState } from "react";
import { Search, X, Inbox } from "lucide-react";
import { Drawer } from "@/components/Drawer";
import styles from "./styles.module.css";
import { getClassNameFactory } from "@/lib";

const getClassName = getClassNameFactory("CredBuildComponents", styles);

export const Components = () => {
  const overrides = useAppStore((s) => s.overrides);
  const config = useAppStore((s) => s.config);
  const [searchTerm, setSearchTerm] = useState("");

  const componentList = useComponentList();

  const Wrapper = useMemo(() => {
    // DEPRECATED
    if (overrides.components) {
      console.warn(
        "The `components` override has been deprecated and renamed to `drawer`"
      );
    }
    return overrides.components || overrides.drawer || "div";
  }, [overrides]);

  const matchingComponents = useMemo(() => {
    if (!searchTerm.trim()) return [];
    return Object.keys(config.components).filter((componentKey) => {
      const componentConf = config.components[componentKey] || {};
      const label = (componentConf["label"] ?? componentKey) as string;
      return (
        label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        componentKey.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [searchTerm, config.components]);

  return (
    <Wrapper className={getClassName()}>
      <div className={getClassName("searchContainer")}>
        <div className={getClassName("searchWrapper")}>
          <input
            type="text"
            className={getClassName("searchInput")}
            placeholder="Search blocks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              type="button"
              className={getClassName("clearButton")}
              onClick={() => setSearchTerm("")}
              title="Clear search"
            >
              <X size={12} />
            </button>
          )}
        </div>
      </div>

      <div className={getClassName("listContainer")}>
        {searchTerm.trim() ? (
          matchingComponents.length > 0 ? (
            <div style={{ padding: "10px 12px" }}>
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "var(--cb-silver-muted)",
                  marginBottom: "8px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Search Results ({matchingComponents.length})
              </div>
              <Drawer>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  {matchingComponents.map((componentName, i) => {
                    const componentConf = config.components[componentName] || {};
                    return (
                      <ComponentList.Item
                        key={componentName}
                        label={(componentConf["label"] ?? componentName) as string}
                        name={componentName}
                        index={i}
                      />
                    );
                  })}
                </div>
              </Drawer>
            </div>
          ) : (
            <div className={getClassName("noResults")}>
              <Inbox size={20} strokeWidth={1.5} />
              <div>No blocks found matching "{searchTerm}"</div>
            </div>
          )
        ) : componentList ? (
          componentList
        ) : (
          <ComponentList id="all" />
        )}
      </div>
    </Wrapper>
  );
};
