import React from 'react';
import type { SubNavItem } from '../../types';

interface SubNavProps {
    items: SubNavItem[];
    activeId: string;
    onSelect: (id: string) => void;
    className?: string;
}

const SubNav: React.FC<SubNavProps> = ({ items, activeId, onSelect, className = '' }) => {
    return (
        <div className={`bg-white p-1.5 rounded-lg shadow-sm border flex items-center gap-1.5 flex-wrap ${className}`}>
            {items.map(tab => (
                <button
                    key={tab.id}
                    onClick={() => onSelect(tab.id)}
                    className={`px-3 py-1.5 font-semibold text-xs sm:text-sm rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                        activeId === tab.id
                            ? 'bg-blue-600 text-white shadow'
                            : 'text-slate-600 hover:bg-slate-200'
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default SubNav;