import React from "react";
import {FilterOption} from "../../types/CompanyListViewFilter";

type RangeFilterProps = {
    label: string;
    value: { min: string | number; max: string | number };
    options: FilterOption[];
    onChange: (range: { min: string | number; max: string | number }) => void;
};


export const RangeFilter: React.FC<RangeFilterProps> = ({ label, value, options, onChange }) => {
    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange({ ...value, min: e.target.value });
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange({ ...value, max: e.target.value });
    };

    const handleOptionSelect = (option: FilterOption) => {
        onChange({ min: option.min, max: option.max });
    };

    return (
        <div className="flex flex-col gap-2">
            <div className="text-sm">{label}</div>
            <div className="flex gap-2">
                <input
                    type="number"
                    placeholder="Min"
                    value={value.min}
                    onChange={handleMinChange}
                    className="p-2 border border-gray-300 rounded-md w-full text-sm"
                    aria-label={`Minimum ${label}`}
                />
                <input
                    type="number"
                    placeholder="Max"
                    value={value.max}
                    onChange={handleMaxChange}
                    className="p-2 border border-gray-300 rounded-md w-full text-sm"
                    aria-label={`Maximum ${label}`}
                />
            </div>
            <select
                onChange={(e) => {
                    const selectedOption = options.find(opt => opt.label === e.target.value);
                    if (selectedOption) handleOptionSelect(selectedOption);
                }}
                className="p-2 border border-gray-300 rounded-md w-full text-sm"
                aria-label={`Select ${label} range`}
            >
                <option value="">Custom Range</option>
                {options.map((option) => (
                    <option key={option.label} value={option.label}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
