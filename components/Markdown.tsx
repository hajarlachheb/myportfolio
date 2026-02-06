import ReactMarkdown from "react-markdown";

export function Markdown({ content }: { content: string }) {
  return (
    <div className="prose prose-ink max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
