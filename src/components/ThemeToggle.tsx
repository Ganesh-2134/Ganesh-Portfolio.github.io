import { Sun, Moon } from "lucide-react";
import type { Theme } from "../hooks/useTheme";

export default function ThemeToggle({ theme, toggle }: { theme: Theme; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
      style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
    >
      <Sun
        size={16}
        className="absolute transition-all duration-300"
        style={{
          opacity: theme === "light" ? 1 : 0,
          transform: theme === "light" ? "scale(1) rotate(0deg)" : "scale(0.5) rotate(-90deg)",
        }}
      />
      <Moon
        size={16}
        className="absolute transition-all duration-300"
        style={{
          opacity: theme === "dark" ? 1 : 0,
          transform: theme === "dark" ? "scale(1) rotate(0deg)" : "scale(0.5) rotate(90deg)",
        }}
      />
    </button>
  );
}
