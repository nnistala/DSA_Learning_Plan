import { patterns } from '@/data/problems';

export async function generateStaticParams() {
  const allProblems = patterns.flatMap(pattern => pattern.problems);
  return allProblems.map((problem) => ({
    id: problem.id,
  }));
}
