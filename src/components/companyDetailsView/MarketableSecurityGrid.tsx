import React from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Holding, ComparableFund } from "../../types/Company"; // Import ComparableFund
import { SelectAllHeader } from "./SelectAllHeader";
import {
    companyDetailsData, comparableFundsData,
    getCapitalStructureByCompanyId,
    getHoldingsByCompanyId,
    getInvestmentExperienceByCompanyId,
    holdingsData,
    InvestmentExperienceData,
} from "../../services/CompanyService";

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
    comparableFunds: ComparableFund[]; // Use ComparableFund instead of Holding
}> = ({ isOpen, onClose, fund, comparableFunds }) => {
    if (!isOpen || !fund) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-6xl w-full mx-4 max-h-[80vh] overflow-auto">
                <h2 className="text-xl font-semibold mb-4">
                    Fund Comparison for {fund.name}
                </h2>
                {comparableFunds.length > 0 ? (
                    <table className="w-full border-collapse mb-4">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-2 text-left" aria-label="Fund Name">Fund Name</th>
                            <th className="border p-2 text-left" aria-label="Company Name">Company</th>
                            <th className="border p-2 text-left" aria-label="Industry">Industry</th>
                            <th className="border p-2 text-left" aria-label="Fair Value">Fair Value</th>
                            <th className="border p-2 text-left" aria-label="Carrying Amount">Carrying Amount</th>
                            <th className="border p-2 text-left" aria-label="Ownership Percentage">Ownership (%)</th>
                            <th className="border p-2 text-left" aria-label="Total Equity">Total Equity</th>
                            <th className="border p-2 text-left" aria-label="Total Debt">Total Debt</th>
                            <th className="border p-2 text-left" aria-label="Debt-to-Equity Ratio">D/E Ratio</th>
                            <th className="border p-2 text-left" aria-label="Total Investments">Total Investments</th>
                            <th className="border p-2 text-left" aria-label="Portfolio Exits">Portfolio Exits</th>
                            <th className="border p-2 text-left" aria-label="Average Return">Average Return</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="bg-blue-50">
                            <td className="border p-2 font-medium">{fund.name}</td>
                            <td className="border p-2">N/A</td>
                            <td className="border p-2">Selected Fund</td>
                            <td className="border p-2">${fund.fairValue.toLocaleString()}</td>
                            <td className="border p-2">${fund.carryingAmount.toLocaleString()}</td>
                            <td className="border p-2">{((fund.ownership || 0) * 100).toFixed(2)}%</td>
                            <td className="border p-2">N/A</td>
                            <td className="border p-2">N/A</td>
                            <td className="border p-2">N/A</td>
                            <td className="border p-2">N/A</td>
                            <td className="border p-2">N/A</td>
                            <td className="border p-2">N/A</td>
                        </tr>
                        {comparableFunds.map((f, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                                <td className="border p-2">{f.name}</td>
                                <td className="border p-2">{f.companyName ?? "N/A"}</td>
                                <td className="border p-2">{f.industry ?? "N/A"}</td>
                                <td className="border p-2">${(f.fairValue ?? 0).toLocaleString()}</td>
                                <td className="border p-2">${(f.carryingAmount ?? 0).toLocaleString()}</td>
                                <td className="border p-2">{((f.ownership || 0) * 100).toFixed(2)}%</td>
                                <td className="border p-2">${(f.totalEquity ?? 0).toLocaleString()}</td>
                                <td className="border p-2">${(f.totalDebt ?? 0).toLocaleString()}</td>
                                <td className="border p-2">{(f.debtToEquityRatio ?? 0).toFixed(2)}</td>
                                <td className="border p-2">{f.totalInvestments ?? "N/A"}</td>
                                <td className="border p-2">{f.portfolioExits ?? "N/A"}</td>
                                <td className="border p-2">{f.averageReturn ?? "N/A"}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="mb-4">No comparable funds found.</p>
                )}
                <button
                    onClick={onClose}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    aria-label="Close fund comparison modal"
                >
                    Close
                </button>
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
    const [selectedHoldings, setSelectedHoldings] = React.useState<number[]>([]);
    const [modalOpen, setModalOpen] = React.useState(false);
    const [selectedFund, setSelectedFund] = React.useState<Holding | null>(null);
    const [comparableFunds, setComparableFunds] = React.useState<ComparableFund[]>([]); // Use ComparableFund

    const handleSelectAll = React.useCallback((checked: boolean) => {
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
    }, [gridRef, handleSelectHolding]);

    const findComparableFunds = (holding: Holding, companyId: number): ComparableFund[] => {
        // Find the company details to get industry and region
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

        // Use the provided comparableFundsData for the given companyId
        let comparable;
        if (comparableFundsData) {
            const companyFundsData = comparableFundsData.find((data) => data.companyId === companyId);
            if (companyFundsData) {
                comparable = companyFundsData.items
                    .filter((h) => h.type === "Fund" && h.id !== holding.id) // Exclude the selected fund
                    .map((h) => {
                        const capitalStructure = getCapitalStructureByCompanyId(companyId);
                        const investmentExp = getInvestmentExperienceByCompanyId(companyId);
                        return {
                            ...h,
                            industry: company.industry || "N/A",
                            companyName: company.name || "N/A",
                            totalEquity: capitalStructure?.totalEquity || 0,
                            totalDebt: capitalStructure?.totalDebt || 0,
                            debtToEquityRatio: capitalStructure?.debtToEquityRatio || 0,
                            totalInvestments: investmentExp?.totalInvestments || 0,
                            portfolioExits: investmentExp?.portfolioExits || 0,
                            averageReturn: investmentExp?.averageReturn || "N/A",
                        };
                    });
            }
        }

        // Optionally, fall back to the original logic for other companies
        const sameRegionCompanies = companyDetailsData.filter(
            (c) => c.location === region && c.id !== companyId
        );

        const additionalComparable = sameRegionCompanies
            .flatMap((c) => {
                const holdings = getHoldingsByCompanyId(c.id)?.items || [];
                const capitalStructure = getCapitalStructureByCompanyId(c.id);
                const investmentExp = getInvestmentExperienceByCompanyId(c.id);
                return holdings
                    .filter(
                        (h) =>
                            h.type === "Fund" &&
                            (c.industry.toLowerCase().includes(industry) ||
                                h.name.toLowerCase().includes(industry))
                    )
                    .map((h) => ({
                        ...h,
                        industry: c.industry,
                        companyName: c.name,
                        totalEquity: capitalStructure?.totalEquity || 0,
                        totalDebt: capitalStructure?.totalDebt || 0,
                        debtToEquityRatio: capitalStructure?.debtToEquityRatio || 0,
                        totalInvestments: investmentExp?.totalInvestments || 0,
                        portfolioExits: investmentExp?.portfolioExits || 0,
                        averageReturn: investmentExp?.averageReturn || "N/A",
                    }));
            });

        // Combine and limit to 5 comparable funds
        return Array.from(
            new Map(
                [...comparable as ComparableFund[], ...additionalComparable].map((fund) => [fund.id, fund])
            ).values()
        )
            .sort((a, b) => (b.fairValue || 0) - (a.fairValue || 0)) // Sort by fairValue in descending order
            .slice(0, 5) as ComparableFund[];
    };

    const handleFundClick = (holding: Holding) => {
        if (holding.type === "Fund") {
            const companyId = holdingsData.find((h) =>
                h.items.some((item) => item.id === holding.id)
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
                headerName: "Favorite",
                field: "isFavorite",
                width: 80,
                pinned: "left",
                cellRenderer: (params: { data: Holding }) => (
                    <button
                        onClick={() => toggleFavorite(params.data.id)}
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
                headerName: "Name",
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
                headerName: "Type",
                field: "type",
                sortable: true,
            },
            {
                headerName: "Relationship",
                field: "relationship",
                sortable: true,
            },
            {
                headerName: "Account Shares",
                field: "accountShares",
                sortable: true,
                valueFormatter: (params) => params.value?.toLocaleString() ?? "",
            },
            {
                headerName: "Carrying Amount",
                field: "carryingAmount",
                sortable: true,
                valueFormatter: (params) => `$${params.value?.toLocaleString() ?? 0}`,
            },
            {
                headerName: "Ownership (%)",
                field: "ownership",
                sortable: true,
                valueGetter: (params) => (params.data?.ownership as number) * 100,
                valueFormatter: (params) => `${params.value?.toFixed(2) ?? 0}%`,
                colId: "ownershipPercentage",
            },
            {
                headerName: "Classification",
                field: "classification",
                sortable: true,
            },
            {
                headerName: "Fair Value",
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