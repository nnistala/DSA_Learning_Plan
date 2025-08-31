
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  CheckCircle, 
  Trophy, 
  Clock, 
  TrendingUp,
  Target,
  Zap,
  Calendar,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

interface Stats {
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

interface RecentProblem {
  id: string;
  title: string;
  leetcodeNumber: number;
  difficulty: string;
  pattern: { name: string; color: string };
  status: string;
  lastAttempt: string;
}

export function DashboardClient() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [recentProblems, setRecentProblems] = useState<RecentProblem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [statsRes, problemsRes] = await Promise.all([
        fetch('/api/stats'),
        fetch('/api/problems?limit=5')
      ]);

      if (statsRes.ok) {
        const statsData = await statsRes.json();
        setStats(statsData);
      }

      if (problemsRes.ok) {
        const problemsData = await problemsRes.json();
        setRecentProblems(problemsData.slice(0, 5));
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'EASY': return 'bg-green-500';
      case 'MEDIUM': return 'bg-yellow-500';
      case 'HARD': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'COMPLETED': return 'text-green-600';
      case 'MASTERED': return 'text-blue-600';
      case 'IN_PROGRESS': return 'text-yellow-600';
      default: return 'text-muted-foreground';
    }
  };

  if (loading || !stats) {
    return (
      <div className="container max-w-screen-2xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-20 bg-muted rounded"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  const completionPercentage = Math.round((stats.completedProblems / stats.totalProblems) * 100);

  return (
    <div className="container max-w-screen-2xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome back! 👋
          </h1>
          <p className="text-muted-foreground mt-2">
            Continue your journey to master the top 75 DSA problems
          </p>
        </div>
        <Link href="/problems">
          <Button size="lg">
            <BookOpen className="mr-2 h-4 w-4" />
            Continue Learning
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Problems Solved</p>
                <p className="text-2xl font-bold text-primary">
                  {stats.completedProblems}/{stats.totalProblems}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            <Progress value={completionPercentage} className="mt-3" />
            <p className="text-xs text-muted-foreground mt-2">
              {completionPercentage}% complete
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Mastered</p>
                <p className="text-2xl font-bold text-blue-600">
                  {stats.masteredProblems}
                </p>
              </div>
              <Trophy className="h-8 w-8 text-yellow-500" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Problems you've mastered
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Time Spent</p>
                <p className="text-2xl font-bold text-purple-600">
                  {Math.round(stats.totalTimeSpent / 60)}h
                </p>
              </div>
              <Clock className="h-8 w-8 text-purple-500" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Total study time
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Attempts</p>
                <p className="text-2xl font-bold text-orange-600">
                  {stats.averageAttempts}
                </p>
              </div>
              <Target className="h-8 w-8 text-orange-500" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Per problem
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Pattern Progress */}
        <Card className="lg:col-span-2 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Progress by Pattern
            </CardTitle>
            <CardDescription>
              Track your mastery across all DSA patterns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(stats.progressByPattern).slice(0, 8).map(([pattern, progress]) => (
                <div key={pattern} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{pattern}</span>
                    <span className="text-xs text-muted-foreground">
                      {progress.completed}/{progress.total}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Progress 
                      value={(progress.completed / progress.total) * 100} 
                      className="flex-1" 
                    />
                    <Progress 
                      value={(progress.mastered / progress.total) * 100} 
                      className="flex-1" 
                    />
                  </div>
                  <div className="flex gap-4 text-xs">
                    <span className="text-green-600">● Completed</span>
                    <span className="text-blue-600">● Mastered</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions & Recent */}
        <div className="space-y-6">
          {/* Study Plan */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Today's Plan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-4">
                <Zap className="mx-auto mb-3 h-8 w-8 text-primary" />
                <p className="text-sm text-muted-foreground mb-4">
                  Ready to tackle today's problems?
                </p>
                <Link href="/schedule">
                  <Button className="w-full">
                    View Study Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Recent Problems */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Continue Learning</CardTitle>
              <CardDescription>
                Pick up where you left off
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentProblems.slice(0, 3).map((problem, index) => (
                  <Link 
                    key={problem.id} 
                    href={`/problems/${problem.id}`}
                    className="block"
                  >
                    <div className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <div className={`w-2 h-2 rounded-full ${getDifficultyColor(problem.difficulty)}`} />
                          <span className="text-sm font-medium truncate">
                            {problem.leetcodeNumber}. {problem.title}
                          </span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {problem.pattern.name}
                        </Badge>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    </div>
                  </Link>
                ))}
                <Link href="/problems">
                  <Button variant="outline" className="w-full mt-3">
                    View All Problems
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
