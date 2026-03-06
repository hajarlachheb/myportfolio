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
  bio: `AI Research Engineer and Data Scientist with 3+ years of experience developing machine learning systems and data-driven research tools using Python and modern AI frameworks. Experienced in working with large-scale datasets, designing model evaluation frameworks, and developing reproducible machine learning pipelines.

Strong background in natural language processing, transformer models, and knowledge-driven systems. Passionate about open-source research, collaborative scientific development, and applying AI methodologies to solve complex global challenges.`,

  experience: [
    {
      role: "AI Engineer",
      org: "Forvis Mazars",
      location: "Barcelona",
      start: "Oct 2025",
      end: "Present",
      description: "Design and implement machine learning systems using Python for large-scale data analysis and predictive modelling. Develop reproducible ML pipelines including data preprocessing, feature engineering, model training, and evaluation. Implement structured evaluation frameworks to assess model reliability and performance. Build scalable data processing pipelines to support AI model deployment and experimentation. Collaborate with multidisciplinary teams to develop robust AI solutions and analytical tools.",
    },
    {
      role: "Data Science Consultant",
      org: "S360",
      location: "Barcelona",
      start: "Apr 2025",
      end: "Present",
      description: "Develop analytical datasets and data transformation pipelines using SQL, Python, DBT, and Airflow. Perform large-scale data analysis and modelling to extract insights from structured and semi-structured data. Implement data validation and quality monitoring processes across analytical workflows. Build dashboards and analytical tools supporting data-driven research and decision-making.",
    },
    {
      role: "Data Scientist and Engineer",
      org: "CRISES Research Group",
      location: "Tarragona",
      start: "Jan 2024",
      end: "Apr 2025",
      description: "Built machine learning and NLP pipelines for large-scale analysis of textual and structured datasets. Designed annotation-based evaluation frameworks with defined sampling strategies and statistical baselines. Conducted research-oriented data analysis combining metadata, content signals, and machine learning models. Developed reproducible experimental pipelines for model benchmarking and validation.",
    },
    {
      role: "Data Scientist",
      org: "Adevinta",
      location: "Barcelona",
      start: "Sep 2022",
      end: "Jan 2024",
      description: "Analyzed high-volume behavioral datasets (100,000+ daily events) to improve predictive modelling systems. Built automated pipelines for model inference, evaluation, and monitoring. Applied statistical modelling and feature engineering techniques to improve model performance. Improved dataset reliability through structured transformations and validation checks.",
    },
  ],

  education: [
    {
      degree: "PhD in Artificial Intelligence",
      institution: "University of Barcelona",
      location: "Barcelona",
      year: "2025 – Present",
      thesis: "Focus: Evaluation frameworks, scalable ML systems, knowledge-aware AI architectures.",
    },
    {
      degree: "PhD in Privacy and Security (1 year)",
      institution: "Universitat Rovira i Virgili (URV)",
      location: "Tarragona, Spain",
      year: "2024 – 2025",
      thesis: "Privacy and security of LLMs; machine unlearning.",
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
    {
      degree: "Preparatory Classes – Math Physics",
      institution: "Lycée Salmane Farissi",
      location: "Sale, Morocco",
      year: "2017 – 2019",
    },
  ],

  skills: [
    "Programming: Python (advanced), SQL, R, MATLAB, Java",
    "Machine Learning: NLP, transformer models, predictive modelling, model evaluation",
    "AI Frameworks: PyTorch, TensorFlow, scikit-learn",
    "Data Processing: Large-scale datasets, feature engineering, data validation",
    "Data Engineering: ETL pipelines, DBT, Airflow",
    "Infrastructure: Docker, AWS, CI/CD",
    "Version Control: Git",
    "Visualization: Looker, Power BI, Tableau",
  ],

  projects: [
    {
      name: "LLM Annotation Quality Evaluation Framework",
      description: "Designed a framework to evaluate LLM-generated annotations using human-labelled baselines. Implemented precision, recall, and agreement metrics to assess annotation quality and model reliability.",
      link: null,
      period: null,
      highlight: null,
    },
    {
      name: "Knowledge-Aware NLP Systems",
      description: "Developed NLP pipelines using embeddings and transformer-based architectures. Integrated structured knowledge sources and metadata for improved model performance.",
      link: null,
      period: null,
      highlight: null,
    },
    {
      name: "Reproducible Machine Learning Pipelines",
      description: "Built modular pipelines for data preprocessing, model training, and evaluation. Implemented reproducible experiments and benchmarking workflows.",
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

  pdfUrl: "/cv.pdf",
};

export type CV = typeof cv;
