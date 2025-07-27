import React from 'react';
import {useLanguage} from "../../../context/LanguageContext";

type QuarterFilterProps = {
    quickFilterColumns: string[];
    toggleQuarter: (quarter: string) => void;
};

function QuarterFilter({ quickFilterColumns, toggleQuarter }: QuarterFilterProps) {
    const { t } = useLanguage();

    return (
        <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">{t['Quarter'] || 'Quarter'}:</label>
            <div className="flex gap-2">
                {['Q1', 'Q2', 'Q3', 'Q4'].map((quarter) => (
                    <button
                        key={quarter}
                        onClick={() => toggleQuarter(quarter)}
                        className={`px-3 py-2 text-sm font-medium rounded-md border ${
                            quickFilterColumns.includes(quarter)
                                ? 'bg-indigo-500 text-white border-indigo-500'
                                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                        } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                        aria-label={t[quarter] || quarter}
                    >
                        {t[quarter] || quarter}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default QuarterFilter;