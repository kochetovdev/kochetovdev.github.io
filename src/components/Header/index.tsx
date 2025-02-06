import { useState, useEffect } from "react";
import classNames from "classnames";
import Socials from "../Socials";
import BurgerMenu from "./BurgerMenu";
import ThemeSwitcher from "../ThemeSwitcher";
import { navLinks } from "../../data/navLinks";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useIsPage } from "../../hooks/useIsPage";
import { scrollToContent } from "../../utils/scrollToContent";
import { developerInfo } from "../../data/developerInfo";

export default function Header() {
  const [activeLink, setActiveLink] = useState<number | null>(null);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const isHomePage = useIsPage("/");

  const closeMenu = () => {
    setIsOpenMenu(false);
    document.body.classList.remove("_lock");
  };

  useEffect(() => {
    if (!isMobile) {
      closeMenu();
    }
  }, [isMobile]);

  const homePagePath = `/`;

  const onClickNavLink = (index: number, idSelector: string) => () => {
    setActiveLink(index);
    scrollToContent(idSelector);

    closeMenu();
  };

  const onGoHome = () => {
    setActiveLink(null);
    closeMenu();
    navigate(homePagePath);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={classNames(
        "fixed w-full h-[76px] top-0 flex items-center shadow-md dark:shadow-gray-800 shadow-slate-100 z-50 lg:backdrop-blur-md dark:bg-gray-900/70 bg-slate-100/70",
        { "backdrop-blur-md bg-gray-900/70": !isOpenMenu }
      )}>
      <nav className="flex items-center justify-between container px-4 mx-auto sm:px-8">
        <BurgerMenu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
        <div className=" flex items-center gap-8 lg:hidden">
          {developerInfo.socials && <Socials className="hidden sm:flex [_svg]:brightness-100" />}

          <ThemeSwitcher />
        </div>
        <ul
          className={classNames(
            "fixed transition-opacity backdrop-blur-md dark:bg-gray-900/70 bg-white/70 top-0 left-0 h-screen w-full flex flex-col items-center py-10 justify-center gap-8 lg:backdrop-blur-none dark:lg:bg-transparent lg:bg-transparent lg:gap-6 lg:h-auto lg:flex-row lg:py-0 lg:justify-between lg:static",
            { "opacity-0 pointer-events-none": !isOpenMenu && isMobile },
            "lg:!opacity-1 lg:!pointer-events-auto"
          )}>
          <li>
            <button
              onClick={onGoHome}
              className={classNames(
                "cursor-pointer transition-colors capitalize text-2xl sm:text-3xl lg:text-base dark:hover:text-green-400 hover:text-green-600",
                {
                  "dark:text-green-400 text-green-500": isHomePage,
                }
              )}>
              Home
            </button>
          </li>
          {navLinks.map((navLink, i) => (
            <li key={`header-nav-link-${navLink.title}-${i}`}>
              <button
                onClick={onClickNavLink(i, navLink.href)}
                className={classNames(
                  " disabled:cursor-no-drop dark:disabled:opacity-50 disabled:opacity-60 cursor-pointer transition-colors capitalize text-2xl sm:text-3xl lg:text-base dark:hover:text-green-400 hover:text-green-500",
                  {
                    "dark:text-green-400 text-green-500": activeLink === i,
                  }
                )}>
                {navLink.title}
              </button>
            </li>
          ))}

          <Socials className="flex sm:hidden [&_svg]:size-10" />

          <div className="flex gap-8">
            <ThemeSwitcher className="hidden lg:block" />
          </div>
        </ul>
      </nav>
    </header>
  );
}
