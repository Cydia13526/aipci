import React from 'react';
import {useLanguage} from "../../../context/LanguageContext";


type AmountFilterProps = {
    quickAmountFilterColumn: string;
    setQuickAmountFilterColumn: (value: string) => void;
    applyQuickFilter: (minValue: number) => void;
};

function AmountFilter({
                          quickAmountFilterColumn,
                          setQuickAmountFilterColumn,
                          applyQuickFilter,
                      }: AmountFilterProps) {
    const { t } = useLanguage();

    return (
        <div className="flex gap-3">
            <select
                value={quickAmountFilterColumn}
                onChange={(e) => setQuickAmountFilterColumn(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label={t['Select Quick Filter'] || 'Select Quick Filter'}
            >
                <option value="" disabled>
                    {t['Select Column'] || 'Select Column'}
                </option>
                <option value="accountShares">{t['Account Shares'] || 'Account Shares'}</option>
                <option value="carryingAmount">{t['Carrying Amount'] || 'Carrying Amount'}</option>
                <option value="fairValue">{t['Fair Value'] || 'Fair Value'}</option>
            </select>
            <button
                onClick={() => applyQuickFilter(100000000)}
                disabled={!quickAmountFilterColumn}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    quickAmountFilterColumn
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                aria-label={t['> $100M'] || '> $100M'}
            >
                {t['> $100M'] || '> $100M'}
            </button>
            <button
                onClick={() => applyQuickFilter(20000000)}
                disabled={!quickAmountFilterColumn}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    quickAmountFilterColumn
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                aria-label={t['> $20M'] || '> $20M'}
            >
                {t['> $20M'] || '> $20M'}
            </button>
        </div>
    );
}

export default AmountFilter;