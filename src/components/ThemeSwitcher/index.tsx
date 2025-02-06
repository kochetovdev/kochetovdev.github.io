import SunIcon from "../../assets/icons/sun.svg?react";
import MoonIcon from "../../assets/icons/moon.svg?react";
import { useTheme } from "../../contexts/Theme/useTheme";

export interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`size-11 shrink-0 flex items-center justify-center rounded-full focus:outline-none shadow-md bg-white dark:bg-gray-700 ${className}`}>
      {isDarkMode ? (
        <SunIcon className="w-8 h-8 mx-auto text-yellow-400" />
      ) : (
        <MoonIcon className="w-8 h-8 mx-auto stroke-blue-500 " />
      )}
    </button>
  );
};

export default ThemeSwitcher;
