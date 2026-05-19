import React, { useState } from "react";
import { ResponsiveValue } from "@/types/Fields";
import { SliderField } from "@/components/AutoField/fields/SliderField";

// Icons (Simple SVGs)
const DesktopIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
);
const TabletIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
);
const MobileIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
);


type ResponsiveSliderFieldProps = {
    value: ResponsiveValue;
    onChange: (value: ResponsiveValue) => void;
    label?: string;
    unit?: string;
    max?: number;
    min?: number;
    step?: number;
    defaultValue?: number | ResponsiveValue;
};

export const ResponsiveSliderField = ({
    value = {},
    onChange,
    label,
    unit = "px",
    max = 100,
    min = 0,
    step = 1,
    defaultValue = 0
}: ResponsiveSliderFieldProps) => {
    const [mode, setMode] = useState<"desktop" | "tablet" | "mobile">("desktop");

    // Helper to get current value safely
    const getCurrentValue = () => {
        const val = value?.[mode];

        // If explicit value exists, use it
        if (val !== undefined && val !== null) {
            return val;
        }

        // Inheritance logic for existing values
        if (mode === 'tablet' && value?.desktop !== undefined) return value.desktop;
        if (mode === 'mobile') {
            if (value?.tablet !== undefined) return value.tablet;
            if (value?.desktop !== undefined) return value.desktop;
        }

        // If no value in `value` object, use `defaultValue`
        if (typeof defaultValue === 'number') return defaultValue;

        // Handle object defaultValue
        const def = defaultValue as ResponsiveValue;
        const defVal = def?.[mode];
        if (defVal !== undefined) return defVal;

        // Inheritance for defaultValue
        if (mode === 'tablet' && def?.desktop !== undefined) return def.desktop;
        if (mode === 'mobile') {
            if (def?.tablet !== undefined) return def.tablet;
            if (def?.desktop !== undefined) return def.desktop;
        }

        return 0;
    };

    const handleChange = (newVal: any) => {
        onChange({
            ...value,
            [mode]: newVal
        });
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {/* Header with Label and Toggles */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0px" }}>
                {label && (
                    <label style={{ 
                        fontSize: "10px", 
                        fontWeight: 500, 
                        color: "var(--cb-silver-muted, #71717a)",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px"
                    }}>
                        {label}
                        <span style={{ fontSize: "9px", opacity: 0.5, fontWeight: "400" }}>({mode})</span>
                    </label>
                )}

                <div style={{ 
                    display: "flex", 
                    backgroundColor: "var(--cb-bg-panel, #f1f5f9)", 
                    borderRadius: "4px", 
                    padding: "1px",
                    border: "1px solid var(--cb-border, #e2e8f0)"
                }}>
                    <button
                        type="button"
                        onClick={() => setMode("desktop")}
                        style={{
                            padding: "2px 5px",
                            border: "none",
                            background: mode === "desktop" ? "var(--cb-bg-surface, #fff)" : "transparent",
                            boxShadow: mode === "desktop" ? "0 1px 2px rgba(0,0,0,0.05)" : "none",
                            borderRadius: "3px",
                            cursor: "pointer",
                            color: mode === "desktop" ? "var(--cb-gold, #d97706)" : "var(--cb-silver-muted, #a1a1aa)",
                            display: 'flex', alignItems: 'center',
                            transition: "all 0.1s ease"
                        }}
                        title="Desktop"
                        aria-label="Desktop"
                        aria-pressed={mode === "desktop"}
                    >
                        <DesktopIcon />
                    </button>
                    <button
                        type="button"
                        onClick={() => setMode("tablet")}
                        style={{
                            padding: "2px 5px",
                            border: "none",
                            background: mode === "tablet" ? "var(--cb-bg-surface, #fff)" : "transparent",
                            boxShadow: mode === "tablet" ? "0 1px 2px rgba(0,0,0,0.05)" : "none",
                            borderRadius: "3px",
                            cursor: "pointer",
                            color: mode === "tablet" ? "var(--cb-gold, #d97706)" : "var(--cb-silver-muted, #a1a1aa)",
                            display: 'flex', alignItems: 'center',
                            transition: "all 0.1s ease"
                        }}
                        title="Tablet"
                        aria-label="Tablet"
                        aria-pressed={mode === "tablet"}
                    >
                        <TabletIcon />
                    </button>
                    <button
                        type="button"
                        onClick={() => setMode("mobile")}
                        style={{
                            padding: "2px 5px",
                            border: "none",
                            background: mode === "mobile" ? "var(--cb-bg-surface, #fff)" : "transparent",
                            boxShadow: mode === "mobile" ? "0 1px 2px rgba(0,0,0,0.05)" : "none",
                            borderRadius: "3px",
                            cursor: "pointer",
                            color: mode === "mobile" ? "var(--cb-gold, #d97706)" : "var(--cb-silver-muted, #a1a1aa)",
                            display: 'flex', alignItems: 'center',
                            transition: "all 0.1s ease"
                        }}
                        title="Mobile"
                        aria-label="Mobile"
                        aria-pressed={mode === "mobile"}
                    >
                        <MobileIcon />
                    </button>
                </div>
            </div>

            {/* The Actual Slider Input */}
            <SliderField
                value={getCurrentValue()}
                onChange={handleChange}
                unit={unit}
                max={max}
                min={min}
                step={step}
                useUnits={false}
            />
        </div>
    );
};
