
'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Code, User, LogOut, Home, BookOpen, BarChart3 } from 'lucide-react';

export function Header() {
  const { data: session } = useSession() || {};

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">DSA Interview Prep</span>
          </Link>
          
          {session && (
            <nav className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  <Home className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <Link href="/problems">
                <Button variant="ghost" size="sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Problems
                </Button>
              </Link>
              <Link href="/progress">
                <Button variant="ghost" size="sm">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Progress
                </Button>
              </Link>
            </nav>
          )}
        </div>

        <div className="flex items-center space-x-4">
          {session ? (
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-sm">
                <User className="h-4 w-4" />
                <span>Hi, {(session.user as any)?.firstName || 'User'}</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => signOut({ callbackUrl: '/' })}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Link href="/auth/signin">
                <Button variant="ghost" size="sm">Sign In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button size="sm">Get Started</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
