import { useLocation } from "react-router-dom";

export function useIsPage(pageOrPages: string | string[]) {
  const location = useLocation();

  if (Array.isArray(pageOrPages)) {
    return pageOrPages.some((path) => location.pathname === path);
  } else {
    if (pageOrPages === "/") {
      return location.pathname === pageOrPages.slice(0, -1);
    }

    return location.pathname === pageOrPages;
  }
}
