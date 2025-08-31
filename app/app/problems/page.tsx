
"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { patterns, getAllProblems, type Problem } from '@/data/problems';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Clock, 
  Building2, 
  Target,
  TrendingUp,
  CheckCircle2,
  Circle
} from 'lucide-react';

const difficultyColors = {
  'Easy': 'bg-green-500/10 text-green-600 border-green-500/20',
  'Medium': 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
  'Hard': 'bg-red-500/10 text-red-600 border-red-500/20'
};

const frequencyColors = {
  'Very High': 'bg-red-500',
  'High': 'bg-orange-500',
  'Medium': 'bg-blue-500'
};

export default function ProblemsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedPattern, setSelectedPattern] = useState('all');
  const [selectedCompany, setSelectedCompany] = useState('all');
  const [completedProblems, setCompletedProblems] = useState<Set<string>>(new Set());

  const allProblems = getAllProblems();
  
  const filteredProblems = useMemo(() => {
    return allProblems.filter(problem => {
      const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           problem.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDifficulty = selectedDifficulty === 'all' || problem.difficulty === selectedDifficulty;
      const matchesPattern = selectedPattern === 'all' || problem.pattern === selectedPattern;
      const matchesCompany = selectedCompany === 'all' || problem.companies.includes(selectedCompany);
      
      return matchesSearch && matchesDifficulty && matchesPattern && matchesCompany;
    });
  }, [searchTerm, selectedDifficulty, selectedPattern, selectedCompany, allProblems]);

  const progressStats = useMemo(() => {
    const total = allProblems.length;
    const completed = completedProblems.size;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    return { total, completed, percentage };
  }, [allProblems, completedProblems]);

  const toggleComplete = (problemId: string) => {
    setCompletedProblems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(problemId)) {
        newSet.delete(problemId);
      } else {
        newSet.add(problemId);
      }
      return newSet;
    });
  };

  const companies = [...new Set(allProblems.flatMap(p => p.companies))].sort();

  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold">Problem Bank</h1>
        </div>
        <p className="text-lg text-muted-foreground mb-6">
          Master the top 75 DSA problems asked by leading tech companies. Each problem includes detailed solutions, complexity analysis, and company insights.
        </p>
        
        {/* Progress Overview */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Your Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1">
                <Progress value={progressStats.percentage} className="h-3" />
              </div>
              <span className="text-sm font-medium">
                {progressStats.completed}/{progressStats.total} ({progressStats.percentage}%)
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">{progressStats.completed}</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-600">{progressStats.total - progressStats.completed}</div>
                <div className="text-sm text-muted-foreground">Remaining</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">{patterns.length}</div>
                <div className="text-sm text-muted-foreground">Patterns</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">60</div>
                <div className="text-sm text-muted-foreground">Day Plan</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search problems..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Difficulty</label>
              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger>
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Difficulties</SelectItem>
                  <SelectItem value="Easy">Easy</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Pattern</label>
              <Select value={selectedPattern} onValueChange={setSelectedPattern}>
                <SelectTrigger>
                  <SelectValue placeholder="Select pattern" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Patterns</SelectItem>
                  {patterns.map(pattern => (
                    <SelectItem key={pattern.id} value={pattern.name}>
                      {pattern.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Company</label>
              <Select value={selectedCompany} onValueChange={setSelectedCompany}>
                <SelectTrigger>
                  <SelectValue placeholder="Select company" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Companies</SelectItem>
                  {companies.map(company => (
                    <SelectItem key={company} value={company}>
                      {company}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-end">
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDifficulty('all');
                  setSelectedPattern('all');
                  setSelectedCompany('all');
                }}
                className="w-full"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Problems List */}
      <Tabs defaultValue="list" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="list">Problem List</TabsTrigger>
          <TabsTrigger value="patterns">By Patterns</TabsTrigger>
        </TabsList>
        
        <TabsContent value="list" className="space-y-4">
          <div className="text-sm text-muted-foreground mb-4">
            Showing {filteredProblems.length} of {allProblems.length} problems
          </div>
          
          {filteredProblems.map((problem) => (
            <Card key={problem.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <button
                        onClick={() => toggleComplete(problem.id)}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {completedProblems.has(problem.id) ? (
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                        ) : (
                          <Circle className="h-5 w-5" />
                        )}
                      </button>
                      
                      <Link href={`/problems/${problem.id}`} className="hover:text-primary transition-colors">
                        <h3 className="text-lg font-semibold">{problem.title}</h3>
                      </Link>
                      
                      {problem.leetcodeNumber && (
                        <Badge variant="outline" className="text-xs">
                          LC {problem.leetcodeNumber}
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {problem.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge className={difficultyColors[problem.difficulty]}>
                        {problem.difficulty}
                      </Badge>
                      <Badge variant="secondary">
                        {problem.pattern}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <div className={`w-2 h-2 rounded-full ${frequencyColors[problem.frequency]}`} />
                        <span className="text-xs text-muted-foreground">{problem.frequency}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {problem.companies.slice(0, 4).map(company => (
                        <Badge key={company} variant="outline" className="text-xs">
                          <Building2 className="h-3 w-3 mr-1" />
                          {company}
                        </Badge>
                      ))}
                      {problem.companies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{problem.companies.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-right text-sm text-muted-foreground">
                    <div>Time: {problem.timeComplexity}</div>
                    <div>Space: {problem.spaceComplexity}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="patterns" className="space-y-6">
          {patterns.map((pattern) => (
            <Card key={pattern.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{pattern.name}</span>
                  <Badge variant="secondary">
                    {pattern.problems.length} problems
                  </Badge>
                </CardTitle>
                <p className="text-muted-foreground">{pattern.description}</p>
                <div className="flex flex-wrap gap-2">
                  {pattern.keyTechniques.map(technique => (
                    <Badge key={technique} variant="outline" className="text-xs">
                      {technique}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {pattern.problems.map((problem) => (
                    <div key={problem.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => toggleComplete(problem.id)}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {completedProblems.has(problem.id) ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          ) : (
                            <Circle className="h-4 w-4" />
                          )}
                        </button>
                        
                        <Link href={`/problems/${problem.id}`} className="hover:text-primary transition-colors">
                          <span className="font-medium">{problem.title}</span>
                        </Link>
                        
                        <Badge className={difficultyColors[problem.difficulty]}>
                          {problem.difficulty}
                        </Badge>
                        
                        <div className="flex items-center gap-1">
                          <div className={`w-2 h-2 rounded-full ${frequencyColors[problem.frequency]}`} />
                          <span className="text-xs text-muted-foreground">{problem.frequency}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{problem.timeComplexity}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
