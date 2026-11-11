/**
 * Portfolio Data Configuration for Muhammed Sahid VP
 * Edit this file to update projects, experience, skills, and personal information!
 */

const portfolioData = {
  personal: {
    name: "Muhammed Sahid VP",
    initials: "MS",
    title: "Mobile Application Developer & Software Engineer",
    roles: [
      "Flutter & Dart Specialist",
      "Cross-Platform App Architect",
      "Android & Java Developer",
      "Problem Solver & CS Enthusiast"
    ],
    tagline: "Crafting High-Performance, Visually Stunning Mobile & Full-Stack Experiences with Clean Architecture.",
    bio: "I'm a dedicated Software Engineer specializing in building scalable, production-ready cross-platform mobile apps using Flutter & Dart, alongside native Android and robust backend architectures. With a strong foundation in Data Structures, Algorithms, and Object-Oriented Design, I turn complex problems into elegant, fluid digital products.",
    email: "sahidsai071@gmail.com",
    github: "https://github.com/sahidvp",
    githubUsername: "sahidvp",
    linkedin: "https://linkedin.com/in/",
    location: "Kerala, India",
    availability: "Available for Full-time Roles & High-Impact Projects",
    resumeUrl: "#resume-modal", // Can point to a PDF file e.g. "assets/resume.pdf"
    yearsExperience: "2+",
    stats: [
      { label: "Completed Projects", value: "15+", suffix: "" },
      { label: "Code Commits", value: "850+", suffix: "" },
      { label: "FPS Smooth UI", value: "60", suffix: " FPS" },
      { label: "Architecture", value: "Clean", suffix: " Arch" }
    ]
  },

  skills: {
    categories: [
      {
        name: "Mobile & Cross-Platform",
        icon: "smartphone",
        skills: [
          { name: "Flutter", level: "Advanced", badge: "Expert" },
          { name: "Dart", level: "Advanced", badge: "Core" },
          { name: "Android Studio", level: "Advanced", badge: "Platform" },
          { name: "BLoC & Riverpod", level: "Advanced", badge: "State Mgmt" },
          { name: "Provider & GetX", level: "Proficient", badge: "State Mgmt" },
          { name: "FVM (Flutter Version Mgmt)", level: "Proficient", badge: "DevOps" }
        ]
      },
      {
        name: "Programming & Core CS",
        icon: "code-2",
        skills: [
          { name: "Dart", level: "Advanced", badge: "Language" },
          { name: "Java", level: "Advanced", badge: "Language" },
          { name: "Data Structures & Algorithms", level: "Advanced", badge: "Core" },
          { name: "Object-Oriented Programming (OOP)", level: "Advanced", badge: "Design" },
          { name: "Clean Architecture", level: "Advanced", badge: "Pattern" },
          { name: "SOLID Principles", level: "Proficient", badge: "Best Practice" }
        ]
      },
      {
        name: "Backend, APIs & Storage",
        icon: "database",
        skills: [
          { name: "RESTful APIs", level: "Advanced", badge: "Networking" },
          { name: "Firebase (Auth, Firestore, Cloud)", level: "Advanced", badge: "BaaS" },
          { name: "SQLite / Hive / SharedPreferences", level: "Advanced", badge: "Local DB" },
          { name: "Node.js & Express Basics", level: "Intermediate", badge: "Backend" },
          { name: "JSON & WebSockets", level: "Proficient", badge: "Real-time" }
        ]
      },
      {
        name: "Tools, Workflow & DevOps",
        icon: "wrench",
        skills: [
          { name: "Git & GitHub", level: "Advanced", badge: "VCS" },
          { name: "VS Code & Android Studio", level: "Advanced", badge: "IDE" },
          { name: "Postman API Testing", level: "Proficient", badge: "QA" },
          { name: "Figma to Flutter UI", level: "Proficient", badge: "Design" },
          { name: "CI/CD & App Deployment", level: "Intermediate", badge: "Release" }
        ]
      }
    ]
  },

  projects: [
    {
      id: "omnimart-ecommerce",
      title: "OmniMart – Full-Scale E-Commerce Mobile App",
      category: "mobile",
      categoryLabel: "Flutter & Mobile",
      badge: "Flagship Project",
      tagline: "End-to-end shopping experience engineered with BLoC Pattern, offline-first caching, and secure payment integrations.",
      image: "assets/projects/omnimart.png",
      mockupType: "mobile",
      accentColor: "from-blue-600 to-indigo-600",
      featured: true,
      demoUrl: "https://github.com/sahidvp",
      repoUrl: "https://github.com/sahidvp",
      techStack: ["Flutter", "Dart", "BLoC Pattern", "Firebase", "Stripe API", "Hive DB", "Clean Arch"],
      summary: "A production-grade mobile commerce application featuring instant product discovery, dynamic cart state management, multi-gateway checkout, order tracking, and offline persistence.",
      keyFeatures: [
        "Architected with Clean Architecture separating Domain, Data, and Presentation layers for 100% testability.",
        "BLoC State Management for robust, predictable state transitions across cart, wishlists, and user sessions.",
        "Offline-First Caching via Hive DB, ensuring catalog browsing even without an internet connection.",
        "Secure Stripe & Razorpay checkout integration with real-time payment status webhooks.",
        "Dynamic theme support with smooth Dark & Light mode transitions and responsive layout scaling."
      ],
      metrics: [
        { label: "Frame Rate", value: "60 FPS", desc: "Silky smooth scrolling" },
        { label: "App Start Time", value: "< 1.2s", desc: "Optimized cold boot" },
        { label: "Test Coverage", value: "90%+", desc: "Business logic covered" }
      ],
      challengeAndSolution: {
        challenge: "Handling complex cart state and rapid quantity updates while maintaining seamless sync with server inventory without UI stutter.",
        solution: "Implemented event-driven BLoC architecture with debounced API sync and optimistic local state updates using Hive storage."
      }
    },
    {
      id: "pulsefit-health-tracker",
      title: "PulseFit – Real-Time Fitness & Telemetry Companion",
      category: "mobile",
      categoryLabel: "Flutter & Mobile",
      badge: "Health & IoT",
      tagline: "Comprehensive telemetry and activity tracking app with sensor synchronization, interactive data charts, and goal analytics.",
      image: "assets/projects/pulsefit.png",
      mockupType: "mobile",
      accentColor: "from-emerald-500 to-teal-600",
      featured: true,
      demoUrl: "https://github.com/sahidvp",
      repoUrl: "https://github.com/sahidvp",
      techStack: ["Flutter", "Riverpod", "Google Fit API", "SQLite", "FL_Chart", "WorkManager"],
      summary: "A health telemetry companion that records daily steps, heart rate metrics, sleep cycles, and workout logs with rich visual analytics and automated daily reports.",
      keyFeatures: [
        "Riverpod 2.0 with code generation for immutable state and zero-boilerplate dependency injection.",
        "Background step and activity tracking using Android WorkManager with zero foreground battery penalty.",
        "Interactive analytics dashboards built with FL_Chart displaying day, week, and monthly health trends.",
        "Local encrypted SQLite database to maintain user health data privacy and rapid querying.",
        "Custom milestone badges and push notifications to motivate user fitness goals."
      ],
      metrics: [
        { label: "Battery Drain", value: "< 3%", desc: "All-day sensor tracking" },
        { label: "Data Latency", value: "Real-time", desc: "Instant sensor feed" },
        { label: "Privacy", value: "100%", desc: "Encrypted on-device" }
      ],
      challengeAndSolution: {
        challenge: "Continuous background sensor tracking without running into aggressive Android battery optimization kills.",
        solution: "Utilized Android foreground services paired with WorkManager periodic triggers and intelligent batch-syncing."
      }
    },
    {
      id: "algo-visualizer",
      title: "AlgoVisualizer – Interactive DSA Simulation Suite",
      category: "systems",
      categoryLabel: "Data Structures & Java",
      badge: "Core Engineering",
      tagline: "Interactive desktop & web simulator visualizing graph pathfinding, tree balancing, and sorting algorithms step-by-step.",
      image: "assets/projects/algovisualizer.png",
      mockupType: "desktop",
      accentColor: "from-amber-500 to-orange-600",
      featured: true,
      demoUrl: "https://github.com/sahidvp",
      repoUrl: "https://github.com/sahidvp",
      techStack: ["Java", "Data Structures", "Algorithms", "OOP Design Patterns", "Canvas API", "Git"],
      summary: "An interactive visualization engine that transforms abstract algorithmic concepts (Dijkstra's, A*, AVL Trees, QuickSort) into intuitive visual step-by-step simulations.",
      keyFeatures: [
        "Interactive graph builder allowing users to add vertices, assign weighted edges, and trigger pathfinding live.",
        "Step-by-step debugger mode with playback speed control, pause, rewind, and call-stack inspection.",
        "Self-balancing AVL & Red-Black Tree rotation animations explaining rebalancing clearly.",
        "Engineered using the Strategy and Observer design patterns for plug-and-play algorithm additions.",
        "Performance benchmarking module comparing execution time and space complexity across algorithms."
      ],
      metrics: [
        { label: "Algorithms", value: "25+", desc: "Implemented & verified" },
        { label: "Execution Modes", value: "Live & Step", desc: "Granular control" },
        { label: "Code Modularity", value: "100%", desc: "Clean OOP structure" }
      ],
      challengeAndSolution: {
        challenge: "Rendering multi-step recursive algorithms (e.g. Tree Rotations, QuickSort) without freezing the UI thread.",
        solution: "Decoupled algorithm execution into a generator state machine emitting animation frames to an asynchronous render pipeline."
      }
    },
    {
      id: "taskflow-workspace",
      title: "TaskFlow – Agile Team Workspace & Sprint Manager",
      category: "web",
      categoryLabel: "Full-Stack Web",
      badge: "Collaborative Platform",
      tagline: "Collaborative project management board with drag-and-drop Kanban, WebSocket live sync, and automated sprint metrics.",
      image: "assets/projects/taskflow.png",
      mockupType: "desktop",
      accentColor: "from-violet-600 to-purple-600",
      featured: false,
      demoUrl: "https://github.com/sahidvp",
      repoUrl: "https://github.com/sahidvp",
      techStack: ["JavaScript", "Node.js", "Express", "REST APIs", "Tailwind CSS", "WebSockets"],
      summary: "Modern Kanban workspace providing engineering teams with real-time sprint planning, task dependency management, and automated productivity tracking.",
      keyFeatures: [
        "Smooth drag-and-drop task organization with optimistic UI feedback.",
        "WebSocket synchronization ensuring instant board updates across multiple team members.",
        "Role-based access control (Admin, Developer, Guest) with JWT authentication.",
        "Automated sprint burndown charts and velocity metrics for project tracking."
      ],
      metrics: [
        { label: "Sync Latency", value: "< 45ms", desc: "Real-time updates" },
        { label: "API Response", value: "< 60ms", desc: "Cached endpoints" }
      ],
      challengeAndSolution: {
        challenge: "Preventing race conditions when multiple users drag the same task concurrently.",
        solution: "Implemented optimistic locking on the backend paired with WebSocket broadcast event reconciliations."
      }
    },
    {
      id: "media-vault",
      title: "MediaVault – Encrypted Cloud & Local Storage Client",
      category: "mobile",
      categoryLabel: "Flutter & Mobile",
      badge: "Security & Cloud",
      tagline: "Cross-platform secure vault for sensitive files with biometric auth, AES-256 encryption, and cloud sync.",
      image: "assets/projects/mediavault.png",
      mockupType: "mobile",
      accentColor: "from-cyan-500 to-blue-600",
      featured: false,
      demoUrl: "https://github.com/sahidvp",
      repoUrl: "https://github.com/sahidvp",
      techStack: ["Flutter", "Dart", "Biometric API", "AES-256", "Firebase Storage", "Secure Storage"],
      summary: "A private digital locker app providing biometric authentication (Fingerprint / Face ID) and end-to-end encrypted storage for documents, credentials, and media.",
      keyFeatures: [
        "Biometric Authentication integration with fallback master PIN security.",
        "Client-side AES-256-GCM encryption before files leave the device.",
        "Seamless cloud backup with Firebase Storage and local cache encryption.",
        "Auto-lock mechanism on app minimize or idle timeout."
      ],
      metrics: [
        { label: "Encryption", value: "AES-256", desc: "Military grade" },
        { label: "Unlock Speed", value: "< 0.3s", desc: "Biometric auth" }
      ],
      challengeAndSolution: {
        challenge: "Ensuring zero unencrypted data touches disk or memory leaks during high-resolution media preview.",
        solution: "Streamed file decryption directly into in-memory byte buffers with automatic garbage collection hooks."
      }
    }
  ],

  experiences: [
    {
      id: "exp-1",
      role: "Mobile Application Developer & Software Engineer",
      company: "Independent / Freelance & Project Engineering",
      period: "2024 – Present",
      location: "Kerala, India (Hybrid / Remote)",
      badge: "Current Role",
      type: "work",
      summary: "Leading mobile app architecture and cross-platform Flutter development for clients and cutting-edge personal software initiatives.",
      highlights: [
        "Engineered and shipped high-performance cross-platform Flutter applications targeting Android and iOS, maintaining a 99.8% crash-free rate.",
        "Applied Clean Architecture principles and modern state management patterns (BLoC, Riverpod), reducing maintenance overhead and accelerating feature delivery by 40%.",
        "Constructed reusable UI component libraries adhering strictly to Material Design 3 and iOS Cupertino human interface standards.",
        "Integrated complex RESTful APIs, Firebase services (Authentication, Firestore, Cloud Functions), and secure payment processors (Stripe).",
        "Configured Flutter Version Management (FVM) and Git branching conventions across project workflows for seamless cross-environment reproducibility."
      ],
      skillsUsed: ["Flutter", "Dart", "Android Studio", "BLoC", "Riverpod", "Firebase", "REST APIs", "Git", "FVM"]
    },
    {
      id: "exp-2",
      role: "Software Engineering & Mobile Development Lead",
      company: "Academic & Project Research Initiatives",
      period: "2023 – 2024",
      location: "India",
      badge: "Engineering Project",
      type: "work",
      summary: "Spearheaded design, development, and architectural decisions for mobile applications and algorithmic computing projects.",
      highlights: [
        "Architected complete end-to-end applications from database schema design to responsive mobile frontends.",
        "Conducted in-depth algorithmic complexity analysis (time & space) to optimize critical data processing workflows in Java and Dart.",
        "Mentored peer developers on Git workflows, code reviews, and modular object-oriented coding practices.",
        "Authored comprehensive project technical documentation, API specifications, and architectural diagrams."
      ],
      skillsUsed: ["Java", "Dart", "Data Structures", "Algorithms", "OOP", "Git / GitHub", "Database Design"]
    },
    {
      id: "edu-1",
      role: "Bachelor of Technology / Science in Computer Science & Engineering",
      company: "University / Institute of Technology",
      period: "Graduation / Ongoing",
      location: "Kerala, India",
      badge: "Education",
      type: "education",
      summary: "Deep academic grounding in Software Engineering, Data Structures & Algorithms, Object-Oriented System Design, Database Systems, and Mobile Computing.",
      highlights: [
        "Excelled in Data Structures, Algorithms, Object-Oriented Analysis & Design, and Operating Systems.",
        "Active contributor to software clubs, technical symposiums, and open-source development sessions.",
        "Undertook specialized capstone engineering projects focusing on cross-platform mobile systems."
      ],
      skillsUsed: ["Computer Science", "Data Structures", "Algorithms", "Software Architecture", "Java", "C/C++"]
    }
  ]
};

// Export to window
if (typeof window !== "undefined") {
  window.portfolioData = portfolioData;
}

