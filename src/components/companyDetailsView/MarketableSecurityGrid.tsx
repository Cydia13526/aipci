import React from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import {Holding, ComparableFund, FundData, HistoricalPrice} from "../../types/Company";
import { SelectAllHeader } from "./SelectAllHeader";
import {
    companyDetailsData, fundData,
    getCapitalStructureByCompanyId,
    getHoldingsByCompanyId,
    getInvestmentExperienceByCompanyId,
    holdingsData,
    InvestmentExperienceData,
} from "../../services/CompanyService";
import {useLanguage} from "../../context/LanguageContext";

type MarketableSecurityGridProps = {
    data: Holding[];
    handleSelectHolding: (ids: number[]) => void;
    toggleFavorite: (id: number) => void;
    setSelectedHolding: (holding: Holding | null) => void;
    gridRef: any;
};

const ComparableFundsModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    fund: Holding | null;
    comparableFunds: ComparableFund[];
}> = ({ isOpen, onClose, fund, comparableFunds }) => {
    if (!isOpen || !fund) return null;
    // Get company details for the selected fund
    const companyId = holdingsData.find((h) =>
        h.items.some((item) => item?.fundId === fund.fundId)
    )?.companyId;
    const companyName = companyId
        ? companyDetailsData.find((c) => c.id === companyId)?.name ?? "N/A"
        : "N/A";
    const companyIndustry = companyId
        ? companyDetailsData.find((c) => c.id === companyId)?.industry ?? "Selected Fund"
        : "Selected Fund";
    const capitalStructure = companyId ? getCapitalStructureByCompanyId(companyId) : null;
    const investmentExperience = companyId ? getInvestmentExperienceByCompanyId(companyId) : null;

    // Transform selected fund (Holding) to match ComparableFund interface
    const selectedFundData = fund.fundId ? fundData.find((f) => f.id === fund.fundId) : null;
    const selectedFund: ComparableFund = {
        id: 0,
        ...fund,
        companyName,
        industry: companyIndustry,
        totalEquity: capitalStructure?.totalEquity ?? 0,
        totalDebt: capitalStructure?.totalDebt ?? 0,
        debtToEquityRatio: capitalStructure?.debtToEquityRatio ?? 0,
        averageReturn: investmentExperience?.averageReturn ?? "N/A",
        nav: selectedFundData?.nav ?? 0,
        returnRate: selectedFundData?.returnRate ?? 0,
        lowestNav: selectedFundData?.lowestNav ?? 0,
        highestNav: selectedFundData?.highestNav ?? 0,
        performance: selectedFundData?.performance ?? [],
        historicalPrices: selectedFundData?.historicalPrices ?? []
    };

    // Map comparable funds to include FundData
    const comparableFundsWithData = comparableFunds.map((f) => {
        const fundDetails = fundData.find((fd) => fd.isinCode === f.id);
        return {
            ...f,
            nav: fundDetails?.nav ?? f.nav ?? 0,
            returnRate: fundDetails?.returnRate ?? f.returnRate ?? 0,
            lowestNav: fundDetails?.lowestNav ?? f.lowestNav ?? 0,
            highestNav: fundDetails?.highestNav ?? f.highestNav ?? 0,
            performance: fundDetails?.performance ?? f.performance ?? [],
            historicalPrices: fundDetails?.historicalPrices ?? f.historicalPrices ?? [],
        };
    });

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 mx-4 overflow-auto relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    aria-label="Close fund comparison modal"
                >
                    Close
                </button>
                <h2 className="text-xl font-semibold mb-4">
                    Fund Comparison for {fund.name}
                </h2>

                {/* Fund Comparison Table */}
                <table className="w-full border-collapse mb-4">
                    <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2 text-left font-semibold">Fund Name</th>
                        <th className="border p-2 text-left font-semibold">NAV (CNY)</th>
                        <th className="border p-2 text-left font-semibold">Performance</th>
                        <th className="border p-2 text-left font-semibold">Historical Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {[selectedFund, ...comparableFundsWithData].map((f, index) => (
                        <tr
                            key={f.id ?? f.id}
                            className={index === 0 ? "bg-blue-50" : index % 2 === 0 ? "bg-gray-50" : ""}
                        >
                            {/* Fund Name */}
                            <td className="border p-2 font-medium">
                                {index === 0 ? "Selected Fund" : `Comparable Fund ${index}`}: {f.name}
                            </td>
                            {/* NAV */}
                            <td className="border p-2">
                                <div className="text-sm">
                                    Latest NAV: {f.nav.toFixed(4)}<br />
                                    Return Rate: {f.returnRate}%<br />
                                    Lowest NAV: {f.lowestNav.toFixed(4)}<br />
                                    Highest NAV: {f.highestNav.toFixed(4)}
                                </div>
                            </td>
                            {/* Performance */}
                            <td className="border p-2">
                                <div className="text-sm">
                                    <p>Denominated Currency: CNY</p>
                                    <p>Launch Date: 21/01/2016</p>
                                    <p>Benchmark: China Strategic Emerging Industries Component Index yield × 85% + SSE Treasury Bond Index yield × 15%</p>
                                    <p>Cumulative (%): As of 30/05/2025</p>
                                    <table className="w-full border-collapse mt-2">
                                        <thead>
                                        <tr className="bg-gray-200">
                                            <th className="border p-1 text-left text-xs">Metric</th>
                                            {f?.performance?.map((data, idx) => (
                                                <th key={idx} className="border p-1 text-left text-xs">{data.year}</th>
                                            ))}
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="bg-gray-50">
                                            <td className="border p-1 text-xs font-medium">Fund Return</td>
                                            {f?.performance?.map((data, idx) => (
                                                <td key={idx} className="border p-1 text-xs">
                                                    {data.fundReturn ? data.fundReturn.toFixed(2) : "-"}
                                                </td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <td className="border p-1 text-xs font-medium">Benchmark Return</td>
                                            {f?.performance?.map((data, idx) => (
                                                <td key={idx} className="border p-1 text-xs">
                                                    {data.benchmarkReturn.toFixed(2)}
                                                </td>
                                            ))}
                                        </tr>
                                        </tbody>
                                    </table>
                                    <p className="text-xs mt-2">
                                        Note: Performance is calculated on NAV to NAV basis with dividend reinvested. Source: JPMorgan Asset Management (China) Company Limited.
                                    </p>
                                </div>
                            </td>
                            {/* Historical Price */}
                            <td className="border p-2">
                                <div className="text-sm">
                                    <p>Denominated Currency: CNY</p>
                                    <p>Data available from: 21/01/2016</p>
                                    <div className="flex gap-2 my-2">
                                        <div>
                                            <label className="block text-xs font-medium">From</label>
                                            <input
                                                type="date"
                                                defaultValue="2025-01-01"
                                                className="border rounded p-1 text-xs w-32"
                                                aria-label="Select start date for historical price"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium">To</label>
                                            <input
                                                type="date"
                                                defaultValue="2025-05-01"
                                                className="border rounded p-1 text-xs w-32"
                                                aria-label="Select end date for historical price"
                                            />
                                        </div>
                                    </div>
                                    <table className="w-full border-collapse">
                                        <thead>
                                        <tr className="bg-gray-200">
                                            <th className="border p-1 text-left text-xs">Date</th>
                                            <th className="border p-1 text-left text-xs">NAV</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {f.historicalPrices.map((price, idx) => (
                                            <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : ""}>
                                                <td className="border p-1 text-xs">{price.date}</td>
                                                <td className="border p-1 text-xs">{price.nav.toFixed(4)}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                {comparableFunds.length === 0 && (
                    <p className="mb-4 text-gray-600">No comparable funds found.</p>
                )}
            </div>
        </div>
    );
};

const MarketableSecurityGrid: React.FC<MarketableSecurityGridProps> = ({
                                                                           data,
                                                                           handleSelectHolding,
                                                                           toggleFavorite,
                                                                           setSelectedHolding,
                                                                           gridRef,
                                                                       }) => {
    const { t, language, changeLanguage } = useLanguage();
    const [selectedHoldings, setSelectedHoldings] = React.useState<number[]>([]);
    const [modalOpen, setModalOpen] = React.useState(false);
    const [selectedFund, setSelectedFund] = React.useState<Holding | null>(null);
    const [comparableFunds, setComparableFunds] = React.useState<ComparableFund[]>([]);

    const handleSelectAll = React.useCallback(
        (checked: boolean) => {
            if (gridRef.current?.api) {
                if (checked) {
                    gridRef.current.api.selectAll();
                } else {
                    gridRef.current.api.deselectAll();
                }
                const selectedNodes = gridRef.current.api.getSelectedNodes();
                const selectedIds = selectedNodes.map((node: any) => node.data.id);
                setSelectedHoldings(selectedIds);
                handleSelectHolding(selectedIds);
            }
        },
        [gridRef, handleSelectHolding]
    );

    const findComparableFunds = (holding: Holding, companyId: number): ComparableFund[] => {
        const company = companyDetailsData.find((c) => c.id === companyId);
        if (!company) return [];

        const region = company.location;
        const investmentExperience = InvestmentExperienceData.find(
            (ie) => ie.companyId === companyId
        );
        const industry = investmentExperience?.strategy
            ?.toLowerCase()
            .split(" ")
            .find((word) =>
                ["technology", "finance", "energy", "computing", "healthcare", "aerospace", "logistics", "cybersecurity", "transportation", "agriculture", "retail", "bioenergy", "education"].includes(word)
            ) || "general";

        let comparable: {
            debtToEquityRatio: number;
            nav: number;
            returnRate: number;
            accountShares: number;
            companyName: string;
            totalDebt: number;
            industry: string;
            averageReturn: string;
            type: string;
            classification: string;
            historicalPrices: HistoricalPrice[] | undefined;
            fundId: number;
            totalEquity: number;
            highestNav: number;
            performance: FundData;
            ownership: number;
            carryingAmount: number;
            name: string;
            id: number;
            fairValue: number;
            lowestNav: number;
            relationship: string;
            isFavorite: boolean | undefined
        }[] = [];
        const companyFundData = fundData.filter((f) => {
            const holdingCompany = holdingsData.find((h) =>
                h.items.some((item) => item.fundId === f.id)
            );
            return holdingCompany?.companyId === companyId;
        });

        // Include funds from the same company
        comparable = companyFundData
            .filter((f) => f.type === holding.type && f.isinCode !== holding.fundId)
            .map((f) => {
                const capitalStructure = getCapitalStructureByCompanyId(companyId);
                const investmentExp = getInvestmentExperienceByCompanyId(companyId);
                return {
                    id: f.id,
                    fundId: f.isinCode,
                    name: f.name,
                    type: f.type,
                    relationship: "Managed",
                    accountShares: 0,
                    carryingAmount: 0,
                    ownership: 0,
                    classification: "AFS",
                    fairValue: 0,
                    industry: company.industry || "N/A",
                    companyName: company.name || "N/A",
                    totalEquity: capitalStructure?.totalEquity || 0,
                    totalDebt: capitalStructure?.totalDebt || 0,
                    debtToEquityRatio: capitalStructure?.debtToEquityRatio || 0,
                    averageReturn: investmentExp?.averageReturn || "N/A",
                    nav: f.nav,
                    returnRate: f.returnRate,
                    lowestNav: f.lowestNav,
                    highestNav: f.highestNav,
                    performance: f,
                    historicalPrices: f?.historicalPrices,
                    isFavorite: f.isFavorite
                };
            });

        // Include funds from relatedFundsId
        const selectedFundData = fundData.find((f) => f.id === holding.fundId);
        const relatedFunds = selectedFundData?.relatedIsinCode
            ? fundData.filter((f) => selectedFundData.relatedIsinCode.includes(f.isinCode.toString()))
            : [];
        const relatedComparable = relatedFunds
            .filter((f) =>  f.id !== holding.fundId)
            .map((f) => {
                const holdingCompany = holdingsData.find((h) =>
                    h.items.some((item) => item.fundId === f.isinCode)
                );
                const relatedCompanyId = holdingCompany?.companyId;
                const relatedCompany = relatedCompanyId
                    ? companyDetailsData.find((c) => c.id === relatedCompanyId)
                    : null;
                const capitalStructure = relatedCompanyId
                    ? getCapitalStructureByCompanyId(relatedCompanyId)
                    : null;
                const investmentExp = relatedCompanyId
                    ? getInvestmentExperienceByCompanyId(relatedCompanyId)
                    : null;
                return {
                    id: f.id,
                    fundId: f.isinCode,
                    name: f.name,
                    type: f.type,
                    relationship: "Managed",
                    accountShares: 0,
                    carryingAmount: 0,
                    ownership: 0,
                    classification: "AFS",
                    fairValue: 0,
                    industry: relatedCompany?.industry || "N/A",
                    companyName: relatedCompany?.name || "N/A",
                    totalEquity: capitalStructure?.totalEquity || 0,
                    totalDebt: capitalStructure?.totalDebt || 0,
                    debtToEquityRatio: capitalStructure?.debtToEquityRatio || 0,
                    averageReturn: investmentExp?.averageReturn || "N/A",
                    nav: f.nav,
                    returnRate: f.returnRate,
                    lowestNav: f.lowestNav,
                    highestNav: f.highestNav,
                    performance: f.performance,
                    historicalPrices: f.historicalPrices,
                    isFavorite: f.isFavorite
                };
            });
        // Include funds from same region and similar industry
        const sameRegionCompanies = companyDetailsData.filter(
            (c) => c.location === region && c.id !== companyId
        );

        const additionalComparable = sameRegionCompanies
            .flatMap((c) => {
                const holdings = getHoldingsByCompanyId(c.id)?.items || [];
                const capitalStructure = getCapitalStructureByCompanyId(c.id);
                const investmentExp = getInvestmentExperienceByCompanyId(c.id);
                const regionFunds = fundData.filter((f) => {
                    const holdingCompany = holdingsData.find((h) =>
                        h.items.some((item) => item.fundId === f.isinCode)
                    );
                    return holdingCompany?.companyId === c.id;
                });
                return regionFunds
                    .filter(
                        (f) =>
                            f.type === holding.type &&
                            (c.industry.toLowerCase().includes(industry) ||
                                f.name.toLowerCase().includes(industry))
                    )
                    .map((f) => ({
                        id: f.id,
                        fundId: f.isinCode,
                        name: f.name,
                        type: f.type,
                        relationship: "Managed",
                        accountShares: 0,
                        carryingAmount: 0,
                        ownership: 0,
                        classification: "AFS",
                        fairValue: 0,
                        industry: c.industry,
                        companyName: c.name,
                        totalEquity: capitalStructure?.totalEquity || 0,
                        totalDebt: capitalStructure?.totalDebt || 0,
                        debtToEquityRatio: capitalStructure?.debtToEquityRatio || 0,
                        averageReturn: investmentExp?.averageReturn || "N/A",
                        nav: f.nav,
                        returnRate: f.returnRate,
                        lowestNav: f.lowestNav,
                        highestNav: f.highestNav,
                        performance: f.performance,
                        historicalPrices: f.historicalPrices,
                    }));
            });

        // Combine and deduplicate funds, prioritizing relatedFundsId, then same company, then region/industry
        return Array.from(
            new Map(
                [...relatedComparable, ...comparable, ...additionalComparable].map((fund) => [fund.id, fund])
            ).values()
        )
            .sort((a, b) => {
                // Prioritize related funds
                const isRelatedA = selectedFundData?.relatedIsinCode.includes(a.id.toString());
                const isRelatedB = selectedFundData?.relatedIsinCode.includes(b.id.toString());
                if (isRelatedA && !isRelatedB) return -1;
                if (!isRelatedA && isRelatedB) return 1;
                // Then sort by NAV
                return (b.nav || 0) - (a.nav || 0);
            })
            .slice(0, 3) as ComparableFund[];
    };



    const handleFundClick = (holding: Holding) => {
        if (holding.type === "Fund") {
            const companyId = holdingsData.find((h) =>
                h.items.some((item) => item?.fundId === holding.fundId)
            )?.companyId;
            if (companyId) {
                const comparable = findComparableFunds(holding, companyId);
                setComparableFunds(comparable);
                setSelectedFund(holding);
                setModalOpen(true);
            }
        } else {
            setSelectedHolding(holding);
        }
    };

    const columnDefs: ColDef<Holding>[] = React.useMemo(
        () => [
            {
                headerName: "",
                minWidth: 60,
                maxWidth: 60,
                pinned: "left",
                cellRenderer: (params: any) => (
                    <div className="flex items-center justify-center h-full">
                        <input
                            type="checkbox"
                            checked={selectedHoldings.includes(params.data.id)}
                            onChange={() => {
                                const id = params.data.id;
                                const newSelectedHoldings = selectedHoldings.includes(id)
                                    ? selectedHoldings.filter((holdingId) => holdingId !== id)
                                    : [...selectedHoldings, id];
                                setSelectedHoldings(newSelectedHoldings);
                                handleSelectHolding(newSelectedHoldings);
                            }}
                            aria-label={`Select holding ${params.data.name}`}
                        />
                    </div>
                ),
                headerComponent: SelectAllHeader,
                headerComponentParams: { onSelectAll: handleSelectAll },
                headerClass: "flex items-center justify-center h-full",
                sortable: false,
                filter: false,
            },
            {
                headerName: t["Favorite"],
                field: "isFavorite",
                width: 80,
                pinned: "left",
                cellRenderer: (params: { data: Holding }) => (
                    <button
                        onClick={() => toggleFavorite(params.data.fundId)}
                        aria-label={
                            params.data.isFavorite
                                ? `Remove ${params.data.name} from favorites`
                                : `Add ${params.data.name} to favorites`
                        }
                        className="text-yellow-500 hover:text-yellow-600"
                    >
                        {params.data.isFavorite ? "★" : "☆"}
                    </button>
                ),
                sortable: true,
                filter: false,
            },
            {
                headerName: t["Name"],
                field: "name",
                width: 350,
                pinned: "left",
                sortable: true,
                cellRenderer: (params: { data: Holding }) => (
                    <button
                        onClick={() => handleFundClick(params.data)}
                        className="text-blue-600 hover:underline"
                        aria-label={
                            params.data.type === "Fund"
                                ? `View fund comparison for ${params.data.name}`
                                : `View details for ${params.data.name}`
                        }
                    >
                        {params.data.name}
                    </button>
                ),
            },
            {
                headerName: t["Type"],
                field: "type",
                sortable: true,
            },
            {
                headerName: t["Relationship"],
                field: "relationship",
                sortable: true,
            },
            {
                headerName: t["Account Shares"],
                field: "accountShares",
                sortable: true,
                valueFormatter: (params) => params.value?.toLocaleString() ?? "",
            },
            {
                headerName: t["Carrying Amount"],
                field: "carryingAmount",
                sortable: true,
                valueFormatter: (params) => `$${params.value?.toLocaleString() ?? 0}`,
            },
            {
                headerName: t["Ownership"] + " (%)",
                field: "ownership",
                sortable: true,
                valueGetter: (params) => (params.data?.ownership as number) * 100,
                valueFormatter: (params) => `${params.value?.toFixed(2) ?? 0}%`,
                colId: "ownershipPercentage",
            },
            {
                headerName: t["Classification"],
                field: "classification",
                sortable: true,
            },
            {
                headerName: t["Fair Value"],
                field: "fairValue",
                sortable: true,
                valueFormatter: (params) => `$${params.value?.toLocaleString() ?? 0}`,
            },
        ],
        [handleSelectHolding, handleSelectAll, selectedHoldings, toggleFavorite, setSelectedHolding]
    );

    const defaultColDef: ColDef<Holding> = React.useMemo(
        () => ({
            sortable: true,
            filter: true,
            resizable: true,
            editable: true,
            flex: 1,
            cellStyle: {
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                fontFamily: "Inter, Roboto, sans-serif",
                fontSize: "16px",
            },
        }),
        []
    );

    const onSelectionChanged = React.useCallback(() => {
        if (gridRef.current?.api) {
            const selectedNodes = gridRef.current.api.getSelectedNodes();
            const selectedIds = selectedNodes.map((node: any) => node.data.id);
            setSelectedHoldings(selectedIds);
            handleSelectHolding(selectedIds);
        }
    }, [gridRef, handleSelectHolding]);

    return (
        <div className="ag-theme-quartz w-full h-full">
            <AgGridReact<Holding>
                ref={gridRef}
                rowData={data}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                animateRows={true}
                onSelectionChanged={onSelectionChanged}
                rowSelection="multiple"
                suppressRowClickSelection={true}
                rowHeight={40}
                headerHeight={40}
                multiSortKey="ctrl"
                domLayout="normal"
            />
            <ComparableFundsModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                fund={selectedFund}
                comparableFunds={comparableFunds}
            />
        </div>
    );
};

export default MarketableSecurityGrid;