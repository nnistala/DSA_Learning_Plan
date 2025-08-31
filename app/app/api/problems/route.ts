
import { NextResponse } from 'next/server';
import { getAllProblems } from '@/data/problems';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit');
  
  const allProblems = getAllProblems();
  
  // Mock recent problems with additional metadata
  const recentProblems = allProblems.slice(0, limit ? parseInt(limit) : allProblems.length).map(problem => ({
    id: problem.id,
    title: problem.title,
    leetcodeNumber: problem.leetcodeNumber || 0,
    difficulty: problem.difficulty.toUpperCase(),
    pattern: {
      name: problem.pattern,
      color: getPatternColor(problem.pattern)
    },
    status: Math.random() > 0.5 ? 'COMPLETED' : 'IN_PROGRESS',
    lastAttempt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString()
  }));

  return NextResponse.json(recentProblems);
}

function getPatternColor(pattern: string): string {
  const colors: Record<string, string> = {
    'Array & Hashing': 'bg-red-500',
    'Two Pointers': 'bg-blue-500',
    'Sliding Window': 'bg-green-500',
    'Stack': 'bg-purple-500',
    'Binary Tree': 'bg-yellow-500',
    'Dynamic Programming': 'bg-pink-500',
    'Linked List': 'bg-indigo-500',
    'Graphs': 'bg-orange-500',
    'Heap / Priority Queue': 'bg-teal-500',
    'Backtracking': 'bg-cyan-500',
    'Intervals': 'bg-lime-500',
    'Math & Bit Manipulation': 'bg-amber-500'
  };
  
  return colors[pattern] || 'bg-gray-500';
}
