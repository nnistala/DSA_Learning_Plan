import { patterns, getProblemById } from '@/data/problems';
import ProblemPage from './problem-client';

// Generate static params for all problems
export async function generateStaticParams() {
  const allProblems = patterns.flatMap(pattern => pattern.problems);
  return allProblems.map((problem) => ({
    id: problem.id,
  }));
}

interface Props {
  params: {
    id: string;
  };
}

export default function Page({ params }: Props) {
  const problem = getProblemById(params.id);
  
  if (!problem) {
    return <div>Problem not found</div>;
  }

  return <ProblemPage problem={problem} />;
}