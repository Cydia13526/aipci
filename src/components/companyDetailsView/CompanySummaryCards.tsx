import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

type CompanySummaryCardsProps = {
  summary: {
    totalCarryingAmount: number;
    totalFairValue: number;
    ownershipDistribution: Record<string, number>;
  };
};

function CompanySummaryCards({ summary }: CompanySummaryCardsProps) {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
      <div className="bg-white p-3 rounded-lg shadow-sm">
        <h2 className="text-sm font-medium text-gray-900">
          {t['Total Carrying Amount'] || 'Total Carrying Amount'}
        </h2>
        <p className="text-xl text-gray-700">
          {summary.totalCarryingAmount
            ? `$${summary.totalCarryingAmount.toLocaleString()}`
            : t['Zero Value']}
        </p>
      </div>
      <div className="bg-white p-3 rounded-lg shadow-sm">
        <h2 className="text-sm font-medium text-gray-900">
          {t['Total Fair Value'] || 'Total Fair Value'}
        </h2>
        <p className="text-xl text-gray-700">
          {summary.totalFairValue
            ? `$${summary.totalFairValue.toLocaleString()}`
            : t['Zero Value']}
        </p>
      </div>
      <div className="bg-white p-3 rounded-lg shadow-sm">
        <h2 className="text-sm font-medium text-gray-900">
          {t['Ownership by Type'] || 'Ownership by Type'}
        </h2>
        {Object.entries(summary.ownershipDistribution).map(([type, value]) => (
          <p key={type} className="text-sm text-gray-400">
            {(t[type] || type)}: {value ? value.toFixed(2) : t['Zero Value']}%
          </p>
        ))}
      </div>
    </div>
  );
}

export default CompanySummaryCards;