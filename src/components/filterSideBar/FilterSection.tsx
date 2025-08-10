import React, { ChangeEvent } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface FilterSectionProps<T> {
    label: string;
    type: 'text' | 'select';
    value: string | string[];
    onChange: (value: string | string[]) => void;
    options?: { value: string; label: string }[];
    placeholder?: string;
    ariaLabel: string;
    multiple?: boolean;
}

export const FilterSection = <T,>({
                                      label,
                                      type,
                                      value,
                                      onChange,
                                      options,
                                      placeholder,
                                      ariaLabel,
                                      multiple,
                                  }: FilterSectionProps<T>) => {
    const { t } = useLanguage();

    if (type === 'text') {
        return (
            <div className="flex flex-col gap-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={value as string}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-normal text-gray-900"
                    aria-label={ariaLabel}
                />
            </div>
        );
    }

    if (type === 'select' && multiple) {
        return (
            <div className="flex flex-col gap-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                <div className="border border-gray-300 rounded-md p-3 max-h-40 overflow-y-auto">
                    {options?.map((option) => (
                        <div key={option.value} className="flex items-center gap-2 mb-2">
                            <input
                                type="checkbox"
                                value={option.value}
                                checked={(value as string[]).includes(option.value)}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    const currentValues = value as string[];
                                    const newValues = e.target.checked
                                        ? [...currentValues, option.value]
                                        : currentValues.filter((val) => val !== option.value);
                                    onChange(newValues);
                                }}
                                aria-label={`${ariaLabel}: ${option.label}`}
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                            />
                            <span className="text-sm text-gray-700">{option.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <select
                value={value as string}
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
        </div>
    );
};