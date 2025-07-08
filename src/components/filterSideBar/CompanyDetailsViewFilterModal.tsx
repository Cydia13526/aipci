import React from 'react';
import { CompanyDetailsViewFilter, FilterOptions } from '../../types/CompanyDetailsViewFilter';
import { FilterOption } from '../../types/CompanyListViewFilter';
import { FilterModal } from './FilterModal';

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
  const filterConfig = [
    {
      label: 'Search by Name',
      type: 'text' as const,
      key: 'search' as keyof CompanyDetailsViewFilter,
      placeholder: 'Enter name...',
      ariaLabel: 'Search holdings by name',
    },
    {
      label: 'Type',
      type: 'select' as const,
      key: 'type' as keyof CompanyDetailsViewFilter,
      options: [
        { value: '', label: 'All Types' },
        { value: 'Stock', label: 'Stock' },
        { value: 'Fund', label: 'Fund' },
      ],
      ariaLabel: 'Filter by type',
    },
    {
      label: 'Relationship',
      type: 'select' as const,
      key: 'relationship' as keyof CompanyDetailsViewFilter,
      options: [
        { value: '', label: 'All Relationships' },
        { value: 'Direct', label: 'Direct' },
        { value: 'Managed', label: 'Managed' },
      ],
      ariaLabel: 'Filter by relationship',
    },
    {
      label: 'Classification',
      type: 'select' as const,
      key: 'classification' as keyof CompanyDetailsViewFilter,
      options: [
        { value: '', label: 'All Classifications' },
        { value: 'AFS', label: 'AFS' },
        { value: 'HTM', label: 'HTM' },
      ],
      ariaLabel: 'Filter by classification',
    },
    {
      label: 'Account Shares',
      type: 'range' as const,
      key: 'accountShares' as keyof CompanyDetailsViewFilter,
      options: filterOptions.accountShares as FilterOption[],
      ariaLabel: 'Filter by account shares',
    },
    {
      label: 'Carrying Amount',
      type: 'range' as const,
      key: 'carryingAmount' as keyof CompanyDetailsViewFilter,
      options: filterOptions.carryingAmount as FilterOption[],
      ariaLabel: 'Filter by carrying amount',
    },
    {
      label: 'Ownership (%)',
      type: 'range' as const,
      key: 'ownership' as keyof CompanyDetailsViewFilter,
      options: filterOptions.ownership as FilterOption[],
      ariaLabel: 'Filter by ownership percentage',
    },
    {
      label: 'Fair Value',
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