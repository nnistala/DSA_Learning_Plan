// Enhanced 90-Day Study Plan for Senior Developers
// Covers 125+ problems with advanced patterns and system design

export interface StudyPhase {
  name: string;
  duration: number;
  description: string;
  dailyGoals: {
    newProblems: number;
    reviewProblems: number;
    theoryMinutes: number;
    systemDesignMinutes?: number;
  };
  focus: string[];
}

export const enhancedStudyPlan = {
  totalDays: 90,
  totalProblems: 125,
  phases: [
    {
      name: 'Foundation Mastery',
      duration: 20, // Days 1-20
      description: 'Master fundamental patterns and build strong foundation',
      dailyGoals: {
        newProblems: 2,
        reviewProblems: 1,
        theoryMinutes: 45,
        systemDesignMinutes: 0
      },
      focus: [
        'Array & Hashing fundamentals',
        'Two Pointers technique',
        'Basic Sliding Window',
        'Stack operations',
        'Simple Binary Search',
        'Linked List manipulation'
      ]
    },
    {
      name: 'Pattern Expansion',
      duration: 25, // Days 21-45
      description: 'Expand to intermediate patterns and start optimization thinking',
      dailyGoals: {
        newProblems: 2,
        reviewProblems: 2,
        theoryMinutes: 30,
        systemDesignMinutes: 15
      },
      focus: [
        'Advanced Trees & Traversals',
        'Graph algorithms (BFS/DFS)',
        'Heap & Priority Queue',
        'Dynamic Programming basics',
        'Greedy algorithms',
        'Interval problems'
      ]
    },
    {
      name: 'Advanced Mastery',
      duration: 25, // Days 46-70
      description: 'Tackle hard problems and advanced system design concepts',
      dailyGoals: {
        newProblems: 1,
        reviewProblems: 3,
        theoryMinutes: 20,
        systemDesignMinutes: 30
      },
      focus: [
        'Advanced Dynamic Programming',
        'Complex Graph algorithms',
        'System Design problems',
        'Advanced data structures',
        'Optimization techniques',
        'Bit manipulation'
      ]
    },
    {
      name: 'Interview Simulation',
      duration: 15, // Days 71-85
      description: 'Mock interviews and problem-solving under pressure',
      dailyGoals: {
        newProblems: 0,
        reviewProblems: 4,
        theoryMinutes: 15,
        systemDesignMinutes: 45
      },
      focus: [
        'Timed problem solving',
        'Code optimization',
        'System design interviews',
        'Behavioral questions prep',
        'Company-specific problems'
      ]
    },
    {
      name: 'Final Polish',
      duration: 5, // Days 86-90
      description: 'Review weak areas and boost confidence',
      dailyGoals: {
        newProblems: 0,
        reviewProblems: 6,
        theoryMinutes: 10,
        systemDesignMinutes: 30
      },
      focus: [
        'Weak pattern review',
        'Speed optimization',
        'Edge case handling',
        'Communication practice'
      ]
    }
  ],
  milestones: [
    { day: 20, achievement: 'Foundation Complete - 40 problems solved' },
    { day: 45, achievement: 'Intermediate Mastery - 90 problems solved' },
    { day: 70, achievement: 'Advanced Level - 125 problems solved' },
    { day: 85, achievement: 'Interview Ready - Mock interviews completed' },
    { day: 90, achievement: 'FAANG Ready - Full mastery achieved' }
  ],
  weeklyReviews: {
    frequency: 'Every Sunday',
    activities: [
      'Review progress and weak areas',
      'Adjust study plan if needed',
      'Practice problem explanations',
      'System design case studies'
    ]
  }
};

// Advanced tracking metrics for senior developers
export const advancedMetrics = {
  codeQualityFactors: [
    'Time Complexity Optimization',
    'Space Complexity Optimization',
    'Code Readability',
    'Edge Case Handling',
    'Scalability Considerations'
  ],
  interviewSkills: [
    'Problem Understanding',
    'Solution Communication',
    'Code Implementation Speed',
    'Optimization Discussion',
    'System Design Thinking'
  ],
  companyFocus: {
    'Google': {
      emphasis: ['Graph algorithms', 'System design', 'Optimization'],
      problems: 35
    },
    'Meta': {
      emphasis: ['Dynamic Programming', 'Trees', 'System design'],
      problems: 32
    },
    'Amazon': {
      emphasis: ['Arrays', 'Strings', 'Leadership principles'],
      problems: 40
    },
    'Apple': {
      emphasis: ['Data structures', 'Algorithms', 'Design patterns'],
      problems: 25
    },
    'Microsoft': {
      emphasis: ['Problem solving', 'System design', 'Collaboration'],
      problems: 28
    }
  }
};
