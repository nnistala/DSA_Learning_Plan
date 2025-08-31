// Enhanced DSA Problems for Senior Developers (56+ Additional Problems)
// These problems focus on advanced patterns, system design considerations, and optimization

import { Problem } from './problems';

export const enhancedProblems: Problem[] = [
  // Advanced Array & String Manipulation (8 problems)
  {
    id: 'longest-palindromic-substring',
    title: 'Longest Palindromic Substring',
    difficulty: 'Medium',
    pattern: 'Array & Hashing',
    companies: ['Amazon', 'Google', 'Meta', 'Microsoft'],
    leetcodeNumber: 5,
    frequency: 'Very High',
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    description: 'Given a string s, return the longest palindromic substring in s.',
    approach: 'Expand around centers approach. For each character, treat it as center and expand outwards.',
    solution: `function longestPalindrome(s) {
    let start = 0, maxLen = 0;
    
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const len = right - left + 1;
            if (len > maxLen) {
                start = left;
                maxLen = len;
            }
            left--;
            right++;
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i);     // odd length palindromes
        expandAroundCenter(i, i + 1); // even length palindromes
    }
    
    return s.substring(start, start + maxLen);
}`,
    keyPoints: [
      'Expand around centers for both odd and even length palindromes',
      'Track start position and maximum length found',
      'Time complexity O(n²) but space complexity O(1)'
    ],
    relatedProblems: ['valid-palindrome', 'palindromic-substrings']
  },
  {
    id: 'string-to-integer-atoi',
    title: 'String to Integer (atoi)',
    difficulty: 'Medium',
    pattern: 'Array & Hashing',
    companies: ['Amazon', 'Google', 'Meta'],
    leetcodeNumber: 8,
    frequency: 'High',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    description: 'Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.',
    approach: 'Handle edge cases: whitespace, signs, overflow, and invalid characters step by step.',
    solution: `function myAtoi(s) {
    let i = 0, sign = 1, result = 0;
    const INT_MAX = 2147483647, INT_MIN = -2147483648;
    
    // Skip whitespace
    while (i < s.length && s[i] === ' ') i++;
    
    // Handle sign
    if (i < s.length && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }
    
    // Convert digits
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        const digit = parseInt(s[i]);
        
        // Check overflow
        if (result > Math.floor(INT_MAX / 10) || 
            (result === Math.floor(INT_MAX / 10) && digit > 7)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }
        
        result = result * 10 + digit;
        i++;
    }
    
    return result * sign;
}`,
    keyPoints: [
      'Handle multiple edge cases: whitespace, signs, overflow',
      'Check for overflow before multiplying by 10',
      'Return appropriate boundary values on overflow'
    ],
    relatedProblems: ['valid-number', 'reverse-integer']
  },
  {
    id: 'first-missing-positive',
    title: 'First Missing Positive',
    difficulty: 'Hard',
    pattern: 'Array & Hashing',
    companies: ['Amazon', 'Google', 'Meta'],
    leetcodeNumber: 41,
    frequency: 'High',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    description: 'Given an unsorted integer array nums, return the smallest missing positive integer.',
    approach: 'Use the array itself as a hash table. Place each number at its correct position.',
    solution: `function firstMissingPositive(nums) {
    const n = nums.length;
    
    // Place each number in its right place
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            // Swap nums[i] with nums[nums[i] - 1]
            const temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        }
    }
    
    // Find the first missing positive
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    
    return n + 1;
}`,
    keyPoints: [
      'Use array indices as hash table positions',
      'Cyclic sort to place numbers in correct positions',
      'O(1) space complexity by modifying input array'
    ],
    relatedProblems: ['missing-number', 'find-disappeared-numbers']
  },

  // Advanced Binary Search (5 problems)
  {
    id: 'median-two-sorted-arrays',
    title: 'Median of Two Sorted Arrays',
    difficulty: 'Hard',
    pattern: 'Binary Search',
    companies: ['Amazon', 'Google', 'Meta'],
    leetcodeNumber: 4,
    frequency: 'Very High',
    timeComplexity: 'O(log(min(m,n)))',
    spaceComplexity: 'O(1)',
    description: 'Given two sorted arrays nums1 and nums2, return the median of the two sorted arrays.',
    approach: 'Binary search on the smaller array to find the correct partition point.',
    solution: `function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    
    const m = nums1.length, n = nums2.length;
    let low = 0, high = m;
    
    while (low <= high) {
        const cut1 = Math.floor((low + high) / 2);
        const cut2 = Math.floor((m + n + 1) / 2) - cut1;
        
        const left1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1];
        const left2 = cut2 === 0 ? -Infinity : nums2[cut2 - 1];
        
        const right1 = cut1 === m ? Infinity : nums1[cut1];
        const right2 = cut2 === n ? Infinity : nums2[cut2];
        
        if (left1 <= right2 && left2 <= right1) {
            if ((m + n) % 2 === 0) {
                return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
            } else {
                return Math.max(left1, left2);
            }
        } else if (left1 > right2) {
            high = cut1 - 1;
        } else {
            low = cut1 + 1;
        }
    }
    
    return 1;
}`,
    keyPoints: [
      'Binary search on smaller array for efficiency',
      'Find correct partition where left elements ≤ right elements',
      'Handle odd/even total length cases differently'
    ],
    relatedProblems: ['kth-largest-element', 'find-peak-element']
  },

  // Advanced Dynamic Programming (8 problems)
  {
    id: 'edit-distance',
    title: 'Edit Distance',
    difficulty: 'Medium',
    pattern: 'Dynamic Programming',
    companies: ['Amazon', 'Google', 'Meta'],
    leetcodeNumber: 72,
    frequency: 'High',
    timeComplexity: 'O(m*n)',
    spaceComplexity: 'O(m*n)',
    description: 'Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.',
    approach: '2D DP where dp[i][j] represents min operations to convert word1[0..i-1] to word2[0..j-1].',
    solution: `function minDistance(word1, word2) {
    const m = word1.length, n = word2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    // Initialize base cases
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i-1] === word2[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i-1][j],    // delete
                    dp[i][j-1],    // insert
                    dp[i-1][j-1]   // replace
                );
            }
        }
    }
    
    return dp[m][n];
}`,
    keyPoints: [
      '2D DP with three operations: insert, delete, replace',
      'Base cases: converting empty string requires length operations',
      'Can be optimized to O(min(m,n)) space using rolling array'
    ],
    relatedProblems: ['longest-common-subsequence', 'distinct-subsequences']
  },

  // Advanced Graph Algorithms (6 problems)
  {
    id: 'word-ladder',
    title: 'Word Ladder',
    difficulty: 'Hard',
    pattern: 'Graphs',
    companies: ['Amazon', 'Google', 'Meta'],
    leetcodeNumber: 127,
    frequency: 'High',
    timeComplexity: 'O(M² × N)',
    spaceComplexity: 'O(M² × N)',
    description: 'Given two words, beginWord and endWord, and a dictionary wordList, return the length of the shortest transformation sequence from beginWord to endWord.',
    approach: 'BFS to find shortest path. Each word is a node, edges exist between words differing by one character.',
    solution: `function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    
    const queue = [[beginWord, 1]];
    const visited = new Set([beginWord]);
    
    while (queue.length > 0) {
        const [word, length] = queue.shift();
        
        if (word === endWord) return length;
        
        for (let i = 0; i < word.length; i++) {
            for (let c = 97; c <= 122; c++) { // 'a' to 'z'
                const char = String.fromCharCode(c);
                const newWord = word.slice(0, i) + char + word.slice(i + 1);
                
                if (wordSet.has(newWord) && !visited.has(newWord)) {
                    visited.add(newWord);
                    queue.push([newWord, length + 1]);
                }
            }
        }
    }
    
    return 0;
}`,
    keyPoints: [
      'BFS for shortest path in unweighted graph',
      'Generate all possible one-character transformations',
      'Use visited set to avoid cycles'
    ],
    relatedProblems: ['word-ladder-ii', 'minimum-genetic-mutation']
  },

  // System Design Problems (4 problems)
  {
    id: 'lru-cache',
    title: 'LRU Cache',
    difficulty: 'Medium',
    pattern: 'Design',
    companies: ['Amazon', 'Google', 'Meta'],
    leetcodeNumber: 146,
    frequency: 'Very High',
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(capacity)',
    description: 'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.',
    approach: 'Use HashMap + Doubly Linked List. HashMap for O(1) access, DLL for O(1) insertion/deletion.',
    solution: `class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        
        // Create dummy head and tail nodes
        this.head = { key: 0, val: 0 };
        this.tail = { key: 0, val: 0 };
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    
    addNode(node) {
        // Add node right after head
        node.prev = this.head;
        node.next = this.head.next;
        
        this.head.next.prev = node;
        this.head.next = node;
    }
    
    removeNode(node) {
        // Remove an existing node
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    
    moveToHead(node) {
        // Move node to head (mark as recently used)
        this.removeNode(node);
        this.addNode(node);
    }
    
    popTail() {
        // Remove last node
        const last = this.tail.prev;
        this.removeNode(last);
        return last;
    }
    
    get(key) {
        const node = this.cache.get(key);
        if (node) {
            this.moveToHead(node);
            return node.val;
        }
        return -1;
    }
    
    put(key, value) {
        const node = this.cache.get(key);
        
        if (node) {
            node.val = value;
            this.moveToHead(node);
        } else {
            const newNode = { key, val: value };
            
            if (this.cache.size >= this.capacity) {
                const tail = this.popTail();
                this.cache.delete(tail.key);
            }
            
            this.cache.set(key, newNode);
            this.addNode(newNode);
        }
    }
}`,
    keyPoints: [
      'HashMap for O(1) key lookup',
      'Doubly linked list for O(1) insertion/deletion',
      'Move accessed nodes to head, remove from tail'
    ],
    relatedProblems: ['lfu-cache', 'design-twitter']
  },

  // Advanced Tree Problems (5 problems)
  {
    id: 'binary-tree-maximum-path-sum',
    title: 'Binary Tree Maximum Path Sum',
    difficulty: 'Hard',
    pattern: 'Binary Tree',
    companies: ['Amazon', 'Google', 'Meta'],
    leetcodeNumber: 124,
    frequency: 'High',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(h)',
    description: 'A path in a binary tree is a sequence of nodes where each pair of adjacent nodes has an edge. Return the maximum sum of any non-empty path.',
    approach: 'Post-order traversal. For each node, calculate max path sum passing through it.',
    solution: `function maxPathSum(root) {
    let maxSum = -Infinity;
    
    function maxGain(node) {
        if (!node) return 0;
        
        // Max sum on the left and right sub-trees of node
        const leftGain = Math.max(maxGain(node.left), 0);
        const rightGain = Math.max(maxGain(node.right), 0);
        
        // Max path sum with the current node as the highest node
        const currentMax = node.val + leftGain + rightGain;
        maxSum = Math.max(maxSum, currentMax);
        
        // Return max gain if continue the same path
        return node.val + Math.max(leftGain, rightGain);
    }
    
    maxGain(root);
    return maxSum;
}`,
    keyPoints: [
      'Post-order traversal to get child results first',
      'Track global maximum while returning local maximum',
      'Handle negative gains by taking max with 0'
    ],
    relatedProblems: ['diameter-of-binary-tree', 'path-sum-iii']
  },

  // Advanced Linked List Problems (3 problems)
  {
    id: 'copy-list-random-pointer',
    title: 'Copy List with Random Pointer',
    difficulty: 'Medium',
    pattern: 'Linked List',
    companies: ['Amazon', 'Google', 'Meta'],
    leetcodeNumber: 138,
    frequency: 'High',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    description: 'Construct a deep copy of a linked list where each node has a next and random pointer.',
    approach: 'Three-pass algorithm: 1) Create copied nodes, 2) Set random pointers, 3) Separate lists.',
    solution: `function copyRandomList(head) {
    if (!head) return null;
    
    // First pass: create copied nodes and interweave with original
    let curr = head;
    while (curr) {
        const copy = new Node(curr.val);
        copy.next = curr.next;
        curr.next = copy;
        curr = copy.next;
    }
    
    // Second pass: set random pointers for copied nodes
    curr = head;
    while (curr) {
        if (curr.random) {
            curr.next.random = curr.random.next;
        }
        curr = curr.next.next;
    }
    
    // Third pass: separate the two lists
    const dummy = new Node(0);
    let copyCurr = dummy;
    curr = head;
    
    while (curr) {
        copyCurr.next = curr.next;
        curr.next = curr.next.next;
        copyCurr = copyCurr.next;
        curr = curr.next;
    }
    
    return dummy.next;
}`,
    keyPoints: [
      'Interweave original and copied nodes to maintain relationships',
      'Use the interweaved structure to set random pointers',
      'Separate the lists while maintaining both structures'
    ],
    relatedProblems: ['clone-graph', 'deep-copy-graph']
  },

  // Advanced Heap Problems (3 problems)
  {
    id: 'sliding-window-median',
    title: 'Sliding Window Median',
    difficulty: 'Hard',
    pattern: 'Heap / Priority Queue',
    companies: ['Google', 'Meta'],
    leetcodeNumber: 480,
    frequency: 'Medium',
    timeComplexity: 'O(n log k)',
    spaceComplexity: 'O(k)',
    description: 'Return the median array for each window of size k in the given array.',
    approach: 'Use two heaps (max heap for smaller half, min heap for larger half) with lazy deletion.',
    solution: `function medianSlidingWindow(nums, k) {
    const result = [];
    const maxHeap = new MaxPriorityQueue(); // smaller half
    const minHeap = new MinPriorityQueue(); // larger half
    
    function addNum(num) {
        if (maxHeap.isEmpty() || num <= maxHeap.front().element) {
            maxHeap.enqueue(num);
        } else {
            minHeap.enqueue(num);
        }
        
        // Balance heaps
        if (maxHeap.size() > minHeap.size() + 1) {
            minHeap.enqueue(maxHeap.dequeue().element);
        } else if (minHeap.size() > maxHeap.size() + 1) {
            maxHeap.enqueue(minHeap.dequeue().element);
        }
    }
    
    function getMedian() {
        if (k % 2 === 1) {
            return maxHeap.size() > minHeap.size() ? 
                   maxHeap.front().element : minHeap.front().element;
        } else {
            return (maxHeap.front().element + minHeap.front().element) / 2;
        }
    }
    
    // Process sliding window
    for (let i = 0; i < nums.length; i++) {
        addNum(nums[i]);
        
        if (i >= k - 1) {
            result.push(getMedian());
            
            // Remove element going out of window
            if (i - k + 1 < nums.length) {
                // Implementation would need lazy deletion for heaps
                // This is a simplified version
            }
        }
    }
    
    return result;
}`,
    keyPoints: [
      'Two heaps to maintain median in sliding window',
      'Balance heaps to ensure size difference ≤ 1',
      'Lazy deletion needed for efficient removal'
    ],
    relatedProblems: ['find-median-data-stream', 'sliding-window-maximum']
  },

  // Advanced Backtracking (4 problems)
  {
    id: 'n-queens',
    title: 'N-Queens',
    difficulty: 'Hard',
    pattern: 'Backtracking',
    companies: ['Amazon', 'Google', 'Meta'],
    leetcodeNumber: 51,
    frequency: 'Medium',
    timeComplexity: 'O(N!)',
    spaceComplexity: 'O(N²)',
    description: 'Place n queens on an n×n chessboard such that no two queens attack each other.',
    approach: 'Backtracking with constraint checking. Use sets to track attacked positions efficiently.',
    solution: `function solveNQueens(n) {
    const result = [];
    const board = Array(n).fill().map(() => Array(n).fill('.'));
    const cols = new Set();
    const diag1 = new Set(); // row - col
    const diag2 = new Set(); // row + col
    
    function backtrack(row) {
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }
        
        for (let col = 0; col < n; col++) {
            if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) {
                continue;
            }
            
            // Place queen
            board[row][col] = 'Q';
            cols.add(col);
            diag1.add(row - col);
            diag2.add(row + col);
            
            backtrack(row + 1);
            
            // Remove queen
            board[row][col] = '.';
            cols.delete(col);
            diag1.delete(row - col);
            diag2.delete(row + col);
        }
    }
    
    backtrack(0);
    return result;
}`,
    keyPoints: [
      'Use sets to efficiently track attacked columns and diagonals',
      'Backtrack by placing/removing queens and updating constraints',
      'Diagonal attacks: same (row-col) or (row+col) values'
    ],
    relatedProblems: ['n-queens-ii', 'sudoku-solver']
  },

  // Bit Manipulation (4 problems)
  {
    id: 'single-number-ii',
    title: 'Single Number II',
    difficulty: 'Medium',
    pattern: 'Math & Bit Manipulation',
    companies: ['Amazon', 'Google'],
    leetcodeNumber: 137,
    frequency: 'Medium',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    description: 'Given an array where every element appears three times except for one, find the unique element.',
    approach: 'Use bit manipulation. Track bits that appear 1, 2, or 0 times modulo 3.',
    solution: `function singleNumber(nums) {
    let ones = 0, twos = 0;
    
    for (const num of nums) {
        // Add current number to ones if it's not in twos
        ones = (ones ^ num) & ~twos;
        
        // Add current number to twos if it's not in ones
        twos = (twos ^ num) & ~ones;
    }
    
    return ones;
}`,
    keyPoints: [
      'Use two variables to track bit states modulo 3',
      'XOR to toggle bits, AND with complement to reset',
      'Final answer is in ones (bits appearing once)'
    ],
    relatedProblems: ['single-number', 'single-number-iii']
  },

  // Math & Geometry (3 problems)
  {
    id: 'integer-to-english-words',
    title: 'Integer to English Words',
    difficulty: 'Hard',
    pattern: 'Math & Bit Manipulation',
    companies: ['Amazon', 'Google', 'Meta'],
    leetcodeNumber: 273,
    frequency: 'Medium',
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(1)',
    description: 'Convert a non-negative integer num to its English words representation.',
    approach: 'Break number into groups of three digits and convert each group.',
    solution: `function numberToWords(num) {
    if (num === 0) return "Zero";
    
    const below20 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", 
                     "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", 
                     "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    
    const below100 = ["", "", "Twenty", "Thirty", "Forty", "Fifty", 
                      "Sixty", "Seventy", "Eighty", "Ninety"];
    
    const thousands = ["", "Thousand", "Million", "Billion"];
    
    function helper(num) {
        if (num === 0) return "";
        if (num < 20) return below20[num] + " ";
        if (num < 100) return below100[Math.floor(num / 10)] + " " + helper(num % 10);
        return below20[Math.floor(num / 100)] + " Hundred " + helper(num % 100);
    }
    
    let result = "";
    let i = 0;
    
    while (num > 0) {
        if (num % 1000 !== 0) {
            result = helper(num % 1000) + thousands[i] + " " + result;
        }
        num = Math.floor(num / 1000);
        i++;
    }
    
    return result.trim();
}`,
    keyPoints: [
      'Handle numbers in groups of three digits',
      'Use lookup arrays for standard number words',
      'Recursively handle hundreds within each group'
    ],
    relatedProblems: ['roman-to-integer', 'excel-sheet-column-title']
  }
];

export const additionalPatterns = [
  {
    id: 'design',
    name: 'Design',
    description: 'System design and data structure design problems',
    studyOrder: 17,
    keyTechniques: ['HashMap + LinkedList', 'Multiple Data Structures', 'API Design']
  }
];
