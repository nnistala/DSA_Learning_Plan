
import { NextResponse } from 'next/server';
import { getAllProblems, patterns, studySchedule, companyFrequency } from '@/data/problems';

export async function GET() {
  const allProblems = getAllProblems();
  
  // Create a comprehensive text-based handbook
  let handbookContent = `
# DSA Master - Top 75 Interview Problems Handbook
## The Ultimate Guide to FAANG Interview Success

---

## Table of Contents

1. Introduction & Study Guide
2. 60-Day Study Schedule  
3. Company Analysis
4. Pattern-Based Problem Collection
5. Quick Reference & Cheat Sheets
6. Interview Tips & Success Strategies

---

## 1. Introduction & Study Guide

This comprehensive handbook contains the top ${allProblems.length} problems most frequently asked by FAANG and other leading tech companies. Each problem is carefully selected based on:

• Interview frequency at top companies
• Pattern importance for problem-solving skills  
• Educational value for building DSA intuition
• Real-world applicability and variations

### How to Use This Handbook

1. **Start with Easy Problems**: Build confidence with fundamental patterns
2. **Master One Pattern at a Time**: Don't jump between patterns randomly
3. **Understand, Don't Memorize**: Focus on the underlying approach
4. **Practice Variations**: Each pattern has multiple problem types
5. **Time Yourself**: Practice under interview-like conditions
6. **Explain Out Loud**: Practice explaining your approach clearly

---

## 2. 60-Day Study Schedule

### Phase 1: Foundation (Days 1-15)
- **Daily Goals**: ${studySchedule.dailyGoals.foundation.newProblems} new problems, ${studySchedule.dailyGoals.foundation.reviewProblems} review, ${studySchedule.dailyGoals.foundation.theory} min theory
- **Focus**: Array & Hashing, Two Pointers, Sliding Window
- **Goal**: Build strong fundamentals with basic patterns

### Phase 2: Intermediate (Days 16-40)  
- **Daily Goals**: ${studySchedule.dailyGoals.intermediate.newProblems} new problem, ${studySchedule.dailyGoals.intermediate.reviewProblems} reviews, ${studySchedule.dailyGoals.intermediate.theory} min theory
- **Focus**: Binary Trees, Graphs, Stack/Queue
- **Goal**: Tackle more complex problems and advanced patterns

### Phase 3: Advanced (Days 41-55)
- **Daily Goals**: ${studySchedule.dailyGoals.advanced.newProblems} new problem, ${studySchedule.dailyGoals.advanced.reviewProblems} reviews, ${studySchedule.dailyGoals.advanced.theory} min theory  
- **Focus**: Dynamic Programming, Backtracking, Advanced Trees
- **Goal**: Master challenging concepts and optimization techniques

### Phase 4: Revision (Days 56-60)
- **Daily Goals**: ${studySchedule.dailyGoals.revision.reviewProblems} reviews, mock interviews
- **Focus**: Mixed review, weak areas, interview simulation
- **Goal**: Review and reinforce all concepts

---

## 3. Company Analysis

### Top Companies by Problem Count:
${Object.entries(companyFrequency).map(([company, data]) => 
  `• **${company}**: ${allProblems.filter(p => p.companies.includes(company)).length} problems`
).join('\n')}

---

## 4. Pattern-Based Problem Collection

`;

  // Add each pattern with its problems
  patterns.forEach((pattern, patternIndex) => {
    handbookContent += `
### ${patternIndex + 1}. ${pattern.name}

**Description**: ${pattern.description}
**Estimated Study Time**: ${pattern.estimatedDays} days
**Key Techniques**: ${pattern.keyTechniques.join(', ')}

#### Problems in this Pattern:

`;

    pattern.problems.forEach((problem, problemIndex) => {
      handbookContent += `
##### ${patternIndex + 1}.${problemIndex + 1} ${problem.title} (${problem.difficulty})

**LeetCode**: #${problem.leetcodeNumber || 'N/A'}
**Companies**: ${problem.companies.join(', ')}
**Frequency**: ${problem.frequency}
**Time Complexity**: ${problem.timeComplexity}
**Space Complexity**: ${problem.spaceComplexity}

**Problem**: ${problem.description}

**Approach**: ${problem.approach}

**Solution (JavaScript):**
\`\`\`javascript
${problem.solution}
\`\`\`

**Key Points**:
${problem.keyPoints.map(point => `• ${point}`).join('\n')}

**Related Problems**: ${problem.relatedProblems.join(', ')}

---
`;
    });
  });

  // Add interview tips
  handbookContent += `
## 5. Interview Tips & Success Strategies

### Before the Interview
• Practice coding on a whiteboard or paper
• Review your solutions and be able to explain them clearly
• Prepare questions about the company and role
• Get familiar with the interview format

### During the Interview
• Always clarify the problem and constraints before coding
• Start with a brute force approach, then optimize
• Discuss time and space complexity trade-offs
• Test your solution with edge cases
• Think out loud and explain your reasoning

### After Each Problem
• Ask for feedback on your approach
• Discuss potential optimizations
• Prepare for follow-up questions and variations
• Show enthusiasm for problem-solving

### Common Follow-up Questions
• "How would you optimize this further?"
• "What if the input size was much larger?"
• "How would you handle invalid inputs?"
• "Can you solve this with different constraints?"

---

## 6. Quick Reference

### Time Complexity Cheat Sheet
• O(1) - Constant: Hash table lookup, array access
• O(log n) - Logarithmic: Binary search, balanced tree operations
• O(n) - Linear: Single array traversal, hash table operations
• O(n log n) - Log-linear: Merge sort, heap operations
• O(n²) - Quadratic: Nested loops, some DP problems
• O(2^n) - Exponential: Recursive solutions without memoization

### Space Complexity Cheat Sheet  
• O(1) - Constant: Few variables, in-place algorithms
• O(n) - Linear: Additional arrays, hash tables
• O(h) - Tree height: Recursive call stack
• O(V + E) - Graph: Adjacency lists, visited arrays

### Pattern Recognition Guide
• **Two pointers**: Sorted array, palindrome check, pair finding
• **Sliding window**: Substring problems, subarray optimization  
• **Hash table**: Frequency counting, lookups, duplicates
• **BFS**: Level order, shortest path, tree traversal
• **DFS**: Path finding, connected components, backtracking
• **Dynamic Programming**: Optimization, overlapping subproblems
• **Greedy**: Local optimal choices, intervals, scheduling

---

Generated on: ${new Date().toLocaleDateString()}
Total Problems: ${allProblems.length}
Total Patterns: ${patterns.length}

Happy Coding! 🚀
`;

  // Return as downloadable text file (simplified for now)
  const headers = new Headers();
  headers.set('Content-Type', 'text/plain');
  headers.set('Content-Disposition', 'attachment; filename="dsa-handbook.txt"');
  
  return new NextResponse(handbookContent, { headers });
}
