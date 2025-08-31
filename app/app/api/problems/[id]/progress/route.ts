
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth-options';
import { prisma } from '@/lib/db';

export const dynamic = "force-dynamic";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const userId = (session.user as any)?.id;
    if (!userId) {
      return NextResponse.json(
        { message: 'User ID not found' },
        { status: 400 }
      );
    }

    const { status, timeSpent, notes } = await request.json();
    const problemId = params.id;

    const progress = await prisma.problemProgress.upsert({
      where: {
        userId_problemId: {
          userId,
          problemId: problemId
        }
      },
      update: {
        status,
        timeSpent: timeSpent || 0,
        notes,
        attempts: { increment: 1 },
        lastAttempt: new Date()
      },
      create: {
        userId,
        problemId: problemId,
        status,
        timeSpent: timeSpent || 0,
        notes,
        attempts: 1,
        lastAttempt: new Date()
      }
    });

    return NextResponse.json(progress);
  } catch (error) {
    console.error('Error updating progress:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
