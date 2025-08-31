
"use client";

import { useState } from 'react';
import { getAllProblems, patterns, companyFrequency } from '@/data/problems';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  Download, 
  Book, 
  Code2, 
  Clock, 
  MemoryStick,
  Building2,
  Target,
  Lightbulb
} from 'lucide-react';

export default function HandbookPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  
  const allProblems = getAllProblems();

  const handleGeneratePDF = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch('/api/handbook/pdf');
      const blob = await response.blob();
      
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'dsa-handbook.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadJSON = () => {
    const dataStr = JSON.stringify({ patterns, problems: allProblems }, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'dsa-problems-dataset.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const studyGuide = {
    introduction: `This comprehensive DSA handbook contains the top 75 problems most frequently asked by FAANG and other leading tech companies. Each problem is carefully selected based on:

• Interview frequency at top companies
• Pattern importance for problem-solving skills
• Educational value for building DSA intuition
• Real-world applicability and variations

The problems are organized by patterns to help you develop systematic problem-solving approaches that can be applied to similar problems during interviews.`,
    
    howToUse: `1. **Start with Easy Problems**: Build confidence with fundamental patterns
2. **Master One Pattern at a Time**: Don't jump between patterns randomly
3. **Understand, Don't Memorize**: Focus on the underlying approach
4. **Practice Variations**: Each pattern has multiple problem types
5. **Time Yourself**: Practice under interview-like conditions
6. **Explain Out Loud**: Practice explaining your approach clearly`,

    interviewTips: [
      'Always clarify the problem and constraints before coding',
      'Start with a brute force approach, then optimize',
      'Discuss time and space complexity trade-offs',
      'Test your solution with edge cases',
      'Practice coding on a whiteboard or paper',
      'Prepare follow-up questions and variations'
    ]
  };

  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold">DSA Handbook</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Comprehensive guide with the top 75 DSA problems, solutions, and interview preparation strategies.
        </p>
      </div>

      {/* Download Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Download Options
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={handleGeneratePDF}
              disabled={isGenerating}
              className="flex-1"
            >
              <FileText className="h-4 w-4 mr-2" />
              {isGenerating ? 'Generating PDF...' : 'Download PDF Handbook'}
            </Button>
            
            <Button 
              variant="outline"
              onClick={handleDownloadJSON}
              className="flex-1"
            >
              <Code2 className="h-4 w-4 mr-2" />
              Download JSON Dataset
            </Button>
          </div>
          
          <div className="mt-4 text-sm text-muted-foreground">
            <p>📚 <strong>PDF Handbook</strong>: Complete guide with all problems, solutions, and study plan</p>
            <p>💾 <strong>JSON Dataset</strong>: Structured data for custom tools and analysis</p>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="preview">Handbook Preview</TabsTrigger>
          <TabsTrigger value="contents">Table of Contents</TabsTrigger>
          <TabsTrigger value="statistics">Statistics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="preview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="whitespace-pre-line">{studyGuide.introduction}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                How to Use This Handbook
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="whitespace-pre-line">{studyGuide.howToUse}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Interview Success Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {studyGuide.interviewTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="contents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Table of Contents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">1. Introduction & Study Guide</h4>
                  <h4 className="font-semibold">2. 60-Day Study Schedule</h4>
                  <h4 className="font-semibold">3. Pattern-Based Problem Collection</h4>
                </div>
                
                {patterns.map((pattern, index) => (
                  <div key={pattern.id} className="border-l-4 border-primary/20 pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">
                        {index + 4}. {pattern.name}
                      </h4>
                      <Badge variant="secondary">
                        {pattern.problems.length} problems
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {pattern.description}
                    </p>
                    <div className="space-y-1">
                      {pattern.problems.map((problem, pIndex) => (
                        <div key={problem.id} className="text-sm flex items-center justify-between">
                          <span>
                            {index + 4}.{pIndex + 1} {problem.title}
                          </span>
                          <div className="flex items-center gap-2">
                            <Badge className={`text-xs ${
                              problem.difficulty === 'Easy' ? 'bg-green-500/10 text-green-600' :
                              problem.difficulty === 'Medium' ? 'bg-yellow-500/10 text-yellow-600' :
                              'bg-red-500/10 text-red-600'
                            }`}>
                              {problem.difficulty}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {problem.timeComplexity}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                
                <div className="space-y-2 mt-6">
                  <h4 className="font-semibold">{patterns.length + 4}. Company-Specific Problem Lists</h4>
                  <h4 className="font-semibold">{patterns.length + 5}. Quick Reference & Cheat Sheets</h4>
                  <h4 className="font-semibold">{patterns.length + 6}. Additional Resources & Next Steps</h4>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="statistics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Problem Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Easy</span>
                    <Badge className="bg-green-500/10 text-green-600">
                      {allProblems.filter(p => p.difficulty === 'Easy').length}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Medium</span>
                    <Badge className="bg-yellow-500/10 text-yellow-600">
                      {allProblems.filter(p => p.difficulty === 'Medium').length}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Hard</span>
                    <Badge className="bg-red-500/10 text-red-600">
                      {allProblems.filter(p => p.difficulty === 'Hard').length}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Pattern Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {patterns.slice(0, 5).map(pattern => (
                    <div key={pattern.id} className="flex justify-between items-center">
                      <span className="text-sm">{pattern.name}</span>
                      <Badge variant="outline">
                        {pattern.problems.length}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Company Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(companyFrequency).slice(0, 5).map(([company, data]) => (
                    <div key={company} className="flex justify-between items-center">
                      <span className="text-sm">{company}</span>
                      <Badge variant="outline">
                        {allProblems.filter(p => p.companies.includes(company)).length}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
