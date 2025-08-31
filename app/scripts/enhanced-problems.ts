// Enhanced DSA Problems for Senior Developers (50+ Additional Problems)
// These problems focus on advanced patterns, system design considerations, and optimization

export const enhancedProblems = [
  // Advanced Array & String Manipulation (8 problems)
  { title: 'Longest Palindromic Substring', leetcodeNumber: 5, difficulty: 'MEDIUM', pattern: 'Array & Hashing', companies: ['Amazon', 'Google', 'Meta', 'Microsoft'], frequency: 'VERY_HIGH', isAdvanced: true, order: 76 },
  { title: 'String to Integer (atoi)', leetcodeNumber: 8, difficulty: 'MEDIUM', pattern: 'Array & Hashing', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isAdvanced: true, order: 77 },
  { title: 'Integer to Roman', leetcodeNumber: 12, difficulty: 'MEDIUM', pattern: 'Array & Hashing', companies: ['Amazon', 'Google', 'Meta'], frequency: 'MEDIUM', isAdvanced: true, order: 78 },
  { title: 'Roman to Integer', leetcodeNumber: 13, difficulty: 'EASY', pattern: 'Array & Hashing', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isAdvanced: true, order: 79 },
  { title: 'Zigzag Conversion', leetcodeNumber: 6, difficulty: 'MEDIUM', pattern: 'Array & Hashing', companies: ['Amazon', 'Google'], frequency: 'MEDIUM', isAdvanced: true, order: 80 },
  { title: 'First Missing Positive', leetcodeNumber: 41, difficulty: 'HARD', pattern: 'Array & Hashing', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isAdvanced: true, order: 81 },
  { title: 'Rotate Array', leetcodeNumber: 189, difficulty: 'MEDIUM', pattern: 'Array & Hashing', companies: ['Amazon', 'Google', 'Microsoft'], frequency: 'HIGH', isAdvanced: true, order: 82 },
  { title: 'Spiral Matrix', leetcodeNumber: 54, difficulty: 'MEDIUM', pattern: 'Array & Hashing', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isAdvanced: true, order: 83 },

  // Advanced Two Pointers & Sliding Window (6 problems)
  { title: 'Longest Palindromic Subsequence', leetcodeNumber: 516, difficulty: 'MEDIUM', pattern: 'Two Pointers', companies: ['Amazon', 'Google', 'Meta'], frequency: 'MEDIUM', isAdvanced: true, order: 84 },
  { title: 'Palindromic Substrings', leetcodeNumber: 647, difficulty: 'MEDIUM', pattern: 'Two Pointers', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isAdvanced: true, order: 85 },
  { title: 'Minimum Size Subarray Sum', leetcodeNumber: 209, difficulty: 'MEDIUM', pattern: 'Sliding Window', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isAdvanced: true, order: 86 },
  { title: 'Sliding Window Maximum', leetcodeNumber: 239, difficulty: 'HARD', pattern: 'Sliding Window', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isAdvanced: true, order: 87 },
  { title: 'Substring with Concatenation of All Words', leetcodeNumber: 30, difficulty: 'HARD', pattern: 'Sliding Window', companies: ['Amazon', 'Google', 'Meta'], frequency: 'MEDIUM', isAdvanced: true, order: 88 },
  { title: 'Minimum Window Subsequence', leetcodeNumber: 727, difficulty: 'HARD', pattern: 'Sliding Window', companies: ['Google', 'Meta'], frequency: 'MEDIUM', isAdvanced: true, order: 89 },

  // Advanced Stack & Queue (5 problems)
  { title: 'Largest Rectangle in Histogram', leetcodeNumber: 84, difficulty: 'HARD', pattern: 'Stack', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isAdvanced: true, order: 90 },
  { title: 'Daily Temperatures', leetcodeNumber: 739, difficulty: 'MEDIUM', pattern: 'Stack', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isAdvanced: true, order: 91 },
  { title: 'Next Greater Element II', leetcodeNumber: 503, difficulty: 'MEDIUM', pattern: 'Stack', companies: ['Amazon', 'Google'], frequency: 'MEDIUM', isAdvanced: true, order: 92 },
  { title: 'Sliding Window Median', leetcodeNumber: 480, difficulty: 'HARD', pattern: 'Heap / Priority Queue', companies: ['Google', 'Meta'], frequency: 'MEDIUM', isAdvanced: true, order: 93 },
  { title: 'Design Hit Counter', leetcodeNumber: 362, difficulty: 'MEDIUM', pattern: 'Stack', companies: ['Google', 'Meta', 'Amazon'], frequency: 'HIGH', isAdvanced: true, order: 94 },

  // Advanced Binary Search (5 problems)
  { title: 'Search a 2D Matrix II', leetcodeNumber: 240, difficulty: 'MEDIUM', pattern: 'Binary Search', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isAdvanced: true, order: 95 },
  { title: 'Find Peak Element', leetcodeNumber: 162, difficulty: 'MEDIUM', pattern: 'Binary Search', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isAdvanced: true, order: 96 },
  { title: 'Search in Rotated Sorted Array II', leetcodeNumber: 81, difficulty: 'MEDIUM', pattern: 'Binary Search', companies: ['Amazon', 'Google'], frequency: 'MEDIUM', isAdvanced: true, order: 97 },
  { title: 'Find First and Last Position of Element in Sorted Array', leetcodeNumber: 34, difficulty: 'MEDIUM', pattern: 'Binary Search', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isAdvanced: true, order: 98 },
  { title: 'Median of Two Sorted Arrays', leetcodeNumber: 4, difficulty: 'HARD', pattern: 'Binary Search', companies: ['Amazon', 'Google', 'Meta'], frequency: 'VERY_HIGH', isAdvanced: true, order: 99 },

  // Advanced Linked List (4 problems)
  { title: 'Copy List with Random Pointer', leetcodeNumber: 138, difficulty: 'MEDIUM', pattern: 'Linked List', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isAdvanced: true, order: 100 },
  { title: 'Add Two Numbers', leetcodeNumber: 2, difficulty: 'MEDIUM', pattern: 'Linked List', companies: ['Amazon', 'Google', 'Meta'], frequency: 'VERY_HIGH', isAdvanced: true, order: 101 },
  { title: 'Swap Nodes in Pairs', leetcodeNumber: 24, difficulty: 'MEDIUM', pattern: 'Linked List', companies: ['Amazon', 'Google'], frequency: 'MEDIUM', isAdvanced: true, order: 102 },
  { title: 'Reverse Nodes in k-Group', leetcodeNumber: 25, difficulty: 'HARD', pattern: 'Linked List', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isAdvanced: true, order: 103 },

  // Advanced Trees & Graph Algorithms (8 problems)
  { title: 'Binary Tree Right Side View', leetcodeNumber: 199, difficulty: 'MEDIUM', pattern: 'Trees', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isAdvanced: true, order: 104 },
  { title: 'Count Good Nodes in Binary Tree', leetcodeNumber: 1448, difficulty: 'MEDIUM', pattern: 'Trees', companies: ['Amazon', 'Google'], frequency: 'MEDIUM', isAdvanced: true, order: 105 },
  { title: 'Flatten Binary Tree to Linked List', leetcodeNumber: 114, difficulty: 'MEDIUM', pattern: 'Trees', companies: ['Amazon', 'Google', 'Meta'], frequency: 'MEDIUM', isAdvanced: true, order: 106 },
  { title: 'Path Sum II', leetcodeNumber: 113, difficulty: 'MEDIUM', pattern: 'Trees', companies: ['Amazon', 'Google'], frequency: 'MEDIUM', isAdvanced: true, order: 107 },
  { title: 'Number of Islands', leetcodeNumber: 200, difficulty: 'MEDIUM', pattern: 'Graph', companies: ['Amazon', 'Google', 'Meta'], frequency: 'VERY_HIGH', isAdvanced: true, order: 108 },
  { title: 'Clone Graph', leetcodeNumber: 133, difficulty: 'MEDIUM', pattern: 'Graph', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isAdvanced: true, order: 109 },
  { title: 'Course Schedule', leetcodeNumber: 207, difficulty: 'MEDIUM', pattern: 'Graph', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isAdvanced: true, order: 110 },
  { title: 'Course Schedule II', leetcodeNumber: 210, difficulty: 'MEDIUM', pattern: 'Graph', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isAdvanced: true, order: 111 },

  // Advanced Dynamic Programming (8 problems)
  { title: 'Unique Paths', leetcodeNumber: 62, difficulty: 'MEDIUM', pattern: 'Dynamic Programming', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isAdvanced: true, order: 112 },
  { title: 'Unique Paths II', leetcodeNumber: 63, difficulty: 'MEDIUM', pattern: 'Dynamic Programming', companies: ['Amazon', 'Google'], frequency: 'MEDIUM', isAdvanced: true, order: 113 },
  { title: 'Minimum Path Sum', leetcodeNumber: 64, difficulty: 'MEDIUM', pattern: 'Dynamic Programming', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isAdvanced: true, order: 114 },
  { title: 'Edit Distance', leetcodeNumber: 72, difficulty: 'MEDIUM', pattern: 'Dynamic Programming', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isAdvanced: true, order: 115 },
  { title: 'Regular Expression Matching', leetcodeNumber: 10, difficulty: 'HARD', pattern: 'Dynamic Programming', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isAdvanced: true, order: 116 },
  { title: 'Wildcard Matching', leetcodeNumber: 44, difficulty: 'HARD', pattern: 'Dynamic Programming', companies: ['Amazon', 'Google'], frequency: 'MEDIUM', isAdvanced: true, order: 117 },
  { title: 'Longest Increasing Subsequence', leetcodeNumber: 300, difficulty: 'MEDIUM', pattern: 'Dynamic Programming', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isAdvanced: true, order: 118 },
  { title: 'Maximum Subarray', leetcodeNumber: 53, difficulty: 'MEDIUM', pattern: 'Dynamic Programming', companies: ['Amazon', 'Google', 'Meta'], frequency: 'VERY_HIGH', isAdvanced: true, order: 119 },

  // System Design & Advanced Data Structures (6 problems)
  { title: 'Design Add and Search Words Data Structure', leetcodeNumber: 211, difficulty: 'MEDIUM', pattern: 'Tries', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isAdvanced: true, order: 120 },
  { title: 'LRU Cache', leetcodeNumber: 146, difficulty: 'MEDIUM', pattern: 'Design', companies: ['Amazon', 'Google', 'Meta'], frequency: 'VERY_HIGH', isAdvanced: true, order: 121 },
  { title: 'LFU Cache', leetcodeNumber: 460, difficulty: 'HARD', pattern: 'Design', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isAdvanced: true, order: 122 },
  { title: 'Design Twitter', leetcodeNumber: 355, difficulty: 'MEDIUM', pattern: 'Design', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isAdvanced: true, order: 123 },
  { title: 'Time Based Key-Value Store', leetcodeNumber: 981, difficulty: 'MEDIUM', pattern: 'Design', companies: ['Amazon', 'Google'], frequency: 'HIGH', isAdvanced: true, order: 124 },
  { title: 'Insert Delete GetRandom O(1)', leetcodeNumber: 380, difficulty: 'MEDIUM', pattern: 'Design', companies: ['Amazon', 'Google', 'Meta'], frequency: 'HIGH', isAdvanced: true, order: 125 }
];

// Additional patterns for advanced problems
export const additionalPatterns = [
  {
    name: 'Graph',
    description: 'Graph traversal, shortest paths, and topological sorting',
    color: '#FF6B35',
    icon: 'Network',
    order: 16
  },
  {
    name: 'Design',
    description: 'System design and data structure design problems',
    color: '#6C5CE7',
    icon: 'Settings',
    order: 17
  },
  {
    name: 'Backtracking',
    description: 'Recursive exploration with constraint satisfaction',
    color: '#A8E6CF',
    icon: 'RotateCcw',
    order: 18
  },
  {
    name: 'Bit Manipulation',
    description: 'Bitwise operations and binary number manipulation',
    color: '#FFD93D',
    icon: 'Binary',
    order: 19
  },
  {
    name: 'Math & Geometry',
    description: 'Mathematical algorithms and geometric problems',
    color: '#FF8B94',
    icon: 'Calculator',
    order: 20
  }
];
