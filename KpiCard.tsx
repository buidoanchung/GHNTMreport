import React from 'react';

interface KpiCardProps {
  children: React.ReactNode;
  className?: string;
}

const KpiCard: React.FC<KpiCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white p-4 md:p-6 rounded-xl border border-slate-200 shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 ${className}`}>
      {children}
    </div>
  );
};

export default KpiCard;