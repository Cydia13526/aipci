import React, { useCallback, useMemo } from "react";
import "./App.css";
import { Company } from "./types/Company";
import CompanyListViewPage from "./pages/companyListViewPage";
import CompanyDetailsViewPage from "./pages/companyDetailsViewPage";
import { companyDetailsData } from "./services/CompanyService";
import MainSideBar from "./components/sideBar/MainSideBar";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import VisualizationsPage from "./pages/VisualizationsPage";

function AppBody() {
    const navigate = useNavigate();
    const initialCompanies = useMemo(() => companyDetailsData, []);
    const [selectedCompany, setSelectedCompany] = React.useState<Company | null>(null);
    const [companies, setCompanies] = React.useState<Company[]>(initialCompanies);
    const [isSidebarExpanded, setIsSidebarExpanded] = React.useState(false);

    const updateCompany = useCallback((updatedCompany: Company) => {
        setCompanies((prev: Company[]) =>
            prev.map((c) => (c.id === updatedCompany.id ? updatedCompany : c))
        );
    }, []);

    const toggleSidebar = useCallback(() => {
        setIsSidebarExpanded((prev) => !prev);
    }, []);

    // Memoize handleSelectCompany to prevent re-creation
    const handleSelectCompany = useCallback(
        (company: Company | null) => {
            setSelectedCompany(company);
            if (company) {
                navigate(`/company/${company.id}`);
            } else {
                navigate("/companies");
            }
        },
        [navigate]
    );

    return (
        <div className="flex min-h-screen">
            <MainSideBar
                isSidebarExpanded={isSidebarExpanded}
                toggleSidebar={toggleSidebar}
                setSelectedCompany={handleSelectCompany} // Now compatible with Company | null
            />
            <div
                className={`flex-1 flex flex-col transition-all duration-300 ${
                    isSidebarExpanded ? "ml-64" : "ml-16"
                }`}
            >
                <Routes>
                    {/* Redirect root to /companies */}
                    <Route path="/" element={<Navigate to="/companies" replace />} />
                    {/* Companies list route */}
                    <Route
                        path="/companies"
                        element={
                            <CompanyListViewPage
                                setSelectedCompany={handleSelectCompany} // Update here as well
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
                    {/* Visualizations route */}
                    <Route path="/visualizations" element={<VisualizationsPage />} />
                    {/* Catch-all route for 404 */}
                    <Route path="*" element={<div className="p-4">404 Not Found</div>} />
                </Routes>
            </div>
        </div>
    );
}

export default AppBody;