export const portfolioData = {
  personal: {
    name: "Pallavi Patel",
    role: "B.Tech AIML Student | Aspiring Software Developer",
    degree: "B.Tech in Computer Science (AIML)",
    college: "Gyan Ganga Institute of Technology and Sciences, Jabalpur",
    batch: "2024–2028",
    tagline: "B.Tech Computer Science student specializing in Artificial Intelligence and Machine Learning (AIML).",
    bio: "Passionate undergraduate student at Gyan Ganga Institute of Technology and Sciences, Jabalpur. Deeply interested in Artificial Intelligence, Machine Learning, software development, and logical problem-solving. Dedicated to continuous learning, building practical AI and web applications, and collaborating effectively in team settings.",
    location: "Jabalpur, Madhya Pradesh, India",
    email: "pallavi.patel.aiml@example.com", // Editable placeholder
    phone: "+91 98765 43210", // Editable placeholder
    availability: "B.Tech AIML Student (2024–2028) • Open to Learning & Projects",
    stats: {
      degree: "B.Tech (AIML)",
      timeline: "2024 – 2028",
      college: "GGITS Jabalpur",
      focus: "AI, ML & Software Dev"
    },
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  
  about: {
    headline: "Curious student engineer exploring Artificial Intelligence, Machine Learning, and Software Development.",
    paragraphs: [
      "I am an undergraduate student pursuing my Bachelor of Technology (B.Tech) in Computer Science with a specialization in Artificial Intelligence and Machine Learning at Gyan Ganga Institute of Technology and Sciences (GGITS), Jabalpur (Batch 2024–2028).",
      "My passion lies in understanding how data, intelligent algorithms, and modern software architectures combine to solve complex challenges. I focus on developing clean coding fundamentals in C++ and Python, exploring machine learning models, and building responsive web interfaces with HTML and JavaScript.",
      "Beyond academic coursework, I believe in continuous learning, participating in technical workshops, hackathons, and contributing to college technical club activities and volunteering initiatives."
    ],
    highlights: [
      {
        title: "Artificial Intelligence & ML",
        desc: "Fascinated by intelligent automation, computer vision, data analytics, and applied machine learning models."
      },
      {
        title: "Core Problem Solving",
        desc: "Practicing data structures and algorithmic thinking using C++ and Python to build resilient logic."
      },
      {
        title: "Web Technologies",
        desc: "Crafting structured, accessible, and responsive user interfaces with HTML, CSS, and modern JavaScript."
      },
      {
        title: "Teamwork & Learning",
        desc: "Active participant in technical club events, hackathon problem-solving, and campus volunteering."
      }
    ]
  },

  education: {
    degree: "Bachelor of Technology (B.Tech)",
    specialization: "Computer Science & Engineering (Artificial Intelligence and Machine Learning)",
    college: "Gyan Ganga Institute of Technology and Sciences (GGITS)",
    location: "Jabalpur, Madhya Pradesh, India",
    batch: "2024 – 2028",
    status: "Currently Pursuing (Expected Graduation: 2028)",
    highlights: [
      "Specialized curriculum focusing on Artificial Intelligence, Machine Learning, and Data Science.",
      "Strong foundation in Computer Science fundamentals: Data Structures, Algorithms, and Object-Oriented Programming.",
      "Practical project work in intelligent document verification, fraud analytics, and interactive web tools.",
      "Active engagement in academic workshops, coding clubs, and technical hackathons."
    ]
  },

  skills: [
    {
      name: "Python",
      category: "Programming Language",
      description: "Primary language for Artificial Intelligence, Machine Learning workflows, data analysis, and automation scripts.",
      badge: "Core Language"
    },
    {
      name: "C++",
      category: "Programming Language",
      description: "Strong foundation in object-oriented programming (OOP), data structures, algorithms, and computational efficiency.",
      badge: "Problem Solving"
    },
    {
      name: "Artificial Intelligence",
      category: "Specialization",
      description: "Understanding intelligent systems, decision logic, heuristic algorithms, and modern AI paradigms.",
      badge: "Specialization"
    },
    {
      name: "Machine Learning",
      category: "Specialization",
      description: "Studying supervised & unsupervised learning, model training, evaluation metrics, and data preprocessing pipelines.",
      badge: "Core Focus"
    },
    {
      name: "HTML",
      category: "Web Development",
      description: "Semantic markup, modern web page structure, forms, accessibility, and responsive interface foundations.",
      badge: "Frontend"
    },
    {
      name: "JavaScript",
      category: "Web Development",
      description: "Interactive client-side scripting, DOM manipulation, asynchronous operations, and modern web application logic.",
      badge: "Frontend"
    },
    {
      name: "Git & GitHub",
      category: "Version Control & Tools",
      description: "Branching, committing, repository management, collaborative workflows, and code versioning.",
      badge: "Tooling"
    }
  ],

  projects: [
    {
      id: 1,
      title: "NetraAI",
      subtitle: "AI-Based Document Verification Project",
      category: "Artificial Intelligence",
      description: "An intelligent document verification solution designed to inspect, validate, and verify the authenticity of official documents using artificial intelligence, feature extraction, and automated anomaly checking.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Artificial Intelligence", "Machine Learning", "Computer Vision", "OCR"],
      focusArea: "AI Document Analysis & Tamper Detection",
      github: "https://github.com",
      demo: "https://github.com",
      featured: true,
      caseStudy: {
        problem: "Manual verification of certificates, identity proofs, and credentials is slow, labor-intensive, and prone to human oversight or forgery.",
        solution: "NetraAI explores automated optical analysis and pattern validation to inspect textual content, alignment markers, and structural layouts to assist in reliable document verification.",
        techStack: "Python, AI / ML Libraries, Image Processing, OCR & Validation Pipelines"
      }
    },
    {
      id: 2,
      title: "Crypto Fraud Detection",
      subtitle: "Blockchain Analytics & Suspicious Wallet Identification",
      category: "Machine Learning",
      description: "A machine learning and data analytics project developed to analyze transaction behavioral patterns on public ledgers, flag anomalous token transfers, and identify potentially suspicious wallet addresses.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Machine Learning", "Data Analytics", "Blockchain Concepts", "Anomaly Detection"],
      focusArea: "Behavioral Analytics & Anomaly Identification",
      github: "https://github.com",
      demo: "https://github.com",
      featured: true,
      caseStudy: {
        problem: "Decentralized transaction streams can be exploited for illicit activities and fraudulent schemes, making manual detection nearly impossible.",
        solution: "Applies machine learning anomaly detection algorithms and transaction graph metrics to identify abnormal transfer velocities, erratic amounts, and known risky wallet clusters.",
        techStack: "Python, Machine Learning Classifiers, Data Analytics, Graph Metrics"
      }
    },
    {
      id: 3,
      title: "One Stop Personalized Career & Education Advisor",
      subtitle: "Multilingual Career Guidance Project",
      category: "AI & Web Application",
      description: "A multilingual student advising platform engineered to provide personalized career recommendations, educational roadmaps, and course guidance tailored to a learner's individual skills and preferred language.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "JavaScript", "HTML", "Machine Learning", "Multilingual UI"],
      focusArea: "Personalized Educational Roadmaps & Multilingual Support",
      github: "https://github.com",
      demo: "https://github.com",
      featured: true,
      caseStudy: {
        problem: "Students from diverse linguistic backgrounds often struggle to access personalized, structured guidance for navigating modern tech and career options.",
        solution: "Combines an intuitive multilingual interface with interest-matching recommendation logic, guiding students step-by-step toward matching academic disciplines and skill requirements.",
        techStack: "Python, JavaScript, HTML, Machine Learning Recommendation Logic"
      }
    }
  ],

  activities: [
    {
      title: "College Technical Club Participation",
      organization: "Gyan Ganga Institute of Technology and Sciences, Jabalpur",
      period: "2024 – Present",
      category: "Technical Community",
      description: "Active member of the student technical and coding club. Regularly participating in coding meetups, technical seminars, peer discussions, and collaborative software projects."
    },
    {
      title: "Hackathon Experience & Team Problem Solving",
      organization: "Inter-College & Campus Hackathons",
      period: "2024 – Present",
      category: "Hackathons",
      description: "Collaborating with multidisciplinary student teams in competitive hackathons to conceptualize, prototype, and pitch innovative technical solutions within time constraints."
    },
    {
      title: "College Volunteering & Event Coordination",
      organization: "GGITS Campus Events & Technical Symposiums",
      period: "2024 – Present",
      category: "Volunteering",
      description: "Volunteering for institutional events, guest speaker sessions, and departmental technical symposiums; assisting with event management, attendee guidance, and team coordination."
    },
    {
      title: "Continuous Learning & Open Source Coding",
      organization: "Independent Practice & GitHub",
      period: "2024 – Present",
      category: "Self-Development",
      description: "Actively solving algorithmic problems in C++ and Python, studying modern machine learning algorithms, and version-controlling student projects with Git and GitHub."
    }
  ]
};
