"use client";

import { FC, useRef, useState } from "react";
import image1 from "@/assets/images/Custom.jpg";
import image2 from "@/assets/images/Custom2.jpg";
import image3 from "@/assets/images/Custom3.jpg";
import image4 from "@/assets/images/Custom4.jpeg";
import image5 from "@/assets/images/Custom5.jpg";
import Image from "next/image";
import { useScroll, motion, useTransform } from "motion/react";
import { AnimatePresence } from "framer-motion"; // Import AnimatePresence

const offers = [
  {
    title: "Starter Web Design",
    description: `Up to 1-10 Pages
Static Home Page
Responsive Design
Basic Search Engine Optimization
Google Maps Integration
Live Chat Integration
1 Year Free Web Hosting
1 Year Free Domain Registration`,
    image: image3,
    imagePositionY: 0.55,
    StartingPrice: "$160",
  },
  {
    title: "Basic Pro Web Design",
    description: `Up to 1-5 Pages
Static Home Page
Responsive Design
Basic Search Engine Optimization
Google Maps Integration
WhatsApp Chat Integration
1 Year Free Web Hosting
1 Year Free Domain Registration`,
    image: image2,
    imagePositionY: 0.1,
    StartingPrice: "$300",
  },
  {
    title: "Professional Website Design",
    description: `Up to 1-7 Pages
Static Home page
Responsive Design
Basic Search Engine Optimization
Google Maps Integration
1 Year Free Web hosting
1 Year Free Domain Registration`,
    image: image4,
    imagePositionY: 0.2,
    StartingPrice: "$400",
  },
  {
    title: "Enterprise Pro web design",
    description: `Up to 1-10 Pages
Static Home Page
Responsive Design
Advanced SEO Setup
Google Maps Integration
Live Chat Integration
1 Year Free Web Hosting
1 Year Free Domain Registration`,
    image: image5,
    imagePositionY: 0.2,
    StartingPrice: "$600",
  },
  {
    title: "Custom Mobile App Development",
    description: `Beautiful, high-performance Android & iOS apps
Tailored UI/UX Design
API Integration
Push Notifications
App Store Submission Support
3 Months Free Maintenance & Updates`,
    image: image1,
    imagePositionY: 0.2,
    StartingPrice: "$1000",
  },
];


const Offers: FC = () => {
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });

  const transformTop = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? offers.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section" id="offers">
      <h2 className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden">
        <motion.span className="whitespace-nowrap" style={{ x: transformBottom }}>
          Our Exclusive Services to Empower Your Online Presence
        </motion.span>
        <motion.span
          className="whitespace-nowrap self-end text-red-orange-500"
          style={{ x: transformTop }}
        >
          Our Exclusive Services to Empower Your Online Presence
        </motion.span>
      </h2>
      <div className="container">
        <div className="mt-20">
          <AnimatePresence mode="wait"> {/* Replaced exitBeforeEnter with mode="wait" */}
            {offers.map(({ title, description, image, imagePositionY, StartingPrice }, index) =>
              index === currentIndex ? (
                <motion.div
                  key={title} // Key ensures proper exit/enter animations
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }} // Transition settings
                  className="grid md:grid-cols-5 md:gap-8 lg:gap-16 md:items-center"
                >
                  <div className="aspect-square md:aspect-[9/16] md:col-span-2">
                    <Image
                      src={image}
                      alt={title}
                      className="size-full object-cover"
                      style={{
                        objectPosition: `50% ${imagePositionY * 100}%`,
                      }}
                    />
                  </div>

                  <blockquote className="md:col-span-3">
                    <cite className="mt-4 md:mt-8 lg:text-xl not-italic block md:text-lg">
                      {title}
                    </cite>
                    <div className="text-3xl md:text-5xl lg:text-6xl mt-8 md:mt-0">
                      <span className="text-4xl md:text-5xl mt-8">{description}</span>
                      <div className="mt-4 text-xl text-red-orange-500">{StartingPrice}</div> {/* StartingPrice text with color */}
                    </div>
                  </blockquote>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
        <div className="flex gap-4 mt-6 lg:mt-10">
          <button
            onClick={handlePrev}
            className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full active:bg-red-orange-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full active:bg-red-orange-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offers;