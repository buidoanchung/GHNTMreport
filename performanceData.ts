import type { PerformanceKpi, PerformanceChartData, SurveyResult, PerformanceKpiCategory, LessonLearnt, PerformanceProcessStep } from '../types';

export const kpis: PerformanceKpi[] = [
  {
    title: 'Tuyển dụng & Phát triển Nội bộ',
    value: '22',
    total: '20',
    percentage: 110,
    description: 'Số nhân tài được tuyển dụng và phát triển trong nội bộ.',
    color: 'bg-blue-500',
  },
  {
    title: 'Tuyển dụng Bên ngoài',
    value: '7',
    total: '10',
    percentage: 70,
    description: 'Số nhân tài được tuyển dụng từ nguồn bên ngoài.',
    color: 'bg-green-500',
  },
  {
    title: 'Phát triển kế cận',
    value: '5',
    total: '5',
    percentage: 100,
    description: 'Số vị trí được lấp đầy bởi nhân sự kế cận.',
    color: 'bg-orange-500',
  },
];

export const kpiDetails2024: PerformanceKpiCategory[] = [
  {
    id: 'I',
    title: 'Đánh giá & Phát triển Nhân tài Nội bộ - Cấp Quản lý',
    weight: '30%',
    kpis: [
      {
        id: 'KPI1',
        name: 'Lựa chọn & phát triển nhân tài nội bộ cho các vị trí',
        target: 'Dự án Vùng: Trần, Hoàng, Tuấn, Lâm, Tú Anh\nSenior AM: Quỳnh, Tuyền, Thu Ba\nCore performers BD team: Ngọc, V.Anh, Đạt, Thân\nWH (KTC): Quản, Sang, Chương, Tấn\nHR: Vĩ, Hà, Thanh',
        weight: '15%',
        actualPerformance: [
          '5/5 vượt qua GĐ Acting, bổ nhiệm vai trò mới/mở rộng phạm vi',
          '2/3 (Tuyền không đạt)',
          '2/4 H.Anh rời CT, Đạt không đạt GĐ Acting, Ngọc, Thân giữ vai trò',
          'Tất cả đang đảm nhận vai trò và triển khai dự án',
          'Phát triển theo kế hoạch, 90% đúng hạn'
        ],
        result: '',
        notes: ''
      },
      {
        id: 'KPI2',
        name: 'Hiệu suất & Mức độ sẵn sàng cho vai trò/vai trò kế tiếp',
        target: '',
        weight: '15%',
        actualPerformance: ['Hiệu suất: chờ kết quả PA24'],
        result: '',
        notes: ''
      }
    ]
  },
  {
    id: 'II',
    title: 'Thu hút, Phát triển & Giữ chân Nhân tài từ bên ngoài - Cấp Quản lý',
    weight: '40%',
    kpis: [
       { id: 'KPI3', name: 'Thu hút & Tuyển dụng Nhân tài bên ngoài', target: 'Thu hút 200 CV\nTuyển 3 FTs', weight: '10%', actualPerformance: ['Đã thu hút 150/200', 'Đã tuyển 3/3'], result: '', notes: 'Điều chỉnh từ 5 FTs -> 3 FTs' },
       { id: 'KPI4', name: 'Phát triển đúng hạn & Lấp đầy khoảng trống năng lực', target: 'Cố vấn bởi thành viên SMT\nHuấn luyện/hướng dẫn bởi Sr AM, Đội dự án', weight: '15%', actualPerformance: ['Mentoring, Coaching - 100% đúng hạn', 'Lấp đầy khoảng trống năng lực (20%; Giai đoạn 1)'], result: '3 Giai đoạn:\n3 tháng Shipper, Trưởng bưu cục\n6 tháng AM (1 địa điểm/3 tháng)\n3 tháng Acting cho cấp bậc tiếp theo', notes: '' },
       { id: 'KPI5', name: 'Hiệu suất & Mức độ sẵn sàng', target: 'Hiệu suất vai trò (KPIs)\nTài liệu/quy trình cần được phát triển/ghi nhận', weight: '15%', actualPerformance: ['Hiệu suất 3 tháng: 2/3 đạt yêu cầu', 'Hiệu suất 3 tháng: Chờ đánh giá kết thúc đợt (Tuần 3 - Tháng 2/24)'], result: '', notes: '' }
    ]
  },
  {
    id: 'III',
    title: 'Quản lý Hiệu suất & Phát triển Năng lực Lãnh đạo',
    weight: '30%',
    kpis: [
       { id: 'KPI6', name: 'Triển khai quy trình Quản lý Hiệu suất (PM)', target: '', weight: '10%', actualPerformance: ['% đúng hạn các hoạt động chính của quy trình (Thiết lập KPI, Đánh giá cuối năm)'], result: '', notes: '' },
       { id: 'KPI7', name: 'Ủy quyền - Đào tạo & thực thi các KPI được ủy quyền', target: '', weight: '20%', actualPerformance: ['# giảng viên nội bộ được phát triển & 100% Workshop đúng hạn theo kế hoạch', '% triển khai các KPI được ủy quyền'], result: '', notes: '' }
    ]
  }
];

export const lessonsLearnt2024: LessonLearnt[] = [
    { id: 'l1', content: 'Cân bằng nguồn lực giữa nhân tài nội bộ và bên ngoài (50-50). Đa dạng hóa giải pháp thu hút và tuyển dụng cho nhu cầu ngắn hạn và dài hạn.' },
    { id: 'l2', content: 'Tăng cường sự tham gia của các phòng ban vào việc phát triển nhân tài (chuyển giao kiến thức quản lý nhân tài cho HRBP, hướng dẫn cho Quản lý trực tiếp).' },
    { id: 'l3', content: 'Xây dựng khung năng lực chuyên môn & cốt lõi làm nền tảng phát triển, tập trung vào đội ngũ vận hành.' },
    { id: 'l4', content: 'Cải tiến quy trình Quản lý Hiệu suất để xác định nhân sự cốt lõi và áp dụng đánh giá tiềm năng cho các nhóm mục tiêu.' }
];

export const processSteps: PerformanceProcessStep[] = [
  { id: 1, title: 'PA2024 Review & Goal Setting 2025', timeline: 'Quý 1', status: 'completed' },
  { id: 2, title: 'Workshop & Initial Development', timeline: 'Quý 1/2', status: 'completed' },
  { id: 3, title: 'Mid-year Review (MYR)', timeline: 'Quý 2/3', status: 'in-progress' },
  { id: 4, title: 'Advanced Workshop & Mentoring', timeline: 'Quý 3', status: 'planned' },
  { id: 5, title: 'Final Review & Prep for PA2025', timeline: 'Quý 4', status: 'planned' },
];

export const performanceProcessSteps = [
    {
      id: 'step1',
      title: 'Thiết lập Mục tiêu & Kế hoạch Phát triển',
      description: 'Đầu năm, quản lý và nhân viên cùng nhau thiết lập các mục tiêu (KPIs) rõ ràng, có thể đo lường và thống nhất Kế hoạch Phát triển Cá nhân (IDP).',
      icon: 'target'
    },
    {
      id: 'step2',
      title: 'Theo dõi & Ghi nhận Liên tục',
      description: 'Trong suốt cả năm, quản lý thực hiện các buổi trao đổi, ghi nhận (check-in) thường xuyên để cung cấp phản hồi, huấn luyện và hỗ trợ nhân viên.',
      icon: 'conversation'
    },
    {
      id: 'step3',
      title: 'Đánh giá Giữa kỳ',
      description: 'Xem xét lại tiến độ thực hiện mục tiêu và IDP, điều chỉnh mục tiêu nếu cần thiết và xác định các hỗ trợ cần thiết cho nửa cuối năm.',
      icon: 'mid-review'
    },
    {
      id: 'step4',
      title: 'Đánh giá Cuối kỳ',
      description: 'Nhân viên tự đánh giá và quản lý thực hiện đánh giá tổng thể hiệu suất cả năm dựa trên kết quả mục tiêu và sự phát triển năng lực.',
      icon: 'final-review'
    },
    {
      id: 'step5',
      title: 'Hiệu chỉnh & Xếp hạng',
      description: 'Các cấp quản lý họp để hiệu chỉnh (calibration) kết quả đánh giá, đảm bảo sự công bằng và nhất quán trên toàn bộ phận/công ty.',
      icon: 'calibration'
    },
    {
      id: 'step6',
      title: 'Công nhận & Lập Kế hoạch năm tới',
      description: 'Công nhận và tưởng thưởng cho các thành tích xuất sắc. Kết quả đánh giá là đầu vào quan trọng để xây dựng kế hoạch nhân sự và IDP cho năm tiếp theo.',
      icon: 'rewards'
    }
];


export const trainingChartData: PerformanceChartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
        {
            label: 'Giờ đào tạo',
            data: [120, 180, 220, 150],
            backgroundColor: 'rgba(59, 130, 246, 0.6)',
            borderColor: 'rgba(59, 130, 246, 1)',
            borderWidth: 1,
        }
    ]
};

export const surveyResults: SurveyResult[] = [
    { criteria: 'Sự rõ ràng của mục tiêu', ratings: [4.2, 4.5] },
    { criteria: 'Phản hồi từ quản lý', ratings: [3.8, 4.1] },
    { criteria: 'Cơ hội phát triển', ratings: [3.9, 4.3] },
    { criteria: 'Sự công bằng trong đánh giá', ratings: [3.7, 4.0] },
    { criteria: 'Công nhận & Khen thưởng', ratings: [3.5, 3.9] },
];