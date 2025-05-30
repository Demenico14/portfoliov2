"use client";

import { FC, MouseEvent ,useEffect, useRef, useState } from "react";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import heroImage from "@/assets/images/mdlo.png";
import Image from "next/image";
import Button from "@/components/Button";
import {
  motion,
  useAnimate,
  stagger,
  useScroll,
  useTransform,
} from "motion/react";
import SplitType from "split-type";

const Hero: FC = () => {
  const [titleScope, titleAnimate] = useAnimate();
  const scrollingDiv = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ["start end", "end end"],
  });

  const portraitWidth = useTransform(scrollYProgress, [0, 1], ["100%", "240%"]);

  useEffect(() => {
    new SplitType(titleScope.current, {
      types: "lines,words",
      tagName: "span",
    });

    titleAnimate(
      titleScope.current.querySelectorAll(".word"),
      {
        transform: "translateY(0)",
      },
      {
        duration: 0.5,
        delay: stagger(0.2),
      }
    );
  }, []);

    const handleClickNavItem = (e:MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setIsOpen(false);
      const url = new URL(e.currentTarget.href);
      const hash = url.hash;
      const target = document.querySelector(hash);
  
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth" });
      
  
      console.log(hash); 
      
    };

  return (
    <section>
      <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0 ">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="sm:section container !max-w-full">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-0"
              ref={titleScope}
            >
              Innovative Websites. Simple Hosting. Empowered Presence.
            </motion.h1>
            <div className="flex flex-col md:flex-row md:items-center mt-10 items-start gap-6">
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 2,
                }}
              >
                <a
                  href="#projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClickNavItem}
                >
                  <Button
                    variant="secondary"
                    iconAfter={
                      <div className="overflow-hidden size-5">
                        <div className="h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform duration-500 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                            />
                          </svg>
                        </div>
                      </div>
                    }
                  >
                    <span>View Our Work</span>
                  </Button>
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 2.4,
                }}
              >
                <a
                  href="https://wa.me/263711314881"
                  target="_blank"
                  rel="noopener noreferrer"
                  
                >
                  <Button variant="text">Let&apos;s Talk</Button>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <motion.div
            className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 max-md:w-full "
            style={{
              width: portraitWidth,
            }}
          >
            <Image
              src={heroImage}
              alt="hero"
              
              className="size-full object-cover hidden md:block "
            />
          </motion.div>
        </div>
      </div>
      <div className="md:h-[200vh] " ref={scrollingDiv}></div>
    </section>
  );
};

export default Hero;
