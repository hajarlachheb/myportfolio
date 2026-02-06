/**
 * Public talks: meetups, conferences, tech talks.
 * Inspired by kozodoi.me/talks — add entries here.
 */
export type TalkType = "meetup" | "conference" | "other";

export type Talk = {
  title: string;
  event: string;
  year: string;
  /** e.g. "Barcelona" */
  location: string;
  /** Country flag emoji, e.g. "🇪🇸" */
  flag: string;
  type: TalkType;
  links?: {
    summary?: string;
    slides?: string;
    abstract?: string;
    paper?: string;
    poster?: string;
    photo?: string;
  };
};

export const talks: Talk[] = [
  {
    title: "Privacy and Security of Large Language Models",
    event: "AI & Privacy Workshop",
    year: "2024",
    location: "Barcelona",
    flag: "🇪🇸",
    type: "conference",
    links: { slides: "#", abstract: "#" },
  },
  {
    title: "Machine Unlearning for LLMs",
    event: "CRISES Seminar",
    year: "2024",
    location: "Tarragona",
    flag: "🇪🇸",
    type: "meetup",
    links: { slides: "#" },
  },
  {
    title: "Responsible AI in Practice",
    event: "Tech Meetup Barcelona",
    year: "2023",
    location: "Barcelona",
    flag: "🇪🇸",
    type: "meetup",
    links: { summary: "#" },
  },
];
