"use client";

import { FC, MouseEvent, useEffect, useState } from "react";
import Button from "@/components/Button";
import { motion, useAnimate } from "motion/react";

/* Navigation Items */
const navItems = [
  { label: "About", href: "#intro" },
  { label: "Selected Works", href: "#projects" },
  { label: "Offers", href: "#offers" },
  { label: "FAQS", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [navScope, navAnimate] = useAnimate();

  /* Handle animations on menu toggle */
  useEffect(() => {
    if (isOpen) {
      topLineAnimate([
        [topLineScope.current, { translateY: 4 }],
        [topLineScope.current, { rotate: 45 }],
      ]);

      bottomLineAnimate([
        [bottomLineScope.current, { translateY: -4 }],
        [bottomLineScope.current, { rotate: -45 }],
      ]);

      navAnimate(navScope.current, { height: "100%" }, { duration: 0.7 });
    } else {
      topLineAnimate([
        [topLineScope.current, { rotate: 0 }],
        [topLineScope.current, { translateY: 0 }],
      ]);

      bottomLineAnimate([
        [bottomLineScope.current, { rotate: 0 }],
        [bottomLineScope.current, { translateY: 0 }],
      ]);

      navAnimate(navScope.current, { height: "0%" });
    }
  }, [
    isOpen,
    topLineAnimate,
    bottomLineAnimate,
    navAnimate,
    topLineScope,
    bottomLineScope,
    navScope,
  ]);

  const handleClickNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
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
    <header className="w-full">
      {/* Navigation Overlay */}
      <div
        className="fixed top-0 left-0 w-full h-0 overflow-hidden bg-stone-900 z-10"
        ref={navScope}
      >
        <nav className="mt-20 flex flex-col">
          {navItems.map(({ label, href }) => (
            <a
              href={href}
              key={label}
              className="text-stone-200 border-t last:border-b border-stone-800 py-8 group/nav-item relative isolate"
              onClick={handleClickNavItem}
            >
              <div className="w-full flex items-center justify-between">
                <span className="text-3xl group-hover/nav-item:pl-4 transition-all duration-500">
                  {label}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              <div className="absolute w-full h-0 bg-stone-800 group-hover/nav-item:h-full transition-all duration-500 bottom-0 -z-10"></div>
            </a>
          ))}
        </nav>
      </div>

      {/* Header Top Bar */}
      <div className="fixed top-0 left-0 w-full mix-blend-difference backdrop-blur-md z-10">
        <div className="w-full">
          <div className="flex justify-between h-20 items-center px-4">
            <a href="#">
              <span className="text-3xl font-bold uppercase text-white sm:text-white">
                M&nbsp;D&nbsp;L
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Menu Button and Contact Button */}
      <div className="fixed top-0 left-0 w-full z-10">
        <div className="w-full">
          <div className="flex justify-end h-20 items-center px-4">
            <div className="flex items-center gap-4">
              <div
                className="size-11 border border-stone-400 rounded-full inline-flex items-center justify-center bg-stone-200"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.rect
                    x="3"
                    y="7"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={topLineScope}
                    style={{ transformOrigin: "12px 8px" }}
                  />
                  <motion.rect
                    x="3"
                    y="15"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={bottomLineScope}
                    style={{ transformOrigin: "12px 16px" }}
                  />
                </svg>
              </div>
              <a
                href="https://wa.me/263711314881"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" className="hidden md:inline-flex">
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;