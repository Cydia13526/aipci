import {CapitalStructure, ComparableFund, FundData, HoldingsData, InvestmentExperience} from "../types/Company";


export function getCapitalStructureByCompanyId(companyId: number) {
    return capitalStructureData.find(data => data.companyId === companyId) as CapitalStructure || null;
}


export const capitalStructureData = [
    {
        id: 1,
        companyId: 1,
        totalEquity: 1500000000,
        totalDebt: 800000000,
        debtToEquityRatio: 0.53,
        convertibleBonds: 100000000,
        preferredStock: 50000000,
        lastUpdated: "2024-12-31"
    },
    {
        id: 2,
        companyId: 2,
        totalEquity: 1200000000,
        totalDebt: 500000000,
        debtToEquityRatio: 0.42,
        bonds: 100000000,
        preferredStock: 0,
        lastUpdated: "2024-12-31"
    },
    {
        id: 3,
        companyId: 3,
        totalEquity: 600000000,
        totalDebt: 250000000,
        debtToEquityRatio: 0.42,
        greenBonds: 50000000,
        preferredStock: 0,
        lastUpdated: "2024-12-31"
    },
    {
        id: 4,
        companyId: 4,
        totalEquity: 800000000,
        totalDebt: 300000000,
        debtToEquityRatio: 0.375,
        convertibleBonds: 50000000,
        preferredStock: 25000000,
        lastUpdated: "2024-12-31"
    },
    {
        id: 5,
        companyId: 5,
        totalEquity: 1400000000,
        totalDebt: 400000000,
        debtToEquityRatio: 0.286,
        bonds: 75000000,
        preferredStock: 25000000,
        lastUpdated: "2024-12-31"
    },
    {
        id: 6,
        companyId: 6,
        totalEquity: 1000000000,
        totalDebt: 400000000,
        debtToEquityRatio: 0.4,
        bonds: 100000000,
        preferredStock: 0,
        lastUpdated: "2024-12-31"
    },
    {
        id: 7,
        companyId: 7,
        totalEquity: 700000000,
        totalDebt: 350000000,
        debtToEquityRatio: 0.5,
        bonds: 50000000,
        preferredStock: 0,
        lastUpdated: "2024-12-31"
    },
    {
        id: 8,
        companyId: 8,
        totalEquity: 900000000,
        totalDebt: 300000000,
        debtToEquityRatio: 0.333,
        convertibleBonds: 40000000,
        preferredStock: 20000000,
        lastUpdated: "2024-12-31"
    },
    {
        id: 9,
        companyId: 9,
        totalEquity: 500000000,
        totalDebt: 200000000,
        debtToEquityRatio: 0.4,
        greenBonds: 30000000,
        preferredStock: 0,
        lastUpdated: "2024-12-31"
    },
    {
        id: 10,
        companyId: 10,
        totalEquity: 450000000,
        totalDebt: 200000000,
        debtToEquityRatio: 0.444,
        greenBonds: 25000000,
        preferredStock: 0,
        lastUpdated: "2024-12-31"
    },
    {
        id: 11,
        companyId: 11,
        totalEquity: 1100000000,
        totalDebt: 500000000,
        debtToEquityRatio: 0.455,
        bonds: 75000000,
        preferredStock: 25000000,
        lastUpdated: "2024-12-31"
    },
    {
        id: 12,
        companyId: 12,
        totalEquity: 400000000,
        totalDebt: 150000000,
        debtToEquityRatio: 0.375,
        greenBonds: 20000000,
        preferredStock: 0,
        lastUpdated: "2024-12-31"
    },
    {
        id: 13,
        companyId: 13,
        totalEquity: 650000000,
        totalDebt: 250000000,
        debtToEquityRatio: 0.385,
        convertibleBonds: 30000000,
        preferredStock: 10000000,
        lastUpdated: "2024-12-31"
    }
];


export function getInvestmentExperienceByCompanyId(companyId: number) {
    return InvestmentExperienceData.find(data => data.companyId === companyId) as InvestmentExperience || null;
}

export const InvestmentExperienceData = [
    {
        id: 1,
        companyId: 1,
        strategy: "Early-stage venture capital focusing on disruptive technologies in AI, healthcare, and aerospace.",
        totalInvestments: 204,
        portfolioExits: 89,
        notableInvestments: [
            { name: "True Anomaly", industry: "Aerospace and Defense", date: "2025-04-30", amount: "Undisclosed" },
            { name: "Decagon", industry: "AI/Customer Support", date: "Unknown", amount: "Undisclosed" },
            { name: "SpaceX", industry: "Aerospace", date: "Unknown", amount: "Undisclosed" }
        ],
        averageReturn: "15% annualized (estimated)",
        yearsActive: 12
},
    {
        id: 2,
        companyId: 2,
        strategy: "Investing in diversified financial assets, including banking and asset management funds.",
        totalInvestments: 50,
        portfolioExits: 10,
        notableInvestments: [
            { name: "JPMorgan Chase & Co.", industry: "Banking", date: "Unknown", amount: "Undisclosed" },
            { name: "BlackRock Global Allocation Fund", industry: "Asset Management", date: "Unknown", amount: "Undisclosed" }
        ],
        averageReturn: "10% annualized (estimated)",
        yearsActive: 15
    },
    {
        id: 3,
        companyId: 3,
        strategy: "Investing in renewable energy companies and funds focused on solar, wind, and clean energy technologies.",
        totalInvestments: 30,
        portfolioExits: 5,
        notableInvestments: [
            { name: "NextEra Energy Inc.", industry: "Renewable Energy", date: "Unknown", amount: "Undisclosed" },
            { name: "Invesco Solar ETF", industry: "Renewable Energy Fund", date: "Unknown", amount: "Undisclosed" }
        ],
        averageReturn: "12% annualized (estimated)",
        yearsActive: 10
    },
    {
        id: 4,
        companyId: 4,
        strategy: "Seed and Series A investments in quantum computing startups and related technologies.",
        totalInvestments: 45,
        portfolioExits: 8,
        notableInvestments: [
            { name: "IonQ", industry: "Quantum Computing", date: "2024-10-15", amount: "Undisclosed" },
            { name: "Rigetti Computing", industry: "Quantum Computing", date: "Unknown", amount: "Undisclosed" }
        ],
        averageReturn: "18% annualized (estimated)",
        yearsActive: 8
    },
    {
        id: 5,
        companyId: 5,
        strategy: "Growth-stage investments in biotech, medical devices, and digital health solutions.",
        totalInvestments: 60,
        portfolioExits: 12,
        notableInvestments: [
            { name: "Moderna Inc.", industry: "Biotechnology", date: "Unknown", amount: "Undisclosed" },
            { name: "Teladoc Health", industry: "Telemedicine", date: "2024-09-20", amount: "Undisclosed" }
        ],
        averageReturn: "14% annualized (estimated)",
        yearsActive: 10
    },
    {
        id: 6,
        companyId: 6,
        strategy: "Investing in aerospace manufacturing and space exploration ventures.",
        totalInvestments: 35,
        portfolioExits: 7,
        notableInvestments: [
            { name: "Boeing Co.", industry: "Aerospace", date: "Unknown", amount: "Undisclosed" },
            { name: "Rocket Lab USA", industry: "Space Exploration", date: "2024-11-10", amount: "Undisclosed" }
        ],
        averageReturn: "13% annualized (estimated)",
        yearsActive: 9
    },
    {
        id: 7,
        companyId: 7,
        strategy: "Investing in supply chain technology and global transportation companies.",
        totalInvestments: 40,
        portfolioExits: 6,
        notableInvestments: [
            { name: "FedEx Corp.", industry: "Logistics", date: "Unknown", amount: "Undisclosed" },
            { name: "Flexport", industry: "Supply Chain Tech", date: "2024-08-05", amount: "Undisclosed" }
        ],
        averageReturn: "11% annualized (estimated)",
        yearsActive: 12
    },
    {
        id: 8,
        companyId: 8,
        strategy: "Early and growth-stage investments in cybersecurity and data privacy solutions.",
        totalInvestments: 50,
        portfolioExits: 10,
        notableInvestments: [
            { name: "Palo Alto Networks Inc.", industry: "Cybersecurity", date: "Unknown", amount: "Undisclosed" },
            { name: "CrowdStrike Holdings Inc.", industry: "Cybersecurity", date: "2024-07-15", amount: "Undisclosed" }
        ],
        averageReturn: "16% annualized (estimated)",
        yearsActive: 7
    },
    {
        id: 9,
        companyId: 9,
        strategy: "Investing in electric vehicles, autonomous driving, and urban transit innovations.",
        totalInvestments: 25,
        portfolioExits: 4,
        notableInvestments: [
            { name: "Rivian Automotive Inc.", industry: "Electric Vehicles", date: "2024-06-10", amount: "Undisclosed" },
            { name: "Lyft Inc.", industry: "Ride-Sharing", date: "Unknown", amount: "Undisclosed" }
        ],
        averageReturn: "12% annualized (estimated)",
        yearsActive: 6
    },
    {
        id: 10,
        companyId: 10,
        strategy: "Investing in precision agriculture, sustainable farming, and agritech startups.",
        totalInvestments: 20,
        portfolioExits: 3,
        notableInvestments: [
            { name: "Deere & Co.", industry: "Agricultural Equipment", date: "Unknown", amount: "Undisclosed" },
            { name: "Indigo Agriculture", industry: "Agritech", date: "2024-05-25", amount: "Undisclosed" }
        ],
        averageReturn: "10% annualized (estimated)",
        yearsActive: 5
    },
    {
        id: 11,
        companyId: 11,
        strategy: "Investing in e-commerce platforms, retail tech, and consumer goods companies.",
        totalInvestments: 55,
        portfolioExits: 9,
        notableInvestments: [
            { name: "Walmart Inc.", industry: "Retail", date: "Unknown", amount: "Undisclosed" },
            { name: "Shopify Inc.", industry: "E-commerce", date: "2024-04-12", amount: "Undisclosed" }
        ],
        averageReturn: "11% annualized (estimated)",
        yearsActive: 11
    },
    {
        id: 12,
        companyId: 12,
        strategy: "Investing in biofuels, biomass, and sustainable energy solutions.",
        totalInvestments: 15,
        portfolioExits: 2,
        notableInvestments: [
            { name: "Renewable Energy Group Inc.", industry: "Biofuels", date: "Unknown", amount: "Undisclosed" },
            { name: "Gevo Inc.", industry: "Bioenergy", date: "2024-03-18", amount: "Undisclosed" }
        ],
        averageReturn: "9% annualized (estimated)",
        yearsActive: 4
    },
    {
        id: 13,
        companyId: 13,
        strategy: "Investing in online learning platforms, educational software, and edtech startups.",
        totalInvestments: 30,
        portfolioExits: 5,
        notableInvestments: [
            { name: "Coursera Inc.", industry: "Online Education", date: "2024-02-22", amount: "Undisclosed" },
            { name: "Duolingo Inc.", industry: "Language Learning", date: "Unknown", amount: "Undisclosed" }
        ],
        averageReturn: "13% annualized (estimated)",
        yearsActive: 7
    }
];

export function getHoldingsByCompanyId(companyId: number) {
    return holdingsData.find(holding => holding.companyId === companyId) as HoldingsData || null;
}


export const holdingsData = [
    {
        id: 1,
        companyId: 1,
        items: [
            { fundId: null, name: "Apple Inc.", type: "Stock", relationship: "Direct", accountShares: 10000, carryingAmount: 1500000, ownership: 0.05, classification: "AFS", fairValue: 1600000, isFavorite: false, year: 2025, quarter: "Q1", currency: "TWD" },
            { fundId: 2, name: "Vanguard Total Stock Market Fund", type: "Fund", relationship: "Managed", accountShares: 5000, carryingAmount: 500000, ownership: 0.02, classification: "HTM", fairValue: 510000, isFavorite: false, year: 2025, quarter: "Q1", currency: "TWD" },
            { fundId: null, name: "Tesla Inc.", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 600000, ownership: 0.01, classification: "AFS", fairValue: 620000, isFavorite: false, year: 2025, quarter: "Q1", currency: "TWD" },
            { fundId: 4, name: "SPDR S&P 500 ETF", type: "Fund", relationship: "Managed", accountShares: 3000, carryingAmount: 900000, ownership: 0.03, classification: "AFS", fairValue: 910000, isFavorite: false, year: 2025, quarter: "Q1", currency: "TWD" },
            { fundId: null, name: "Amazon.com Inc.", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 450000, ownership: 0.005, classification: "HTM", fairValue: 460000, isFavorite: false, year: 2025, quarter: "Q1", currency: "TWD" },
            { fundId: null, name: "Microsoft Corp.", type: "Stock", relationship: "Direct", accountShares: 4000, carryingAmount: 1200000, ownership: 0.015, classification: "AFS", fairValue: 1250000, isFavorite: false, year: 2025, quarter: "Q1", currency: "TWD" },
            { fundId: 7, name: "iShares Core MSCI EAFE ETF", type: "Fund", relationship: "Managed", accountShares: 3500, carryingAmount: 700000, ownership: 0.025, classification: "HTM", fairValue: 710000, isFavorite: false, year: 2025, quarter: "Q1", currency: "TWD" },
            { fundId: null, name: "NVIDIA Corp.", type: "Stock", relationship: "Direct", accountShares: 2500, carryingAmount: 800000, ownership: 0.008, classification: "AFS", fairValue: 820000, isFavorite: false, year: 2025, quarter: "Q1", currency: "TWD" },
            { fundId: 9, name: "Fidelity Total Market Index Fund", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 400000, ownership: 0.01, classification: "AFS", fairValue: 410000, isFavorite: false, year: 2025, quarter: "Q1", currency: "TWD" },
            { fundId: null, name: "Alphabet Inc.", type: "Stock", relationship: "Direct", accountShares: 3000, carryingAmount: 900000, ownership: 0.012, classification: "AFS", fairValue: 920000, isFavorite: false, year: 2024, quarter: "Q4", currency: "TWD" }
        ]
    },
    {
        id: 2,
        companyId: 2,
        items: [
            { fundId: null, name: "JPMorgan Chase & Co.", type: "Stock", relationship: "Direct", accountShares: 8000, carryingAmount: 1200000, ownership: 0.04, classification: "AFS", fairValue: 1250000, isFavorite: false, year: 2025, quarter: "Q1", currency: "HKD" },
            { fundId: 11, name: "BlackRock Global Allocation Fund", type: "Fund", relationship: "Managed", accountShares: 4000, carryingAmount: 800000, ownership: 0.03, classification: "HTM", fairValue: 810000, isFavorite: false, year: 2025, quarter: "Q1", currency: "HKD" },
            { fundId: null, name: "Bank of America Corp.", type: "Stock", relationship: "Direct", accountShares: 10000, carryingAmount: 400000, ownership: 0.02, classification: "AFS", fairValue: 420000, isFavorite: false, year: 2025, quarter: "Q1", currency: "HKD" },
            { fundId: 13, name: "Fidelity Balanced Fund", type: "Fund", relationship: "Managed", accountShares: 6000, carryingAmount: 720000, ownership: 0.025, classification: "AFS", fairValue: 730000, isFavorite: false, year: 2025, quarter: "Q1", currency: "HKD" },
            { fundId: null, name: "Goldman Sachs Group Inc.", type: "Stock", relationship: "Direct", accountShares: 3000, carryingAmount: 900000, ownership: 0.015, classification: "HTM", fairValue: 910000, isFavorite: false, year: 2025, quarter: "Q1", currency: "HKD" },
            { fundId: 15, name: "T. Rowe Price Growth Stock Fund", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 400000, ownership: 0.01, classification: "AFS", fairValue: 410000, isFavorite: false, year: 2025, quarter: "Q1", currency: "HKD" },
            { fundId: null, name: "Citigroup Inc.", type: "Stock", relationship: "Direct", accountShares: 5000, carryingAmount: 300000, ownership: 0.012, classification: "AFS", fairValue: 310000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 17, name: "Vanguard High Dividend Yield ETF", type: "Fund", relationship: "Managed", accountShares: 3500, carryingAmount: 525000, ownership: 0.018, classification: "HTM", fairValue: 530000, isFavorite: false, year: 2025, quarter: "Q1", currency: "HKD" },
            { fundId: null, name: "Morgan Stanley", type: "Stock", relationship: "Direct", accountShares: 2500, carryingAmount: 375000, ownership: 0.009, classification: "AFS", fairValue: 380000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 19, name: "Schwab U.S. Dividend Equity ETF", type: "Fund", relationship: "Managed", accountShares: 3000, carryingAmount: 450000, ownership: 0.015, classification: "AFS", fairValue: 460000, isFavorite: false, year: 2025, quarter: "Q1", currency: "HKD" },
            { fundId: null, name: "Wells Fargo & Co.", type: "Stock", relationship: "Direct", accountShares: 4000, carryingAmount: 600000, ownership: 0.02, classification: "AFS", fairValue: 610000, isFavorite: false, year: 2024, quarter: "Q3", currency: "USD" }
        ]
    },
    {
        id: 3,
        companyId: 3,
        items: [
            { fundId: null, name: "NextEra Energy Inc.", type: "Stock", relationship: "Direct", accountShares: 5000, carryingAmount: 350000, ownership: 0.03, classification: "AFS", fairValue: 360000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 21, name: "Invesco Solar ETF", type: "Fund", relationship: "Managed", accountShares: 4000, carryingAmount: 200000, ownership: 0.02, classification: "HTM", fairValue: 210000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "First Solar Inc.", type: "Stock", relationship: "Direct", accountShares: 3000, carryingAmount: 240000, ownership: 0.015, classification: "AFS", fairValue: 250000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 23, name: "ARK Clean Energy Fund", type: "Fund", relationship: "Managed", accountShares: 2500, carryingAmount: 300000, ownership: 0.01, classification: "AFS", fairValue: 310000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Enphase Energy Inc.", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 280000, ownership: 0.008, classification: "HTM", fairValue: 290000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 25, name: "iShares Global Clean Energy ETF", type: "Fund", relationship: "Managed", accountShares: 3500, carryingAmount: 420000, ownership: 0.012, classification: "AFS", fairValue: 430000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Vestas Wind Systems A/S", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 180000, ownership: 0.007, classification: "AFS", fairValue: 185000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 27, name: "First Trust NASDAQ Clean Edge Green Energy Index Fund", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 260000, ownership: 0.009, classification: "HTM", fairValue: 270000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "SolarEdge Technologies Inc.", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 150000, ownership: 0.005, classification: "AFS", fairValue: 155000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Ormat Technologies Inc.", type: "Stock", relationship: "Direct", accountShares: 1200, carryingAmount: 144000, ownership: 0.006, classification: "AFS", fairValue: 148000, isFavorite: false, year: 2024, quarter: "Q2", currency: "USD" }
        ]
    },
    {
        id: 4,
        companyId: 4,
        items: [
            { fundId: null, name: "IonQ", type: "Stock", relationship: "Direct", accountShares: 6000, carryingAmount: 360000, ownership: 0.025, classification: "AFS", fairValue: 370000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Rigetti Computing", type: "Stock", relationship: "Direct", accountShares: 4000, carryingAmount: 280000, ownership: 0.018, classification: "AFS", fairValue: 290000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 31, name: "ARK Innovation ETF", type: "Fund", relationship: "Managed", accountShares: 3000, carryingAmount: 450000, ownership: 0.015, classification: "HTM", fairValue: 460000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Honeywell International Inc.", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 400000, ownership: 0.01, classification: "AFS", fairValue: 410000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 33, name: "Vanguard Information Technology ETF", type: "Fund", relationship: "Managed", accountShares: 2500, carryingAmount: 625000, ownership: 0.012, classification: "AFS", fairValue: 630000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "IBM", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 270000, ownership: 0.008, classification: "HTM", fairValue: 275000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 35, name: "iShares U.S. Technology ETF", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 360000, ownership: 0.009, classification: "AFS", fairValue: 365000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "D-Wave Quantum Inc.", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 150000, ownership: 0.005, classification: "AFS", fairValue: 155000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Quantum Computing Inc.", type: "Stock", relationship: "Direct", accountShares: 800, carryingAmount: 120000, ownership: 0.004, classification: "AFS", fairValue: 125000, isFavorite: false, year: 2024, quarter: "Q1", currency: "USD" }
        ]
    },
    {
        id: 5,
        companyId: 5,
        items: [
            { fundId: null, name: "Moderna Inc.", type: "Stock", relationship: "Direct", accountShares: 5000, carryingAmount: 750000, ownership: 0.02, classification: "AFS", fairValue: 760000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Teladoc Health", type: "Stock", relationship: "Direct", accountShares: 3000, carryingAmount: 450000, ownership: 0.015, classification: "AFS", fairValue: 460000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 39, name: "Vanguard Health Care ETF", type: "Fund", relationship: "Managed", accountShares: 4000, carryingAmount: 800000, ownership: 0.018, classification: "HTM", fairValue: 810000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Johnson & Johnson", type: "Stock", relationship: "Direct", accountShares: 2500, carryingAmount: 500000, ownership: 0.01, classification: "AFS", fairValue: 510000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 41, name: "iShares U.S. Healthcare ETF", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 400000, ownership: 0.012, classification: "AFS", fairValue: 410000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Pfizer Inc.", type: "Stock", relationship: "Direct", accountShares: 3500, carryingAmount: 525000, ownership: 0.014, classification: "HTM", fairValue: 530000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 43, name: "Health Care Select Sector SPDR Fund", type: "Fund", relationship: "Managed", accountShares: 1500, carryingAmount: 300000, ownership: 0.008, classification: "AFS", fairValue: 305000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Intuitive Surgical Inc.", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 250000, ownership: 0.005, classification: "AFS", fairValue: 255000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Merck & Co. Inc.", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 400000, ownership: 0.01, classification: "AFS", fairValue: 410000, isFavorite: false, year: 2024, quarter: "Q4", currency: "USD" }
        ]
    },
    {
        id: 6,
        companyId: 6,
        items: [
            { fundId: null, name: "Boeing Co.", type: "Stock", relationship: "Direct", accountShares: 4000, carryingAmount: 600000, ownership: 0.018, classification: "AFS", fairValue: 610000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Rocket Lab USA", type: "Stock", relationship: "Direct", accountShares: 3000, carryingAmount: 450000, ownership: 0.015, classification: "AFS", fairValue: 460000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 47, name: "SPDR S&P Aerospace & Defense ETF", type: "Fund", relationship: "Managed", accountShares: 2500, carryingAmount: 500000, ownership: 0.012, classification: "HTM", fairValue: 510000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Lockheed Martin Corp.", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 400000, ownership: 0.01, classification: "AFS", fairValue: 410000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 49, name: "iShares U.S. Aerospace & Defense ETF", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 360000, ownership: 0.009, classification: "AFS", fairValue: 365000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Northrop Grumman Corp.", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 300000, ownership: 0.008, classification: "HTM", fairValue: 305000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 51, name: "Invesco Aerospace & Defense ETF", type: "Fund", relationship: "Managed", accountShares: 1000, carryingAmount: 200000, ownership: 0.005, classification: "AFS", fairValue: 205000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Raytheon Technologies Corp.", type: "Stock", relationship: "Direct", accountShares: 1800, carryingAmount: 360000, ownership: 0.009, classification: "AFS", fairValue: 370000, isFavorite: false, year: 2024, quarter: "Q3", currency: "USD" }
        ]
    },
    {
        id: 7,
        companyId: 7,
        items: [
            { fundId: null, name: "FedEx Corp.", type: "Stock", relationship: "Direct", accountShares: 3000, carryingAmount: 450000, ownership: 0.015, classification: "AFS", fairValue: 460000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "United Parcel Service Inc.", type: "Stock", relationship: "Direct", accountShares: 2500, carryingAmount: 400000, ownership: 0.012, classification: "AFS", fairValue: 410000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 54, name: "iShares Transportation Average ETF", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 360000, ownership: 0.01, classification: "HTM", fairValue: 365000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "C.H. Robinson Worldwide Inc.", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 300000, ownership: 0.008, classification: "AFS", fairValue: 305000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 56, name: "SPDR S&P Transportation ETF", type: "Fund", relationship: "Managed", accountShares: 1000, carryingAmount: 200000, ownership: 0.005, classification: "AFS", fairValue: 205000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "XPO Logistics Inc.", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 280000, ownership: 0.007, classification: "HTM", fairValue: 285000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 58, name: "Invesco Dynamic Transportation ETF", type: "Fund", relationship: "Managed", accountShares: 1500, carryingAmount: 270000, ownership: 0.006, classification: "AFS", fairValue: 275000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "J.B. Hunt Transport Services Inc.", type: "Stock", relationship: "Direct", accountShares: 1200, carryingAmount: 240000, ownership: 0.006, classification: "AFS", fairValue: 245000, isFavorite: false, year: 2024, quarter: "Q2", currency: "USD" }
        ]
    },
    {
        id: 8,
        companyId: 8,
        items: [
            { fundId: null, name: "Palo Alto Networks Inc.", type: "Stock", relationship: "Direct", accountShares: 3000, carryingAmount: 600000, ownership: 0.015, classification: "AFS", fairValue: 610000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "CrowdStrike Holdings Inc.", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 400000, ownership: 0.01, classification: "AFS", fairValue: 410000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 61, name: "Global X Cybersecurity ETF", type: "Fund", relationship: "Managed", accountShares: 2500, carryingAmount: 375000, ownership: 0.012, classification: "HTM", fairValue: 380000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Fortinet Inc.", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 300000, ownership: 0.008, classification: "AFS", fairValue: 305000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 63, name: "First Trust NASDAQ Cybersecurity ETF", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 360000, ownership: 0.009, classification: "AFS", fairValue: 365000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Zscaler Inc.", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 200000, ownership: 0.005, classification: "HTM", fairValue: 205000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 65, name: "iShares Cybersecurity and Tech ETF", type: "Fund", relationship: "Managed", accountShares: 1500, carryingAmount: 270000, ownership: 0.007, classification: "AFS", fairValue: 275000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Check Point Software Technologies Ltd.", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 200000, ownership: 0.005, classification: "AFS", fairValue: 205000, isFavorite: false, year: 2024, quarter: "Q1", currency: "USD" }
        ]
    },
    {
        id: 9,
        companyId: 9,
        items: [
            { fundId: null, name: "Rivian Automotive Inc.", type: "Stock", relationship: "Direct", accountShares: 3000, carryingAmount: 360000, ownership: 0.015, classification: "AFS", fairValue: 365000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Lyft Inc.", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 280000, ownership: 0.01, classification: "AFS", fairValue: 285000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 68, name: "ARK Autonomous Technology & Robotics ETF", type: "Fund", relationship: "Managed", accountShares: 2500, carryingAmount: 375000, ownership: 0.012, classification: "HTM", fairValue: 380000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Uber Technologies Inc.", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 300000, ownership: 0.008, classification: "AFS", fairValue: 305000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 70, name: "Invesco Electric Vehicle Metals ETF", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 360000, ownership: 0.009, classification: "AFS", fairValue: 365000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Li Auto Inc.", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 200000, ownership: 0.005, classification: "HTM", fairValue: 205000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 72, name: "Global X Autonomous & Electric Vehicles ETF", type: "Fund", relationship: "Managed", accountShares: 1500, carryingAmount: 270000, ownership: 0.007, classification: "AFS", fairValue: 275000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "NIO Inc.", type: "Stock", relationship: "Direct", accountShares: 1200, carryingAmount: 180000, ownership: 0.006, classification: "AFS", fairValue: 185000, isFavorite: false, year: 2024, quarter: "Q4", currency: "USD" }
        ]
    },
    {
        id: 10,
        companyId: 10,
        items: [
            { fundId: null, name: "Deere & Co.", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 400000, ownership: 0.01, classification: "AFS", fairValue: 410000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Corteva Inc.", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 300000, ownership: 0.008, classification: "AFS", fairValue: 305000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 75, name: "Invesco DB Agriculture Fund", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 360000, ownership: 0.009, classification: "HTM", fairValue: 365000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Archer-Daniels-Midland Co.", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 200000, ownership: 0.005, classification: "AFS", fairValue: 205000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 77, name: "Global X AgTech & Food Innovation ETF", type: "Fund", relationship: "Managed", accountShares: 1500, carryingAmount: 270000, ownership: 0.007, classification: "AFS", fairValue: 275000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Bunge Ltd.", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 180000, ownership: 0.004, classification: "HTM", fairValue: 185000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 79, name: "iShares MSCI Global Agriculture Producers ETF", type: "Fund", relationship: "Managed", accountShares: 1000, carryingAmount: 200000, ownership: 0.005, classification: "AFS", fairValue: 205000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Nutrien Ltd.", type: "Stock", relationship: "Direct", accountShares: 800, carryingAmount: 160000, ownership: 0.004, classification: "AFS", fairValue: 165000, isFavorite: false, year: 2024, quarter: "Q3", currency: "USD" }
        ]
    },
    {
        id: 11,
        companyId: 11,
        items: [
            { fundId: null, name: "Walmart Inc.", type: "Stock", relationship: "Direct", accountShares: 4000, carryingAmount: 600000, ownership: 0.015, classification: "AFS", fairValue: 610000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Shopify Inc.", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 400000, ownership: 0.01, classification: "AFS", fairValue: 410000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 82, name: "SPDR S&P Retail ETF", type: "Fund", relationship: "Managed", accountShares: 2500, carryingAmount: 375000, ownership: 0.012, classification: "HTM", fairValue: 380000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Target Corp.", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 300000, ownership: 0.008, classification: "AFS", fairValue: 305000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 84, name: "iShares U.S. Consumer Services ETF", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 360000, ownership: 0.009, classification: "AFS", fairValue: 365000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Costco Wholesale Corp.", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 250000, ownership: 0.005, classification: "HTM", fairValue: 255000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 86, name: "Invesco Dynamic Retail ETF", type: "Fund", relationship: "Managed", accountShares: 1500, carryingAmount: 270000, ownership: 0.007, classification: "AFS", fairValue: 275000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Dollar General Corp.", type: "Stock", relationship: "Direct", accountShares: 1200, carryingAmount: 240000, ownership: 0.006, classification: "AFS", fairValue: 245000, isFavorite: false, year: 2024, quarter: "Q2", currency: "USD" }
        ]
    },
    {
        id: 12,
        companyId: 12,
        items: [
            { fundId: null, name: "Renewable Energy Group Inc.", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 300000, ownership: 0.01, classification: "AFS", fairValue: 305000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Gevo Inc.", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 225000, ownership: 0.008, classification: "AFS", fairValue: 230000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 89, name: "Invesco WilderHill Clean Energy ETF", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 360000, ownership: 0.009, classification: "HTM", fairValue: 365000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Neste Oyj", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 200000, ownership: 0.005, classification: "AFS", fairValue: 205000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 91, name: "First Trust Global Wind Energy ETF", type: "Fund", relationship: "Managed", accountShares: 1500, carryingAmount: 270000, ownership: 0.007, classification: "AFS", fairValue: 275000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Aemetis Inc.", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 150000, ownership: 0.004, classification: "HTM", fairValue: 155000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 93, name: "iShares Clean Energy ETF", type: "Fund", relationship: "Managed", accountShares: 1000, carryingAmount: 200000, ownership: 0.005, classification: "AFS", fairValue: 205000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Plug Power Inc.", type: "Stock", relationship: "Direct", accountShares: 800, carryingAmount: 120000, ownership: 0.004, classification: "AFS", fairValue: 125000, isFavorite: false, year: 2024, quarter: "Q1", currency: "USD" }
        ]
    },
    {
        id: 13,
        companyId: 13,
        items: [
            { fundId: null, name: "Coursera Inc.", type: "Stock", relationship: "Direct", accountShares: 2500, carryingAmount: 375000, ownership: 0.012, classification: "AFS", fairValue: 380000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Duolingo Inc.", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 300000, ownership: 0.01, classification: "AFS", fairValue: 305000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 96, name: "ARK Next Generation Internet ETF", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 360000, ownership: 0.009, classification: "HTM", fairValue: 365000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Chegg Inc.", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 225000, ownership: 0.008, classification: "AFS", fairValue: 230000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 98, name: "Invesco Dynamic Software ETF", type: "Fund", relationship: "Managed", accountShares: 1500, carryingAmount: 270000, ownership: 0.007, classification: "AFS", fairValue: 275000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "2U Inc.", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 150000, ownership: 0.005, classification: "HTM", fairValue: 155000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: 100, name: "iShares Future Tech ETF", type: "Fund", relationship: "Managed", accountShares: 1000, carryingAmount: 200000, ownership: 0.005, classification: "AFS", fairValue: 205000, isFavorite: false, year: 2025, quarter: "Q1", currency: "USD" },
            { fundId: null, name: "Udemy Inc.", type: "Stock", relationship: "Direct", accountShares: 800, carryingAmount: 120000, ownership: 0.004, classification: "AFS", fairValue: 125000, isFavorite: false, year: 2024, quarter: "Q4", currency: "USD" }
        ]
    }
];

export const companyDetailsData = [
    {
        id: 1,
        name: "Acme Corporation",
        industry: "Technology",
        location: "Japan",
        marketCap: 2500000000,
        headquarters: "San Francisco, CA, USA",
        email: "contact@acme.com",
        phone: "+1-415-555-0101",
        address: "123 Tech St, San Francisco, CA 94105",
        investmentPreference: ["Stock", "Venture Capital", "Fund"]
    },
    {
        id: 2,
        name: "Blue Horizon Ltd.",
        industry: "Finance",
        location: "Taiwan",
        marketCap: 1800000000,
        headquarters: "New York, NY, USA",
        email: "info@bluehorizon.com",
        phone: "+1-212-555-0202",
        address: "456 Finance Ave, New York, NY 10001",
        investmentPreference: ["Stock", "Fund", "Private Equity"]
    },
    {
        id: 3,
        name: "Green Energy Solutions",
        industry: "Renewable Energy",
        location: "Japan",
        marketCap: 900000000,
        headquarters: "Austin, TX, USA",
        email: "support@greenenergy.com",
        phone: "+1-512-555-0303",
        address: "789 Energy Blvd, Austin, TX 78701",
        investmentPreference: ["Venture Capital", "Fund", "Alternative"]
    },
    {
        id: 4,
        name: "Quantum Dynamics",
        industry: "Quantum Computing",
        location: "Taiwan",
        marketCap: 1200000000,
        headquarters: "Boston, MA, USA",
        email: "info@quantumdynamics.com",
        phone: "+1-617-555-0404",
        address: "101 Quantum Rd, Boston, MA 02115",
        investmentPreference: ["Venture Capital", "Fund", "Private Equity"]
    },
    {
        id: 5,
        name: "Health Innovations Group",
        industry: "Healthcare",
        location: "Taiwan",
        marketCap: 2000000000,
        headquarters: "Chicago, IL, USA",
        email: "contact@healthinnovations.com",
        phone: "+1-312-555-0505",
        address: "234 Health Dr, Chicago, IL 60601",
        investmentPreference: ["Stock", "Private Equity", "Fund"]
    },
    {
        id: 6,
        name: "Skyline Aerospace",
        industry: "Aerospace",
        location: "Taiwan",
        marketCap: 1500000000,
        headquarters: "Seattle, WA, USA",
        email: "info@skylineaerospace.com",
        phone: "+1-206-555-0606",
        address: "345 Aerospace Way, Seattle, WA 98101",
        investmentPreference: ["Stock", "Private Equity", "Bond"]
    },
    {
        id: 7,
        name: "Global Logistics Inc.",
        industry: "Logistics",
        location: "Taiwan",
        marketCap: 1100000000,
        headquarters: "Miami, FL, USA",
        email: "contact@globallogistics.com",
        phone: "+1-305-555-0707",
        address: "456 Logistics Ln, Miami, FL 33101",
        investmentPreference: ["Bond", "Fund", "Alternative"]
    },
    {
        id: 8,
        name: "CyberShield Technologies",
        industry: "Cybersecurity",
        location: "Taiwan",
        marketCap: 1300000000,
        headquarters: "Palo Alto, CA, USA",
        email: "support@cybershield.com",
        phone: "+1-650-555-0808",
        address: "567 Cyber St, Palo Alto, CA 94301",
        investmentPreference: ["Venture Capital", "Fund", "Stock"]
    },
    {
        id: 9,
        name: "Urban Mobility Solutions",
        industry: "Transportation",
        marketCap: 800000000,
        location: "Taiwan",
        headquarters: "Los Angeles, CA, USA",
        email: "info@urbanmobility.com",
        phone: "+1-213-555-0909",
        address: "678 Mobility Ave, Los Angeles, CA 90001",
        investmentPreference: ["Venture Capital", "Alternative", "Fund"]
    },
    {
        id: 10,
        name: "AgriTech Ventures",
        industry: "Agriculture",
        marketCap: 700000000,
        location: "Taiwan",
        headquarters: "Des Moines, IA, USA",
        email: "contact@agritechventures.com",
        phone: "+1-515-555-1010",
        address: "789 Agri St, Des Moines, IA 50309",
        investmentPreference: ["Alternative", "Fund", "Venture Capital"]
    },
    {
        id: 11,
        name: "Smart Retail Corp.",
        industry: "Retail",
        marketCap: 1700000000,
        location: "Singapore",
        headquarters: "Dallas, TX, USA",
        email: "info@smartretail.com",
        phone: "+1-214-555-1111",
        address: "890 Retail Rd, Dallas, TX 75201",
        investmentPreference: ["Stock", "Private Equity", "Fund"]
    },
    {
        id: 12,
        name: "BioEnergy Partners",
        industry: "Bioenergy",
        marketCap: 600000000,
        location: "Singapore",
        headquarters: "Denver, CO, USA",
        email: "support@bioenergypartners.com",
        phone: "+1-303-555-1212",
        address: "901 Bioenergy Blvd, Denver, CO 80202",
        investmentPreference: ["Alternative", "Venture Capital", "Fund"]
    },
    {
        id: 13,
        name: "EdTech Innovators",
        industry: "Education Technology",
        marketCap: 950000000,
        location: "Hong Kong",
        headquarters: "San Diego, CA, USA",
        email: "info@edtechinnovators.com",
        phone: "+1-619-555-1313",
        address: "234 Education Dr, San Diego, CA 92101",
        investmentPreference: ["Venture Capital", "Fund", "Alternative"]
    }
];



export const fundData: FundData[] = [
    {
        id: 1,
        name: "Global Equity Growth",
        type: "Equity",
        isinCode: 1001,
        nav: 25.43,
        returnRate: 8.5,
        lowestNav: 20.12,
        highestNav: 27.89,
        performance: [
            { year: 2023, fundReturn: 7.8, benchmarkReturn: 7.0 },
            { year: 2024, fundReturn: 9.2, benchmarkReturn: 8.5 },
            { year: 2025, fundReturn: null, benchmarkReturn: 6.8 },
        ],
        historicalPrices: [
            { date: "2025-01-01", nav: 24.5 },
            { date: "2025-02-01", nav: 24.8 },
            { date: "2025-03-01", nav: 25.1 },
            { date: "2025-04-01", nav: 25.3 },
            { date: "2025-05-01", nav: 25.43 },
        ],
        relatedIsinCode: ["1002", "1003"],
    },
    {
        id: 2,
        name: "US Bond Income",
        type: "Bond",
        isinCode: 1002,
        nav: 15.67,
        returnRate: 4.2,
        lowestNav: 14.5,
        highestNav: 16.2,
        performance: [
            { year: 2023, fundReturn: 3.5, benchmarkReturn: 3.8 },
            { year: 2024, fundReturn: 4.0, benchmarkReturn: 4.1 },
            { year: 2025, fundReturn: 4.5, benchmarkReturn: 4.0 },
        ],
        historicalPrices: [
            { date: "2025-01-01", nav: 15.4 },
            { date: "2025-02-01", nav: 15.5 },
            { date: "2025-03-01", nav: 15.6 },
            { date: "2025-04-01", nav: 15.65 },
            { date: "2025-05-01", nav: 15.67 },
        ],
        relatedIsinCode: ["1001", "1004"],
    },
    {
        id: 3,
        name: "Balanced Growth Fund",
        type: "Balanced",
        isinCode: 1003,
        nav: 18.92,
        returnRate: 6.8,
        lowestNav: 17.0,
        highestNav: 19.5,
        performance: [
            { year: 2023, fundReturn: 6.0, benchmarkReturn: 5.5 },
            { year: 2024, fundReturn: 7.1, benchmarkReturn: 6.8 },
            { year: 2025, fundReturn: null, benchmarkReturn: 6.0 },
        ],
        historicalPrices: [
            { date: "2025-01-01", nav: 18.5 },
            { date: "2025-02-01", nav: 18.7 },
            { date: "2025-03-01", nav: 18.8 },
            { date: "2025-04-01", nav: 18.85 },
            { date: "2025-05-01", nav: 18.92 },
        ],
        relatedIsinCode: ["1001", "1005"],
    },
    {
        id: 4,
        name: "Tech Innovators Fund",
        type: "Equity",
        isinCode: 1004,
        nav: 32.15,
        returnRate: 12.3,
        lowestNav: 28.0,
        highestNav: 34.6,
        performance: [
            { year: 2023, fundReturn: 10.5, benchmarkReturn: 9.8 },
            { year: 2024, fundReturn: 13.0, benchmarkReturn: 11.5 },
            { year: 2025, fundReturn: null, benchmarkReturn: 10.2 },
        ],
        historicalPrices: [
            { date: "2025-01-01", nav: 31.0 },
            { date: "2025-02-01", nav: 31.5 },
            { date: "2025-03-01", nav: 31.8 },
            { date: "2025-04-01", nav: 32.0 },
            { date: "2025-05-01", nav: 32.15 },
        ],
        relatedIsinCode: ["1002", "1006"],
    },
    {
        id: 5,
        name: "Emerging Markets Fund",
        type: "Equity",
        isinCode: 1005,
        nav: 22.78,
        returnRate: 9.7,
        lowestNav: 19.5,
        highestNav: 24.0,
        performance: [
            { year: 2023, fundReturn: 8.2, benchmarkReturn: 7.5 },
            { year: 2024, fundReturn: 10.1, benchmarkReturn: 9.0 },
            { year: 2025, fundReturn: null, benchmarkReturn: 8.5 },
        ],
        historicalPrices: [
            { date: "2025-01-01", nav: 22.0 },
            { date: "2025-02-01", nav: 22.3 },
            { date: "2025-03-01", nav: 22.5 },
            { date: "2025-04-01", nav: 22.6 },
            { date: "2025-05-01", nav: 22.78 },
        ],
        relatedIsinCode: ["1003", "1007"],
    },
    {
        id: 6,
        name: "Corporate Bond Fund",
        type: "Bond",
        isinCode: 1006,
        nav: 14.23,
        returnRate: 3.9,
        lowestNav: 13.8,
        highestNav: 14.5,
        performance: [
            { year: 2023, fundReturn: 3.2, benchmarkReturn: 3.5 },
            { year: 2024, fundReturn: 4.0, benchmarkReturn: 3.8 },
            { year: 2025, fundReturn: 3.8, benchmarkReturn: 3.7 },
        ],
        historicalPrices: [
            { date: "2025-01-01", nav: 14.0 },
            { date: "2025-02-01", nav: 14.1 },
            { date: "2025-03-01", nav: 14.15 },
            { date: "2025-04-01", nav: 14.2 },
            { date: "2025-05-01", nav: 14.23 },
        ],
        relatedIsinCode: ["1004", "1008"],
    },
    {
        id: 7,
        name: "Small Cap Value",
        type: "Equity",
        isinCode: 1007,
        nav: 19.45,
        returnRate: 7.4,
        lowestNav: 17.2,
        highestNav: 20.1,
        performance: [
            { year: 2023, fundReturn: 6.5, benchmarkReturn: 6.0 },
            { year: 2024, fundReturn: 7.8, benchmarkReturn: 7.2 },
            { year: 2025, fundReturn: null, benchmarkReturn: 6.5 },
        ],
        historicalPrices: [
            { date: "2025-01-01", nav: 19.0 },
            { date: "2025-02-01", nav: 19.2 },
            { date: "2025-03-01", nav: 19.3 },
            { date: "2025-04-01", nav: 19.4 },
            { date: "2025-05-01", nav: 19.45 },
        ],
        relatedIsinCode: ["1005", "1009"],
    },
    {
        id: 8,
        name: "High Yield Bond",
        type: "Bond",
        isinCode: 1008,
        nav: 16.88,
        returnRate: 5.1,
        lowestNav: 15.9,
        highestNav: 17.3,
        performance: [
            { year: 2023, fundReturn: 4.8, benchmarkReturn: 4.5 },
            { year: 2024, fundReturn: 5.3, benchmarkReturn: 5.0 },
            { year: 2025, fundReturn: 5.0, benchmarkReturn: 4.8 },
        ],
        historicalPrices: [
            { date: "2025-01-01", nav: 16.6 },
            { date: "2025-02-01", nav: 16.7 },
            { date: "2025-03-01", nav: 16.75 },
            { date: "2025-04-01", nav: 16.8 },
            { date: "2025-05-01", nav: 16.88 },
        ],
        relatedIsinCode: ["1006", "1010"],
    },
    {
        id: 9,
        name: "International Equity",
        type: "Equity",
        isinCode: 1009,
        nav: 21.34,
        returnRate: 8.9,
        lowestNav: 19.0,
        highestNav: 22.5,
        performance: [
            { year: 2023, fundReturn: 7.5, benchmarkReturn: 7.0 },
            { year: 2024, fundReturn: 9.0, benchmarkReturn: 8.2 },
            { year: 2025, fundReturn: null, benchmarkReturn: 7.8 },
        ],
        historicalPrices: [
            { date: "2025-01-01", nav: 20.8 },
            { date: "2025-02-01", nav: 21.0 },
            { date: "2025-03-01", nav: 21.1 },
            { date: "2025-04-01", nav: 21.2 },
            { date: "2025-05-01", nav: 21.34 },
        ],
        relatedIsinCode: ["1007", "1011"],
    },
    {
        id: 10,
        name: "Dividend Income Fund",
        type: "Equity",
        isinCode: 1010,
        nav: 17.56,
        returnRate: 6.2,
        lowestNav: 16.5,
        highestNav: 18.0,
        performance: [
            { year: 2023, fundReturn: 5.8, benchmarkReturn: 5.5 },
            { year: 2024, fundReturn: 6.5, benchmarkReturn: 6.0 },
            { year: 2025, fundReturn: null, benchmarkReturn: 5.8 },
        ],
        historicalPrices: [
            { date: "2025-01-01", nav: 17.3 },
            { date: "2025-02-01", nav: 17.4 },
            { date: "2025-03-01", nav: 17.45 },
            { date: "2025-04-01", nav: 17.5 },
            { date: "2025-05-01", nav: 17.56 },
        ],
        relatedIsinCode: ["1008", "1012"],
    },
    {
        id: 11,
        name: "Global Bond Fund",
        type: "Bond",
        isinCode: 1011,
        nav: 13.45,
        returnRate: 3.7,
        lowestNav: 13.0,
        highestNav: 13.8,
        performance: [
            { year: 2023, fundReturn: 3.0, benchmarkReturn: 3.2 },
            { year: 2024, fundReturn: 3.8, benchmarkReturn: 3.5 },
            { year: 2025, fundReturn: 3.6, benchmarkReturn: 3.4 },
        ],
        historicalPrices: [
            { date: "2025-01-01", nav: 13.2 },
            { date: "2025-02-01", nav: 13.3 },
            { date: "2025-03-01", nav: 13.35 },
            { date: "2025-04-01", nav: 13.4 },
            { date: "2025-05-01", nav: 13.45 },
        ],
        relatedIsinCode: ["1009", "1013"],
    },
    {
        id: 12,
        name: "Growth and Income",
        type: "Balanced",
        isinCode: 1012,
        nav: 20.12,
        returnRate: 7.0,
        lowestNav: 18.5,
        highestNav: 21.0,
        performance: [
            { year: 2023, fundReturn: 6.2, benchmarkReturn: 5.8 },
            { year: 2024, fundReturn: 7.3, benchmarkReturn: 6.5 },
            { year: 2025, fundReturn: null, benchmarkReturn: 6.2 },
        ],
        historicalPrices: [
            { date: "2025-01-01", nav: 19.8 },
            { date: "2025-02-01", nav: 19.9 },
            { date: "2025-03-01", nav: 20.0 },
            { date: "2025-04-01", nav: 20.1 },
            { date: "2025-05-01", nav: 20.12 },
        ],
        relatedIsinCode: ["1010", "1014"],
    },
    {
        id: 13,
        name: "Tech Growth Fund",
        type: "Equity",
        isinCode: 1013,
        nav: 28.67,
        returnRate: 11.5,
        lowestNav: 25.0,
        highestNav: 30.2,
        performance: [
            { year: 2023, fundReturn: 10.0, benchmarkReturn: 9.5 },
            { year: 2024, fundReturn: 12.0, benchmarkReturn: 10.8 },
            { year: 2025, fundReturn: null, benchmarkReturn: 10.0 },
        ],
        historicalPrices: [
            { date: "2025-01-01", nav: 28.0 },
            { date: "2025-02-01", nav: 28.3 },
            { date: "2025-03-01", nav: 28.5 },
            { date: "2025-04-01", nav: 28.6 },
            { date: "2025-05-01", nav: 28.67 },
        ],
        relatedIsinCode: ["1011", "1015"],
    },
    {
        id: 14,
        name: "Municipal Bond Fund",
        type: "Bond",
        isinCode: 1014,
        nav: 12.89,
        returnRate: 3.4,
        lowestNav: 12.5,
        highestNav: 13.1,
        performance: [
            { year: 2023, fundReturn: 2.8, benchmarkReturn: 3.0 },
            { year: 2024, fundReturn: 3.5, benchmarkReturn: 3.2 },
            { year: 2025, fundReturn: 3.3, benchmarkReturn: 3.1 },
        ],
        historicalPrices: [
            { date: "2025-01-01", nav: 12.7 },
            { date: "2025-02-01", nav: 12.75 },
            { date: "2025-03-01", nav: 12.8 },
            { date: "2025-04-01", nav: 12.85 },
            { date: "2025-05-01", nav: 12.89 },
        ],
        relatedIsinCode: ["1012", "1016"],
    },
    {
        id: 15,
        name: "Value Equity Fund",
        type: "Equity",
        isinCode: 1015,
        nav: 23.12,
        returnRate: 8.0,
        lowestNav: 21.0,
        highestNav: 24.0,
        performance: [
            { year: 2023, fundReturn: 7.0, benchmarkReturn: 6.5 },
            { year: 2024, fundReturn: 8.2, benchmarkReturn: 7.8 },
            { year: 2025, fundReturn: null, benchmarkReturn: 7.0 },
        ],
        historicalPrices: [
            { date: "2025-01-01", nav: 22.8 },
            { date: "2025-02-01", nav: 22.9 },
            { date: "2025-03-01", nav: 23.0 },
            { date: "2025-04-01", nav: 23.1 },
            { date: "2025-05-01", nav: 23.12 },
        ],
        relatedIsinCode: ["1013", "1017"],
    },
    {
        id: 16,
        name: "Short-Term Bond",
        type: "Bond",
        isinCode: 1016,
        nav: 11.23,
        returnRate: 2.9,
        lowestNav: 11.0,
        highestNav: 11.5,
        performance: [
            { year: 2023, fundReturn: 2.5, benchmarkReturn: 2.8 },
            { year: 2024, fundReturn: 3.0, benchmarkReturn: 2.9 },
            { year: 2025, fundReturn: 2.8, benchmarkReturn: 2.7 },
        ],
        historicalPrices: [
            { date: "2025-01-01", nav: 11.1 },
            { date: "2025-02-01", nav: 11.15 },
            { date: "2025-03-01", nav: 11.2 },
            { date: "2025-04-01", nav: 11.22 },
            { date: "2025-05-01", nav: 11.23 },
        ],
        relatedIsinCode: ["1014", "1018"],
    },
    {
        id: 17,
        name: "Asia Equity Fund",
        type: "Equity",
        isinCode: 1017,
        nav: 26.45,
        returnRate: 10.2,
        lowestNav: 23.5,
        highestNav: 27.8,
        performance: [
            { year: 2023, fundReturn: 9.0, benchmarkReturn: 8.5 },
            { year: 2024, fundReturn: 10.5, benchmarkReturn: 9.8 },
            { year: 2025, fundReturn: null, benchmarkReturn: 9.0 },
        ],
        historicalPrices: [
            { date: "2025-01-01", nav: 26.0 },
            { date: "2025-02-01", nav: 26.2 },
            { date: "2025-03-01", nav: 26.3 },
            { date: "2025-04-01", nav: 26.4 },
            { date: "2025-05-01", nav: 26.45 },
        ],
        relatedIsinCode: ["1015", "1019"],
    },
    {
        id: 18,
        name: "Income Plus Fund",
        type: "Balanced",
        isinCode: 1018,
        nav: 19.78,
        returnRate: 6.5,
        lowestNav: 18.0,
        highestNav: 20.5,
        performance: [
            { year: 2023, fundReturn: 5.5, benchmarkReturn: 5.2 },
            { year: 2024, fundReturn: 6.8, benchmarkReturn: 6.0 },
            { year: 2025, fundReturn: null, benchmarkReturn: 5.8 },
        ],
        historicalPrices: [
            { date: "2025-01-01", nav: 19.5 },
            { date: "2025-02-01", nav: 19.6 },
            { date: "2025-03-01", nav: 19.65 },
            { date: "2025-04-01", nav: 19.7 },
            { date: "2025-05-01", nav: 19.78 },
        ],
        relatedIsinCode: ["1016", "1020"],
    },
    {
        id: 19,
        name: "Energy Sector Fund",
        type: "Equity",
        isinCode: 1019,
        nav: 24.56,
        returnRate: 9.0,
        lowestNav: 22.0,
        highestNav: 26.0,
        performance: [
            { year: 2023, fundReturn: 8.0, benchmarkReturn: 7.5 },
            { year: 2024, fundReturn: 9.5, benchmarkReturn: 8.8 },
            { year: 2025, fundReturn: null, benchmarkReturn: 8.0 },
        ],
        historicalPrices: [
            { date: "2025-01-01", nav: 24.0 },
            { date: "2025-02-01", nav: 24.2 },
            { date: "2025-03-01", nav: 24.3 },
            { date: "2025-04-01", nav: 24.4 },
            { date: "2025-05-01", nav: 24.56 },
        ],
        relatedIsinCode: ["1017", "1020"],
    },
    {
        id: 20,
        name: "Treasury Bond Fund",
        type: "Bond",
        isinCode: 1020,
        nav: 10.98,
        returnRate: 2.7,
        lowestNav: 10.5,
        highestNav: 11.2,
        performance: [
            { year: 2023, fundReturn: 2.3, benchmarkReturn: 2.5 },
            { year: 2024, fundReturn: 2.8, benchmarkReturn: 2.6 },
            { year: 2025, fundReturn: 2.6, benchmarkReturn: 2.4 },
        ],
        historicalPrices: [
            { date: "2025-01-01", nav: 10.8 },
            { date: "2025-02-01", nav: 10.85 },
            { date: "2025-03-01", nav: 10.9 },
            { date: "2025-04-01", nav: 10.95 },
            { date: "2025-05-01", nav: 10.98 },
        ],
        relatedIsinCode: ["1018", "1019"],
    },
];