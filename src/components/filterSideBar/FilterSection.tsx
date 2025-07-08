import React, { ChangeEvent } from 'react';

interface FilterSectionProps<T> {
    label: string;
    type: 'text' | 'select';
    value: string;
    onChange: (value: string) => void;
    options?: { value: string; label: string }[];
    placeholder?: string;
    ariaLabel: string;
}

export const FilterSection = <T,>({
                                      label,
                                      type,
                                      value,
                                      onChange,
                                      options,
                                      placeholder,
                                      ariaLabel,
                                  }: FilterSectionProps<T>) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            {type === 'text' ? (
                <input
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-normal text-gray-900"
                    aria-label={ariaLabel}
                />
            ) : (
                <select
                    value={value}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-normal text-gray-900"
                    aria-label={ariaLabel}
                >
                    {options?.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
};