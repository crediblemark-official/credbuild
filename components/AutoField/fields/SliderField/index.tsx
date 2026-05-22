import React from "react";

export type SliderFieldProps = {
    value: string | number;
    onChange: (value: string | number) => void;
    label?: string; // CredBuild might pass label but we usually handle it in the wrapper or ignore
    min?: number;
    max?: number;
    step?: number;
    unit?: string;
    defaultValue?: string | number;
    useUnits?: boolean;
    style?: React.CSSProperties;
};

export const SliderField = ({
    value,
    onChange,
    min = 0,
    max = 100,
    step = 1,
    unit = "px",
    defaultValue = 0,
    useUnits = true,
    style = {}
}: SliderFieldProps) => {
    // Helper to safely parse any input to a number
    const parseValue = (val: string | number | undefined | null): number => {
        if (typeof val === 'number') return val;
        if (typeof val === 'string') return parseFloat(val);
        return 0;
    };

    const inputValue = value !== undefined && value !== null ? value : defaultValue;
    const numericValue = parseValue(inputValue);

    // Determine the current unit
    // If input is string "20px", extract "px". If number 20, use default 'unit'.
    // If useUnits is false, strictly using empty string or ignoring it.
    const extractUnit = (val: string | number) => {
        if (!useUnits) return "";
        if (typeof val === 'string') {
            const match = val.replace(/[0-9.-]/g, '');
            return match || unit;
        }
        return unit;
    };

    const currentUnit = extractUnit(inputValue);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = parseFloat(e.target.value);
        if (isNaN(newVal)) return;

        if (useUnits) {
            onChange(`${newVal}${currentUnit}`);
        } else {
            onChange(newVal);
        }
    };

    const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newUnit = e.target.value;
        onChange(`${numericValue}${newUnit}`);
    };

    return (
        <div style={{ padding: "0", ...style }}>
            <style dangerouslySetInnerHTML={{ __html: `
                .cb-slider-input {
                    -webkit-appearance: none;
                    width: 100%;
                    height: 3px;
                    background: var(--cb-border, #e2e8f0);
                    border-radius: 2px;
                    outline: none;
                    margin: 8px 0;
                }
                .cb-slider-input::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 12px;
                    height: 12px;
                    background: var(--cb-gold, #d97706);
                    cursor: pointer;
                    border-radius: 50%;
                    border: 2px solid var(--cb-bg-surface, #fff);
                    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
                    transition: all 0.2s ease;
                }
                .cb-slider-input::-webkit-slider-thumb:hover {
                    transform: scale(1.15);
                }
                .cb-number-input:focus, .cb-select-input:focus {
                    border-color: var(--cb-gold) !important;
                    outline: none !important;
                }
            `}} />
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={numericValue}
                    onChange={handleChange}
                    className="cb-slider-input"
                    style={{ flex: 1, cursor: "pointer" }}
                />
                <div style={{ display: "flex", gap: "2px" }}>
                    <input
                        type="number"
                        min={min}
                        max={max}
                        step={step}
                        value={numericValue}
                        onChange={handleChange}
                        className="cb-number-input"
                        style={{
                            width: "48px",
                            padding: "3px 4px",
                            borderRadius: "3px",
                            border: "1px solid var(--cb-border, #e2e8f0)",
                            background: "var(--cb-bg-base, #f8fafc)",
                            color: "var(--cb-silver, #0f172a)",
                            fontSize: "10px",
                            fontWeight: "500",
                            textAlign: "center",
                            transition: "all 0.2s ease"
                        }}
                    />
                    {useUnits && (
                        <select
                            value={currentUnit}
                            onChange={handleUnitChange}
                            className="cb-select-input"
                            style={{
                                width: "42px",
                                padding: "2px",
                                borderRadius: "3px",
                                border: "1px solid var(--cb-border, #e2e8f0)",
                                background: "var(--cb-bg-base, #f8fafc)",
                                color: "var(--cb-silver, #0f172a)",
                                fontSize: "9px",
                                fontWeight: "500",
                                cursor: "pointer",
                                transition: "all 0.2s ease"
                            }}
                        >
                            <option value="px">px</option>
                            <option value="%">%</option>
                            <option value="vh">vh</option>
                            <option value="vw">vw</option>
                            <option value="em">em</option>
                            <option value="rem">rem</option>
                        </select>
                    )}
                </div>
            </div>
        </div>
    );
};
