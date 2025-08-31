
import { NextResponse } from 'next/server';
import { getAllProblems, patterns } from '@/data/problems';

export async function GET() {
  const allProblems = getAllProblems();
  
  // Mock user progress data
  const mockCompletedProblems = Math.floor(allProblems.length * 0.3); // 30% completed
  const mockMasteredProblems = Math.floor(allProblems.length * 0.15); // 15% mastered
  
  const progressByPattern: Record<string, {total: number; completed: number; mastered: number}> = {};
  
  patterns.forEach(pattern => {
    const patternProblems = pattern.problems.length;
    progressByPattern[pattern.name] = {
      total: patternProblems,
      completed: Math.floor(patternProblems * 0.4),
      mastered: Math.floor(patternProblems * 0.2)
    };
  });

  const stats = {
    totalProblems: allProblems.length,
    completedProblems: mockCompletedProblems,
    masteredProblems: mockMasteredProblems,
    currentStreak: 7,
    totalTimeSpent: 2340, // minutes
    averageAttempts: 2.3,
    progressByPattern
  };

  return NextResponse.json(stats);
}
