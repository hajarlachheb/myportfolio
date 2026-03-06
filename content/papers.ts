/**
 * Papers: add entries here (or later switch to one Markdown file per paper).
 * Build generates /papers and /papers/[slug].
 */
export type Paper = {
  slug: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
  pdf?: string;
  abstract?: string;
  type?: "journal" | "conference" | "workshop" | "preprint" | "other";
};

export const papers: Paper[] = [
  {
    slug: "exact-efficient-unlearning-llms",
    title: "Exact and Efficient Unlearning for Large Language Models",
    authors: "Hajar Lachheb, ...",
    venue: "Preprint",
    year: "2024",
    pdf: "/papers/exact-efficient-unlearning-llms.pdf",
    abstract: undefined,
    type: "preprint",
  },
];
