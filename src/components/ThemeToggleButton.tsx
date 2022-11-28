import { useEffect, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5/index.js";

const themes = ["light", "dark"];

const ThemeToggleButton = (): JSX.Element => {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    // If it's executed in the server, return undefined
    if (typeof window === "undefined") {
      return undefined;
    }

    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  const toggleTheme = (): void => {
    const t = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", t);
    setTheme(t);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => setIsMounted(true), []);

  return isMounted ? (
    <div className="inline-flex ml-auto items-center p-[1px] mr-6 rounded-3xl bg-orange-300 dark:bg-[#149ac9]">
      {themes.map((t) => {
        const checked = t === theme;

        return (
          <button
            key={t}
            className={`${checked ? "bg-white text-black" : ""} cursor-pointer rounded-3xl p-2`}
            onClick={toggleTheme}
            arial-label="Toggle theme"
          >
            {t === "light" ? <IoSunny /> : <IoMoon />}
          </button>
        );
      })}
    </div>
  ) : (
    <div />
  );
};

export default ThemeToggleButton;
