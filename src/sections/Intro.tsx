"use client"

import { stagger, useAnimate, useInView } from "motion/react";
import { FC, useEffect, useRef, useState } from "react";
import SplitType from "split-type";

const Intro: FC = () => {
  const [scope, animate] = useAnimate();
  const scopeRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false); // Ensure code only runs on the client
  const [isTextSplit, setIsTextSplit] = useState(false); // Track if text has been split

  const inView = useInView(scopeRef, {
    once: true,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true); // Set to true on client-side
    }
  }, []);

  useEffect(() => {
    if (isClient && inView && scopeRef.current) {
      // Initialize SplitType only once the component is in view
      new SplitType(scopeRef.current.querySelector("h2") as HTMLElement, {
        types: "lines,words",
        tagName: "span",
      });
      setIsTextSplit(true); // Mark text as split
    }
  }, [isClient, inView]);

  useEffect(() => {
    if (isClient && isTextSplit && inView && scopeRef.current) {
      // Animate once the text is split
      animate(scopeRef.current.querySelectorAll(".word"), {
        transform: "translateY(0)",
      }, {
        duration: 0.5,
        delay: stagger(0.2),
      });
    }
  }, [isClient, isTextSplit, inView]);

  return (
    <section className="section mt-12 md:mt-16 lg:mt-20" id="intro" ref={scopeRef}>
      <div className="container">
        <h2 className="text-4xl md:text-6xl lg:text-7xl lg:w-[80%]">
          Crafting stunning websites with clean, efficient code and thoughtful
          design to help your business thrive and shine online.
        </h2>
      </div>
    </section>
  );
};

export default Intro;