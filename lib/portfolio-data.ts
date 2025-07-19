import { describe } from "node:test";

// This file contains all the portfolio data that can be easily updated
export const portfolioData = {
  personal: {
    name: "Abhisekh Nayek",
    title: "Full-Stack Developer",
    description: "` Bringing ideas to life through code, design, and motion.`",
  },

  about: {
    description:
      "I'm Abhisekh Nayek, a Full-Stack Developer always curious for new tech. Based in Midnapore, India, I hold an MCA from the University of North Bengal and currently work as a Software Developer at JobCode. My passion lies in crafting intuitive UI effects, animations, and dynamic user experiences. I'm a well-organized problem solver with keen attention to detail, eager to work on ambitious projects with positive, driven teams. Outside of development, I enjoy cricket, sci-fi/fantasy movies, and exploring new culinary experiences.",
    highlights: [
      "Well-organized",
      "Problem Solver",
      "Attention to Detail",
      "UI Effects",
      "Animations",
      "Intuitive UX",
      "Curiosity for new tech",
      "Teamwork",
      "Ambitious Projects",
      "Adaptability",
    ],
  },

  education: {
    degrees: [
      {
        degree: "Master's of Computer Application",
        institution: "University of North Bengal",
        duration: "2020-2024",
        status: "Graduated",
      },
      {
        degree: "Bachelor's of Computer Application",
        institution: "Midnapore College (Autonomous)",
        duration: "2019-2022",
        status: "Graduated",
      },
      {
        degree: "Higher Secondary (10+2)",
        institution: "Dantan Higher Secondary Multipurpose School | WBCHSE",
        duration: "2017-2019",
        status: "Completed",
      },
      {
        degree: "Secondary (10)",
        institution: "Dantan Higher Secondary Multipurpose School | WBBSE",
        duration: "2017",
        status: "Completed",
      },
    ],
  },

  skills: {
    technical: [
      "MongoDB",
      "Express JS",
      "ReactJS",
      "Node JS",
      "MySQL",
      "AWS",
      "Next JS",
      "Docker",
      "React Native",
      "Kali Linux",
      "Docker",
      "Kubernetes",
      "Git",
    ],
    soft: [
      "Well-organized",
      "Problem Solver",
      "Attention to Detail",
      "Curiosity for new tech",
      "Teamwork",
      "Ambitious Projects",
      "Communication",
      "Critical Thinking",
      "Adaptability",
      "Time Management",
      "Team Leadership",
    ],
    languages: ["C", "C++", "Python", "JavaScript", "TypeScript"],
    certifications: [
      "Front-end Web Development - Great Learning",
      "Advanced React - Coursera",
      "Developing Backend Apps with Node.js and Express",
      "Introduction to MongoDB",
      "Machine Learning Using Python",
      "Foundation of Cloud IOT Edge ML",
      "Cloud Computing with AWS",
      "Google Cloud Skills Boost",
    ],
  },

  experience: {
    workExperience: [
      {
        title: "Frontend Developer",
        company: "Outlier AI",
        duration: "May 2025 - Present",
        type: "Remote",
      },
      {
        title: "Software Developer",
        company: "Jobcode",
        duration: "Jan 2025 - Present",
        type: "Full-time",
      },
      {
        title: "Web Developer",
        company: "University Of North Bengal",
        duration: "Jan 2023 - Jun 2023",
        type: "Part-time",
      },
    ],
    internships: [
      {
        title: "Frontend Developer",
        company: "VRV Security",
        duration: "Nov 2024 - Dec 2024",
        type: "Internship",
      },
      {
        title: "Software Developer",
        company: "Genomics Lab",
        duration: "Mar 2024 - Aug 2024",
        type: "Internship",
      },
      {
        title: "Service Desk Analyst",
        company: "Zapuza",
        duration: "Jan 2022 - Jun 2022",
        type: "Internship",
      },
    ],
    hackathons: [
      {
        name: "Untop Talent Park 2025",
        role: "Team Lead",
        project: "E-Learning Platform with Live Coding",
        result: "Finalist",
        date: "March 2025",
      },
      {
        name: "GrabHack Shaping-the-Future",
        role: "Team Lead",
        project: "Intelligent Payment System",
        result: "Cleared Round 1",
        date: "April 2025",
      },
      {
        name: "Code Circuit Hackathon. ",
        role: "Team Lead & Full-Stack Developer",
        project: "Real-time Blog App",
        result: "Finalist",
        date: "May 2025",
      },
    ],

    openSource: [
    {
      project: "Hacksquad 2023",
      organization: "Hacktoberfest",
      role: "Javascript Contributor",
      date: "Oct 2023",
      description:
        "Contributed to Hacksquad 2023, focusing on JavaScript enhancements.",
    },
    {
      project: "HackerRank Astra Human + AI",
      organization: "HackerRank",
      role: "Javascript and Testing Contributor",
      date: "Mar 2024",
      description:
        "Open Source contribution focused on JavaScript and Testing.",
    },
    {
      project: "Svelte Task",
      organization: "GitHub Open Source",
      role: "Javascript and Jest Contributor",
      date: "Mar 2024",
      description:
        "Contributed to Svelte Task, enhancing JavaScript and Jest functionalities.",
    },
  ]
  },
  projects: [
    {
      name: "HackerRank Astra Human + AI",
      description:
        "Open Source contribution focused on JavaScript and Testing.",
      technologies: ["JavaScript", "Testing", "Open Source"],
      features: [
        "Open Source Contribution",
        "JavaScript Focus",
        "Testing Focus",
      ],
      demoUrl: "https://www.linkedin.com/posts/abhisekhnayek1755_hackerrankastra-javascript-codingchallenge-activity-7331707667977043968-tLix?utm_source=share&utm_medium=member_desktop&rcm=ACoAADjFfhMBwLyerBhHuxx4GXUVOFGh1p3yeLo",
    },
    {
      name: "Blogify",
      description:
        "Top-performing MERN stack project in Code Circuit Hackathon.",
      technologies: [
        "MongoDB",
        "Express JS",
        "ReactJS",
        "Node JS",
        "MERN Stack",
      ],
      features: ["MERN Stack", "Hackathon Winner"],
      demoUrl: "https://github.com/AbhisekhNayek/Blog",
    },
    {
      name: "Concrete Crack Segmentation",
      description:
        "Implemented histogram-based clustering and morphological operations for crack detection. Associated with Midnapore College.",
      technologies: [
        "Image Processing",
        "Computer Vision",
        "Python",
        "Machine Learning",
      ],
      features: [
        "Crack Detection",
        "Histogram Clustering",
        "Morphological Operations",
      ],
      demoUrl: "https://link.springer.com/chapter/10.1007/978-3-031-22485-0_28",
    },
    {
      name: "My Portfolio",
      description:
        "Personal portfolio website built with HTML, CSS3, JavaScript, and Framer Motion.",
      technologies: ["HTML", "CSS3", "JavaScript", "Framer Motion"],
      features: ["Personal Portfolio", "Animations", "Responsive Design"],
      demoUrl: "https://portfolio-alpha-six-16.vercel.app/",
    },
    {
      name: "Remedi",
      description:
        "Medicine reminder app developed with React Native, TypeScript, Async Storage, and Expo CLI.",
      technologies: [
        "React Native",
        "TypeScript",
        "Async Storage",
        "Expo CLI",
        "Mobile Development",
      ],
      features: ["Medicine Reminder", "Mobile App", "Cross-Platform"],
      demoUrl: "https://github.com/AbhisekhNayek/Remedi",
    },
    {
      name: "StuMate",
      description:
        "University Placement Management System built using the MERN stack. Associated with University of North Bengal.",
      technologies: [
        "MongoDB",
        "Express JS",
        "ReactJS",
        "Node JS",
        "MERN Stack",
      ],
      features: ["Placement Management", "MERN Stack", "University System"],
      demoUrl: "https://github.com/AbhisekhNayek/StuMate-Placement-Management-System",
    },
    {
      name: "Whisper Line",
      description:
        "Anonymous crime reporting app developed using TypeScript, Next.js, MongoDB, Prisma ORM, and integrated with Google Gemini.",
      technologies: [
        "TypeScript",
        "Next.js",
        "MongoDB",
        "Prisma ORM",
        "Google Gemini",
        "AI Integration",
      ],
      features: [
        "Anonymous Reporting",
        "AI Integration",
        "Crime Reporting",
        "Full-Stack",
      ],
      demoUrl: "https://github.com/AbhisekhNayek/Whisper-Line",
    },
    {
      name: "Spotify Talk",
      description:
        "A full-stack music streaming platform with real-time chat, admin control, and live user tracking.",
      technologies: [
        "Full-Stack",
        "Music Streaming",
        "Real-time Chat",
        "Admin Panel",
      ],
      features: [
        "Music Streaming",
        "Real-time Chat",
        "Admin Control",
        "Live User Tracking",
      ],
      demoUrl: "https://github.com/AbhisekhNayek/SpotifyTalk",
    },
    {
      name: "Premium Dashboard",
      description:
        "Premium Dashboard! This is a full-stack web application for managing products, analytics, and user authentication, built with Next.js (Frontend) and Express/MongoDB (Backend).",
      technologies: ["Next.js", "React.js", "MongoDB", "Express.js"],
      features: [
        "User Management",
        "Admin Control",
        "Role-Based Access",
        "Intuitive UI",
      ],
      demoUrl: "https://github.com/AbhisekhNayek/MyDashboard",
    },
  ],

  contact: {
    email: "abhisekhnayek1@gmail.com",
    phone: "+91 XXX-XXX-XXXX",
    location: "Midnapore, West Bengal, India",
  },
};
