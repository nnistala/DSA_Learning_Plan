
'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { 
  Search, 
  Filter,
  ExternalLink,
  Clock,
  CheckCircle,
  Circle,
  Play,
  Trophy,
  Building2,
  Grid3X3,
  Zap
} from 'lucide-react';
import Link from 'next/link';

interface Problem {
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
  companies: { name: string }[];
  frequency: 'LOW' | 'MEDIUM' | 'HIGH' | 'VERY_HIGH';
  isBlind75: boolean;
  isNeetCode: boolean;
  progress?: {
    status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED' | 'MASTERED';
    attempts: number;
    timeSpent: number;
  };
}

interface Pattern {
  id: string;
  name: string;
  color: string;
  icon: string;
  _count: { problems: number };
}

export function ProblemsClient() {
  const { data: session } = useSession() || {};
  const [problems, setProblems] = useState<Problem[]>([]);
  const [patterns, setPatterns] = useState<Pattern[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPattern, setSelectedPattern] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchProblems();
  }, [selectedPattern, selectedDifficulty, selectedStatus, searchTerm]);

  const fetchData = async () => {
    try {
      const [problemsRes, patternsRes] = await Promise.all([
        fetch('/api/problems'),
        fetch('/api/patterns')
      ]);

      if (problemsRes.ok) {
        const problemsData = await problemsRes.json();
        setProblems(problemsData);
      }

      if (patternsRes.ok) {
        const patternsData = await patternsRes.json();
        setPatterns(patternsData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProblems = async () => {
    try {
      const params = new URLSearchParams();
      if (selectedPattern !== 'all') params.append('pattern', selectedPattern);
      if (selectedDifficulty !== 'all') params.append('difficulty', selectedDifficulty);
      if (selectedStatus !== 'all') params.append('status', selectedStatus);
      if (searchTerm) params.append('search', searchTerm);

      const response = await fetch(`/api/problems?${params}`);
      if (response.ok) {
        const data = await response.json();
        setProblems(data);
      }
    } catch (error) {
      console.error('Error fetching problems:', error);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'EASY': return 'text-green-600 bg-green-100 dark:bg-green-900/20';
      case 'MEDIUM': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20';
      case 'HARD': return 'text-red-600 bg-red-100 dark:bg-red-900/20';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const getFrequencyIcon = (frequency: string) => {
    switch (frequency) {
      case 'VERY_HIGH': return <Zap className="h-3 w-3 text-red-500" />;
      case 'HIGH': return <Zap className="h-3 w-3 text-orange-500" />;
      case 'MEDIUM': return <Zap className="h-3 w-3 text-yellow-500" />;
      default: return <Zap className="h-3 w-3 text-gray-400" />;
    }
  };

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'COMPLETED': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'MASTERED': return <Trophy className="h-4 w-4 text-blue-600" />;
      case 'IN_PROGRESS': return <Play className="h-4 w-4 text-yellow-600" />;
      default: return <Circle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getProgress = () => {
    if (!session) return { completed: 0, total: problems.length, percentage: 0 };
    
    const completed = problems.filter(p => 
      p.progress?.status === 'COMPLETED' || p.progress?.status === 'MASTERED'
    ).length;
    
    return {
      completed,
      total: problems.length,
      percentage: problems.length > 0 ? Math.round((completed / problems.length) * 100) : 0
    };
  };

  const progress = getProgress();

  if (loading) {
    return (
      <div className="container max-w-screen-2xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <Card className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-40 bg-muted rounded"></div>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-3 space-y-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="h-16 bg-muted rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-screen-2xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-bold">Problem Set</h1>
          <p className="text-muted-foreground mt-2">
            Master the top 75 DSA problems frequently asked by FAANG and top tech companies
          </p>
        </div>

        {session && (
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Your Progress</h3>
                <span className="text-sm text-muted-foreground">
                  {progress.completed}/{progress.total} problems solved
                </span>
              </div>
              <Progress value={progress.percentage} className="mb-2" />
              <p className="text-sm text-muted-foreground">
                {progress.percentage}% complete
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Search */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Search & Filter
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Search Problems</label>
                <Input
                  placeholder="Search by title..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Pattern</label>
                <Select value={selectedPattern} onValueChange={setSelectedPattern}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Patterns</SelectItem>
                    {patterns.map((pattern) => (
                      <SelectItem key={pattern.id} value={pattern.id}>
                        {pattern.name} ({pattern._count.problems})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Difficulty</label>
                <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Difficulties</SelectItem>
                    <SelectItem value="EASY">Easy</SelectItem>
                    <SelectItem value="MEDIUM">Medium</SelectItem>
                    <SelectItem value="HARD">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {session && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Status</label>
                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="NOT_STARTED">Not Started</SelectItem>
                      <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
                      <SelectItem value="COMPLETED">Completed</SelectItem>
                      <SelectItem value="MASTERED">Mastered</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Patterns Overview */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Grid3X3 className="h-5 w-5" />
                Patterns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {patterns.slice(0, 6).map((pattern) => (
                  <div
                    key={pattern.id}
                    className="flex items-center justify-between text-sm cursor-pointer hover:text-primary transition-colors"
                    onClick={() => setSelectedPattern(pattern.id)}
                  >
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: pattern.color }}
                      />
                      <span>{pattern.name}</span>
                    </div>
                    <span className="text-muted-foreground">
                      {pattern._count.problems}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Problem List */}
        <div className="lg:col-span-3">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {problems.length} problems
              </p>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span className="text-sm">Filtered results</span>
              </div>
            </div>

            {problems.map((problem) => (
              <Card key={problem.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3">
                        {session && getStatusIcon(problem.progress?.status)}
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground font-mono">
                            {problem.leetcodeNumber}.
                          </span>
                          <h3 className="font-semibold text-lg truncate">
                            {problem.title}
                          </h3>
                        </div>
                        {problem.isBlind75 && (
                          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                            Blind 75
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <Badge className={getDifficultyColor(problem.difficulty)}>
                          {problem.difficulty}
                        </Badge>
                        
                        <Badge 
                          variant="outline" 
                          style={{ 
                            borderColor: problem.pattern.color,
                            color: problem.pattern.color 
                          }}
                        >
                          {problem.pattern.name}
                        </Badge>

                        <div className="flex items-center gap-1">
                          {getFrequencyIcon(problem.frequency)}
                          <span className="text-xs text-muted-foreground">
                            {problem.frequency.replace('_', ' ')}
                          </span>
                        </div>

                        {problem.companies.length > 0 && (
                          <div className="flex items-center gap-1">
                            <Building2 className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">
                              {problem.companies.slice(0, 3).map(c => c.name).join(', ')}
                              {problem.companies.length > 3 && ` +${problem.companies.length - 3}`}
                            </span>
                          </div>
                        )}
                      </div>

                      {session && problem.progress && (
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{problem.progress.timeSpent || 0}m</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span>{problem.progress.attempts || 0} attempts</span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2 ml-4">
                      <a
                        href={`https://leetcode.com/problems/${problem.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex"
                      >
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          LeetCode
                        </Button>
                      </a>
                      <Link href={`/problems/${problem.id}`}>
                        <Button size="sm">
                          {problem.progress?.status ? 'Continue' : 'Start'}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {problems.length === 0 && (
              <Card className="border-0 shadow-lg">
                <CardContent className="p-12 text-center">
                  <Search className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No problems found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters or search terms
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedPattern('all');
                      setSelectedDifficulty('all');
                      setSelectedStatus('all');
                    }}
                  >
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
