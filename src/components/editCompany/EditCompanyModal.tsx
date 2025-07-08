import React from 'react';
import { Company } from '../../types/Company';
import {Translations} from "../../services/TransaltionService";

interface EditCompanyModalProps {
    editCompany: Company | null;
    setCompanies: React.Dispatch<React.SetStateAction<Company[]>>;
    setEditCompany: (company: Company | null) => void;
    language: 'en_us' | 'zh_cn';
}

const EditCompanyModal: React.FC<EditCompanyModalProps> = ({
                                                               editCompany,
                                                               setCompanies,
                                                               setEditCompany,
                                                               language,
                                                           }) => {
    // Helper function to get translation based on language
    const getTranslation = (enKey: string) => {
        const translation = Translations.find(t => t.en_us === enKey);
        return translation ? translation[language] : enKey;
    };

    if (!editCompany) return null;

    const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);

        const updatedCompany: Company = {
            ...editCompany,
            name: (formData.get('name') as string) || editCompany.name,
            industry: (formData.get('industry') as string) || editCompany.industry || '',
            marketCap: parseInt(formData.get('marketCap') as string) || editCompany.marketCap || 0,
            headquarters: (formData.get('headquarters') as string) || editCompany.headquarters || '',
            email: (formData.get('email') as string) || editCompany.email || '',
            phone: (formData.get('phone') as string) || editCompany.phone || '',
            address: (formData.get('address') as string) || editCompany.address || '',
            country: (formData.get('country') as string) || editCompany.country || '',
            capitalStructure: {
                ...editCompany.capitalStructure,
                id: editCompany.capitalStructure?.id || 0,
                companyId: editCompany.id,
                totalEquity: parseInt(formData.get('totalEquity') as string) || editCompany.capitalStructure?.totalEquity || 0,
                totalDebt: parseInt(formData.get('totalDebt') as string) || editCompany.capitalStructure?.totalDebt || 0,
                debtToEquityRatio: parseFloat(formData.get('debtToEquityRatio') as string) || editCompany.capitalStructure?.debtToEquityRatio || 0,
                convertibleBonds: parseInt(formData.get('convertibleBonds') as string) || editCompany.capitalStructure?.convertibleBonds || 0,
                preferredStock: parseInt(formData.get('preferredStock') as string) || editCompany.capitalStructure?.preferredStock || 0,
                bonds: parseInt(formData.get('bonds') as string) || editCompany.capitalStructure?.bonds || 0,
                greenBonds: parseInt(formData.get('greenBonds') as string) || editCompany.capitalStructure?.greenBonds || 0,
                lastUpdated: (formData.get('lastUpdated') as string) || editCompany.capitalStructure?.lastUpdated || new Date().toISOString(),
            },
            investmentExperience: {
                ...editCompany.investmentExperience,
                id: editCompany.investmentExperience?.id || 0,
                companyId: editCompany.id,
                strategy: (formData.get('strategy') as string) || editCompany.investmentExperience?.strategy || '',
                totalInvestments: parseInt(formData.get('totalInvestments') as string) || editCompany.investmentExperience?.totalInvestments || 0,
                portfolioExits: parseInt(formData.get('portfolioExits') as string) || editCompany.investmentExperience?.portfolioExits || 0,
                notableInvestments: editCompany.investmentExperience?.notableInvestments || [],
                averageReturn: (formData.get('averageReturn') as string) || editCompany.investmentExperience?.averageReturn || '',
                yearsActive: parseInt(formData.get('yearsActive') as string) || editCompany.investmentExperience?.yearsActive || 0,
            },
        };

        setCompanies((prev: Company[]) =>
            prev.map((c) => (c.id === editCompany.id ? updatedCompany : c))
        );
        setEditCompany(null);
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            onClick={() => setEditCompany(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="edit-company-modal-title"
        >
            <div
                className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={() => setEditCompany(null)}
                    aria-label={getTranslation('Close')}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 id="edit-company-modal-title" className="text-3xl font-semibold text-gray-800 mb-6">
                    {getTranslation('Edit Company')}
                </h2>
                <form onSubmit={handleEditSubmit} className="space-y-6">
                    {/* General Information */}
                    <div className="border-b pb-4">
                        <h3 className="text-xl font-medium text-gray-700 mb-4">{getTranslation('General Information')}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-600">{getTranslation('Name')}</label>
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={editCompany.name}
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">{getTranslation('Industry')}</label>
                                <input
                                    type="text"
                                    name="industry"
                                    defaultValue={editCompany.industry || ''}
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">{getTranslation('Market Cap')}</label>
                                <input
                                    type="number"
                                    name="marketCap"
                                    defaultValue={editCompany.marketCap || ''}
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">{getTranslation('Headquarters')}</label>
                                <input
                                    type="text"
                                    name="headquarters"
                                    defaultValue={editCompany.headquarters || ''}
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">{getTranslation('Country')}</label>
                                <input
                                    type="text"
                                    name="country"
                                    defaultValue={editCompany.country || ''}
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">{getTranslation('Email')}</label>
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={editCompany.email || ''}
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">{getTranslation('Phone')}</label>
                                <input
                                    type="text"
                                    name="phone"
                                    defaultValue={editCompany.phone || ''}
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">{getTranslation('Address')}</label>
                                <input
                                    type="text"
                                    name="address"
                                    defaultValue={editCompany.address || ''}
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Capital Structure */}
                    <div className="border-b pb-4">
                        <h3 className="text-xl font-medium text-gray-700 mb-4">{getTranslation('Capital Structure')}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-600">{getTranslation('Total Equity')}</label>
                                <input
                                    type="number"
                                    name="totalEquity"
                                    defaultValue={editCompany.capitalStructure?.totalEquity || ''}
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">{getTranslation('Total Debt')}</label>
                                <input
                                    type="number"
                                    name="totalDebt"
                                    defaultValue={editCompany.capitalStructure?.totalDebt || ''}
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">{getTranslation('Debt-to-Equity Ratio')}</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    name="debtToEquityRatio"
                                    defaultValue={editCompany.capitalStructure?.debtToEquityRatio || ''}
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">{getTranslation('Convertible Bonds')}</label>
                                <input
                                    type="number"
                                    name="convertibleBonds"
                                    defaultValue={editCompany.capitalStructure?.convertibleBonds || ''}
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">{getTranslation('Preferred Stock')}</label>
                                <input
                                    type="number"
                                    name="preferredStock"
                                    defaultValue={editCompany.capitalStructure?.preferredStock || ''}
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">{getTranslation('Bonds')}</label>
                                <input
                                    type="number"
                                    name="bonds"
                                    defaultValue={editCompany.capitalStructure?.bonds || ''}
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">{getTranslation('Green Bonds')}</label>
                                <input
                                    type="number"
                                    name="greenBonds"
                                    defaultValue={editCompany.capitalStructure?.greenBonds || ''}
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">{getTranslation('Last Updated')}</label>
                                <input
                                    type="text"
                                    name="lastUpdated"
                                    defaultValue={editCompany.capitalStructure?.lastUpdated || ''}
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Investment Experience */}
                    <div>
                        <h3 className="text-xl font-medium text-gray-700 mb-4">{getTranslation('Investment Experience')}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-600">{getTranslation('Investment Strategy')}</label>
                                <input
                                    type="text"
                                    name="strategy"
                                    defaultValue={editCompany.investmentExperience?.strategy || ''}
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">{getTranslation('Total Investments')}</label>
                                <input
                                    type="number"
                                    name="totalInvestments"
                                    defaultValue={editCompany.investmentExperience?.totalInvestments || ''}
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">{getTranslation('Portfolio Exits')}</label>
                                <input
                                    type="number"
                                    name="portfolioExits"
                                    defaultValue={editCompany.investmentExperience?.portfolioExits || ''}
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">{getTranslation('Average Return')}</label>
                                <input
                                    type="text"
                                    name="averageReturn"
                                    defaultValue={editCompany.investmentExperience?.averageReturn || ''}
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">{getTranslation('Years Active')}</label>
                                <input
                                    type="number"
                                    name="yearsActive"
                                    defaultValue={editCompany.investmentExperience?.yearsActive || ''}
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 mt-6">
                        <button
                            type="button"
                            onClick={() => setEditCompany(null)}
                            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                            aria-label={getTranslation('Cancel')}
                        >
                            {getTranslation('Cancel')}
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            aria-label={getTranslation('Save')}
                        >
                            {getTranslation('Save')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditCompanyModal;