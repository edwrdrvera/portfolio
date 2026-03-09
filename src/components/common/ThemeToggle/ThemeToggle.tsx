import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/common/ThemeProvider/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-1.5 rounded-full hover:bg-base-200 transition-colors flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-105 active:scale-95 duration-200"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </button>
  );
}
