import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

export const LoggedInRouter = () => {
  const [colorTheme, setColorTheme] = useDarkMode();
  const changeTheme = () => {
    const theme = colorTheme === "dark" ? "light" : "dark";
    setColorTheme(theme);
  };

  return (
    <div>
      <div className="dark:text-white">Logged In</div>
      <button onClick={changeTheme}>change Color</button>
    </div>
  );
};
