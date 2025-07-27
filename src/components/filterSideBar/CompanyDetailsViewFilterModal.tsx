import React from 'react';
import { CompanyDetailsViewFilter, FilterOptions } from '../../types/CompanyDetailsViewFilter';
import { FilterOption } from '../../types/CompanyListViewFilter';
import { FilterModal } from './FilterModal';
import {useLanguage} from "../../context/LanguageContext";

interface CompanyDetailsViewFilterModalProps {
  filters: CompanyDetailsViewFilter;
  setFilters: React.Dispatch<React.SetStateAction<CompanyDetailsViewFilter>>;
  filterOptions: FilterOptions;
  exportToCSV: () => void;
}

const CompanyDetailsViewFilterModal: React.FC<CompanyDetailsViewFilterModalProps> = ({
                                                                                       filters,
                                                                                       setFilters,
                                                                                       filterOptions,
                                                                                       exportToCSV,
                                                                                     }) => {
  const { t, language, changeLanguage } = useLanguage();
  const filterConfig = [
    {
      label: t['Search by Name'] || "Search by Name",
      type: 'text' as const,
      key: 'search' as keyof CompanyDetailsViewFilter,
      placeholder: t["Enter name..."] || "Enter name...",
      ariaLabel: 'Search holdings by name',
    },
    {
      label: t["Type"] || "Type",
      type: 'select' as const,
      key: 'type' as keyof CompanyDetailsViewFilter,
      options: [
        { value: '', label: t['All Types'] || "All Types" },
        { value: 'Stock', label:  t['Stock'] || "Stock" },
        { value: 'Fund', label: t['Fund'] || "Fund" },
      ],
      ariaLabel: 'Filter by type',
    },
    {
      label: t['Relationship'],
      type: 'select' as const,
      key: 'relationship' as keyof CompanyDetailsViewFilter,
      options: [
        { value: '', label: t['All Relationships'] || "All Relationships" },
        { value: 'Direct', label: t['Direct'] || "Direct" },
        { value: 'Managed', label: t['Managed'] || "Managed" },
      ],
      ariaLabel: 'Filter by relationship',
    },
    {
      label: t['Classification'],
      type: 'select' as const,
      key: 'classification' as keyof CompanyDetailsViewFilter,
      options: [
        { value: '', label: t['All Classifications'] || "All Classifications" },
        { value: 'AFS', label: 'AFS'  },
        { value: 'HTM', label: 'HTM' },
      ],
      ariaLabel: 'Filter by classification',
    },
    {
      label: t['Account Shares'],
      type: 'range' as const,
      key: 'accountShares' as keyof CompanyDetailsViewFilter,
      options: filterOptions.accountShares as FilterOption[],
      ariaLabel: 'Filter by account shares',
    },
    {
      label: t['Carrying Amount'],
      type: 'range' as const,
      key: 'carryingAmount' as keyof CompanyDetailsViewFilter,
      options: filterOptions.carryingAmount as FilterOption[],
      ariaLabel: 'Filter by carrying amount',
    },
    {
      label: t['Ownership'] + '(%)',
      type: 'range' as const,
      key: 'ownership' as keyof CompanyDetailsViewFilter,
      options: filterOptions.ownership as FilterOption[],
      ariaLabel: 'Filter by ownership percentage',
    },
    {
      label: t['Fair Value'],
      type: 'range' as const,
      key: 'fairValue' as keyof CompanyDetailsViewFilter,
      options: filterOptions.fairValue as FilterOption[],
      ariaLabel: 'Filter by fair value',
    },
  ];

  return (
      <FilterModal
          filters={filters}
          setFilters={setFilters}
          filterConfig={filterConfig}
          exportToCSV={exportToCSV}
      />
  );
};

export default CompanyDetailsViewFilterModal;