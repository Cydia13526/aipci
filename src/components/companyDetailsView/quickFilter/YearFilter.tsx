import React from 'react';
import {useLanguage} from "../../../context/LanguageContext";


type YearFilterProps = {
    quickFromYearFilterColumn: string;
    setQuickFromYearFilterColumn: (value: string) => void;
    quickToYearFilterColumn: string;
    setQuickToYearFilterColumn: (value: string) => void;
};

function YearFilter({
                        quickFromYearFilterColumn,
                        setQuickFromYearFilterColumn,
                        quickToYearFilterColumn,
                        setQuickToYearFilterColumn,
                    }: YearFilterProps) {
    const { t } = useLanguage();
    const years = Array.from({ length: 10 }, (_, i) => 2025 - i);

    return (
        <div className="flex gap-3">
            <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">
                    {t['From Year'] || 'From Year'}:
                </label>
                <select
                    value={quickFromYearFilterColumn || ''}
                    onChange={(e) => setQuickFromYearFilterColumn(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    aria-label={t['Select From Year'] || 'Select From Year'}
                >
                    <option value="" disabled>
                        {t['Select Year'] || 'Select Year'}
                    </option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">
                    {t['To Year'] || 'To Year'}:
                </label>
                <select
                    value={quickToYearFilterColumn || ''}
                    onChange={(e) => setQuickToYearFilterColumn(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    aria-label={t['Select To Year'] || 'Select To Year'}
                >
                    <option value="" disabled>
                        {t['Select Year'] || 'Select Year'}
                    </option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default YearFilter;