"use client";
import Icon from "@/components/icons";
import { useTheme } from "next-themes";

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="absolute right-4 top-10 rounded-full border border-zinc-400 bg-gradient-to-b from-black/10 to-white/10 p-2 shadow-lg shadow-zinc-800/5 backdrop-blur dark:border-zinc-800 dark:from-black dark:to-white/10"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Icon name={theme === "light" ? "Sun" : "Moon"} size="20" />
    </button>
  );
}
