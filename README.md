# 🚀 DSA Learning Plan - FAANG Interview Preparation

A comprehensive, interactive platform for mastering Data Structures & Algorithms with **123 curated problems** designed specifically for senior developers preparing for FAANG interviews.

## ✨ Features

### 📚 **Comprehensive Problem Set**
- **123 curated problems** - Hand-picked from FAANG interviews
- **17 essential patterns** covering all major algorithmic concepts
- **Multi-pattern problems** - Problems that can be solved using different approaches
- **Company-specific** problem frequency data from top tech companies

### 🎯 **Smart Learning System**
- **90-day structured study plan** with 4 distinct phases
- **Difficulty-based progression** from foundation to advanced
- **Pattern-focused learning** for systematic mastery
- **Real-world problem scenarios** from actual interviews

### 🔧 **Technical Excellence**
- **Next.js 14** with TypeScript for type safety
- **TailwindCSS** for responsive, modern UI
- **Shadcn/ui** components for consistent design
- **Mobile-optimized** for learning on any device
- **Static site generation** for fast loading

### 📊 **Data Structures Implementation**
- **Complete JavaScript implementations** of fundamental data structures
- **Interactive code examples** with time/space complexity analysis
- **Practical usage examples** for each data structure
- **Stack, Queue, Linked List, Binary Tree, Hash Table, Heap** implementations

## 🏗️ **Architecture**

```
dsa_interview_prep/
├── app/                    # Next.js application
│   ├── app/               # App router pages
│   │   ├── problems/      # Problem listing and individual pages
│   │   ├── schedule/      # Study schedule page
│   │   ├── data-structures/ # Data structures implementation
│   │   └── handbook/      # PDF guide
│   ├── components/        # Reusable UI components
│   ├── data/             # Problem definitions and patterns
│   ├── lib/              # Utilities and configurations
│   └── public/           # Static assets and manifest
├── .github/workflows/     # GitHub Actions deployment
└── README.md
```

## 🚀 **Quick Start**

### Prerequisites
- Node.js 18+ and Yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nnistala/DSA_Learning_Plan.git
   cd dsa_interview_prep
   ```

2. **Install dependencies**
   ```bash
   cd app
   yarn install
   ```

3. **Run the development server**
   ```bash
   yarn dev
   ```

4. **Build for production**
   ```bash
   yarn build
   yarn start
   ```

### Live Demo
Visit the live application: **https://nnistala.github.io/DSA_Learning_Plan/**

## 📋 **Study Plan Overview**

### Phase 1: Foundation (Days 1-20)
- **Focus**: Core patterns and fundamentals
- **Patterns**: Array & Hashing, Two Pointers, Stack, Sliding Window
- **Problems**: 40+ problems covering basic patterns
- **Goal**: Build strong foundation in essential algorithms

### Phase 2: Intermediate (Days 21-55)
- **Focus**: Intermediate patterns and optimization
- **Patterns**: Binary Tree, Linked List, Binary Search, Dynamic Programming
- **Problems**: 50+ additional problems with advanced concepts
- **Goal**: Expand pattern knowledge and optimization thinking

### Phase 3: Advanced (Days 56-80)
- **Focus**: Advanced patterns and system design
- **Patterns**: Graphs, Backtracking, Intervals, Math & Bit Manipulation, Tries
- **Problems**: 30+ advanced problems with complex scenarios
- **Goal**: Master advanced algorithms and system design concepts

### Phase 4: Revision (Days 81-90)
- **Focus**: Review and system design mastery
- **Patterns**: Greedy, Advanced Graphs, System Design
- **Problems**: Review and optimization of all problems
- **Goal**: Achieve interview readiness and confidence

## 🎯 **Problem Categories**

| Pattern | Problems | Difficulty | Key Companies |
|---------|----------|------------|---------------|
| Array & Hashing | 15 | Easy-Hard | Google, Amazon, Meta |
| Two Pointers | 11 | Easy-Hard | Meta, Amazon, Apple |
| Stack | 10 | Easy-Hard | Amazon, Google, Meta |
| Sliding Window | 10 | Medium-Hard | Amazon, Google, Meta |
| Binary Tree | 12 | Medium-Hard | Google, Meta, Amazon |
| Dynamic Programming | 8 | Medium-Hard | Google, Meta, Amazon |
| Linked List | 12 | Easy-Hard | Meta, Amazon, Apple |
| Graphs | 5 | Medium-Hard | Google, Meta, Amazon |
| Binary Search | 10 | Easy-Hard | Google, Amazon, Meta |
| Heap / Priority Queue | 3 | Medium-Hard | Google, Meta, Amazon |
| Backtracking | 4 | Medium-Hard | Google, Meta, Amazon |
| Intervals | 4 | Medium-Hard | Amazon, Google, Meta |
| Math & Bit Manipulation | 6 | Easy-Hard | Google, Meta, Amazon |
| Greedy | 4 | Medium-Hard | Google, Meta, Amazon |
| System Design | 4 | Medium-Hard | All FAANG |
| Tries | 3 | Medium-Hard | Google, Meta, Amazon |
| Advanced Graphs | 2 | Hard | Google, Meta, Amazon |

## 🏢 **Company Focus**

- **Google**: Graph algorithms, System design, Optimization (30+ problems)
- **Meta**: Dynamic Programming, Trees, System design (28+ problems)  
- **Amazon**: Arrays, Strings, Leadership principles (35+ problems)
- **Apple**: Data structures, Algorithms, Design patterns (20+ problems)
- **Microsoft**: Problem solving, System design, Collaboration (25+ problems)

## 🔧 **Development**

### Tech Stack
- **Frontend**: Next.js 14, TypeScript, TailwindCSS
- **UI Components**: Shadcn/ui, Radix UI
- **Styling**: TailwindCSS with custom design system
- **Deployment**: GitHub Pages with GitHub Actions
- **Static Generation**: Next.js static export

### Key Commands
```bash
# Development
yarn dev              # Start development server
yarn build           # Build for production
yarn start           # Start production server

# Deployment
yarn build           # Build static files
git push             # Deploy to GitHub Pages (automatic)

# Linting & Testing
yarn lint            # Run ESLint
yarn type-check      # TypeScript checking
```

## 🚀 **Deployment**

### GitHub Pages Deployment (Current)
The application is automatically deployed to GitHub Pages using GitHub Actions:

1. **Automatic Deployment**: Every push to the `main` branch triggers deployment
2. **Live URL**: https://nnistala.github.io/DSA_Learning_Plan/
3. **Build Process**: Static site generation with Next.js export
4. **Workflow**: Located in `.github/workflows/deploy.yml`

### Manual Deployment
```bash
# Build the application
cd app
yarn build

# The static files are generated in the `out/` directory
# GitHub Actions automatically handles the deployment
```

## 📱 **Mobile Optimization**

The platform is fully responsive and optimized for:
- **Desktop**: Full-featured learning environment with code editor
- **Tablet**: Touch-optimized interface for problem review
- **Mobile**: Quick problem lookup and study on-the-go
- **PWA Features**: Installable as a web app for offline access

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 **Success Metrics**

After completing this program, you should be able to:
- ✅ Solve 95% of FAANG interview problems confidently
- ✅ Explain time/space complexity for any solution
- ✅ Optimize solutions for different constraints
- ✅ Design scalable systems for common use cases
- ✅ Implement fundamental data structures from scratch
- ✅ Communicate solutions clearly and confidently

## 🔗 **Resources**

- [LeetCode](https://leetcode.com) - Practice problems online
- [System Design Primer](https://github.com/donnemartin/system-design-primer) - System design concepts
- [Algorithm Visualizations](https://visualgo.net) - Visual algorithm learning
- [Company Interview Experiences](https://leetcode.com/discuss/interview-experience) - Real interview stories
- [GitHub Repository](https://github.com/nnistala/DSA_Learning_Plan) - Source code

## 🚀 **Live Application**

**Visit the live application**: https://nnistala.github.io/DSA_Learning_Plan/

---

**Happy Coding! 🚀**

*Built with ❤️ for developers who want to excel in technical interviews*
