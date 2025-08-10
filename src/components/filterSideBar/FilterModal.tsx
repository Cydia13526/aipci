import React from 'react';
import { FilterSection } from './FilterSection';
import { RangeFilter } from './RangeFilter';
import { FilterOption } from '../../types/CompanyListViewFilter';
import { useLanguage } from '../../context/LanguageContext';

interface FilterConfig<T> {
    label: string;
    type: 'text' | 'select' | 'range';
    key: keyof T;
    options?: { value: string; label: string }[] | FilterOption[];
    placeholder?: string;
    ariaLabel: string;
    multiple?: boolean;
}

interface FilterModalProps<T> {
    filters: T;
    setFilters: React.Dispatch<React.SetStateAction<T>>;
    filterConfig: FilterConfig<T>[];
    exportToCSV?: () => void;
}

export const FilterModal = <T,>({
                                    filters,
                                    setFilters,
                                    filterConfig,
                                    exportToCSV,
                                }: FilterModalProps<T>) => {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col gap-6 overflow-y-auto">
            {filterConfig.map((config) => (
                <div key={String(config.key)}>
                    {config.type === 'range' ? (
                        <RangeFilter
                            label={config.label}
                            value={filters[config.key] as { min: string | number; max: string | number }}
                            options={config.options as FilterOption[]}
                            onChange={(range) => setFilters({ ...filters, [config.key]: range })}
                        />
                    ) : (
                        <FilterSection
                            label={config.label}
                            type={config.type}
                            value={filters[config.key] as string | string[]}
                            onChange={(value) => setFilters({ ...filters, [config.key]: value })}
                            options={config.options as { value: string; label: string }[]}
                            placeholder={config.placeholder}
                            ariaLabel={config.ariaLabel}
                            multiple={config.multiple}
                        />
                    )}
                </div>
            ))}
            {exportToCSV && (
                <button
                    onClick={exportToCSV}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200 text-sm font-medium"
                    aria-label="Export to CSV"
                >
                    {t["Export to CSV"] || "Export to CSV"}
                </button>
            )}
        </div>
    );
};