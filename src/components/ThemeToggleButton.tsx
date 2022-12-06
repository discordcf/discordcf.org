import { useEffect, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5/index.js";

const themes = ["light", "dark"];

const ThemeToggleButton = (): JSX.Element => {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  const toggleTheme = (): void => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }

    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => setIsMounted(true), []);

  return isMounted ? (
    <div className="ml-auto mr-6 inline-flex items-center rounded-3xl bg-[#d0d0fea4] p-[1px] dark:bg-[var(--dark-bg-accent)]">
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
