
"use client";

import { useState } from 'react';
import { studySchedule } from '@/data/problems';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, 
  Clock, 
  Target, 
  TrendingUp, 
  CheckCircle2,
  Book,
  Zap,
  Trophy,
  BarChart3
} from 'lucide-react';

export default function SchedulePage() {
  const [currentDay, setCurrentDay] = useState(1);
  const [completedDays, setCompletedDays] = useState<Set<number>>(new Set());

  const phases = [
    {
      name: 'Foundation',
      days: '1-15',
      duration: studySchedule.phaseDuration.foundation,
      goals: studySchedule.dailyGoals.foundation,
      description: 'Build strong fundamentals with basic patterns',
      patterns: ['Array & Hashing', 'Two Pointers', 'Sliding Window'],
      color: 'bg-green-500'
    },
    {
      name: 'Intermediate',
      days: '16-40',
      duration: studySchedule.phaseDuration.intermediate,
      goals: studySchedule.dailyGoals.intermediate,
      description: 'Tackle more complex problems and advanced patterns',
      patterns: ['Binary Tree', 'Graphs', 'Heap/Priority Queue'],
      color: 'bg-blue-500'
    },
    {
      name: 'Advanced',
      days: '41-55',
      duration: studySchedule.phaseDuration.advanced,
      goals: studySchedule.dailyGoals.advanced,
      description: 'Master challenging concepts and optimization techniques',
      patterns: ['Dynamic Programming', 'Backtracking', 'Advanced Trees'],
      color: 'bg-purple-500'
    },
    {
      name: 'Revision',
      days: '56-60',
      duration: studySchedule.phaseDuration.revision,
      goals: studySchedule.dailyGoals.revision,
      description: 'Review and reinforce all concepts',
      patterns: ['Mixed Review', 'Mock Interviews', 'Weak Areas'],
      color: 'bg-orange-500'
    }
  ];

  const progressPercentage = Math.round((completedDays.size / studySchedule.totalDays) * 100);

  const toggleDayComplete = (day: number) => {
    setCompletedDays(prev => {
      const newSet = new Set(prev);
      if (newSet.has(day)) {
        newSet.delete(day);
      } else {
        newSet.add(day);
      }
      return newSet;
    });
  };

  const getWeeklySchedule = () => {
    const weeks = [];
    for (let week = 1; week <= 9; week++) {
      const startDay = (week - 1) * 7 + 1;
      const endDay = Math.min(week * 7, 60);
      const days = [];
      
      for (let day = startDay; day <= endDay; day++) {
        days.push(day);
      }
      
      weeks.push({ week, days, startDay, endDay });
    }
    return weeks;
  };

  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold">Structured Study Plan</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          A structured learning path with 78+ problems across 17 patterns, designed to help you master DSA for FAANG technical interviews.
        </p>
      </div>

      {/* Progress Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Overall Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Days Completed</span>
              <span className="text-sm font-medium">{completedDays.size}/{studySchedule.totalDays}</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">{completedDays.size}</div>
              <div className="text-sm text-muted-foreground">Days Done</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-600">{60 - completedDays.size}</div>
              <div className="text-sm text-muted-foreground">Remaining</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{progressPercentage}%</div>
              <div className="text-sm text-muted-foreground">Complete</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">Day {currentDay}</div>
              <div className="text-sm text-muted-foreground">Current</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="phases" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="phases">Study Phases</TabsTrigger>
          <TabsTrigger value="weekly">Weekly View</TabsTrigger>
          <TabsTrigger value="daily">Daily Goals</TabsTrigger>
        </TabsList>
        
        <TabsContent value="phases" className="space-y-6">
          {phases.map((phase, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${phase.color}`} />
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Phase {index + 1}: {phase.name}</span>
                  <Badge variant="secondary">Days {phase.days}</Badge>
                </CardTitle>
                <p className="text-muted-foreground">{phase.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Daily Goals</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>New Problems:</span>
                        <Badge variant="outline">{phase.goals.newProblems}/day</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Review Problems:</span>
                        <Badge variant="outline">{phase.goals.reviewProblems}/day</Badge>
                      </div>
                      {phase.goals.theory > 0 && (
                        <div className="flex justify-between">
                          <span>Theory Study:</span>
                          <Badge variant="outline">{phase.goals.theory} min/day</Badge>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Focus Patterns</h4>
                    <div className="flex flex-wrap gap-2">
                      {phase.patterns.map(pattern => (
                        <Badge key={pattern} variant="secondary" className="text-xs">
                          {pattern}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="weekly" className="space-y-6">
          {getWeeklySchedule().map(({ week, days, startDay, endDay }) => (
            <Card key={week}>
              <CardHeader>
                <CardTitle>Week {week} (Days {startDay}-{endDay})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2">
                  {days.map(day => (
                    <div
                      key={day}
                      className={`aspect-square flex items-center justify-center rounded-lg border cursor-pointer transition-colors ${
                        completedDays.has(day) 
                          ? 'bg-green-500 text-white border-green-500' 
                          : day === currentDay
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'hover:bg-muted'
                      }`}
                      onClick={() => toggleDayComplete(day)}
                    >
                      <span className="text-sm font-medium">{day}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="daily" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Daily Study Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Recommended Daily Routine</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <Book className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Theory Review (15-30 min)</div>
                        <div className="text-sm text-muted-foreground">Review pattern concepts and techniques</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <Zap className="h-5 w-5 text-green-600" />
                      <div>
                        <div className="font-medium">New Problems (45-60 min)</div>
                        <div className="text-sm text-muted-foreground">Solve assigned new problems for the day</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <TrendingUp className="h-5 w-5 text-purple-600" />
                      <div>
                        <div className="font-medium">Review & Practice (30-45 min)</div>
                        <div className="text-sm text-muted-foreground">Review previously solved problems</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <Trophy className="h-5 w-5 text-orange-600" />
                      <div>
                        <div className="font-medium">Mock Interview (Optional)</div>
                        <div className="text-sm text-muted-foreground">Practice explaining solutions aloud</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Weekly Milestones</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between p-2 border rounded">
                      <span>Week 1-2:</span>
                      <span>Master Array & Hashing, Two Pointers</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <span>Week 3-4:</span>
                      <span>Sliding Window, Stack/Queue basics</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <span>Week 5-6:</span>
                      <span>Binary Trees, BST operations</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <span>Week 7-8:</span>
                      <span>Graphs, DFS/BFS, Union Find</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <span>Week 9:</span>
                      <span>Review and mock interviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
