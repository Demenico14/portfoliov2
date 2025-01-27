"use client"
import { FC } from "react";
import image1 from "@/assets/images/Custom.jpg";
import image2 from "@/assets/images/Custom2.jpg";
import image3 from "@/assets/images/Custom3.jpg";
import Image from "next/image";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const offers = [
  {
    title: "Professional Website Design",
    description:
      "Get a stunning, user-friendly website tailored to your brand's needs.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Launch your online store with seamless shopping and payment features.",
    image: image2,
    imagePositionY: 0.1,
  },
  {
    title: "Custom Web Applications",
    description:
      "Build powerful, scalable web applications designed for your business goals.",
    image: image3,
    imagePositionY: 0.55,
  }
];

const Offers: FC = () => {
  const OffersIndex = 0;

  return (
    <section className="section" id="offers">
      <h2 className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden">
        <span className="whitespace-nowrap ">
          Our Exclusive Services to Empower Your Online Presence
        </span>
        <span className="whitespace-nowrap self-end text-red-orange-500">
        Our Exclusive Services to Empower Your Online Presence
        </span>
      </h2>
      <div className="container">
        <div className="mt-20">
          {offers.map(
            ({ title, description, image, imagePositionY }, index) =>
              index === OffersIndex && (
                <div
                  key={title}
                  className="grid md:grid-cols-5 md:gap-8 lg:gap-16 md:items-center"
                >
                  <div className="aspect-square md:aspect-[9/16] md:col-span-2">
                    <Image
                      src={image}
                      alt="title"
                      className="size-full object-cover"
                      style={{
                        objectPosition: ` 50% ${imagePositionY * 100}%`,
                      }}
                    />
                  </div>

                  <blockquote className="md:col-span-3">
                    <cite className="mt-4 md:mt-8 lg:text-xl not-italic block md:text-lg">
                      {" "}
                      {title}
                    </cite>
                    <div className="text-3xl md:text-5xl lg:text-6xl mt-8 md:mt-0">
                      <span className="text-4xl md:text-5xl mt-8">
                        {description}
                      </span>
                    </div>
                  </blockquote>
                </div>
              )
          )}
        </div>
        <div className="flex gap-4 mt-6 lg:mt-10">
          <button className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full">
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>

          <button className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full">
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
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offers;
