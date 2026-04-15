export const projects = [
  {
    slug: "toyota-pad-ccr-local-part-ordering",
    image: "/images/toyota.webp",
    title: "Toyota PAD-CCR Local Part Ordering",
    company: "Toyota Motor Manufacturing Indonesia (TMMIN)",
    stack: ["React", "Next.js", "Tailwind", "Enterprise System"],
    excerpt:
      "Improvement system for Toyota PAD-CCR local part ordering to make the workflow faster, more integrated, and easier to monitor.",
    description:
      "Toyota PAD-CCR Local Part Ordering is an operational dashboard built to digitalize the local part ordering workflow in a more integrated and traceable way. The previous system still felt slow in day-to-day use, historical order data had to be deleted after three months, order notifications were still delivered manually through WhatsApp, and progress monitoring was not yet centralized in a single system. This improvement project focused on combining the full process into one operational flow so teams could plan, create orders, confirm delivery and receiving, track order progress, review performance trends, and manage status notifications from one dashboard.",
    details: [
      "Designed an integrated workflow covering Planning, Ordering, Delivery, Receiving, Tracking, Analysis, and Notification in one operational dashboard.",
      "Improved the process from a fragmented and manual flow into a more centralized system with clearer order status monitoring and easier coordination across teams.",
      "Supported operational efficiency by reducing manual communication, improving traceability, and enabling better historical review and performance analysis.",
    ],
  },
  {
    slug: "telkom-djm-syarkom-automation",
    image: "/images/telkom_djm.webp",
    title: "Telkom DJM & Syarkom Automation",
    company: "Telkom Indonesia",
    stack: ["Python", "AI Automation", "LLM", "RAG", "LangChain"],
    excerpt:
      "AI automation system to generate Distinct Job Manual and Syarat Kompetensi documents automatically for each position in Telkom.",
    description:
      "Telkom DJM & Syarkom Automation is an AI-powered automation project designed to speed up document generation for internal human capital processes at Telkom Indonesia. The system focuses on automatically producing Distinct Job Manual and Syarat Kompetensi documents for each position, reducing manual drafting work while making the output more consistent, scalable, and easier to manage across organizational roles.",
    details: [
      "Built an AI automation workflow to generate DJM and Syarkom documents automatically for role-based needs.",
      "Reduced manual document preparation effort by turning a repetitive process into a structured automated system.",
      "Improved consistency and operational efficiency for internal documentation tied to position requirements.",
    ],
  },
  {
    slug: "hcsp-ai",
    image: "/images/HCSP1.webp",
    images: ["/images/HCSP1.webp", "/images/HCSP2.webp"],
    title: "HCSP-AI",
    company: "Telkom Indonesia",
    stack: ["Python", "AI Automation", "Web App", "Prediction System", "LLM"],
    excerpt:
      "Web-based AI system that helps Human Capital predict promotion and mutation decisions more efficiently.",
    description:
      "HCSP-AI is a web-based AI system built to support Human Capital teams in handling strategic workforce tasks more effectively. The system helps automate and strengthen decision support for promotion and mutation processes, making assessments more structured, scalable, and easier to review across employee positions and career movements.",
    details: [
      "Built a web-based AI support system for Human Capital operational workflows.",
      "Developed functionality to assist promotion and mutation prediction in a more structured and data-supported way.",
      "Improved efficiency for Human Capital teams by reducing manual effort in recurring evaluation processes.",
    ],
  },
  {
    slug: "calorify",
    image: "/images/22.webp",
    title: "Calorify – AI Food Recognition & Gamified Calorie Tracking",
    company: "Apple Developer Academy",
    stack: ["Python", "Swift", "Core ML", "iOS", "TensorFlow", "CNN"],
    excerpt:
      "AI-powered iOS app that detects food from the camera and estimates nutritional values with a gamified tracking system.",
    description:
      "Calorify is an AI-powered iOS application that automatically detects food items from the user's camera and estimates their nutritional values, such as calories, protein, fat, and carbohydrates. The app combines real-time food recognition with a gamification system inspired by the Octalysis Framework, enabling users to maintain or adjust their weight more consistently through XP, streaks, and daily challenges.",
    details: [
      "Built a real-time food recognition flow for iOS using Core ML and a CNN-based model.",
      "Designed the nutrition estimation experience around fast capture, clear feedback, and repeatable daily use.",
      "Added gamification loops such as streaks, XP, and challenge mechanics to improve retention.",
    ],
  },
  {
    slug: "skinalyze",
    image: "/images/skinalyze_appstore.webp",
    title: "Skinalyze – AI-Powered Acne Detection & Severity Assessment",
    company: "Apple Developer Academy",
    stack: ["Python", "Swift", "Core ML", "iOS", "TensorFlow", "CNN"],
    excerpt:
      "Mobile app that analyzes facial acne conditions from selfies and estimates severity through an end-to-end ML pipeline.",
    description:
      "Skinalyze is an AI-driven mobile application designed to analyze facial acne conditions and estimate their severity directly from the user's selfie. I was responsible for designing and developing the complete machine-learning pipeline, from dataset preparation, model experimentation, and evaluation through integrating the final model into a production-ready iOS application.",
    details: [
      "Owned the machine-learning pipeline from dataset curation to model evaluation.",
      "Integrated the final model into the mobile product for near real-time user feedback.",
      "Focused on turning computer vision output into clear, user-friendly health insights.",
    ],
  },
  {
    slug: "bloomy",
    image: "/images/bloomy.webp",
    title: "Bloomy : Blue Economy",
    company: "Google Bangkit",
    stack: ["Kotlin", "Flask", "Google Cloud", "TensorFlow", "ML"],
    excerpt:
      "A product concept in the blue economy space combining mobile, backend, and machine-learning components.",
    description:
      "Bloomy is a collaborative product developed in the Bangkit program that combines mobile engineering, cloud backend work, and machine-learning support. The project focused on building an end-to-end product experience while aligning technical decisions with user needs and delivery constraints.",
    details: [
      "Contributed across product thinking, implementation, and integration work.",
      "Worked with a cross-functional team spanning mobile, backend, and ML roles.",
      "Balanced feature scope, technical feasibility, and delivery speed in a program setting.",
    ],
  },
  {
    slug: "enfution",
    image: "/images/enfu.webp",
    title: "Enfution : UNDIP Website",
    company: "Universitas Diponegoro",
    stack: ["Next.js", "Tailwind", "TypeScript", "Laravel", "MySQL"],
    excerpt:
      "Website project for Universitas Diponegoro with a modern frontend and a structured backend stack.",
    description:
      "Enfution is a website project built for Universitas Diponegoro using a modern frontend stack with a structured backend architecture. The work focused on building a usable, maintainable web experience that could support organizational needs while keeping the interface clean and approachable.",
    details: [
      "Built the frontend with Next.js and Tailwind for a fast and responsive user experience.",
      "Worked within a stack that included Laravel and MySQL for data-backed features.",
      "Prioritized maintainability and clarity in both interface structure and implementation.",
    ],
  },
];

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);
