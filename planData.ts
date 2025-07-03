

import type { PlanActivity, PlanQuarter, Deliverable, StrategicObjective } from '../types';

export const strategicObjectives2025: StrategicObjective[] = [
    { 
        id: 'objective-1',
        icon: 'target',
        title: "Đa dạng hóa Nguồn Nhân tài", 
        description: "Mở rộng và cân bằng các kênh tuyển dụng nội bộ và bên ngoài, áp dụng các giải pháp sáng tạo để thu hút nhân tài cho cả nhu cầu ngắn hạn và dài hạn. Tiếp tục tuyển dụng Fast Track 2025, số lượng 03. Tuyển chọn, đánh giá nguồn lực nội bộ (AM, TBC) số lượng 15 tham gia vào chương trình bồi dưỡng. Với khối Hàng Nặng, tuyển chọn 09 Top Performers tham gia chương trình bồi dưỡng.  Xây dựng mối quan hệ với các Trường Đại học có ngành nghề đào tạo liên quan để xây dựng thương hiệu nhà tuyển dụng và thu hút các Sinh viên tiềm năng bổ sung cho đội ngũ quản lý tuyến đầu. Số lượng 03 trường Đại học (KLU: đã ký MOU, Đại học BK, Tôn Đức Thắng). ",
        lessonLink: "Từ bài học 2024: Cần cân bằng nguồn lực giữa nhân tài nội bộ và bên ngoài."
    },
    { 
        id: 'objective-2',
        icon: 'users',
        title: "Nâng cao Năng lực Quản lý Nhân tài", 
        description: "Tăng cường sự tham gia của các Trưởng bộ phận, Quản lý trực tiếp vào việc phát triển nhân tài đặc biệt là nhóm tuyển ngoài. Chuyển giao kiến thức, quy trình đánh giá và phát triển nhân tài cho HRBP và các quản lý.",
        lessonLink: "Từ bài học 2024: Cần sự tham gia sâu hơn từ các phòng ban."
    },
    { 
        id: 'objective-3',
        icon: 'book',
        title: "Chuẩn hóa Khung Năng lực", 
        description: "Xây dựng và phát triển khung năng lực chuyên môn và năng lực cốt lõi (Công nghệ, Phân tích dữ liệu, tư duy hệ thống...). Đặc biệt tập trung vào Khối Thị trường, KTC, Khối Hàng Nặng làm nền tảng cho các hoạt động phát triển.",
        lessonLink: "Từ bài học 2024: Cần xây dựng khung năng lực và tài liệu."
    },
    { 
        id: 'objective-4',
        icon: 'chart',
        title: "Tối ưu hóa Quản lý Hiệu suất", 
        description: "Tăng cường quy trình Quản lý Hiệu suất để xác định các nhân sự cốt lõi và bắt đầu áp dụng đánh giá tiềm năng cho các nhóm mục tiêu. Áp dụng kết quả đánh giá hiệu quả công việc cuối năm để thực hiện quy trình thử vai, thăng chức/giáng chức.",
        lessonLink: "Từ bài học 2024: Cần tăng cường quy trình quản lý hiệu suất."
    },
];

export const planActivities: PlanActivity[] = [
  // Q1
  { id: 'q1-1', title: 'Nộp danh sách Top Performer (AM, TBC).', quarter: 1, status: 'completed' },
  { id: 'q1-2', title: 'Đánh giá & lựa chọn 20 Top Performers (AM,TBC) để phát triển.', quarter: 1, status: 'completed' },
  { id: 'q1-3', title: 'Onboard 9 Managers-Freight.', quarter: 1, status: 'completed' },
  { id: 'q1-4', title: 'Ký MOU với Đại học Kỹ thuật & Tôn Đức Thắng.', quarter: 1, status: 'completed' },
  { id: 'q1-5', title: 'Tất cả nhân tài được chọn có Lộ trình Phát triển Cá nhân (IDP).', quarter: 1, status: 'completed' },
  // Q2
  { id: 'q2-1', title: 'Onboard 10 AM, TBC vào chương trình.', quarter: 2, status: 'in-progress' },
  { id: 'q2-2', title: 'Finalize và Onboard.', quarter: 2, status: 'in-progress' },
  { id: 'q2-3', title: 'Phân tích năng lực & thiếu hụt (Gap Analysis) cho 22 nhân tài.', quarter: 2, status: 'completed' },
  { id: 'q2-4', title: 'Thực hiện kế hoạch thực tập, dự án, chiến dịch chức năng.', quarter: 2, 'status': 'in-progress' },
  { id: 'q2-5', title: 'Thi đua "Ươm mầm lãnh đạo" (Tháng 5, 6, 7).', quarter: 2, status: 'in-progress' },
  // Q3
  { id: 'q3-1', title: 'Bắt đầu Chương trình phát triển chung (Kỹ năng lãnh đạo, hợp tác).', quarter: 3, status: 'planned' },
  { id: 'q3-2', title: 'Tổ chức các Workshop & chương trình Mentoring.', quarter: 3, status: 'planned' },
  { id: 'q3-3', title: 'Đánh giá nội bộ đợt 2 cho AM, TBC.', quarter: 3, status: 'planned' },
  { id: 'q3-4', title: 'Báo cáo hàng tháng và đánh giá hàng quý về hiệu suất và sự tiến bộ.', quarter: 3, status: 'planned' },
  { id: 'q3-5', title: 'Xây dựng khung năng lực và tài liệu phát triển.', quarter: 3, status: 'planned' },
  // Q4
  { id: 'q4-1', title: 'Phát triển Batch 2 - nhân tài nội bộ.', quarter: 4, status: 'planned' },
  { id: 'q4-2', title: 'Đánh giá mức độ sẵn sàng của nhân tài (Readiness Level).', quarter: 4, status: 'planned' },
  { id: 'q4-3', title: 'Đánh giá cuối năm (PA2025).', quarter: 4, status: 'planned' },
  { id: 'q4-4', title: 'Chuẩn bị hệ thống và tài liệu cho kế hoạch năm 2026.', quarter: 4, status: 'planned' },
];

export const planQuarters: PlanQuarter[] = [
    { 
        quarter: 1, 
        title: "Nền tảng & Tuyển chọn", 
        period: "Jan - Mar 2025", 
        theme: 'foundation', 
        deliverables: [
            { text: "Danh sách Top 10 Performers", status: 'completed' },
            { text: "9 Managers-Freight được tuyển", status: 'completed' },
            { text: "IDP cho tất cả nhân tài", status: 'completed' }
        ] 
    },
    { 
        quarter: 2, 
        title: "Hội nhập & Phát triển ban đầu", 
        period: "Apr - Jun 2025", 
        theme: 'execution', 
        deliverables: [
            { text: "Báo cáo Gap Analysis", status: 'completed' },
            { text: "Kế hoạch thực tập & dự án", status: 'in-progress' },
            { text: "Khởi động thi đua 'Ươm mầm lãnh đạo'", status: 'in-progress' }
        ] 
    },
    { 
        quarter: 3, 
        title: "Phát triển chuyên sâu & Đánh giá", 
        period: "Jul - Sep 2025", 
        theme: 'acceleration', 
        deliverables: [
            { text: "Lịch workshop & mentoring", status: 'planned' },
            { text: "Báo cáo đánh giá giữa kỳ", status: 'planned' },
            { text: "Khung năng lực chu", status: 'planned' }
        ] 
    },
    { 
        quarter: 4, 
        title: "Hoàn thiện & Lập kế hoạch tương lai", 
        period: "Oct - Dec 2025", 
        theme: 'finalization', 
        deliverables: [
            { text: "Báo cáo đánh giá Readiness Level", status: 'planned' },
            { text: "Kết quả PA2025", status: 'planned' },
            { text: "Kế hoạch & ngân sách 2026", status: 'planned' }
        ] 
    },
];

export const calculateActivitiesProgress = (activities: PlanActivity[]): {
    progress: number,
    completed: number,
    inProgress: number,
    planned: number,
    total: number
} => {
  if (!activities || activities.length === 0) {
    return { progress: 0, completed: 0, inProgress: 0, planned: 0, total: 0 };
  }
  const total = activities.length;
  const completedWeight = 1;
  const inProgressWeight = 0.5;
  
  let completed = 0;
  let inProgress = 0;
  let planned = 0;

  const weightedProgress = activities.reduce((acc, activity) => {
    if (activity.status === 'completed') {
      completed++;
      return acc + completedWeight;
    }
    if (activity.status === 'in-progress') {
      inProgress++;
      return acc + inProgressWeight;
    }
    planned++;
    return acc;
  }, 0);

  return {
    progress: Math.round((weightedProgress / total) * 100),
    completed,
    inProgress,
    planned,
    total
  };
};

export const overallProgressStats = calculateActivitiesProgress(planActivities);
export const overallProgress = overallProgressStats.progress;

export const progressChartData = {
    labels: ['Hoàn thành', 'Chưa hoàn thành'],
    datasets: [{
      data: [overallProgress, 100 - overallProgress],
      backgroundColor: ['#16a34a', '#e5e7eb'],
      borderColor: '#f4f7fa',
      borderWidth: 4,
      circumference: 180,
      rotation: 270,
    }],
};

export const progressChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
};