import { ReactNode, SyntheticEvent, useState } from "react";
import styles from "./IconButton.module.css";
import getClassNameFactory from "@/lib/get-class-name-factory";
import { Loader } from "@/components/Loader";
import { sanitizeHref } from "@/lib/sanitize-href";

const getClassName = getClassNameFactory("IconButton", styles);

export const IconButton = ({
  active,
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

  // Sanitize href to prevent XSS via malicious URLs
  const safeHref = sanitizeHref(href);

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
      aria-pressed={active !== undefined ? active : undefined}
      aria-busy={loading ? "true" : undefined}
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
        <span aria-hidden="true">
          &nbsp;&nbsp;
          <Loader size={14} />
        </span>
      )}
    </ElementType>
  );

  return el;
};
