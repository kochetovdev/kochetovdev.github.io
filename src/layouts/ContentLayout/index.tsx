import React from "react";
import { Outlet } from "react-router-dom";
import { developerInfo } from "../../data/developerInfo";
import { useIsPage } from "../../hooks/useIsPage";
import Hero from "../../components/Hero";
import classNames from "classnames";
import useDynamicFaviconAndTitle from "../../hooks/useDynamicFaviconAndTitle";

const { name, position, avatar, description } = developerInfo;

export default function ContentLayout() {
  const sidebarRef = React.useRef<HTMLDivElement>(null);
  const [sidebarHeight, setSidebarHeight] = React.useState<number>(0);
  const isPaymentPage = useIsPage(["/pay", "/checkout", "/complete"]);
  useDynamicFaviconAndTitle(name || "Developer CV");

  React.useLayoutEffect(() => {
    const updateSidebarHeight = () => {
      if (sidebarRef.current) {
        setSidebarHeight(sidebarRef.current.clientHeight);
      }
    };

    updateSidebarHeight();
    window.addEventListener("resize", updateSidebarHeight);

    return () => {
      window.removeEventListener("resize", updateSidebarHeight);
    };
  }, []);

  return (
    <div className="pt-0 md:pt-28 xl:pt-32 px-4 pb-10 flex container mx-auto flex-col lg:flex-row lg:px-8 lg:gap-20 xl:gap-32 2xl:gap-40">
      <div className="basis-auto shrink-0 lg:basis-80 xl:basis-[400px]">
        <div className="element-with-custom-scroll pt-24 md:pt-0 lg:pt-28 xl:pt-32 top-0 overflow-auto static w-full lg:h-screen lg:fixed lg:w-80 xl:w-[400px]">
          <Hero ref={sidebarRef} name={name} position={position} avatar={avatar} description={description} />
        </div>
      </div>
      <main
        style={{ height: sidebarHeight }}
        className={classNames("pt-12 lg:pt-0 basis-full flex flex-col", {
          " lg:justify-center": isPaymentPage,
        })}>
        <Outlet />
      </main>
    </div>
  );
}
