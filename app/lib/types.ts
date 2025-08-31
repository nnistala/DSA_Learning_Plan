
export interface Problem {
  id: string;
  title: string;
  leetcodeNumber: number;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  pattern: {
    id: string;
    name: string;
    color: string;
    icon: string;
  };
  description?: string;
  solution?: string;
  timeComplexity?: string;
  spaceComplexity?: string;
  companies: { name: string }[];
  hints: string[];
  tags: string[];
  frequency: 'LOW' | 'MEDIUM' | 'HIGH' | 'VERY_HIGH';
  isBlind75: boolean;
  isNeetCode: boolean;
  order: number;
  progress?: {
    status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED' | 'MASTERED';
    attempts: number;
    timeSpent: number;
    lastAttempt?: Date;
  };
}

export interface Pattern {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
  order: number;
  problems: Problem[];
}

export interface StudyPlan {
  id: string;
  name: string;
  description?: string;
  totalDays: number;
  currentDay: number;
  isActive: boolean;
  startDate: Date;
  endDate?: Date;
  sessions: StudySession[];
}

export interface StudySession {
  id: string;
  day: number;
  date: Date;
  problemIds: string[];
  isCompleted: boolean;
  notes?: string;
}

export interface UserStats {
  totalProblems: number;
  completedProblems: number;
  masteredProblems: number;
  currentStreak: number;
  totalTimeSpent: number;
  averageAttempts: number;
  progressByPattern: Record<string, {
    total: number;
    completed: number;
    mastered: number;
  }>;
}

export interface FilterOptions {
  patterns: string[];
  difficulties: string[];
  companies: string[];
  status: string[];
  frequency: string[];
  tags: string[];
}
