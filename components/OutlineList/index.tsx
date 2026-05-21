import styles from "./styles.module.css";
import getClassNameFactory from "@/lib/get-class-name-factory";
import { ReactNode, SyntheticEvent, memo } from "react";

const getClassName = getClassNameFactory("OutlineList", styles);
const getClassNameItem = getClassNameFactory("OutlineListItem", styles);

export const OutlineList = ({ children }: { children: ReactNode }) => {
  return <ul className={getClassName()}>{children}</ul>;
};

// eslint-disable-next-line react/display-name
OutlineList.Clickable = memo(({ children }: { children: ReactNode }) => (
  <div className={getClassNameItem({ clickable: true })}>{children}</div>
));
OutlineList.Clickable.displayName = "OutlineList.Clickable";

// eslint-disable-next-line react/display-name
OutlineList.Item = memo(({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: (e: SyntheticEvent) => void;
}) => {
  return (
    <li
      className={getClassNameItem({ clickable: !!onClick })}
      onClick={onClick}
    >
      {children}
    </li>
  );
};
