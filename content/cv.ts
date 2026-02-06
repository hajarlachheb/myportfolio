/**
 * Single source of truth for your CV. Update this file to keep /cv in sync.
 */
export const cv = {
  name: "Hajar Lachheb",
  nickname: "Qamar",
  title: "Data Scientist & AI Researcher",
  subtitle: "Computer Vision, NLP, LLM building & privacy-preserving ML",
  tagline: "Building scalable, secure, and responsible AI systems. PhD in AI. Girl in tech.",
  email: "your.email@example.com",
  phone: undefined as string | undefined,
  website: "https://hajarlachheb.com",
  location: "Barcelona, Catalonia, Spain",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/hajarlachheb/" },
    { label: "GitHub", url: "https://github.com/hajarlachheb" },
    { label: "Google Scholar", url: "https://scholar.google.com/..." },
  ],
  bio: `Hi, I'm Hajar (but I go by Qamar!). I'm a Data Scientist & AI Researcher passionate about building scalable, secure, and responsible AI systems. With 3+ years in ML, NLP, and AI security, I've worked across research labs, startups, and tech consulting. I'm currently pursuing a PhD in AI at the University of Barcelona, focusing on LLM security, machine unlearning, and privacy-preserving AI. I love making next-gen AI trustworthy, ethical, and compliant. Girl in tech.`,

  experience: [
    {
      role: "Associate Cloud Engineer Marketing Analytics MMM",
      org: "S360",
      location: "Barcelona, Spain",
      start: "Apr 2025",
      end: "Present",
      description: "Building and configuring MMM models on Google Meridian, integrating marketing data on GCP, and delivering data-driven insights for client ROI. Improved processing efficiency by 90% with scalable MMM pipelines.",
    },
    {
      role: "PhD Researcher in AI, Privacy and Security",
      org: "Universitat Rovira i Virgili (CRISES)",
      location: "Barcelona, Spain",
      start: "Jan 2024",
      end: "Mar 2025",
      description: "Developed models and solutions to enhance privacy and security of LLMs. Published research on machine unlearning & LLM security at international AI privacy conferences.",
    },
    {
      role: "Machine Learning Engineer",
      org: "IRI - Institut de Robòtica i Informàtica Industrial, CSIC-UPC",
      location: "Barcelona, Spain",
      start: "Sep 2023",
      end: "Jan 2024",
      description: "Lifelong learning for robots: developed novel approaches for detecting new classes with incremental methods and reinforcement learning.",
    },
    {
      role: "Data Scientist",
      org: "Adevinta Spain",
      location: "Barcelona, Spain",
      start: "Sep 2022",
      end: "Jan 2024",
      description: "Reduced fraudulent listings by 27% with NLP fraud-detection pipeline at scale (100k+ listings/day). Duplicate ad detection for Fotocasa & Idealista with human-like intelligence approach.",
    },
    {
      role: "ML Remote Sensing Intern",
      org: "Institut Scientifique, Université Mohammed-V de Rabat",
      location: "Rabat, Morocco",
      start: "Apr 2022",
      end: "Jun 2022",
      description: "Smart agriculture risk management with ML and remote sensing. AI-powered risk detection (85% accuracy) and real-time dashboards for farmers.",
    },
  ],

  education: [
    {
      degree: "Ph.D. in Artificial Intelligence",
      institution: "Universitat Rovira i Virgili",
      location: "Spain",
      year: "2024 – 2025",
      thesis: "Privacy and security of LLMs; machine unlearning.",
    },
  ],

  skills: [
    "Machine Learning & AI: NLP, computer vision, LLMs, reinforcement learning, fraud detection",
    "Data & Cloud: GCP, marketing mix modeling (MMM), data integration, pipelines",
    "Research: privacy-preserving ML, machine unlearning, AI security, responsible AI",
    "Tools: Python, Streamlit, Power BI, Dialogflow, remote sensing",
  ],

  projects: [
    {
      name: "AID",
      description: "Community of artisans reshaping Morocco's artisan economy. Supporting livelihoods and the future of craft in Morocco.",
      link: "https://moroboxshop.wordpress.com/",
      period: "Jul 2020 – Present",
      highlight: "1st place MINKOM Hackaton",
    },
    {
      name: "VSCarbon",
      description: "NASA Space Apps Challenge 2020 project. Climate/space-related solution with our team.",
      link: null,
      period: "2020",
      highlight: "2nd place NASA Space App Challenge 2020",
    },
    {
      name: "Game Theory & Complex Networks",
      description: "Evolutionary games (prisoner's dilemma, stag hunt, snowdrift, hawk-dove) on network topologies with different update rules.",
      link: "https://github.com/hajarlachheb/Game-Theory-Complex-Network",
      period: null,
      highlight: "GitHub ⭐",
    },
    {
      name: "Crop Recommendation System",
      description: "ML-based crop recommendation for agriculture.",
      link: "https://github.com/hajarlachheb/CropRecommandationSystem",
      period: null,
      highlight: null,
    },
    {
      name: "Deforestation Detection",
      description: "ML for deforestation detection (FSDL project).",
      link: "https://github.com/hajarlachheb/fsdl_deforestation_detection-1",
      period: null,
      highlight: null,
    },
  ],

  awards: [
    "2nd place – NASA Space App Challenge 2020 (VSCarbon)",
    "1st place – Enactus Exchange Program 2020 (DrHerbs)",
    "1st place – MINKOM Hackaton (AID)",
    "1st place – WMR Hackaton",
    "3rd place – Ababou Hackaton",
    "Finalist – YLP 6 Regional Forum (MSC YLP Morocco)",
    "Outstanding Speaker – Citizens Summit (peacemaking panel)",
  ],

  pdfUrl: "/cv.pdf",
};

export type CV = typeof cv;
