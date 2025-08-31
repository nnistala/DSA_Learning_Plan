'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Target, 
  Clock, 
  Award,
  Brain,
  Zap,
  Trophy,
  Calendar
} from 'lucide-react';

interface AnalyticsProps {
  totalProblems: number;
  completedProblems: number;
  currentStreak: number;
  studyTimeToday: number;
  weeklyGoal: number;
  patternMastery: { [key: string]: number };
  difficultyBreakdown: { easy: number; medium: number; hard: number };
  companyFocus: { [key: string]: number };
}

const AnalyticsDashboard: React.FC<AnalyticsProps> = ({
  totalProblems = 125,
  completedProblems = 0,
  currentStreak = 0,
  studyTimeToday = 0,
  weeklyGoal = 10,
  patternMastery = {},
  difficultyBreakdown = { easy: 0, medium: 0, hard: 0 },
  companyFocus = {}
}) => {
  const completionRate = (completedProblems / totalProblems) * 100;
  const weeklyProgress = (completedProblems % 10 / weeklyGoal) * 100;

  const topPatterns = Object.entries(patternMastery)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5);

  const topCompanies = Object.entries(companyFocus)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedProblems}/{totalProblems}</div>
            <Progress value={completionRate} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              {completionRate.toFixed(1)}% complete
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentStreak}</div>
            <p className="text-xs text-muted-foreground">
              days in a row
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Time Today</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{studyTimeToday}min</div>
            <p className="text-xs text-muted-foreground">
              {studyTimeToday >= 60 ? 'Great job!' : 'Keep going!'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weekly Goal</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedProblems % 10}/{weeklyGoal}</div>
            <Progress value={weeklyProgress} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              This week's progress
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pattern Mastery */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Pattern Mastery
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {topPatterns.length > 0 ? (
              topPatterns.map(([pattern, score]) => (
                <div key={pattern} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{pattern}</span>
                  <div className="flex items-center gap-2">
                    <Progress value={score} className="w-20" />
                    <span className="text-xs text-muted-foreground w-8">
                      {score}%
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">
                Start solving problems to see pattern mastery
              </p>
            )}
          </CardContent>
        </Card>

        {/* Difficulty Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Difficulty Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Easy</span>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  {difficultyBreakdown.easy}
                </Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Medium</span>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-yellow-50 text-yellow-700">
                  {difficultyBreakdown.medium}
                </Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Hard</span>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-red-50 text-red-700">
                  {difficultyBreakdown.hard}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Company Focus */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Company Focus
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {topCompanies.length > 0 ? (
              topCompanies.map(([company, count]) => (
                <div key={company} className="text-center">
                  <div className="text-2xl font-bold">{count}</div>
                  <div className="text-xs text-muted-foreground">{company}</div>
                </div>
              ))
            ) : (
              <p className="text-sm text-muted-foreground col-span-full">
                Start solving problems to see company distribution
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Study Plan Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            90-Day Study Plan Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">Phase 1</div>
              <div className="text-xs text-muted-foreground">Foundation</div>
              <div className="text-sm">Days 1-20</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">Phase 2</div>
              <div className="text-xs text-muted-foreground">Expansion</div>
              <div className="text-sm">Days 21-45</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-orange-600">Phase 3</div>
              <div className="text-xs text-muted-foreground">Advanced</div>
              <div className="text-sm">Days 46-70</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-600">Phase 4</div>
              <div className="text-xs text-muted-foreground">Simulation</div>
              <div className="text-sm">Days 71-85</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-red-600">Phase 5</div>
              <div className="text-xs text-muted-foreground">Polish</div>
              <div className="text-sm">Days 86-90</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;
