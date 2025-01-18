import { section } from "motion/react-client";
import { FC } from "react";

const Intro: FC = () => {
  return (
    <section className="py-24 md:py-32 mt-12 md:mt-16 lg:mt-20 ">
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
