import type { TalentPlanAction, FunnelStage } from '../types';

export const talentResults2024 = [
  {
    title: 'Đánh giá & Phát triển nội bộ',
    description: 'Số nhân tài được tuyển dụng và phát triển trong nội bộ.',
    value: 13,
    total: 16,
    color: '#3b82f6',
  },
  {
    title: 'Tuyển dụng Bên ngoài',
    description: 'Số nhân tài được tuyển dụng từ nguồn bên ngoài.',
    value: 3,
    total: 3,
    color: '#16a34a',
  },
  {
    title: 'Đội ngũ kế thừa',
    description: 'Số vị trí được lấp đầy bởi nhân sự kế thừa.',
    value: 6,
    total: 6,
    color: '#f97316',
  },
];


export const talentPlan2025: TalentPlanAction[] = [
    {
        name: "1. Đánh giá và Phát triển Nhân tài",
        months: [
            { name: "Tháng 1-2", items: [
                { title: "Danh sách Top Performer AM, Trưởng Bưu cục cho HRBP", detail: "", status: 'done' },
                { title: "Thu hút & Lựa chọn Fast Track (FT)", detail: "Xem thêm ở chương trình Fast Track 2025", status: 'wip' },
                { title: "Onboard 8 Quản lý Khối Hàng nặng", detail: "", status: 'done' },
                { title: "Ký MOU & tổ chức Hackathon với ĐH KLU - Tháng 2", detail: "", status: 'done' }
            ]},
            { name: "Tháng 3-4", items: [
                { title: "Onboard 15 AM & Trưởng Bưu cục (SL)", detail: "", status: 'done' },
                { title: "Hoàn tất tuyển dụng & Onboard FT", detail: "", status: 'wip' },
                { title: "Workshop IDP & Phân tích GAP năng lực", detail: "Thực hiện Workshop cho AM, SL, Khối Hàng Nặng", status: 'wip' },
            ]},
            { name: "Tháng 5-6", items: [
                { title: "Chương trình Phát triển 2025", detail: "(Tổng: 24 nhân sự; KTT: 15, Khối Hàng nặng: 8 + 1). Triển khai chương trình phát triển: Workshop chuyên môn, lãnh đạo & mentoring", status: 'pending' },
                { title: "Đánh giá Nhân tài Nội bộ", detail: "(AM, SL) - đợt 2", status: 'pending' },
                { title: "Thực hiện Kế hoạch Hành động", detail: "Thực tập, Dự án tại Hub, Chuyên môn/ Chiến dịch", status: 'pending' },
                { title: 'Thi đua "Ươm mầm lãnh đạo" - Vòng 1', detail: "Dành cho Top Performer khối Thị trường", status: 'wip' },
            ]},
            { name: "Tháng 6-7", items: [
                 { title: 'Đánh giá Top 20 Performers thi đua "Ươm Mầm Lãnh Đạo"', detail: "Khối Thị trường tham gia Vòng 1", status: 'wip' },
                 { title: 'Workshop "Problem Solving & Presentation ngày 04/7 và 10/7/2025"', detail: 'Dành cho chương trình "Ươm Mầm Lãnh Đạo"', status: 'wip' },
                 { title: 'Đánh giá nội bộ - Vòng 2 Case Study "Ươm Mầm Lãnh Đạo"', detail: "Tổ chức ngày 16-18/7", status: 'wip' },
            ]},
            { name: "Tháng 8-9", items: [
                 { title: 'Workshop Quản lý Dự án và Chương trình Mentoring', detail: "Khối Thị trường & Khối Hàng Nặng", status: 'wip' },
                 { title: 'CT hợp tác với 2 trường ĐH Bách Khoa, Tôn Đức Thắng', detail: "Ký MOU và hoạt động khác", status: 'wip' },
             ]},
            { name: "Tháng 10-12", items: [
                 { title: 'Đánh giá tiến độ Phát triển và Thực hiện công việc', detail: "Tiến độ học tập, tiến độ thực hiện công việc dự án, mức độ sẵn sáng khối TT, Hàng Nặng", status: 'wip' },
            ]},
        ]
    }
];

export const fastTrackFunnel2024: FunnelStage[] = [
  { id: 'cvs', name: 'CVs Thu hút', target: 200, actual: 100, description: 'Tổng số CV nhận được từ các kênh tuyển dụng.' },
  { id: 'screened', name: 'CVs Sàng lọc', target: 50, actual: 35, description: 'CV đạt yêu cầu cơ bản sau khi sàng lọc.' },
  { id: 'interview1', name: 'Phỏng vấn Vòng 1 (BDA)', target: 30, actual: 20, description: 'Ứng viên vượt qua vòng sàng lọc và được phỏng vấn bởi BDA.' },
  { id: 'interview2', name: 'Phỏng vấn Vòng 2 (SMT)', target: 15, actual: 12, description: 'Ứng viên được lựa chọn để phỏng vấn chuyên môn với SMT.' },
  { id: 'onboard', name: 'Onboard chính thức', target: 3, actual: 3, description: 'Ứng viên chính thức được tuyển dụng và tham gia chương trình.' },
  { id: 'probation', name: 'Giai đoạn Thử việc (2 tháng)', target: 3, actual: 3, description: 'Thử việc ở vị trí Nhân viên Phát triển Thị trường & Vận hành.' },
  { id: 'acting-am1', name: 'Giai đoạn Acting AM (3 tháng)', target: 3, actual: 3, description: 'Bắt đầu giai đoạn Acting Area Manager, tất cả đều đạt yêu cầu.' },
  { id: 'acting-am2', name: 'Giai đoạn Acting AM (3 tháng tiếp)', target: 3, actual: 1, description: 'Kết thúc giai đoạn: 01 FT đạt, 01 trở thành nhân viên thường, 01 rời chương trình.' },
  { id: 'final-placement', name: 'Sắp xếp vị trí cuối cùng', target: 3, actual: 1, description: 'FT còn lại được xem xét cho vị trí tại Khối Hàng nặng do không có vị trí AM phù hợp.' },
  { id: 'appointment', name: 'Bổ nhiệm chính thức', target: 3, actual: 1, description: 'Bổ nhiệm thành công 01 FT vào vị trí Quản lý Dự án tại Khối Hàng nặng.' }
];

export const fastTrackFunnel2025: FunnelStage[] = [
  { id: 'cvs', name: 'CVs Thu hút', target: 200, actual: 150, description: 'Tổng số CV nhận được từ các kênh tuyển dụng.' },
  { id: 'screened', name: 'CVs Sàng lọc', target: 50, actual: 42, description: 'CV đạt yêu cầu cơ bản sau khi sàng lọc.' },
  { id: 'interview1', name: 'Phỏng vấn Vòng 1 (BDA)', target: 25, actual: 18, description: 'Ứng viên vượt qua vòng sàng lọc và được phỏng vấn bởi BDA.' },
  { id: 'interview2', name: 'Phỏng vấn Vòng 2 (SMT)', target: 10, actual: 7, description: 'Ứng viên được lựa chọn để phỏng vấn chuyên môn với SMT.' },
  { id: 'offer', name: 'Gửi đề nghị', target: 3, actual: 4, description: 'Gửi offer cho 4 ứng viên tiềm năng nhất.' },
  { id: 'hiring', name: 'Tuyển dụng', target: 3, actual: 0, description: '3/4 ứng viên từ chối offer, dẫn đến không có nhân sự nào được tuyển dụng.' },
];

export const talentProcessSteps = [
    {
      id: 'step1',
      title: 'Xác định & Tuyển chọn',
      description: 'Xác định các vị trí trọng yếu, đánh giá mức độ sẵn sàng nhân tài nội bộ, thực hiện tuyển dụng bên ngoài để thu hút ứng viên tiềm năng.',
      icon: 'users'
    },
    {
      id: 'step2',
      title: 'Phát triển Năng lực',
      description: 'Xây dựng Lộ trình Phát triển Cá nhân (IDP) và triển khai các chương trình đào tạo, mentoring, và các dự án thực tế để lấp đầy khoảng trống năng lực.',
      icon: 'academic-cap'
    },
    {
      id: 'step3',
      title: 'Đánh giá & Sẵn sàng',
      description: 'Theo dõi tiến độ, thực hiện các kỳ đánh giá hiệu suất định kỳ và đánh giá mức độ sẵn sàng của nhân tài cho các vai trò kế thừa.',
      icon: 'document-check'
    },
    {
      id: 'step4',
      title: 'Bổ nhiệm & Kế thừa',
      description: 'Công nhận và tưởng thưởng cho các nhân tài có hiệu suất cao, đồng thời thực hiện quy hoạch và bổ nhiệm vào các vị trí chiến lược.',
      icon: 'gift'
    }
];