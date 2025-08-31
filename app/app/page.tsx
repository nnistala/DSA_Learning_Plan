
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Target, 
  BookOpen, 
  TrendingUp, 
  Users, 
  Clock,
  CheckCircle,
  Zap,
  Brain,
  Trophy,
  ArrowRight
} from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: Target,
      title: '125+ Curated Problems',
      description: 'Hand-picked problems from top patterns frequently asked in FAANG interviews'
    },
    {
      icon: Brain,
      title: 'Pattern-Based Learning',
      description: '17 essential patterns covering all major DSA concepts and techniques'
    },
    {
      icon: TrendingUp,
      title: 'Complete Solutions',
      description: 'Detailed JavaScript solutions with explanations and complexity analysis'
    },
    {
      icon: Clock,
      title: 'Structured Learning',
      description: 'Organized by patterns with progressive difficulty and comprehensive coverage'
    },
    {
      icon: Users,
      title: 'Company Tags',
      description: 'Know which companies frequently ask each problem'
    },
    {
      icon: Trophy,
      title: 'Interview Ready',
      description: 'Focus on high-impact problems that maximize your interview success'
    }
  ];

  const patterns = [
    { name: 'Array & Hashing', color: 'bg-red-500', count: 15 },
    { name: 'Two Pointers', color: 'bg-blue-500', count: 13 },
    { name: 'Sliding Window', color: 'bg-green-500', count: 10 },
    { name: 'Binary Tree', color: 'bg-purple-500', count: 12 },
    { name: 'Dynamic Programming', color: 'bg-orange-500', count: 9 },
    { name: 'Graphs', color: 'bg-pink-500', count: 5 }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-muted/20 px-4 py-20 sm:py-32">
        <div className="container max-w-screen-xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Badge variant="secondary" className="px-4 py-2">
              <Code className="w-4 h-4 mr-2" />
              FAANG Interview Prep
            </Badge>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Master <span className="text-primary">125+</span><br />
            DSA Problems
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ace technical interviews at top companies with our curated collection of 
            the most frequently asked DSA problems, organized by patterns for efficient learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/problems">
              <Button size="lg" className="text-lg px-8 py-3">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/problems">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                <BookOpen className="mr-2 h-5 w-5" />
                Browse Problems
              </Button>
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">125+</div>
              <div className="text-sm text-muted-foreground">Curated Problems</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">17</div>
              <div className="text-sm text-muted-foreground">Essential Patterns</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">90</div>
              <div className="text-sm text-muted-foreground">Day Study Plan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Top Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need to <span className="text-primary">Succeed</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform provides structured learning with proven methodologies 
              used by successful FAANG candidates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Patterns Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Learn by <span className="text-primary">Patterns</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master fundamental patterns that appear repeatedly in technical interviews. 
              Each pattern builds upon the previous, creating a solid foundation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {patterns.map((pattern, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${pattern.color}`} />
                    <div className="flex-1">
                      <h3 className="font-semibold">{pattern.name}</h3>
                      <p className="text-sm text-muted-foreground">{pattern.count} problems</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container max-w-screen-xl mx-auto text-center">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
            <CardContent className="p-12">
              <Zap className="mx-auto mb-6 h-16 w-16 text-primary" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Ace Your Interviews?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of developers who have successfully landed their dream jobs 
                at top tech companies using our structured approach.
              </p>
              <Link href="/problems">
                <Button size="lg" className="text-lg px-8 py-3">
                  Start Your Journey Today
                  <CheckCircle className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
