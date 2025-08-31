
import { PrismaClient } from '@prisma/client';
import { enhancedProblems, additionalPatterns } from './enhanced-problems';

const prisma = new PrismaClient();

const patterns = [
  {
    name: 'Array & Hashing',
    description: 'Fundamental array operations, hash tables, and string manipulation',
    color: '#FF6B6B',
    icon: 'Grid3X3',
    order: 1
  },
  {
    name: 'Two Pointers',
    description: 'Efficient array and string traversal using two pointers',
    color: '#4ECDC4',
    icon: 'ArrowLeftRight',
    order: 2
  },
  {
    name: 'Sliding Window',
    description: 'Optimize array/string problems with sliding window technique',
    color: '#45B7D1',
    icon: 'Move',
    order: 3
  },
  {
    name: 'Stack',
    description: 'LIFO data structure for parsing and expression problems',
    color: '#96CEB4',
    icon: 'Layers',
    order: 4
  },
  {
    name: 'Binary Search',
    description: 'Logarithmic search on sorted arrays and search spaces',
    color: '#FFEAA7',
    icon: 'Search',
    order: 5
  },
  {
    name: 'Linked List',
    description: 'Pointer manipulation and linked list traversal',
    color: '#DDA0DD',
    icon: 'Link',
    order: 6
  },
  {
    name: 'Trees',
    description: 'Binary trees, BST, and tree traversal algorithms',
    color: '#98D8C8',
    icon: 'TreePine',
    order: 7
  },
  {
    name: 'Tries',
    description: 'Prefix trees for string matching and autocomplete',
    color: '#F7DC6F',
    icon: 'TreeDeciduous',
    order: 8
  },
  {
    name: 'Heap / Priority Queue',
    description: 'Priority-based data structures for optimization problems',
    color: '#BB8FCE',
    icon: 'Triangle',
    order: 9
  },
  {
    name: 'Backtracking',
    description: 'Recursive exploration of solution spaces',
    color: '#85C1E9',
    icon: 'RotateCcw',
    order: 10
  },
  {
    name: 'Graphs',
    description: 'Graph traversal, shortest paths, and connectivity',
    color: '#F8C471',
    icon: 'Network',
    order: 11
  },
  {
    name: 'Advanced Graphs',
    description: 'Union find, topological sort, and advanced graph algorithms',
    color: '#82E0AA',
    icon: 'GitBranch',
    order: 12
  },
  {
    name: 'Dynamic Programming',
    description: 'Optimization through memoization and tabulation',
    color: '#FF9FF3',
    icon: 'Zap',
    order: 13
  },
  {
    name: 'Greedy',
    description: 'Local optimization for global solutions',
    color: '#54A0FF',
    icon: 'TrendingUp',
    order: 14
  },
  {
    name: 'Intervals',
    description: 'Merge, insert, and manipulate interval problems',
    color: '#5F27CD',
    icon: 'Calendar',
    order: 15
  },
  ...additionalPatterns
];

const companies = [
  { name: 'Google' }, { name: 'Meta' }, { name: 'Amazon' },
  { name: 'Apple' }, { name: 'Microsoft' }, { name: 'Netflix' },
  { name: 'Uber' }, { name: 'Airbnb' }, { name: 'LinkedIn' },
  { name: 'Salesforce' }, { name: 'Adobe' }, { name: 'Spotify' },
  { name: 'Twitter' }, { name: 'Stripe' }, { name: 'ByteDance' }
];

const problems = [
  // Array & Hashing (10 problems)
  { title: 'Contains Duplicate', leetcodeNumber: 217, difficulty: 'EASY', pattern: 'Array & Hashing', companies: ['Google', 'Amazon', 'Microsoft'], frequency: 'VERY_HIGH', isBlind75: true, order: 1 },
  { title: 'Valid Anagram', leetcodeNumber: 242, difficulty: 'EASY', pattern: 'Array & Hashing', companies: ['Meta', 'Amazon', 'Apple'], frequency: 'VERY_HIGH', isBlind75: true, order: 2 },
  { title: 'Two Sum', leetcodeNumber: 1, difficulty: 'EASY', pattern: 'Array & Hashing', companies: ['Google', 'Meta', 'Amazon', 'Apple', 'Microsoft'], frequency: 'VERY_HIGH', isBlind75: true, order: 3 },
  { title: 'Group Anagrams', leetcodeNumber: 49, difficulty: 'MEDIUM', pattern: 'Array & Hashing', companies: ['Amazon', 'Meta', 'Uber'], frequency: 'HIGH', isBlind75: true, order: 4 },
  { title: 'Top K Frequent Elements', leetcodeNumber: 347, difficulty: 'MEDIUM', pattern: 'Array & Hashing', companies: ['Amazon', 'Meta', 'Apple'], frequency: 'HIGH', isBlind75: true, order: 5 },
  { title: 'Product of Array Except Self', leetcodeNumber: 238, difficulty: 'MEDIUM', pattern: 'Array & Hashing', companies: ['Amazon', 'Meta', 'Apple', 'Microsoft'], frequency: 'HIGH', isBlind75: true, order: 6 },
  { title: 'Valid Sudoku', leetcodeNumber: 36, difficulty: 'MEDIUM', pattern: 'Array & Hashing', companies: ['Amazon', 'Apple', 'Uber'], frequency: 'MEDIUM', isBlind75: true, order: 7 },
  { title: 'Encode and Decode Strings', leetcodeNumber: 271, difficulty: 'MEDIUM', pattern: 'Array & Hashing', companies: ['Google', 'Meta', 'Uber'], frequency: 'HIGH', isBlind75: true, order: 8 },
  { title: 'Longest Consecutive Sequence', leetcodeNumber: 128, difficulty: 'MEDIUM', pattern: 'Array & Hashing', companies: ['Google', 'Meta', 'Amazon'], frequency: 'HIGH', isBlind75: true, order: 9 },
  { title: 'Valid Parentheses', leetcodeNumber: 20, difficulty: 'EASY', pattern: 'Array & Hashing', companies: ['Google', 'Meta', 'Amazon', 'Microsoft'], frequency: 'VERY_HIGH', isBlind75: true, order: 10 },

  // Two Pointers (6 problems)
  { title: 'Valid Palindrome', leetcodeNumber: 125, difficulty: 'EASY', pattern: 'Two Pointers', companies: ['Meta', 'Amazon', 'Microsoft'], frequency: 'HIGH', isBlind75: true, order: 11 },
  { title: '3Sum', leetcodeNumber: 15, difficulty: 'MEDIUM', pattern: 'Two Pointers', companies: ['Amazon', 'Meta', 'Apple'], frequency: 'VERY_HIGH', isBlind75: true, order: 12 },
  { title: 'Container With Most Water', leetcodeNumber: 11, difficulty: 'MEDIUM', pattern: 'Two Pointers', companies: ['Amazon', 'Meta', 'Google'], frequency: 'HIGH', isBlind75: true, order: 13 },
  { title: 'Remove Duplicates from Sorted Array', leetcodeNumber: 26, difficulty: 'EASY', pattern: 'Two Pointers', companies: ['Google', 'Meta', 'Microsoft'], frequency: 'HIGH', isNeetCode: true, order: 14 },
  { title: 'Trapping Rain Water', leetcodeNumber: 42, difficulty: 'HARD', pattern: 'Two Pointers', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isBlind75: true, order: 15 },
  { title: 'Two Sum II - Input Array Is Sorted', leetcodeNumber: 167, difficulty: 'MEDIUM', pattern: 'Two Pointers', companies: ['Amazon', 'Meta', 'Apple'], frequency: 'MEDIUM', isNeetCode: true, order: 16 },

  // Sliding Window (5 problems)
  { title: 'Best Time to Buy and Sell Stock', leetcodeNumber: 121, difficulty: 'EASY', pattern: 'Sliding Window', companies: ['Amazon', 'Meta', 'Google', 'Apple'], frequency: 'VERY_HIGH', isBlind75: true, order: 17 },
  { title: 'Longest Substring Without Repeating Characters', leetcodeNumber: 3, difficulty: 'MEDIUM', pattern: 'Sliding Window', companies: ['Amazon', 'Meta', 'Google', 'Apple'], frequency: 'VERY_HIGH', isBlind75: true, order: 18 },
  { title: 'Longest Repeating Character Replacement', leetcodeNumber: 424, difficulty: 'MEDIUM', pattern: 'Sliding Window', companies: ['Amazon', 'Meta', 'Google'], frequency: 'HIGH', isBlind75: true, order: 19 },
  { title: 'Permutation in String', leetcodeNumber: 567, difficulty: 'MEDIUM', pattern: 'Sliding Window', companies: ['Amazon', 'Meta', 'Microsoft'], frequency: 'MEDIUM', isNeetCode: true, order: 20 },
  { title: 'Minimum Window Substring', leetcodeNumber: 76, difficulty: 'HARD', pattern: 'Sliding Window', companies: ['Meta', 'Amazon', 'Google'], frequency: 'HIGH', isBlind75: true, order: 21 },

  // Stack (3 problems)
  { title: 'Min Stack', leetcodeNumber: 155, difficulty: 'MEDIUM', pattern: 'Stack', companies: ['Amazon', 'Meta', 'Google'], frequency: 'HIGH', isBlind75: true, order: 22 },
  { title: 'Evaluate Reverse Polish Notation', leetcodeNumber: 150, difficulty: 'MEDIUM', pattern: 'Stack', companies: ['Amazon', 'Meta', 'LinkedIn'], frequency: 'MEDIUM', isBlind75: true, order: 23 },
  { title: 'Generate Parentheses', leetcodeNumber: 22, difficulty: 'MEDIUM', pattern: 'Stack', companies: ['Google', 'Meta', 'Amazon'], frequency: 'HIGH', isBlind75: true, order: 24 },

  // Binary Search (3 problems)
  { title: 'Binary Search', leetcodeNumber: 704, difficulty: 'EASY', pattern: 'Binary Search', companies: ['Google', 'Meta', 'Amazon'], frequency: 'HIGH', isNeetCode: true, order: 25 },
  { title: 'Search in Rotated Sorted Array', leetcodeNumber: 33, difficulty: 'MEDIUM', pattern: 'Binary Search', companies: ['Meta', 'Amazon', 'Google'], frequency: 'VERY_HIGH', isBlind75: true, order: 26 },
  { title: 'Find Minimum in Rotated Sorted Array', leetcodeNumber: 153, difficulty: 'MEDIUM', pattern: 'Binary Search', companies: ['Meta', 'Amazon', 'Apple'], frequency: 'HIGH', isBlind75: true, order: 27 },

  // Linked List (6 problems)
  { title: 'Reverse Linked List', leetcodeNumber: 206, difficulty: 'EASY', pattern: 'Linked List', companies: ['Amazon', 'Meta', 'Google', 'Apple'], frequency: 'VERY_HIGH', isBlind75: true, order: 28 },
  { title: 'Linked List Cycle', leetcodeNumber: 141, difficulty: 'EASY', pattern: 'Linked List', companies: ['Amazon', 'Meta', 'Microsoft'], frequency: 'HIGH', isBlind75: true, order: 29 },
  { title: 'Merge Two Sorted Lists', leetcodeNumber: 21, difficulty: 'EASY', pattern: 'Linked List', companies: ['Amazon', 'Meta', 'Google'], frequency: 'VERY_HIGH', isBlind75: true, order: 30 },
  { title: 'Remove Nth Node From End of List', leetcodeNumber: 19, difficulty: 'MEDIUM', pattern: 'Linked List', companies: ['Amazon', 'Meta', 'Google'], frequency: 'HIGH', isBlind75: true, order: 31 },
  { title: 'Reorder List', leetcodeNumber: 143, difficulty: 'MEDIUM', pattern: 'Linked List', companies: ['Amazon', 'Meta', 'Apple'], frequency: 'MEDIUM', isBlind75: true, order: 32 },
  { title: 'Merge k Sorted Lists', leetcodeNumber: 23, difficulty: 'HARD', pattern: 'Linked List', companies: ['Amazon', 'Meta', 'Google'], frequency: 'HIGH', isBlind75: true, order: 33 },

  // Trees (12 problems)
  { title: 'Maximum Depth of Binary Tree', leetcodeNumber: 104, difficulty: 'EASY', pattern: 'Trees', companies: ['Amazon', 'Meta', 'Google'], frequency: 'VERY_HIGH', isBlind75: true, order: 34 },
  { title: 'Same Tree', leetcodeNumber: 100, difficulty: 'EASY', pattern: 'Trees', companies: ['Amazon', 'Meta', 'Google'], frequency: 'HIGH', isBlind75: true, order: 35 },
  { title: 'Invert Binary Tree', leetcodeNumber: 226, difficulty: 'EASY', pattern: 'Trees', companies: ['Google', 'Meta', 'Amazon'], frequency: 'VERY_HIGH', isBlind75: true, order: 36 },
  { title: 'Binary Tree Level Order Traversal', leetcodeNumber: 102, difficulty: 'MEDIUM', pattern: 'Trees', companies: ['Amazon', 'Meta', 'Google'], frequency: 'VERY_HIGH', isBlind75: true, order: 37 },
  { title: 'Serialize and Deserialize Binary Tree', leetcodeNumber: 297, difficulty: 'HARD', pattern: 'Trees', companies: ['Amazon', 'Meta', 'Google'], frequency: 'HIGH', isBlind75: true, order: 38 },
  { title: 'Subtree of Another Tree', leetcodeNumber: 572, difficulty: 'EASY', pattern: 'Trees', companies: ['Amazon', 'Meta', 'Google'], frequency: 'HIGH', isBlind75: true, order: 39 },
  { title: 'Construct Binary Tree from Preorder and Inorder Traversal', leetcodeNumber: 105, difficulty: 'MEDIUM', pattern: 'Trees', companies: ['Amazon', 'Meta', 'Google'], frequency: 'HIGH', isBlind75: true, order: 40 },
  { title: 'Validate Binary Search Tree', leetcodeNumber: 98, difficulty: 'MEDIUM', pattern: 'Trees', companies: ['Amazon', 'Meta', 'Google'], frequency: 'VERY_HIGH', isBlind75: true, order: 41 },
  { title: 'Kth Smallest Element in a BST', leetcodeNumber: 230, difficulty: 'MEDIUM', pattern: 'Trees', companies: ['Amazon', 'Meta', 'Google'], frequency: 'HIGH', isBlind75: true, order: 42 },
  { title: 'Lowest Common Ancestor of a Binary Search Tree', leetcodeNumber: 235, difficulty: 'MEDIUM', pattern: 'Trees', companies: ['Amazon', 'Meta', 'Google'], frequency: 'HIGH', isBlind75: true, order: 43 },
  { title: 'Binary Tree Maximum Path Sum', leetcodeNumber: 124, difficulty: 'HARD', pattern: 'Trees', companies: ['Amazon', 'Meta', 'Google'], frequency: 'HIGH', isBlind75: true, order: 44 },
  { title: 'Good Nodes in Binary Tree', leetcodeNumber: 1448, difficulty: 'MEDIUM', pattern: 'Trees', companies: ['Amazon', 'Meta', 'Google'], frequency: 'MEDIUM', isNeetCode: true, order: 45 },

  // Tries (2 problems)
  { title: 'Implement Trie (Prefix Tree)', leetcodeNumber: 208, difficulty: 'MEDIUM', pattern: 'Tries', companies: ['Amazon', 'Meta', 'Google'], frequency: 'HIGH', isBlind75: true, order: 46 },
  { title: 'Word Search II', leetcodeNumber: 212, difficulty: 'HARD', pattern: 'Tries', companies: ['Amazon', 'Meta', 'Google'], frequency: 'HIGH', isBlind75: true, order: 47 },

  // Heap / Priority Queue (3 problems)
  { title: 'Kth Largest Element in an Array', leetcodeNumber: 215, difficulty: 'MEDIUM', pattern: 'Heap / Priority Queue', companies: ['Amazon', 'Meta', 'Google'], frequency: 'VERY_HIGH', isNeetCode: true, order: 48 },
  { title: 'Find Median from Data Stream', leetcodeNumber: 295, difficulty: 'HARD', pattern: 'Heap / Priority Queue', companies: ['Amazon', 'Meta', 'Google'], frequency: 'HIGH', isBlind75: true, order: 49 },
  { title: 'Task Scheduler', leetcodeNumber: 621, difficulty: 'MEDIUM', pattern: 'Heap / Priority Queue', companies: ['Amazon', 'Meta', 'Google'], frequency: 'HIGH', isNeetCode: true, order: 50 },

  // Backtracking (4 problems)
  { title: 'Combination Sum', leetcodeNumber: 39, difficulty: 'MEDIUM', pattern: 'Backtracking', companies: ['Amazon', 'Meta', 'Google'], frequency: 'HIGH', isBlind75: true, order: 51 },
  { title: 'Word Search', leetcodeNumber: 79, difficulty: 'MEDIUM', pattern: 'Backtracking', companies: ['Amazon', 'Meta', 'Microsoft'], frequency: 'HIGH', isBlind75: true, order: 52 },
  { title: 'Palindrome Partitioning', leetcodeNumber: 131, difficulty: 'MEDIUM', pattern: 'Backtracking', companies: ['Amazon', 'Meta', 'Google'], frequency: 'MEDIUM', isNeetCode: true, order: 53 },
  { title: 'N-Queens', leetcodeNumber: 51, difficulty: 'HARD', pattern: 'Backtracking', companies: ['Amazon', 'Meta', 'Google'], frequency: 'MEDIUM', isNeetCode: true, order: 54 },

  // Graphs (5 problems)
  { title: 'Number of Islands', leetcodeNumber: 200, difficulty: 'MEDIUM', pattern: 'Graphs', companies: ['Amazon', 'Meta', 'Google'], frequency: 'VERY_HIGH', isBlind75: true, order: 55 },
  { title: 'Clone Graph', leetcodeNumber: 133, difficulty: 'MEDIUM', pattern: 'Graphs', companies: ['Amazon', 'Meta', 'Google'], frequency: 'HIGH', isBlind75: true, order: 56 },
  { title: 'Pacific Atlantic Water Flow', leetcodeNumber: 417, difficulty: 'MEDIUM', pattern: 'Graphs', companies: ['Amazon', 'Meta', 'Google'], frequency: 'MEDIUM', isBlind75: true, order: 57 },
  { title: 'Course Schedule', leetcodeNumber: 207, difficulty: 'MEDIUM', pattern: 'Graphs', companies: ['Amazon', 'Meta', 'Google'], frequency: 'HIGH', isBlind75: true, order: 58 },
  { title: 'Graph Valid Tree', leetcodeNumber: 261, difficulty: 'MEDIUM', pattern: 'Graphs', companies: ['Amazon', 'Meta', 'Google'], frequency: 'HIGH', isBlind75: true, order: 59 },

  // Advanced Graphs (2 problems)
  { title: 'Number of Connected Components in an Undirected Graph', leetcodeNumber: 323, difficulty: 'MEDIUM', pattern: 'Advanced Graphs', companies: ['Amazon', 'Meta', 'Google'], frequency: 'HIGH', isBlind75: true, order: 60 },
  { title: 'Redundant Connection', leetcodeNumber: 684, difficulty: 'MEDIUM', pattern: 'Advanced Graphs', companies: ['Amazon', 'Meta', 'Google'], frequency: 'MEDIUM', isNeetCode: true, order: 61 },

  // Dynamic Programming (8 problems)
  { title: 'Climbing Stairs', leetcodeNumber: 70, difficulty: 'EASY', pattern: 'Dynamic Programming', companies: ['Amazon', 'Meta', 'Google'], frequency: 'VERY_HIGH', isBlind75: true, order: 62 },
  { title: 'Coin Change', leetcodeNumber: 322, difficulty: 'MEDIUM', pattern: 'Dynamic Programming', companies: ['Amazon', 'Meta', 'Google'], frequency: 'VERY_HIGH', isBlind75: true, order: 63 },
  { title: 'Longest Increasing Subsequence', leetcodeNumber: 300, difficulty: 'MEDIUM', pattern: 'Dynamic Programming', companies: ['Amazon', 'Meta', 'Google'], frequency: 'HIGH', isBlind75: true, order: 64 },
  { title: 'Longest Common Subsequence', leetcodeNumber: 1143, difficulty: 'MEDIUM', pattern: 'Dynamic Programming', companies: ['Amazon', 'Meta', 'Google'], frequency: 'HIGH', isNeetCode: true, order: 65 },
  { title: 'Word Break', leetcodeNumber: 139, difficulty: 'MEDIUM', pattern: 'Dynamic Programming', companies: ['Amazon', 'Meta', 'Google'], frequency: 'HIGH', isBlind75: true, order: 66 },
  { title: 'Combination Sum IV', leetcodeNumber: 377, difficulty: 'MEDIUM', pattern: 'Dynamic Programming', companies: ['Amazon', 'Meta', 'Google'], frequency: 'MEDIUM', isBlind75: true, order: 67 },
  { title: 'House Robber', leetcodeNumber: 198, difficulty: 'MEDIUM', pattern: 'Dynamic Programming', companies: ['Amazon', 'Meta', 'Google'], frequency: 'HIGH', isBlind75: true, order: 68 },
  { title: 'House Robber II', leetcodeNumber: 213, difficulty: 'MEDIUM', pattern: 'Dynamic Programming', companies: ['Amazon', 'Meta', 'Google'], frequency: 'MEDIUM', isBlind75: true, order: 69 },

  // Greedy (3 problems)
  { title: 'Maximum Subarray', leetcodeNumber: 53, difficulty: 'MEDIUM', pattern: 'Greedy', companies: ['Amazon', 'Meta', 'Google'], frequency: 'VERY_HIGH', isBlind75: true, order: 70 },
  { title: 'Jump Game', leetcodeNumber: 55, difficulty: 'MEDIUM', pattern: 'Greedy', companies: ['Amazon', 'Meta', 'Google'], frequency: 'HIGH', isBlind75: true, order: 71 },
  { title: 'Gas Station', leetcodeNumber: 134, difficulty: 'MEDIUM', pattern: 'Greedy', companies: ['Amazon', 'Meta', 'Google'], frequency: 'MEDIUM', isNeetCode: true, order: 72 },

  // Intervals (3 problems)
  { title: 'Insert Interval', leetcodeNumber: 57, difficulty: 'MEDIUM', pattern: 'Intervals', companies: ['Amazon', 'Meta', 'Google'], frequency: 'HIGH', isBlind75: true, order: 73 },
  { title: 'Merge Intervals', leetcodeNumber: 56, difficulty: 'MEDIUM', pattern: 'Intervals', companies: ['Amazon', 'Meta', 'Google'], frequency: 'VERY_HIGH', isBlind75: true, order: 74 },
  { title: 'Non-overlapping Intervals', leetcodeNumber: 435, difficulty: 'MEDIUM', pattern: 'Intervals', companies: ['Amazon', 'Meta', 'Google'], frequency: 'MEDIUM', isBlind75: true, order: 75 },
  
  // Enhanced Problems for Senior Developers (50+ additional problems)
  ...enhancedProblems
];

async function main() {
  console.log('Start seeding...');

  // Create test user
  const bcrypt = require('bcryptjs');
  const hashedPassword = await bcrypt.hash('johndoe123', 12);
  
  const testUser = await prisma.user.create({
    data: {
      email: 'john@doe.com',
      password: hashedPassword,
      firstName: 'John',
      lastName: 'Doe'
    }
  });

  // Create patterns
  console.log('Creating patterns...');
  for (const patternData of patterns) {
    await prisma.pattern.create({
      data: patternData
    });
  }

  // Create companies
  console.log('Creating companies...');
  for (const companyData of companies) {
    await prisma.company.create({
      data: companyData
    });
  }

  // Create problems
  console.log('Creating problems...');
  for (const problemData of problems) {
    const pattern = await prisma.pattern.findUnique({
      where: { name: problemData.pattern }
    });
    
    if (!pattern) {
      console.error(`Pattern not found: ${problemData.pattern}`);
      continue;
    }

    const problemCompanies = await prisma.company.findMany({
      where: {
        name: { in: problemData.companies }
      }
    });

    await prisma.problem.create({
      data: {
        title: problemData.title,
        leetcodeNumber: problemData.leetcodeNumber,
        difficulty: problemData.difficulty as any,
        patternId: pattern.id,
        companies: {
          connect: problemCompanies.map((c: any) => ({ id: c.id }))
        },
        frequency: problemData.frequency as any,
        isBlind75: problemData.isBlind75,
        isNeetCode: problemData.isNeetCode || false,
        order: problemData.order,
        hints: [],
        tags: []
      }
    });
  }

  // Create default study plan
  console.log('Creating study plan...');
  await prisma.studyPlan.create({
    data: {
      userId: testUser.id,
      name: '60-Day FAANG Interview Prep',
      description: 'Comprehensive 60-day study plan covering all essential DSA patterns',
      totalDays: 60,
      currentDay: 1
    }
  });

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
