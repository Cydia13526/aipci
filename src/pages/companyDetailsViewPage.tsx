import React from "react";
import {AgGridReact} from "ag-grid-react";
import {
    ModuleRegistry,
    AllCommunityModule,
} from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import {FaBars, FaTimes} from "react-icons/fa";
import {Company, Holding, HoldingsData} from "../types/Company";
import {CompanyDetailsViewFilter, FilterOptions} from "../types/CompanyDetailsViewFilter";
import {useNavigate} from 'react-router-dom';
import CompanyDetailsSection from "../components/companyDetailsView/CompanyDetailsSection";
import CompanyDetailsViewFilterModal from "../components/filterSideBar/CompanyDetailsViewFilterModal";
import MarketableSecurityGrid from "../components/companyDetailsView/MarketableSecurityGrid";
import {
    getCapitalStructureByCompanyId,
    getHoldingsByCompanyId,
    getInvestmentExperienceByCompanyId
} from "../services/CompanyService";
import {useLanguage} from "../context/LanguageContext";

import CompanySummaryCards from "../components/companyDetailsView/CompanySummaryCards";
import CompanyQuickFilterBar from "../components/companyDetailsView/quickFilter/CompanyQuickFilterBar";

const FaTimesIcon = FaTimes as React.ComponentType<{ size?: number }>;
const FaBarsIcon = FaBars as React.ComponentType<{ size?: number }>;

ModuleRegistry.registerModules([AllCommunityModule]);

type CompanyDetailsViewPageProps = {
    company: Company,
    updateCompany: any,
    setSelectedCompany: (company: Company | null) => void;
};

function CompanyDetailsViewPage({company, updateCompany, setSelectedCompany}: CompanyDetailsViewPageProps) {
    const {t, language, changeLanguage} = useLanguage();
    const navigate = useNavigate();
    company.investmentExperience = getInvestmentExperienceByCompanyId(company?.id as number);
    company.capitalStructure = getCapitalStructureByCompanyId(company?.id as number);
    company.holdings = getHoldingsByCompanyId(company.id) as HoldingsData;
    const [data, setData] = React.useState<Holding[]>(company?.holdings?.items);
    const [filters, setFilters] = React.useState<CompanyDetailsViewFilter>({
        search: "",
        type: "",
        relationship: "",
        classification: "",
        accountShares: {min: "", max: ""},
        carryingAmount: {min: "", max: ""},
        ownership: {min: "", max: ""},
        fairValue: {min: "", max: ""},
    });
    const [selectedHolding, setSelectedHolding] = React.useState<Holding | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const [selectedHoldings, setSelectedHoldings] = React.useState<number[]>([]);
    const [quickAmountFilterColumn, setQuickAmountFilterColumn] = React.useState<string>("carryingAmount");
    const [quickFromYearFilterColumn, setQuickFromYearFilterColumn] = React.useState<string>("2000");
    const [quickToYearFilterColumn, setQuickToYearFilterColumn] = React.useState<string>("2025");
    const [quickFilterColumns, setQuickFilterColumns] = React.useState<string[]>(["Q1"]); // Changed to array

    const gridRef = React.useRef<AgGridReact<Holding>>(null);

    const filterOptions: FilterOptions = {
        accountShares: [
            {label: t["0-5,000"] || "0-5,000", min: 0, max: 5000},
            {label: t["5,001-10,000"] || "5,001-10,000", min: 5001, max: 10000},
            {label: t["10,001+"] || "10,001+", min: 10001, max: Infinity},
        ],
        carryingAmount: [
            {label: t["$0-$500,000"] || "$0-$500,000", min: 0, max: 500000},
            {label: t["$500,001-$1,000,000"] || "$500,001-$1,000,000", min: 500001, max: 1000000},
            {label: t["$1,000,001+"] || "$1,000,001+", min: 1000001, max: Infinity},
        ],
        ownership: [
            {label: t["0-1%"] || "0-1%", min: 0, max: 1},
            {label: t["1.01-5%"] || "1.01-5%", min: 1.01, max: 5},
            {label: t["5.01%+"] || "5.01%+", min: 5.01, max: Infinity},
        ],
        fairValue: [
            {label: t["$0-$500,000"] || "$0-$500,000", min: 0, max: 500000},
            {label: t["$500,001-$1,000,000"] || "$500,001-$1,000,000", min: 500001, max: 1000000},
            {label: t["$1,000,001+"] || "$1,000,001+", min: 1000001, max: Infinity},
        ],
    };

    React.useEffect(() => {
        updateCompany({...company, holdings: data});
    }, [data, company, updateCompany]);

    const filteredData = React.useMemo(() => {
        return data.filter((item) => {
            const accountSharesMin = parseFloat(filters.accountShares.min as string);
            const accountSharesMax = parseFloat(filters.accountShares.max as string);
            const carryingAmountMin = parseFloat(filters.carryingAmount.min as string);
            const carryingAmountMax = parseFloat(filters.carryingAmount.max as string);
            const ownershipMin = parseFloat(filters.ownership.min as string);
            const ownershipMax = parseFloat(filters.ownership.max as string);
            const fairValueMin = parseFloat(filters.fairValue.min as string);
            const fairValueMax = parseFloat(filters.fairValue.max as string);

            let itemYear: number | undefined;
            let itemQuarter: string | undefined;

            if (item.year && item.quarter) {
                itemYear = item.year;
                itemQuarter = item.quarter;
            }

            const fromYear = quickFromYearFilterColumn ? parseInt(quickFromYearFilterColumn, 10) : null;
            const toYear = quickToYearFilterColumn ? parseInt(quickToYearFilterColumn, 10) : null;
            const quarters = quickFilterColumns.length > 0 ? quickFilterColumns : ["Q1", "Q2", "Q3", "Q4"]; // Include all if none selected

            const matchesYearRange =
                (!fromYear || (itemYear && itemYear >= fromYear)) &&
                (!toYear || (itemYear && itemYear <= toYear));
            const matchesQuarter = !itemQuarter || quarters.includes(itemQuarter);

            return (
                item.name.toLowerCase().includes(filters.search.toLowerCase()) &&
                (filters.type === "" || item.type === filters.type) &&
                (filters.relationship === "" || item.relationship === filters.relationship) &&
                (filters.classification === "" || item.classification === filters.classification) &&
                (filters.accountShares.min === "" || (!isNaN(accountSharesMin) && item.accountShares >= accountSharesMin)) &&
                (filters.accountShares.max === "" || (!isNaN(accountSharesMax) && item.accountShares <= accountSharesMax)) &&
                (filters.carryingAmount.min === "" || (!isNaN(carryingAmountMin) && item.carryingAmount >= carryingAmountMin)) &&
                (filters.carryingAmount.max === "" || (!isNaN(carryingAmountMax) && item.carryingAmount <= carryingAmountMax)) &&
                (filters.ownership.min === "" || (!isNaN(ownershipMin) && item.ownership * 100 >= ownershipMin)) &&
                (filters.ownership.max === "" || (!isNaN(ownershipMax) && item.ownership * 100 <= ownershipMax)) &&
                (filters.fairValue.min === "" || (!isNaN(fairValueMin) && item.fairValue >= fairValueMin)) &&
                (filters.fairValue.max === "" || (!isNaN(fairValueMax) && item.fairValue <= fairValueMax)) &&
                matchesYearRange &&
                matchesQuarter
            );
        });
    }, [data, filters, quickFromYearFilterColumn, quickToYearFilterColumn, quickFilterColumns]);

    const toggleFavorite = React.useCallback((id: number) => {
        setData((prev) =>
            prev.map((item) =>
                item.fundId === id ? {...item, isFavorite: !item.isFavorite} : item
            )
        );
    }, []);

    const handleSelectHolding = React.useCallback((ids: number[]) => {
        setSelectedHoldings(ids);
    }, []);

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
        }
    }, []);

    const exportToCSV = React.useCallback(() => {
        if (gridRef.current && gridRef.current.api) {
            gridRef.current.api.exportDataAsCsv({
                fileName: `${company.name}_holdings.csv`,
                columnKeys: [
                    "name",
                    "type",
                    "relationship",
                    "accountShares",
                    "carryingAmount",
                    "ownershipPercentage",
                    "classification",
                    "fairValue",
                ],
            });
        }
    }, [company.name]);

    const applyQuickFilter = (minValue: number) => {
        if (quickAmountFilterColumn) {
            setFilters((prev) => ({
                ...prev,
                [quickAmountFilterColumn]: {min: minValue.toString(), max: ""}
            }));
        }
    };

    const resetFilters = () => {
        setQuickAmountFilterColumn("");
        setQuickFromYearFilterColumn("2000");
        setQuickToYearFilterColumn("2025");
        setQuickFilterColumns(["Q1"]); // Reset to default Q1
        setFilters({
            search: "",
            type: "",
            relationship: "",
            classification: "",
            accountShares: {min: "", max: ""},
            carryingAmount: {min: "", max: ""},
            ownership: {min: "", max: ""},
            fairValue: {min: "", max: ""},
        });
    };

    const handleCompaniesClick = () => {
        setSelectedCompany(null); // Clear selected company
        navigate("/companies");
    };

    const toggleQuarter = (quarter: string) => {
        setQuickFilterColumns((prev) =>
            prev.includes(quarter)
                ? prev.filter((q) => q !== quarter) // Deselect quarter
                : [...prev, quarter] // Select quarter
        );
    };

    const summary = React.useMemo(
        () => ({
            totalCarryingAmount: filteredData.reduce((sum, item) => sum + item.carryingAmount, 0),
            totalFairValue: filteredData.reduce((sum, item) => sum + item.fairValue, 0),
            ownershipDistribution: filteredData.reduce(
                (acc, item) => {
                    acc[item.type] = (acc[item.type] || 0) + item.ownership * 100;
                    return acc;
                },
                {} as Record<string, number>
            ),
        }),
        [filteredData]
    );

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-center p-3 bg-white shadow-sm mb-3 rounded-lg">
                    <h1 className="text-2xl font-semibold text-gray-900">
                        {(company.name ? (t[company.name] || company.name) : t["Zero Value"])} {t["Holdings"] || "Holdings"}
                    </h1>
                    <div className="flex gap-3">
                        <button
                            onClick={() => handleCompaniesClick()}
                            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200 text-sm font-medium"
                            aria-label={t["Back to Companies"] || "Back to Companies"}
                        >
                            {t["Back to Companies"] || "Back to Companies"}
                        </button>
                    </div>
                </div>
                <CompanyDetailsSection company={company}/>
                <CompanySummaryCards summary={summary}/>
                <CompanyQuickFilterBar
                    summary={summary}
                    quickAmountFilterColumn={quickAmountFilterColumn}
                    setQuickAmountFilterColumn={setQuickAmountFilterColumn}
                    quickFromYearFilterColumn={quickFromYearFilterColumn}
                    setQuickFromYearFilterColumn={setQuickFromYearFilterColumn}
                    quickToYearFilterColumn={quickToYearFilterColumn}
                    setQuickToYearFilterColumn={setQuickToYearFilterColumn}
                    quickFilterColumns={quickFilterColumns}
                    toggleQuarter={toggleQuarter}
                    applyQuickFilter={applyQuickFilter}
                    resetFilters={resetFilters}
                />
                <div
                    className="flex flex-row w-full"
                    style={{height: "calc(100vh - 64px - 80px - 104px - 64px)"}}
                >
                    <div
                        className={`bg-white shadow-lg transition-all duration-300 border-r border-gray-200 ${
                            isSidebarOpen ? "w-80" : "w-12"
                        } flex flex-col p-4 h-full`}
                    >
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="self-end mb-4 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                            aria-label={t[isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"] || (isSidebarOpen ? "Collapse sidebar" : "Expand sidebar")}
                        >
                            {isSidebarOpen ? <FaTimesIcon size={20}/> : <FaBarsIcon size={20}/>}
                        </button>
                        {isSidebarOpen && (
                            <CompanyDetailsViewFilterModal
                                filters={filters}
                                setFilters={setFilters}
                                filterOptions={filterOptions}
                                exportToCSV={exportToCSV}
                            />
                        )}
                    </div>
                    <div
                        className={`flex-grow transition-all duration-300 ${
                            isSidebarOpen ? "ml-80" : "ml-12"
                        } md:ml-0 h-full`}
                    >
                        {filteredData.length === 0 ? (
                            <div
                                className="p-4 text-gray-600 text-center">{t["No holdings match the current filters"] || "No holdings match the current filters"}</div>
                        ) : (
                            <MarketableSecurityGrid
                                data={filteredData}
                                handleSelectHolding={handleSelectHolding}
                                toggleFavorite={toggleFavorite}
                                setSelectedHolding={setSelectedHolding}
                                gridRef={gridRef}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyDetailsViewPage;