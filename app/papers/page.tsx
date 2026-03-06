import { papers } from "@/content/papers";
import { PapersList } from "@/components/PapersList";

export const metadata = {
  title: "Papers",
  description: "Academic and professional publications.",
};

export default function PapersPage() {
  return <PapersList papers={papers} />;
}
