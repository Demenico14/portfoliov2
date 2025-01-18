import { FC } from "react";
import image1 from "@/assets/images/Portfoliov1.png";
import image2 from "@/assets/images/project-2.jpg";
import image3 from "@/assets/images/Lulu.jpeg";

import Image from "next/image";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const projects = [
  {
    name: "Portfolio V1",
    image: image1,
  },
  {
    name: "Wavelength Studios",
    image: image2,
  },
  {
    name: "Lulu Guest Lodge",
    image: image3,
  },
];

const Projects: FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-4xl md:text-5xl lg:text-6xl  ">Selected Works</h2>
        <div className="mt-10 md:16 lg:mt-20">
          {projects.map(({ name, image }) => (
            <a
              href=""
              key={name}
              className="border-t last:border-b border-stone-400 border-dotted py-6 md:py-8  flex flex-col"
            >
              <div className="">
                <div className="aspect-video md:hidden">
                  <Image
                    src={image}
                    alt={`${name} image`}
                    className="size-full object-cover"
                  />
                </div>
                <div className="mt-8  md:mt-0 flex justify-between items-center">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl">{name}</h3>
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
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
