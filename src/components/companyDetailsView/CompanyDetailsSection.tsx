import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Company } from "../../types/Company";

const FaChevronDownIcon = FaChevronDown as React.ComponentType<{ size?: number }>;
const FaChevronUpIcon = FaChevronUp as React.ComponentType<{ size?: number }>;

interface InfoContentProps {
    company: Company;
    selectedInfoTab: "companyInfo" | "capitalStructure" | "investmentExperience";
}

interface CompanyDetailsSectionProps {
    company: Company;
}

const renderInfoContent = ({ company, selectedInfoTab }: InfoContentProps) => {
    switch (selectedInfoTab) {
        case "companyInfo":
            return (
                <div className="p-4">
                    <p className="mb-2 text-gray-600 text-sm">
                        <strong>Industry:</strong> {company.industry ?? "N/A"}
                    </p>
                    <p className="mb-2 text-gray-600 text-sm">
                        <strong>Market Cap:</strong>{" "}
                        {company.marketCap != null ? `$${company.marketCap.toLocaleString()}` : "N/A"}
                    </p>
                    <p className="mb-2 text-gray-600 text-sm">
                        <strong>Headquarters:</strong> {company.headquarters ?? "N/A"}
                    </p>
                    <p className="mb-2 text-gray-600 text-sm">
                        <strong>Email:</strong> {company.email ?? "N/A"}
                    </p>
                    <p className="mb-2 text-gray-600 text-sm">
                        <strong>Phone:</strong> {company.phone ?? "N/A"}
                    </p>
                    <p className="mb-2 text-gray-600 text-sm">
                        <strong>Address:</strong> {company.address ?? "N/A"}
                    </p>
                </div>
            );
        case "capitalStructure":
            if (!company.capitalStructure) {
                return <div className="p-4 text-gray-600 text-sm">No capital structure data available.</div>;
            }
            return (
                <div className="p-4">
                    <p className="mb-2 text-gray-600 text-sm">
                        <strong>Total Equity:</strong> ${company.capitalStructure.totalEquity.toLocaleString()}
                    </p>
                    <p className="mb-2 text-gray-600 text-sm">
                        <strong>Total Debt:</strong> ${company.capitalStructure.totalDebt.toLocaleString()}
                    </p>
                    <p className="mb-2 text-gray-600 text-sm">
                        <strong>Debt-to-Equity Ratio:</strong>{" "}
                        {company.capitalStructure.debtToEquityRatio.toFixed(2)}
                    </p>
                    <p className="mb-2 text-gray-600 text-sm">
                        <strong>Convertible Bonds:</strong>{" "}
                        {company.capitalStructure.convertibleBonds != null
                            ? `$${company.capitalStructure.convertibleBonds.toLocaleString()}`
                            : "N/A"}
                    </p>
                    <p className="mb-2 text-gray-600 text-sm">
                        <strong>Preferred Stock:</strong>{" "}
                        {company.capitalStructure.preferredStock != null
                            ? `$${company.capitalStructure.preferredStock.toLocaleString()}`
                            : "N/A"}
                    </p>
                    <p className="mb-2 text-gray-600 text-sm">
                        <strong>Last Updated:</strong> {company.capitalStructure.lastUpdated}
                    </p>
                </div>
            );
        case "investmentExperience":
            if (!company.investmentExperience) {
                return <div className="p-4 text-gray-600 text-sm">No investment experience data available.</div>;
            }
            return (
                <div className="p-4">
                    <p className="mb-2 text-gray-600 text-sm">
                        <strong>Strategy:</strong> {company.investmentExperience.strategy}
                    </p>
                    <p className="mb-2 text-gray-600 text-sm">
                        <strong>Total Investments:</strong> {company.investmentExperience.totalInvestments}
                    </p>
                    <p className="mb-2 text-gray-600 text-sm">
                        <strong>Portfolio Exits:</strong> {company.investmentExperience.portfolioExits}
                    </p>
                    <p className="mb-2 text-gray-600 text-sm">
                        <strong>Average Return:</strong> {company.investmentExperience.averageReturn}
                    </p>
                    <p className="mb-2 text-gray-600 text-sm">
                        <strong>Years Active:</strong> {company.investmentExperience.yearsActive}
                    </p>
                    <div className="mt-2">
                        <h3 className="text-sm font-medium text-gray-700 mb-1">Notable Investments</h3>
                        {company.investmentExperience.notableInvestments.length > 0 ? (
                            company.investmentExperience.notableInvestments.map((investment, index) => (
                                <p key={index} className="text-gray-600 text-sm">
                                    <strong>{investment.name}</strong> ({investment.industry}, {investment.date}): {investment.amount}
                                </p>
                            ))
                        ) : (
                            <p className="text-gray-600 text-sm">No notable investments available.</p>
                        )}
                    </div>
                </div>
            );
        default:
            return <div className="p-4 text-gray-600 text-sm">Invalid tab selected.</div>;
    }
};

const CompanyDetailsSection: React.FC<CompanyDetailsSectionProps> = ({ company }) => {
    const [isInfoSectionOpen, setIsInfoSectionOpen] = React.useState(false);
    const [selectedInfoTab, setSelectedInfoTab] = React.useState<
        "companyInfo" | "capitalStructure" | "investmentExperience"
    >("companyInfo");

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
            <button
                className="flex items-center justify-between w-full text-lg font-semibold text-gray-900 mb-2 focus:outline-none"
                onClick={() => setIsInfoSectionOpen(!isInfoSectionOpen)}
                aria-label={isInfoSectionOpen ? "Collapse Information Section" : "Expand Information Section"}
            >
                <span>Company Details</span>
                {isInfoSectionOpen ? <FaChevronUpIcon size={16} /> : <FaChevronDownIcon size={16} />}
            </button>
            {isInfoSectionOpen && (
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/4 bg-gray-50 p-4 rounded-lg">
                        <button
                            onClick={() => setSelectedInfoTab("companyInfo")}
                            className={`w-full text-left p-3 rounded-md mb-2 text-sm font-medium transition-colors duration-200 ${
                                selectedInfoTab === "companyInfo"
                                    ? "bg-blue-600 text-white"
                                    : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                            }`}
                            aria-label="View Company Information"
                        >
                            Company Information
                        </button>
                        <button
                            onClick={() => setSelectedInfoTab("capitalStructure")}
                            className={`w-full text-left p-3 rounded-md mb-2 text-sm font-medium transition-colors duration-200 ${
                                selectedInfoTab === "capitalStructure"
                                    ? "bg-green-600 text-white"
                                    : "bg-green-100 text-green-800 hover:bg-green-200"
                            }`}
                            aria-label="View Capital Structure"
                        >
                            Capital Structure
                        </button>
                        <button
                            onClick={() => setSelectedInfoTab("investmentExperience")}
                            className={`w-full text-left p-3 rounded-md text-sm font-medium transition-colors duration-200 ${
                                selectedInfoTab === "investmentExperience"
                                    ? "bg-purple-600 text-white"
                                    : "bg-purple-100 text-purple-800 hover:bg-purple-200"
                            }`}
                            aria-label="View Investment Experience"
                        >
                            Investment Experience
                        </button>
                    </div>
                    <div className="w-full md:w-3/4 bg-white p-4 rounded-lg border border-gray-200">
                        {renderInfoContent({ company, selectedInfoTab })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CompanyDetailsSection;