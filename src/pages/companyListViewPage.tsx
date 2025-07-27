import React, { useState } from 'react';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import 'ag-grid-community/styles/ag-theme-balham.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Company } from '../types/Company';
import { CompanyListViewFilter, FilterOption } from '../types/CompanyListViewFilter';
import CompanyGrid from '../components/companyListView/CompaniesGrid';
import EditCompanyModal from '../components/editCompany/EditCompanyModal';
import { CompanyListViewFilterModal } from '../components/filterSideBar/CompanyListViewFilterModal';
import {useLanguage} from "../context/LanguageContext";

ModuleRegistry.registerModules([AllCommunityModule]);

const FaBarsIcon = FaBars as React.ComponentType<{ size?: number }>;
const FaTimesIcon = FaTimes as React.ComponentType<{ size?: number }>;

interface CompanyListProps {
    setSelectedCompany: any;
    companies: Company[];
    setCompanies: any;
}

function CompanyListViewPage({
                                 setSelectedCompany,
                                 companies,
                                 setCompanies,
                             }: CompanyListProps) {
    const { t, language, changeLanguage } = useLanguage();
    const [filters, setFilters] = useState<CompanyListViewFilter>({
        search: '',
        industry: '',
        marketCap: { min: '', max: '' },
        totalEquity: { min: '', max: '' },
        totalDebt: { min: '', max: '' },
        debtToEquityRatio: { min: '', max: '' },
        strategy: '',
    });
    const [selectedCompanies, setSelectedCompanies] = useState<number[]>([]);
    const [editCompany, setEditCompany] = useState<Company | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const filterOptions: Record<
        'marketCap' | 'totalEquity' | 'totalDebt' | 'debtToEquityRatio',
        FilterOption[]
    > = {
        marketCap: [
            { label: t["$0-$1B"] || "$0-$1B", min: 0, max: 1000000000 },
            { label: t["$1B-$10B"] || "$1B-$10B", min: 1000000001, max: 10000000000 },
            { label: t["$10B+"] || "$10B+", min: 10000000001, max: Infinity },
        ],
        totalEquity: [
            { label: t["$0-$500M"] || "$0-$500M", min: 0, max: 500000000 },
            { label: t["$500M-$1B"] || "$500M-$1B", min: 500000001, max: 1000000000 },
            { label: t["$1B+"] || "$1B+", min: 1000000001, max: Infinity },
        ],
        totalDebt: [
            { label: t["$0-$500M"] || "$0-$500M", min: 0, max: 500000000 },
            { label: t["$500M-$1B"] || "$500M-$1B", min: 500000001, max: 1000000000 },
            { label: t["$1B+"] || "$1B+", min: 1000000001, max: Infinity },
        ],
        debtToEquityRatio: [
            { label: t["0-1"] || "0-1", min: 0, max: 1 },
            { label: t["1-2"] || "1-2", min: 1.01, max: 2 },
            { label: t["2+"] || "2+", min: 2.01, max: Infinity },
        ],
    };

    const handleDelete = () => {
        setCompanies((prev: Company[]) =>
            prev.filter((company) => !selectedCompanies.includes(company.id))
        );
        setSelectedCompanies([]);
    };

    return (
        <div className="flex flex-col w-full bg-gray-50 p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-4xl font-bold text-gray-800">{t["Morgan Market Insights"] || "Morgan Market Insights"}</h1>
            </div>
            {error && <div className="text-red-500 mb-2">{t[error] || error}</div>}
            <div className="mb-6 flex gap-4 items-center">
                <div className="flex items-center">
                    {selectedCompanies.length > 0 && (
                        <button
                            onClick={handleDelete}
                            className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
                            aria-label={t["Delete Selected"] || "Delete Selected"}
                        >
                            {t["Delete Selected"] || "Delete Selected"}
                        </button>
                    )}
                </div>
            </div>
            <div className="flex flex-row w-full">
                <div
                    className={`bg-white shadow-lg transition-all duration-300 border-r border-gray-200 ${
                        isSidebarOpen ? 'w-80' : 'w-12'
                    } flex flex-col p-4 h-[900px]`}
                >
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="self-end mb-4 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        aria-label={t[isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"] || (isSidebarOpen ? "Collapse sidebar" : "Expand sidebar")}
                    >
                        {isSidebarOpen ? <FaTimesIcon size={20} /> : <FaBarsIcon size={20} />}
                    </button>
                    {isSidebarOpen && (
                        <CompanyListViewFilterModal
                            filters={filters}
                            setFilters={setFilters}
                            filterOptions={filterOptions}
                        />
                    )}
                </div>
                <CompanyGrid
                    companies={companies}
                    filters={filters}
                    setSelectedCompany={setSelectedCompany}
                    language={language}
                    selectedCompanies={selectedCompanies}
                    setSelectedCompanies={setSelectedCompanies}
                    setEditCompany={setEditCompany}
                />
            </div>
            <EditCompanyModal
                editCompany={editCompany}
                setCompanies={setCompanies}
                setEditCompany={setEditCompany}
                language={language}
            />
        </div>
    );
}

export default CompanyListViewPage;