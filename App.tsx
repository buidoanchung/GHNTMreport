import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from './constants';
import type { ViewId } from './types';
import Header from './components/Header';
import DashboardView from './components/views/DashboardView';
import PerformanceView from './components/views/PerformanceView';
import TalentView from './components/views/TalentView';
import LearningView from './components/views/LearningView';
import Plan2025View from './components/views/Plan2025View';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewId>('dashboard');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1) as ViewId;
      if (NAV_ITEMS.some(item => item.id === hash)) {
        setActiveView(hash);
      } else {
        setActiveView('dashboard');
        const currentUrlWithoutHash = window.location.href.split('#')[0];
        window.history.replaceState(null, '', `${currentUrlWithoutHash}#dashboard`);
      }
    };

    window.addEventListener('hashchange', handleHashChange, false);
    
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange, false);
    };
  }, []);
  
  const handleSetView = (viewId: ViewId) => {
    setActiveView(viewId);
    window.location.hash = viewId;
  }

  const renderActiveView = () => {
    switch (activeView) {
      case 'plan2025':
        return <Plan2025View onNavClick={handleSetView} />;
      case 'performance':
        return <PerformanceView />;
      case 'talent':
        return <TalentView />;
      case 'learning':
        return <LearningView />;
      case 'dashboard':
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Header activeView={activeView} onNavClick={handleSetView} />
      <main id="app-content" className="container mx-auto p-4 md:p-6 flex-grow">
        {renderActiveView()}
      </main>
      <Footer />
    </div>
  );
};

export default App;