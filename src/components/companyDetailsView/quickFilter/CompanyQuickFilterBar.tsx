import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import AmountFilter from './AmountFilter';
import YearFilter from './YearFilter';
import QuarterFilter from './QuarterFilter';

type CompanyQuickFilterBarProps = {
  summary: {
    totalCarryingAmount: number;
    totalFairValue: number;
    ownershipDistribution: Record<string, number>;
  };
  quickAmountFilterColumn: string;
  setQuickAmountFilterColumn: (value: string) => void;
  quickFromYearFilterColumn: string;
  setQuickFromYearFilterColumn: (value: string) => void;
  quickToYearFilterColumn: string;
  setQuickToYearFilterColumn: (value: string) => void;
  quickFilterColumns: string[];
  toggleQuarter: (quarter: string) => void;
  applyQuickFilter: (minValue: number) => void;
  resetFilters: () => void;
  displayCurrency: 'USD' | 'Original';
  setDisplayCurrency: (value: 'USD' | 'Original') => void;
};

function CompanyQuickFilterBar({
                                 summary,
                                 quickAmountFilterColumn,
                                 setQuickAmountFilterColumn,
                                 quickFromYearFilterColumn,
                                 setQuickFromYearFilterColumn,
                                 quickToYearFilterColumn,
                                 setQuickToYearFilterColumn,
                                 quickFilterColumns,
                                 toggleQuarter,
                                 applyQuickFilter,
                                 resetFilters,
                                 displayCurrency,
                                 setDisplayCurrency,
                               }: CompanyQuickFilterBarProps) {
  const { t } = useLanguage();

  const handleCurrencyToggle = () => {
    setDisplayCurrency(displayCurrency === 'USD' ? 'Original' : 'USD');
  };

  return (
      <div className="flex justify-between items-center p-3 bg-white shadow-sm mb-3 rounded-lg">
        <div className="flex gap-3">
          <button
              onClick={handleCurrencyToggle}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
              aria-label={displayCurrency === 'USD' ? (t['Show Original Currency'] || 'Show Original Currency') : (t['Convert to USD'] || 'Convert to USD')}
          >
            {displayCurrency === 'USD' ? (t['Show Original Currency'] || 'Show Original Currency') : (t['Convert to USD'] || 'Convert to USD')}
          </button>
          <AmountFilter
              quickAmountFilterColumn={quickAmountFilterColumn}
              setQuickAmountFilterColumn={setQuickAmountFilterColumn}
              applyQuickFilter={applyQuickFilter}
          />
          <YearFilter
              quickFromYearFilterColumn={quickFromYearFilterColumn}
              setQuickFromYearFilterColumn={setQuickFromYearFilterColumn}
              quickToYearFilterColumn={quickToYearFilterColumn}
              setQuickToYearFilterColumn={setQuickToYearFilterColumn}
          />
          <QuarterFilter
              quickFilterColumns={quickFilterColumns}
              toggleQuarter={toggleQuarter}
          />
          <button
              onClick={resetFilters}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200 text-sm font-medium"
              aria-label={t['Reset Filters'] || 'Reset Filters'}
          >
            {t['Reset Filters'] || 'Reset Filters'}
          </button>
        </div>
      </div>
  );
}

export default CompanyQuickFilterBar;