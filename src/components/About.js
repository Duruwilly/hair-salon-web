import React from "react";
import aboutImg from "../assets/about-img.jpg";
import { useGlobalContext } from "../context/ContextWrapper";
import Subheader from "./Subheader";

const About = () => {
  const { about } = useGlobalContext();
  return (
    <section
      className="flex justify-center pb-20 pt-12 px-4 text-white"
      ref={about}
    >
      <div className="w-full max-w-screen-lg">
        <h2 className="after:w-[7%] after:left-[48%]">about us</h2>
        <Subheader title="the salon shop for satisfactory services" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <img
            src={aboutImg}
            alt="salon shop"
            className="h-96 w-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-semibold capitalize mb-3">
              we will make you leave looking astonished!
            </h1>
            <p className="text-sm">
              With our mission of giving you the best look and leaving you to get
              astonished, we have always meet that. We give the best service that is worth your money. We
              have the best team that would meet and not just meet but beat your
              expectation.
            </p>
            <div className="flex gap-11 mt-5 text-deco-text">
              <div className="">
                <span className="font-extrabold text-4xl">10</span>
                <p>our awesome expert</p>
              </div>
              <div>
                <span className="font-extrabold text-4xl">+2000</span>
                <p>happy customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
