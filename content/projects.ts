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
    summary: "Framework to evaluate LLM-generated annotations using human-labelled baselines. Implements precision, recall, and agreement metrics to assess annotation quality and model reliability.",
    section: "Research",
    tags: ["Python", "ML", "Evaluation"],
    image: undefined,
    codeUrl: undefined,
    demoUrl: undefined,
    materials: undefined,
    featured: false,
  },
  {
    name: "Knowledge-Aware NLP Systems",
    summary: "NLP pipelines using embeddings and transformer-based architectures. Integrates structured knowledge sources and metadata for improved model performance.",
    section: "Research",
    tags: ["Python", "NLP", "Transformers"],
    image: undefined,
    codeUrl: undefined,
    demoUrl: undefined,
    materials: undefined,
    featured: false,
  },
  {
    name: "Reproducible Machine Learning Pipelines",
    summary: "Modular pipelines for data preprocessing, model training, and evaluation. Implements reproducible experiments and benchmarking workflows.",
    section: "Research",
    tags: ["Python", "ML", "MLOps"],
    image: undefined,
    codeUrl: undefined,
    demoUrl: undefined,
    materials: undefined,
    featured: false,
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
