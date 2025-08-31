# 🚀 DSA Learning Plan - FAANG Interview Preparation

A comprehensive, interactive platform for mastering Data Structures & Algorithms with **125+ curated problems** designed specifically for senior developers preparing for FAANG interviews.

## ✨ Features

### 📚 **Comprehensive Problem Set**
- **75 Blind 75 problems** - The gold standard for FAANG prep
- **50+ Advanced problems** - For senior developer expertise
- **20 Patterns** covering all major algorithmic concepts
- **Company-specific** problem frequency data

### 🎯 **Smart Learning System**
- **90-day structured study plan** with 5 distinct phases
- **Progress tracking** with detailed analytics
- **Difficulty-based progression** from foundation to advanced
- **Spaced repetition** for optimal retention

### 🔧 **Technical Excellence**
- **Next.js 14** with TypeScript for type safety
- **Prisma ORM** with PostgreSQL for robust data management
- **NextAuth.js** for secure authentication
- **TailwindCSS** for responsive, modern UI
- **Mobile-optimized** for learning on any device

### 📊 **Advanced Analytics**
- Real-time progress tracking
- Pattern mastery visualization
- Company-wise problem distribution
- Time complexity analysis
- Performance metrics

## 🏗️ **Architecture**

```
dsa_interview_prep/
├── app/                    # Next.js application
│   ├── app/               # App router pages
│   ├── components/        # Reusable UI components
│   ├── lib/              # Utilities and configurations
│   ├── prisma/           # Database schema and migrations
│   └── scripts/          # Seed scripts and utilities
├── data/                 # Study materials and PDFs
└── README.md
```

## 🚀 **Quick Start**

### Prerequisites
- Node.js 18+ and Yarn
- PostgreSQL database
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd dsa_interview_prep
   ```

2. **Install dependencies**
   ```bash
   cd app
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your database URL and auth secrets
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   npx prisma db seed
   ```

5. **Run the development server**
   ```bash
   yarn dev
   ```

6. **Build for production**
   ```bash
   yarn build
   yarn start
   ```

## 📋 **Study Plan Overview**

### Phase 1: Foundation Mastery (Days 1-20)
- **Focus**: Core patterns and fundamentals
- **Problems**: 40 problems covering basic patterns
- **Goal**: Build strong foundation in essential algorithms

### Phase 2: Pattern Expansion (Days 21-45)
- **Focus**: Intermediate patterns and optimization
- **Problems**: 50 additional problems with system design intro
- **Goal**: Expand pattern knowledge and start optimization thinking

### Phase 3: Advanced Mastery (Days 46-70)
- **Focus**: Hard problems and system design
- **Problems**: 35 advanced problems with complex scenarios
- **Goal**: Master advanced algorithms and system design concepts

### Phase 4: Interview Simulation (Days 71-85)
- **Focus**: Mock interviews and problem-solving under pressure
- **Problems**: Review and optimization of all problems
- **Goal**: Build interview confidence and speed

### Phase 5: Final Polish (Days 86-90)
- **Focus**: Weak area review and confidence building
- **Problems**: Targeted review based on performance
- **Goal**: Achieve interview readiness

## 🎯 **Problem Categories**

| Pattern | Problems | Difficulty | Key Companies |
|---------|----------|------------|---------------|
| Array & Hashing | 18 | Easy-Hard | Google, Amazon, Meta |
| Two Pointers | 12 | Easy-Hard | Meta, Amazon, Apple |
| Sliding Window | 11 | Medium-Hard | Amazon, Google, Meta |
| Trees & Graphs | 20 | Medium-Hard | Google, Meta, Amazon |
| Dynamic Programming | 16 | Medium-Hard | Google, Meta, Amazon |
| System Design | 8 | Medium-Hard | All FAANG |

## 🏢 **Company Focus**

- **Google**: Graph algorithms, System design, Optimization (35 problems)
- **Meta**: Dynamic Programming, Trees, System design (32 problems)  
- **Amazon**: Arrays, Strings, Leadership principles (40 problems)
- **Apple**: Data structures, Algorithms, Design patterns (25 problems)
- **Microsoft**: Problem solving, System design, Collaboration (28 problems)

## 🔧 **Development**

### Tech Stack
- **Frontend**: Next.js 14, TypeScript, TailwindCSS
- **Backend**: Next.js API routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js
- **Deployment**: Vercel/GitHub Pages

### Key Commands
```bash
# Development
yarn dev              # Start development server
yarn build           # Build for production
yarn start           # Start production server

# Database
npx prisma generate  # Generate Prisma client
npx prisma db push   # Push schema changes
npx prisma db seed   # Seed database

# Linting & Testing
yarn lint            # Run ESLint
yarn type-check      # TypeScript checking
```

## 🚀 **Deployment**

### GitHub Pages Deployment
1. Build the static export:
   ```bash
   yarn build
   yarn export
   ```

2. Deploy to GitHub Pages using the `out/` directory

### Vercel Deployment (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables
3. Deploy automatically on push

## 📱 **Mobile Optimization**

The platform is fully responsive and optimized for:
- **Desktop**: Full-featured development environment
- **Tablet**: Touch-optimized interface for review
- **Mobile**: Quick problem lookup and progress tracking

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
- ✅ Solve 95% of FAANG interview problems
- ✅ Explain time/space complexity for any solution
- ✅ Optimize solutions for different constraints
- ✅ Design scalable systems for common use cases
- ✅ Communicate solutions clearly and confidently

## 🔗 **Resources**

- [LeetCode Profile Integration](https://leetcode.com)
- [System Design Primer](https://github.com/donnemartin/system-design-primer)
- [Algorithm Visualizations](https://visualgo.net)
- [Company Interview Experiences](https://leetcode.com/discuss/interview-experience)

---

**Happy Coding! 🚀**

*Built with ❤️ for developers who want to excel in technical interviews*
# Trigger GitHub Pages Deployment
