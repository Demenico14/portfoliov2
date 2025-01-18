import { FC } from "react";
import image1 from "@/assets/images/testimonial-1.jpg";
import image2 from "@/assets/images/testimonial-2.jpg";
import image3 from "@/assets/images/testimonial-3.jpg";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const offers = [
  {
    title: "Professional Website Design",
    description: "Get a stunning, user-friendly website tailored to your brand's needs.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    title: "E-Commerce Solutions",
    description: "Launch your online store with seamless shopping and payment features.",
    image: image2,
    imagePositionY: 0.1,
  },
  {
    title: "Custom Web Applications",
    description: "Build powerful, scalable web applications designed for your business goals.",
    image: image3,
    imagePositionY: 0.55,
  },
  {
    title: "Domain and Hosting",
    description: "Simplify your online journey with reliable domain registration and hosting services.",
    image: image1,
    imagePositionY: 0.3,
  },
];


const Offers: FC = () => {
  return <div>Testimonials</div>;
};

export default Offers;
