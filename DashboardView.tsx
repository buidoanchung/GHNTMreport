import React from 'react';

const reportData = [
  {
    activity: 'Đội ngũ kế thừa',
    '2023': { objective: 'GDV Successor: 2', weight: '40%', result: '25%' },
    '2024': { objective: 'GDV Successor: 6\nFast Track: 3\nAM nội bộ: 3', weight: '40%', result: '28 %' },
    '2025': { objective: 'GDV Successor: 6\n(Fast Track: 3, AM nội bộ: 3)', weight: '40%', result: '13%' },
  },
  {
    activity: 'Đội ngũ quản lý',
    '2023': { objective: '17' },
    '2024': { objective: '13' },
    '2025': { objective: '19' },
  },
  {
    activity: 'CT Phát triển',
    '2023': { objective: 'Hiểu về bản thân (Self-awareness)\nQuản lý hiệu quả công việc (Performance Management)\nQuản lý tình huống (Situation Management)', weight: '40%', result: '40%' },
    '2024': { objective: 'Self-Awareness\nKey People Processes:\nPerformance Management, Delegation\nOn the job instruction/ coaching: AM Sư phụ và 1:1 monthly với Line manager', weight: '30%', result: '40 %' },
    '2025': { objective: '', weight: '30%', result: '15%' },
  },
  {
    activity: 'Quản lý hiệu quả công việc (QLHQCV)',
    '2023': { objective: 'Thực hiện theo quy trình, thực hiện calibration', weight: '20%', result: '20%' },
    '2024': { objective: 'Cải thiện đánh giá 1:1 cuối năm và calibration tại các phòng ban\nĐào tạo QLHQCV', weight: '30%', result: '20 %' },
    '2025': { objective: 'Key People Process: PM & Delegation\nHiring for success\nCore Competences:\nAI courses\nOTJ Coaching/ Instruction\nMentoring', weight: '30%', result: '15%' },
  },
  {
    activity: 'Tham gia vào chương trình',
    '2023': { objective: 'SMT Members (10%)\nBDA (LnD)- 70%\nĐức- HRBP (10%) và Managers-HAnh, Hoài Anh, c Ngọc, Tài, Vy (10%)' },
    '2024': { objective: 'SMT Members (10%)\nBDA LnD (30-40%)\nHRBP members (30%)\nLine Managers + Buddy (AM Sư phụ) (20-30%)' },
    '2025': { objective: 'SMT Members (10%)\nBDA (20-30%)\nHRBPs (30%)\nLine Manager (30%-40%)' },
  },
];


const DashboardView: React.FC = () => {
    return (
        <section id="dashboard" className="animate-fade-in space-y-6">
            <div>
                <h2 className="text-3xl font-bold text-slate-800">Báo cáo Tổng quan Chiến lược</h2>
                <p className="text-slate-600 mt-2 text-lg">
                    Báo cáo chi tiết các hoạt động, mục tiêu và kết quả của chương trình qua các năm.
                </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-200 shadow-sm overflow-x-auto">
                <table className="w-full border-collapse text-sm text-center min-w-[1200px]">
                    <thead>
                        <tr className="bg-sky-200">
                            <th rowSpan={2} className="p-3 border border-slate-300 font-bold text-slate-700 w-[15%]">Hoạt động</th>
                            <th colSpan={3} className="p-3 border border-slate-300 font-bold text-slate-700">2023</th>
                            <th colSpan={3} className="p-3 border border-slate-300 font-bold text-slate-700">2024</th>
                            <th colSpan={3} className="p-3 border border-slate-300 font-bold text-slate-700">2025</th>
                        </tr>
                        <tr className="bg-sky-100">
                            <th className="p-2 border border-slate-300 font-semibold text-slate-600 w-[20%]">Mục Tiêu</th>
                            <th className="p-2 border border-slate-300 font-semibold text-slate-600 w-[5%]">Trọng số</th>
                            <th className="p-2 border border-slate-300 font-semibold text-slate-600 w-[5%]">Kết quả</th>
                            <th className="p-2 border border-slate-300 font-semibold text-slate-600 w-[20%]">Mục Tiêu</th>
                            <th className="p-2 border border-slate-300 font-semibold text-slate-600 w-[5%]">Trọng số</th>
                            <th className="p-2 border border-slate-300 font-semibold text-slate-600 w-[5%]">Kết quả</th>
                            <th className="p-2 border border-slate-300 font-semibold text-slate-600 w-[20%]">Mục Tiêu</th>
                            <th className="p-2 border border-slate-300 font-semibold text-slate-600 w-[5%]">Trọng số</th>
                            <th className="p-2 border border-slate-300 font-semibold text-slate-600 w-[5%]">Kết quả</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reportData.map((row, index) => (
                            <tr key={index}>
                                <td className="p-2 border border-slate-300 font-semibold align-middle text-left bg-slate-50">{row.activity}</td>
                                
                                <td className="p-2 border border-slate-300 text-left align-top whitespace-pre-wrap">{row['2023'].objective}</td>
                                <td className="p-2 border border-slate-300 align-middle">{row['2023'].weight || ''}</td>
                                <td className="p-2 border border-slate-300 align-middle">{row['2023'].result || ''}</td>
                                
                                <td className="p-2 border border-slate-300 text-left align-top whitespace-pre-wrap">{row['2024'].objective}</td>
                                <td className="p-2 border border-slate-300 align-middle">{row['2024'].weight || ''}</td>
                                <td className="p-2 border border-slate-300 align-middle">{row['2024'].result || ''}</td>

                                <td className="p-2 border border-slate-300 text-left align-top whitespace-pre-wrap">{row['2025'].objective}</td>
                                <td className="p-2 border border-slate-300 align-middle">{row['2025'].weight || ''}</td>
                                <td className="p-2 border border-slate-300 align-middle">{row['2025'].result || ''}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default DashboardView;