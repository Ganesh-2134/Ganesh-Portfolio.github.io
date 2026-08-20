const nodes = [
  { id: "git", label: "Git", x: 40, y: 60 },
  { id: "ci", label: "CI/CD", x: 40, y: 190 },
  { id: "tf", label: "Terraform", x: 40, y: 320 },
  { id: "eks", label: "EKS", x: 300, y: 60 },
  { id: "ec2", label: "EC2 / RDS", x: 300, y: 190 },
  { id: "cw", label: "CloudWatch", x: 300, y: 320 },
];

const edges: [string, string][] = [
  ["git", "ci"],
  ["ci", "tf"],
  ["ci", "eks"],
  ["tf", "ec2"],
  ["tf", "cw"],
  ["eks", "cw"],
  ["ec2", "cw"],
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

export default function InfraTopology({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 380"
      className={className}
      role="img"
      aria-label="Diagram of infrastructure flowing from source control through CI/CD, Terraform, and AWS compute into CloudWatch monitoring"
    >
      <defs>
        <radialGradient id="aws-core" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="370" cy="190" r="140" fill="url(#aws-core)" />

      {edges.map(([a, b], i) => {
        const from = byId[a];
        const to = byId[b];
        return (
          <line
            key={i}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="var(--border)"
            strokeWidth="1.5"
          />
        );
      })}
      {edges.map(([a, b], i) => {
        const from = byId[a];
        const to = byId[b];
        return (
          <line
            key={`flow-${i}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeDasharray="4 8"
            className="animate-flow"
            style={{ animationDelay: `${i * 0.18}s` }}
            opacity="0.8"
          />
        );
      })}

      {nodes.map((n, i) => (
        <g key={n.id} className="animate-pulse-slow" style={{ animationDelay: `${i * 0.3}s` }}>
          <circle cx={n.x} cy={n.y} r="26" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.5" />
          <circle cx={n.x} cy={n.y} r="4" fill={n.id === "cw" || n.id === "eks" ? "var(--teal)" : "var(--accent)"} />
        </g>
      ))}
      {nodes.map((n) => (
        <text
          key={`t-${n.id}`}
          x={n.x}
          y={n.y + 42}
          textAnchor="middle"
          fontSize="11"
          fontFamily="var(--font-mono)"
          fill="var(--text-muted)"
        >
          {n.label}
        </text>
      ))}
    </svg>
  );
}
