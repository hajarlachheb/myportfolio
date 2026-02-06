import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talks",
  description: "Public talks — AI meetups, tech talks & conferences.",
};

export default function TalksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
