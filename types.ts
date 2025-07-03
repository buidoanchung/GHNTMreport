import React from 'react';

export type ViewId = 'dashboard' | 'plan2025' | 'performance' | 'talent' | 'learning' | 'reports';

export interface NavItem {
  id: ViewId;
  label: string;
}

export interface PerformanceKpi {
  title: string;
  value: string;
  total: string;
  percentage: number;
  description: string;
  color: string;
}

export interface PerformanceKpiDetail {
  id: string;
  name: string;
  target: string;
  weight: string;
  actualPerformance: string[];
  result: string;
  notes?: string;
}

export interface PerformanceKpiCategory {
  id: string;
  title: string;
  weight: string;
  kpis: PerformanceKpiDetail[];
}

export interface LessonLearnt {
    id: string;
    content: string;
}

export interface PerformanceChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor?: string;
    borderWidth?: number;
    stack?: string;
  }[];
}

export interface SurveyResult {
    criteria: string;
    ratings: number[];
}

export interface LearningTimelineItem {
    id: string;
    title: string;
    category: 'Khóa đào tạo' | 'Mentoring' | 'Công việc thực tế' | 'Theo dõi tiến độ thực hiện';
    startMonth: number; // 1-12
    endMonth: number;
    status: 'Hoàn thành' | 'Đang làm' | 'Chưa làm';
    details?: string;
    competence?: 'leadership' | 'functional';
}

export interface TalentResult {
  title: string;
  description: string;
  value: number;
  total: number;
  color: 'blue' | 'green' | 'orange';
}

export interface TalentKpi {
  id: string;
  name: string;
  weight: string;
  actualPerformance: string;
  result: string;
  notes: string;
}

export interface TalentKpiCategory {
  id: string;
  title: string;
  weight: string;
  kpis: TalentKpi[];
}

export interface TalentLesson {
  id: string;
  content: string;
}

export interface TalentPlanAction {
  name: string;
  months: {
      name: string;
      items: { title: string; detail: string; status: 'done' | 'wip' | 'pending' }[];
  }[];
}

export interface SubNavItem {
  id: string;
  label: string;
}

export interface PlanActivity {
  id: string;
  title: string;
  quarter: number;
  status: 'completed' | 'in-progress' | 'planned';
}

export interface Deliverable {
  text: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export interface PlanQuarter {
  quarter: number;
  title: string;
  period: string;
  theme: 'foundation' | 'execution' | 'acceleration' | 'finalization';
  deliverables: Deliverable[];
}

export interface StrategicObjective {
    id: string;
    icon: 'target' | 'users' | 'book' | 'chart';
    title: string;
    description: string;
    lessonLink: string;
}

export interface PerformanceProcessStep {
    id: number;
    title: string;
    timeline: string;
    status: 'completed' | 'in-progress' | 'planned';
}

export interface FunnelStage {
  id: string;
  name: string;
  target: number;
  actual: number;
  description: string;
}