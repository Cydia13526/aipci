import React from 'react';
import { CompanyListViewFilter, FilterOption } from '../../types/CompanyListViewFilter';
import { Language, translations } from '../../types/Language';
import { FilterModal } from './FilterModal';
import { FilterOptions } from '../../types/CompanyDetailsViewFilter';
import {useLanguage} from "../../context/LanguageContext";

interface CompanyListViewFilterProps {
    filters: CompanyListViewFilter;
    setFilters: React.Dispatch<React.SetStateAction<CompanyListViewFilter>>;
    filterOptions: FilterOptions;
}

export const CompanyListViewFilterModal: React.FC<CompanyListViewFilterProps> = ({
                                                                                     filters,
                                                                                     setFilters,
                                                                                     filterOptions
                                                                                 }) => {
    const { t, language, changeLanguage } = useLanguage();

    const filterConfig = [
        {
            label: t["Search by Name"] || "Search by Name",
            type: 'text' as const,
            key: 'search' as keyof CompanyListViewFilter,
            placeholder: t["Enter name..."] || "Enter name...",
            ariaLabel: t["Search companies by name"] || "Search companies by name",
        },
        {
            label: t["Industry"] || "Industry",
            type: 'select' as const,
            key: 'industry' as keyof CompanyListViewFilter,
            options: [
                { value: '', label: t["All Industries"] || "All Industries" },
                { value: 'Technology', label: t["Technology"] || "Technology" },
                { value: 'Finance', label: t["Finance"] || "Finance" },
                { value: 'Healthcare', label: t["Healthcare"] || "Healthcare" },
                { value: 'Energy', label: t["Energy"] || "Energy" },
            ],
            ariaLabel: t["Filter by industry"] || "Filter by industry",
        },
        {
            label: t["Market Cap"] || "Market Cap",
            type: 'range' as const,
            key: 'marketCap' as keyof CompanyListViewFilter,
            options: filterOptions.marketCap as FilterOption[],
            ariaLabel: t["Filter by market cap"] || "Filter by market cap",
        },
        {
            label: t["Total Equity"] || "Total Equity",
            type: 'range' as const,
            key: 'totalEquity' as keyof CompanyListViewFilter,
            options: filterOptions.totalEquity as FilterOption[],
            ariaLabel: t["Filter by total equity"] || "Filter by total equity",
        },
        {
            label: t["Total Debt"] || "Total Debt",
            type: 'range' as const,
            key: 'totalDebt' as keyof CompanyListViewFilter,
            options: filterOptions.totalDebt as FilterOption[],
            ariaLabel: t["Filter by total debt"] || "Filter by total debt",
        },
        {
            label: t["Debt-to-Equity Ratio"] || "Debt-to-Equity Ratio",
            type: 'range' as const,
            key: 'debtToEquityRatio' as keyof CompanyListViewFilter,
            options: filterOptions.debtToEquityRatio as FilterOption[],
            ariaLabel: t["Filter by debt-to-equity ratio"] || "Filter by debt-to-equity ratio",
        },
        {
            label: t["Investment Strategy"] || "Investment Strategy",
            type: 'select' as const,
            key: 'strategy' as keyof CompanyListViewFilter,
            options: [
                { value: '', label: t["All Strategies"] || "All Strategies" },
                { value: 'Growth', label: t["Growth"] || "Growth" },
                { value: 'Value', label: t["Value"] || "Value" },
                { value: 'Income', label: t["Income"] || "Income" },
            ],
            ariaLabel: t["Filter by investment strategy"] || "Filter by investment strategy",
        },
    ];

    return <FilterModal filters={filters} setFilters={setFilters} filterConfig={filterConfig} />;
};