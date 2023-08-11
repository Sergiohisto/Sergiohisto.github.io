import React from "react";

// import hero data
import { heroData } from "../data";

//import component
import Header from "../components/Header";

const Hero = () => {
  //estrucura de hero Data
  const { title, subtitle, btnText, image } = heroData;
  return (
    <section className="lg:h-[900px] py-12">
      <Header />
      <div className="container mx-auto  h-full relative">
        <div className=" flex flex-col xl:flex-row items-center h-full md:py-24">
          {/* texto */}
          <div className="text-center xl:text-left xl:absolute">
            <h1
              className="h1 xl:max-w-[700px] mb-6 xl:mb-12"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              {title}
            </h1>
            <p
              className="lead xl:max-w-[380px] mb-6 xl:mb-12"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {subtitle}
            </p>
            <button
              className="btn btn-primary mb-8 xl:mb-0"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              {btnText}
            </button>
          </div>
          {/* image */}
          <div
            className="xl:absolute xl:-right-12 xl:bottom-16 "
            //git data-aos="fade-down"
            data-aos-delay="500"
            
          >
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
