import React from "react";
import "./App.css";
import { Company } from "./types/Company";
import CompanyListViewPage from "./pages/companyListViewPage";
import CompanyDetailsViewPage from "./pages/companyDetailsViewPage";
import { companyDetailsData } from "./services/CompanyService";
import MainSideBar from "./components/sideBar/MainSideBar";
import { Routes, Route, useNavigate, Navigate, useLocation } from "react-router-dom";

function AppBody() {
    const [selectedCompany, setSelectedCompany] = React.useState<Company | null>(null);
    const [companies, setCompanies] = React.useState<Company[]>(companyDetailsData);
    const [isSidebarExpanded, setIsSidebarExpanded] = React.useState(false);
    const navigate = useNavigate();

    const updateCompany = (updatedCompany: Company) => {
        setCompanies((prev: Company[]) =>
            prev.map((c) => (c.id === updatedCompany.id ? updatedCompany : c))
        );
    };

    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    const handleSelectCompany = (company: Company) => {
        setSelectedCompany(company);
        navigate(`/company/${company.id}`);
    };

    return (
        <div className="flex min-h-screen">
            <MainSideBar
                isSidebarExpanded={isSidebarExpanded}
                toggleSidebar={toggleSidebar}
                setSelectedCompany={setSelectedCompany}
            />
            <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarExpanded ? "ml-64" : "ml-16"}`}>
                <Routes>
                    {/* Redirect root to /companies */}
                    <Route path="/" element={<Navigate to="/companies" replace />} />
                    {/* Companies list route */}
                    <Route
                        path="/companies"
                        element={
                            <CompanyListViewPage
                                setSelectedCompany={handleSelectCompany}
                                companies={companies}
                                setCompanies={setCompanies}
                            />
                        }
                    />
                    {/* Company details route */}
                    <Route
                        path="/company/:id"
                        element={
                            selectedCompany ? (
                                <CompanyDetailsViewPage
                                    company={selectedCompany}
                                    updateCompany={updateCompany}
                                    setSelectedCompany={setSelectedCompany}
                                />
                            ) : (
                                <Navigate to="/companies" replace />
                            )
                        }
                    />
                    {/* Visualizations route placeholder */}
                    <Route path="/visualizations" element={<div>Visualizations Page (Under Construction)</div>} />
                    {/* Catch-all route for 404 */}
                    <Route path="*" element={<div>404 Not Found</div>} />
                </Routes>
            </div>
        </div>
    );
}

export default AppBody;