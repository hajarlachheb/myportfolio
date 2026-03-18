/**
 * Single source of truth for your CV. Update this file to keep /cv in sync.
 */
export const cv = {
  name: "Hajar Lachheb",
  nickname: "Qamar",
  title: "AI Engineer and PhD Candidate in AI, Privacy, Security",
  subtitle: "NLP, privacy, security & reproducible ML pipelines",
  tagline: "AI Engineer and PhD Candidate in AI, Privacy and Security. Building ML systems and research in privacy, unlearning, and knowledge-driven AI.",
  email: "hajarlachheb.dev@gmail.com",
  phone: "+34 617 963 493",
  website: "https://hajarlachheb.com",
  location: "Barcelona, Spain",
  links: [
    { label: "LinkedIn", url: "https://linkedin.com/in/hajarlachheb" },
    { label: "GitHub", url: "https://github.com/hajarlachheb" },
  ],
  bio: `AI & Data Science professional with 3+ years of experience designing and deploying AI systems in both research and production environments. Experienced in building agentic platforms with LLMs, RAG pipelines, and multi-agent orchestration, as well as leading Marketing Mix Modeling (MMM) projects on Google Cloud and BigQuery.

Strong background in Python, R, MATLAB, PyTorch, scalable ML workflows, NLP, knowledge graphs, and explainability-aware model evaluation (SHAP). Skilled in reproducibility, structured validation frameworks, and translating research outputs into robust prototypes and production-ready AI solutions.

Passionate about Trustworthy AI, including model interpretability, bias-aware evaluation, privacy-preserving AI, governance-aware data processing, and socially responsible AI systems.`,

  experience: [
    {
      role: "AI Engineer – Agentic Platforms",
      org: "Forvis Mazars",
      location: "Barcelona",
      start: "Oct 2025",
      end: "Present",
      description: "Design and deploy large-scale agentic platforms with LLMs and RAG pipelines on Azure Cloud. Manage data storage and retrieval using MongoDB for multi-agent systems. Implement multi-agent orchestration, prompt engineering, and workflow automation for enterprise applications. Develop monitoring, logging, and reliability frameworks for distributed AI agents. Translate business and regulatory requirements into scalable AI platform solutions.",
    },
    {
      role: "Data Science Consultant – Marketing Mix Modeling",
      org: "S360",
      location: "Barcelona",
      start: "Apr 2025",
      end: "Present",
      description: "Lead Marketing Mix Modeling projects using Google Cloud and BigQuery for large-scale ad and sales datasets. Build dashboards and visualizations in Looker to support media planning and ROI optimization. Design reproducible MMM pipelines and statistical frameworks for media and geo-level analyses. Provide actionable insights to clients, integrating structured and semi-structured data with governance-aware processes.",
    },
    {
      role: "AI Engineer – Machine Unlearning & Privacy",
      org: "CRISES Research Group",
      location: "Tarragona",
      start: "Jan 2024",
      end: "Apr 2025",
      description: "Researched and implemented machine unlearning techniques in LLMs (BERT, GPT) to ensure data privacy and security. Developed reproducible pipelines for model training, evaluation, and selective forgetting of sensitive information. Conducted experiments in AI security, privacy, and reinforcement learning. Designed structured evaluation frameworks and documentation translating research outcomes into applied prototypes.",
    },
    {
      role: "Data Scientist",
      org: "Adevinta",
      location: "Barcelona",
      start: "Sep 2022",
      end: "Jan 2024",
      description: "Contributed to ML systems processing over 100,000 daily events. Built automated inference pipelines and real-time monitoring systems. Performed advanced feature engineering and large-scale data analysis. Improved model reliability through systematic validation, debugging, and performance analysis.",
    },
  ],

  education: [
    {
      degree: "PhD in Artificial Intelligence",
      institution: "University of Barcelona",
      location: "Barcelona",
      year: "2025 – Present",
      thesis: "Research focus: Privacy and security in AI — Healthcare sector.",
    },
    {
      degree: "Master in Artificial Intelligence",
      institution: "UPC, UB, URV",
      location: "Barcelona",
      year: "2022 – 2024",
    },
    {
      degree: "Engineering Degree in Data and Knowledge Management",
      institution: "Rabat",
      location: "Morocco",
      year: "2019 – 2022",
    },
  ],

  skills: [
    "Programming: Python (advanced), SQL, R, MATLAB, familiarity with MongoDB",
    "Agentic Platforms & LLMs: Multi-agent orchestration, RAG pipelines, prompt engineering, semantic search, transformer models (BERT, GPT), embeddings",
    "Machine Learning & AI Engineering: Model training, evaluation frameworks, experiment tracking, supervised learning, reproducible pipelines, model explainability (SHAP)",
    "Trustworthy AI & Privacy: Machine unlearning, model interpretability, bias-aware evaluation, privacy-preserving AI, governance-aware data processing",
    "Marketing Analytics & BI: Marketing Mix Modeling (MMM), media ROI evaluation, statistical pipelines, Looker, Power BI, Tableau, Google Cloud BigQuery",
    "Knowledge Representation & Graphs: Ontologies (Gene Ontology, Disease Ontology, MeSH), structured data modeling, knowledge graphs",
    "Data Engineering & Workflow Automation: Airflow, DBT, Databricks, scalable pipelines for structured and semi-structured data",
    "Infrastructure & Deployment: Docker, Azure Cloud, Google Cloud, CI/CD, monitoring frameworks",
    "MLOps: Pipeline design, testing, deployment, monitoring, versioning",
  ],

  projects: [
    {
      name: "Explainability-Aware NLP Pipelines",
      description: "Developed transformer-based text processing systems with embedding analysis and semantic similarity evaluation. Explored interpretability strategies and structured ontology-based normalization.",
      link: null,
      period: null,
      highlight: null,
    },
    {
      name: "Knowledge-Driven Systems and Ontologies",
      description: "Designed semantic search and retrieval pipelines leveraging embeddings and structured domain knowledge (Gene Ontology, Disease Ontology, MeSH). Applied knowledge representation principles for improved interpretability.",
      link: null,
      period: null,
      highlight: null,
    },
    {
      name: "Reproducible and Auditable ML Workflows",
      description: "Built modular ML pipelines with experiment tracking, structured evaluation, and documentation to support transparency and replicability.",
      link: null,
      period: null,
      highlight: null,
    },
    {
      name: "Data Governance-Oriented Data Processing",
      description: "Implemented scalable data integration workflows ensuring consistency, traceability, and structured transformation.",
      link: null,
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

  languages: [
    "Arabic (Native)",
    "English (Fluent)",
    "French (Fluent)",
    "Spanish (Beginner)",
  ],

  researchCollaboration: [
    "Conduct literature reviews and state-of-the-art analyses for ML research topics.",
    "Translate research concepts into implemented AI prototypes.",
    "Experience collaborating in multidisciplinary research environments.",
    "Interested in scientific writing, paper submission, and research proposal development.",
  ],

  pdfUrl: "/cv.pdf",
};

export type CV = typeof cv;
