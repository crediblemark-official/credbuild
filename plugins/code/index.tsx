import { Code } from "lucide-react";
import { CodePanel } from "./CodePanel";
import { Plugin } from "@/types";
import styles from "./styles.module.css";
import { getClassNameFactory } from "@/lib";

const getClassName = getClassNameFactory("CodePlugin", styles);

export const codePlugin: () => Plugin = () => ({
  name: "code",
  label: "Code",
  render: () => (
    <div className={getClassName()}>
      <CodePanel />
    </div>
  ),
  icon: <Code size={18} />,
});
export default codePlugin;
