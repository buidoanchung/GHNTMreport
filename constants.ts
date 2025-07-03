import { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Tổng quan' },
  { id: 'plan2025', label: 'Kế hoạch 2025' },
  { id: 'talent', label: 'Quản lý Nhân tài' },
  { id: 'performance', label: 'Quản lý Hiệu quả Công việc' },
  { id: 'learning', label: 'Học viện Đào tạo' },
];

export const doughnutChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
     tooltip: {
      enabled: false
    }
  },
  cutout: '80%',
};

export const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'x' as const,
  scales: {
    x: { 
        grid: {
            display: false,
        }
    },
    y: { 
        beginAtZero: true,
        grid: {
            color: '#e2e8f0',
        }
    },
  },
  plugins: {
    legend: { display: false },
  },
};