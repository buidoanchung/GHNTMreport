import React from 'react';
import { fastTrackFunnel2024, fastTrackFunnel2025 } from '../../data/talentData';
import type { FunnelStage } from '../../types';

const GraphicalFunnel = ({ title, stages }: { title: string, stages: FunnelStage[] }) => {
    const colors = [
        '#6b0f1a', '#8b1321', '#a51829', '#c42535', '#e63946',
        '#f77f00', '#fcbf49', '#eae2b7', '#fff1c7', '#fff9e6'
    ];
    const totalStages = stages.length;
    const maxWidth = 100;
    const minWidth = 40;
    const widthDecrement = totalStages > 1 ? (maxWidth - minWidth) / (totalStages - 1) : 0;

    const CandidatePulledOutIcon = () => (
        <div className="flex flex-col items-center gap-1">
             <svg className="w-4 h-4 text-sky-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <svg className="w-5 h-5 text-sky-300 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
        </div>
    );

    return (
        <div className="w-full">
            <h3 className="text-3xl font-bold text-center mb-8 text-orange-400">{title}</h3>
            <div className="relative">
                {stages.map((stage, index) => {
                    const width = maxWidth - (index * widthDecrement);
                    const color = colors[index] || colors[colors.length - 1];
                    const prevStage = index > 0 ? stages[index - 1] : null;
                    const conversionRate = prevStage && prevStage.actual > 0 ? (stage.actual / prevStage.actual) * 100 : null;

                    return (
                        <React.Fragment key={stage.id}>
                            {prevStage && (
                                <div className="flex justify-center items-center gap-4 h-20">
                                    <div className="flex flex-col items-center text-center text-xs text-sky-300/90">
                                        <CandidatePulledOutIcon />
                                        <p className="mt-1 font-semibold">{prevStage.actual - stage.actual} ứng viên bị loại</p>
                                        <p>Tỷ lệ chuyển đổi: <span className="font-bold">{conversionRate?.toFixed(1)}%</span></p>
                                    </div>
                                </div>
                            )}

                            <div className="flex items-start justify-center gap-4">
                                <div className="flex-grow flex flex-col items-center">
                                    <div
                                        style={{ width: `${width}%`, backgroundColor: color }}
                                        className="rounded-lg text-white font-bold text-center py-2.5 px-4 shadow-xl text-sm"
                                    >
                                        {stage.name}
                                    </div>
                                </div>
                            </div>
                            <div className="text-center text-slate-300 text-sm mt-2 mb-4 px-4">
                                <p>{stage.description}</p>
                                <p className="font-bold text-slate-100">Số lượng: {stage.actual} / {stage.target}</p>
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

const ReportsView = () => {
    return (
        <section id="reports" className="animate-fade-in bg-slate-900 rounded-2xl p-4 md:p-8 shadow-2xl">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-white tracking-tight">Báo cáo Phễu tuyển dụng Fast Track</h2>
                <p className="text-slate-300 mt-3 text-lg max-w-4xl mx-auto">
                    Phân tích chi tiết hiệu quả và kết quả của chương trình tuyển dụng nhân tài Fast Track.
                </p>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-12 gap-y-16">
                <GraphicalFunnel title="Kết quả 2024" stages={fastTrackFunnel2024} />
                <GraphicalFunnel title="Kế hoạch 2025" stages={fastTrackFunnel2025} />
            </div>
        </section>
    );
};

export default ReportsView;