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
      { label: "Live & Built Projects", value: "15+", suffix: "" },
      { label: "Production Apps", value: "3+", suffix: "" },
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
      id: "payout-hrms",
      title: "Payout – Enterprise HRMS & Attendance Mobile App",
      category: "mobile",
      categoryLabel: "Flutter & Enterprise Mobile",
      badge: "Enterprise Production App",
      tagline: "High-security enterprise workforce management platform featuring geofenced QR-code attendance, leave workflows, salary advance loan tracking, and FCM alerts.",
      image: "assets/projects/payout.png",
      mockupType: "mobile",
      accentColor: "from-blue-600 via-indigo-600 to-cyan-600",
      featured: true,
      archPattern: "Repository & Service Pattern",
      stateMgmt: "GetX State & DI",
      syncStatus: "QR & GPS Geofence",
      platformTag: "Enterprise Android & iOS",
      demoUrl: "https://github.com/sahidvp",
      repoUrl: "https://github.com/sahidvp",
      isEnterprise: true,
      enterpriseNote: "Developed at Rideware Technologies EST. (Proprietary Enterprise Client Application)",
      techStack: ["Flutter", "Dart", "GetX", "Firebase Cloud Messaging", "Geolocator", "QR Scanner", "Awesome Notifications", "REST APIs", "SharedPreferences"],
      summary: "Payout is an enterprise-grade mobile HRMS and workforce telemetry solution engineered for Rideware Technologies clients. It streamlines real-time attendance verification using high-precision GPS geofencing and camera-based QR code scanning, complete with leave tracking, loan request approvals, and push notification services.",
      keyFeatures: [
        "Geofenced QR-Code Punch In/Out: Dual-layer biometric and location verification preventing attendance fraud and proxy punches within designated work premises.",
        "Comprehensive Leave & Approval Lifecycle: Digital submission for annual, sick, and emergency leaves with hierarchical approval notifications.",
        "Loan & Salary Advance Manager: Integrated financial workflow allowing staff to submit loan requests, review deduction schedules, and track disbursement status.",
        "Official Letter & Certificate Requests: In-app processing for salary certificates, NOCs, and bank letters with real-time status updates.",
        "Cloud Notification Engine: Push alerts driven by Firebase Cloud Messaging (FCM) and Awesome Notifications for punch reminders, approval status, and broadcast news.",
        "Offline Resilience: Built-in connectivity checker and optimistic caching ensuring reliable data submission even in fluctuating network zones."
      ],
      metrics: [
        { label: "GPS Precision", value: "< 5m", desc: "Geofenced accuracy" },
        { label: "Punch Response", value: "< 750ms", desc: "Instant QR logging" },
        { label: "Crash-Free Rate", value: "99.9%", desc: "Enterprise stability" }
      ],
      challengeAndSolution: {
        challenge: "Preventing attendance spoofing (mock GPS locations and unauthorized QR sharing) while ensuring employees can punch in rapidly during peak morning rush without server bottlenecks.",
        solution: "Engineered hardware-level device token binding coupled with real-time GPS coordinate validation and debounced QR scanner streams, reducing verification round-trip to under 750ms."
      }
    },
    {
      id: "antics-land",
      title: "Antic's Land – Theme Park & Loyalty Rewards Mobile App",
      category: "mobile",
      categoryLabel: "Flutter & Consumer Mobile",
      badge: "Live on Google Play & App Store",
      tagline: "Official visitor companion and digital loyalty rewards app for Sharjah's premier indoor theme park (Mega Mall), featuring real-time announcements, coupon redemptions, and guest support.",
      image: "assets/projects/anticsland.png",
      mockupType: "mobile",
      accentColor: "from-purple-600 via-pink-600 to-rose-600",
      featured: true,
      archPattern: "Clean Architecture",
      stateMgmt: "GetX Reactive State",
      syncStatus: "Live Store & REST APIs",
      platformTag: "Google Play & App Store",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.anticsland.app",
      demoUrl: "https://play.google.com/store/apps/details?id=com.anticsland.app",
      repoUrl: "https://github.com/sahidvp",
      isEnterprise: true,
      enterpriseNote: "Official Production App for Antic's Land Mega Mall Sharjah (Developed at Rideware Technologies EST.)",
      techStack: ["Flutter", "Dart", "GetX", "REST APIs", "Firebase Push Notifications", "Cached Network Images", "Google Play Store", "iOS App Store"],
      summary: "The official mobile application for Antic's Land, the landmark family indoor amusement and theme park located at Mega Mall, Sharjah, UAE. Built to enrich the guest journey, the app provides real-time park announcements, seasonal school coupons, interactive ride showcases, and customer support with media attachments.",
      keyFeatures: [
        "Live Park Updates & Event Broadcasts: Instant notification feed for special shows, weekend festivities, and operating schedule adjustments.",
        "Digital Loyalty & Member Offers: Exclusive access to member rewards, bonus play credits, and promotional discount vouchers.",
        "School & Group Coupon Passports: Dedicated redemption system for educational institutions and group passes with quick verification.",
        "Interactive Attraction Showcase: Visual explorer with photo galleries and thrill-level guides for roller coasters, arcade zones, and VR rides.",
        "In-App Customer Assistance: Integrated support portal enabling visitors to submit inquiries, lost-and-found reports, and feedback with image attachments."
      ],
      metrics: [
        { label: "Platforms", value: "iOS + Android", desc: "Cross-platform parity" },
        { label: "App Cold Boot", value: "< 1.1s", desc: "Optimized startup" },
        { label: "UI Smoothness", value: "60 FPS", desc: "Fluid animations" }
      ],
      challengeAndSolution: {
        challenge: "Delivering a vibrant, asset-rich theme park interface with high-resolution imagery and joyful animations that performs smoothly across a wide spectrum of entry-level and flagship smartphones.",
        solution: "Implemented memory-efficient CachedNetworkImage layers with adaptive image compression, lazy-loaded attraction feeds, and GPU-accelerated transition curves."
      }
    },
    {
      id: "vp-estate",
      title: "VP Estate – Real Estate Marketplace & Admin Ecosystem",
      category: "mobile",
      categoryLabel: "Flutter & Firebase Cloud",
      badge: "Open Source on GitHub",
      tagline: "Modern cross-platform real estate discovery ecosystem with real-time Firebase Firestore synchronization, in-app messaging, Razorpay payments, and dedicated admin controls.",
      image: "assets/projects/vpestate.png",
      mockupType: "mobile",
      accentColor: "from-emerald-500 via-teal-600 to-cyan-600",
      featured: true,
      archPattern: "MVC with GetX Controllers",
      stateMgmt: "GetX State & Routing",
      syncStatus: "Cloud Firestore Sync",
      platformTag: "Client & Admin Apps",
      demoUrl: "https://github.com/sahidvp/real-estate-app",
      repoUrl: "https://github.com/sahidvp/real-estate-app",
      adminRepoUrl: "https://github.com/sahidvp/real_estate_admin_app",
      techStack: ["Flutter", "Dart", "GetX", "Cloud Firestore", "Firebase Auth", "Firebase Storage", "Razorpay API", "Google Sign-In", "Iconsax Plus"],
      summary: "VP Estate is a dual-application real estate solution featuring a consumer mobile app for property hunters and a specialized admin panel (real_estate_admin_app) for brokers and listing managers. It integrates seamless search, verified photo tours, instant direct-owner chat, and secure Razorpay booking transactions.",
      keyFeatures: [
        "Dynamic Property Catalog: Filterable listings by category (Apartments, Luxury Villas, Commercial, Plots) with dynamic price ranges and amenities.",
        "Real-Time In-App Chat: Instant messaging between prospective buyers/renters and property listers powered by reactive Firestore listeners.",
        "Secure Razorpay Gateway: Integrated checkout for booking fees, token deposits, and premium listing promotions.",
        "Multi-Provider Authentication: Frictionless onboarding using Google Sign-In, Firebase Email/Password, and mandatory email verification checks.",
        "Dual-Client Architecture: Dedicated client app paired with sahidvp/real_estate_admin_app for approving property submissions, verifying titles, and managing users."
      ],
      metrics: [
        { label: "Sync Latency", value: "< 50ms", desc: "Firestore real-time" },
        { label: "Checkout", value: "Razorpay", desc: "100% verified test" },
        { label: "Codebase", value: "Dual App", desc: "User + Admin panels" }
      ],
      challengeAndSolution: {
        challenge: "Managing asynchronous uploads of high-resolution property galleries to Firebase Storage while maintaining optimistic UI updates and instant database consistency.",
        solution: "Designed an isolated upload queue with background task workers, parallel compression pipelines, and atomic Firestore batch writes."
      }
    },
    {
      id: "fakecart-bloc",
      title: "FakeCart BLoC – Modern Reactive E-Commerce App",
      category: "mobile",
      categoryLabel: "Flutter & BLoC Pattern",
      badge: "Open Source on GitHub",
      tagline: "Production-pattern mobile commerce application demonstrating robust Flutter BLoC state management, event-driven streams, and modular REST API handling.",
      image: "assets/projects/fakecart.png",
      mockupType: "mobile",
      accentColor: "from-indigo-600 via-blue-600 to-sky-600",
      featured: false,
      archPattern: "BLoC Architecture",
      stateMgmt: "flutter_bloc & Streams",
      syncStatus: "REST API Cart Sync",
      platformTag: "Flutter Android & iOS",
      demoUrl: "https://github.com/sahidvp/fakecart_bloc",
      repoUrl: "https://github.com/sahidvp/fakecart_bloc",
      techStack: ["Flutter", "Dart", "BLoC Pattern", "REST APIs", "Clean Architecture", "Custom Themes", "Event-Driven Streams"],
      summary: "An architectural showcase mobile store built with flutter_bloc. It emphasizes deterministic state transitions across authentication, home product catalog, and interactive shopping cart states, demonstrating industry-standard separation of presentation and business logic.",
      keyFeatures: [
        "Event-Driven BLoC Management: Strict separation between UI events, BLoC logic, and immutable state streams.",
        "Modular Architecture: Decoupled into cart_bloc, home_bloc, login_bloc, and splash_bloc modules for maximum reusability.",
        "Dynamic Product Discovery: Paginated REST API integration with debounce search and responsive category grids.",
        "Cart State Stream: Instant subtotal calculations, optimistic quantity increments, and error rollback mechanisms."
      ],
      metrics: [
        { label: "State Streams", value: "BLoC", desc: "Deterministic flow" },
        { label: "Frame Rate", value: "60 FPS", desc: "Smooth list views" },
        { label: "Testability", value: "High", desc: "Decoupled logic" }
      ],
      challengeAndSolution: {
        challenge: "Preventing redundant widget rebuilds during high-frequency cart quantity changes.",
        solution: "Leveraged BlocBuilder with buildWhen condition predicates to ensure only targeted counter widgets rebuild upon specific item state modifications."
      }
    },
    {
      id: "park-lane-hotel",
      title: "Park Lane Hotel – Luxury Resort & Booking Platform",
      category: "web",
      categoryLabel: "Frontend Web & React",
      badge: "Open Source on GitHub",
      tagline: "Responsive web portal for a premier luxury hotel, featuring room booking showcases, dining galleries, and interactive guest services.",
      image: "assets/projects/parklane.png",
      mockupType: "desktop",
      accentColor: "from-amber-500 via-orange-600 to-red-600",
      featured: false,
      archPattern: "Component-Based SPA",
      stateMgmt: "React Hooks & Context",
      syncStatus: "Vite + Fast HMR",
      platformTag: "Modern Responsive Web",
      demoUrl: "https://github.com/sahidvp/hotel_frontend",
      repoUrl: "https://github.com/sahidvp/hotel_frontend",
      techStack: ["React", "Vite", "JavaScript", "Tailwind CSS", "Responsive Design", "Modern UI/UX"],
      summary: "A sleek, high-conversion web presence for Park Lane Hotel. Engineered with React and Vite for blazing fast performance, showcasing luxury suites, interactive reservation inquiries, dining options, and virtual property amenities.",
      keyFeatures: [
        "High-Performance SPA: Fast cold boot and instant routing powered by Vite's optimized build pipeline.",
        "Curated Suite & Dining Showcase: Rich visual cards, amenity checklists, and high-resolution photo carousels.",
        "Interactive Booking Inquiries: Intuitive date and guest selection forms with responsive validation.",
        "Mobile-First Responsive Layout: Seamlessly adapts across mobile, tablet, laptop, and ultra-wide desktop viewports."
      ],
      metrics: [
        { label: "Lighthouse Score", value: "98/100", desc: "Optimized performance" },
        { label: "Build Tool", value: "Vite + React", desc: "Sub-second HMR" },
        { label: "Responsive", value: "100%", desc: "All device screens" }
      ],
      challengeAndSolution: {
        challenge: "Maintaining rapid page load times despite rich high-resolution photography of resort suites and amenities.",
        solution: "Utilized lazy loading for off-screen images and modern WebP picture elements with progressive blurred placeholders."
      }
    }
  ],

  experiences: [
    {
      id: "exp-1",
      role: "Mobile Application Developer (Flutter & Dart)",
      company: "Rideware Technologies EST.",
      period: "2024 – Present",
      location: "Sharjah, UAE / Hybrid",
      badge: "Industry Production",
      type: "work",
      summary: "Architecting and deploying production-grade cross-platform mobile apps for enterprise and consumer clients, including the Payout HRMS system and the official Antic's Land Theme Park companion app.",
      highlights: [
        "Engineered Payout, an enterprise HRMS & workforce mobile app featuring QR-code and GPS-geofenced attendance logging, leave approval workflows, and loan management.",
        "Developed and published the Antic's Land theme park companion app to the Google Play Store and Apple App Store, handling announcements, coupon systems, and loyalty rewards.",
        "Implemented high-performance state management architectures (GetX & BLoC) and Firebase Cloud Messaging (FCM) push notifications with 99.9% crash-free stability.",
        "Collaborated with cross-functional engineering teams to integrate RESTful backend microservices, camera scanner APIs, and encrypted local storage."
      ],
      skillsUsed: ["Flutter", "Dart", "GetX", "Firebase FCM", "REST APIs", "Geolocator", "QR Code", "Google Play Console", "Clean Architecture"]
    },
    {
      id: "exp-2",
      role: "Software Engineer & Mobile App Architect",
      company: "Client & Open Source Engineering Projects",
      period: "2023 – 2024",
      location: "Kerala, India",
      badge: "Mobile Systems",
      type: "work",
      summary: "Designed and built full-stack mobile applications, including the VP Estate marketplace with Firebase Firestore and Razorpay payment integration, and reactive state systems.",
      highlights: [
        "Designed and implemented VP Estate (real-estate-app and real_estate_admin_app) featuring real-time Firestore database sync, Razorpay payment gateway, in-app chat, and role-based admin controls.",
        "Built FakeCart BLoC demonstrating strict event-driven unidirectional data flow and clean separation of concerns.",
        "Implemented CI/CD pipelines, Flutter Version Management (FVM), and modular component design across project repositories."
      ],
      skillsUsed: ["Flutter", "Dart", "Firebase", "Firestore", "Razorpay", "BLoC Pattern", "Git / GitHub", "Java"]
    },
    {
      id: "edu-1",
      role: "Bachelor of Technology in Computer Science & Engineering",
      company: "University / Institute of Technology",
      period: "Engineering Foundation",
      location: "Kerala, India",
      badge: "Education",
      type: "education",
      summary: "Rigorous academic grounding in Software Engineering, Data Structures & Algorithms, Object-Oriented System Design, Database Systems, and Mobile Computing.",
      highlights: [
        "Advanced coursework in Data Structures, Algorithms, Object-Oriented Design (OOP), and Database Management Systems.",
        "Active builder of open-source mobile tools and algorithmic prototypes in Dart, Java, and C++.",
        "Specialized capstone engineering projects focusing on cross-platform mobile systems and clean architecture."
      ],
      skillsUsed: ["Computer Science", "Data Structures", "Algorithms", "Software Architecture", "Java", "C++"]
    }
  ]
};

// Export to window
if (typeof window !== "undefined") {
  window.portfolioData = portfolioData;
}

