'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
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

interface Problem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  pattern: string;
  companies: string[];
  leetcodeNumber?: number;
  timeComplexity: string;
  spaceComplexity: string;
  description: string;
  approach: string;
  solution: string;
  keyPoints: string[];
  relatedProblems: string[];
  frequency: 'Very High' | 'High' | 'Medium';
}

interface Props {
  problem: Problem;
}

export default function ProblemPage({ problem }: Props) {
  const router = useRouter();
  const [isCompleted, setIsCompleted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  const handleMarkComplete = () => {
    setIsCompleted(!isCompleted);
    // Here you would typically save to a database or local storage
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Problems
          </Button>
          
          <Button
            onClick={handleMarkComplete}
            variant={isCompleted ? "default" : "outline"}
            className="flex items-center gap-2"
          >
            {isCompleted ? (
              <CheckCircle2 className="h-4 w-4" />
            ) : (
              <Circle className="h-4 w-4" />
            )}
            {isCompleted ? 'Completed' : 'Mark as Complete'}
          </Button>
        </div>

        {/* Problem Title and Metadata */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl font-bold">{problem.title}</h1>
            {problem.leetcodeNumber && (
              <Badge variant="outline" className="text-xs">
                #{problem.leetcodeNumber}
              </Badge>
            )}
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Badge className={difficultyColors[problem.difficulty]}>
              {problem.difficulty}
            </Badge>
            <Badge variant="secondary">{problem.pattern}</Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {problem.timeComplexity}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <MemoryStick className="h-3 w-3" />
              {problem.spaceComplexity}
            </Badge>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {problem.companies.map((company) => (
              <Badge key={company} variant="outline" className="flex items-center gap-1">
                <Building2 className="h-3 w-3" />
                {company}
              </Badge>
            ))}
          </div>

          {problem.leetcodeNumber && (
            <Link
              href={`https://leetcode.com/problems/${problem.title.toLowerCase().replace(/\s+/g, '-')}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-4 w-4" />
              View on LeetCode
            </Link>
          )}
        </div>

        {/* Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Description
            </TabsTrigger>
            <TabsTrigger value="approach" className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              Approach
            </TabsTrigger>
            <TabsTrigger value="solution" className="flex items-center gap-2">
              <Code2 className="h-4 w-4" />
              Solution
            </TabsTrigger>
            <TabsTrigger value="related">Related</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Problem Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="approach" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Solution Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {problem.approach}
                </p>
                
                <Separator className="my-6" />
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Points</h3>
                  <ul className="space-y-2">
                    {problem.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="solution" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>JavaScript Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <CodeBlock code={problem.solution} language="javascript" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="related" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Related Problems</CardTitle>
              </CardHeader>
              <CardContent>
                {problem.relatedProblems.length > 0 ? (
                  <div className="grid gap-3">
                    {problem.relatedProblems.map((relatedId) => (
                      <div key={relatedId} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                        <Link
                          href={`/problems/${relatedId}`}
                          className="text-sm font-medium hover:text-primary"
                        >
                          {relatedId.split('-').map(word => 
                            word.charAt(0).toUpperCase() + word.slice(1)
                          ).join(' ')}
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No related problems available.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
