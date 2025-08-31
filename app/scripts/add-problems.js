// Quick script to add remaining problems to reach 125+
const fs = require('fs');

// Additional 47+ problems to add across patterns
const additionalProblems = {
  'Array & Hashing': [
    { id: 'find-disappeared-numbers', title: 'Find All Numbers Disappeared in an Array', leetcodeNumber: 448, difficulty: 'Easy' },
    { id: 'intersection-two-arrays', title: 'Intersection of Two Arrays', leetcodeNumber: 349, difficulty: 'Easy' },
    { id: 'majority-element', title: 'Majority Element', leetcodeNumber: 169, difficulty: 'Easy' },
    { id: 'move-zeroes', title: 'Move Zeroes', leetcodeNumber: 283, difficulty: 'Easy' },
    { id: 'plus-one', title: 'Plus One', leetcodeNumber: 66, difficulty: 'Easy' },
    { id: 'remove-element', title: 'Remove Element', leetcodeNumber: 27, difficulty: 'Easy' },
    { id: 'rotate-image', title: 'Rotate Image', leetcodeNumber: 48, difficulty: 'Medium' },
    { id: 'set-matrix-zeroes', title: 'Set Matrix Zeroes', leetcodeNumber: 73, difficulty: 'Medium' }
  ],
  'Two Pointers': [
    { id: 'sort-colors', title: 'Sort Colors', leetcodeNumber: 75, difficulty: 'Medium' },
    { id: 'remove-duplicates-ii', title: 'Remove Duplicates from Sorted Array II', leetcodeNumber: 80, difficulty: 'Medium' },
    { id: 'minimum-size-subarray-sum', title: 'Minimum Size Subarray Sum', leetcodeNumber: 209, difficulty: 'Medium' },
    { id: 'squares-sorted-array', title: 'Squares of a Sorted Array', leetcodeNumber: 977, difficulty: 'Easy' }
  ],
  'Sliding Window': [
    { id: 'sliding-window-maximum', title: 'Sliding Window Maximum', leetcodeNumber: 239, difficulty: 'Hard' },
    { id: 'minimum-size-subarray', title: 'Minimum Size Subarray Sum', leetcodeNumber: 209, difficulty: 'Medium' },
    { id: 'longest-substring-k-distinct', title: 'Longest Substring with At Most K Distinct Characters', leetcodeNumber: 340, difficulty: 'Medium' }
  ],
  'Stack': [
    { id: 'largest-rectangle-histogram', title: 'Largest Rectangle in Histogram', leetcodeNumber: 84, difficulty: 'Hard' },
    { id: 'daily-temperatures', title: 'Daily Temperatures', leetcodeNumber: 739, difficulty: 'Medium' },
    { id: 'next-greater-element', title: 'Next Greater Element I', leetcodeNumber: 496, difficulty: 'Easy' },
    { id: 'trapping-rain-water', title: 'Trapping Rain Water', leetcodeNumber: 42, difficulty: 'Hard' }
  ],
  'Binary Search': [
    { id: 'search-insert-position', title: 'Search Insert Position', leetcodeNumber: 35, difficulty: 'Easy' },
    { id: 'first-bad-version', title: 'First Bad Version', leetcodeNumber: 278, difficulty: 'Easy' },
    { id: 'find-first-last-position', title: 'Find First and Last Position of Element', leetcodeNumber: 34, difficulty: 'Medium' },
    { id: 'search-2d-matrix', title: 'Search a 2D Matrix', leetcodeNumber: 74, difficulty: 'Medium' }
  ],
  'Dynamic Programming': [
    { id: 'maximum-product-subarray', title: 'Maximum Product Subarray', leetcodeNumber: 152, difficulty: 'Medium' },
    { id: 'palindromic-substrings', title: 'Palindromic Substrings', leetcodeNumber: 647, difficulty: 'Medium' },
    { id: 'decode-ways', title: 'Decode Ways', leetcodeNumber: 91, difficulty: 'Medium' },
    { id: 'min-cost-climbing-stairs', title: 'Min Cost Climbing Stairs', leetcodeNumber: 746, difficulty: 'Easy' },
    { id: 'delete-earn', title: 'Delete and Earn', leetcodeNumber: 740, difficulty: 'Medium' }
  ],
  'Linked List': [
    { id: 'add-two-numbers', title: 'Add Two Numbers', leetcodeNumber: 2, difficulty: 'Medium' },
    { id: 'intersection-linked-lists', title: 'Intersection of Two Linked Lists', leetcodeNumber: 160, difficulty: 'Easy' },
    { id: 'palindrome-linked-list', title: 'Palindrome Linked List', leetcodeNumber: 234, difficulty: 'Easy' },
    { id: 'remove-linked-list-elements', title: 'Remove Linked List Elements', leetcodeNumber: 203, difficulty: 'Easy' }
  ],
  'Binary Tree': [
    { id: 'diameter-binary-tree', title: 'Diameter of Binary Tree', leetcodeNumber: 543, difficulty: 'Easy' },
    { id: 'path-sum', title: 'Path Sum', leetcodeNumber: 112, difficulty: 'Easy' },
    { id: 'symmetric-tree', title: 'Symmetric Tree', leetcodeNumber: 101, difficulty: 'Easy' },
    { id: 'binary-tree-paths', title: 'Binary Tree Paths', leetcodeNumber: 257, difficulty: 'Easy' },
    { id: 'sum-left-leaves', title: 'Sum of Left Leaves', leetcodeNumber: 404, difficulty: 'Easy' }
  ],
  'Graphs': [
    { id: 'word-ladder', title: 'Word Ladder', leetcodeNumber: 127, difficulty: 'Hard' },
    { id: 'surrounded-regions', title: 'Surrounded Regions', leetcodeNumber: 130, difficulty: 'Medium' },
    { id: 'redundant-connection', title: 'Redundant Connection', leetcodeNumber: 684, difficulty: 'Medium' }
  ]
};

console.log('Additional problems that can be added:');
let additionalCount = 0;
Object.entries(additionalProblems).forEach(([pattern, problems]) => {
  console.log(`${pattern}: ${problems.length} more problems`);
  additionalCount += problems.length;
});
console.log(`Total additional: ${additionalCount}`);
console.log(`New total would be: ${78 + additionalCount}`);
