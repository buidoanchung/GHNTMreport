import React, { useState, useMemo } from 'react';
import KpiCard from '../ui/KpiCard';
import ChartComponent from '../charts/ChartComponent';
import { timelineData } from '../../data/learningData';
import SubNav from '../ui/SubNav';
import type { SubNavItem, LearningTimelineItem } from '../../types';

// --- ICONS ---
const PresentationChartLineIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12M3.75 3h16.5M3.75 14.25v6.75A2.25 2.25 0 006 23.25h12a2.25 2.25 0 002.25-2.25V14.25m-16.5 0h16.5m-16.5 0l3.75-3.75m12.75 0l-3.75-3.75M3.75 14.25l3.75 3.75m0 0l3.75-3.75m-3.75 3.75l-3.75-3.75m9 3.75l3.75-3.75" />
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


const SUB_NAV_ITEMS: SubNavItem[] = [
    { id: 'introduction', label: 'Giới thiệu' },
    { id: 'program', label: 'Chương trình tổng thể' },
    { id: 'reports', label: 'Báo cáo' },
    { id: 'functional', label: 'Năng lực Chuyên môn' },
    { id: 'leadership', label: 'Năng lực Lãnh đạo' },
];

const statusStyles = {
    'Hoàn thành': { bg: 'bg-green-500', text: 'text-white' },
    'Đang làm': { bg: 'bg-blue-500', text: 'text-white' },
    'Chưa làm': { bg: 'bg-yellow-400', text: 'text-yellow-900' },
};

const categoryStyles = {
    'Khóa đào tạo': { border: 'border-blue-500', bg: 'bg-blue-50' },
    'Mentoring': { border: 'border-purple-500', bg: 'bg-purple-50' },
    'Công việc thực tế': { border: 'border-teal-500', bg: 'bg-teal-50' },
    'Theo dõi tiến độ thực hiện': { border: 'border-pink-500', bg: 'bg-pink-50' },
};

const getMonthName = (month: number) => `Tháng ${month}`;

const Timeline: React.FC<{data: LearningTimelineItem[], title?: string}> = ({ data, title }) => {
    const monthHeaders = useMemo(() => {
        if (data.length === 0) return [];
        const allMonths = data.flatMap(item => {
            const months = [];
            for(let m = item.startMonth; m <= item.endMonth; m++) {
                months.push(m);
            }
            return months;
        });
        const minMonth = Math.min(...allMonths);
        const maxMonth = Math.max(...allMonths);
        const headers = [];
        for (let i = minMonth; i <= maxMonth; i++) {
            headers.push({ index: i, name: getMonthName(i) });
        }
        return headers;
    }, [data]);
    
    const categories = [...new Set(data.map(item => item.category))];

    return (
        <KpiCard>
            {title && <h3 className="text-xl font-bold text-slate-800 mb-4">{title}</h3>}
            <div className="flex justify-end gap-4 mb-4">
                {Object.entries(statusStyles).map(([status, styles]) =>(
                    <div key={status} className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full ${styles.bg}`}></div>
                        <span className="text-sm font-medium">{status}</span>
                    </div>
                ))}
            </div>
            <div className="overflow-x-auto">
                <div className="gantt-chart-container" style={{minWidth: `${180 + monthHeaders.length * 150 + 250}px`}}>
                    <div className={`grid font-bold text-center text-sm bg-slate-100 rounded-t-lg`} style={{gridTemplateColumns: `180px repeat(${monthHeaders.length}, 1fr) 250px`}}>
                        <div className="p-3 border-r">Hạng mục</div>
                        {monthHeaders.map(m => <div key={m.index} className="p-3 border-r">{m.name}</div>)}
                        <div className="p-3">Chi tiết</div>
                    </div>
                    <div className="divide-y">
                    {categories.map(category => (
                        <div key={category} className="grid min-h-[60px]" style={{gridTemplateColumns: '180px 1fr'}}>
                            <div className={`p-3 font-semibold border-r flex items-center justify-center text-center ${categoryStyles[category as keyof typeof categoryStyles].bg}`}>
                                {category}
                            </div>
                            <div className="col-span-1 relative grid" style={{gridTemplateColumns: `repeat(${monthHeaders.length}, 1fr) 250px`}}>
                                {data.filter(item => item.category === category).map(item => {
                                    const startMonthIndex = monthHeaders.findIndex(h => h.index === item.startMonth);
                                    if (startMonthIndex === -1) return null;
                                    const duration = (item.endMonth - item.startMonth) + 1;

                                    return(
                                        <div key={item.id} className="p-1 flex items-center" style={{ gridColumn: `${startMonthIndex + 1} / span ${duration}`}}>
                                             <div className={`w-full rounded-md p-2 text-xs shadow-sm ${statusStyles[item.status as keyof typeof statusStyles].bg} ${statusStyles[item.status as keyof typeof statusStyles].text}`}>
                                               <p className="font-bold">{item.title}</p>
                                               {item.details && <p className="opacity-80">{item.details}</p>}
                                             </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </KpiCard>
    );
};

const LearningReport: React.FC = () => {
    const processLearningData = () => {
        const monthlyData = Array(12).fill(0).map(() => ({
          'Khóa đào tạo': 0, 'Mentoring': 0, 'Công việc thực tế': 0, 'Theo dõi tiến độ thực hiện': 0, total: 0
        }));
        timelineData.forEach(item => {
            // Timeline can span multiple months
            for (let i = item.startMonth; i <= item.endMonth; i++) {
                if (i > 0 && i <= 12) {
                    const data = monthlyData[i - 1];
                    if (data[item.category] !== undefined) {
                        data[item.category]++;
                        data.total++;
                    }
                }
            }
        });
        return monthlyData;
    };
    const learningMonthlyData = processLearningData();
    const monthLabels = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'];

    const learningChartData = {
        labels: monthLabels,
        datasets: [
            { label: 'Khóa đào tạo', data: learningMonthlyData.map(d => d['Khóa đào tạo']), borderColor: '#3b82f6', backgroundColor: '#3b82f620', fill: true, tension: 0.3 },
            { label: 'Mentoring', data: learningMonthlyData.map(d => d['Mentoring']), borderColor: '#8b5cf6', backgroundColor: '#8b5cf620', fill: true, tension: 0.3 },
            { label: 'Thực tế', data: learningMonthlyData.map(d => d['Công việc thực tế']), borderColor: '#14b8a6', backgroundColor: '#14b8a620', fill: true, tension: 0.3 },
            { label: 'Theo dõi', data: learningMonthlyData.map(d => d['Theo dõi tiến độ thực hiện']), borderColor: '#ec4899', backgroundColor: '#ec489920', fill: true, tension: 0.3 },
        ]
    };

    const lineChartOptions = { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true } }, plugins: { legend: { display: true, position: 'bottom' as const } } };

    return (
        <KpiCard>
            <div className="flex items-center gap-3 mb-4">
                <PresentationChartLineIcon className="w-7 h-7 text-purple-500" />
                <h3 className="text-xl font-bold text-slate-800">Hoạt động tại Học viện Đào tạo (Theo Tháng)</h3>
            </div>
            <div className="h-80">
                <ChartComponent type="line" data={learningChartData} options={lineChartOptions} />
            </div>
        </KpiCard>
    );
}


const LearningView: React.FC = () => {
    const [activeTab, setActiveTab] = useState('introduction');

    const renderContent = () => {
        switch(activeTab) {
            case 'introduction':
                return (
                    <KpiCard>
                        <h3 className="font-bold text-xl text-slate-800">Giới thiệu về Học viện Đào tạo</h3>
                        <p className="mt-4 text-slate-600">Học viện Đào tạo là một khung cấu trúc được thiết kế để thúc đẩy sự tăng trưởng và phát triển liên tục trong toàn tổ chức. Mục tiêu chính là trang bị cho đội ngũ nhân tài của chúng ta những năng lực chuyên môn và lãnh đạo cần thiết để xuất sắc trong vai trò hiện tại và chuẩn bị cho các thách thức trong tương lai.</p>
                        <p className="mt-2 text-slate-600">Thông qua phương pháp học tập kết hợp giữa đào tạo chính quy, cố vấn chuyên sâu và ứng dụng thực tế trong công việc, chúng tôi hướng tới việc xây dựng một đội ngũ chuyên gia và nhà lãnh đạo tài năng, vững mạnh để thúc đẩy thành công của công ty.</p>
                    </KpiCard>
                );
            case 'program':
                return <Timeline data={timelineData} title="Lộ trình Phát triển Nhân tài tổng thể"/>;
            case 'reports':
                return <LearningReport />;
            case 'functional':
                return <Timeline data={timelineData.filter(i => i.competence === 'functional')} title="Lộ trình Phát triển Năng lực Chuyên môn"/>;
            case 'leadership':
                return <Timeline data={timelineData.filter(i => i.competence === 'leadership')} title="Lộ trình Phát triển Năng lực Lãnh đạo"/>;
            default:
                return null;
        }
    };

    return (
        <section id="learning" className="animate-fade-in space-y-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-slate-800">Học viện Đào tạo</h2>
                    <p className="text-slate-600 mt-2 text-lg">Chương trình học tập có cấu trúc để phát triển năng lực nhân viên.</p>
                </div>
                 <div className="flex-shrink-0 flex items-center gap-2">
                    <button className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400">
                        <LinkIcon className="w-4 h-4" />
                        Nhập từ Google Drive
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <UploadIcon className="w-4 h-4" />
                        Tải lên tệp
                    </button>
                </div>
            </div>
            <SubNav items={SUB_NAV_ITEMS} activeId={activeTab} onSelect={setActiveTab} />
            <div className="mt-6">
                {renderContent()}
            </div>
        </section>
    );
};

export default LearningView;