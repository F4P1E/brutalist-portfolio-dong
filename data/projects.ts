export type ProjectAward = {
  label: string
  platform: string
  url: string
  badge?: {
    src: string
    alt: string
    width: number
    height: number
  }
}

export type ProjectKpis = {
  users: string
  launchTime: string
  coreImpact: string
  performance: string
}

export type ProjectCaseStudy = {
  problem: string
  build: string
  result: string
}

export type ProjectStage = "now-building" | "shipped"

export type Contributor = {
  name: string
  github: string
}

export type Project = {
  title: string
  category: string
  year: string
  description: string
  tech: string[]
  link: string
  github?: string
  highlighted?: boolean
  role?: string
  proof?: string
  recruiterTakeaway?: string
  award?: ProjectAward
  awards?: ProjectAward[]
  kpis?: ProjectKpis
  caseStudy?: ProjectCaseStudy
  stage?: ProjectStage
  contributors?: Contributor[]
}

export const projects: Project[] = [
  {
    title: "QMD-TECH",
    category: "E-COMMERCE / WEB APP",
    year: "2026 (Now Building)",
    description:
      "A modern high-performance e-commerce platform specializing in computer components, hardware retail, and an interactive Custom PC Builder engine with real-time part compatibility checking.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Database Design", "E-Commerce", "PC Configurator"],
    link: "",
    github: "https://github.com/DongDuong2001/qmd-tech",
    highlighted: true,
    role: "Full-Stack Engineer / Lead Architect",
    proof: "Active Development (Deploying Next Month)",
    recruiterTakeaway: "Architecting a complex hardware catalog and custom PC configurator with compatibility validation logic and modern e-commerce checkout flows.",
    stage: "now-building",
    contributors: [
      { name: "Duong Phu Dong (@DongDuong2001)", github: "https://github.com/DongDuong2001" },
      { name: "Screan1k0 (@Screan1k0)", github: "https://github.com/Screan1k0" },
    ],
    kpis: {
      users: "PC Builders & Gamers",
      launchTime: "Deploying Oct 2026",
      coreImpact: "Custom PC Configurator & Store",
      performance: "Optimized component search & filter",
    },
    caseStudy: {
      problem: "Traditional PC component stores often lack interactive compatibility checks (socket, wattage, form factor) causing ordering errors for custom PC builders.",
      build: "Constructing a full-stack platform in Next.js & TypeScript featuring a modular hardware compatibility engine, real-time power budget calculation, and catalog management.",
      result: "Currently in active development with production deployment planned for next month.",
    },
  },
  {
    title: "GEMMA LOCAL API SERVER",
    category: "AI INFRASTRUCTURE",
    year: "2026",
    description:
      "A specialized side project built as internal developer tooling to support RMIT Capstone offline AI testbenches. Packages google/gemma-4-E2B-it locally with FastAPI, Hugging Face Transformers, and CUDA acceleration.",
    tech: ["Python", "FastAPI", "Gemma-4", "CUDA", "PyTorch", "Hugging Face"],
    link: "",
    github: "https://github.com/DongDuong2001/gemma-api-local-host",
    highlighted: false,
    role: "Side Project (Capstone Tooling)",
    proof: "Internal Dev Tooling (Local Testbench)",
    recruiterTakeaway: "Built an internal microservice enabling the RMIT Capstone team to iterate offline on LLM features with zero cloud token cost and sub-second local latency.",
    stage: "shipped",
    kpis: {
      users: "Capstone Project Team",
      launchTime: "1 week",
      coreImpact: "100% Offline Capstone Testing",
      performance: "Quantised 4-bit CUDA Runtime",
    },
    caseStudy: {
      problem: "Testing AI features for the Capstone project directly against cloud APIs was costly, internet-dependent, and slowed down development velocity.",
      build: "Engineered a local microservice with FastAPI and Hugging Face Transformers to run a quantized Gemma-4 model on local CUDA GPUs with standard OpenAI-compatible endpoints.",
      result: "Provided a dedicated offline development testbench for the capstone team, eliminating cloud API costs and speeding up feature verification.",
    }
  },
  {
    title: "DEMUSE",
    category: "PRODUCTIVITY / WEB APP",
    year: "2026",
    description:
      "A smart schedule & lifestyle management application conceptualized by @mthutt and architected & developed by @DongDuong2001. Tracks study schedules, work shifts, meetings, and personal events with live countdown timers and automated overlap conflict detection.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Time Management", "State Engine"],
    link: "",
    github: "https://github.com/PhuDong2001/demuse",
    highlighted: true,
    role: "Lead Developer / Architect",
    proof: "Open Source Collaboration",
    recruiterTakeaway: "Engineered real-time schedule conflict detection algorithms and countdown state synchronization for students and professionals.",
    stage: "shipped",
    contributors: [
      { name: "Thu Tran (@mthutt)", github: "https://github.com/mthutt" },
      { name: "Duong Phu Dong (@DongDuong2001)", github: "https://github.com/DongDuong2001" },
    ],
    kpis: {
      users: "Students & Busy Professionals",
      launchTime: "2026",
      coreImpact: "Automated Overlap Detection & Countdowns",
      performance: "Zero-latency schedule validation",
    },
    caseStudy: {
      problem: "Juggling study timetables, fluctuating work shifts, meetings, and personal routines frequently causes double-booking and missed deadlines.",
      build: "Constructed dynamic scheduling state engine with automated time-window overlap validation, live event countdown trackers, and intuitive daily/weekly timeline views.",
      result: "Shipped a seamless, conflict-free schedule planner that prevents overlapping commitments and provides clear visual time cues.",
    },
  },
  {
    title: "FORTIFY KITCHEN",
    category: "WEB APP / SYSTEM DESIGN",
    year: "2026",
    description:
      "A modern kitchen operations and inventory platform. Currently in active maintenance and hotfix stage.",
    tech: ["Next.js", "System Design", "Database Design", "Backend APIs"],
    link: "https://fortifykitchen.vercel.app/",
    highlighted: true,
    role: "System Architect",
    proof: "Active live MVP (Maintenance phase)",
    recruiterTakeaway: "Designed the end-to-end system architecture for robust order management and reliable performance.",
    stage: "shipped",
    contributors: [
      { name: "Duong Phu Dong", github: "https://github.com/DongDuong2001" },
      { name: "Hao Vu", github: "https://github.com/haovu310" },
      { name: "Thu Tran", github: "https://github.com/mthutt" },
    ],
    kpis: {
      users: "Beta users",
      launchTime: "Jul 2026",
      coreImpact: "Streamlined order workflows",
      performance: "Highly optimized database queries",
    },
    caseStudy: {
      problem: "Kitchen staff needed a real-time, low-latency interface to manage tickets, orders, and ingredients without data sync lag.",
      build: "Designed system architecture using decoupled components, optimized backend schemas, and structured state flows.",
      result: "Shipped a responsive, highly available platform that is currently serving active maintenance traffic.",
    },
  },
  {
    title: "LAB68DEV PLATFORM",
    category: "STARTUP CREATOR PROJECT",
    year: "2025 - Current",
    description:
      "Lab68 Dev Platform is a monorepo that powers a collaborative product development workspace. It provides dashboards for planning, documentation, meetings, AI-assisted workflows, and role-aware access controls built on top of Next.js App Router, TypeScript, and a modular component system.",
    tech: ["Next.js", "JavaScript", "TypeScript", "API Integration"],
    link: "https://lab68devplatform.vercel.app/",
    github: "https://github.com/lab68dev/lab68dev-platform",
    highlighted: true,
    role: "Founder / Full-stack Developer",
    proof: "#1 Product of the Day on Unikorn",
    recruiterTakeaway: "Can turn a broad startup workflow into a usable production platform.",
    stage: "shipped",
    awards: [
      {
        label: "#1 Product of the Day",
        platform: "Unikorn",
        url: "https://unikorn.vn/p/lab68studio?ref=embed-lab68studio",
        badge: {
          src: "https://unikorn.vn/api/widgets/badge/lab68studio/rank?theme=light&type=daily",
          alt: "lab68studio - Hang ngay",
          width: 250,
          height: 64,
        },
      },
      {
        label: "Featured on Unikorn",
        platform: "Unikorn",
        url: "https://unikorn.vn/p/lab68studio?ref=embed-lab68studio",
        badge: {
          src: "https://unikorn.vn/api/widgets/badge/lab68studio?theme=light",
          alt: "lab68studio tren Unikorn.vn",
          width: 256,
          height: 64,
        },
      },
    ],
    kpis: {
      users: "30+ users",
      launchTime: "Nov 2025",
      coreImpact: "Unified startup workflow",
      performance: "Fast dashboard rendering",
    },
    caseStudy: {
      problem: "Startup teams were juggling docs, tasks, and meetings in disconnected tools.",
      build: "Built a monorepo workspace with role-aware modules for planning, docs, and AI-assisted flows.",
      result: "Launched in Nov 2025, reached 30+ users, and won Product of the Day on Unikorn.",
    },
  },
  {
    title: "LAB68 CV BUILDER",
    category: "STARTUP CREATOR PROJECT",
    year: "2026 - Current",
    description:
      "A modern, multilingual CV/resume builder that lets users create professional resumes with real-time preview, customizable templates, and export functionality built for speed and simplicity.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://lab68cvbuilder.vercel.app/en",
    github: "https://github.com/lab68dev/lab68cvbuilder",
    highlighted: true,
    role: "Founder / Product Engineer",
    proof: "#1 Product of the Week on Forg, #1 Product of the Day on Unikorn",
    recruiterTakeaway: "Strongest proof of user-focused product execution and launch quality.",
    stage: "shipped",
    awards: [
      {
        label: "#1 Product of the Week",
        platform: "Forg",
        url: "https://forg.to/products/lab68-cv-builder",
        badge: {
          src: "https://forg.to/api/badges/launch-winner/lab68-cv-builder",
          alt: "lab68 CV Builder - 1st Place on Forg",
          width: 200,
          height: 64,
        },
      },
      {
        label: "#1 Product of the Day",
        platform: "Unikorn",
        url: "https://unikorn.vn/p/lab68dev-cv-builder?ref=embed-lab68dev-cv-builder",
        badge: {
          src: "https://unikorn.vn/api/widgets/badge/lab68dev-cv-builder/rank?theme=light&type=daily",
          alt: "lab68CV Builder - Hang ngay",
          width: 250,
          height: 64,
        },
      },
    ],
    kpis: {
      users: "100+ users",
      launchTime: "Feb 2026",
      coreImpact: "Faster resume creation",
      performance: "Real-time preview under 60ms",
    },
    caseStudy: {
      problem: "Users needed a fast way to build strong CVs without design tools.",
      build: "Designed a multilingual builder with instant preview, reusable templates, and export support.",
      result: "Launched in Feb 2026, reached 100+ users, and hit #1 on both Forg and Unikorn.",
    },
  },
  {
    title: "PUDO CODE SYSTEM",
    category: "METHODOLOGY / AI",
    year: "2026 - Current",
    description:
      "A structured 4-phase methodology (Plan -> Understand -> Develop -> Optimize) for coding with AI assistants. Designed to eliminate 'Chaos Coding' and turn AI from a slot machine into a precision tool.",
    tech: ["AI Prompting", "Workflow", "Documentation", "System Design"],
    link: "https://github.com/DongDuong2001/pudo-code-system",
    github: "https://github.com/DongDuong2001/pudo-code-system",
    highlighted: true,
    role: "Methodology Author / AI Workflow Designer",
    proof: "#1 on Forg, #2 Product of the Day and #3 Product of the Week on Unikorn",
    recruiterTakeaway: "Shows structured thinking, documentation quality, and AI-assisted engineering maturity.",
    stage: "shipped",
    awards: [
      {
        label: "1st Place on Forg",
        platform: "Forg",
        url: "https://forg.to/products/pudo",
        badge: {
          src: "https://forg.to/api/badges/launch-winner/pudo",
          alt: "Pudo - 1st Place on Forg",
          width: 200,
          height: 64,
        },
      },
      {
        label: "#2 Product of the Day",
        platform: "Unikorn",
        url: "https://unikorn.vn/p/pudo?ref=embed-pudo",
        badge: {
          src: "https://unikorn.vn/api/widgets/badge/pudo/rank?theme=light&type=daily",
          alt: "Pudo - Daily",
          width: 250,
          height: 64,
        },
      },
      {
        label: "#3 Product of the Week",
        platform: "Unikorn",
        url: "https://unikorn.vn/p/pudo?ref=embed-pudo",
        badge: {
          src: "https://unikorn.vn/api/widgets/badge/pudo/rank?theme=light&type=weekly",
          alt: "Pudo - Weekly",
          width: 250,
          height: 64,
        },
      },
    ],
    kpis: {
      users: "Public Access",
      launchTime: "May 2026",
      coreImpact: "Precision AI workflows",
      performance: "16+ optimized prompts",
    },
    caseStudy: {
      problem: "AI-assisted development often becomes 'Chaos Coding' without a clear structure, leading to fragile code and wasted time.",
      build: "Codified a repeatable 4-phase cycle and a library of domain-specific skills for agents and humans.",
      result: "Established a standardized operating system for AI development, now integrated as the default workflow for multiple projects.",
    },
  },
  {
    title: "ATHERA AI",
    category: "FULL-STACK",
    year: "2025",
    description:
      "An AI-powered wellness platform providing personalized health and wellness recommendations through intelligent automation.",
    tech: ["Next.js", "React", "TypeScript", "AI/ML", "Tailwind CSS"],
    link: "https://atherawellness.vercel.app/",
    github: "https://github.com/DongDuong2001/Athera-AI",
    role: "Full-stack Developer",
    proof: "AI wellness MVP shipped to web",
    recruiterTakeaway: "Can combine product UX with AI-assisted recommendation flows.",
    stage: "shipped",
    caseStudy: {
      problem: "Wellness guidance is often generic and hard to personalize.",
      build: "Built an AI-driven recommendation flow with clear UX and modular services.",
      result: "Delivered a practical wellness MVP with actionable personalized output.",
    },
  },
  {
    title: "GRAFT",
    category: "SYSTEMS / BACKEND",
    year: "2026 - Current",
    description:
      "A Go-based project focused on building reliable backend tooling and workflow automation with performance-first architecture.",
    tech: ["Go", "Backend", "CLI", "Systems Design"],
    link: "",
    github: "https://github.com/DongDuong2001/graft",
    role: "Backend / Systems Developer",
    proof: "#3 Product of the Day on Unikorn",
    recruiterTakeaway: "Shows backend systems interest beyond web UI work.",
    stage: "now-building",
    award: {
      label: "#3 Product of the Day",
      platform: "Unikorn",
      url: "https://unikorn.vn/p/graft?ref=embed-graft",
      badge: {
        src: "https://unikorn.vn/api/widgets/badge/graft/rank?theme=light&type=daily",
        alt: "Graft - Hang ngay",
        width: 250,
        height: 64,
      },
    },
    kpis: {
      users: "Early access",
      launchTime: "In progress",
      coreImpact: "Backend workflow reliability",
      performance: "Low-latency CLI operations",
    },
    caseStudy: {
      problem: "Backend workflows become fragile and hard to scale under delivery pressure.",
      build: "Implementing a Go-first toolkit focused on reliability, composability, and automation.",
      result: "Already achieved #3 Product of the Day on Unikorn during active build phase.",
    },
  },
  {
    title: "SLIDEGLINT",
    category: "DESKTOP APP",
    year: "2026 - Current",
    description:
      "A desktop application project in active development, centered on polished interactions and productivity-focused presentation workflows.",
    tech: ["Desktop App", "Productivity", "UI/UX", "Cross-Platform"],
    link: "",
    github: "https://github.com/DongDuong2001/SlideGlint",
    role: "Desktop Product Builder",
    proof: "Featured on Unikorn during active build",
    recruiterTakeaway: "Expands product craft into polished desktop workflows.",
    stage: "now-building",
    award: {
      label: "Featured",
      platform: "Unikorn",
      url: "https://unikorn.vn/p/slideglint?ref=embed-slideglint",
      badge: {
        src: "https://unikorn.vn/api/widgets/badge/slideglint?theme=light",
        alt: "SlideGlint on Unikorn.vn",
        width: 256,
        height: 64,
      },
    },
    kpis: {
      users: "Private testing",
      launchTime: "In progress",
      coreImpact: "Faster presentation workflow",
      performance: "Smooth desktop interaction",
    },
    caseStudy: {
      problem: "Presentation workflows on desktop tools can feel slow and fragmented.",
      build: "Building a desktop-first app with polished interaction patterns and efficient content flow.",
      result: "Established a stable foundation and iterative releases with growing validation.",
    },
  },
  {
    title: "GFCC WEBSITE",
    category: "CONTRIBUTION",
    year: "2023",
    description:
      "Contributed reusable UI components and features to the GOLDEN FLAMES COMPETITION CLUB website, enhancing the user interface and component library.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://gfcc-website-project.vercel.app/",
    role: "Frontend Contributor",
    proof: "Reusable UI contribution",
    recruiterTakeaway: "Comfortable contributing inside existing frontend projects.",
    stage: "shipped",
  },
  {
    title: "SYNTAX CINEMA APP",
    category: "WEB APP",
    year: "2025",
    description:
      "A movie discovery and browsing web app with cinema-focused UI to explore titles, view details, and track favorites.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://syntaxcinema.vercel.app/",
    github: "https://github.com/F4P1E/syntax-cinema-app",
    role: "Frontend / Product Developer",
    proof: "Movie discovery product shipped",
    recruiterTakeaway: "Demonstrates UI polish and consumer-app structure.",
    stage: "shipped",
  },
  {
    title: "PERSONAL FINANCE TRACK",
    category: "WEB APP",
    year: "2024",
    description:
      "A personal finance management application for tracking expenses, budgeting, and financial goal setting with data visualization.",
    tech: ["Python", "Local Storage"],
    link: "https://github.com/DongDuong2001/Personal-Finance-Track",
    role: "Python App Developer",
    proof: "Finance tracking workflow shipped",
    recruiterTakeaway: "Shows practical data and workflow modeling.",
    stage: "shipped",
  },
  {
    title: "A* DELIVERY DRONE",
    category: "ALGORITHM",
    year: "2024",
    description:
      "Implementation and simulation of the A* pathfinding algorithm to optimize delivery routes for autonomous drones, including a visualizer and route simulation.",
    tech: ["Python", "A*", "Simulation", "Matplotlib"],
    link: "https://github.com/F4P1E/A-Star-Algorithm-for-Delivery-Drone",
    role: "Algorithm Developer",
    proof: "A* route simulation",
    recruiterTakeaway: "Demonstrates algorithmic problem solving and visualization.",
    stage: "shipped",
  },
  {
    title: "NEO RUST LIBRARY",
    category: "OPEN SOURCE",
    year: "2025",
    description: "Contributing to RMIT NCT's Rust library project for educational and research purposes.",
    tech: ["Rust", "Library Development", "Documentation"],
    link: "https://github.com/rmit-nct/neo-rust-library",
    role: "Open Source Contributor",
    proof: "Rust library contribution",
    recruiterTakeaway: "Shows willingness to work in typed systems and shared codebases.",
    stage: "shipped",
  },
  {
    title: "META FRONTEND PROJECT",
    category: "CERTIFICATION",
    year: "2024",
    description:
      "Capstone project for Meta Frontend Developer Professional Certificate demonstrating full-stack skills.",
    tech: ["React", "JavaScript", "HTML/CSS", "API Integration"],
    link: "https://meta-frontend-developer-project.vercel.app/",
    github: "https://github.com/F4P1E/meta-frontend-developer-project",
    role: "Frontend Developer",
    proof: "Meta certificate capstone",
    recruiterTakeaway: "Validates frontend fundamentals and API-driven UI work.",
    stage: "shipped",
  },
  {
    title: "SUKAJAN STORE",
    category: "E-COMMERCE",
    year: "2026",
    description:
      "A high-performance e-commerce storefront for premium Sukajan (Japanese souvenir jackets), featuring interactive catalog browsing, product filtering, responsive shopping cart workflows, and secure checkout integration.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "E-commerce"],
    link: "https://sukajanrandomphitruong.com/",
    role: "Full-stack Developer / Project Lead",
    proof: "5,700+ unique visitors & 13.5K+ page views within 30 days of launch",
    stage: "shipped",
    contributors: [
      { name: "Huynh Quang Dong", github: "https://github.com/quangdong26" },
      { name: "Ho Quang Huy", github: "https://github.com/HoHuy2402" },
    ],
    kpis: {
      users: "5,700+ unique visitors",
      launchTime: "Jun 2026",
      coreImpact: "13,500+ page views",
      performance: "900+ Instagram organic referrals",
    },
    caseStudy: {
      problem: "The client needed a specialized e-commerce storefront for selling premium Sukajan souvenir jackets with rich visual showcase and intuitive buying flow.",
      build: "Designed and implemented a responsive catalog, fast filtering, localized shopping experience, and order placement workflow.",
      result: "Shipped the platform to production, successfully securing 5,700+ unique visitors and 13.5K+ page views within the first month.",
    },
  },
]

export const nowBuildingProjects = projects.filter((project) => project.stage === "now-building")

export function slugifyProjectTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => slugifyProjectTitle(project.title) === slug)
}
