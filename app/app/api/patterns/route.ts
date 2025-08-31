
import { NextResponse } from 'next/server';
import { patterns } from '@/data/problems';

export async function GET() {
  return NextResponse.json(patterns);
}
