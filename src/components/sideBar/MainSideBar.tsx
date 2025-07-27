import { FaGlobe } from 'react-icons/fa';
import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useNavigate, useLocation } from 'react-router-dom';
import {Company} from "../../types/Company";

interface MainSideBarProps {
    isSidebarExpanded: boolean;
    toggleSidebar: () => void;
    setSelectedCompany: (company: Company | null) => void;
}

const FaGlobeIcon = FaGlobe as React.ComponentType<{ size?: number }>;

const MainSideBar: React.FC<MainSideBarProps> = ({
                                                     isSidebarExpanded,
                                                     toggleSidebar,
                                                     setSelectedCompany,
                                                 }) => {
    const { t, language, changeLanguage } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();

    const setEnglish = () => {
        changeLanguage("en_us");
    };

    const setChinese = () => {
        changeLanguage("zh_tw");
    };

    const handleCompaniesClick = () => {
        setSelectedCompany(null); // Clear selected company
        navigate("/companies");
    };

    const handleVisualizationsClick = () => {
        navigate("/visualizations");
    };

    return (
        <div
            className={`fixed inset-y-0 left-0 bg-gray-800 text-white flex flex-col transition-all duration-300 ease-in-out z-50 ${
                isSidebarExpanded ? "w-64" : "w-16"
            }`}
        >
            <div className="p-4 flex items-center justify-between">
                {isSidebarExpanded && <h2 className="text-xl font-bold">{t["Navigation"]}</h2>}
                <button
                    onClick={toggleSidebar}
                    className="text-white"
                    aria-label={t[isSidebarExpanded ? "Collapse sidebar" : "Expand sidebar"] || (isSidebarExpanded ? "Collapse sidebar" : "Expand sidebar")}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isSidebarExpanded ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
                        />
                    </svg>
                </button>
            </div>
            <nav className="flex-1 flex flex-col">
                <div className="flex-1">
                    <button
                        onClick={handleCompaniesClick}
                        className={`w-full flex items-center p-4 ${
                            location.pathname === "/companies" ? "bg-blue-500" : "bg-gray-600"
                        } hover:bg-blue-600 transition-colors`}
                        title={t["Companies"]}
                        aria-label={t["Companies"]}
                    >
                        <svg
                            className="w-6 h-6 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                        </svg>
                        {isSidebarExpanded && <span>{t["Companies"]}</span>}
                    </button>
                    <button
                        onClick={handleVisualizationsClick}
                        className={`w-full flex items-center p-4 ${
                            location.pathname === "/visualizations" ? "bg-blue-500" : "bg-gray-600"
                        } hover:bg-blue-600 transition-colors`}
                        title={t["Visualizations"]}
                        aria-label={t["Visualizations"]}
                    >
                        <svg
                            className="w-6 h-6 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                        </svg>
                        {isSidebarExpanded && <span>{t["Visualizations"]}</span>}
                    </button>
                </div>
                <div className="p-4 flex items-center">
                    {isSidebarExpanded ? (
                        <>
                            <div className="mr-2"> <FaGlobeIcon size={24} /></div>
                            <div className="flex flex-row space-x-2">
                                <button
                                    onClick={setEnglish}
                                    className={`flex-1 p-2 text-sm ${
                                        language === "en_us" ? "bg-blue-500" : "bg-gray-600"
                                    } hover:bg-blue-600 transition-colors rounded`}
                                    title={t["English"]}
                                    aria-label={t["English"]}
                                >
                                    {t["English"]}
                                </button>
                                <button
                                    onClick={setChinese}
                                    className={`flex-1 p-2 text-sm ${
                                        language === "zh_tw" ? "bg-blue-500" : "bg-gray-600"
                                    } hover:bg-blue-600 transition-colors rounded`}
                                    title={t["Chinese"]}
                                    aria-label={t["Chinese"]}
                                >
                                    {t["Chinese"]}
                                </button>
                            </div>
                        </>
                    ) : (
                        <button
                            className="w-full flex items-center p-4 bg-gray-600 hover:bg-blue-600 transition-colors"
                            title={t["English"]}
                            aria-label={t["English"]}
                            disabled
                        >
                            <FaGlobeIcon size={24} />
                        </button>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default MainSideBar;