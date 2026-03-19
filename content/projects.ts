/**
 * Full project entries for the Projects page.
 * Add image, summary, tags, code/demo links; set featured: true to show a "Featured" pill.
 * Images: put in public/projects/ (e.g. public/projects/my-project.png) and set image: "/projects/my-project.png"
 * section: groups projects into Research, Technical, Prototypes, PM, etc.
 */

export type ProjectSection = "Research" | "Technical" | "Prototypes" | "PM";

export type Project = {
  /** Project title */
  name: string;
  /** Short summary (one or two sentences) */
  summary: string;
  /** Section/category for grouping on the page */
  section: ProjectSection;
  /** Tech stack or keywords as tags */
  tags: string[];
  /** Optional: path or URL to project image (e.g. "/projects/llm-framework.png") */
  image?: string;
  /** Optional: link to repository */
  codeUrl?: string;
  /** Optional: link to live demo or deployment */
  demoUrl?: string;
  /** Optional: extra links (e.g. "Paper", "Slides") */
  materials?: { label: string; url: string }[];
  /** Show "Featured" pill when true */
  featured?: boolean;
};

const SECTION_ORDER: ProjectSection[] = ["Research", "Technical", "Prototypes", "PM"];

export const projects: Project[] = [
  {
    name: "LLM Annotation Quality Evaluation Framework",
    summary: "Framework for evaluating LLM-generated annotations against human-labelled baselines. Classification metrics, NER sequence labeling via seqeval, soft IoU scoring, bootstrap confidence intervals, slice-based evaluation, error analysis, and inter-LLM agreement heatmaps.",
    section: "Research",
    tags: ["Python", "NLP", "LLMs", "Evaluation", "seqeval", "Annotation"],
    image: "/projects/llm-annotation.png",
    codeUrl: "https://github.com/hajarlachheb/llm-annotation-eval",
    featured: true,
  },
  {
    name: "Exact and Efficient Unlearning for LLMs",
    summary: "Published research on machine unlearning methods for large language models — privacy-preserving techniques to remove training data influence without full retraining.",
    section: "Research",
    tags: ["Privacy", "LLMs", "Unlearning", "NLP"],
    image: "/projects/llm-annotation.png",
    materials: [
      { label: "Paper", url: "/papers/exact-efficient-unlearning-llms.pdf" },
    ],
    featured: true,
  },
  {
    name: "ResearchGPT",
    summary: "Production-ready RAG system for asking complex questions across thousands of research papers. Hybrid retrieval (vector + BM25), cross-encoder reranking, citation grounding, streaming responses, and automated Ragas evaluation.",
    section: "Technical",
    tags: ["Python", "RAG", "FastAPI", "ChromaDB", "OpenAI", "LangChain"],
    image: "/projects/research-gpt.png",
    codeUrl: "https://github.com/hajarlachheb/research-gpt",
    featured: true,
  },
  {
    name: "LegacyShift",
    summary: "AI-powered legacy code migration tool that explains, tests, and rewrites old Java/COBOL code safely. Test-first pipeline using LangGraph: generates tests before translation, then iterates with a feedback loop until tests pass.",
    section: "Technical",
    tags: ["Python", "LangGraph", "Tree-sitter", "FastAPI", "Docker", "LLM"],
    image: "/projects/legacy-shift.png",
    codeUrl: "https://github.com/hajarlachheb/legacy-shift",
    featured: true,
  },
  {
    name: "LearnHub",
    summary: "Full-stack knowledge sharing platform where people save and share learnings in a problem/solution format. Browse, search, bookmark, and discover who knows what. FastAPI backend + Next.js frontend with SQLite.",
    section: "Technical",
    tags: ["Python", "FastAPI", "Next.js", "Tailwind", "SQLite", "JWT"],
    image: "/projects/learnhub.png",
    codeUrl: "https://github.com/hajarlachheb/knowledge-graph",
  },
  {
    name: "SDR Research Agent",
    summary: "AI agent that automates outbound sales research — give it a company URL, it scrapes news, summarizes key topics, and drafts a personalized cold email. LangGraph agent with researcher, critic, and writer nodes.",
    section: "Technical",
    tags: ["Python", "LangGraph", "FastAPI", "Streamlit", "pgvector"],
    image: "/projects/sdr-agent.png",
    codeUrl: "https://github.com/hajarlachheb/sdr-research-agent",
  },
  {
    name: "Bias-Aware AI Resume Screening System",
    summary: "Full AI PM case study: designing an AI-assisted resume screening system with semantic matching, bias detection dashboard, explainability panel, and EEOC compliance. Includes personas, user research, MVP spec, AI architecture, experimentation plan, and roadmap.",
    section: "PM",
    tags: ["AI Ethics", "Product Management", "HR Tech", "Fairness", "spaCy", "Hugging Face"],
    image: "/projects/bias-resume.png",
    materials: [
      { label: "Case Study", url: "/blog/bias-aware-ai-resume-screening" },
    ],
    featured: true,
  },
  {
    name: "AI Knowledge Graph for Company Knowledge Management",
    summary: "Full AI PM case study: designing an AI-powered knowledge graph that ingests from Notion, Slack, GitHub, and meetings to make company knowledge searchable, connected, and reusable. Includes Neo4j graph architecture, LangChain RAG pipeline, personas, experimentation plan, and roadmap.",
    section: "PM",
    tags: ["Knowledge Graph", "Enterprise AI", "LLM", "Neo4j", "LangChain", "Product Management"],
    image: "/projects/knowledge-graph.png",
    materials: [
      { label: "Case Study", url: "/blog/ai-knowledge-graph-company-km" },
    ],
    featured: true,
  },
];

/** Projects grouped by section in display order. */
export function getProjectsBySection(): Map<ProjectSection, Project[]> {
  const map = new Map<ProjectSection, Project[]>();
  for (const section of SECTION_ORDER) {
    map.set(section, projects.filter((p) => p.section === section));
  }
  return map;
}
