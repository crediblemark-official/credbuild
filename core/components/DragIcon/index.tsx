import { getClassNameFactory } from "../../lib";
import { GripVertical } from "lucide-react";
import styles from "./styles.module.css";

const getClassName = getClassNameFactory("DragIcon", styles);

export const DragIcon = ({ isDragDisabled }: { isDragDisabled?: boolean }) => (
  <div className={getClassName({ disabled: isDragDisabled })}>
    <GripVertical size={12} strokeWidth={2.5} />
  </div>
);
