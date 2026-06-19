import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { gsap } from "gsap";
import { setSmoother } from "./utils/smoother";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );
  const [isSmootherReady, setIsSmootherReady] = useState<boolean>(false);

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  useEffect(() => {
    const smootherInstance = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smootherInstance.scrollTop(0);
    smootherInstance.paused(true);

    setSmoother(smootherInstance);
    setIsSmootherReady(true);

    const refreshHandler = () => {
      ScrollSmoother.refresh(true);
    };
    window.addEventListener("resize", refreshHandler);

    const timeout = setTimeout(() => {
      ScrollTrigger.refresh(true);
    }, 200);

    return () => {
      window.removeEventListener("resize", refreshHandler);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {isSmootherReady && (
            <div className="container-main">
              <Landing>{!isDesktopView && children}</Landing>
              <About />
              <WhatIDo />
              <Career />
              <Work />
              {isDesktopView && (
                <Suspense fallback={<div>Loading....</div>}>
                  <TechStack />
                </Suspense>
              )}
              <Contact />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
