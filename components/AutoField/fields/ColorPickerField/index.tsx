import React from "react";

type ColorPickerFieldProps = {
    value: string;
    onChange: (value: string) => void;
};

export const ColorPickerField = ({ value, onChange }: ColorPickerFieldProps) => {
    const safeValue = value || "#ffffff";

    return (
        <div style={{ padding: "4px 0", display: "flex", gap: "6px", alignItems: "center" }}>
            <div style={{
                position: "relative",
                width: "28px",
                height: "28px",
                borderRadius: "3px",
                border: "1px solid var(--cb-border, #e2e8f0)",
                overflow: "hidden",
                flexShrink: 0,
                background: "var(--cb-bg-base, #f8fafc)"
            }}>
                <input
                    type="color"
                    value={safeValue.startsWith("#") ? safeValue : "#000000"} // Input color needs hex
                    onChange={(e) => {
                        if (e.target.value !== value) {
                            onChange(e.target.value);
                        }
                    }}
                    aria-label="Choose color"
                    title="Choose color"
                    style={{
                        position: "absolute",
                        top: "-50%",
                        left: "-50%",
                        width: "200%",
                        height: "200%",
                        cursor: "pointer",
                        border: "none",
                        padding: 0,
                        margin: 0
                    }}
                />
            </div>
            <input
                type="text"
                value={value || ""}
                placeholder="#RRGGBB"
                onChange={(e) => onChange(e.target.value)}
                aria-label="Color hex value"
                title="Color hex value"
                style={{
                    flex: 1,
                    padding: "4px 8px",
                    borderRadius: "3px",
                    border: "1px solid var(--cb-border, #e2e8f0)",
                    background: "var(--cb-bg-base, #f8fafc)",
                    color: "var(--cb-silver, #0f172a)",
                    fontSize: "11px",
                    fontFamily: "var(--cb-font-mono, 'JetBrains Mono', monospace)",
                    fontWeight: "500",
                    height: "28px",
                    transition: "all 0.1s ease"
                }}
            />
        </div>
    );
};
