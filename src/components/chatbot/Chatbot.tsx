import { Company } from "../../types/Company";
import React, { useEffect, useRef, useState } from "react";
import { FaComment, FaTimes } from "react-icons/fa";

const FaTimesIcon = FaTimes as React.ComponentType<{ size?: number }>;
const FaCommentIcon = FaComment as React.ComponentType<{ size?: number }>;

interface ChatBotProps {
    companies: Company[];
}

export const ChatBot: React.FC<ChatBotProps> = ({ companies }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
        { text: 'Hello! Ask me anything about the company data.', isUser: false }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatWindowRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 16, y: window.innerHeight - 416 });
    const [isDragging, setIsDragging] = useState(false);
    const dragOffset = useRef({ x: 0, y: 0 });

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (chatWindowRef.current) {
            setIsDragging(true);
            dragOffset.current = {
                x: e.clientX - position.x,
                y: e.clientY - position.y,
            };
            e.preventDefault();
        }
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging && chatWindowRef.current) {
            const newX = e.clientX - dragOffset.current.x;
            const newY = e.clientY - dragOffset.current.y;

            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const chatWidth = 320;
            const chatHeight = 384;

            const constrainedX = Math.max(0, Math.min(newX, viewportWidth - chatWidth));
            const constrainedY = Math.max(0, Math.min(newY, viewportHeight - chatHeight));

            setPosition({ x: constrainedX, y: constrainedY });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    const handleSend = () => {
        if (!input.trim()) return;

        setMessages([...messages, { text: input, isUser: true }]);

        const response = processQuery(input.toLowerCase(), companies);
        setMessages(prev => [...prev, { text: response, isUser: false }]);

        setInput('');
    };

    const processQuery = (query: string, companies: Company[]): string => {
        if (query.includes('how many companies')) {
            return `There are ${companies.length} companies in the dataset.`;
        }

        if (query.includes('average market cap')) {
            const avgMarketCap = companies.reduce((sum, c) => sum + (c.marketCap || 0), 0) / companies.length;
            return `The average market cap is $${avgMarketCap.toLocaleString()}.`;
        }

        if (query.includes('industry') && query.includes('most common')) {
            const industries = companies.map(c => c.industry || 'Unknown');
            const industryCount = industries.reduce((acc, curr) => {
                acc[curr] = (acc[curr] || 0) + 1;
                return acc;
            }, {} as Record<string, number>);
            const mostCommon = Object.entries(industryCount).reduce((a, b) => a[1] > b[1] ? a : b);
            return `The most common industry is ${mostCommon[0]} with ${mostCommon[1]} companies.`;
        }

        const companyMatch = companies.find(c => query.includes(c.name.toLowerCase()));
        if (companyMatch) {
            if (query.includes('market cap')) {
                return `${companyMatch.name} has a market cap of $${(companyMatch.marketCap || 0).toLocaleString()}.`;
            }
            if (query.includes('industry')) {
                return `${companyMatch.name} is in the ${companyMatch.industry || 'Unknown'} industry.`;
            }
            if (query.includes('total equity')) {
                return `${companyMatch.name} has total equity of $${(companyMatch.capitalStructure?.totalEquity || 0).toLocaleString()}.`;
            }
            if (query.includes('debt')) {
                return `${companyMatch.name} has total debt of $${(companyMatch.capitalStructure?.totalDebt || 0).toLocaleString()}.`;
            }
        }

        return "I couldn't understand your query. Try asking about company count, market cap, industries, or specific company details!";
    };

    return (
        <>
            {!isOpen && (
                <div className="fixed bottom-4 right-4 z-50">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
                        aria-label="Open chatbot"
                    >
                        <FaCommentIcon size={24} />
                    </button>
                </div>
            )}
            {isOpen && (
                <div
                    ref={chatWindowRef}
                    className="fixed w-80 h-96 rounded-lg shadow-xl flex flex-col z-50"
                    style={{ left: `${position.x}px`, top: `${position.y}px` }}
                >
                    <div
                        className="bg-indigo-600 text-white p-3 rounded-t-lg flex justify-between items-center cursor-move"
                        onMouseDown={handleMouseDown}
                    >
                        <span className="font-semibold">Data Assistant</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="hover:text-gray-200"
                            aria-label="Close chatbot"
                        >
                            <FaTimesIcon size={20} />
                        </button>
                    </div>
                    <div className="flex-grow p-4 overflow-y-auto bg-white">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`mb-2 ${msg.isUser ? 'text-right' : 'text-left'}`}
                            >
                                <span
                                    className={`inline-block p-2 rounded-lg ${
                                        msg.isUser
                                            ? 'bg-indigo-100 text-indigo-800'
                                            : 'bg-gray-200 text-gray-800'
                                    }`}
                                >
                                    {msg.text}
                                </span>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="p-3 border-t border-gray-200">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask about the data..."
                                className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                                aria-label="Chat input"
                            />
                            <button
                                onClick={handleSend}
                                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                                aria-label="Send message"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};