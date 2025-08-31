
'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getProblemById, patterns } from '@/data/problems';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { CodeBlock } from '@/components/code-block';
import { 
  ArrowLeft, 
  Clock, 
  MemoryStick, 
  Building2, 
  BookOpen, 
  Lightbulb,
  Code2,
  CheckCircle2,
  Circle,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';

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

export default function ProblemDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [isCompleted, setIsCompleted] = useState(false);
  
  const problemId = params?.id as string;
  const problem = getProblemById(problemId);

  if (!problem) {
    return (
      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Problem Not Found</h2>
            <p className="text-muted-foreground mb-4">The problem you're looking for doesn't exist.</p>
            <Link href="/problems">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Problems
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-4">
          <Link href="/problems">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCompleted(!isCompleted)}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {isCompleted ? (
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              ) : (
                <Circle className="h-6 w-6" />
              )}
            </button>
            
            <h1 className="text-3xl font-bold">{problem.title}</h1>
            
            {problem.leetcodeNumber && (
              <Badge variant="outline">
                LC {problem.leetcodeNumber}
              </Badge>
            )}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 mb-4">
          <Badge className={difficultyColors[problem.difficulty]}>
            {problem.difficulty}
          </Badge>
          <Badge variant="secondary">
            {problem.pattern}
          </Badge>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${frequencyColors[problem.frequency]}`} />
            <span className="text-sm font-medium">{problem.frequency} Frequency</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Time: {problem.timeComplexity}</span>
          </div>
          <div className="flex items-center gap-2">
            <MemoryStick className="h-4 w-4" />
            <span>Space: {problem.spaceComplexity}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="problem" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="problem">Problem</TabsTrigger>
              <TabsTrigger value="solution">Solution</TabsTrigger>
              <TabsTrigger value="approach">Approach</TabsTrigger>
            </TabsList>
            
            <TabsContent value="problem" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Problem Description
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" />
                    Key Points
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {problem.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="solution" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="h-5 w-5" />
                    JavaScript Solution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CodeBlock code={problem.solution} language="javascript" />
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Clock className="h-4 w-4" />
                      Time Complexity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <span className="text-lg font-mono text-primary">{problem.timeComplexity}</span>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <MemoryStick className="h-4 w-4" />
                      Space Complexity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <span className="text-lg font-mono text-primary">{problem.spaceComplexity}</span>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="approach" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" />
                    Solution Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.approach}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Companies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Asked By
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {problem.companies.map(company => (
                  <div key={company} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">{company}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Related Problems */}
          {problem.relatedProblems.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Related Problems</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {problem.relatedProblems.map(relatedId => {
                    const relatedProblem = getProblemById(relatedId);
                    return relatedProblem ? (
                      <Link 
                        key={relatedId} 
                        href={`/problems/${relatedId}`}
                        className="block p-2 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{relatedProblem.title}</span>
                          <Badge className={difficultyColors[relatedProblem.difficulty]}>
                            {relatedProblem.difficulty}
                          </Badge>
                        </div>
                      </Link>
                    ) : null;
                  })}
                </div>
              </CardContent>
            </Card>
          )}
          
          {/* External Links */}
          <Card>
            <CardHeader>
              <CardTitle>Practice Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {problem.leetcodeNumber && (
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a 
                    href={`https://leetcode.com/problems/${problem.title.toLowerCase().replace(/\s+/g, '-')}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    LeetCode
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}


