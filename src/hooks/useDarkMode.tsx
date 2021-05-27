import { useEffect, useState } from "react";
import { getInitialTheme } from "../apollo";

export const useDarkMode = () => {
  const [colorTheme, setColorTheme] = useState(getInitialTheme);

  const changeColorTheme = (theme: string) => {
    const isDark = theme === "dark";
    const root = window.document.documentElement;
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);

    localStorage.setItem("color-theme", theme)
  };

  useEffect(() => {
    changeColorTheme(colorTheme);
  }, [colorTheme]);

  return [colorTheme, setColorTheme] as const;
};
