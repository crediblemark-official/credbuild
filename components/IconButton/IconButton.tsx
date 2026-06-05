import { ReactNode, SyntheticEvent, useState } from "react";
import styles from "./IconButton.module.css";
import getClassNameFactory from "@/lib/get-class-name-factory";
import { Loader } from "@/components/Loader";

const getClassName = getClassNameFactory("IconButton", styles);

export const IconButton = ({
  active = false,
  children,
  href,
  onClick,
  type,
  disabled,
  tabIndex,
  newTab,
  fullWidth,
  title,
  suppressHydrationWarning,
}: {
  active?: boolean;
  children: ReactNode;
  href?: string;
  onClick?: (e: SyntheticEvent) => void | Promise<void>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  tabIndex?: number;
  newTab?: boolean;
  fullWidth?: boolean;
  title: string;
  suppressHydrationWarning?: boolean;
}) => {
  const [loading, setLoading] = useState(false);

  // Sanitize href to prevent XSS via javascript: URLs
  const cleanHref = href ? href.replace(/[\u0000-\u001F\u007F-\u009F\s]/g, '').toLowerCase() : '';
  const safeHref =
    cleanHref.startsWith("javascript:") || cleanHref.startsWith("vbscript:") || cleanHref.startsWith("data:")
      ? "#"
      : href;

  const ElementType = safeHref ? "a" : "button";

  const el = (
    <ElementType
      className={getClassName({
        active,
        disabled,
        fullWidth,
      })}
      onClick={(e) => {
        if (!onClick) return;

        setLoading(true);
        Promise.resolve(onClick(e)).then(() => {
          setLoading(false);
        });
      }}
      type={type}
      disabled={disabled || loading}
      tabIndex={tabIndex}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      href={safeHref}
      title={title}
      suppressHydrationWarning={suppressHydrationWarning}
    >
      <span className={getClassName("title")}>{title}</span>
      {children}
      {loading && (
        <>
          &nbsp;&nbsp;
          <Loader size={14} />
        </>
      )}
    </ElementType>
  );

  return el;
};
