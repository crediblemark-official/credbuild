import { ReactNode, useEffect, useState } from "react";
import getClassNameFactory from "@/lib/get-class-name-factory";
import styles from "./styles.module.css";
import { createPortal } from "react-dom";

const getClassName = getClassNameFactory("Modal", styles);

export const Modal = ({
  children,
  onClose,
  isOpen,
}: {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
}) => {
  const [rootEl, setRootEl] = useState<any>(null);

  useEffect(() => {
    setRootEl(document.getElementById("credbuild-portal-root"));
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!rootEl) {
    return <div />;
  }

  return createPortal(
    <div className={getClassName({ isOpen })} onClick={onClose}>
      <div
        className={getClassName("inner")}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>,
    rootEl
  );
};
