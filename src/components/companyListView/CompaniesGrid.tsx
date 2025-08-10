import React, { useRef, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { ColDef } from 'ag-grid-community';
import { Company, HoldingsData } from '../../types/Company';
import { CompanyListViewFilter } from '../../types/CompanyListViewFilter';
import { Language, translations } from '../../types/Language';
import { getCapitalStructureByCompanyId, getHoldingsByCompanyId, getInvestmentExperienceByCompanyId } from '../../services/CompanyService';

interface CompanyGridProps {
    companies: Company[];
    filters: CompanyListViewFilter;
    setSelectedCompany: (company: Company) => void;
    language: Language;
    selectedCompanies: number[];
    setSelectedCompanies: React.Dispatch<React.SetStateAction<number[]>>;
    setEditCompany: (company: Company | null) => void;
}

const CompanyGrid: React.FC<CompanyGridProps> = ({
                                                     companies,
                                                     filters,
                                                     setSelectedCompany,
                                                     language,
                                                     selectedCompanies,
                                                     setSelectedCompanies,
                                                     setEditCompany,
                                                 }) => {
    const gridRef = useRef<AgGridReact<Company>>(null);
    const t = translations[language];

    const investmentPreferenceColors: Record<string, string> = {
        Stock: 'bg-blue-100 text-blue-800',
        Fund: 'bg-green-100 text-green-800',
        Alternative: 'bg-purple-100 text-purple-800',
        'Venture Capital': 'bg-yellow-100 text-yellow-800',
        'Private Equity': 'bg-indigo-100 text-indigo-800',
        Bond: 'bg-red-100 text-red-800',
        'Real Estate': 'bg-gray-100 text-gray-800',
    };

    const filteredCompanies = useMemo(() => {
        return companies.filter((company) => {
            company.investmentExperience = getInvestmentExperienceByCompanyId(company?.id as number);
            company.capitalStructure = getCapitalStructureByCompanyId(company?.id as number);
            company.holdings = getHoldingsByCompanyId(company.id) as HoldingsData;

            const marketCapMin = filters.marketCap?.min != null ? parseFloat(String(filters.marketCap.min)) : NaN;
            const marketCapMax = filters.marketCap?.max != null ? parseFloat(String(filters.marketCap.max)) : NaN;
            const totalEquityMin = filters.totalEquity?.min != null ? parseFloat(String(filters.totalEquity.min)) : NaN;
            const totalEquityMax = filters.totalEquity?.max != null ? parseFloat(String(filters.totalEquity.max)) : NaN;
            const totalDebtMin = filters.totalDebt?.min != null ? parseFloat(String(filters.totalDebt.min)) : NaN;
            const totalDebtMax = filters.totalDebt?.max != null ? parseFloat(String(filters.totalDebt.max)) : NaN;
            const debtToEquityRatioMin = filters.debtToEquityRatio?.min != null ? parseFloat(String(filters.debtToEquityRatio.min)) : NaN;
            const debtToEquityRatioMax = filters.debtToEquityRatio?.max != null ? parseFloat(String(filters.debtToEquityRatio.max)) : NaN;

            const matchesIndustry =
                !filters?.industry?.length ||
                filters.industry.includes('All') ||
                filters.industry.some((pref) => company.industry?.includes(pref) ?? false);

            const matchesInvestmentPreference =
                !filters?.investmentPreference?.length ||
                filters?.investmentPreference?.includes('All') ||
                filters?.investmentPreference?.some((pref) => company.investmentPreference?.includes(pref || "All")?? false);

            return (
                company.name?.toLowerCase()?.includes(filters.search?.toLowerCase() ?? '') &&
                matchesIndustry &&
                (filters.strategy === '' || (typeof filters.strategy === 'string' && company.investmentExperience?.strategy?.toLowerCase() === filters.strategy.toLowerCase())) &&
                (filters.marketCap?.min == null || filters.marketCap.min === '' || (!isNaN(marketCapMin) && (company.marketCap || 0) >= marketCapMin)) &&
                (filters.marketCap?.max == null || filters.marketCap.max === '' || (!isNaN(marketCapMax) && (company.marketCap || 0) <= marketCapMax)) &&
                (filters.totalEquity?.min == null || filters.totalEquity.min === '' || (!isNaN(totalEquityMin) && (company.capitalStructure?.totalEquity || 0) >= totalEquityMin)) &&
                (filters.totalEquity?.max == null || filters.totalEquity.max === '' || (!isNaN(totalEquityMax) && (company.capitalStructure?.totalEquity || 0) <= totalEquityMax)) &&
                (filters.totalDebt?.min == null || filters.totalDebt.min === '' || (!isNaN(totalDebtMin) && (company.capitalStructure?.totalDebt || 0) >= totalDebtMin)) &&
                (filters.totalDebt?.max == null || filters.totalDebt.max === '' || (!isNaN(totalDebtMax) && (company.capitalStructure?.totalDebt || 0) <= totalDebtMax)) &&
                (filters.debtToEquityRatio?.min == null || filters.debtToEquityRatio.min === '' || (!isNaN(debtToEquityRatioMin) && (company.capitalStructure?.debtToEquityRatio || 0) >= debtToEquityRatioMin)) &&
                (filters.debtToEquityRatio?.max == null || filters.debtToEquityRatio.max === '' || (!isNaN(debtToEquityRatioMax) && (company.capitalStructure?.debtToEquityRatio || 0) <= debtToEquityRatioMax)) &&
                matchesInvestmentPreference
            );
        });
    }, [companies, filters]);

    const handleSelectCompany = (id: number) => {
        setSelectedCompanies((prev) =>
            prev.includes(id) ? prev.filter((companyId) => companyId !== id) : [...prev, id]
        );
    };

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedCompanies(filteredCompanies.map((company) => company.id));
        } else {
            setSelectedCompanies([]);
        }
    };

    const columnDefs: ColDef<Company>[] = [
        {
            headerName: '',
            minWidth: 60,
            maxWidth: 60,
            pinned: 'left',
            cellRenderer: (params: any) => (
                <div className="flex items-center justify-center h-full">
                    <input
                        type="checkbox"
                        checked={selectedCompanies.includes(params.data.id)}
                        onChange={() => handleSelectCompany(params.data.id)}
                        aria-label={`Select company ${params.data.name}`}
                    />
                </div>
            ),
            headerComponent: () => (
                <div className="flex items-center justify-center h-full">
                    <input
                        type="checkbox"
                        checked={selectedCompanies.length === filteredCompanies.length && filteredCompanies.length > 0}
                        onChange={(e) => handleSelectAll(e.target.checked)}
                        aria-label={t["Select all companies"]}
                    />
                </div>
            ),
            headerClass: 'flex items-center justify-start h-full text-lg',
            sortable: false,
        },
        {
            headerName: t["Name"],
            field: 'name',
            minWidth: 230,
            pinned: 'left',
            cellRenderer: (params: any) => (
                <div className="flex items-center justify-start h-full">
                    <button
                        onClick={() => {
                            setSelectedCompany(params.data);
                        }}
                        className="text-gray-600 hover:underline"
                        aria-label={`${t["View marketable securities"]} ${params.data.name}`}
                    >
                        {params.value ? (t[params.value] || params.value) : t["Zero Value"]}
                    </button>
                </div>
            ),
            headerClass: 'flex items-center justify-start h-full text-lg',
            sort: 'asc' as const,
        },
        {
            headerName: t["Industry"],
            field: 'industry',
            minWidth: 200,
            valueFormatter: (params) => (params.value ? (t[params.value] || params.value) : t["Zero Value"]),
            headerClass: 'flex items-center justify-start h-full text-lg',
        },
        {
            headerName: t["Investment Preferences"],
            field: 'investmentPreference',
            minWidth: 300,
            cellRenderer: (params: any) => {
                const preferences = params.value || [];
                return (
                    <div className="flex flex-wrap gap-1 items-center h-full">
                        {preferences.map((pref: string, index: number) => (
                            <span
                                key={index}
                                className={`px-2 py-1 rounded-full text-sm ${investmentPreferenceColors[pref] || 'bg-gray-100 text-gray-800'}`}
                            >
                                {t[pref] || pref}
                            </span>
                        ))}
                    </div>
                );
            },
            headerClass: 'flex items-center justify-start h-full text-lg',
            filter: true,
            sortable: true,
        },
        {
            headerName: t["Headquarters"],
            field: 'headquarters',
            minWidth: 200,
            valueFormatter: (params) => (params.value ? (t[params.value] || params.value) : t["Zero Value"]),
            headerClass: 'flex items-center justify-start h-full text-lg',
        },
        {
            headerName: t["Market Cap"],
            field: 'marketCap',
            minWidth: 150,
            valueFormatter: (params) => (params.value ? `$${params.value.toLocaleString()}` : '$0'),
            headerClass: 'flex items-center justify-start h-full text-lg',
        },
        {
            headerName: t["Total Equity"],
            field: 'capitalStructure.totalEquity',
            minWidth: 150,
            valueFormatter: (params) => (params.value ? `$${params.value.toLocaleString()}` : '$0'),
            headerClass: 'flex items-center justify-start h-full text-lg',
        },
        {
            headerName: t["Total Debt"],
            field: 'capitalStructure.totalDebt',
            minWidth: 150,
            valueFormatter: (params) => (params.value ? `$${params.value.toLocaleString()}` : '$0'),
            headerClass: 'flex items-center justify-start h-full text-lg',
        },
        {
            headerName: t["Debt-to-Equity Ratio"],
            field: 'capitalStructure.debtToEquityRatio',
            minWidth: 150,
            valueFormatter: (params) => (params.value ? params.value.toFixed(2) : '0.00'),
            headerClass: 'flex items-center justify-start h-full text-lg',
        },
        {
            headerName: t["Investment Strategy"],
            field: 'investmentExperience.strategy',
            minWidth: 200,
            headerClass: 'flex items-center justify-start h-full text-lg',
        },
        {
            headerName: t["Total Investments"],
            field: 'investmentExperience.totalInvestments',
            minWidth: 150,
            headerClass: 'flex items-center justify-start h-full text-lg',
        },
        {
            headerName: t["Email"],
            field: 'email',
            minWidth: 200,
            headerClass: 'flex items-center justify-start h-full text-lg',
        },
        {
            headerName: t["Phone"],
            field: 'phone',
            minWidth: 150,
            headerClass: 'flex items-center justify-start h-full text-lg',
        },
        {
            headerName: t["Address"],
            field: 'address',
            minWidth: 200,
            headerClass: 'flex items-center justify-start h-full text-lg',
        },
        {
            headerName: t["Actions"],
            minWidth: 100,
            maxWidth: 120,
            pinned: 'right',
            cellRenderer: (params: any) => (
                <div className="flex items-center justify-center h-full">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            params.context.handleEdit(params.data);
                        }}
                        className="bg-yellow-500 text-white px-4 py-1 rounded-lg hover:bg-yellow-600"
                        aria-label={t["Edit company ${params.data.name}"]}
                    >
                        {t["Edit"]}
                    </button>
                </div>
            ),
            headerClass: 'flex items-center justify-start h-full text-lg',
            sortable: false,
        },
    ];

    const defaultColDef: ColDef<Company> = {
        sortable: true,
        filter: true,
        resizable: true,
        flex: 1,
        minWidth: 100,
        editable: true,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            fontFamily: 'Arial, sans-serif',
            fontSize: '18px',
        },
    };

    const onSelectionChanged = () => {
        if (gridRef.current?.api) {
            const selectedNodes = gridRef.current.api.getSelectedNodes();
            const selectedIds = selectedNodes.map((node: any) => node.data.id);
            setSelectedCompanies(selectedIds);
        }
    };

    return (
        <div className="flex flex-col flex-grow">
            <div className="ag-theme-quartz" style={{ height: '900px', width: '100%' }}>
                <AgGridReact
                    ref={gridRef}
                    rowHeight={50}
                    headerHeight={50}
                    rowData={filteredCompanies}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    rowSelection="multiple"
                    onSelectionChanged={onSelectionChanged}
                    suppressRowClickSelection={true}
                    domLayout="normal"
                    multiSortKey="ctrl"
                    context={{ handleEdit: (company: Company) => setEditCompany(company) }}
                />
            </div>
        </div>
    );
};

export default CompanyGrid;