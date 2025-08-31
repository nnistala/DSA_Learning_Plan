
"use client";

import { useState, useEffect } from 'react';
import { getAllProblems, patterns, companyFrequency } from '@/data/problems';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Clock, 
  Trophy, 
  Building2,
  CheckCircle2,
  Circle,
  Zap,
  Brain
} from 'lucide-react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function ProgressPage() {
  const [completedProblems, setCompletedProblems] = useState<Set<string>>(new Set());
  const [timeSpent, setTimeSpent] = useState<Record<string, number>>({});
  
  const allProblems = getAllProblems();
  
  // Calculate statistics
  const stats = {
    total: allProblems.length,
    completed: completedProblems.size,
    percentage: allProblems.length > 0 ? Math.round((completedProblems.size / allProblems.length) * 100) : 0,
    easy: allProblems.filter(p => p.difficulty === 'Easy' && completedProblems.has(p.id)).length,
    medium: allProblems.filter(p => p.difficulty === 'Medium' && completedProblems.has(p.id)).length,
    hard: allProblems.filter(p => p.difficulty === 'Hard' && completedProblems.has(p.id)).length,
    totalTimeSpent: Object.values(timeSpent).reduce((sum, time) => sum + time, 0)
  };

  const patternProgress = patterns.map(pattern => {
    const patternProblems = pattern.problems;
    const completedInPattern = patternProblems.filter(p => completedProblems.has(p.id)).length;
    return {
      name: pattern.name,
      completed: completedInPattern,
      total: patternProblems.length,
      percentage: patternProblems.length > 0 ? Math.round((completedInPattern / patternProblems.length) * 100) : 0
    };
  });

  const companyProgress = Object.entries(companyFrequency).map(([company, data]) => {
    const companyProblems = allProblems.filter(p => p.companies.includes(company));
    const completedCompanyProblems = companyProblems.filter(p => completedProblems.has(p.id)).length;
    return {
      name: company,
      completed: completedCompanyProblems,
      total: companyProblems.length,
      percentage: companyProblems.length > 0 ? Math.round((completedCompanyProblems / companyProblems.length) * 100) : 0
    };
  });

  // Chart data
  const difficultyChartData = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [
      {
        label: 'Completed',
        data: [stats.easy, stats.medium, stats.hard],
        backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
        borderWidth: 0,
      }
    ]
  };

  const patternChartData = {
    labels: patternProgress.map(p => p.name),
    datasets: [
      {
        label: 'Completion %',
        data: patternProgress.map(p => p.percentage),
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      }
    ]
  };

  const achievements = [
    {
      title: 'First Steps',
      description: 'Complete your first problem',
      achieved: stats.completed >= 1,
      icon: Target
    },
    {
      title: 'Array Master',
      description: 'Complete all Array & Hashing problems',
      achieved: patternProgress.find(p => p.name === 'Array & Hashing')?.percentage === 100,
      icon: CheckCircle2
    },
    {
      title: 'Speed Demon',
      description: 'Solve 10 problems in a day',
      achieved: false, // This would need daily tracking
      icon: Zap
    },
    {
      title: 'Pattern Expert',
      description: 'Master 3 different patterns',
      achieved: patternProgress.filter(p => p.percentage === 100).length >= 3,
      icon: Brain
    },
    {
      title: 'Halfway Hero',
      description: 'Complete 50% of all problems',
      achieved: stats.percentage >= 50,
      icon: Trophy
    }
  ];

  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold">Progress Dashboard</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Track your DSA learning journey and see how you're progressing towards interview readiness.
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Progress</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.percentage}%</div>
            <p className="text-xs text-muted-foreground">
              {stats.completed} of {stats.total} problems
            </p>
            <Progress value={stats.percentage} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time Invested</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round(stats.totalTimeSpent / 60)}h</div>
            <p className="text-xs text-muted-foreground">
              {stats.totalTimeSpent} minutes total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Patterns Mastered</CardTitle>
            <Brain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {patternProgress.filter(p => p.percentage === 100).length}
            </div>
            <p className="text-xs text-muted-foreground">
              of {patterns.length} patterns
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Interview Ready</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats.percentage >= 80 ? 'Yes' : 'Not Yet'}
            </div>
            <p className="text-xs text-muted-foreground">
              {stats.percentage >= 80 ? 'Ready for interviews!' : 'Keep practicing!'}
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="patterns" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="patterns">Patterns</TabsTrigger>
          <TabsTrigger value="companies">Companies</TabsTrigger>
          <TabsTrigger value="charts">Analytics</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>
        
        <TabsContent value="patterns" className="space-y-4">
          <div className="grid gap-4">
            {patternProgress.map((pattern) => (
              <Card key={pattern.name}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg">{pattern.name}</h3>
                    <Badge variant={pattern.percentage === 100 ? "default" : "secondary"}>
                      {pattern.completed}/{pattern.total}
                    </Badge>
                  </div>
                  
                  <Progress value={pattern.percentage} className="mb-2" />
                  
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{pattern.percentage}% complete</span>
                    <span>{pattern.total - pattern.completed} remaining</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="companies" className="space-y-4">
          <div className="grid gap-4">
            {companyProgress.slice(0, 8).map((company) => (
              <Card key={company.name}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-muted-foreground" />
                      <h3 className="font-semibold">{company.name}</h3>
                    </div>
                    <Badge variant="outline">
                      {company.completed}/{company.total}
                    </Badge>
                  </div>
                  
                  <Progress value={company.percentage} className="mb-2" />
                  
                  <div className="text-sm text-muted-foreground">
                    {company.percentage}% of their frequent problems completed
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="charts" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Problems by Difficulty</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <Doughnut 
                    data={difficultyChartData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'bottom',
                        },
                      },
                    }}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pattern Completion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <Bar 
                    data={patternChartData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                      scales: {
                        y: {
                          beginAtZero: true,
                          max: 100,
                        },
                      },
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="achievements" className="space-y-4">
          <div className="grid gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className={achievement.achieved ? 'border-green-500/50 bg-green-500/5' : ''}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${achievement.achieved ? 'bg-green-500/10' : 'bg-muted'}`}>
                      <achievement.icon className={`h-6 w-6 ${achievement.achieved ? 'text-green-600' : 'text-muted-foreground'}`} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`font-semibold ${achievement.achieved ? 'text-green-600' : ''}`}>
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {achievement.description}
                      </p>
                    </div>
                    
                    {achievement.achieved && (
                      <Badge className="bg-green-500">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Unlocked
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
