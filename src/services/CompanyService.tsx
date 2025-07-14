import {CapitalStructure, ComparableFund, HoldingsData, InvestmentExperience} from "../types/Company";


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
            { id: 1, name: "Apple Inc.", type: "Stock", relationship: "Direct", accountShares: 10000, carryingAmount: 1500000, ownership: 0.05, classification: "AFS", fairValue: 1600000, isFavorite: false },
            { id: 2, name: "Vanguard Total Stock Market Fund", type: "Fund", relationship: "Managed", accountShares: 5000, carryingAmount: 500000, ownership: 0.02, classification: "HTM", fairValue: 510000, isFavorite: false },
            { id: 3, name: "Tesla Inc.", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 600000, ownership: 0.01, classification: "AFS", fairValue: 620000, isFavorite: false },
            { id: 4, name: "SPDR S&P 500 ETF", type: "Fund", relationship: "Managed", accountShares: 3000, carryingAmount: 900000, ownership: 0.03, classification: "AFS", fairValue: 910000, isFavorite: false },
            { id: 5, name: "Amazon.com Inc.", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 450000, ownership: 0.005, classification: "HTM", fairValue: 460000, isFavorite: false },
            { id: 6, name: "Microsoft Corp.", type: "Stock", relationship: "Direct", accountShares: 4000, carryingAmount: 1200000, ownership: 0.015, classification: "AFS", fairValue: 1250000, isFavorite: false },
            { id: 7, name: "iShares Core MSCI EAFE ETF", type: "Fund", relationship: "Managed", accountShares: 3500, carryingAmount: 700000, ownership: 0.025, classification: "HTM", fairValue: 710000, isFavorite: false },
            { id: 8, name: "NVIDIA Corp.", type: "Stock", relationship: "Direct", accountShares: 2500, carryingAmount: 800000, ownership: 0.008, classification: "AFS", fairValue: 820000, isFavorite: false },
            { id: 9, name: "Fidelity Total Market Index Fund", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 400000, ownership: 0.01, classification: "AFS", fairValue: 410000, isFavorite: false }
        ]
    },
    {
        id: 2,
        companyId: 2,
        items: [
            { id: 10, name: "JPMorgan Chase & Co.", type: "Stock", relationship: "Direct", accountShares: 8000, carryingAmount: 1200000, ownership: 0.04, classification: "AFS", fairValue: 1250000, isFavorite: false },
            { id: 11, name: "BlackRock Global Allocation Fund", type: "Fund", relationship: "Managed", accountShares: 4000, carryingAmount: 800000, ownership: 0.03, classification: "HTM", fairValue: 810000, isFavorite: false },
            { id: 12, name: "Bank of America Corp.", type: "Stock", relationship: "Direct", accountShares: 10000, carryingAmount: 400000, ownership: 0.02, classification: "AFS", fairValue: 420000, isFavorite: false },
            { id: 13, name: "Fidelity Balanced Fund", type: "Fund", relationship: "Managed", accountShares: 6000, carryingAmount: 720000, ownership: 0.025, classification: "AFS", fairValue: 730000, isFavorite: false },
            { id: 14, name: "Goldman Sachs Group Inc.", type: "Stock", relationship: "Direct", accountShares: 3000, carryingAmount: 900000, ownership: 0.015, classification: "HTM", fairValue: 910000, isFavorite: false },
            { id: 15, name: "T. Rowe Price Growth Stock Fund", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 400000, ownership: 0.01, classification: "AFS", fairValue: 410000, isFavorite: false },
            { id: 16, name: "Citigroup Inc.", type: "Stock", relationship: "Direct", accountShares: 5000, carryingAmount: 300000, ownership: 0.012, classification: "AFS", fairValue: 310000, isFavorite: false },
            { id: 17, name: "Vanguard High Dividend Yield ETF", type: "Fund", relationship: "Managed", accountShares: 3500, carryingAmount: 525000, ownership: 0.018, classification: "HTM", fairValue: 530000, isFavorite: false },
            { id: 18, name: "Morgan Stanley", type: "Stock", relationship: "Direct", accountShares: 2500, carryingAmount: 375000, ownership: 0.009, classification: "AFS", fairValue: 380000, isFavorite: false },
            { id: 19, name: "Schwab U.S. Dividend Equity ETF", type: "Fund", relationship: "Managed", accountShares: 3000, carryingAmount: 450000, ownership: 0.015, classification: "AFS", fairValue: 460000, isFavorite: false }
        ]
    },
    {
        id: 3,
        companyId: 3,
        items: [
            { id: 20, name: "NextEra Energy Inc.", type: "Stock", relationship: "Direct", accountShares: 5000, carryingAmount: 350000, ownership: 0.03, classification: "AFS", fairValue: 360000, isFavorite: false },
            { id: 21, name: "Invesco Solar ETF", type: "Fund", relationship: "Managed", accountShares: 4000, carryingAmount: 200000, ownership: 0.02, classification: "HTM", fairValue: 210000, isFavorite: false },
            { id: 22, name: "First Solar Inc.", type: "Stock", relationship: "Direct", accountShares: 3000, carryingAmount: 240000, ownership: 0.015, classification: "AFS", fairValue: 250000, isFavorite: false },
            { id: 23, name: "ARK Clean Energy Fund", type: "Fund", relationship: "Managed", accountShares: 2500, carryingAmount: 300000, ownership: 0.01, classification: "AFS", fairValue: 310000, isFavorite: false },
            { id: 24, name: "Enphase Energy Inc.", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 280000, ownership: 0.008, classification: "HTM", fairValue: 290000, isFavorite: false },
            { id: 25, name: "iShares Global Clean Energy ETF", type: "Fund", relationship: "Managed", accountShares: 3500, carryingAmount: 420000, ownership: 0.012, classification: "AFS", fairValue: 430000, isFavorite: false },
            { id: 26, name: "Vestas Wind Systems A/S", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 180000, ownership: 0.007, classification: "AFS", fairValue: 185000, isFavorite: false },
            { id: 27, name: "First Trust NASDAQ Clean Edge Green Energy Index Fund", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 260000, ownership: 0.009, classification: "HTM", fairValue: 270000, isFavorite: false },
            { id: 28, name: "SolarEdge Technologies Inc.", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 150000, ownership: 0.005, classification: "AFS", fairValue: 155000, isFavorite: false }
        ]
    },
    {
        id: 4,
        companyId: 4,
        items: [
            { id: 29, name: "IonQ", type: "Stock", relationship: "Direct", accountShares: 6000, carryingAmount: 360000, ownership: 0.025, classification: "AFS", fairValue: 370000, isFavorite: false },
            { id: 30, name: "Rigetti Computing", type: "Stock", relationship: "Direct", accountShares: 4000, carryingAmount: 280000, ownership: 0.018, classification: "AFS", fairValue: 290000, isFavorite: false },
            { id: 31, name: "ARK Innovation ETF", type: "Fund", relationship: "Managed", accountShares: 3000, carryingAmount: 450000, ownership: 0.015, classification: "HTM", fairValue: 460000, isFavorite: false },
            { id: 32, name: "Honeywell International Inc.", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 400000, ownership: 0.01, classification: "AFS", fairValue: 410000, isFavorite: false },
            { id: 33, name: "Vanguard Information Technology ETF", type: "Fund", relationship: "Managed", accountShares: 2500, carryingAmount: 625000, ownership: 0.012, classification: "AFS", fairValue: 630000, isFavorite: false },
            { id: 34, name: "IBM", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 270000, ownership: 0.008, classification: "HTM", fairValue: 275000, isFavorite: false },
            { id: 35, name: "iShares U.S. Technology ETF", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 360000, ownership: 0.009, classification: "AFS", fairValue: 365000, isFavorite: false },
            { id: 36, name: "D-Wave Quantum Inc.", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 150000, ownership: 0.005, classification: "AFS", fairValue: 155000, isFavorite: false }
        ]
    },
    {
        id: 5,
        companyId: 5,
        items: [
            { id: 37, name: "Moderna Inc.", type: "Stock", relationship: "Direct", accountShares: 5000, carryingAmount: 750000, ownership: 0.02, classification: "AFS", fairValue: 760000, isFavorite: false },
            { id: 38, name: "Teladoc Health", type: "Stock", relationship: "Direct", accountShares: 3000, carryingAmount: 450000, ownership: 0.015, classification: "AFS", fairValue: 460000, isFavorite: false },
            { id: 39, name: "Vanguard Health Care ETF", type: "Fund", relationship: "Managed", accountShares: 4000, carryingAmount: 800000, ownership: 0.018, classification: "HTM", fairValue: 810000, isFavorite: false },
            { id: 40, name: "Johnson & Johnson", type: "Stock", relationship: "Direct", accountShares: 2500, carryingAmount: 500000, ownership: 0.01, classification: "AFS", fairValue: 510000, isFavorite: false },
            { id: 41, name: "iShares U.S. Healthcare ETF", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 400000, ownership: 0.012, classification: "AFS", fairValue: 410000, isFavorite: false },
            { id: 42, name: "Pfizer Inc.", type: "Stock", relationship: "Direct", accountShares: 3500, carryingAmount: 525000, ownership: 0.014, classification: "HTM", fairValue: 530000, isFavorite: false },
            { id: 43, name: "Health Care Select Sector SPDR Fund", type: "Fund", relationship: "Managed", accountShares: 1500, carryingAmount: 300000, ownership: 0.008, classification: "AFS", fairValue: 305000, isFavorite: false },
            { id: 44, name: "Intuitive Surgical Inc.", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 250000, ownership: 0.005, classification: "AFS", fairValue: 255000, isFavorite: false }
        ]
    },
    {
        id: 6,
        companyId: 6,
        items: [
            { id: 45, name: "Boeing Co.", type: "Stock", relationship: "Direct", accountShares: 4000, carryingAmount: 600000, ownership: 0.018, classification: "AFS", fairValue: 610000, isFavorite: false },
            { id: 46, name: "Rocket Lab USA", type: "Stock", relationship: "Direct", accountShares: 3000, carryingAmount: 450000, ownership: 0.015, classification: "AFS", fairValue: 460000, isFavorite: false },
            { id: 47, name: "SPDR S&P Aerospace & Defense ETF", type: "Fund", relationship: "Managed", accountShares: 2500, carryingAmount: 500000, ownership: 0.012, classification: "HTM", fairValue: 510000, isFavorite: false },
            { id: 48, name: "Lockheed Martin Corp.", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 400000, ownership: 0.01, classification: "AFS", fairValue: 410000, isFavorite: false },
            { id: 49, name: "iShares U.S. Aerospace & Defense ETF", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 360000, ownership: 0.009, classification: "AFS", fairValue: 365000, isFavorite: false },
            { id: 50, name: "Northrop Grumman Corp.", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 300000, ownership: 0.008, classification: "HTM", fairValue: 305000, isFavorite: false },
            { id: 51, name: "Invesco Aerospace & Defense ETF", type: "Fund", relationship: "Managed", accountShares: 1000, carryingAmount: 200000, ownership: 0.005, classification: "AFS", fairValue: 205000, isFavorite: false }
        ]
    },
    {
        id: 7,
        companyId: 7,
        items: [
            { id: 52, name: "FedEx Corp.", type: "Stock", relationship: "Direct", accountShares: 3000, carryingAmount: 450000, ownership: 0.015, classification: "AFS", fairValue: 460000, isFavorite: false },
            { id: 53, name: "United Parcel Service Inc.", type: "Stock", relationship: "Direct", accountShares: 2500, carryingAmount: 400000, ownership: 0.012, classification: "AFS", fairValue: 410000, isFavorite: false },
            { id: 54, name: "iShares Transportation Average ETF", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 360000, ownership: 0.01, classification: "HTM", fairValue: 365000, isFavorite: false },
            { id: 55, name: "C.H. Robinson Worldwide Inc.", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 300000, ownership: 0.008, classification: "AFS", fairValue: 305000, isFavorite: false },
            { id: 56, name: "SPDR S&P Transportation ETF", type: "Fund", relationship: "Managed", accountShares: 1000, carryingAmount: 200000, ownership: 0.005, classification: "AFS", fairValue: 205000, isFavorite: false },
            { id: 57, name: "XPO Logistics Inc.", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 280000, ownership: 0.007, classification: "HTM", fairValue: 285000, isFavorite: false },
            { id: 58, name: "Invesco Dynamic Transportation ETF", type: "Fund", relationship: "Managed", accountShares: 1500, carryingAmount: 270000, ownership: 0.006, classification: "AFS", fairValue: 275000, isFavorite: false }
        ]
    },
    {
        id: 8,
        companyId: 8,
        items: [
            { id: 59, name: "Palo Alto Networks Inc.", type: "Stock", relationship: "Direct", accountShares: 3000, carryingAmount: 600000, ownership: 0.015, classification: "AFS", fairValue: 610000, isFavorite: false },
            { id: 60, name: "CrowdStrike Holdings Inc.", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 400000, ownership: 0.01, classification: "AFS", fairValue: 410000, isFavorite: false },
            { id: 61, name: "Global X Cybersecurity ETF", type: "Fund", relationship: "Managed", accountShares: 2500, carryingAmount: 375000, ownership: 0.012, classification: "HTM", fairValue: 380000, isFavorite: false },
            { id: 62, name: "Fortinet Inc.", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 300000, ownership: 0.008, classification: "AFS", fairValue: 305000, isFavorite: false },
            { id: 63, name: "First Trust NASDAQ Cybersecurity ETF", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 360000, ownership: 0.009, classification: "AFS", fairValue: 365000, isFavorite: false },
            { id: 64, name: "Zscaler Inc.", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 200000, ownership: 0.005, classification: "HTM", fairValue: 205000, isFavorite: false },
            { id: 65, name: "iShares Cybersecurity and Tech ETF", type: "Fund", relationship: "Managed", accountShares: 1500, carryingAmount: 270000, ownership: 0.007, classification: "AFS", fairValue: 275000, isFavorite: false }
        ]
    },
    {
        id: 9,
        companyId: 9,
        items: [
            { id: 66, name: "Rivian Automotive Inc.", type: "Stock", relationship: "Direct", accountShares: 3000, carryingAmount: 360000, ownership: 0.015, classification: "AFS", fairValue: 365000, isFavorite: false },
            { id: 67, name: "Lyft Inc.", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 280000, ownership: 0.01, classification: "AFS", fairValue: 285000, isFavorite: false },
            { id: 68, name: "ARK Autonomous Technology & Robotics ETF", type: "Fund", relationship: "Managed", accountShares: 2500, carryingAmount: 375000, ownership: 0.012, classification: "HTM", fairValue: 380000, isFavorite: false },
            { id: 69, name: "Uber Technologies Inc.", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 300000, ownership: 0.008, classification: "AFS", fairValue: 305000, isFavorite: false },
            { id: 70, name: "Invesco Electric Vehicle Metals ETF", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 360000, ownership: 0.009, classification: "AFS", fairValue: 365000, isFavorite: false },
            { id: 71, name: "Li Auto Inc.", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 200000, ownership: 0.005, classification: "HTM", fairValue: 205000, isFavorite: false },
            { id: 72, name: "Global X Autonomous & Electric Vehicles ETF", type: "Fund", relationship: "Managed", accountShares: 1500, carryingAmount: 270000, ownership: 0.007, classification: "AFS", fairValue: 275000, isFavorite: false }
        ]
    },
    {
        id: 10,
        companyId: 10,
        items: [
            { id: 73, name: "Deere & Co.", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 400000, ownership: 0.01, classification: "AFS", fairValue: 410000, isFavorite: false },
            { id: 74, name: "Corteva Inc.", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 300000, ownership: 0.008, classification: "AFS", fairValue: 305000, isFavorite: false },
            { id: 75, name: "Invesco DB Agriculture Fund", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 360000, ownership: 0.009, classification: "HTM", fairValue: 365000, isFavorite: false },
            { id: 76, name: "Archer-Daniels-Midland Co.", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 200000, ownership: 0.005, classification: "AFS", fairValue: 205000, isFavorite: false },
            { id: 77, name: "Global X AgTech & Food Innovation ETF", type: "Fund", relationship: "Managed", accountShares: 1500, carryingAmount: 270000, ownership: 0.007, classification: "AFS", fairValue: 275000, isFavorite: false },
            { id: 78, name: "Bunge Ltd.", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 180000, ownership: 0.004, classification: "HTM", fairValue: 185000, isFavorite: false },
            { id: 79, name: "iShares MSCI Global Agriculture Producers ETF", type: "Fund", relationship: "Managed", accountShares: 1000, carryingAmount: 200000, ownership: 0.005, classification: "AFS", fairValue: 205000, isFavorite: false }
        ]
    },
    {
        id: 11,
        companyId: 11,
        items: [
            { id: 80, name: "Walmart Inc.", type: "Stock", relationship: "Direct", accountShares: 4000, carryingAmount: 600000, ownership: 0.015, classification: "AFS", fairValue: 610000, isFavorite: false },
            { id: 81, name: "Shopify Inc.", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 400000, ownership: 0.01, classification: "AFS", fairValue: 410000, isFavorite: false },
            { id: 82, name: "SPDR S&P Retail ETF", type: "Fund", relationship: "Managed", accountShares: 2500, carryingAmount: 375000, ownership: 0.012, classification: "HTM", fairValue: 380000, isFavorite: false },
            { id: 83, name: "Target Corp.", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 300000, ownership: 0.008, classification: "AFS", fairValue: 305000, isFavorite: false },
            { id: 84, name: "iShares U.S. Consumer Services ETF", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 360000, ownership: 0.009, classification: "AFS", fairValue: 365000, isFavorite: false },
            { id: 85, name: "Costco Wholesale Corp.", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 250000, ownership: 0.005, classification: "HTM", fairValue: 255000, isFavorite: false },
            { id: 86, name: "Invesco Dynamic Retail ETF", type: "Fund", relationship: "Managed", accountShares: 1500, carryingAmount: 270000, ownership: 0.007, classification: "AFS", fairValue: 275000, isFavorite: false }
        ]
    },
    {
        id: 12,
        companyId: 12,
        items: [
            { id: 87, name: "Renewable Energy Group Inc.", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 300000, ownership: 0.01, classification: "AFS", fairValue: 305000, isFavorite: false },
            { id: 88, name: "Gevo Inc.", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 225000, ownership: 0.008, classification: "AFS", fairValue: 230000, isFavorite: false },
            { id: 89, name: "Invesco WilderHill Clean Energy ETF", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 360000, ownership: 0.009, classification: "HTM", fairValue: 365000, isFavorite: false },
            { id: 90, name: "Neste Oyj", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 200000, ownership: 0.005, classification: "AFS", fairValue: 205000, isFavorite: false },
            { id: 91, name: "First Trust Global Wind Energy ETF", type: "Fund", relationship: "Managed", accountShares: 1500, carryingAmount: 270000, ownership: 0.007, classification: "AFS", fairValue: 275000, isFavorite: false },
            { id: 92, name: "Aemetis Inc.", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 150000, ownership: 0.004, classification: "HTM", fairValue: 155000, isFavorite: false },
            { id: 93, name: "iShares Clean Energy ETF", type: "Fund", relationship: "Managed", accountShares: 1000, carryingAmount: 200000, ownership: 0.005, classification: "AFS", fairValue: 205000, isFavorite: false }
        ]
    },
    {
        id: 13,
        companyId: 13,
        items: [
            { id: 94, name: "Coursera Inc.", type: "Stock", relationship: "Direct", accountShares: 2500, carryingAmount: 375000, ownership: 0.012, classification: "AFS", fairValue: 380000, isFavorite: false },
            { id: 95, name: "Duolingo Inc.", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 300000, ownership: 0.01, classification: "AFS", fairValue: 305000, isFavorite: false },
            { id: 96, name: "ARK Next Generation Internet ETF", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 360000, ownership: 0.009, classification: "HTM", fairValue: 365000, isFavorite: false },
            { id: 97, name: "Chegg Inc.", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 225000, ownership: 0.008, classification: "AFS", fairValue: 230000, isFavorite: false },
            { id: 98, name: "Invesco Dynamic Software ETF", type: "Fund", relationship: "Managed", accountShares: 1500, carryingAmount: 270000, ownership: 0.007, classification: "AFS", fairValue: 275000, isFavorite: false },
            { id: 99, name: "2U Inc.", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 150000, ownership: 0.005, classification: "HTM", fairValue: 155000, isFavorite: false },
            { id: 100, name: "iShares Future Tech ETF", type: "Fund", relationship: "Managed", accountShares: 1000, carryingAmount: 200000, ownership: 0.005, classification: "AFS", fairValue: 205000, isFavorite: false }
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
        address: "123 Tech St, San Francisco, CA 94105"
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
        address: "456 Finance Ave, New York, NY 10001"
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
        address: "789 Energy Blvd, Austin, TX 78701"
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
        address: "101 Quantum Rd, Boston, MA 02115"
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
        address: "234 Health Dr, Chicago, IL 60601"
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
        address: "345 Aerospace Way, Seattle, WA 98101"
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
        address: "456 Logistics Ln, Miami, FL 33101"
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
        address: "567 Cyber St, Palo Alto, CA 94301"
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
        address: "678 Mobility Ave, Los Angeles, CA 90001"
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
        address: "789 Agri St, Des Moines, IA 50309"
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
        address: "890 Retail Rd, Dallas, TX 75201"
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
        address: "901 Bioenergy Blvd, Denver, CO 80202"
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
        address: "234 Education Dr, San Diego, CA 92101"
    }
];


export const comparableFundsData = [
    {
        id: 1,
        fundId: 1,
        companyId: 1,
        items: [
            { id: 101, name: "Google LLC", type: "Stock", relationship: "Direct", accountShares: 3000, carryingAmount: 4500000, ownership: 0.015, classification: "AFS", fairValue: 4600000, isFavorite: false },
            { id: 102, name: "SpaceX", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 2250000, ownership: 0.008, classification: "AFS", fairValue: 2300000, isFavorite: false },
            { id: 103, name: "ARK Innovation ETF", type: "Fund", relationship: "Managed", accountShares: 2500, carryingAmount: 5000000, ownership: 0.02, classification: "HTM", fairValue: 5100000, isFavorite: false },
            { id: 104, name: "Intel Corp.", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 1000000, ownership: 0.01, classification: "AFS", fairValue: 1020000, isFavorite: false },
            { id: 105, name: "Vanguard Information Technology ETF", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 4000000, ownership: 0.015, classification: "AFS", fairValue: 4100000, isFavorite: false },
            { id: 106, name: "True Anomaly", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 1500000, ownership: 0.005, classification: "HTM", fairValue: 1550000, isFavorite: false },
            { id: 107, name: "iShares U.S. Technology ETF", type: "Fund", relationship: "Managed", accountShares: 1500, carryingAmount: 3000000, ownership: 0.01, classification: "AFS", fairValue: 3050000, isFavorite: false }
        ]
    },
    {
        id: 2,
        fundId: 2,
        companyId: 2,
        items: [
            { id: 108, name: "Visa Inc.", type: "Stock", relationship: "Direct", accountShares: 4000, carryingAmount: 1600000, ownership: 0.02, classification: "AFS", fairValue: 1650000, isFavorite: false },
            { id: 109, name: "Mastercard Inc.", type: "Stock", relationship: "Direct", accountShares: 3000, carryingAmount: 1200000, ownership: 0.015, classification: "AFS", fairValue: 1250000, isFavorite: false },
            { id: 110, name: "BlackRock Global Allocation Fund", type: "Fund", relationship: "Managed", accountShares: 3500, carryingAmount: 1400000, ownership: 0.018, classification: "HTM", fairValue: 1450000, isFavorite: false },
            { id: 111, name: "PayPal Holdings Inc.", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 800000, ownership: 0.01, classification: "AFS", fairValue: 820000, isFavorite: false },
            { id: 112, name: "Fidelity Balanced Fund", type: "Fund", relationship: "Managed", accountShares: 2500, carryingAmount: 1000000, ownership: 0.012, classification: "AFS", fairValue: 1020000, isFavorite: false },
            { id: 113, name: "Square Inc.", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 600000, ownership: 0.008, classification: "HTM", fairValue: 610000, isFavorite: false },
            { id: 114, name: "Vanguard High Dividend Yield ETF", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 800000, ownership: 0.01, classification: "AFS", fairValue: 810000, isFavorite: false }
        ]
    },
    {
        id: 3,
        fundId: 3,
        companyId: 3,
        items: [
            { id: 115, name: "NextEra Energy Inc.", type: "Stock", relationship: "Direct", accountShares: 3000, carryingAmount: 900000, ownership: 0.015, classification: "AFS", fairValue: 920000, isFavorite: false },
            { id: 116, name: "Enphase Energy Inc.", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 600000, ownership: 0.01, classification: "AFS", fairValue: 610000, isFavorite: false },
            { id: 117, name: "Invesco Solar ETF", type: "Fund", relationship: "Managed", accountShares: 2500, carryingAmount: 750000, ownership: 0.012, classification: "HTM", fairValue: 760000, isFavorite: false },
            { id: 118, name: "First Solar Inc.", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 450000, ownership: 0.008, classification: "AFS", fairValue: 460000, isFavorite: false },
            { id: 119, name: "iShares Global Clean Energy ETF", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 600000, ownership: 0.01, classification: "AFS", fairValue: 610000, isFavorite: false },
            { id: 120, name: "Vestas Wind Systems A/S", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 300000, ownership: 0.005, classification: "HTM", fairValue: 305000, isFavorite: false },
            { id: 121, name: "First Trust NASDAQ Clean Edge Green Energy Index Fund", type: "Fund", relationship: "Managed", accountShares: 1500, carryingAmount: 450000, ownership: 0.007, classification: "AFS", fairValue: 460000, isFavorite: false }
        ]
    },
    {
        id: 4,
        fundId: 4,
        companyId: 4,
        items: [
            { id: 122, name: "IonQ", type: "Stock", relationship: "Direct", accountShares: 2500, carryingAmount: 750000, ownership: 0.012, classification: "AFS", fairValue: 760000, isFavorite: false },
            { id: 123, name: "Rigetti Computing", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 600000, ownership: 0.01, classification: "AFS", fairValue: 610000, isFavorite: false },
            { id: 124, name: "ARK Innovation ETF", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 800000, ownership: 0.015, classification: "HTM", fairValue: 810000, isFavorite: false },
            { id: 125, name: "D-Wave Quantum Inc.", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 450000, ownership: 0.008, classification: "AFS", fairValue: 460000, isFavorite: false },
            { id: 126, name: "Vanguard Information Technology ETF", type: "Fund", relationship: "Managed", accountShares: 1500, carryingAmount: 600000, ownership: 0.01, classification: "AFS", fairValue: 610000, isFavorite: false },
            { id: 127, name: "QuantumScape Corp.", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 300000, ownership: 0.005, classification: "HTM", fairValue: 305000, isFavorite: false },
            { id: 128, name: "iShares U.S. Technology ETF", type: "Fund", relationship: "Managed", accountShares: 1000, carryingAmount: 400000, ownership: 0.007, classification: "AFS", fairValue: 410000, isFavorite: false }
        ]
    },
    {
        id: 5,
        fundId: 5,
        companyId: 5,
        items: [
            { id: 129, name: "Moderna Inc.", type: "Stock", relationship: "Direct", accountShares: 3000, carryingAmount: 900000, ownership: 0.015, classification: "AFS", fairValue: 910000, isFavorite: false },
            { id: 130, name: "Teladoc Health", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 600000, ownership: 0.01, classification: "AFS", fairValue: 610000, isFavorite: false },
            { id: 131, name: "Vanguard Health Care ETF", type: "Fund", relationship: "Managed", accountShares: 2500, carryingAmount: 750000, ownership: 0.012, classification: "HTM", fairValue: 760000, isFavorite: false },
            { id: 132, name: "Gilead Sciences Inc.", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 450000, ownership: 0.008, classification: "AFS", fairValue: 460000, isFavorite: false },
            { id: 133, name: "iShares U.S. Healthcare ETF", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 600000, ownership: 0.01, classification: "AFS", fairValue: 610000, isFavorite: false },
            { id: 134, name: "Amgen Inc.", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 300000, ownership: 0.005, classification: "HTM", fairValue: 305000, isFavorite: false },
            { id: 135, name: "Health Care Select Sector SPDR Fund", type: "Fund", relationship: "Managed", accountShares: 1500, carryingAmount: 450000, ownership: 0.007, classification: "AFS", fairValue: 460000, isFavorite: false }
        ]
    },
    {
        id: 6,
        fundId: 6,
        companyId: 6,
        items: [
            { id: 136, name: "Boeing Co.", type: "Stock", relationship: "Direct", accountShares: 3000, carryingAmount: 900000, ownership: 0.015, classification: "AFS", fairValue: 910000, isFavorite: false },
            { id: 137, name: "Rocket Lab USA", type: "Stock", relationship: "Direct", accountShares: 2000, carryingAmount: 600000, ownership: 0.01, classification: "AFS", fairValue: 610000, isFavorite: false },
            { id: 138, name: "SPDR S&P Aerospace & Defense ETF", type: "Fund", relationship: "Managed", accountShares: 2500, carryingAmount: 750000, ownership: 0.012, classification: "HTM", fairValue: 760000, isFavorite: false },
            { id: 139, name: "Lockheed Martin Corp.", type: "Stock", relationship: "Direct", accountShares: 1500, carryingAmount: 450000, ownership: 0.008, classification: "AFS", fairValue: 460000, isFavorite: false },
            { id: 140, name: "iShares U.S. Aerospace & Defense ETF", type: "Fund", relationship: "Managed", accountShares: 2000, carryingAmount: 600000, ownership: 0.01, classification: "AFS", fairValue: 610000, isFavorite: false },
            { id: 141, name: "Raytheon Technologies Corp.", type: "Stock", relationship: "Direct", accountShares: 1000, carryingAmount: 300000, ownership: 0.005, classification: "HTM", fairValue: 305000, isFavorite: false },
            { id: 142, name: "Invesco Aerospace & Defense ETF", type: "Fund", relationship: "Managed", accountShares: 1500, carryingAmount: 450000, ownership: 0.007, classification: "AFS", fairValue: 460000, isFavorite: false }
        ]
    }
];