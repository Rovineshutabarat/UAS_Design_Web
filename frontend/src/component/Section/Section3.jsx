import React from "react";
import { Fade, Slide } from "react-reveal";

const Section3 = () => {
  return (
    <div className="flex justify-center xl:translate-y-[-17vh] lg:translate-y-[-17vh] md:translate-y-[-17vh] sm:translate-y-[-17vh] translate-y-[-23vh]">
      <Slide bottom duration={1000} delay={100}>
        <Fade duration={1000} delay={300}>
          <Section3Component />
        </Fade>
      </Slide>
    </div>
  );
};

const Section3Component = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-medium text-white">Our Gallery View</h1>
      <button className="px-10 my-5  py-1  font-bold tracking-widest text-slate-800 text-[18px] transition-all bg-white">
        Explore
      </button>
    </div>
  );
};

export default Section3;