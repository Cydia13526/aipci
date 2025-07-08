import {FilterOption} from "./CompanyListViewFilter";

export type FilterOptions = {
    marketCap?: FilterOption[];
    totalEquity?: FilterOption[];
    totalDebt?: FilterOption[];
    debtToEquityRatio?: FilterOption[];
    accountShares?: FilterOption[];
    carryingAmount?: FilterOption[];
    ownership?: FilterOption[];
    fairValue?: FilterOption[];
};

export type CompanyDetailsViewFilter = {
    search: string;
    type: string;
    relationship: string;
    classification: string;
    accountShares: { min: string | number; max: string | number };
    carryingAmount: { min: string | number; max: string | number };
    ownership: { min: string | number; max: string | number };
    fairValue: { min: string | number; max: string | number };
};