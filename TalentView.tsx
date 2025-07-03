import React, { useState, useRef } from 'react';
import KpiCard from '../ui/KpiCard';
import ChartComponent from '../charts/ChartComponent';
import { barChartOptions } from '../../constants';
import { talentPlan2025, talentResults2024, talentProcessSteps, fastTrackFunnel2025, fastTrackFunnel2024 } from '../../data/talentData';
import type { SubNavItem, FunnelStage } from '../../types';
import SubNav from '../ui/SubNav';

// --- ICONS ---
const ChartPieIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
    </svg>
);
const DocumentChartBarIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12M3.75 3h16.5M3.75 14.25v6.75A2.25 2.25 0 006 23.25h12a2.25 2.25 0 002.25-2.25V14.25m-16.5 0h16.5m-16.5 0l3.75-3.75m12.75 0l-3.75-3.75M3.75 14.25l3.75 3.75m0 0l3.75-3.75m-3.75 3.75l-3.75-3.75m9 3.75l3.75-3.75" />
    </svg>
);
const CalendarDaysIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" />
    </svg>
);
const WrenchScrewdriverIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.636 4.636a2.121 2.121 0 01-3 3L3 17.25a2.121 2.121 0 013-3l4.636-4.636m0-3.03l6.364-6.364a2.121 2.121 0 00-3-3L11.42 8.08" />
    </svg>
);
const DocumentArrowDownIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m-3 0l-3 3m0 0l-3-3m3 3V9" />
    </svg>
);
const LinkIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
);
const UploadIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
    </svg>
);
const UsersIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.964A4.5 4.5 0 1112 5.25v.15a3 3 0 01-3 3m3-3a3 3 0 00-3-3m-3.75 6.565c0-1.28.046-2.545.138-3.79a2.848 2.848 0 015.7 0c.092 1.245.138 2.51.138 3.79M10.5 19.5c-5.25 0-9.454-3.268-9.454-7.243A9.454 9.454 0 0110.5 5.016v.445a3 3 0 00-.75 2.964m7.5 0a4.5 4.5 0 11-8.75 2.148M12 18.75a9.094 9.094 0 003.741-.479 3 3 0 004.682-2.72M12 18.75a9.094 9.094 0 01-3.741-.479 3 3 0 01-4.682-2.72m7.5-2.964V7.734" />
    </svg>
);
const AcademicCapIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l15.482 0m-15.482 0L12 16.5l7.74-6.353" />
    </svg>
);
const DocumentCheckIcon: React.FC<{ className?: string }> = ({ className }) => (
     <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
     </svg>
);
const ArrowUpRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
);
const FunnelIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678a1.5 1.5 0 011.087 1.482V17.5c0 .848-.843 1.545-1.878 1.545H6.778c-1.036 0-1.878-.697-1.878-1.545V5.16a1.5 1.5 0 011.087-1.482A48.057 48.057 0 0112 3z" />
    </svg>
);
const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);
const CheckCircleIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);
const ClockIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
const BeakerIcon: React.FC<{className?: string}> = ({className}) => (
     <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 2.25H6.375a1.125 1.125 0 00-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125h3.375c.621 0 1.125-.504 1.125-1.125v-1.5A1.125 1.125 0 009.75 2.25z" />
       <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5v-3m0 0v-3m0 3h18v-3m0 0h-3.375a1.125 1.125 0 01-1.125-1.125V6.375m-3.375 0V3.375c0-.621-.504-1.125-1.125-1.125h-1.5c-.621 0-1.125.504-1.125 1.125v3M9 13.5v9m0 0H6.375a1.125 1.125 0 01-1.125-1.125V18m2.625 4.5V18m0 0h3.375m0 0v4.5m2.625-4.5V18" />
     </svg>
);
const UserCheckIcon: React.FC<{className?: string}> = ({className}) => (
     <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
       <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
     </svg>
);
const GiftIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-18 0l9 6.75L21 9M3 9v10.5a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 19.5V9" />
    </svg>
);

const iconMap: { [key: string]: React.FC<{ className?: string }> } = {
    'users': UsersIcon,
    'academic-cap': AcademicCapIcon,
    'document-check': DocumentCheckIcon,
    'gift': GiftIcon,
};

// --- ICONS FOR DOCUMENTS ---
const GoogleDriveIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
         <g clipPath="url(#clip0_303_99)">
            <path d="M19.125 10.35L12.75 0H11.25L17.625 10.35H19.125Z" fill="#34A853"/>
            <path d="M6.375 10.35L0 20.7H8.0625L14.4375 10.35H6.375Z" fill="#188038"/>
            <path d="M19.125 10.35L14.4375 10.35L11.25 15.525L15.375 22.95C15.375 22.95 23.835 10.515 24 10.35H19.125Z" fill="#FFC107"/>
            <path d="M6.375 10.35H14.4375L17.625 10.35L11.25 0L8.0625 0L6.375 10.35Z" fill="#4285F4"/>
        </g>
        <defs>
            <clipPath id="clip0_303_99">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);
const GenericFileIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m-2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
);
const ClipboardIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v3.042c0 .317-.112.623-.314.863a2.25 2.25 0 01-1.282.863H9.314a2.25 2.25 0 01-1.282-.863A2.25 2.25 0 017.72 9.75V6.708c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185v3.193c0 1.178-.813 2.15-1.907 2.185a48.208 48.208 0 01-1.927.184" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 12.75h-3" />
    </svg>
);
const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);
const ArrowTopRightOnSquareIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5 0L18 6m0 0h-3.75m3.75 0V9.75" />
    </svg>
);

// --- CONSTANTS ---
const TALENT_SUB_NAV_ITEMS: SubNavItem[] = [
    { id: 'dashboard', label: 'Dashboard Tiến độ 2025' },
    { id: 'plan2025', label: 'Lộ trình Hành động' },
    { id: 'process', label: 'Quy trình' },
    { id: 'documents', label: 'Tài liệu' },
    { id: 'results2024', label: 'Kết quả 2024' },
];

// --- REUSABLE COMPONENTS ---
const FunnelDisplay: React.FC<{ stages: FunnelStage[], title: string, icon: React.ReactNode }> = ({ stages, title, icon }) => {
    return (
        <KpiCard>
            <div className="flex items-center gap-3 mb-4">
                {icon}
                <h3 className="text-xl font-bold text-slate-800">{title}</h3>
            </div>
            <div className="space-y-4">
                {stages.map((stage, index) => {
                    const achievementRate = stage.target > 0 ? (stage.actual / stage.target) * 100 : 0;
                    const prevStageActual = index > 0 ? stages[index - 1].actual : stages[0].target;
                    const conversionRate = prevStageActual > 0 ? (stage.actual / prevStageActual) * 100 : 0;

                    return (
                        <div key={stage.id} className="p-4 bg-white rounded-lg border border-slate-200/80 shadow-sm transition-all hover:bg-slate-50">
                            <div className="flex justify-between items-center flex-wrap gap-x-4 gap-y-1">
                                <h5 className="font-semibold text-slate-800">{index + 1}. {stage.name}</h5>
                                <span className="text-sm font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">{stage.actual} / {stage.target}</span>
                            </div>
                            {stage.description && <p className="mt-2 text-sm text-slate-600">{stage.description}</p>}
                            <div className="w-full bg-slate-200 rounded-full h-2 mt-3">
                                <div className={`bg-blue-500 h-2 rounded-full`} style={{ width: `${achievementRate > 100 ? 100 : achievementRate}%` }}></div>
                            </div>
                            <div className="flex justify-between text-xs text-slate-500 mt-1.5">
                                <span>Tỷ lệ đạt mục tiêu: <strong>{achievementRate.toFixed(1)}%</strong></span>
                                {index > 0 && <span>Tỷ lệ chuyển đổi: <strong>{conversionRate.toFixed(1)}%</strong></span>}
                            </div>
                        </div>
                    )
                })}
            </div>
        </KpiCard>
    )
}

// --- TAB COMPONENTS ---

const DashboardTab: React.FC = () => {
    const allItems = talentPlan2025.flatMap(action => action.months.flatMap(m => m.items));
    const total = allItems.length;
    const done = 4; // Hardcoded from image
    const wip = 9; // Hardcoded from image
    const pending = 3; // Hardcoded from image
    const progress = 53; // Hardcoded from image

    const doughnutChartData = {
        labels: ['Hoàn thành', 'Đang làm', 'Kế hoạch'],
        datasets: [{
            data: [done, wip, pending],
            backgroundColor: ['#16a34a', '#3b82f6', '#e2e8f0'],
            borderColor: '#fff',
            borderWidth: 4,
        }],
    };
    
    const doughnutOptions = { responsive: true, maintainAspectRatio: false, cutout: '80%', plugins: { legend: { display: false }, tooltip: {enabled: false} } };

    return (
        <KpiCard>
            <h3 className="text-xl font-bold text-slate-800">Dashboard Tiến độ 2025</h3>
            <p className="text-slate-500 mt-1">Tổng quan các hoạt động trong chương trình phát triển nhân tài năm 2025.</p>
            <div className="mt-6 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                    <div className="relative w-48 h-48">
                        <ChartComponent type="doughnut" data={doughnutChartData} options={doughnutOptions} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <p className="text-4xl font-bold text-slate-800">{progress}%</p>
                                <p className="text-sm font-semibold text-slate-500">Hoàn thành</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-grow w-full">
                    <div className="grid grid-cols-3 gap-4 text-center">
                         <div>
                            <p className="text-3xl font-bold text-green-600">{done}</p>
                            <p className="text-sm font-medium text-slate-500">Hoàn thành</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-blue-600">{wip}</p>
                            <p className="text-sm font-medium text-slate-500">Đang làm</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-slate-500">{pending}</p>
                            <p className="text-sm font-medium text-slate-500">Kế hoạch</p>
                        </div>
                    </div>
                    <div className="mt-6 space-y-2">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                            <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white ring-2 ring-green-500"></div>
                            <span>Các hoạt động đã hoàn thành.</span>
                        </div>
                         <div className="flex items-center gap-2 text-sm text-slate-600">
                            <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white ring-2 ring-blue-500"></div>
                            <span>Các hoạt động đang được triển khai.</span>
                        </div>
                         <div className="flex items-center gap-2 text-sm text-slate-600">
                            <div className="w-4 h-4 rounded-full bg-slate-300 border-2 border-white ring-2 ring-slate-300"></div>
                            <span>Các hoạt động đã được lên kế hoạch.</span>
                        </div>
                    </div>
                </div>
            </div>
        </KpiCard>
    );
};

const Results2024Tab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-slate-800 text-center mb-6">Phân tích Chi tiết Kết quả 2024</h3>
        <div className="max-w-md mx-auto space-y-4">
          {talentResults2024.map((res) => {
            const percentage = res.total > 0 ? (res.value / res.total) * 100 : 0;
            return (
              <KpiCard key={res.title} className="p-4">
                <p className="font-semibold text-slate-700">{res.title}</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl font-bold text-slate-800">{res.value}</span>
                  <span className="text-xl font-medium text-slate-500">/ {res.total}</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5 mt-3">
                  <div
                    className="h-2.5 rounded-full"
                    style={{ width: `${percentage > 100 ? 100 : percentage}%`, backgroundColor: res.color }}
                  ></div>
                </div>
              </KpiCard>
            );
          })}
        </div>
      </div>
      <FunnelDisplay
        stages={fastTrackFunnel2024}
        title="Kết quả Phễu tuyển dụng Fast Track 2024"
        icon={<FunnelIcon className="w-7 h-7 text-blue-500" />}
      />
    </div>
  );
};


const ActionItem: React.FC<{ item: { title: string; detail: string; status: 'done' | 'wip' | 'pending' } }> = ({ item }) => {
    const statusMap = {
        done: { icon: CheckCircleIcon, color: 'text-green-500', bgColor: 'bg-green-50' },
        wip: { icon: ClockIcon, color: 'text-blue-500', bgColor: 'bg-blue-50' },
        pending: { icon: CalendarDaysIcon, color: 'text-slate-500', bgColor: 'bg-slate-50' },
    };
    const { icon: Icon, color, bgColor } = statusMap[item.status];
    return (
        <div className={`p-3 rounded-lg flex items-start gap-3 ${bgColor}`}>
            <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${color}`} />
            <div>
                <p className="font-semibold text-sm text-slate-800">{item.title}</p>
                {item.detail && <p className="text-xs text-slate-600 mt-1">{item.detail}</p>}
            </div>
        </div>
    );
};

const FastTrackFunnel: React.FC<{isExpanded: boolean, onToggle: ()=>void}> = ({isExpanded, onToggle}) => {
    return (
        <div className="border-t border-slate-200 mt-4 pt-4">
            <button onClick={onToggle} className="flex justify-between items-center w-full text-left font-bold text-slate-700 hover:bg-slate-100 p-2 rounded-lg">
                <div className="flex items-center gap-2">
                    <FunnelIcon className="w-5 h-5 text-blue-600"/>
                    <span>Tuyển dụng Fast Track</span>
                </div>
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
            {isExpanded && (
                <div className="mt-4 px-2 space-y-4">
                    {fastTrackFunnel2025.map((stage, index) => {
                        const conversionRate = stage.target > 0 ? (stage.actual / stage.target) * 100 : 0;
                        const prevStageActual = index > 0 ? fastTrackFunnel2025[index - 1].actual : fastTrackFunnel2025[0].target;
                        const stageConversionRate = prevStageActual > 0 ? (stage.actual / prevStageActual) * 100 : 0;

                        return (
                            <div key={stage.id} className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <div className="flex justify-between items-center">
                                    <h5 className="font-semibold text-slate-700">{index + 1}. {stage.name}</h5>
                                    <span className="text-sm font-bold text-blue-600">{stage.actual} / {stage.target}</span>
                                </div>
                                <div className="mt-2 text-xs text-slate-500">{stage.description}</div>
                                <div className="w-full bg-slate-200 rounded-full h-2.5 mt-2">
                                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${conversionRate > 100 ? 100 : conversionRate}%` }}></div>
                                </div>
                                <div className="flex justify-between text-xs text-slate-500 mt-1">
                                    <span>Tỷ lệ đạt mục tiêu: {conversionRate.toFixed(1)}%</span>
                                    {index > 0 && <span>Tỷ lệ chuyển đổi (so với GĐ trước): {stageConversionRate.toFixed(1)}%</span>}
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    );
};

const Plan2025Tab: React.FC = () => {
    const [openFunnel, setOpenFunnel] = useState(false);

    return (
        <KpiCard>
             <h3 className="text-xl font-bold text-slate-800">Lộ trình Hành động 2025</h3>
             <div className="grid grid-cols-1 mt-6">
                <div className="lg:col-span-8">
                    {talentPlan2025.map((action, index) => (
                       <div key={index}>
                           <h4 className="font-bold text-slate-800 mb-2">{action.name}</h4>
                           <div className="space-y-4">
                               {action.months.map((month, mIndex) => (
                                   <div key={month.name}>
                                       <p className={`font-bold text-sm mb-2 text-blue-700`}>{month.name}</p>
                                       <div className="space-y-2">
                                           {month.items.map((item, itemIndex) => <ActionItem key={itemIndex} item={item} />)}
                                       </div>
                                   </div>
                               ))}
                           </div>
                       </div>
                    ))}
                    <FastTrackFunnel isExpanded={openFunnel} onToggle={() => setOpenFunnel(!openFunnel)} />
                </div>
            </div>
        </KpiCard>
    );
};


const ProcessTab: React.FC = () => {
    return (
        <KpiCard>
            <h3 className="text-xl font-bold text-slate-800 mb-6">Quy trình Quản lý & Phát triển Nhân tài</h3>
            <div className="relative border-l-2 border-dashed border-blue-300 ml-6 pl-10 space-y-12">
                {talentProcessSteps.map((step, index) => {
                    const Icon = iconMap[step.icon];
                    return (
                        <div key={step.id} className="relative">
                            <div className="absolute -left-[54px] -top-1 w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center ring-8 ring-white">
                                {Icon && <Icon className="w-7 h-7 text-blue-600"/>}
                            </div>
                            <span className="absolute -left-[50px] top-14 text-xs font-bold text-slate-400">GĐ {index + 1}</span>
                            <h4 className="font-bold text-lg text-slate-800">{step.title}</h4>
                            <p className="text-slate-600 mt-1">{step.description}</p>
                        </div>
                    );
                })}
            </div>
        </KpiCard>
    );
};

const DocumentsTab: React.FC = () => {
    const [documents, setDocuments] = useState<{name: string, type: 'file' | 'drive', url: string}[]>([]);
    const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const newDoc = {
                name: file.name,
                type: 'file' as const,
                url: `https://ghn.com/uploads/talent/${file.name}`
            };
            setDocuments(prev => [...prev, newDoc]);
        }
    };

    const handleLinkDrive = () => {
        const url = prompt("Vui lòng nhập URL Google Drive:");
        if (url) {
            const name = prompt("Vui lòng nhập tên tài liệu:", "Tài liệu Google Drive");
            if (name) {
                const newDoc = { name, type: 'drive' as const, url };
                setDocuments(prev => [...prev, newDoc]);
            }
        }
    };

    const handleCopyLink = (url: string) => {
        navigator.clipboard.writeText(url).then(() => {
            setCopiedUrl(url);
            setTimeout(() => setCopiedUrl(null), 2000); // Reset after 2 seconds
        });
    };
    
    return (
        <KpiCard>
            <h3 className="text-xl font-bold text-slate-800">Kho Tài liệu</h3>
            <p className="text-slate-500 mt-1 mb-6">Nơi tập trung các tài liệu, biểu mẫu và tài nguyên liên quan đến chương trình.</p>
            
            {/* Main Drive Link */}
            <a 
                href="https://drive.google.com/drive/folders/1OxEBKa5Hw1c9Lc1J1GunH2g6JyJ7PIRg?usp=sharing"
                target="_blank" 
                rel="noopener noreferrer"
                className="group block p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl border border-blue-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
            >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <GoogleDriveIcon className="w-12 h-12 flex-shrink-0" />
                    <div className="flex-grow">
                        <h4 className="font-bold text-lg text-slate-800">Truy cập Kho Tài liệu Chương trình</h4>
                        <p className="text-sm text-slate-600 mt-1">Xem tất cả tài liệu, biểu mẫu và tài nguyên trên Google Drive.</p>
                    </div>
                    <div className="mt-4 sm:mt-0 flex-shrink-0 px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center gap-2 text-blue-700 font-semibold text-sm">
                        Mở Kho tài liệu
                        <ArrowTopRightOnSquareIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                </div>
            </a>

            {/* Additional Documents */}
            <div className="mt-8 pt-6 border-t border-slate-200">
                <h4 className="text-lg font-semibold text-slate-700">Tài liệu bổ sung</h4>
                <p className="text-slate-500 mt-1 text-sm">Tải lên hoặc liên kết các tài liệu khác tại đây.</p>
            
                {documents.length > 0 && (
                     <div className="mt-4 space-y-3">
                        {documents.map((doc, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                                <div className="flex items-center gap-3">
                                    {doc.type === 'drive' ? <GoogleDriveIcon className="w-6 h-6" /> : <GenericFileIcon className="w-6 h-6 text-slate-500" />}
                                    <a href={doc.url} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 hover:underline">{doc.name}</a>
                                </div>
                                <button onClick={() => handleCopyLink(doc.url)} className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-600 bg-white border border-slate-300 rounded-md hover:bg-slate-200 transition-colors">
                                    {copiedUrl === doc.url ? <CheckIcon className="w-4 h-4 text-green-500" /> : <ClipboardIcon className="w-4 h-4" />}
                                    {copiedUrl === doc.url ? 'Đã sao chép!' : 'Sao chép link'}
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-6 p-6 bg-slate-50 rounded-lg border-2 border-dashed border-slate-300 flex flex-col items-center text-center">
                     <DocumentArrowDownIcon className="w-12 h-12 text-slate-400" />
                     <p className="mt-3 text-base font-semibold text-slate-700">Tải lên hoặc liên kết tài liệu của bạn</p>
                     <p className="text-sm text-slate-500 mt-1">Chia sẻ biểu mẫu, hướng dẫn, hoặc kết quả đánh giá.</p>
                     <div className="flex items-center gap-4 mt-4">
                        <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
                        <button onClick={handleFileUploadClick} className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <UploadIcon className="w-5 h-5" />
                            Tải lên tệp
                        </button>
                        <button onClick={handleLinkDrive} className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400">
                            <LinkIcon className="w-5 h-5" />
                            Liên kết Drive
                        </button>
                     </div>
                </div>
            </div>
        </KpiCard>
    )
};


// --- MAIN COMPONENT ---

const TalentView: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('dashboard');

    const renderContent = () => {
        switch(activeTab) {
            case 'dashboard':
                return <DashboardTab />;
            case 'plan2025':
                return <Plan2025Tab />;
            case 'process':
                return <ProcessTab />;
            case 'documents':
                return <DocumentsTab />;
            case 'results2024':
                return <Results2024Tab />;
            default:
                return <DashboardTab />;
        }
    };
    
    return (
        <section id="talent" className="animate-fade-in space-y-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-slate-800">Quản lý Nhân tài và Phát triển Năng lực Lãnh đạo</h2>
                    <p className="text-slate-600 mt-2 text-lg">Chương trình tuyển dụng, phát triển và giữ chân nhân tài tại GHN.</p>
                </div>
            </div>
            <SubNav items={TALENT_SUB_NAV_ITEMS} activeId={activeTab} onSelect={setActiveTab} />
            <div className="mt-4">
                {renderContent()}
            </div>
        </section>
    );
};

export default TalentView;