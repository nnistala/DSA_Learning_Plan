
export interface Problem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  pattern: string;
  companies: string[];
  leetcodeNumber?: number;
  timeComplexity: string;
  spaceComplexity: string;
  description: string;
  approach: string;
  solution: string;
  keyPoints: string[];
  relatedProblems: string[];
  frequency: 'Very High' | 'High' | 'Medium';
}

export interface Pattern {
  id: string;
  name: string;
  description: string;
  problems: Problem[];
  studyOrder: number;
  estimatedDays: number;
  keyTechniques: string[];
}

// Import will be added inline below

// Enhanced DSA Problems Collection for FAANG Interviews
export const patterns: Pattern[] = [
  {
    id: 'array-hashing',
    name: 'Array & Hashing',
    description: 'Fundamental array manipulations and hash table techniques',
    studyOrder: 1,
    estimatedDays: 8,
    keyTechniques: ['Hash Maps', 'Two Pass', 'Frequency Counting', 'Prefix Sums'],
    problems: [
      {
        id: 'contains-duplicate',
        title: 'Contains Duplicate',
        difficulty: 'Easy',
        pattern: 'Array & Hashing',
        companies: ['Microsoft', 'Amazon', 'Apple', 'Airbnb'],
        leetcodeNumber: 217,
        frequency: 'Very High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        description: 'Given an integer array nums, return true if any value appears at least twice in the array.',
        approach: 'Use a hash set to track seen elements. For each element, check if it already exists in the set.',
        solution: `function containsDuplicate(nums) {
    const seen = new Set();
    
    for (let num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    
    return false;
}`,
        keyPoints: [
          'Hash set provides O(1) lookup time',
          'Early return when duplicate found',
          'Space-time tradeoff consideration'
        ],
        relatedProblems: ['valid-anagram', 'two-sum']
      },
      {
        id: 'valid-anagram',
        title: 'Valid Anagram',
        difficulty: 'Easy',
        pattern: 'Array & Hashing',
        companies: ['Facebook', 'Amazon', 'Microsoft', 'Bloomberg'],
        leetcodeNumber: 242,
        frequency: 'Very High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'Given two strings s and t, return true if t is an anagram of s, and false otherwise.',
        approach: 'Count frequency of each character in both strings and compare the counts.',
        solution: `function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    
    const charCount = {};
    
    // Count characters in s
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Subtract characters in t
    for (let char of t) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }
    
    return true;
}`,
        keyPoints: [
          'Character frequency comparison',
          'Early exit if lengths differ',
          'Can use array for lowercase letters optimization'
        ],
        relatedProblems: ['contains-duplicate', 'group-anagrams']
      },
      {
        id: 'two-sum',
        title: 'Two Sum',
        difficulty: 'Easy',
        pattern: 'Array & Hashing',
        companies: ['Google', 'Amazon', 'Microsoft', 'Facebook', 'Apple'],
        leetcodeNumber: 1,
        frequency: 'Very High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
        approach: 'Use hash map to store complement values and their indices. Check if current number exists as a complement.',
        solution: `function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
}`,
        keyPoints: [
          'Hash map for O(1) complement lookup',
          'Store value-to-index mapping',
          'Most frequently asked interview question'
        ],
        relatedProblems: ['three-sum', 'two-sum-ii']
      },
      {
        id: 'group-anagrams',
        title: 'Group Anagrams',
        difficulty: 'Medium',
        pattern: 'Array & Hashing',
        companies: ['Amazon', 'Facebook', 'Microsoft', 'Uber'],
        leetcodeNumber: 49,
        frequency: 'High',
        timeComplexity: 'O(n * m log m)',
        spaceComplexity: 'O(n * m)',
        description: 'Given an array of strings strs, group the anagrams together.',
        approach: 'Sort each string to create a key, then group strings with the same sorted key.',
        solution: `function groupAnagrams(strs) {
    const map = new Map();
    
    for (let str of strs) {
        const key = str.split('').sort().join('');
        
        if (!map.has(key)) {
            map.set(key, []);
        }
        
        map.get(key).push(str);
    }
    
    return Array.from(map.values());
}`,
        keyPoints: [
          'Sorted string as hash key',
          'Group by canonical form',
          'Alternative: character frequency as key'
        ],
        relatedProblems: ['valid-anagram', 'find-all-anagrams']
      },
      {
        id: 'product-except-self',
        title: 'Product of Array Except Self',
        difficulty: 'Medium',
        pattern: 'Array & Hashing',
        companies: ['Amazon', 'Microsoft', 'Facebook', 'Apple'],
        leetcodeNumber: 238,
        frequency: 'Very High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].',
        approach: 'Two passes: left to right for left products, right to left for right products.',
        solution: `function productExceptSelf(nums) {
    const result = Array(nums.length);
    
    // Left products
    result[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    
    // Right products
    let rightProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return result;
}`,
        keyPoints: [
          'Two-pass algorithm',
          'Use result array for left products',
          'Variable for right products'
        ],
        relatedProblems: ['maximum-product-subarray', 'find-pivot-index']
      },
      {
        id: 'encode-decode-strings',
        title: 'Encode and Decode Strings',
        difficulty: 'Medium',
        pattern: 'Array & Hashing',
        companies: ['Google', 'Facebook', 'Amazon'],
        frequency: 'High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        description: 'Design an algorithm to encode a list of strings to a string and decode it back.',
        approach: 'Use length prefix encoding: store length followed by delimiter and string.',
        solution: `function encode(strs) {
    return strs.map(s => s.length + '#' + s).join('');
}

function decode(s) {
    const result = [];
    let i = 0;
    
    while (i < s.length) {
        // Find delimiter
        let j = i;
        while (s[j] !== '#') j++;
        
        // Extract length
        const length = parseInt(s.substring(i, j));
        
        // Extract string
        const str = s.substring(j + 1, j + 1 + length);
        result.push(str);
        
        i = j + 1 + length;
    }
    
    return result;
}`,
        keyPoints: [
          'Length-prefix encoding',
          'Handle special characters safely',
          'Parse length to extract strings'
        ],
        relatedProblems: ['design-compressed-string-iterator']
      },
      {
        id: 'top-k-frequent',
        title: 'Top K Frequent Elements',
        difficulty: 'Medium',
        pattern: 'Array & Hashing',
        companies: ['Amazon', 'Facebook', 'Microsoft', 'Yelp'],
        leetcodeNumber: 347,
        frequency: 'High',
        timeComplexity: 'O(n log k)',
        spaceComplexity: 'O(n + k)',
        description: 'Given an integer array nums and an integer k, return the k most frequent elements.',
        approach: 'Count frequencies with hash map, then use bucket sort or heap to find top k elements.',
        solution: `function topKFrequent(nums, k) {
    const frequencyMap = new Map();
    
    // Count frequencies
    for (let num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    // Bucket sort approach
    const buckets = Array(nums.length + 1).fill(null).map(() => []);
    
    for (let [num, freq] of frequencyMap) {
        buckets[freq].push(num);
    }
    
    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        result.push(...buckets[i]);
    }
    
    return result.slice(0, k);
}`,
        keyPoints: [
          'Frequency counting with hash map',
          'Bucket sort for O(n) time complexity',
          'Alternative: Min heap for O(n log k)'
        ],
        relatedProblems: ['kth-largest-element', 'sort-characters-by-frequency']
      },
      {
        id: 'longest-consecutive-sequence',
        title: 'Longest Consecutive Sequence',
        difficulty: 'Medium',
        pattern: 'Array & Hashing',
        companies: ['Google', 'Facebook', 'Amazon'],
        leetcodeNumber: 128,
        frequency: 'High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        description: 'Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.',
        approach: 'Use hash set for O(1) lookups. For each number, check if it\'s the start of a sequence.',
        solution: `function longestConsecutive(nums) {
    const numSet = new Set(nums);
    let longest = 0;
    
    for (let num of nums) {
        // Check if it's the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }
            
            longest = Math.max(longest, currentStreak);
        }
    }
    
    return longest;
}`,
        keyPoints: [
          'Use hash set for O(1) lookups',
          'Only start counting from sequence beginning',
          'Avoid duplicate work by checking predecessors'
        ],
        relatedProblems: ['missing-ranges', 'binary-tree-longest-consecutive-sequence']
      },
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
      {
        id: 'spiral-matrix',
        title: 'Spiral Matrix',
        difficulty: 'Medium',
        pattern: 'Array & Hashing',
        companies: ['Amazon', 'Google', 'Meta'],
        leetcodeNumber: 54,
        frequency: 'High',
        timeComplexity: 'O(m*n)',
        spaceComplexity: 'O(1)',
        description: 'Given an m x n matrix, return all elements of the matrix in spiral order.',
        approach: 'Use four boundaries (top, bottom, left, right) and move in spiral pattern.',
        solution: `function spiralOrder(matrix) {
    if (!matrix || matrix.length === 0) return [];
    
    const result = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;
    
    while (top <= bottom && left <= right) {
        // Traverse right
        for (let col = left; col <= right; col++) {
            result.push(matrix[top][col]);
        }
        top++;
        
        // Traverse down
        for (let row = top; row <= bottom; row++) {
            result.push(matrix[row][right]);
        }
        right--;
        
        // Traverse left (if we still have rows)
        if (top <= bottom) {
            for (let col = right; col >= left; col--) {
                result.push(matrix[bottom][col]);
            }
            bottom--;
        }
        
        // Traverse up (if we still have columns)
        if (left <= right) {
            for (let row = bottom; row >= top; row--) {
                result.push(matrix[row][left]);
            }
            left++;
        }
    }
    
    return result;
}`,
        keyPoints: [
          'Maintain four boundaries and shrink them as you traverse',
          'Check boundaries before traversing left and up',
          'Handle edge cases with single row or column'
        ],
        relatedProblems: ['spiral-matrix-ii', 'rotate-image']
      },
      {
        id: 'rotate-array',
        title: 'Rotate Array',
        difficulty: 'Medium',
        pattern: 'Array & Hashing',
        companies: ['Amazon', 'Google', 'Microsoft'],
        leetcodeNumber: 189,
        frequency: 'High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'Rotate array to the right by k steps.',
        approach: 'Three reversals: entire array, first k elements, remaining elements.',
        solution: `function rotate(nums, k) {
    k = k % nums.length;
    
    function reverse(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }
    
    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);
}`,
        keyPoints: ['Three reversals technique', 'Handle k > array length with modulo'],
        relatedProblems: ['rotate-image', 'reverse-string']
      },
      {
        id: 'find-all-duplicates',
        title: 'Find All Duplicates in an Array',
        difficulty: 'Medium',
        pattern: 'Array & Hashing',
        companies: ['Amazon', 'Google'],
        leetcodeNumber: 442,
        frequency: 'Medium',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'Find all elements that appear twice in an array.',
        approach: 'Use array indices as hash. Mark visited by negating values.',
        solution: `function findDuplicates(nums) {
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;
        
        if (nums[index] < 0) {
            result.push(index + 1);
        } else {
            nums[index] = -nums[index];
        }
    }
    
    return result;
}`,
        keyPoints: ['Use sign to mark visited elements', 'Array indices as hash table'],
        relatedProblems: ['find-disappeared-numbers', 'first-missing-positive']
      },
      {
        id: 'maximum-subarray',
        title: 'Maximum Subarray',
        difficulty: 'Medium',
        pattern: 'Array & Hashing',
        companies: ['Amazon', 'Google', 'Meta'],
        leetcodeNumber: 53,
        frequency: 'Very High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'Find the contiguous subarray with the largest sum.',
        approach: 'Kadane\'s algorithm. Reset sum to 0 when it becomes negative.',
        solution: `function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}`,
        keyPoints: ['Kadane\'s algorithm', 'Reset when sum becomes negative'],
        relatedProblems: ['maximum-product-subarray', 'maximum-sum-circular-subarray']
      },
      {
        id: 'merge-sorted-array',
        title: 'Merge Sorted Array',
        difficulty: 'Easy',
        pattern: 'Array & Hashing',
        companies: ['Amazon', 'Google', 'Meta'],
        leetcodeNumber: 88,
        frequency: 'High',
        timeComplexity: 'O(m + n)',
        spaceComplexity: 'O(1)',
        description: 'Merge nums2 into nums1 in sorted order.',
        approach: 'Start from the end to avoid overwriting. Use three pointers.',
        solution: `function merge(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, k = m + n - 1;
    
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}`,
        keyPoints: ['Start from end to avoid overwriting', 'Three pointers technique'],
        relatedProblems: ['merge-two-sorted-lists', 'sort-colors']
      }
    ]
  },
  {
    id: 'two-pointers',
    name: 'Two Pointers',
    description: 'Efficient array/string traversal using two pointers',
    studyOrder: 2,
    estimatedDays: 6,
    keyTechniques: ['Left-Right Pointers', 'Fast-Slow Pointers', 'Same Direction'],
    problems: [
      {
        id: 'valid-palindrome',
        title: 'Valid Palindrome',
        difficulty: 'Easy',
        pattern: 'Two Pointers',
        companies: ['Microsoft', 'Facebook', 'Amazon', 'Palantir'],
        leetcodeNumber: 125,
        frequency: 'Very High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.',
        approach: 'Use two pointers from start and end, skip non-alphanumeric characters, compare characters.',
        solution: `function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Skip non-alphanumeric characters
        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }
        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }
        
        // Compare characters
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        
        left++;
        right--;
    }
    
    return true;
}

function isAlphaNumeric(char) {
    return /[a-zA-Z0-9]/.test(char);
}`,
        keyPoints: [
          'Two pointers technique',
          'Character filtering and normalization',
          'O(1) space complexity'
        ],
        relatedProblems: ['palindrome-linked-list', 'longest-palindromic-substring']
      },
      {
        id: 'three-sum',
        title: '3Sum',
        difficulty: 'Medium',
        pattern: 'Two Pointers',
        companies: ['Facebook', 'Amazon', 'Microsoft', 'Adobe'],
        leetcodeNumber: 15,
        frequency: 'Very High',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(1)',
        description: 'Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.',
        approach: 'Sort array, fix first element, use two pointers for remaining two elements.',
        solution: `function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicates for first element
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                
                // Skip duplicates
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return result;
}`,
        keyPoints: [
          'Sort first to enable two pointers',
          'Skip duplicates to avoid duplicate triplets',
          'Classic two pointers pattern'
        ],
        relatedProblems: ['two-sum', 'four-sum', 'three-sum-closest']
      },
      {
        id: 'container-most-water',
        title: 'Container With Most Water',
        difficulty: 'Medium',
        pattern: 'Two Pointers',
        companies: ['Amazon', 'Facebook', 'Microsoft', 'Bloomberg'],
        leetcodeNumber: 11,
        frequency: 'Very High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'You are given an integer array height of length n. Find two lines that together with the x-axis form a container that can hold the most water.',
        approach: 'Use two pointers at both ends. Move the pointer with smaller height inward to potentially find larger area.',
        solution: `function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;
    
    while (left < right) {
        const currentArea = Math.min(height[left], height[right]) * (right - left);
        maxWater = Math.max(maxWater, currentArea);
        
        // Move pointer with smaller height
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxWater;
}`,
        keyPoints: [
          'Greedy approach with two pointers',
          'Move smaller height pointer',
          'Area = min(height1, height2) * width'
        ],
        relatedProblems: ['trapping-rain-water', 'largest-rectangle-histogram']
      },
      {
        id: 'trapping-rain-water',
        title: 'Trapping Rain Water',
        difficulty: 'Hard',
        pattern: 'Two Pointers',
        companies: ['Amazon', 'Facebook', 'Microsoft', 'Google', 'Apple'],
        leetcodeNumber: 42,
        frequency: 'Very High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
        approach: 'Use two pointers with max height tracking from both sides.',
        solution: `function trap(height) {
    if (height.length < 3) return 0;
    
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let water = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    
    return water;
}`,
        keyPoints: [
          'Two pointers with max height tracking',
          'Water level = min(leftMax, rightMax) - current',
          'Move pointer with smaller max height'
        ],
        relatedProblems: ['container-most-water', 'largest-rectangle-histogram']
      },
      {
        id: 'remove-nth-node-from-end',
        title: 'Remove Nth Node From End of List',
        difficulty: 'Medium',
        pattern: 'Linked List',
        companies: ['Amazon', 'Microsoft', 'Facebook', 'Apple'],
        leetcodeNumber: 19,
        frequency: 'Very High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'Given the head of a linked list, remove the nth node from the end of the list and return its head.',
        approach: 'Use two pointers with n gap between them. When fast reaches end, slow is at target.',
        solution: `function removeNthFromEnd(head, n) {
    const dummy = { next: head };
    let fast = dummy;
    let slow = dummy;
    
    // Move fast n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }
    
    // Move both until fast reaches end
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    
    // Remove the nth node
    slow.next = slow.next.next;
    
    return dummy.next;
}`,
        keyPoints: [
          'Two pointers with gap of n',
          'Use dummy node for edge cases',
          'One pass solution'
        ],
        relatedProblems: ['delete-node-linked-list', 'swap-nodes-pairs']
      },
      {
        id: 'reorder-list',
        title: 'Reorder List',
        difficulty: 'Medium',
        pattern: 'Linked List',
        companies: ['Amazon', 'Facebook', 'Microsoft'],
        leetcodeNumber: 143,
        frequency: 'High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'You are given the head of a singly linked-list. Reorder the list to be L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …',
        approach: 'Find middle, reverse second half, merge alternately.',
        solution: `function reorderList(head) {
    if (!head || !head.next) return;
    
    // Find middle
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Reverse second half
    let second = slow.next;
    slow.next = null;
    
    function reverse(head) {
        let prev = null;
        while (head) {
            const next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        return prev;
    }
    
    second = reverse(second);
    
    // Merge alternately
    let first = head;
    while (second) {
        const temp1 = first.next;
        const temp2 = second.next;
        
        first.next = second;
        second.next = temp1;
        
        first = temp1;
        second = temp2;
    }
}`,
        keyPoints: [
          'Three steps: find middle, reverse, merge',
          'Use slow/fast pointers to find middle',
          'Merge alternately from both halves'
        ],
        relatedProblems: ['reverse-linked-list', 'palindrome-linked-list']
      },
      {
        id: 'squares-sorted-array',
        title: 'Squares of a Sorted Array',
        difficulty: 'Easy',
        pattern: 'Two Pointers',
        companies: ['Amazon', 'Google', 'Meta'],
        leetcodeNumber: 977,
        frequency: 'Medium',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        description: 'Given an integer array sorted in non-decreasing order, return array of squares in sorted order.',
        approach: 'Two pointers from both ends. Compare absolute values and place larger squares from the end.',
        solution: `function sortedSquares(nums) {
    const result = new Array(nums.length);
    let left = 0, right = nums.length - 1;
    let pos = nums.length - 1;
    
    while (left <= right) {
        const leftSquare = nums[left] * nums[left];
        const rightSquare = nums[right] * nums[right];
        
        if (leftSquare > rightSquare) {
            result[pos] = leftSquare;
            left++;
        } else {
            result[pos] = rightSquare;
            right--;
        }
        pos--;
    }
    
    return result;
}`,
        keyPoints: ['Two pointers from both ends', 'Fill result array from right to left', 'Compare absolute values'],
        relatedProblems: ['sort-colors', 'merge-sorted-array']
      },
      {
        id: 'sort-colors',
        title: 'Sort Colors',
        difficulty: 'Medium',
        pattern: 'Two Pointers',
        companies: ['Amazon', 'Google', 'Meta'],
        leetcodeNumber: 75,
        frequency: 'High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'Sort an array with only 0s, 1s, and 2s in-place.',
        approach: 'Dutch National Flag algorithm with three pointers.',
        solution: `function sortColors(nums) {
    let left = 0, right = nums.length - 1, current = 0;
    
    while (current <= right) {
        if (nums[current] === 0) {
            [nums[left], nums[current]] = [nums[current], nums[left]];
            left++;
            current++;
        } else if (nums[current] === 2) {
            [nums[current], nums[right]] = [nums[right], nums[current]];
            right--;
        } else {
            current++;
        }
    }
}`,
        keyPoints: ['Three pointers for three regions', 'Dutch National Flag algorithm', 'Handle swapped elements carefully'],
        relatedProblems: ['partition-array', 'wiggle-sort']
      },
      {
        id: 'remove-duplicates-ii',
        title: 'Remove Duplicates from Sorted Array II',
        difficulty: 'Medium',
        pattern: 'Two Pointers',
        companies: ['Amazon', 'Google'],
        leetcodeNumber: 80,
        frequency: 'Medium',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'Remove duplicates such that each unique element appears at most twice.',
        approach: 'Two pointers with count tracking. Allow up to 2 occurrences.',
        solution: `function removeDuplicates(nums) {
    if (nums.length <= 2) return nums.length;
    
    let writeIndex = 2;
    
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[writeIndex - 2]) {
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }
    
    return writeIndex;
}`,
        keyPoints: ['Compare with element 2 positions back', 'Write pointer tracks valid position', 'Generalized for k duplicates'],
        relatedProblems: ['remove-duplicates-sorted-array', 'remove-element']
      },
      {
        id: 'backspace-string-compare',
        title: 'Backspace String Compare',
        difficulty: 'Easy',
        pattern: 'Two Pointers',
        companies: ['Google', 'Meta', 'Microsoft'],
        leetcodeNumber: 844,
        frequency: 'Medium',
        timeComplexity: 'O(m + n)',
        spaceComplexity: 'O(1)',
        description: 'Compare two strings after processing backspaces (#).',
        approach: 'Process strings from right to left with two pointers.',
        solution: `function backspaceCompare(s, t) {
    let i = s.length - 1, j = t.length - 1;
    let skipS = 0, skipT = 0;
    
    while (i >= 0 || j >= 0) {
        while (i >= 0) {
            if (s[i] === '#') {
                skipS++;
                i--;
            } else if (skipS > 0) {
                skipS--;
                i--;
            } else {
                break;
            }
        }
        
        while (j >= 0) {
            if (t[j] === '#') {
                skipT++;
                j--;
            } else if (skipT > 0) {
                skipT--;
                j--;
            } else {
                break;
            }
        }
        
        if (i >= 0 && j >= 0 && s[i] !== t[j]) return false;
        if ((i >= 0) !== (j >= 0)) return false;
        
        i--;
        j--;
    }
    
    return true;
}`,
        keyPoints: ['Process from right to left', 'Handle backspaces with skip counters', 'Compare valid characters only'],
        relatedProblems: ['valid-palindrome', 'string-compression']
      },
      {
        id: 'minimum-size-subarray-sum',
        title: 'Minimum Size Subarray Sum',
        difficulty: 'Medium',
        pattern: 'Two Pointers',
        companies: ['Amazon', 'Google', 'Meta'],
        leetcodeNumber: 209,
        frequency: 'High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'Find minimum length of subarray with sum >= target.',
        approach: 'Sliding window with two pointers. Expand right, contract left when sum >= target.',
        solution: `function minSubArrayLen(target, nums) {
    let left = 0, sum = 0, minLength = Infinity;
    
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        
        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }
    
    return minLength === Infinity ? 0 : minLength;
}`,
        keyPoints: ['Sliding window technique', 'Contract window when condition met', 'Track minimum length seen'],
        relatedProblems: ['longest-substring-without-repeating', 'maximum-size-subarray-sum']
      },
      {
        id: 'move-zeroes',
        title: 'Move Zeroes',
        difficulty: 'Easy',
        pattern: 'Two Pointers',
        companies: ['Amazon', 'Microsoft', 'Google'],
        leetcodeNumber: 283,
        frequency: 'High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'Given an integer array nums, move all 0\'s to the end of it while maintaining the relative order of the non-zero elements.',
        approach: 'Use two pointers: one for writing position, one for reading. Overwrite zeros with non-zeros.',
        solution: `function moveZeroes(nums) {
    let writeIndex = 0;
    
    for (let readIndex = 0; readIndex < nums.length; readIndex++) {
        if (nums[readIndex] !== 0) {
            nums[writeIndex] = nums[readIndex];
            writeIndex++;
        }
    }
    
    // Fill remaining positions with zeros
    for (let i = writeIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
}`,
        keyPoints: [
          'Two pointers: read and write',
          'Overwrite zeros with non-zeros',
          'Fill remaining with zeros'
        ],
        relatedProblems: ['remove-element', 'remove-duplicates-sorted-array']
      },
      {
        id: 'remove-element',
        title: 'Remove Element',
        difficulty: 'Easy',
        pattern: 'Two Pointers',
        companies: ['Amazon', 'Microsoft', 'Google'],
        leetcodeNumber: 27,
        frequency: 'Medium',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.',
        approach: 'Use two pointers: one for writing position, one for reading. Skip target values.',
        solution: `function removeElement(nums, val) {
    let writeIndex = 0;
    
    for (let readIndex = 0; readIndex < nums.length; readIndex++) {
        if (nums[readIndex] !== val) {
            nums[writeIndex] = nums[readIndex];
            writeIndex++;
        }
    }
    
    return writeIndex;
}`,
        keyPoints: [
          'Two pointers technique',
          'Overwrite target values',
          'Return new length'
        ],
        relatedProblems: ['move-zeroes', 'remove-duplicates-sorted-array']
      }
    ]
  },
  {
    id: 'stack',
    name: 'Stack',
    description: 'LIFO operations and bracket/parentheses problems',
    studyOrder: 3,
    estimatedDays: 4,
    keyTechniques: ['LIFO Operations', 'Bracket Matching', 'Monotonic Stack'],
    problems: [
      {
        id: 'valid-parentheses',
        title: 'Valid Parentheses',
        difficulty: 'Easy',
        pattern: 'Stack',
        companies: ['Amazon', 'Microsoft', 'Facebook', 'Google', 'Bloomberg'],
        leetcodeNumber: 20,
        frequency: 'Very High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        description: 'Given a string s containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid.',
        approach: 'Use stack to match opening brackets with corresponding closing brackets.',
        solution: `function isValid(s) {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}`,
        keyPoints: [
          'Stack for bracket matching',
          'Map closing to opening brackets',
          'Check stack empty at end'
        ],
        relatedProblems: ['min-remove-valid-parentheses', 'generate-parentheses']
      },
      {
        id: 'evaluate-reverse-polish-notation',
        title: 'Evaluate Reverse Polish Notation',
        difficulty: 'Medium',
        pattern: 'Stack',
        companies: ['Amazon', 'LinkedIn', 'Microsoft'],
        leetcodeNumber: 150,
        frequency: 'Medium',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        description: 'Evaluate the value of an arithmetic expression in Reverse Polish Notation.',
        approach: 'Use stack to store operands. When operator found, pop two operands and push result.',
        solution: `function evalRPN(tokens) {
    const stack = [];
    
    for (let token of tokens) {
        if (['+', '-', '*', '/'].includes(token)) {
            const b = stack.pop();
            const a = stack.pop();
            
            switch (token) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(Math.trunc(a / b));
                    break;
            }
        } else {
            stack.push(parseInt(token));
        }
    }
    
    return stack[0];
}`,
        keyPoints: [
          'Stack for operand storage',
          'Pop two operands for binary operations',
          'Handle division truncation correctly'
        ],
        relatedProblems: ['basic-calculator', 'basic-calculator-ii']
      },
      {
        id: 'generate-parentheses',
        title: 'Generate Parentheses',
        difficulty: 'Medium',
        pattern: 'Stack',
        companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'],
        leetcodeNumber: 22,
        frequency: 'High',
        timeComplexity: 'O(4^n / √n)',
        spaceComplexity: 'O(4^n / √n)',
        description: 'Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.',
        approach: 'Use backtracking with constraints: open < n and close < open.',
        solution: `function generateParenthesis(n) {
    const result = [];
    
    function backtrack(current, open, close) {
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }
        
        if (open < n) {
            backtrack(current + '(', open + 1, close);
        }
        
        if (close < open) {
            backtrack(current + ')', open, close + 1);
        }
    }
    
    backtrack('', 0, 0);
    return result;
}`,
        keyPoints: [
          'Backtracking with valid constraints',
          'Open parentheses can\'t exceed n',
          'Close parentheses can\'t exceed open'
        ],
        relatedProblems: ['valid-parentheses', 'remove-invalid-parentheses']
      },
      {
        id: 'min-stack',
        title: 'Min Stack',
        difficulty: 'Medium',
        pattern: 'Stack',
        companies: ['Amazon', 'Microsoft', 'Bloomberg', 'Google'],
        leetcodeNumber: 155,
        frequency: 'Very High',
        timeComplexity: 'O(1)',
        spaceComplexity: 'O(n)',
        description: 'Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.',
        approach: 'Use auxiliary stack to track minimum values or store differences.',
        solution: `class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    
    push(val) {
        this.stack.push(val);
        
        // Update min stack
        if (this.minStack.length === 0 || val <= this.getMin()) {
            this.minStack.push(val);
        }
    }
    
    pop() {
        const popped = this.stack.pop();
        
        if (popped === this.getMin()) {
            this.minStack.pop();
        }
        
        return popped;
    }
    
    top() {
        return this.stack[this.stack.length - 1];
    }
    
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}`,
        keyPoints: [
          'Auxiliary stack for minimums',
          'Push to min stack when new minimum',
          'Pop from min stack when minimum removed'
        ],
        relatedProblems: ['max-stack', 'sliding-window-maximum']
      },
      {
        id: 'largest-rectangle-histogram',
        title: 'Largest Rectangle in Histogram',
        difficulty: 'Hard',
        pattern: 'Stack',
        companies: ['Amazon', 'Google', 'Meta'],
        leetcodeNumber: 84,
        frequency: 'High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        description: 'Find the area of the largest rectangle in histogram.',
        approach: 'Use stack to track increasing heights. Calculate area when height decreases.',
        solution: `function largestRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;
    
    for (let i = 0; i <= heights.length; i++) {
        const currentHeight = i === heights.length ? 0 : heights[i];
        
        while (stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        
        stack.push(i);
    }
    
    return maxArea;
}`,
        keyPoints: ['Stack maintains increasing heights', 'Calculate area when popping', 'Add sentinel 0 at end'],
        relatedProblems: ['maximal-rectangle', 'remove-k-digits']
      },
      {
        id: 'daily-temperatures',
        title: 'Daily Temperatures',
        difficulty: 'Medium',
        pattern: 'Stack',
        companies: ['Amazon', 'Google', 'Meta'],
        leetcodeNumber: 739,
        frequency: 'High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        description: 'Find how many days until warmer temperature for each day.',
        approach: 'Monotonic decreasing stack. Pop when finding warmer temperature.',
        solution: `function dailyTemperatures(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = [];
    
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }
    
    return result;
}`,
        keyPoints: ['Monotonic stack pattern', 'Store indices not values', 'Pop when condition met'],
        relatedProblems: ['next-greater-element', 'online-stock-span']
      },
      {
        id: 'next-greater-element',
        title: 'Next Greater Element I',
        difficulty: 'Easy',
        pattern: 'Stack',
        companies: ['Amazon', 'Google'],
        leetcodeNumber: 496,
        frequency: 'Medium',
        timeComplexity: 'O(m + n)',
        spaceComplexity: 'O(n)',
        description: 'Find next greater element for each element in nums1 using nums2.',
        approach: 'Use stack to precompute next greater elements in nums2, then lookup.',
        solution: `function nextGreaterElement(nums1, nums2) {
    const stack = [];
    const nextGreater = new Map();
    
    // Find next greater for all elements in nums2
    for (let num of nums2) {
        while (stack.length > 0 && stack[stack.length - 1] < num) {
            nextGreater.set(stack.pop(), num);
        }
        stack.push(num);
    }
    
    // Lookup for nums1
    return nums1.map(num => nextGreater.get(num) || -1);
}`,
        keyPoints: ['Precompute with monotonic stack', 'Use HashMap for O(1) lookup', 'Handle elements with no greater'],
        relatedProblems: ['daily-temperatures', 'next-greater-element-ii']
      },
      {
        id: 'remove-k-digits',
        title: 'Remove K Digits',
        difficulty: 'Medium',
        pattern: 'Stack',
        companies: ['Amazon', 'Google', 'Meta'],
        leetcodeNumber: 402,
        frequency: 'Medium',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        description: 'Remove k digits from number to make smallest possible number.',
        approach: 'Use stack to maintain increasing sequence. Remove larger digits first.',
        solution: `function removeKdigits(num, k) {
    const stack = [];
    let removals = k;
    
    for (let digit of num) {
        while (stack.length > 0 && stack[stack.length - 1] > digit && removals > 0) {
            stack.pop();
            removals--;
        }
        stack.push(digit);
    }
    
    // Remove remaining digits from end
    while (removals > 0) {
        stack.pop();
        removals--;
    }
    
    // Handle leading zeros and empty result
    const result = stack.join('').replace(/^0+/, '');
    return result || '0';
}`,
        keyPoints: ['Greedy removal using monotonic stack', 'Remove larger digits first', 'Handle edge cases: leading zeros, empty result'],
        relatedProblems: ['create-maximum-number', 'smallest-subsequence']
      },
      {
        id: 'decode-string',
        title: 'Decode String',
        difficulty: 'Medium',
        pattern: 'Stack',
        companies: ['Amazon', 'Google', 'Meta'],
        leetcodeNumber: 394,
        frequency: 'High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        description: 'Decode string with pattern k[encoded_string].',
        approach: 'Use stack to handle nested brackets. Track counts and strings separately.',
        solution: `function decodeString(s) {
    const stack = [];
    let currentString = '';
    let currentNum = 0;
    
    for (let char of s) {
        if (char >= '0' && char <= '9') {
            currentNum = currentNum * 10 + parseInt(char);
        } else if (char === '[') {
            stack.push([currentString, currentNum]);
            currentString = '';
            currentNum = 0;
        } else if (char === ']') {
            const [prevString, count] = stack.pop();
            currentString = prevString + currentString.repeat(count);
        } else {
            currentString += char;
        }
    }
    
    return currentString;
}`,
        keyPoints: ['Stack stores string and count pairs', 'Build number digit by digit', 'Handle nested brackets correctly'],
        relatedProblems: ['basic-calculator', 'parse-lisp-expression']
      },
      {
        id: 'asteroid-collision',
        title: 'Asteroid Collision',
        difficulty: 'Medium',
        pattern: 'Stack',
        companies: ['Amazon', 'Google'],
        leetcodeNumber: 735,
        frequency: 'Medium',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        description: 'Find the final state after all asteroid collisions.',
        approach: 'Use stack to track moving right asteroids. Handle collisions when left-moving found.',
        solution: `function asteroidCollision(asteroids) {
    const stack = [];
    
    for (let asteroid of asteroids) {
        let survived = true;
        
        while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
            const top = stack[stack.length - 1];
            
            if (Math.abs(asteroid) > top) {
                stack.pop();
            } else if (Math.abs(asteroid) === top) {
                stack.pop();
                survived = false;
                break;
            } else {
                survived = false;
                break;
            }
        }
        
        if (survived) {
            stack.push(asteroid);
        }
    }
    
    return stack;
}`,
        keyPoints: ['Stack tracks right-moving asteroids', 'Handle three collision outcomes', 'Only positive/negative collide'],
        relatedProblems: ['car-fleet', 'remove-all-adjacent-duplicates']
      }
    ]
  },
  {
    id: 'sliding-window',
    name: 'Sliding Window',
    description: 'Optimized substring and subarray problems',
    studyOrder: 3,
    estimatedDays: 5,
    keyTechniques: ['Fixed Window', 'Variable Window', 'Window Expansion/Contraction'],
    problems: [
      {
        id: 'best-time-to-buy-sell-stock',
        title: 'Best Time to Buy and Sell Stock',
        difficulty: 'Easy',
        pattern: 'Sliding Window',
        companies: ['Amazon', 'Facebook', 'Microsoft', 'Bloomberg', 'Goldman Sachs'],
        leetcodeNumber: 121,
        frequency: 'Very High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'You are given an array prices where prices[i] is the price of a given stock on the ith day. Find the maximum profit.',
        approach: 'Track minimum price seen so far and calculate profit at each step.',
        solution: `function maxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        const currentProfit = prices[i] - minPrice;
        maxProfit = Math.max(maxProfit, currentProfit);
        minPrice = Math.min(minPrice, prices[i]);
    }
    
    return maxProfit;
}`,
        keyPoints: [
          'Track minimum price dynamically',
          'Calculate profit at each step',
          'Classic sliding window variant'
        ],
        relatedProblems: ['buy-sell-stock-ii', 'buy-sell-stock-with-cooldown']
      },
      {
        id: 'longest-substring-without-repeating',
        title: 'Longest Substring Without Repeating Characters',
        difficulty: 'Medium',
        pattern: 'Sliding Window',
        companies: ['Amazon', 'Microsoft', 'Facebook', 'Adobe'],
        leetcodeNumber: 3,
        frequency: 'Very High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(min(m,n))',
        description: 'Given a string s, find the length of the longest substring without repeating characters.',
        approach: 'Use sliding window with hash set. Expand window and contract when duplicate found.',
        solution: `function lengthOfLongestSubstring(s) {
    const charSet = new Set();
    let left = 0;
    let maxLength = 0;
    
    for (let right = 0; right < s.length; right++) {
        // Contract window until no duplicates
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}`,
        keyPoints: [
          'Variable sliding window',
          'Contract window on duplicates',
          'Track maximum window size'
        ],
        relatedProblems: ['longest-repeating-character-replacement', 'minimum-window-substring']
      },
      {
        id: 'longest-repeating-character-replacement',
        title: 'Longest Repeating Character Replacement',
        difficulty: 'Medium',
        pattern: 'Sliding Window',
        companies: ['Microsoft', 'Amazon', 'Facebook'],
        leetcodeNumber: 424,
        frequency: 'High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times. Return the length of the longest substring containing the same letter you can get after performing the above operations.',
        approach: 'Use sliding window with character frequency count. Expand window while replacements needed ≤ k.',
        solution: `function characterReplacement(s, k) {
    const charCount = {};
    let left = 0;
    let maxLength = 0;
    let maxFreq = 0;
    
    for (let right = 0; right < s.length; right++) {
        charCount[s[right]] = (charCount[s[right]] || 0) + 1;
        maxFreq = Math.max(maxFreq, charCount[s[right]]);
        
        // Contract window if replacements needed > k
        const windowLength = right - left + 1;
        if (windowLength - maxFreq > k) {
            charCount[s[left]]--;
            left++;
        }
        
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}`,
        keyPoints: [
          'Track max frequency in current window',
          'Replacements needed = window_length - max_freq',
          'Contract window when k exceeded'
        ],
        relatedProblems: ['longest-substring-without-repeating', 'minimum-window-substring']
      },
      {
        id: 'minimum-window-substring',
        title: 'Minimum Window Substring',
        difficulty: 'Hard',
        pattern: 'Sliding Window',
        companies: ['Facebook', 'Amazon', 'Microsoft', 'Uber'],
        leetcodeNumber: 76,
        frequency: 'High',
        timeComplexity: 'O(n + m)',
        spaceComplexity: 'O(m)',
        description: 'Given two strings s and t, return the minimum window substring of s such that every character in t is included in the window.',
        approach: 'Use sliding window with character frequency map. Expand until valid, then contract to find minimum.',
        solution: `function minWindow(s, t) {
    if (s.length < t.length) return "";
    
    const tCount = {};
    for (let char of t) {
        tCount[char] = (tCount[char] || 0) + 1;
    }
    
    const windowCount = {};
    let left = 0;
    let minLen = Infinity;
    let minStart = 0;
    let formed = 0;
    const required = Object.keys(tCount).length;
    
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        windowCount[char] = (windowCount[char] || 0) + 1;
        
        if (tCount[char] && windowCount[char] === tCount[char]) {
            formed++;
        }
        
        while (left <= right && formed === required) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }
            
            const leftChar = s[left];
            windowCount[leftChar]--;
            if (tCount[leftChar] && windowCount[leftChar] < tCount[leftChar]) {
                formed--;
            }
            left++;
        }
    }
    
    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}`,
        keyPoints: [
          'Complex sliding window with frequency matching',
          'Track formation of valid window',
          'Contract window when valid'
        ],
        relatedProblems: ['longest-substring-without-repeating', 'substring-with-concatenation']
      },
      {
        id: 'permutation-in-string',
        title: 'Permutation in String',
        difficulty: 'Medium',
        pattern: 'Sliding Window',
        companies: ['Microsoft', 'Facebook', 'Amazon'],
        leetcodeNumber: 567,
        frequency: 'Medium',
        timeComplexity: 'O(n + m)',
        spaceComplexity: 'O(m)',
        description: 'Given two strings s1 and s2, return true if s2 contains a permutation of s1.',
        approach: 'Use fixed-size sliding window with character frequency matching.',
        solution: `function checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;
    
    const s1Count = {};
    const windowCount = {};
    
    // Count characters in s1
    for (let char of s1) {
        s1Count[char] = (s1Count[char] || 0) + 1;
    }
    
    const windowSize = s1.length;
    
    for (let i = 0; i < s2.length; i++) {
        // Add current character
        const char = s2[i];
        windowCount[char] = (windowCount[char] || 0) + 1;
        
        // Remove character outside window
        if (i >= windowSize) {
            const leftChar = s2[i - windowSize];
            windowCount[leftChar]--;
            if (windowCount[leftChar] === 0) {
                delete windowCount[leftChar];
            }
        }
        
        // Check if window matches s1
        if (i >= windowSize - 1) {
            if (JSON.stringify(s1Count) === JSON.stringify(windowCount)) {
                return true;
            }
        }
    }
    
    return false;
}`,
        keyPoints: [
          'Fixed-size sliding window',
          'Character frequency matching',
          'Efficient window maintenance'
        ],
        relatedProblems: ['find-all-anagrams', 'minimum-window-substring']
      },
      {
        id: 'find-all-anagrams',
        title: 'Find All Anagrams in a String',
        difficulty: 'Medium',
        pattern: 'Sliding Window',
        companies: ['Amazon', 'Facebook', 'Microsoft'],
        leetcodeNumber: 438,
        frequency: 'Medium',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'Given two strings s and p, return an array of all the start indices of p\'s anagrams in s.',
        approach: 'Use sliding window with character frequency matching.',
        solution: `function findAnagrams(s, p) {
    if (s.length < p.length) return [];
    
    const result = [];
    const pCount = {};
    const windowCount = {};
    
    // Count characters in p
    for (let char of p) {
        pCount[char] = (pCount[char] || 0) + 1;
    }
    
    const windowSize = p.length;
    
    for (let i = 0; i < s.length; i++) {
        // Add current character
        const char = s[i];
        windowCount[char] = (windowCount[char] || 0) + 1;
        
        // Remove character outside window
        if (i >= windowSize) {
            const leftChar = s[i - windowSize];
            windowCount[leftChar]--;
            if (windowCount[leftChar] === 0) {
                delete windowCount[leftChar];
            }
        }
        
        // Check if window matches p
        if (i >= windowSize - 1) {
            if (JSON.stringify(pCount) === JSON.stringify(windowCount)) {
                result.push(i - windowSize + 1);
            }
        }
    }
    
    return result;
}`,
        keyPoints: [
          'Fixed-size sliding window',
          'Character frequency matching',
          'Collect all valid starting indices'
        ],
        relatedProblems: ['permutation-in-string', 'group-anagrams']
      },
      {
        id: 'sliding-window-maximum',
        title: 'Sliding Window Maximum',
        difficulty: 'Hard',
        pattern: 'Sliding Window',
        companies: ['Amazon', 'Google', 'Meta'],
        leetcodeNumber: 239,
        frequency: 'High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(k)',
        description: 'Return the maximum element in each sliding window of size k.',
        approach: 'Use deque to maintain decreasing order of elements in current window.',
        solution: `function maxSlidingWindow(nums, k) {
    const result = [];
    const deque = []; // stores indices
    
    for (let i = 0; i < nums.length; i++) {
        // Remove indices outside current window
        while (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }
        
        // Remove indices of smaller elements
        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop();
        }
        
        deque.push(i);
        
        // Add to result when window is complete
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    
    return result;
}`,
        keyPoints: ['Deque maintains decreasing order', 'Store indices not values', 'Remove outdated indices'],
        relatedProblems: ['sliding-window-median', 'constrained-subsequence-sum']
      },
      {
        id: 'fruits-into-baskets',
        title: 'Fruit Into Baskets',
        difficulty: 'Medium',
        pattern: 'Sliding Window',
        companies: ['Amazon', 'Google'],
        leetcodeNumber: 904,
        frequency: 'Medium',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'Find the maximum number of fruits you can collect with at most 2 types.',
        approach: 'Sliding window with at most 2 distinct elements.',
        solution: `function totalFruit(fruits) {
    const count = new Map();
    let left = 0, maxFruits = 0;
    
    for (let right = 0; right < fruits.length; right++) {
        count.set(fruits[right], (count.get(fruits[right]) || 0) + 1);
        
        while (count.size > 2) {
            count.set(fruits[left], count.get(fruits[left]) - 1);
            if (count.get(fruits[left]) === 0) {
                count.delete(fruits[left]);
            }
            left++;
        }
        
        maxFruits = Math.max(maxFruits, right - left + 1);
    }
    
    return maxFruits;
}`,
        keyPoints: ['At most 2 distinct elements', 'Contract window when > 2 types', 'Track maximum window size'],
        relatedProblems: ['longest-substring-k-distinct', 'subarrays-k-different']
      },
      {
        id: 'max-consecutive-ones-iii',
        title: 'Max Consecutive Ones III',
        difficulty: 'Medium',
        pattern: 'Sliding Window',
        companies: ['Amazon', 'Google'],
        leetcodeNumber: 1004,
        frequency: 'Medium',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'Find max consecutive 1s if you can flip at most k zeros.',
        approach: 'Sliding window tracking zeros count. Contract when zeros > k.',
        solution: `function longestOnes(nums, k) {
    let left = 0, maxLength = 0, zerosCount = 0;
    
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) zerosCount++;
        
        while (zerosCount > k) {
            if (nums[left] === 0) zerosCount--;
            left++;
        }
        
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}`,
        keyPoints: ['Track zeros count in window', 'Contract when zeros exceed k', 'Track maximum valid window'],
        relatedProblems: ['max-consecutive-ones', 'longest-repeating-character-replacement']
      },
      {
        id: 'substring-with-concatenation',
        title: 'Substring with Concatenation of All Words',
        difficulty: 'Hard',
        pattern: 'Sliding Window',
        companies: ['Amazon', 'Google', 'Meta'],
        leetcodeNumber: 30,
        frequency: 'Medium',
        timeComplexity: 'O(n * m)',
        spaceComplexity: 'O(m)',
        description: 'Find all starting indices where concatenation of all words appears.',
        approach: 'Fixed-size sliding window with word frequency matching.',
        solution: `function findSubstring(s, words) {
    if (!s || !words || words.length === 0) return [];
    
    const result = [];
    const wordLen = words[0].length;
    const totalLen = wordLen * words.length;
    const wordCount = {};
    
    // Count words
    for (let word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }
    
    for (let i = 0; i <= s.length - totalLen; i++) {
        const seen = {};
        let j = 0;
        
        while (j < words.length) {
            const word = s.substr(i + j * wordLen, wordLen);
            if (!wordCount[word]) break;
            
            seen[word] = (seen[word] || 0) + 1;
            if (seen[word] > wordCount[word]) break;
            
            j++;
        }
        
        if (j === words.length) result.push(i);
    }
    
    return result;
}`,
        keyPoints: ['Fixed-size window equals total word length', 'Word frequency matching', 'Break early on invalid words'],
        relatedProblems: ['minimum-window-substring', 'find-all-anagrams']
      }
    ]
  },
  {
    id: 'binary-tree',
    name: 'Binary Tree',
    description: 'Tree traversal, manipulation, and property validation',
    studyOrder: 4,
    estimatedDays: 10,
    keyTechniques: ['DFS', 'BFS', 'Recursion', 'Tree Properties'],
    problems: [
      {
        id: 'invert-binary-tree',
        title: 'Invert Binary Tree',
        difficulty: 'Easy',
        pattern: 'Binary Tree',
        companies: ['Google', 'Amazon', 'Microsoft', 'Facebook'],
        leetcodeNumber: 226,
        frequency: 'Very High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(h)',
        description: 'Given the root of a binary tree, invert the tree, and return its root.',
        approach: 'Recursively swap left and right children of each node.',
        solution: `function invertTree(root) {
    if (!root) return null;
    
    // Swap children
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    // Recursively invert subtrees
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
}`,
        keyPoints: [
          'Simple recursive approach',
          'Swap children at each node',
          'Famous Google interview question'
        ],
        relatedProblems: ['maximum-depth-binary-tree', 'symmetric-tree']
      },
      {
        id: 'maximum-depth-binary-tree',
        title: 'Maximum Depth of Binary Tree',
        difficulty: 'Easy',
        pattern: 'Binary Tree',
        companies: ['Amazon', 'Microsoft', 'Facebook', 'LinkedIn'],
        leetcodeNumber: 104,
        frequency: 'Very High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(h)',
        description: 'Given the root of a binary tree, return its maximum depth.',
        approach: 'Use recursion to find maximum depth of left and right subtrees.',
        solution: `function maxDepth(root) {
    if (!root) return 0;
    
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    return Math.max(leftDepth, rightDepth) + 1;
}`,
        keyPoints: [
          'Base case: null node has depth 0',
          'Recursive depth calculation',
          'Add 1 for current node'
        ],
        relatedProblems: ['minimum-depth-binary-tree', 'balanced-binary-tree']
      },
      {
        id: 'same-tree',
        title: 'Same Tree',
        difficulty: 'Easy',
        pattern: 'Binary Tree',
        companies: ['Amazon', 'Microsoft', 'Bloomberg'],
        leetcodeNumber: 100,
        frequency: 'High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(h)',
        description: 'Given the roots of two binary trees p and q, write a function to check if they are the same or not.',
        approach: 'Recursively compare nodes, values, and structure of both trees.',
        solution: `function isSameTree(p, q) {
    // Both are null
    if (!p && !q) return true;
    
    // One is null, other is not
    if (!p || !q) return false;
    
    // Values don't match
    if (p.val !== q.val) return false;
    
    // Recursively check left and right subtrees
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}`,
        keyPoints: [
          'Handle all null cases first',
          'Compare values and structure',
          'Recursive tree comparison'
        ],
        relatedProblems: ['subtree-of-another-tree', 'symmetric-tree']
      },
      {
        id: 'lowest-common-ancestor-bst',
        title: 'Lowest Common Ancestor of BST',
        difficulty: 'Medium',
        pattern: 'Binary Tree',
        companies: ['Amazon', 'Microsoft', 'Facebook', 'LinkedIn'],
        leetcodeNumber: 235,
        frequency: 'High',
        timeComplexity: 'O(h)',
        spaceComplexity: 'O(h)',
        description: 'Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.',
        approach: 'Use BST property: if both nodes are smaller, go left; if both larger, go right; otherwise current is LCA.',
        solution: `function lowestCommonAncestor(root, p, q) {
    if (!root) return null;
    
    // Both nodes are in left subtree
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    
    // Both nodes are in right subtree
    if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    
    // Split: one in left, one in right (or one is root)
    return root;
}`,
        keyPoints: [
          'Leverage BST property for efficiency',
          'Split point indicates LCA',
          'Can be solved iteratively too'
        ],
        relatedProblems: ['lowest-common-ancestor-binary-tree', 'validate-bst']
      },
      {
        id: 'binary-tree-level-order',
        title: 'Binary Tree Level Order Traversal',
        difficulty: 'Medium',
        pattern: 'Binary Tree',
        companies: ['Amazon', 'Microsoft', 'Facebook', 'LinkedIn'],
        leetcodeNumber: 102,
        frequency: 'Very High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(w)',
        description: 'Given the root of a binary tree, return the level order traversal of its nodes\' values.',
        approach: 'Use BFS with queue to traverse level by level.',
        solution: `function levelOrder(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(currentLevel);
    }
    
    return result;
}`,
        keyPoints: [
          'BFS traversal with queue',
          'Process nodes level by level',
          'Track level size for grouping'
        ],
        relatedProblems: ['binary-tree-zigzag-level-order', 'binary-tree-right-side-view']
      },
      {
        id: 'validate-bst',
        title: 'Validate Binary Search Tree',
        difficulty: 'Medium',
        pattern: 'Binary Tree',
        companies: ['Amazon', 'Microsoft', 'Facebook', 'Bloomberg'],
        leetcodeNumber: 98,
        frequency: 'Very High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(h)',
        description: 'Given the root of a binary tree, determine if it is a valid binary search tree (BST).',
        approach: 'Use recursive validation with min/max bounds for each subtree.',
        solution: `function isValidBST(root) {
    function validate(node, min, max) {
        if (!node) return true;
        
        if (node.val <= min || node.val >= max) {
            return false;
        }
        
        return validate(node.left, min, node.val) && 
               validate(node.right, node.val, max);
    }
    
    return validate(root, -Infinity, Infinity);
}`,
        keyPoints: [
          'Recursive validation with bounds',
          'Each node must be within min/max range',
          'BST property: left < root < right'
        ],
        relatedProblems: ['kth-smallest-element-bst', 'lowest-common-ancestor-bst']
      },
      {
        id: 'kth-smallest-element-bst',
        title: 'Kth Smallest Element in BST',
        difficulty: 'Medium',
        pattern: 'Binary Tree',
        companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'],
        leetcodeNumber: 230,
        frequency: 'High',
        timeComplexity: 'O(h + k)',
        spaceComplexity: 'O(h)',
        description: 'Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.',
        approach: 'Use in-order traversal to visit nodes in sorted order.',
        solution: `function kthSmallest(root, k) {
    let count = 0;
    let result = null;
    
    function inorder(node) {
        if (!node || result !== null) return;
        
        inorder(node.left);
        
        count++;
        if (count === k) {
            result = node.val;
            return;
        }
        
        inorder(node.right);
    }
    
    inorder(root);
    return result;
}`,
        keyPoints: [
          'In-order traversal gives sorted order',
          'Early termination when k-th found',
          'Counter to track position'
        ],
        relatedProblems: ['validate-bst', 'binary-tree-inorder-traversal']
      },
      {
        id: 'subtree-of-another-tree',
        title: 'Subtree of Another Tree',
        difficulty: 'Easy',
        pattern: 'Binary Tree',
        companies: ['Amazon', 'Facebook', 'Microsoft'],
        leetcodeNumber: 572,
        frequency: 'High',
        timeComplexity: 'O(m * n)',
        spaceComplexity: 'O(h)',
        description: 'Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot.',
        approach: 'Use helper function to check if trees are same, then recursively check all subtrees.',
        solution: `function isSubtree(root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;
    
    function isSameTree(p, q) {
        if (!p && !q) return true;
        if (!p || !q) return false;
        return p.val === q.val && 
               isSameTree(p.left, q.left) && 
               isSameTree(p.right, q.right);
    }
    
    return isSameTree(root, subRoot) ||
           isSubtree(root.left, subRoot) ||
           isSubtree(root.right, subRoot);
}`,
        keyPoints: [
          'Combine same tree check with recursion',
          'Check current node and all subtrees',
          'Early termination when found'
        ],
        relatedProblems: ['same-tree', 'merge-two-binary-trees']
      },
      {
        id: 'construct-binary-tree-preorder-inorder',
        title: 'Construct Binary Tree from Preorder and Inorder',
        difficulty: 'Medium',
        pattern: 'Binary Tree',
        companies: ['Amazon', 'Microsoft', 'Facebook', 'LinkedIn'],
        leetcodeNumber: 105,
        frequency: 'High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        description: 'Given two integer arrays preorder and inorder, construct and return the binary tree.',
        approach: 'Use preorder for root selection and inorder for left/right subtree division.',
        solution: `function buildTree(preorder, inorder) {
    const inorderMap = new Map();
    inorder.forEach((val, index) => inorderMap.set(val, index));
    
    let preIndex = 0;
    
    function build(inStart, inEnd) {
        if (inStart > inEnd) return null;
        
        const rootVal = preorder[preIndex++];
        const root = { val: rootVal, left: null, right: null };
        
        const inIndex = inorderMap.get(rootVal);
        
        root.left = build(inStart, inIndex - 1);
        root.right = build(inIndex + 1, inEnd);
        
        return root;
    }
    
    return build(0, inorder.length - 1);
}`,
        keyPoints: [
          'Preorder gives root sequence',
          'Inorder divides left/right subtrees',
          'Hash map for O(1) inorder lookups'
        ],
        relatedProblems: ['construct-binary-tree-postorder-inorder']
      },
      {
        id: 'serialize-deserialize-binary-tree',
        title: 'Serialize and Deserialize Binary Tree',
        difficulty: 'Hard',
        pattern: 'Binary Tree',
        companies: ['Amazon', 'Facebook', 'Microsoft', 'LinkedIn'],
        leetcodeNumber: 297,
        frequency: 'Very High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        description: 'Design an algorithm to serialize and deserialize a binary tree.',
        approach: 'Use preorder traversal with null markers for serialization.',
        solution: `function serialize(root) {
    const result = [];
    
    function preorder(node) {
        if (!node) {
            result.push('null');
            return;
        }
        
        result.push(node.val.toString());
        preorder(node.left);
        preorder(node.right);
    }
    
    preorder(root);
    return result.join(',');
}

function deserialize(data) {
    const values = data.split(',');
    let index = 0;
    
    function buildTree() {
        if (index >= values.length || values[index] === 'null') {
            index++;
            return null;
        }
        
        const node = {
            val: parseInt(values[index++]),
            left: null,
            right: null
        };
        
        node.left = buildTree();
        node.right = buildTree();
        
        return node;
    }
    
    return buildTree();
}`,
        keyPoints: [
          'Preorder with null markers',
          'Recursive deserialization',
          'Handle null nodes explicitly'
        ],
        relatedProblems: ['serialize-deserialize-bst', 'find-duplicate-subtrees']
      },
      {
        id: 'path-sum',
        title: 'Path Sum',
        difficulty: 'Easy',
        pattern: 'Binary Tree',
        companies: ['Amazon', 'Microsoft', 'Google'],
        leetcodeNumber: 112,
        frequency: 'High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(h)',
        description: 'Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.',
        approach: 'Use DFS to check if any path from root to leaf sums to target.',
        solution: `function hasPathSum(root, targetSum) {
    if (!root) return false;
    
    if (!root.left && !root.right) {
        return targetSum === root.val;
    }
    
    return hasPathSum(root.left, targetSum - root.val) ||
           hasPathSum(root.right, targetSum - root.val);
}`,
        keyPoints: [
          'DFS with target reduction',
          'Check leaf nodes for exact match',
          'Recursive path exploration'
        ],
        relatedProblems: ['path-sum-ii', 'sum-root-to-leaf-numbers']
      },
      {
        id: 'sum-root-to-leaf-numbers',
        title: 'Sum Root to Leaf Numbers',
        difficulty: 'Medium',
        pattern: 'Binary Tree',
        companies: ['Amazon', 'Microsoft', 'Google'],
        leetcodeNumber: 129,
        frequency: 'Medium',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(h)',
        description: 'You are given the root of a binary tree containing digits from 0 to 9 only. Each root-to-leaf path in the tree represents a number.',
        approach: 'Use DFS to build numbers from root to leaf and sum them.',
        solution: `function sumNumbers(root) {
    let totalSum = 0;
    
    function dfs(node, currentSum) {
        if (!node) return;
        
        currentSum = currentSum * 10 + node.val;
        
        if (!node.left && !node.right) {
            totalSum += currentSum;
            return;
        }
        
        dfs(node.left, currentSum);
        dfs(node.right, currentSum);
    }
    
    dfs(root, 0);
    return totalSum;
}`,
        keyPoints: [
          'Build number digit by digit',
          'Multiply by 10 and add current digit',
          'Sum only at leaf nodes'
        ],
        relatedProblems: ['path-sum', 'binary-tree-paths']
      }
    ]
  },
  {
    id: 'dynamic-programming',
    name: 'Dynamic Programming',
    description: 'Optimization problems with overlapping subproblems',
    studyOrder: 5,
    estimatedDays: 12,
    keyTechniques: ['Memoization', 'Tabulation', 'State Transition', 'Optimization'],
    problems: [
      {
        id: 'climbing-stairs',
        title: 'Climbing Stairs',
        difficulty: 'Easy',
        pattern: 'Dynamic Programming',
        companies: ['Amazon', 'Adobe', 'Apple'],
        leetcodeNumber: 70,
        frequency: 'Very High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?',
        approach: 'Classic Fibonacci pattern. Number of ways to reach step n = ways to reach (n-1) + ways to reach (n-2).',
        solution: `function climbStairs(n) {
    if (n <= 2) return n;
    
    let prev2 = 1; // Ways to reach step 1
    let prev1 = 2; // Ways to reach step 2
    
    for (let i = 3; i <= n; i++) {
        const current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}`,
        keyPoints: [
          'Fibonacci sequence pattern',
          'Space optimized bottom-up approach',
          'Classic DP introduction problem'
        ],
        relatedProblems: ['min-cost-climbing-stairs', 'house-robber']
      },
      {
        id: 'coin-change',
        title: 'Coin Change',
        difficulty: 'Medium',
        pattern: 'Dynamic Programming',
        companies: ['Amazon', 'Microsoft', 'Facebook', 'Uber'],
        leetcodeNumber: 322,
        frequency: 'Very High',
        timeComplexity: 'O(amount * coins)',
        spaceComplexity: 'O(amount)',
        description: 'You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount.',
        approach: 'Use DP array where dp[i] represents minimum coins needed for amount i.',
        solution: `function coinChange(coins, amount) {
    const dp = Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i >= coin) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] === amount + 1 ? -1 : dp[amount];
}`,
        keyPoints: [
          'Bottom-up DP approach',
          'Initialize with impossible value',
          'Try each coin for each amount'
        ],
        relatedProblems: ['coin-change-2', 'perfect-squares']
      },
      {
        id: 'house-robber',
        title: 'House Robber',
        difficulty: 'Medium',
        pattern: 'Dynamic Programming',
        companies: ['Amazon', 'Microsoft', 'Google'],
        leetcodeNumber: 198,
        frequency: 'Very High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected.',
        approach: 'Use DP where dp[i] = max(dp[i-1], dp[i-2] + nums[i]). Can be optimized to O(1) space.',
        solution: `function rob(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    let prev2 = 0;
    let prev1 = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        const current = Math.max(prev1, prev2 + nums[i]);
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}`,
        keyPoints: [
          'Classic DP problem',
          'Space optimization possible',
          'Cannot rob adjacent houses'
        ],
        relatedProblems: ['house-robber-2', 'climbing-stairs']
      },
      {
        id: 'longest-increasing-subsequence',
        title: 'Longest Increasing Subsequence',
        difficulty: 'Medium',
        pattern: 'Dynamic Programming',
        companies: ['Microsoft', 'Amazon', 'Facebook'],
        leetcodeNumber: 300,
        frequency: 'High',
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(n)',
        description: 'Given an integer array nums, return the length of the longest strictly increasing subsequence.',
        approach: 'Use binary search with patience sorting or DP with binary search optimization.',
        solution: `function lengthOfLIS(nums) {
    const tails = [];
    
    for (let num of nums) {
        let left = 0;
        let right = tails.length;
        
        // Binary search for insertion point
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        // Replace or append
        if (left === tails.length) {
            tails.push(num);
        } else {
            tails[left] = num;
        }
    }
    
    return tails.length;
}`,
        keyPoints: [
          'Patience sorting algorithm',
          'Binary search optimization',
          'Maintains increasing subsequence property'
        ],
        relatedProblems: ['number-of-lis', 'russian-doll-envelopes']
      },

      {
        id: 'word-break',
        title: 'Word Break',
        difficulty: 'Medium',
        pattern: 'Dynamic Programming',
        companies: ['Amazon', 'Facebook', 'Microsoft', 'Google'],
        leetcodeNumber: 139,
        frequency: 'Very High',
        timeComplexity: 'O(n^2)',
        spaceComplexity: 'O(n)',
        description: 'Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.',
        approach: 'Use DP array where dp[i] represents if string up to index i can be segmented.',
        solution: `function wordBreak(s, wordDict) {
    const wordSet = new Set(wordDict);
    const dp = Array(s.length + 1).fill(false);
    dp[0] = true;
    
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    
    return dp[s.length];
}`,
        keyPoints: [
          'Bottom-up DP approach',
          'Check all possible word breaks',
          'Use set for O(1) word lookup'
        ],
        relatedProblems: ['word-break-ii', 'concatenated-words']
      },
      {
        id: 'decode-ways',
        title: 'Decode Ways',
        difficulty: 'Medium',
        pattern: 'Dynamic Programming',
        companies: ['Amazon', 'Microsoft', 'Facebook', 'Uber'],
        leetcodeNumber: 91,
        frequency: 'High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'A message containing letters from A-Z can be encoded into numbers using the mapping A=1, B=2, ..., Z=26. Given a string s containing only digits, return the number of ways to decode it.',
        approach: 'Use DP. Each position can be decoded as single digit or two digits if valid.',
        solution: `function numDecodings(s) {
    if (s.length === 0 || s[0] === '0') return 0;
    
    let prev2 = 1; // dp[i-2]
    let prev1 = 1; // dp[i-1]
    
    for (let i = 1; i < s.length; i++) {
        let current = 0;
        
        // Single digit decode
        if (s[i] !== '0') {
            current += prev1;
        }
        
        // Two digit decode
        const twoDigit = parseInt(s.substring(i - 1, i + 1));
        if (twoDigit >= 10 && twoDigit <= 26) {
            current += prev2;
        }
        
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}`,
        keyPoints: [
          'Two choices: decode as 1 or 2 digits',
          'Validate two-digit combinations (10-26)',
          'Space-optimized DP'
        ],
        relatedProblems: ['unique-paths', 'climbing-stairs']
      },
      {
        id: 'unique-paths',
        title: 'Unique Paths',
        difficulty: 'Medium',
        pattern: 'Dynamic Programming',
        companies: ['Amazon', 'Microsoft', 'Facebook', 'Bloomberg'],
        leetcodeNumber: 62,
        frequency: 'High',
        timeComplexity: 'O(m * n)',
        spaceComplexity: 'O(n)',
        description: 'There is a robot on an m x n grid. The robot can only move either down or right. How many possible unique paths are there?',
        approach: 'Use DP. Each cell = sum of paths from top and left cells.',
        solution: `function uniquePaths(m, n) {
    // Space optimized: only keep current row
    let dp = Array(n).fill(1);
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] += dp[j - 1];
        }
    }
    
    return dp[n - 1];
}`,
        keyPoints: [
          'Grid DP with path counting',
          'Space optimization using 1D array',
          'Mathematical formula alternative: C(m+n-2, m-1)'
        ],
        relatedProblems: ['unique-paths-ii', 'minimum-path-sum']
      },
      {
        id: 'jump-game',
        title: 'Jump Game',
        difficulty: 'Medium',
        pattern: 'Dynamic Programming',
        companies: ['Amazon', 'Microsoft', 'Google'],
        leetcodeNumber: 55,
        frequency: 'High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'You are given an integer array nums. You are initially positioned at the array\'s first index. Each element represents your maximum jump length. Return true if you can reach the last index.',
        approach: 'Greedy approach: track the farthest reachable position.',
        solution: `function canJump(nums) {
    let maxReach = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) {
            return false;
        }
        
        maxReach = Math.max(maxReach, i + nums[i]);
        
        if (maxReach >= nums.length - 1) {
            return true;
        }
    }
    
    return true;
}`,
        keyPoints: [
          'Greedy algorithm approach',
          'Track maximum reachable position',
          'Early termination when target reached'
        ],
        relatedProblems: ['jump-game-ii', 'minimum-jumps']
      }
    ]
  },
  {
    id: 'linked-list',
    name: 'Linked List',
    description: 'Pointer manipulation and list operations',
    studyOrder: 6,
    estimatedDays: 6,
    keyTechniques: ['Two Pointers', 'Dummy Node', 'Reversal', 'Cycle Detection'],
    problems: [
      {
        id: 'reverse-linked-list',
        title: 'Reverse Linked List',
        difficulty: 'Easy',
        pattern: 'Linked List',
        companies: ['Amazon', 'Microsoft', 'Facebook', 'Apple'],
        leetcodeNumber: 206,
        frequency: 'Very High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'Given the head of a singly linked list, reverse the list, and return the reversed list.',
        approach: 'Use three pointers: prev, current, next. Iteratively reverse links.',
        solution: `function reverseList(head) {
    let prev = null;
    let current = head;
    
    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
}`,
        keyPoints: [
          'Three pointer technique',
          'Iterative approach preferred',
          'Fundamental linked list operation'
        ],
        relatedProblems: ['reverse-linked-list-ii', 'reverse-nodes-k-group']
      },
      {
        id: 'linked-list-cycle',
        title: 'Linked List Cycle',
        difficulty: 'Easy',
        pattern: 'Linked List',
        companies: ['Amazon', 'Microsoft', 'Yahoo'],
        leetcodeNumber: 141,
        frequency: 'Very High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'Given head, the head of a linked list, determine if the linked list has a cycle in it.',
        approach: 'Use Floyd\'s cycle detection algorithm with fast and slow pointers.',
        solution: `function hasCycle(head) {
    if (!head || !head.next) return false;
    
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            return true;
        }
    }
    
    return false;
}`,
        keyPoints: [
          'Floyd\'s tortoise and hare algorithm',
          'Fast pointer moves 2x speed',
          'Guaranteed to detect cycles'
        ],
        relatedProblems: ['linked-list-cycle-ii', 'find-duplicate-number']
      },
      {
        id: 'merge-two-sorted-lists',
        title: 'Merge Two Sorted Lists',
        difficulty: 'Easy',
        pattern: 'Linked List',
        companies: ['Amazon', 'Microsoft', 'Apple', 'Adobe'],
        leetcodeNumber: 21,
        frequency: 'Very High',
        timeComplexity: 'O(n + m)',
        spaceComplexity: 'O(1)',
        description: 'You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list.',
        approach: 'Use dummy node and merge by comparing values from both lists.',
        solution: `function mergeTwoLists(list1, list2) {
    const dummy = { next: null };
    let current = dummy;
    
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    // Append remaining nodes
    current.next = list1 || list2;
    
    return dummy.next;
}`,
        keyPoints: [
          'Dummy node simplifies edge cases',
          'Compare and advance pointers',
          'Handle remaining nodes'
        ],
        relatedProblems: ['merge-k-sorted-lists', 'merge-sorted-array']
      },
      {
        id: 'add-two-numbers',
        title: 'Add Two Numbers',
        difficulty: 'Medium',
        pattern: 'Linked List',
        companies: ['Amazon', 'Google', 'Meta'],
        leetcodeNumber: 2,
        frequency: 'Very High',
        timeComplexity: 'O(max(m, n))',
        spaceComplexity: 'O(max(m, n))',
        description: 'Add two numbers represented as linked lists in reverse order.',
        approach: 'Traverse both lists simultaneously, handle carry, create new nodes.',
        solution: `function addTwoNumbers(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;
    
    while (l1 || l2 || carry) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const sum = val1 + val2 + carry;
        
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    
    return dummy.next;
}`,
        keyPoints: ['Handle different length lists', 'Don\'t forget final carry', 'Use dummy node for simplicity'],
        relatedProblems: ['add-two-numbers-ii', 'multiply-strings']
      },
      {
        id: 'intersection-linked-lists',
        title: 'Intersection of Two Linked Lists',
        difficulty: 'Easy',
        pattern: 'Linked List',
        companies: ['Amazon', 'Google', 'Meta'],
        leetcodeNumber: 160,
        frequency: 'High',
        timeComplexity: 'O(m + n)',
        spaceComplexity: 'O(1)',
        description: 'Find the node at which two linked lists intersect.',
        approach: 'Two pointers. When one reaches end, start from other list\'s head.',
        solution: `function getIntersectionNode(headA, headB) {
    if (!headA || !headB) return null;
    
    let pA = headA, pB = headB;
    
    while (pA !== pB) {
        pA = pA ? pA.next : headB;
        pB = pB ? pB.next : headA;
    }
    
    return pA;
}`,
        keyPoints: ['Two pointers eliminate length difference', 'Both reach intersection or null together', 'No extra space needed'],
        relatedProblems: ['linked-list-cycle-ii', 'merge-two-sorted-lists']
      },
      {
        id: 'palindrome-linked-list',
        title: 'Palindrome Linked List',
        difficulty: 'Easy',
        pattern: 'Linked List',
        companies: ['Amazon', 'Google', 'Meta'],
        leetcodeNumber: 234,
        frequency: 'High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'Check if linked list is a palindrome.',
        approach: 'Find middle, reverse second half, compare halves.',
        solution: `function isPalindrome(head) {
    if (!head || !head.next) return true;
    
    // Find middle
    let slow = head, fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Reverse second half
    let secondHalf = reverseList(slow.next);
    
    // Compare halves
    let firstHalf = head;
    while (secondHalf) {
        if (firstHalf.val !== secondHalf.val) return false;
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }
    
    return true;
}

function reverseList(head) {
    let prev = null, current = head;
    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}`,
        keyPoints: ['Use slow/fast pointers for middle', 'Reverse second half to compare', 'O(1) space solution'],
        relatedProblems: ['reverse-linked-list', 'valid-palindrome']
      },
      {
        id: 'remove-linked-list-elements',
        title: 'Remove Linked List Elements',
        difficulty: 'Easy',
        pattern: 'Linked List',
        companies: ['Amazon', 'Google'],
        leetcodeNumber: 203,
        frequency: 'Medium',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'Remove all elements from linked list with given value.',
        approach: 'Use dummy node to handle edge cases. Track previous node.',
        solution: `function removeElements(head, val) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy, current = head;
    
    while (current) {
        if (current.val === val) {
            prev.next = current.next;
        } else {
            prev = current;
        }
        current = current.next;
    }
    
    return dummy.next;
}`,
        keyPoints: ['Dummy node handles head removal', 'Track previous for deletion', 'Update pointers carefully'],
        relatedProblems: ['remove-nth-node-from-end', 'delete-node-linked-list']
      },
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
        description: 'Deep copy linked list where each node has next and random pointer.',
        approach: 'Three passes: create copies interleaved, assign random pointers, separate lists.',
        solution: `function copyRandomList(head) {
    if (!head) return null;
    
    // First pass: create copy nodes
    let current = head;
    while (current) {
        const copy = new Node(current.val);
        copy.next = current.next;
        current.next = copy;
        current = copy.next;
    }
    
    // Second pass: assign random pointers
    current = head;
    while (current) {
        if (current.random) {
            current.next.random = current.random.next;
        }
        current = current.next.next;
    }
    
    // Third pass: separate lists
    const dummy = new Node(0);
    let copyPrev = dummy;
    current = head;
    
    while (current) {
        const copy = current.next;
        current.next = copy.next;
        copyPrev.next = copy;
        copyPrev = copy;
        current = current.next;
    }
    
    return dummy.next;
}`,
        keyPoints: ['Interleave original and copy nodes', 'Use interleaving to handle random pointers', 'Separate lists in final pass'],
        relatedProblems: ['clone-graph', 'deep-copy-linked-list']
      },
      {
        id: 'flatten-multilevel-doubly-linked-list',
        title: 'Flatten a Multilevel Doubly Linked List',
        difficulty: 'Medium',
        pattern: 'Linked List',
        companies: ['Amazon', 'Google'],
        leetcodeNumber: 430,
        frequency: 'Medium',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(d)',
        description: 'Flatten multilevel doubly linked list to single level.',
        approach: 'DFS traversal. Use stack to track branch points.',
        solution: `function flatten(head) {
    if (!head) return head;
    
    const stack = [];
    let current = head;
    
    while (current) {
        if (current.child) {
            if (current.next) {
                stack.push(current.next);
            }
            current.next = current.child;
            current.child.prev = current;
            current.child = null;
        }
        
        if (!current.next && stack.length > 0) {
            const next = stack.pop();
            current.next = next;
            next.prev = current;
        }
        
        current = current.next;
    }
    
    return head;
}`,
        keyPoints: ['Use stack for DFS traversal', 'Connect child as next node', 'Handle prev pointers in doubly linked list'],
        relatedProblems: ['binary-tree-to-linked-list', 'serialize-deserialize-tree']
      },
      {
        id: 'delete-node-linked-list',
        title: 'Delete Node in a Linked List',
        difficulty: 'Easy',
        pattern: 'Linked List',
        companies: ['Amazon', 'Microsoft', 'Google'],
        leetcodeNumber: 237,
        frequency: 'Medium',
        timeComplexity: 'O(1)',
        spaceComplexity: 'O(1)',
        description: 'Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list.',
        approach: 'Copy next node\'s value to current node, then delete next node.',
        solution: `function deleteNode(node) {
    node.val = node.next.val;
    node.next = node.next.next;
}`,
        keyPoints: [
          'Copy value from next node',
          'Update pointer to skip next node',
          'Cannot delete last node'
        ],
        relatedProblems: ['remove-linked-list-elements', 'remove-nth-node-end']
      },

    ]
  },
  {
    id: 'graphs',
    name: 'Graphs',
    description: 'Graph traversal, shortest paths, and connectivity',
    studyOrder: 7,
    estimatedDays: 8,
    keyTechniques: ['DFS', 'BFS', 'Union Find', 'Topological Sort'],
    problems: [
      {
        id: 'number-of-islands',
        title: 'Number of Islands',
        difficulty: 'Medium',
        pattern: 'Graphs',
        companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'],
        leetcodeNumber: 200,
        frequency: 'Very High',
        timeComplexity: 'O(m * n)',
        spaceComplexity: 'O(m * n)',
        description: 'Given an m x n 2D binary grid which represents a map of \'1\'s (land) and \'0\'s (water), return the number of islands.',
        approach: 'Use DFS to mark connected land cells as visited, count number of DFS calls.',
        solution: `function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;
    
    const rows = grid.length;
    const cols = grid[0].length;
    let islands = 0;
    
    function dfs(row, col) {
        if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === '0') {
            return;
        }
        
        grid[row][col] = '0'; // Mark as visited
        
        // Explore all 4 directions
        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    }
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                islands++;
                dfs(i, j);
            }
        }
    }
    
    return islands;
}`,
        keyPoints: [
          'Grid DFS traversal',
          'Mark visited cells by modifying grid',
          'Count connected components'
        ],
        relatedProblems: ['max-area-of-island', 'surrounded-regions']
      },
      {
        id: 'clone-graph',
        title: 'Clone Graph',
        difficulty: 'Medium',
        pattern: 'Graphs',
        companies: ['Amazon', 'Facebook', 'Microsoft', 'Google'],
        leetcodeNumber: 133,
        frequency: 'High',
        timeComplexity: 'O(V + E)',
        spaceComplexity: 'O(V)',
        description: 'Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.',
        approach: 'Use DFS with hash map to track original to clone node mapping.',
        solution: `function cloneGraph(node) {
    if (!node) return null;
    
    const visited = new Map();
    
    function dfs(originalNode) {
        if (visited.has(originalNode)) {
            return visited.get(originalNode);
        }
        
        const cloneNode = { val: originalNode.val, neighbors: [] };
        visited.set(originalNode, cloneNode);
        
        for (let neighbor of originalNode.neighbors) {
            cloneNode.neighbors.push(dfs(neighbor));
        }
        
        return cloneNode;
    }
    
    return dfs(node);
}`,
        keyPoints: [
          'DFS with memoization',
          'Hash map for visited tracking',
          'Deep copy with neighbor relationships'
        ],
        relatedProblems: ['copy-list-random-pointer', 'clone-binary-tree']
      },
      {
        id: 'course-schedule-ii',
        title: 'Course Schedule II',
        difficulty: 'Medium',
        pattern: 'Graphs',
        companies: ['Amazon', 'Microsoft', 'Google'],
        leetcodeNumber: 210,
        frequency: 'High',
        timeComplexity: 'O(V + E)',
        spaceComplexity: 'O(V)',
        description: 'There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.',
        approach: 'Use topological sort with DFS to detect cycles and build order.',
        solution: `function findOrder(numCourses, prerequisites) {
    const graph = Array(numCourses).fill().map(() => []);
    const inDegree = Array(numCourses).fill(0);
    
    for (let [course, prereq] of prerequisites) {
        graph[prereq].push(course);
        inDegree[course]++;
    }
    
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }
    
    const result = [];
    while (queue.length > 0) {
        const course = queue.shift();
        result.push(course);
        
        for (let neighbor of graph[course]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    
    return result.length === numCourses ? result : [];
}`,
        keyPoints: [
          'Topological sort with BFS',
          'Track in-degrees',
          'Detect cycles'
        ],
        relatedProblems: ['course-schedule', 'alien-dictionary']
      },
      {
        id: 'course-schedule',
        title: 'Course Schedule',
        difficulty: 'Medium',
        pattern: 'Graphs',
        companies: ['Facebook', 'Amazon', 'Zenefits'],
        leetcodeNumber: 207,
        frequency: 'High',
        timeComplexity: 'O(V + E)',
        spaceComplexity: 'O(V + E)',
        description: 'There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. Given prerequisites array, return true if you can finish all courses.',
        approach: 'Use topological sort with DFS to detect cycles in directed graph.',
        solution: `function canFinish(numCourses, prerequisites) {
    const graph = Array(numCourses).fill(null).map(() => []);
    const visited = Array(numCourses).fill(0); // 0: unvisited, 1: visiting, 2: visited
    
    // Build adjacency list
    for (let [course, prereq] of prerequisites) {
        graph[prereq].push(course);
    }
    
    function dfs(course) {
        if (visited[course] === 1) return false; // Cycle detected
        if (visited[course] === 2) return true;  // Already processed
        
        visited[course] = 1; // Mark as visiting
        
        for (let nextCourse of graph[course]) {
            if (!dfs(nextCourse)) return false;
        }
        
        visited[course] = 2; // Mark as visited
        return true;
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }
    
    return true;
}`,
        keyPoints: [
          'Topological sort with cycle detection',
          'Three-state visited tracking',
          'DFS on directed graph'
        ],
        relatedProblems: ['course-schedule-ii', 'alien-dictionary']
      },
      {
        id: 'pacific-atlantic-water-flow',
        title: 'Pacific Atlantic Water Flow',
        difficulty: 'Medium',
        pattern: 'Graphs',
        companies: ['Google', 'Facebook', 'Amazon'],
        leetcodeNumber: 417,
        frequency: 'Medium',
        timeComplexity: 'O(m * n)',
        spaceComplexity: 'O(m * n)',
        description: 'Given an m x n rectangular island that borders both the Pacific and Atlantic oceans, return coordinates that can flow to both oceans.',
        approach: 'Start DFS from both ocean borders, find cells reachable from both.',
        solution: `function pacificAtlantic(heights) {
    if (!heights || heights.length === 0) return [];
    
    const rows = heights.length;
    const cols = heights[0].length;
    const pacific = Array(rows).fill(null).map(() => Array(cols).fill(false));
    const atlantic = Array(rows).fill(null).map(() => Array(cols).fill(false));
    
    function dfs(row, col, ocean) {
        ocean[row][col] = true;
        
        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        for (let [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols &&
                !ocean[newRow][newCol] && heights[newRow][newCol] >= heights[row][col]) {
                dfs(newRow, newCol, ocean);
            }
        }
    }
    
    // DFS from Pacific borders (top and left)
    for (let i = 0; i < rows; i++) {
        dfs(i, 0, pacific);
        dfs(i, cols - 1, atlantic);
    }
    for (let j = 0; j < cols; j++) {
        dfs(0, j, pacific);
        dfs(rows - 1, j, atlantic);
    }
    
    // Find intersection
    const result = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                result.push([i, j]);
            }
        }
    }
    
    return result;
}`,
        keyPoints: [
          'Reverse thinking: start from oceans',
          'Water flows to higher or equal heights',
          'Find intersection of reachable cells'
        ],
        relatedProblems: ['number-of-islands', 'surrounded-regions']
      }
    ]
  },
  {
    id: 'heap',
    name: 'Heap / Priority Queue',
    description: 'Priority-based data structure operations',
    studyOrder: 8,
    estimatedDays: 6,
    keyTechniques: ['Min Heap', 'Max Heap', 'K-way Merge', 'Top K Elements'],
    problems: [
      {
        id: 'kth-largest-element',
        title: 'Kth Largest Element in Array',
        difficulty: 'Medium',
        pattern: 'Heap / Priority Queue',
        companies: ['Amazon', 'Facebook', 'Microsoft', 'Apple'],
        leetcodeNumber: 215,
        frequency: 'Very High',
        timeComplexity: 'O(n log k)',
        spaceComplexity: 'O(k)',
        description: 'Given an integer array nums and an integer k, return the kth largest element in the array.',
        approach: 'Use min heap of size k to maintain k largest elements seen so far.',
        solution: `function findKthLargest(nums, k) {
    // Using quickselect approach for O(n) average time
    function quickSelect(left, right, target) {
        const pivot = partition(left, right);
        
        if (pivot === target) {
            return nums[pivot];
        } else if (pivot < target) {
            return quickSelect(pivot + 1, right, target);
        } else {
            return quickSelect(left, pivot - 1, target);
        }
    }
    
    function partition(left, right) {
        const pivot = nums[right];
        let i = left;
        
        for (let j = left; j < right; j++) {
            if (nums[j] >= pivot) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                i++;
            }
        }
        
        [nums[i], nums[right]] = [nums[right], nums[i]];
        return i;
    }
    
    return quickSelect(0, nums.length - 1, k - 1);
}`,
        keyPoints: [
          'Quickselect algorithm for average O(n)',
          'Alternative: Min heap for guaranteed O(n log k)',
          'Partition around pivot element'
        ],
        relatedProblems: ['top-k-frequent', 'kth-smallest-element-bst']
      },
      {
        id: 'find-median-data-stream',
        title: 'Find Median from Data Stream',
        difficulty: 'Hard',
        pattern: 'Heap / Priority Queue',
        companies: ['Amazon', 'Facebook', 'Microsoft', 'Google'],
        leetcodeNumber: 295,
        frequency: 'Very High',
        timeComplexity: 'O(log n)',
        spaceComplexity: 'O(n)',
        description: 'The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.',
        approach: 'Use two heaps: max heap for smaller half, min heap for larger half.',
        solution: `class MedianFinder {
    constructor() {
        this.maxHeap = []; // smaller half
        this.minHeap = []; // larger half
    }
    
    addNum(num) {
        // Add to max heap first
        this.maxHeap.push(num);
        this.maxHeap.sort((a, b) => b - a);
        
        // Balance heaps
        if (this.maxHeap.length > this.minHeap.length + 1) {
            this.minHeap.push(this.maxHeap.shift());
            this.minHeap.sort((a, b) => a - b);
        } else if (this.maxHeap.length > 0 && this.minHeap.length > 0 && 
                   this.maxHeap[0] > this.minHeap[0]) {
            const maxVal = this.maxHeap.shift();
            const minVal = this.minHeap.shift();
            this.maxHeap.push(minVal);
            this.minHeap.push(maxVal);
            this.maxHeap.sort((a, b) => b - a);
            this.minHeap.sort((a, b) => a - b);
        }
    }
    
    findMedian() {
        if (this.maxHeap.length > this.minHeap.length) {
            return this.maxHeap[0];
        }
        return (this.maxHeap[0] + this.minHeap[0]) / 2;
    }
}`,
        keyPoints: [
          'Two heap approach',
          'Max heap for smaller half',
          'Min heap for larger half'
        ],
        relatedProblems: ['sliding-window-median', 'kth-largest-element']
      },
      {
        id: 'merge-k-sorted-lists',
        title: 'Merge k Sorted Lists',
        difficulty: 'Hard',
        pattern: 'Heap / Priority Queue',
        companies: ['Amazon', 'Facebook', 'Microsoft', 'Google'],
        leetcodeNumber: 23,
        frequency: 'Very High',
        timeComplexity: 'O(n log k)',
        spaceComplexity: 'O(k)',
        description: 'You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.',
        approach: 'Use min heap to always merge the smallest current node from all lists.',
        solution: `function mergeKLists(lists) {
    if (!lists || lists.length === 0) return null;
    
    // Divide and conquer approach
    function mergeTwoLists(l1, l2) {
        const dummy = { next: null };
        let current = dummy;
        
        while (l1 && l2) {
            if (l1.val <= l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }
        
        current.next = l1 || l2;
        return dummy.next;
    }
    
    while (lists.length > 1) {
        const mergedLists = [];
        
        for (let i = 0; i < lists.length; i += 2) {
            const l1 = lists[i];
            const l2 = i + 1 < lists.length ? lists[i + 1] : null;
            mergedLists.push(mergeTwoLists(l1, l2));
        }
        
        lists = mergedLists;
    }
    
    return lists[0];
}`,
        keyPoints: [
          'Divide and conquer approach',
          'Merge lists pairwise',
          'Alternative: Priority queue solution'
        ],
        relatedProblems: ['merge-two-sorted-lists', 'merge-sorted-array']
      }
    ]
  },
  {
    id: 'backtracking',
    name: 'Backtracking',
    description: 'Systematic search with pruning and exploration',
    studyOrder: 9,
    estimatedDays: 7,
    keyTechniques: ['Decision Trees', 'Pruning', 'State Space Search', 'Constraint Satisfaction'],
    problems: [
      {
        id: 'combination-sum',
        title: 'Combination Sum',
        difficulty: 'Medium',
        pattern: 'Backtracking',
        companies: ['Amazon', 'Facebook', 'Microsoft', 'Airbnb'],
        leetcodeNumber: 39,
        frequency: 'High',
        timeComplexity: 'O(N^(T/M))',
        spaceComplexity: 'O(T/M)',
        description: 'Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target.',
        approach: 'Use backtracking to explore all combinations. Use same element multiple times by not advancing index.',
        solution: `function combinationSum(candidates, target) {
    const result = [];
    
    function backtrack(start, currentCombination, remainingTarget) {
        if (remainingTarget === 0) {
            result.push([...currentCombination]);
            return;
        }
        
        if (remainingTarget < 0) return;
        
        for (let i = start; i < candidates.length; i++) {
            currentCombination.push(candidates[i]);
            // Use same element again (i, not i+1)
            backtrack(i, currentCombination, remainingTarget - candidates[i]);
            currentCombination.pop();
        }
    }
    
    backtrack(0, [], target);
    return result;
}`,
        keyPoints: [
          'Backtracking with pruning',
          'Allow reuse of same element',
          'Early termination when target exceeded'
        ],
        relatedProblems: ['combination-sum-ii', 'combinations']
      },
      {
        id: 'word-search',
        title: 'Word Search',
        difficulty: 'Medium',
        pattern: 'Backtracking',
        companies: ['Amazon', 'Microsoft', 'Facebook', 'Bloomberg'],
        leetcodeNumber: 79,
        frequency: 'High',
        timeComplexity: 'O(N * 4^L)',
        spaceComplexity: 'O(L)',
        description: 'Given an m x n grid of characters board and a string word, return true if word exists in the grid.',
        approach: 'Use DFS backtracking from each cell, mark visited cells and unmark on backtrack.',
        solution: `function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;
    
    function dfs(row, col, index) {
        if (index === word.length) return true;
        
        if (row < 0 || row >= rows || col < 0 || col >= cols || 
            board[row][col] !== word[index]) {
            return false;
        }
        
        const temp = board[row][col];
        board[row][col] = '#'; // Mark as visited
        
        const found = dfs(row + 1, col, index + 1) ||
                     dfs(row - 1, col, index + 1) ||
                     dfs(row, col + 1, index + 1) ||
                     dfs(row, col - 1, index + 1);
        
        board[row][col] = temp; // Unmark
        return found;
    }
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }
    
    return false;
}`,
        keyPoints: [
          'DFS with backtracking',
          'Mark and unmark visited cells',
          'Try all four directions'
        ],
        relatedProblems: ['word-search-ii', 'number-of-islands']
      },
      {
        id: 'permutations',
        title: 'Permutations',
        difficulty: 'Medium',
        pattern: 'Backtracking',
        companies: ['Amazon', 'Microsoft', 'Google', 'Facebook'],
        leetcodeNumber: 46,
        frequency: 'High',
        timeComplexity: 'O(n!)',
        spaceComplexity: 'O(n)',
        description: 'Given an array nums of distinct integers, return all the possible permutations.',
        approach: 'Use backtracking to swap elements and generate all permutations.',
        solution: `function permute(nums) {
    const result = [];
    
    function backtrack(start) {
        if (start === nums.length) {
            result.push([...nums]);
            return;
        }
        
        for (let i = start; i < nums.length; i++) {
            [nums[start], nums[i]] = [nums[i], nums[start]];
            backtrack(start + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }
    
    backtrack(0);
    return result;
}`,
        keyPoints: [
          'Swap-based permutation generation',
          'Backtrack by swapping back',
          'Generate all possible arrangements'
        ],
        relatedProblems: ['permutations-ii', 'next-permutation']
      },
      {
        id: 'subsets',
        title: 'Subsets',
        difficulty: 'Medium',
        pattern: 'Backtracking',
        companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'],
        leetcodeNumber: 78,
        frequency: 'High',
        timeComplexity: 'O(2^n)',
        spaceComplexity: 'O(n)',
        description: 'Given an integer array nums of unique elements, return all possible subsets (the power set).',
        approach: 'Use backtracking to include or exclude each element.',
        solution: `function subsets(nums) {
    const result = [];
    
    function backtrack(start, currentSubset) {
        result.push([...currentSubset]);
        
        for (let i = start; i < nums.length; i++) {
            currentSubset.push(nums[i]);
            backtrack(i + 1, currentSubset);
            currentSubset.pop();
        }
    }
    
    backtrack(0, []);
    return result;
}`,
        keyPoints: [
          'Include/exclude each element',
          'Add subset at each step',
          'Generate power set'
        ],
        relatedProblems: ['subsets-ii', 'combination-sum']
      }
    ]
  },
  {
    id: 'intervals',
    name: 'Intervals',
    description: 'Interval merging, scheduling, and overlap problems',
    studyOrder: 10,
    estimatedDays: 4,
    keyTechniques: ['Sorting', 'Merging', 'Greedy Algorithms', 'Sweep Line'],
    problems: [
      {
        id: 'merge-intervals',
        title: 'Merge Intervals',
        difficulty: 'Medium',
        pattern: 'Intervals',
        companies: ['Facebook', 'Amazon', 'Microsoft', 'Google', 'Bloomberg'],
        leetcodeNumber: 56,
        frequency: 'Very High',
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(n)',
        description: 'Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals.',
        approach: 'Sort intervals by start time, then merge overlapping intervals.',
        solution: `function merge(intervals) {
    if (intervals.length <= 1) return intervals;
    
    // Sort by start time
    intervals.sort((a, b) => a[0] - b[0]);
    
    const merged = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const last = merged[merged.length - 1];
        
        if (current[0] <= last[1]) {
            // Overlapping intervals, merge them
            last[1] = Math.max(last[1], current[1]);
        } else {
            // Non-overlapping, add to result
            merged.push(current);
        }
    }
    
    return merged;
}`,
        keyPoints: [
          'Sort intervals by start time',
          'Merge when intervals overlap',
          'Update end time to maximum'
        ],
        relatedProblems: ['insert-interval', 'meeting-rooms-ii']
      },
      {
        id: 'non-overlapping-intervals',
        title: 'Non-overlapping Intervals',
        difficulty: 'Medium',
        pattern: 'Intervals',
        companies: ['Amazon', 'Microsoft', 'Facebook'],
        leetcodeNumber: 435,
        frequency: 'High',
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(1)',
        description: 'Given an array of intervals, return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.',
        approach: 'Sort by end time, greedily keep intervals that end earliest.',
        solution: `function eraseOverlapIntervals(intervals) {
    if (intervals.length <= 1) return 0;
    
    // Sort by end time
    intervals.sort((a, b) => a[1] - b[1]);
    
    let count = 0;
    let end = intervals[0][1];
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < end) {
            // Overlapping, remove current interval
            count++;
        } else {
            // Non-overlapping, update end
            end = intervals[i][1];
        }
    }
    
    return count;
}`,
        keyPoints: [
          'Greedy algorithm approach',
          'Sort by end time for optimal solution',
          'Count removed intervals'
        ],
        relatedProblems: ['merge-intervals', 'meeting-rooms']
      },
      {
        id: 'meeting-rooms-ii',
        title: 'Meeting Rooms II',
        difficulty: 'Medium',
        pattern: 'Intervals',
        companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'],
        leetcodeNumber: 253,
        frequency: 'High',
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(n)',
        description: 'Given an array of meeting time intervals, find the minimum number of conference rooms required.',
        approach: 'Use min heap to track end times of ongoing meetings.',
        solution: `function minMeetingRooms(intervals) {
    if (intervals.length === 0) return 0;
    
    // Sort by start time
    intervals.sort((a, b) => a[0] - b[0]);
    
    const endTimes = [intervals[0][1]];
    
    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        
        if (start >= endTimes[0]) {
            // Can reuse the earliest ending room
            endTimes.shift();
        }
        
        endTimes.push(end);
        endTimes.sort((a, b) => a - b);
    }
    
    return endTimes.length;
}`,
        keyPoints: [
          'Min heap for end times',
          'Reuse rooms when possible',
          'Track minimum rooms needed'
        ],
        relatedProblems: ['merge-intervals', 'non-overlapping-intervals']
      },
      {
        id: 'insert-interval',
        title: 'Insert Interval',
        difficulty: 'Medium',
        pattern: 'Intervals',
        companies: ['Amazon', 'Microsoft', 'Google'],
        leetcodeNumber: 57,
        frequency: 'High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        description: 'Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).',
        approach: 'Three phases: add intervals before new one, merge overlapping intervals, add remaining intervals.',
        solution: `function insert(intervals, newInterval) {
    const result = [];
    let i = 0;
    
    // Add intervals that end before new interval starts
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }
    
    // Merge overlapping intervals
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    
    result.push(newInterval);
    
    // Add remaining intervals
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }
    
    return result;
}`,
        keyPoints: [
          'Three-phase approach',
          'Merge overlapping intervals',
          'Linear time complexity'
        ],
        relatedProblems: ['merge-intervals', 'non-overlapping-intervals']
      }
    ]
  },
  {
    id: 'math-bit',
    name: 'Math & Bit Manipulation',
    description: 'Mathematical algorithms and bitwise operations',
    studyOrder: 11,
    estimatedDays: 5,
    keyTechniques: ['Bit Operations', 'Mathematical Properties', 'Prime Numbers', 'GCD/LCM'],
    problems: [
      {
        id: 'number-of-1-bits',
        title: 'Number of 1 Bits',
        difficulty: 'Easy',
        pattern: 'Math & Bit Manipulation',
        companies: ['Amazon', 'Microsoft', 'Apple'],
        leetcodeNumber: 191,
        frequency: 'High',
        timeComplexity: 'O(1)',
        spaceComplexity: 'O(1)',
        description: 'Write a function that takes an unsigned integer and returns the number of \'1\' bits it has.',
        approach: 'Use bit manipulation to count set bits. Brian Kernighan\'s algorithm is optimal.',
        solution: `function hammingWeight(n) {
    let count = 0;
    
    while (n !== 0) {
        // Brian Kernighan's algorithm
        n = n & (n - 1);
        count++;
    }
    
    return count;
}`,
        keyPoints: [
          'Brian Kernighan\'s algorithm',
          'n & (n-1) removes rightmost set bit',
          'Counts only set bits'
        ],
        relatedProblems: ['counting-bits', 'power-of-two']
      },
      {
        id: 'reverse-bits',
        title: 'Reverse Bits',
        difficulty: 'Easy',
        pattern: 'Math & Bit Manipulation',
        companies: ['Amazon', 'Apple', 'Airbnb'],
        leetcodeNumber: 190,
        frequency: 'Medium',
        timeComplexity: 'O(1)',
        spaceComplexity: 'O(1)',
        description: 'Reverse bits of a given 32 bits unsigned integer.',
        approach: 'Extract each bit from right and build result from left.',
        solution: `function reverseBits(n) {
    let result = 0;
    
    for (let i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);
        n = n >>> 1;
    }
    
    return result >>> 0; // Convert to unsigned 32-bit
}`,
        keyPoints: [
          'Extract bits from right to left',
          'Build result from left to right',
          'Use unsigned right shift'
        ],
        relatedProblems: ['reverse-integer', 'number-of-1-bits']
      },
      {
        id: 'missing-number',
        title: 'Missing Number',
        difficulty: 'Easy',
        pattern: 'Math & Bit Manipulation',
        companies: ['Amazon', 'Microsoft', 'Bloomberg'],
        leetcodeNumber: 268,
        frequency: 'High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.',
        approach: 'Use bit manipulation (XOR) or mathematical formula (sum).',
        solution: `function missingNumber(nums) {
    // XOR approach
    let missing = nums.length;
    
    for (let i = 0; i < nums.length; i++) {
        missing ^= i ^ nums[i];
    }
    
    return missing;
    
    // Alternative: Sum approach
    // const expectedSum = nums.length * (nums.length + 1) / 2;
    // const actualSum = nums.reduce((sum, num) => sum + num, 0);
    // return expectedSum - actualSum;
}`,
        keyPoints: [
          'XOR properties: a ^ a = 0, a ^ 0 = a',
          'Alternative: mathematical sum formula',
          'Both approaches are O(1) space'
        ],
        relatedProblems: ['find-disappeared-numbers', 'single-number']
      },
      {
        id: 'single-number',
        title: 'Single Number',
        difficulty: 'Easy',
        pattern: 'Math & Bit Manipulation',
        companies: ['Amazon', 'Microsoft', 'Facebook'],
        leetcodeNumber: 136,
        frequency: 'High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.',
        approach: 'Use XOR operation. Since a ^ a = 0 and a ^ 0 = a, all pairs cancel out.',
        solution: `function singleNumber(nums) {
    let result = 0;
    
    for (let num of nums) {
        result ^= num;
    }
    
    return result;
}`,
        keyPoints: [
          'XOR eliminates duplicate pairs',
          'a ^ a = 0, a ^ 0 = a properties',
          'Single pass, constant space'
        ],
        relatedProblems: ['single-number-ii', 'single-number-iii']
      },
      {
        id: 'counting-bits',
        title: 'Counting Bits',
        difficulty: 'Easy',
        pattern: 'Math & Bit Manipulation',
        companies: ['Amazon', 'Microsoft', 'Google'],
        leetcodeNumber: 338,
        frequency: 'Medium',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        description: 'Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1\'s in the binary representation of i.',
        approach: 'Use dynamic programming: ans[i] = ans[i >> 1] + (i & 1).',
        solution: `function countBits(n) {
    const ans = new Array(n + 1).fill(0);
    
    for (let i = 1; i <= n; i++) {
        ans[i] = ans[i >> 1] + (i & 1);
    }
    
    return ans;
}`,
        keyPoints: [
          'DP approach with bit manipulation',
          'i >> 1 removes last bit',
          'i & 1 gets last bit'
        ],
        relatedProblems: ['number-of-1-bits', 'power-of-two']
      },
      {
        id: 'sum-of-two-integers',
        title: 'Sum of Two Integers',
        difficulty: 'Medium',
        pattern: 'Math & Bit Manipulation',
        companies: ['Amazon', 'Microsoft', 'Google'],
        leetcodeNumber: 371,
        frequency: 'Medium',
        timeComplexity: 'O(1)',
        spaceComplexity: 'O(1)',
        description: 'Given two integers a and b, return the sum of the two integers without using the operators + and -.',
        approach: 'Use bit manipulation: sum = a ^ b, carry = (a & b) << 1.',
        solution: `function getSum(a, b) {
    while (b !== 0) {
        const carry = (a & b) << 1;
        a = a ^ b;
        b = carry;
    }
    return a;
}`,
        keyPoints: [
          'Bit manipulation for addition',
          'XOR for sum without carry',
          'AND and shift for carry'
        ],
        relatedProblems: ['multiply-strings', 'divide-two-integers']
      }
    ]
  },
  {
    id: 'binary-search',
    name: 'Binary Search',
    description: 'Efficient searching in sorted arrays and search spaces',
    studyOrder: 12,
    estimatedDays: 6,
    keyTechniques: ['Binary Search on Arrays', 'Binary Search on Answer', 'Search Space Reduction'],
    problems: [
      {
        id: 'binary-search',
        title: 'Binary Search',
        difficulty: 'Easy',
        pattern: 'Binary Search',
        companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'],
        leetcodeNumber: 704,
        frequency: 'Very High',
        timeComplexity: 'O(log n)',
        spaceComplexity: 'O(1)',
        description: 'Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.',
        approach: 'Classic binary search with left and right pointers.',
        solution: `function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}`,
        keyPoints: [
          'Classic divide and conquer',
          'Compare middle element with target',
          'Eliminate half of search space each iteration'
        ],
        relatedProblems: ['search-insert-position', 'first-bad-version']
      },
      {
        id: 'search-rotated-sorted-array',
        title: 'Search in Rotated Sorted Array',
        difficulty: 'Medium',
        pattern: 'Binary Search',
        companies: ['Amazon', 'Microsoft', 'Facebook', 'LinkedIn'],
        leetcodeNumber: 33,
        frequency: 'Very High',
        timeComplexity: 'O(log n)',
        spaceComplexity: 'O(1)',
        description: 'You are given an integer array nums sorted in ascending order (with distinct values), and an integer target. The array is rotated at some pivot. Search for target and return its index.',
        approach: 'Identify which half is sorted, then decide which half to search.',
        solution: `function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        }
        
        // Left half is sorted
        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // Right half is sorted
        else {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
    return -1;
}`,
        keyPoints: [
          'Identify sorted half first',
          'Check if target is in sorted range',
          'Handle rotation pivot correctly'
        ],
        relatedProblems: ['find-minimum-rotated-sorted-array', 'search-rotated-sorted-array-ii']
      },
      {
        id: 'find-minimum-rotated-sorted-array',
        title: 'Find Minimum in Rotated Sorted Array',
        difficulty: 'Medium',
        pattern: 'Binary Search',
        companies: ['Amazon', 'Microsoft', 'Facebook'],
        leetcodeNumber: 153,
        frequency: 'High',
        timeComplexity: 'O(log n)',
        spaceComplexity: 'O(1)',
        description: 'Suppose an array of length n sorted in ascending order is rotated. Find the minimum element.',
        approach: 'Use binary search to find the inflection point where rotation occurs.',
        solution: `function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] > nums[right]) {
            // Minimum is in right half
            left = mid + 1;
        } else {
            // Minimum is in left half (including mid)
            right = mid;
        }
    }
    
    return nums[left];
}`,
        keyPoints: [
          'Compare mid with rightmost element',
          'Minimum is where rotation breaks order',
          'Narrow search space by half each time'
        ],
        relatedProblems: ['search-rotated-sorted-array', 'find-peak-element']
      },
      {
        id: 'search-insert-position',
        title: 'Search Insert Position',
        difficulty: 'Easy',
        pattern: 'Binary Search',
        companies: ['Amazon', 'Google'],
        leetcodeNumber: 35,
        frequency: 'High',
        timeComplexity: 'O(log n)',
        spaceComplexity: 'O(1)',
        description: 'Find the index where target should be inserted in sorted array.',
        approach: 'Standard binary search. Return left pointer when not found.',
        solution: `function searchInsert(nums, target) {
    let left = 0, right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left;
}`,
        keyPoints: ['Return left pointer for insertion position', 'Standard binary search template'],
        relatedProblems: ['first-bad-version', 'find-first-last-position']
      },
      {
        id: 'first-bad-version',
        title: 'First Bad Version',
        difficulty: 'Easy',
        pattern: 'Binary Search',
        companies: ['Meta', 'Amazon'],
        leetcodeNumber: 278,
        frequency: 'High',
        timeComplexity: 'O(log n)',
        spaceComplexity: 'O(1)',
        description: 'Find the first bad version to minimize API calls.',
        approach: 'Binary search for first occurrence. When bad found, search left.',
        solution: `function firstBadVersion(n) {
    let left = 1, right = n;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (isBadVersion(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}`,
        keyPoints: ['Search for first occurrence pattern', 'Use left < right for first element'],
        relatedProblems: ['search-insert-position', 'find-first-last-position']
      },
      {
        id: 'find-first-last-position',
        title: 'Find First and Last Position of Element',
        difficulty: 'Medium',
        pattern: 'Binary Search',
        companies: ['Amazon', 'Google', 'Meta'],
        leetcodeNumber: 34,
        frequency: 'High',
        timeComplexity: 'O(log n)',
        spaceComplexity: 'O(1)',
        description: 'Find starting and ending position of target in sorted array.',
        approach: 'Two binary searches: one for first occurrence, one for last.',
        solution: `function searchRange(nums, target) {
    const findFirst = () => {
        let left = 0, right = nums.length - 1, result = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                result = mid;
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    };
    
    const findLast = () => {
        let left = 0, right = nums.length - 1, result = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                result = mid;
                left = mid + 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    };
    
    return [findFirst(), findLast()];
}`,
        keyPoints: ['Two separate binary searches', 'For first: search left when found', 'For last: search right when found'],
        relatedProblems: ['search-insert-position', 'count-of-range-sum']
      },
      {
        id: 'search-2d-matrix',
        title: 'Search a 2D Matrix',
        difficulty: 'Medium',
        pattern: 'Binary Search',
        companies: ['Amazon', 'Google', 'Meta'],
        leetcodeNumber: 74,
        frequency: 'High',
        timeComplexity: 'O(log(m*n))',
        spaceComplexity: 'O(1)',
        description: 'Search for target in sorted 2D matrix.',
        approach: 'Treat 2D matrix as 1D sorted array and apply binary search.',
        solution: `function searchMatrix(matrix, target) {
    const m = matrix.length, n = matrix[0].length;
    let left = 0, right = m * n - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const row = Math.floor(mid / n);
        const col = mid % n;
        const midValue = matrix[row][col];
        
        if (midValue === target) {
            return true;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return false;
}`,
        keyPoints: ['Convert 2D to 1D coordinates', 'row = mid / n, col = mid % n', 'Standard binary search'],
        relatedProblems: ['search-2d-matrix-ii', 'kth-smallest-in-sorted-matrix']
      },
      {
        id: 'find-peak-element',
        title: 'Find Peak Element',
        difficulty: 'Medium',
        pattern: 'Binary Search',
        companies: ['Amazon', 'Google', 'Meta'],
        leetcodeNumber: 162,
        frequency: 'High',
        timeComplexity: 'O(log n)',
        spaceComplexity: 'O(1)',
        description: 'Find a peak element where nums[i] > nums[i-1] and nums[i] > nums[i+1].',
        approach: 'Binary search. Move towards the side with larger neighbor.',
        solution: `function findPeakElement(nums) {
    let left = 0, right = nums.length - 1;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}`,
        keyPoints: ['Always move towards larger neighbor', 'Guaranteed to find a peak', 'Works with multiple peaks'],
        relatedProblems: ['find-peak-element-2d', 'peak-index-mountain-array']
      },
      {
        id: 'kth-largest-element',
        title: 'Kth Largest Element in an Array',
        difficulty: 'Medium',
        pattern: 'Binary Search',
        companies: ['Amazon', 'Google', 'Meta'],
        leetcodeNumber: 215,
        frequency: 'Very High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'Find the kth largest element in an unsorted array.',
        approach: 'Quickselect algorithm (binary search on partition).',
        solution: `function findKthLargest(nums, k) {
    const quickSelect = (left, right, k) => {
        if (left === right) return nums[left];
        
        const pivotIndex = partition(left, right);
        
        if (k === pivotIndex) {
            return nums[k];
        } else if (k < pivotIndex) {
            return quickSelect(left, pivotIndex - 1, k);
        } else {
            return quickSelect(pivotIndex + 1, right, k);
        }
    };
    
    const partition = (left, right) => {
        const pivot = nums[right];
        let i = left;
        
        for (let j = left; j < right; j++) {
            if (nums[j] >= pivot) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                i++;
            }
        }
        
        [nums[i], nums[right]] = [nums[right], nums[i]];
        return i;
    };
    
    return quickSelect(0, nums.length - 1, k - 1);
}`,
        keyPoints: ['Quickselect for O(n) average time', 'Partition around pivot', 'Binary search on partitions'],
        relatedProblems: ['top-k-frequent', 'kth-smallest-element']
      },
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
        description: 'Find median of two sorted arrays.',
        approach: 'Binary search on smaller array to find correct partition.',
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
        keyPoints: ['Binary search on smaller array', 'Find correct partition', 'Handle odd/even cases'],
        relatedProblems: ['kth-smallest-in-sorted-matrix', 'find-k-pairs-smallest-sums']
      }
    ]
  },
  {
    id: 'tries',
    name: 'Tries',
    description: 'Prefix tree for efficient string operations',
    studyOrder: 13,
    estimatedDays: 4,
    keyTechniques: ['Prefix Trees', 'String Matching', 'Word Search'],
    problems: [
      {
        id: 'implement-trie',
        title: 'Implement Trie (Prefix Tree)',
        difficulty: 'Medium',
        pattern: 'Tries',
        companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'],
        leetcodeNumber: 208,
        frequency: 'Very High',
        timeComplexity: 'O(m)',
        spaceComplexity: 'O(ALPHABET_SIZE * N * M)',
        description: 'Implement a trie with insert, search, and startsWith methods.',
        approach: 'Create tree nodes with character mapping and end-of-word flag.',
        solution: `class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(word) {
        let current = this.root;
        
        for (let char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        
        current.isEndOfWord = true;
    }
    
    search(word) {
        let current = this.root;
        
        for (let char of word) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        
        return current.isEndOfWord;
    }
    
    startsWith(prefix) {
        let current = this.root;
        
        for (let char of prefix) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        
        return true;
    }
}`,
        keyPoints: [
          'Tree structure with character children',
          'End-of-word flag for complete words',
          'Efficient prefix matching'
        ],
        relatedProblems: ['design-add-search-words', 'word-search-ii']
      },
      {
        id: 'design-add-search-words',
        title: 'Design Add and Search Words Data Structure',
        difficulty: 'Medium',
        pattern: 'Tries',
        companies: ['Amazon', 'Facebook', 'Microsoft'],
        leetcodeNumber: 211,
        frequency: 'High',
        timeComplexity: 'O(m)',
        spaceComplexity: 'O(ALPHABET_SIZE * N * M)',
        description: 'Design a data structure that supports adding new words and finding if a string matches any previously added string. Words may contain dots \'.\' as wildcards.',
        approach: 'Use trie with DFS for wildcard matching.',
        solution: `class WordDictionary {
    constructor() {
        this.root = { children: {}, isEnd: false };
    }
    
    addWord(word) {
        let current = this.root;
        
        for (let char of word) {
            if (!current.children[char]) {
                current.children[char] = { children: {}, isEnd: false };
            }
            current = current.children[char];
        }
        
        current.isEnd = true;
    }
    
    search(word) {
        function dfs(node, index) {
            if (index === word.length) {
                return node.isEnd;
            }
            
            const char = word[index];
            
            if (char === '.') {
                // Try all possible characters
                for (let child of Object.values(node.children)) {
                    if (dfs(child, index + 1)) {
                        return true;
                    }
                }
                return false;
            } else {
                if (!node.children[char]) {
                    return false;
                }
                return dfs(node.children[char], index + 1);
            }
        }
        
        return dfs(this.root, 0);
    }
}`,
        keyPoints: [
          'Trie with wildcard support',
          'DFS for dot character matching',
          'Backtracking on all possible paths'
        ],
        relatedProblems: ['implement-trie', 'word-search-ii']
      },
      {
        id: 'word-search-ii',
        title: 'Word Search II',
        difficulty: 'Hard',
        pattern: 'Tries',
        companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'],
        leetcodeNumber: 212,
        frequency: 'High',
        timeComplexity: 'O(m * n * 4^k)',
        spaceComplexity: 'O(k)',
        description: 'Given an m x n board of characters and a list of strings words, return all words on the board.',
        approach: 'Build trie from words, then DFS on board using trie for efficient prefix matching.',
        solution: `function findWords(board, words) {
    // Build Trie
    const trie = {};
    for (let word of words) {
        let node = trie;
        for (let char of word) {
            if (!node[char]) node[char] = {};
            node = node[char];
        }
        node.word = word;
    }
    
    const result = [];
    const rows = board.length;
    const cols = board[0].length;
    
    function dfs(row, col, node) {
        if (row < 0 || row >= rows || col < 0 || col >= cols) return;
        
        const char = board[row][col];
        if (!node[char]) return;
        
        node = node[char];
        if (node.word) {
            result.push(node.word);
            delete node.word; // Avoid duplicates
        }
        
        board[row][col] = '#'; // Mark visited
        
        dfs(row + 1, col, node);
        dfs(row - 1, col, node);
        dfs(row, col + 1, node);
        dfs(row, col - 1, node);
        
        board[row][col] = char; // Restore
    }
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            dfs(i, j, trie);
        }
    }
    
    return result;
}`,
        keyPoints: [
          'Combine trie with DFS backtracking',
          'Efficient prefix matching with trie',
          'Mark and unmark visited cells'
        ],
        relatedProblems: ['word-search', 'implement-trie']
      }
    ]
  },
  {
    id: 'greedy',
    name: 'Greedy',
    description: 'Locally optimal choices leading to global optimum',
    studyOrder: 14,
    estimatedDays: 4,
    keyTechniques: ['Local Optimization', 'Sorting', 'Priority Selection'],
    problems: [
      {
        id: 'maximum-subarray',
        title: 'Maximum Subarray',
        difficulty: 'Medium',
        pattern: 'Greedy',
        companies: ['Amazon', 'Microsoft', 'Facebook', 'LinkedIn'],
        leetcodeNumber: 53,
        frequency: 'Very High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'Given an integer array nums, find the contiguous subarray with the largest sum, and return its sum.',
        approach: 'Kadane\'s algorithm: reset sum when it becomes negative.',
        solution: `function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}`,
        keyPoints: [
          'Kadane\'s algorithm',
          'Reset when sum becomes negative',
          'Track global maximum'
        ],
        relatedProblems: ['maximum-product-subarray', 'best-time-to-buy-sell-stock']
      },
      {
        id: 'gas-station',
        title: 'Gas Station',
        difficulty: 'Medium',
        pattern: 'Greedy',
        companies: ['Amazon', 'Facebook', 'Google'],
        leetcodeNumber: 134,
        frequency: 'Medium',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'There are n gas stations along a circular route. Given two arrays gas and cost, return the starting gas station\'s index if you can travel around the circuit once.',
        approach: 'Greedy: if total gas >= total cost, solution exists. Find valid starting point.',
        solution: `function canCompleteCircuit(gas, cost) {
    let totalGas = 0;
    let totalCost = 0;
    let tank = 0;
    let start = 0;
    
    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        tank += gas[i] - cost[i];
        
        // If tank becomes negative, we can't reach here from current start
        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }
    
    return totalGas >= totalCost ? start : -1;
}`,
        keyPoints: [
          'Check if solution is possible first',
          'Reset starting point when tank becomes negative',
          'Single pass algorithm'
        ],
        relatedProblems: ['candy', 'jump-game']
      },
      {
        id: 'jump-game',
        title: 'Jump Game',
        difficulty: 'Medium',
        pattern: 'Greedy',
        companies: ['Amazon', 'Microsoft', 'Google'],
        leetcodeNumber: 55,
        frequency: 'High',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'You are given an integer array nums. You are initially positioned at the array\'s first index, and each element in the array represents your maximum jump length at that position.',
        approach: 'Track the maximum reachable position. If current position exceeds max reach, return false.',
        solution: `function canJump(nums) {
    let maxReach = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false;
        maxReach = Math.max(maxReach, i + nums[i]);
        if (maxReach >= nums.length - 1) return true;
    }
    
    return true;
}`,
        keyPoints: [
          'Track maximum reachable position',
          'Early termination when goal reached',
          'Greedy approach'
        ],
        relatedProblems: ['jump-game-ii', 'gas-station']
      },
      {
        id: 'candy',
        title: 'Candy',
        difficulty: 'Hard',
        pattern: 'Greedy',
        companies: ['Amazon', 'Microsoft', 'Google'],
        leetcodeNumber: 135,
        frequency: 'Medium',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        description: 'There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.',
        approach: 'Two-pass greedy: left to right, then right to left to satisfy both conditions.',
        solution: `function candy(ratings) {
    const n = ratings.length;
    const candies = new Array(n).fill(1);
    
    // Left to right pass
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }
    
    // Right to left pass
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }
    
    return candies.reduce((sum, candy) => sum + candy, 0);
}`,
        keyPoints: [
          'Two-pass greedy algorithm',
          'Satisfy both left and right conditions',
          'Take maximum of two passes'
        ],
        relatedProblems: ['gas-station', 'jump-game']
      }
    ]
  },
  {
    id: 'advanced-graphs',
    name: 'Advanced Graphs',
    description: 'Complex graph algorithms and shortest paths',
    studyOrder: 15,
    estimatedDays: 6,
    keyTechniques: ['Dijkstra', 'Union Find', 'Minimum Spanning Tree', 'Advanced DFS'],
    problems: [
      {
        id: 'network-delay-time',
        title: 'Network Delay Time',
        difficulty: 'Medium',
        pattern: 'Advanced Graphs',
        companies: ['Amazon', 'Google', 'Facebook'],
        leetcodeNumber: 743,
        frequency: 'Medium',
        timeComplexity: 'O(E log V)',
        spaceComplexity: 'O(V + E)',
        description: 'You are given a network of n nodes. Given times array and integers n and k, return the time it takes for all nodes to receive the signal sent from node k.',
        approach: 'Use Dijkstra\'s algorithm to find shortest paths from source to all nodes.',
        solution: `function networkDelayTime(times, n, k) {
    // Build adjacency list
    const graph = new Map();
    for (let [u, v, w] of times) {
        if (!graph.has(u)) graph.set(u, []);
        graph.get(u).push([v, w]);
    }
    
    // Dijkstra's algorithm
    const distances = {};
    const pq = [[0, k]]; // [distance, node]
    
    while (pq.length > 0) {
        pq.sort((a, b) => a[0] - b[0]);
        const [dist, node] = pq.shift();
        
        if (node in distances) continue;
        distances[node] = dist;
        
        if (graph.has(node)) {
            for (let [neighbor, weight] of graph.get(node)) {
                if (!(neighbor in distances)) {
                    pq.push([dist + weight, neighbor]);
                }
            }
        }
    }
    
    if (Object.keys(distances).length !== n) return -1;
    return Math.max(...Object.values(distances));
}`,
        keyPoints: [
          'Dijkstra\'s shortest path algorithm',
          'Priority queue for minimum distance',
          'Check if all nodes reachable'
        ],
        relatedProblems: ['cheapest-flights-k-stops', 'path-with-maximum-probability']
      },
      {
        id: 'accounts-merge',
        title: 'Accounts Merge',
        difficulty: 'Medium',
        pattern: 'Advanced Graphs',
        companies: ['Facebook', 'Amazon', 'Google'],
        leetcodeNumber: 721,
        frequency: 'Medium',
        timeComplexity: 'O(N log N)',
        spaceComplexity: 'O(N)',
        description: 'Given a list of accounts where each element accounts[i] contains the account name and a list of emails, merge accounts that belong to the same person.',
        approach: 'Use Union Find or DFS to group connected emails, then merge accounts.',
        solution: `function accountsMerge(accounts) {
    const emailToName = new Map();
    const graph = new Map();
    
    // Build graph
    for (let account of accounts) {
        const name = account[0];
        const firstEmail = account[1];
        
        for (let i = 1; i < account.length; i++) {
            const email = account[i];
            emailToName.set(email, name);
            
            if (!graph.has(email)) graph.set(email, []);
            if (!graph.has(firstEmail)) graph.set(firstEmail, []);
            
            graph.get(email).push(firstEmail);
            graph.get(firstEmail).push(email);
        }
    }
    
    const visited = new Set();
    const result = [];
    
    function dfs(email, component) {
        visited.add(email);
        component.push(email);
        
        if (graph.has(email)) {
            for (let neighbor of graph.get(email)) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor, component);
                }
            }
        }
    }
    
    for (let email of emailToName.keys()) {
        if (!visited.has(email)) {
            const component = [];
            dfs(email, component);
            component.sort();
            result.push([emailToName.get(email), ...component]);
        }
    }
    
    return result;
}`,
        keyPoints: [
          'Model as graph connectivity problem',
          'Use DFS to find connected components',
          'Sort emails within each account'
        ],
        relatedProblems: ['number-of-provinces', 'redundant-connection']
      }
    ]
  },
  
  {
    id: 'system-design',
    name: 'System Design',
    description: 'Data structure design and system architecture problems',
    studyOrder: 17,
    estimatedDays: 8,
    keyTechniques: ['HashMap + LinkedList', 'Multiple Data Structures', 'API Design', 'Cache Design'],
    problems: [
      {
        id: 'lru-cache',
        title: 'LRU Cache',
        difficulty: 'Medium',
        pattern: 'System Design',
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
      {
        id: 'design-twitter',
        title: 'Design Twitter',
        difficulty: 'Medium',
        pattern: 'System Design',
        companies: ['Amazon', 'Google', 'Meta'],
        leetcodeNumber: 355,
        frequency: 'High',
        timeComplexity: 'O(k log n)',
        spaceComplexity: 'O(n)',
        description: 'Design a simplified version of Twitter with basic functionality.',
        approach: 'Use HashMap for users, priority queue for timeline merging, and timestamp for ordering.',
        solution: `class Twitter {
    constructor() {
        this.time = 0;
        this.userTweets = new Map(); // userId -> [tweets]
        this.userFollows = new Map(); // userId -> Set(followeeIds)
    }
    
    postTweet(userId, tweetId) {
        if (!this.userTweets.has(userId)) {
            this.userTweets.set(userId, []);
        }
        this.userTweets.get(userId).push([this.time++, tweetId]);
    }
    
    getNewsFeed(userId) {
        const tweets = [];
        
        // Get user's own tweets
        if (this.userTweets.has(userId)) {
            tweets.push(...this.userTweets.get(userId));
        }
        
        // Get followed users' tweets
        if (this.userFollows.has(userId)) {
            for (const followeeId of this.userFollows.get(userId)) {
                if (this.userTweets.has(followeeId)) {
                    tweets.push(...this.userTweets.get(followeeId));
                }
            }
        }
        
        // Sort by timestamp and return top 10
        tweets.sort((a, b) => b[0] - a[0]);
        return tweets.slice(0, 10).map(tweet => tweet[1]);
    }
    
    follow(followerId, followeeId) {
        if (!this.userFollows.has(followerId)) {
            this.userFollows.set(followerId, new Set());
        }
        this.userFollows.get(followerId).add(followeeId);
    }
    
    unfollow(followerId, followeeId) {
        if (this.userFollows.has(followerId)) {
            this.userFollows.get(followerId).delete(followeeId);
        }
    }
}`,
        keyPoints: [
          'Use timestamp for tweet ordering',
          'HashMap for user data, Set for follow relationships',
          'Merge and sort tweets for news feed generation'
        ],
        relatedProblems: ['lru-cache', 'design-hit-counter']
      },
      {
        id: 'design-hit-counter',
        title: 'Design Hit Counter',
        difficulty: 'Medium',
        pattern: 'System Design',
        companies: ['Amazon', 'Google', 'Microsoft'],
        leetcodeNumber: 362,
        frequency: 'Medium',
        timeComplexity: 'O(1)',
        spaceComplexity: 'O(300)',
        description: 'Design a hit counter which counts the number of hits received in the past 5 minutes.',
        approach: 'Use circular array to store timestamps and counts for sliding window.',
        solution: `class HitCounter {
    constructor() {
        this.times = new Array(300).fill(0);
        this.hits = new Array(300).fill(0);
    }
    
    hit(timestamp) {
        const index = timestamp % 300;
        if (this.times[index] !== timestamp) {
            this.times[index] = timestamp;
            this.hits[index] = 1;
        } else {
            this.hits[index]++;
        }
    }
    
    getHits(timestamp) {
        let total = 0;
        for (let i = 0; i < 300; i++) {
            if (timestamp - this.times[i] < 300) {
                total += this.hits[i];
            }
        }
        return total;
    }
}`,
        keyPoints: [
          'Circular array for sliding window',
          'Modulo operation for index',
          'Check timestamp validity'
        ],
        relatedProblems: ['lru-cache', 'design-twitter']
      },
      {
        id: 'design-underground-system',
        title: 'Design Underground System',
        difficulty: 'Medium',
        pattern: 'System Design',
        companies: ['Amazon', 'Google'],
        leetcodeNumber: 1396,
        frequency: 'Medium',
        timeComplexity: 'O(1)',
        spaceComplexity: 'O(n)',
        description: 'Design an underground system to track customer travel times between stations.',
        approach: 'Use two HashMaps: one for check-ins, one for route statistics.',
        solution: `class UndergroundSystem {
    constructor() {
        this.checkIns = new Map(); // id -> [station, time]
        this.routes = new Map(); // route -> [totalTime, count]
    }
    
    checkIn(id, stationName, t) {
        this.checkIns.set(id, [stationName, t]);
    }
    
    checkOut(id, stationName, t) {
        const [startStation, startTime] = this.checkIns.get(id);
        const route = startStation + ',' + stationName;
        const duration = t - startTime;
        
        if (!this.routes.has(route)) {
            this.routes.set(route, [0, 0]);
        }
        
        const [totalTime, count] = this.routes.get(route);
        this.routes.set(route, [totalTime + duration, count + 1]);
        
        this.checkIns.delete(id);
    }
    
    getAverageTime(startStation, endStation) {
        const route = startStation + ',' + endStation;
        const [totalTime, count] = this.routes.get(route);
        return totalTime / count;
    }
}`,
        keyPoints: [
          'Two HashMap approach',
          'Track check-ins and route statistics',
          'Calculate average from total and count'
        ],
        relatedProblems: ['lru-cache', 'design-twitter']
      }
    ]
  }
];

// Study schedule for 90 days
export const studySchedule = {
  totalDays: 90,
  phaseDuration: {
    foundation: 20, // Days 1-20
    intermediate: 35, // Days 21-55
    advanced: 25,   // Days 56-80
    revision: 10     // Days 81-90
  },
  dailyGoals: {
    foundation: {
      newProblems: 2,
      reviewProblems: 1,
      theory: 30 // minutes
    },
    intermediate: {
      newProblems: 1,
      reviewProblems: 2,
      theory: 20
    },
    advanced: {
      newProblems: 1,
      reviewProblems: 3,
      theory: 15
    },
    revision: {
      newProblems: 0,
      reviewProblems: 8,
      theory: 0
    }
  }
};

// Company frequency data
export const companyFrequency = {
  'Amazon': { problems: 45, frequency: 'Very High' },
  'Microsoft': { problems: 42, frequency: 'Very High' },
  'Facebook': { problems: 38, frequency: 'Very High' },
  'Google': { problems: 35, frequency: 'High' },
  'Apple': { problems: 28, frequency: 'High' },
  'Bloomberg': { problems: 25, frequency: 'High' },
  'LinkedIn': { problems: 22, frequency: 'Medium' },
  'Adobe': { problems: 18, frequency: 'Medium' },
  'Uber': { problems: 15, frequency: 'Medium' },
  'Netflix': { problems: 12, frequency: 'Medium' }
};

export const getAllProblems = (): Problem[] => {
  return patterns.flatMap(pattern => pattern.problems);
};

export const getProblemsByPattern = (patternId: string): Problem[] => {
  const pattern = patterns.find(p => p.id === patternId);
  return pattern ? pattern.problems : [];
};

export const getProblemById = (problemId: string): Problem | undefined => {
  return getAllProblems().find(p => p.id === problemId);
};
