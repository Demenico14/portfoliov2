"use client";
import { AnimatePresence, motion } from "motion/react";
import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const faqs = [
  {
    question: "Do you work with clients from different locations?",
    answer:
      "Yes, I work with clients globally and can accommodate different time zones for meetings and communication.",
  },
  {
    question: "Do you offer domain registration services?",
    answer:
      "Yes, I offer domain registration services as part of the web development process.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on the complexity of the website and the scope of the project.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "I have experience across various industries including technology, retail, hospitality, and professional services, bringing fresh perspectives to each project.",
  },
];

const FAQs: FC = () => {
  const [selectedIndex, setselectedIndex] = useState<number | null>(null);

  return (
    <section className="section" id="faqs">
      <div className="container">
        <h2 className="text-4xl md:text-5xl lg:text-6xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {faqs.map(({ question, answer }, faqIndex) => (
            <div
              key={question}
              className="border-t border-stone-400 border-dotted py-6 md:py-8  last:border-b "
              onClick={() => {
                if (faqIndex === selectedIndex) {
                  setselectedIndex(null);
                } else {
                  setselectedIndex(faqIndex);
                }
              }}
            >
              <div className="flex items-center justify-between  gap-4 ">
                <div className="text-2xl md:text-2xl lg:text-3xl ">
                  {question}
                </div>
                <div className={twMerge("inline-flex  items-center justify-center size-11 border border-stone-400 rounded-full shrink-0 transition duration-300",faqIndex === selectedIndex && "rotate-45")}>
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
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
              <AnimatePresence>
                {faqIndex === selectedIndex && (
                  <motion.div
                  className="overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.7, ease:"easeOut" }}
                  >
                    <p className="text-xl mt-4 font-mono">{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
