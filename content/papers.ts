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
    slug: "example-paper-2024",
    title: "Example Paper Title: A Study of Something",
    authors: "You, Co-Author, Another Author",
    venue: "Conference or Journal Name (e.g. NeurIPS 2024)",
    year: "2024",
    link: "https://example.com/paper",
    pdf: "/papers/example-paper-2024.pdf",
    abstract:
      "Optional abstract. You can show this on the paper detail page.",
    type: "conference",
  },
  {
    slug: "another-paper-2023",
    title: "Another Publication",
    authors: "You, Collaborator",
    venue: "Journal of X (2023)",
    year: "2023",
    pdf: "/papers/another-2023.pdf",
    type: "journal",
  },
];
