export const personalInfo = {
  name: "Dedy Risyaldi",
  role: "Software Developer | Machine Learning Enthusiast",
  headline: "Building scalable web backends, machine learning pipelines, and desktop applications.",
  avatar: "/pp.png",
  location: "Surabaya / Probolinggo, East Java, Indonesia",
  phone: "083191647715",
  formattedPhone: "+62 831-9164-7715",
  email: "risyaldi06@gmail.com",
  linkedin: "https://www.linkedin.com/in/dedy-risyaldi-981543262",
  linkedinDisplay: "dedy-risyaldi",
  resumePdf: "/Dedy Risyaldi-resume.pdf",
  bioShort: "Software Developer dengan fokus pada pengembangan web full-stack, penerapan AI/Machine Learning, dan aplikasi desktop. Berpengalaman membangun backend yang handal, integrasi AI praktis, dan solusi software terstruktur.",
  philosophy: "Fokus membangun sistem yang efisien, mudah dikembangkan, dan memberikan solusi nyata. Saya selalu antusias mendalami alur logika di balik teknologi dan mengeksplorasi inovasi baru di software engineering dan AI.",
  coreExpertise: [
    {
      title: "Full-Stack Web Dev",
      category: "Web & Backend",
      tech: "Laravel, React, REST API, MySQL",
      desc: "Aplikasi web modern, arsitektur RESTful API terstruktur, dan optimasi database."
    },
    {
      title: "Machine Learning & AI",
      category: "AI & Data Science",
      tech: "Python, IBM Granite, Data Pipeline",
      desc: "Integrasi model AI/ML praktis, pipeline pengolahan data, dan analitik otomatis."
    },
    {
      title: "Desktop App Dev",
      category: "Desktop & System",
      tech: ".NET, C#, WPF, Java SE",
      desc: "Aplikasi native desktop Windows dengan performa tinggi dan GUI interaktif."
    },
    {
      title: "Cloud & Dev Architecture",
      category: "Cloud & DevOps",
      tech: "GCP, Git Workflow, Agile Sprints",
      desc: "Kolaborasi version control, deployment cloud, dan arsitektur sistem yang scalable."
    }
  ]
};

export const educations = [
  {
    institution: "Politeknik Elektronika Negeri Surabaya (PENS)",
    degree: "D4 Teknik Informatika (Game Technology)",
    period: "2025 – 2029 (Expected)",
    score: "IPK 3.65 / 4.00",
    description: "Mempelajari fondasi ilmu komputer, algoritma, rekayasa perangkat lunak, pemrograman interaktif, dan pengembangan sistem kolaboratif.",
    location: "Surabaya, Jawa Timur"
  },
  {
    institution: "SMK Negeri 2 Kraksaan",
    degree: "Rekayasa Perangkat Lunak (RPL)",
    period: "2021 – 2024",
    score: "Nilai 91.00 / 100",
    description: "Mempelajari dasar pemrograman terstruktur, perancangan basis data, pengembangan web & desktop, serta praktik kerja tim perangkat lunak.",
    location: "Probolinggo, Jawa Timur"
  }
];

export const experiences = [
  {
    company: "PT. Novtra Tech Indonesia",
    role: "Software Developer",
    period: "Okt 2025 – Sekarang",
    type: "Full-Time",
    location: "Dumai, Riau & Surabaya",
    tag: "Agritech & AI",
    responsibilities: [
      "Mengembangkan solusi agritech full-stack mencakup aplikasi mobile, dashboard web, dan RESTful API untuk digitalisasi sektor pertanian.",
      "Membangun sistem backend yang handal menggunakan Laravel, mengelola alur data dan logika bisnis platform agritech.",
      "Mengintegrasikan modul AI/ML berbasis Python untuk mendukung fitur analisis data dan sistem pendukung keputusan otomatis.",
      "Merancang arsitektur basis data relasional agar proses simpan dan temu kembali data berjalan cepat dan reliabel.",
      "Berkolaborasi lintas tim dalam merilis iterasi fitur produk secara terstruktur dan terukur."
    ],
    techStack: ["Laravel", "Python (AI/ML)", "RESTful API", "MySQL", "System Architecture", "Agritech Ecosystem"]
  },
  {
    company: "PT. Onlenkan.com",
    role: "Full-Stack Developer",
    period: "Jan 2023 – Mei 2023",
    type: "Internship",
    location: "Probolinggo, Jawa Timur",
    tag: "Software Studio",
    responsibilities: [
      "Mengembangkan fitur frontend dan backend untuk berbagai kebutuhan proyek klien di software studio.",
      "Berkolaborasi dengan tim teknis dalam membangun website yang responsif dan fungsional.",
      "Menerapkan standar kode yang rapi, modular, dan terkelola dengan baik menggunakan Git version control."
    ],
    techStack: ["Laravel", "PHP", "JavaScript", "HTML5", "CSS3", "Git"]
  }
];

// Unified Skills Data List for Dynamic Tab-based Filtering
export const skillItems = [
  // Desktop Application Development
  {
    name: ".NET & C# Ecosystem",
    category: "desktop",
    categoryLabel: "Desktop & Systems",
    level: "Intermediate",
    percentage: 75,
    tag: "Desktop / Enterprise",
    description: "Building native Windows applications, object-oriented architectures, and backend components with C# and .NET runtime."
  },
  {
    name: "ASP.NET Core",
    category: "desktop",
    categoryLabel: "Desktop & Systems",
    level: "Beginner",
    percentage: 55,
    tag: "Web APIs & Microservices",
    description: "Developing basic RESTful APIs, routing configurations, and exploring ASP.NET backend architectures."
  },
  {
    name: "WPF (Windows Presentation Foundation)",
    category: "desktop",
    categoryLabel: "Desktop & Systems",
    level: "Intermediate",
    percentage: 72,
    tag: "XAML & Desktop GUI",
    description: "Creating rich graphical user interfaces, data bindings, MVVM design patterns, and responsive desktop software."
  },
  {
    name: "Java SE",
    category: "desktop",
    categoryLabel: "Desktop & Systems",
    level: "Beginner",
    percentage: 55,
    tag: "OOP & Desktop Apps",
    description: "Object-oriented programming fundamentals, core Java syntax, and basic client application development."
  },

  // AI, Machine Learning & Data Science
  {
    name: "Python Programming & ML",
    category: "ai-ml",
    categoryLabel: "AI & Data Science",
    level: "Intermediate",
    percentage: 76,
    tag: "AI & Automation",
    description: "Core algorithms, data analysis scripting, automation workflows, and ML model integrations."
  },
  {
    name: "IBM Granite Foundation Models",
    category: "ai-ml",
    categoryLabel: "AI & Data Science",
    level: "Intermediate",
    percentage: 75,
    tag: "LLM & Summarization",
    description: "Enterprise data classification, automated content summarization, and prompt engineering using IBM Granite."
  },
  {
    name: "Pandas & Data Processing",
    category: "ai-ml",
    categoryLabel: "AI & Data Science",
    level: "Intermediate",
    percentage: 75,
    tag: "ETL & Analytics",
    description: "Data manipulation, dataset cleaning, aggregation, transformation, and exploratory data analysis."
  },
  {
    name: "AI Decision Support Systems",
    category: "ai-ml",
    categoryLabel: "AI & Data Science",
    level: "Intermediate",
    percentage: 74,
    tag: "Agritech Intelligence",
    description: "Integrating data-driven machine learning models for actionable recommendation and automated reporting."
  },

  // Web & Backend Engineering
  {
    name: "Laravel (PHP)",
    category: "web",
    categoryLabel: "Web & Backend",
    level: "Intermediate",
    percentage: 78,
    tag: "Full-Stack Backend",
    description: "Building robust web backends, Eloquent ORM relations, authentication systems, and business logic."
  },
  {
    name: "RESTful API Architecture",
    category: "web",
    categoryLabel: "Web & Backend",
    level: "Intermediate",
    percentage: 76,
    tag: "API Engineering",
    description: "Designing structured, secure, and well-documented HTTP endpoints for mobile and web consumption."
  },
  {
    name: "Relational DB (MySQL / PostgreSQL)",
    category: "web",
    categoryLabel: "Web & Backend",
    level: "Intermediate",
    percentage: 75,
    tag: "Database Design",
    description: "Relational database schema modeling, query optimization, indexing, and data integrity guarantees."
  },
  {
    name: "JavaScript & Modern Web (React / UI)",
    category: "web",
    categoryLabel: "Web & Backend",
    level: "Intermediate",
    percentage: 75,
    tag: "Frontend & UI",
    description: "Creating responsive, interactive web interfaces, state management, and modern CSS workflows."
  },

  // Cloud, DevOps & Tools
  {
    name: "Google Cloud Platform (GCP)",
    category: "cloud",
    categoryLabel: "Cloud & DevOps",
    level: "Intermediate",
    percentage: 70,
    tag: "Cloud Infrastructure",
    description: "Deploying web services, cloud database configurations, and utilizing managed cloud APIs."
  },
  {
    name: "Git & GitHub Version Control",
    category: "cloud",
    categoryLabel: "Cloud & DevOps",
    level: "Intermediate",
    percentage: 78,
    tag: "VCS & Collaboration",
    description: "Git branching strategies, collaborative workflows, code reviews, and project repository management."
  },
  {
    name: "Agile & Project Management",
    category: "cloud",
    categoryLabel: "Cloud & DevOps",
    level: "Intermediate",
    percentage: 75,
    tag: "Workflow & Sprints",
    description: "Sprint planning, milestone tracking, cross-functional collaboration, and startup execution."
  },
  {
    name: "Startup & Business Strategy",
    category: "cloud",
    categoryLabel: "Cloud & DevOps",
    level: "Intermediate",
    percentage: 72,
    tag: "Startup Academy",
    description: "Product-market fit validation, venture incubation, pitch deck preparation, and business growth."
  }
];

export const achievements = [
  {
    title: "KMIPN VII 2025",
    subtitle: "Kompetisi Mahasiswa Informatika Politeknik Nasional",
    award: "JUARA 3",
    category: "Software Engineering (Insinyur Software)",
    year: "2025",
    level: "National Level",
    icon: "Trophy",
    description: "Meraih Juara 3 tingkat nasional pada kategori Insinyur Software di antara mahasiswa politeknik se-Indonesia."
  },
  {
    title: "PERTAMUDA 2025 Seed & Scale",
    subtitle: "PT Pertamina (Persero) Innovation & Incubation",
    award: "TOP 3",
    category: "Team Pe-Novtra Agritech",
    year: "2025",
    level: "National Level",
    icon: "TrendingUp",
    description: "Mencapai posisi Top 3 Nasional bersama tim Pe-Novtra dalam ajang kompetisi inovasi dan inkubasi startup Pertamina."
  },
  {
    title: "Fowler GSIC 2026",
    subtitle: "University of San Diego, USA",
    award: "FINALIST",
    category: "Global Social Innovation Challenge",
    year: "2026",
    level: "International Contest",
    icon: "Globe",
    description: "Terpilih sebagai Global Finalist pada ajang inovasi sosial dan teknologi berkelanjutan di University of San Diego."
  },
  {
    title: "Workshop EROS 2025",
    subtitle: "Humanoid Robotics & Software Development",
    award: "BEST PARTICIPANT",
    category: "Divisi Software",
    year: "2025",
    level: "Robotics & AI Workshop",
    icon: "Bot",
    description: "Penghargaan Peserta Terbaik Divisi Software pada workshop robotika humanoid tingkat lanjut."
  },
  {
    title: "GenKBiz by KB Bank 2025",
    subtitle: "KB Bukopin / KB Financial Innovation",
    award: "FINALIST",
    category: "Digital Financial & Tech Innovation",
    year: "2025",
    level: "National Contest",
    icon: "Target",
    description: "Finalis inovasi bisnis digital berbasis teknologi dan solusi layanan modern."
  },
  {
    title: "Program Startup Academy 2025",
    subtitle: "Incubation & Acceleration Mentorship",
    award: "SELECTED FOUNDER",
    category: "Business Mentorship",
    year: "2025",
    level: "Acceleration Program",
    icon: "Rocket",
    description: "Terpilih mengikuti program akselerasi dan pendampingan bisnis untuk startup tahap awal."
  }
];

export const certifications = [
  {
    title: "Data Classification and Summarization Using IBM Granite",
    issuer: "IBM",
    badge: "Professional Excellence",
    year: "2025",
    description: "Penerapan foundation model enterprise IBM Granite untuk klasifikasi dan ringkasan data otomatis.",
    credentialUrl: "https://www.linkedin.com/in/dedy-risyaldi-981543262"
  },
  {
    title: "Student Developer Initiative",
    issuer: "HACKTIV8",
    badge: "Selected Developer",
    year: "2025",
    description: "Program akselerasi developer mahasiswa dalam prinsip rekayasa perangkat lunak modern dan kolaboratif.",
    credentialUrl: "https://www.linkedin.com/in/dedy-risyaldi-981543262"
  },
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    badge: "Verified Certificate",
    year: "2024",
    description: "Fondasi Machine Learning, Deep Learning, Supervised & Unsupervised Learning.",
    credentialUrl: "https://www.linkedin.com/in/dedy-risyaldi-981543262"
  },
  {
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    badge: "Verified Certificate",
    year: "2024",
    description: "Sintaks Python, kontrol alur, fungsi, paradigma OOP, dan pengolahan data dasar.",
    credentialUrl: "https://www.linkedin.com/in/dedy-risyaldi-981543262"
  },
  {
    title: "Data Processing with Pandas",
    issuer: "Data Science Credential",
    badge: "Verified Certificate",
    year: "2024",
    description: "Manipulasi DataFrame, pembersihan dataset, agregasi data, dan integrasi pipeline data analitik.",
    credentialUrl: "https://www.linkedin.com/in/dedy-risyaldi-981543262"
  },
  {
    title: "Belajar Dasar Visualisasi Data",
    issuer: "Dicoding Indonesia",
    badge: "Verified Certificate",
    year: "2024",
    description: "Exploratory Data Analysis (EDA) dan visualisasi data yang komunikatif dan efektif.",
    credentialUrl: "https://www.linkedin.com/in/dedy-risyaldi-981543262"
  }
];
