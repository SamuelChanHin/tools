import Link from "next/link";

interface ToolCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  tags: string[];
}

export default function ToolCard({
  title,
  description,
  icon,
  href,
  tags,
}: ToolCardProps) {
  return (
    <Link href={href} className="tool-card">
      <div className="tool-card-icon">{icon}</div>
      <h3 className="tool-card-title">{title}</h3>
      <p className="tool-card-description">{description}</p>
      <div className="tool-card-tags">
        {tags.map((tag) => (
          <span key={tag} className="tool-tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="tool-card-arrow">→</div>
    </Link>
  );
}
