import React from "react";
import { Fade, Slide } from "react-reveal";

const Section4 = () => {
  return (
    <div className="relative shadow-2xl">
      <Section4Component1 />
      <Section4Card />
    </div>
  );
};

const Section4Component1 = () => {
  return (
    <div className="flex flex-col justify-center xl:pt-20 lg:pt-20 md:pt-20 sm:pt-20 pt-[10vh] shadow-inner text-center z-30 bg-white relative">
      <Slide bottom duration={1000} delay={300}>
        <Fade duration={1000} delay={300}>
          <Section4Text
            title="Services"
            text="We’re ready to work with you. Explore our services."
          />
        </Fade>
      </Slide>
      <Slide left duration={1000} delay={100}>
        <Fade duration={1000} delay={300}>
          <Section4Image />
        </Fade>
      </Slide>
    </div>
  );
};

const Section4Text = (props) => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-3xl font-bold xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl">
        {props.title}
      </h1>
      <p className="xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-medium xl:mt-10 lg:mt-10 md:mt-10 sm:mt-10 mt-3 mx-3">
        {props.text}
      </p>
    </div>
  );
};

const Section4Image = () => {
  return (
    <div className="flex justify-center mt-10 xl:mt-20 lg:mt-20 md:mt-20 sm:mt-20">
      <img
        src="https://www.wgorilla.com/wp-content/uploads/2019/06/mac_magic_keyboard.png"
        alt=""
        className=""
      />
    </div>
  );
};

const Section4Card = () => {
  return (
    <div className="flex justify-center py-10 bg-white">
      <CardTemplate />
    </div>
  );
};

const CardTemplate = () => {
  return (
    <div className="flex flex-col overflow-hidden max-w-96">
      <Slide bottom duration={1000} delay={300}>
        <Fade duration={1000} delay={300}>
          <ComponentCardTemplate />
        </Fade>
      </Slide>
    </div>
  );
};

const ComponentCardTemplate = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-20 lg:gap-x-10 sm:gap-x-2 gap-x-20 xl:gap-y-10 lg:gap-y-10 gap-y-3">
      <ComponentCard
        image="https://img.icons8.com/stickers/100/restaurant-menu.png"
        text="Discover a wide range of mouthwatering dishes and refreshing beverages on our menu. With our easy-to-use menu management system"
      />
      <ComponentCard
        image="https://img.icons8.com/color/48/commercial-development-management.png"
        text="Our intuitive order management system allows you to seamlessly handle incoming orders, track their status, and ensure timely delivery."
      />
      <ComponentCard
        image="https://img.icons8.com/fluency/48/feedback-hub.png"
        text="Our customer feedback system empowers you to collect and analyze valuable insights from your patrons. Easily gather reviews, ratings, and suggestions"
      />
    </div>
  );
};

const ComponentCard = (props) => {
  return (
    <div className="flex flex-col  md:w-72 lg:w-72 xl:w-72 w-60 sm:w-72  text-slate-600 text-[15px]">
      <img src={props.image} alt="" className="w-16 h-16 mt-10" />
      <p className="mt-3">{props.text}</p>
    </div>
  );
};

export default Section4;