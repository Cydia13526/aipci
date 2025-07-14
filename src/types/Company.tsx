export type Holding = {
    id: number;
    companyId: number;
    name: string;
    industry: string;
    type: string;
    relationship: string;
    accountShares: number;
    carryingAmount: number;
    ownership: number;
    classification: string;
    fairValue: number;
    isFavorite: boolean;
};

export type HoldingsData = {
    id: number;
    companyId: number;
    items: Holding[];
};

export type CapitalStructure = {
    id: number;
    companyId: number;
    totalEquity: number;
    totalDebt: number;
    debtToEquityRatio: number;
    convertibleBonds?: number;
    preferredStock?: number;
    bonds?: number;
    greenBonds?: number;
    lastUpdated: string;
};

export interface InvestmentExperience {
    id: number;
    strategy: string;
    companyId: number;
    totalInvestments: number;
    portfolioExits: number;
    averageReturn: string;
    yearsActive: number;
    notableInvestments: {
        name: string;
        industry: string;
        date: string;
        amount: string;
    }[];
}

export interface ComparableFund {
    id: number;
    name: string;
    type: string;
    relationship: string;
    accountShares: number;
    carryingAmount: number;
    ownership: number;
    classification: string;
    fairValue: number;
    isFavorite: boolean;
    industry?: string;
    companyName?: string;
    totalEquity?: number;
    totalDebt?: number;
    debtToEquityRatio?: number;
    totalInvestments?: number;
    portfolioExits?: number;
    averageReturn?: string | number;
}

export type Company = {
    id: number;
    name: string;
    industry?: string;
    location?: string;
    marketCap?: number;
    headquarters?: string;
    email?: string;
    phone?: string;
    address?: string;
    country?: string;
    investmentExperience?: InvestmentExperience;
    capitalStructure?: CapitalStructure;
    holdings?: HoldingsData;
};
