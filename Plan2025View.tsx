import React, { useState } from 'react';
import KpiCard from '../ui/KpiCard';
import ChartComponent from '../charts/ChartComponent';
import { barChartOptions, doughnutChartOptions } from '../../constants';
import { planQuarters, strategicObjectives2025, planActivities, calculateActivitiesProgress } from '../../data/planData';
import type { ViewId, Deliverable, PlanQuarter, StrategicObjective, SubNavItem } from '../../types';
import SubNav from '../ui/SubNav';

// --- ICONS ---
const TargetIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.592 15.592a.375.375 0 01-.53 0L12 12.53l-3.062 3.062a.375.375 0 11-.53-.53L11.47 12l-3.062-3.062a.375.375 0 11.53-.53L12 11.47l3.062-3.062a.375.375 0 11.53.53L12.53 12l3.062 3.062a.375.375 0 010 .53z" />
    </svg>
);
const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.964A4.5 4.5 0 1112 5.25v.15a3 3 0 01-3 3m3-3a3 3 0 00-3-3m-3.75 6.565c0-1.28.046-2.545.138-3.79a2.848 2.848 0 015.7 0c.092 1.245.138 2.51.138 3.79M10.5 19.5c-5.25 0-9.454-3.268-9.454-7.243A9.454 9.454 0 0110.5 5.016v.445a3 3 0 00-.75 2.964m7.5 0a4.5 4.5 0 11-8.75 2.148M12 18.75a9.094 9.094 0 003.741-.479 3 3 0 004.682-2.72M12 18.75a9.094 9.094 0 01-3.741-.479 3 3 0 01-4.682-2.72m7.5-2.964V7.734" />
    </svg>
);
const BookOpenIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
);
const ChartBarIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12M3.75 3h16.5M3.75 14.25v6.75A2.25 2.25 0 006 23.25h12a2.25 2.25 0 002.25-2.25V14.25m-16.5 0h16.5m-16.5 0l3.75-3.75m12.75 0l-3.75-3.75M3.75 14.25l3.75 3.75m0 0l3.75-3.75m-3.75 3.75l-3.75-3.75m9 3.75l3.75-3.75" />
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
const CalendarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" />
    </svg>
);
const LightBulbIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-11.645 6.01 6.01 0 00-3 0 6.01 6.01 0 001.5 11.645z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6" />
    </svg>
);


const iconMap: {[key: string]: React.FC<{className?: string}>} = {
    target: TargetIcon,
    users: UsersIcon,
    book: BookOpenIcon,
    chart: ChartBarIcon
};

const statusConfig = {
    completed: { text: 'Hoàn thành', icon: CheckCircleIcon, color: 'text-green-500', bgColor: 'bg-green-50', borderColor: 'border-green-300' },
    'in-progress': { text: 'Đang làm', icon: ClockIcon, color: 'text-blue-500', bgColor: 'bg-blue-50', borderColor: 'border-blue-300' },
    planned: { text: 'Kế hoạch', icon: CalendarIcon, color: 'text-slate-500', bgColor: 'bg-slate-50', borderColor: 'border-slate-300' }
};

const quarterThemeColors: {[key: string]: string} = {
    foundation: 'bg-gradient-to-br from-sky-50 to-cyan-100 border-sky-200',
    execution: 'bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200',
    acceleration: 'bg-gradient-to-br from-purple-50 to-violet-100 border-purple-200',
    finalization: 'bg-gradient-to-br from-orange-50 to-amber-100 border-orange-200'
};

const PLAN_2025_SUB_NAV_ITEMS: SubNavItem[] = [
    { id: 'dashboard', label: 'Dashboard Tiến độ' },
    { id: 'roadmap', label: 'Lộ trình theo Quý' },
    { id: 'objectives', label: 'Mục tiêu Chiến lược' },
    { id: 'activities', label: 'Hoạt động chi tiết' },
];

// --- TAB COMPONENTS ---

const DashboardTab: React.FC = () => {
    const stats = calculateActivitiesProgress(planActivities);
    const doughnutData = {
        labels: ['Hoàn thành', 'Đang làm', 'Kế hoạch'],
        datasets: [{
            data: [stats.completed, stats.inProgress, stats.planned],
            backgroundColor: ['#16a34a', '#3b82f6', '#e2e8f0'],
            borderColor: '#f8fafc', // bg-slate-50
            borderWidth: 4,
        }],
    };

    const quarterlyData = [1,2,3,4].map(q => {
        const completed = planActivities.filter(a => a.quarter === q && a.status === 'completed').length;
        const inProgress = planActivities.filter(a => a.quarter === q && a.status === 'in-progress').length;
        const planned = planActivities.filter(a => a.quarter === q && a.status === 'planned').length;
        return { completed, inProgress, planned };
    })
    
    const barData = {
        labels: ['Quý 1', 'Quý 2', 'Quý 3', 'Quý 4'],
        datasets: [
            { label: 'Hoàn thành', data: quarterlyData.map(d=>d.completed), backgroundColor: '#16a34a', stack: 'a' },
            { label: 'Đang làm', data: quarterlyData.map(d=>d.inProgress), backgroundColor: '#3b82f6', stack: 'a' },
            { label: 'Kế hoạch', data: quarterlyData.map(d=>d.planned), backgroundColor: '#e2e8f0', stack: 'a' },
        ]
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <KpiCard className="lg:col-span-1 bg-slate-50/50">
                <h3 className="font-bold text-lg text-slate-800">Tổng quan Tiến độ</h3>
                <div className="relative w-48 h-48 mx-auto my-4">
                    <ChartComponent type="doughnut" data={doughnutData} options={doughnutChartOptions} />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <p className="text-4xl font-bold text-slate-800">{stats.progress}%</p>
                            <p className="text-sm font-semibold text-slate-500">Hoàn thành</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                        <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
                        <p className="text-xs font-medium text-slate-500">Hoàn thành</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-blue-600">{stats.inProgress}</p>
                        <p className="text-xs font-medium text-slate-500">Đang làm</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-slate-500">{stats.planned}</p>
                        <p className="text-xs font-medium text-slate-500">Kế hoạch</p>
                    </div>
                </div>
            </KpiCard>
            <KpiCard className="lg:col-span-2">
                 <h3 className="font-bold text-lg text-slate-800">Hoạt động theo Quý</h3>
                 <div className="h-80 mt-4">
                    <ChartComponent type="bar" data={barData} options={{...barChartOptions, scales: {...barChartOptions.scales, x: {...barChartOptions.scales.x, stacked: true}, y: {...barChartOptions.scales.y, stacked: true}}, plugins: { legend: { display: true, position: 'bottom' }}}} />
                 </div>
            </KpiCard>
        </div>
    );
};

const ObjectivesTab: React.FC = () => {
    return (
        <KpiCard>
             <h3 className="font-bold text-xl mb-6 text-slate-800">Mục tiêu Chiến lược 2025</h3>
             <div className="space-y-6">
                 {strategicObjectives2025.map(obj => {
                     const Icon = iconMap[obj.icon];
                     return (
                         <div key={obj.id} className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
                             <div className="flex items-start gap-4">
                                 <div className="p-3 bg-blue-100 rounded-full">
                                    {Icon && <Icon className="w-6 h-6 text-blue-600"/>}
                                 </div>
                                 <div className="flex-grow">
                                     <h4 className="font-bold text-lg text-slate-800">{obj.title}</h4>
                                     <p className="mt-1 text-slate-600 text-sm">{obj.description}</p>
                                 </div>
                             </div>
                             {obj.lessonLink && (
                                <div className="mt-4 pt-3 border-t border-dashed border-slate-200 flex items-center gap-2 text-xs text-slate-500">
                                    <LightBulbIcon className="w-4 h-4 text-yellow-500" />
                                    <span className="font-semibold">{obj.lessonLink}</span>
                                </div>
                             )}
                         </div>
                     )
                 })}
             </div>
        </KpiCard>
    );
};

const RoadmapTab: React.FC = () => {
    return (
        <KpiCard>
            <h3 className="font-bold text-xl mb-6 text-slate-800">Lộ trình 2025 theo Quý</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                 {planQuarters.map(q => (
                    <div key={q.quarter} className={`p-5 rounded-xl border ${quarterThemeColors[q.theme]}`}>
                        <div className="text-center">
                            <p className="font-bold text-sm text-slate-500">{q.period}</p>
                            <h4 className="font-extrabold text-2xl text-slate-800 mt-1">Quý {q.quarter}</h4>
                            <p className="font-bold text-slate-700 capitalize mt-1">{q.title}</p>
                        </div>
                        <div className="mt-4 pt-4 border-t-2 border-dashed border-slate-400/20">
                            <h5 className="font-bold text-sm text-slate-600 mb-2">Sản phẩm chính:</h5>
                            <ul className="space-y-2">
                                {q.deliverables.map((d, i) => {
                                    const { icon: Icon, color } = statusConfig[d.status];
                                    return (
                                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                                            <Icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${color}`} />
                                            <span>{d.text}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                 ))}
            </div>
        </KpiCard>
    );
};

const ActivitiesTab: React.FC = () => {
    const quarters = [1,2,3,4];
    return (
         <KpiCard>
            <h3 className="font-bold text-xl mb-6 text-slate-800">Danh sách Hoạt động 2025</h3>
            <div className="space-y-6">
                {quarters.map(q => (
                    <div key={q}>
                        <h4 className="font-bold text-lg text-slate-700 pb-2 border-b-2 border-blue-200 mb-3">Quý {q}</h4>
                        <div className="space-y-3">
                            {planActivities.filter(a => a.quarter === q).map(activity => {
                                const config = statusConfig[activity.status];
                                return (
                                    <div key={activity.id} className={`p-3 rounded-lg flex items-center gap-3 border-l-4 ${config.borderColor} ${config.bgColor}`}>
                                        <config.icon className={`w-5 h-5 flex-shrink-0 ${config.color}`} />
                                        <p className="flex-grow text-sm font-medium text-slate-800">{activity.title}</p>
                                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${config.color} ${config.bgColor}`}>{config.text}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>
         </KpiCard>
    );
};


const Plan2025View: React.FC<{onNavClick: (viewId: ViewId) => void}> = ({ onNavClick }) => {
    const [activeTab, setActiveTab] = useState('dashboard');

    const renderContent = () => {
        switch(activeTab) {
            case 'dashboard': return <DashboardTab />;
            case 'objectives': return <ObjectivesTab />;
            case 'roadmap': return <RoadmapTab />;
            case 'activities': return <ActivitiesTab />;
            default: return <DashboardTab />;
        }
    };
    
    return (
        <section id="plan2025" className="animate-fade-in space-y-6">
            <div>
                <h2 className="text-3xl font-bold text-slate-800">Kế hoạch Phát triển Nhân tài 2025</h2>
                <p className="text-slate-600 mt-2 text-lg">Tổng quan về các mục tiêu, lộ trình và hoạt động trong năm 2025.</p>
            </div>
            <SubNav items={PLAN_2025_SUB_NAV_ITEMS} activeId={activeTab} onSelect={setActiveTab} />
            <div className="mt-4">
                {renderContent()}
            </div>
        </section>
    );
};

export default Plan2025View;
