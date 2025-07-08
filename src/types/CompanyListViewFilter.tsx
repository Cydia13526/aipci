export type FilterOption = {
    label: string;
    min: number;
    max: number;
};

export type CompanyListViewFilter = {
    search?: string;
    type?: string;
    industry?: string;
    marketCap?: { min: string | number; max: string | number };
    totalEquity?: { min: string | number; max: string | number };
    totalDebt?: { min: string | number; max: string | number };
    debtToEquityRatio?: { min: string | number; max: string | number };
    strategy?: string;
};