"use client";

import { FC, MouseEvent, useEffect, useState } from "react";
import Button from "@/components/Button";
const navItems = [
  { label: "Home", href: "#header" },
  { label: "About", href: "#intro" },
  { label: "Offers", href: "#offers" },
  { label: "FAQS", href: "#faqs" },
  { label: "Selected Works", href: "#projects" },
  
];

const Footer: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <footer className="bg-stone-900 text-white" id="contact">
      <div className="container">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-green-400"></div>
            <span className="uppercase">One Spot Available for next Month</span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2 className="text-4xl mt-8 md:text-6xl lg:text-8xl font-extralight ">
                Enough Talk . Lets Make Something Great together.{" "}
              </h2>
              <a
                href="https://wa.me/263711314881"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  className="mt-8"
                  iconAfter={
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
                  }
                >
                  Whatsapp Business
                </Button>
              </a>
            </div>
            <div>
              <nav className="flex flex-col md:items-end gap-8 mt-16 ">
                {navItems.map(({ label, href }) => (
                  <a href={href} key={label} onClick={handleClickNavItem}>
                    <Button variant="text" className="text-lg">
                      {label}
                    </Button>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className="py-16 text-white/30 text-sm">
          {" "}
          Copyright &copy; MDL &bull; All rights reserved{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
