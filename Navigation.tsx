import React from 'react';
import { NAV_ITEMS } from '../constants';
import type { ViewId } from '../types';

interface NavigationProps {
  activeView: ViewId;
  onNavClick: (viewId: ViewId) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeView, onNavClick }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, viewId: ViewId) => {
    e.preventDefault();
    onNavClick(viewId);
  };

  return (
    <nav className="flex -mx-2 px-1 overflow-x-auto">
      {NAV_ITEMS.map(item => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={(e) => handleLinkClick(e, item.id)}
          className={`flex-shrink-0 py-3 px-3 md:px-4 text-sm font-semibold transition-all duration-300 ease-in-out border-b-2 
            ${
              activeView === item.id 
                ? 'border-orange-500 text-orange-600' 
                : 'border-transparent text-slate-600 hover:border-orange-300 hover:text-orange-500'
            }`}
          aria-current={activeView === item.id ? 'page' : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;