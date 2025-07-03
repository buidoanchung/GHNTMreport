import React, { useState, useRef } from 'react';
import KpiCard from '../ui/KpiCard';
import SubNav from '../ui/SubNav';
import type { PerformanceKpiCategory, SubNavItem, PerformanceKpi } from '../../types';
import { kpiDetails2024, processSteps, kpis, performanceProcessSteps } from '../../data/performanceData';

// --- ICONS ---
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
const TrophyIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 011.036-4.372A4.5 4.5 0 0112 6.75c1.697 0 3.232.895 4.09 2.25a9.752 9.752 0 011.036 4.372zM12 21V9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a2.25 2.25 0 01-2.25-2.25H12v2.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a2.25 2.25 0 002.25-2.25H12v2.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 18.75h13.5" />
    </svg>
);
const CheckCircleIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);
const DocumentArrowDownIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m-3 0l-3 3m0 0l-3-3m3 3V9" />
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

// --- PROCESS ICONS ---
const TargetIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.592 15.592a.375.375 0 01-.53 0L12 12.53l-3.062 3.062a.375.375 0 11-.53-.53L11.47 12l-3.062-3.062a.375.375 0 11.53-.53L12 11.47l3.062-3.062a.375.375 0 11.53.53L12.53 12l3.062 3.062a.375.375 0 010 .53z" />
    </svg>
);
const ConversationIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.006 3 12c0 2.292 1.006 4.406 2.707 5.867L4.5 21l3.793-1.517A9.709 9.709 0 0012 20.25z" />
    </svg>
);
const MidReviewIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
const FinalReviewIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
);
const CalibrationIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.036.218c-2.21 0-4.24-1.2-5.48-2.94m-2.62-10.726c-1.01.143-2.01.317-3 .52m3-.52L6.38 15.7a5.988 5.988 0 01-2.62 1.416 5.988 5.988 0 01-2.036-.218c-.483-.174-.711-.703-.59-1.202L4.25 4.971" />
    </svg>
);
const RewardsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 011.036-4.372A4.5 4.5 0 0112 6.75c1.697 0 3.232.895 4.09 2.25a9.752 9.752 0 011.036 4.372zM12 21V9" />
    </svg>
);

const processIconMap: { [key: string]: React.FC<{ className?: string }> } = {
    target: TargetIcon,
    conversation: ConversationIcon,
    'mid-review': MidReviewIcon,
    'final-review': FinalReviewIcon,
    calibration: CalibrationIcon,
    rewards: RewardsIcon,
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
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
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
const PERFORMANCE_SUB_NAV_ITEMS: SubNavItem[] = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'plan2025', label: 'Tiến độ 2025' },
    { id: 'process', label: 'Quy trình' },
    { id: 'documents', label: 'Tài liệu' },
    { id: 'results2024', label: 'Kết quả 2024' },
];

// --- TAB COMPONENTS ---

const DashboardTab: React.FC = () => {
    const totalSteps = processSteps.length;
    const completedSteps = processSteps.filter(s => s.status === 'completed').length;
    const inProgressSteps = processSteps.filter(s => s.status === 'in-progress').length;
    const progress = totalSteps > 0 ? ((completedSteps + inProgressSteps * 0.5) / totalSteps) * 100 : 0;

    const statusConfig = {
        completed: { text: 'Hoàn thành', icon: CheckCircleIcon, color: 'text-green-500', bgColor: 'bg-green-50' },
        'in-progress': { text: 'Đang thực hiện', icon: ClockIcon, color: 'text-blue-500', bgColor: 'bg-blue-50' },
        planned: { text: 'Kế hoạch', icon: CalendarIcon, color: 'text-slate-500', bgColor: 'bg-slate-50' }
    };

    return (
        <KpiCard>
            <h3 className="text-xl font-bold text-slate-800">Dashboard Tiến độ Quản lý Hiệu suất 2025</h3>
            <p className="text-slate-500 mt-1">Theo dõi tiến độ các giai đoạn chính trong quy trình năm 2025.</p>

            <div className="mt-6">
                <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-semibold text-slate-600">Tiến độ tổng thể</span>
                    <span className="text-sm font-bold text-orange-600">{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                    <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
            </div>

            <div className="mt-6 space-y-3">
                {processSteps.map(step => {
                    const config = statusConfig[step.status];
                    const Icon = config.icon;
                    return (
                        <div key={step.id} className={`p-4 rounded-lg flex items-center justify-between ${config.bgColor} border-l-4 ${config.color.replace('text-','border-')}`}>
                            <div className="flex items-center gap-4">
                               <Icon className={`w-6 h-6 ${config.color}`}/>
                                <div>
                                    <p className="font-bold text-slate-800">{step.title}</p>
                                    <p className="text-sm text-slate-500">{step.timeline}</p>
                                </div>
                            </div>
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${config.color} ${config.bgColor}`}>{config.text}</span>
                        </div>
                    );
                })}
            </div>
        </KpiCard>
    );
};

const Results2024Tab: React.FC = () => {
    return (
        <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-800">Phân tích Chi tiết Kết quả 2024</h3>
            {kpiDetails2024.map(category => (
                <KpiCard key={category.id} className="bg-gradient-to-br from-slate-50 to-orange-50/50">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        <TrophyIcon className="w-10 h-10 text-orange-500" />
                        <h3 className="text-xl font-bold text-slate-800">
                           {category.id}. {category.title}
                        </h3>
                        <span className="text-lg font-semibold text-white bg-orange-500 px-4 py-1 rounded-full">{category.weight}</span>
                    </div>
                    
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {category.kpis.map(kpi => (
                            <div key={kpi.id} className="bg-white/80 backdrop-blur-sm p-5 rounded-xl border-2 border-orange-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="flex justify-between items-start gap-3">
                                    <h4 className="font-bold text-orange-800 text-lg">{kpi.name}</h4>
                                    <span className="flex-shrink-0 font-bold text-orange-700 bg-orange-100 px-3 py-1 rounded-full text-sm shadow-sm">{kpi.weight}</span>
                                </div>
                                <div className="mt-4 border-t-2 border-dashed border-orange-200/70 pt-3">
                                    <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">Thực tế triển khai</p>
                                    <ul className="space-y-2.5">
                                        {kpi.actualPerformance.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-base text-slate-700">
                                                <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </KpiCard>
            ))}
        </div>
    );
};

const Plan2025Tab: React.FC = () => (
    <KpiCard>
        <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Lộ trình Quản lý Hiệu suất 2025</h3>
        <div className="relative border-l-2 border-dashed border-orange-300 ml-5 max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
                 <div key={index} className="flex items-start gap-6 pb-10 pl-8 relative last:pb-0">
                     <div className="absolute -left-5 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 ring-8 ring-white shadow">
                        <span className="font-bold text-orange-600 text-lg">{step.id}</span>
                    </div>
                    <div>
                        <p className="font-bold text-slate-800 text-lg">{step.title}</p>
                        <p className="text-sm text-slate-500 font-medium bg-orange-50 inline-block px-2 py-0.5 rounded mt-1">{step.timeline}</p>
                    </div>
                </div>
            ))}
        </div>
    </KpiCard>
);

const ProcessTab: React.FC = () => {
    return (
        <KpiCard>
            <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Quy trình Quản lý Hiệu suất & Phát triển Cá nhân (IDP)</h3>
            <div className="relative border-l-2 border-dashed border-orange-300 ml-6 pl-12 space-y-12 max-w-4xl mx-auto">
                {performanceProcessSteps.map((step, index) => {
                    const Icon = processIconMap[step.icon];
                    return (
                        <div key={step.id} className="relative">
                            <div className="absolute -left-[62px] -top-1 w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center ring-8 ring-white shadow-sm">
                                {Icon && <Icon className="w-7 h-7 text-orange-600"/>}
                            </div>
                            <span className="absolute -left-[58px] top-14 text-xs font-bold text-slate-400">GĐ {index + 1}</span>
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
                url: `https://ghn.com/uploads/performance/${file.name}`
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


const PerformanceView: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('dashboard');

    const renderContent = () => {
        switch(activeTab) {
            case 'dashboard':
                return <DashboardTab />;
            case 'results2024':
                return <Results2024Tab />;
            case 'plan2025':
                return <Plan2025Tab />;
            case 'process':
                return <ProcessTab />;
            case 'documents':
                return <DocumentsTab />;
            default:
                return <DashboardTab />;
        }
    };
    
    return (
        <section id="performance" className="animate-fade-in space-y-6">
            <div>
                <h2 className="text-3xl font-bold text-slate-800">Quản lý Hiệu quả & Phát triển Cá nhân (IDP)</h2>
                <p className="text-slate-600 mt-2 text-lg">Chương trình thi đua, phát triển năng lực và đào tạo dành cho cấp Middle Manager.</p>
            </div>
            <SubNav items={PERFORMANCE_SUB_NAV_ITEMS} activeId={activeTab} onSelect={setActiveTab} />
            <div className="mt-4">
                {renderContent()}
            </div>
        </section>
    );
};

export default PerformanceView;