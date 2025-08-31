// Bulk addition script to reach 125+ problems
const fs = require('fs');

const bulkProblems = {
  'Binary Search': [
    {
      id: 'search-insert-position',
      title: 'Search Insert Position',
      difficulty: 'Easy',
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
      keyPoints: ['Return left pointer for insertion position', 'Standard binary search template', 'Works for duplicates'],
      relatedProblems: ['first-bad-version', 'find-first-last-position']
    },
    {
      id: 'first-bad-version',
      title: 'First Bad Version',
      difficulty: 'Easy',
      leetcodeNumber: 278,
      frequency: 'High',
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(1)',
      description: 'Find the first bad version to minimize API calls.',
      approach: 'Binary search on versions. When bad found, search left for first occurrence.',
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
      keyPoints: ['Search for first occurrence pattern', 'Use left < right for first element', 'Minimize API calls with binary search'],
      relatedProblems: ['search-insert-position', 'find-first-last-position']
    }
  ],
  
  'Linked List': [
    {
      id: 'add-two-numbers',
      title: 'Add Two Numbers',
      difficulty: 'Medium',
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
    }
  ],
  
  'Sliding Window': [
    {
      id: 'sliding-window-maximum',
      title: 'Sliding Window Maximum',
      difficulty: 'Hard',
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
    }
  ]
};

// Calculate how many problems this adds
let totalAdded = 0;
Object.entries(bulkProblems).forEach(([pattern, problems]) => {
  console.log(`${pattern}: Adding ${problems.length} problems`);
  totalAdded += problems.length;
});
console.log(`Total problems to add: ${totalAdded}`);

