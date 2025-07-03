import type { LearningTimelineItem } from '../types';

export const timelineData: LearningTimelineItem[] = [
    // 2024 Data
    { id: 'kt1', title: 'Kỹ năng trình bày', category: 'Khóa đào tạo', startMonth: 9, endMonth: 9, status: 'Hoàn thành', details: 'Tháng 9/2024 (BDA)', competence: 'leadership' },
    { id: 'kt2', title: 'Lập kế hoạch & Tổ chức công việc', category: 'Khóa đào tạo', startMonth: 10, endMonth: 10, status: 'Hoàn thành', details: 'Tháng 10/2024 (BDA)', competence: 'leadership' },
    { id: 'kt3', title: 'Tư duy dịch vụ', category: 'Khóa đào tạo', startMonth: 11, endMonth: 11, status: 'Hoàn thành', details: 'Tháng 11/2024 (BDA)', competence: 'functional' },
    { id: 'm1', title: 'Giai đoạn Mentoring 1', category: 'Mentoring', startMonth: 9, endMonth: 11, status: 'Hoàn thành', details: 'Tháng 9-11/2024' },
    { id: 'td1', title: 'Khởi động', category: 'Theo dõi tiến độ thực hiện', startMonth: 9, endMonth: 9, status: 'Hoàn thành', details: 'Tháng 9/2024 (BDA, SMT, LM)' },
    { id: 'td2', title: 'IDP & Hội nhập', category: 'Theo dõi tiến độ thực hiện', startMonth: 9, endMonth: 9, status: 'Hoàn thành', details: 'Tháng 9/2024 (BDA, SMT)' },
    { id: 'td4', title: 'Báo cáo cuối kỳ', category: 'Theo dõi tiến độ thực hiện', startMonth: 11, endMonth: 11, status: 'Hoàn thành', details: 'Tháng 11/2024' },
    
    // Khóa đào tạo for 2025
    { id: 'kt4', title: 'Giải quyết vấn đề (ET)', category: 'Khóa đào tạo', startMonth: 3, endMonth: 3, status: 'Đang làm', details: 'Tháng 3 (ET)', competence: 'functional' },
    { id: 'kt5', title: 'Sharing: Phân tích Dữ liệu', category: 'Khóa đào tạo', startMonth: 4, endMonth: 4, status: 'Đang làm', details: 'Tháng 4 (QuânNN, Sang, AnhNTT)', competence: 'functional' },
    { id: 'kt6', title: 'Thiết lập Mục tiêu & Ủy quyền', category: 'Khóa đào tạo', startMonth: 5, endMonth: 5, status: 'Chưa làm', details: 'Tháng 5 (Giảng viên ngoài)', competence: 'leadership' },
    
    // Mentoring for 2025
    { id: 'm6', title: 'Giai đoạn Mentoring 2', category: 'Mentoring', startMonth: 4, endMonth: 5, status: 'Đang làm', details: 'Tháng 4-5' },
    
    // Công việc thực tế - Spanning
    { id: 'cvt1', title: 'Luân chuyển công việc/ Bổ nhiệm vị trí mới; Quản lý dự án, Nghiên cứu Giải pháp...', category: 'Công việc thực tế', startMonth: 9, endMonth: 5, status: 'Đang làm', details: 'Phát triển hàng nặng Bến Tre, Quảng Ninh; PCĐB; New AM...' },
    
    // Theo dõi - Spanning and 2025
    { id: 'td3', title: 'Báo cáo tuần', category: 'Theo dõi tiến độ thực hiện', startMonth: 10, endMonth: 3, status: 'Đang làm', details: '1 tuần/lần' },
    { id: 'td5', title: 'Đánh giá IDP', category: 'Theo dõi tiến độ thực hiện', startMonth: 3, endMonth: 3, status: 'Đang làm', details: 'Tháng 3' },
    { id: 'td6', title: 'Review tháng', category: 'Theo dõi tiến độ thực hiện', startMonth: 4, endMonth: 4, status: 'Đang làm', details: 'Tháng 4 (BDA, HRBP, LM)' },
    { id: 'td7', title: 'Đánh giá toàn bộ lộ trình SMT, LM, BDA', category: 'Theo dõi tiến độ thực hiện', startMonth: 5, endMonth: 5, status: 'Chưa làm', details: 'Tháng 5' },
];