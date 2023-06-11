import React from "react";
import { Fade, Slide } from "react-reveal";

const Section2 = () => {
  return (
    <div className="bg-white xl:pt-20 lg:pt-20 md:pt-20 sm:pt-20 pt-[70vh] -translate-y-60">
      <Section2Title />
      <Section2Component />
    </div>
  );
};

const Section2Component = () => {
  return (
    <div>
      <Slide left duration={800} delay={200}>
        <Fade duration={800} delay={200}>
          <div className="items-center block mb-20 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0 xl:flex lg:flex md:flex sm:flex xl:ml-20 lg:ml-20 md:ml-10 xl:gap-x-10 lg:gap-x-10 md:gap-x-10 sm:gap-x-5 gap-x-3">
            <Section2Image src="https://thumbs.dreamstime.com/b/buy-online-shop-shopping-mobile-store-internet-marketing-payment-flat-cartoon-character-graphic-design-landing-page-template-142424291.jpg" />
            <Section2Text
              textTitle="Convenient Online Ordering"
              text="Experience the convenience of ordering your favorite food and beverages online. With our user-friendly interface, you can easily browse our menu, customize your order, and have it delivered right to your doorstep. Enjoy the comfort of delicious meals without the hassle."
            />
          </div>
        </Fade>
      </Slide>
      <Slide right duration={800} delay={200}>
        <Fade duration={800} delay={200}>
          <div className="items-center justify-end block mb-20 ml-3 mr-5 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0 xl:flex lg:flex md:flex sm:mr-8 sm:flex xl:mr-28 lg:mr-28 md:mr-10 xl:gap-x-10 lg:gap-x-10 md:gap-x-10 sm:gap-x-5 gap-x-3">
            <Section2Text
              textTitle="Convenient Online Ordering"
              text="Experience the convenience of ordering your favorite food and beverages online. With our user-friendly interface, you can easily browse our menu, customize your order, and have it delivered right to your doorstep. Enjoy the comfort of delicious meals without the hassle."
            />
            <Section2Image src="https://img.freepik.com/free-vector/hand-drawn-fast-food-illustration_23-2149013384.jpg?w=740&t=st=1685812776~exp=1685813376~hmac=725e61836e89f3fc0333787e72ed0da266f59320043cc60b3942ab8451c83dfc" />
          </div>
        </Fade>
      </Slide>
      <Slide left duration={800} delay={200}>
        <Fade duration={800} delay={200}>
          <div className="items-center block pb-10 mb-20 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0 xl:flex lg:flex md:flex sm:flex xl:ml-20 lg:ml-20 md:ml-10 xl:gap-x-10 lg:gap-x-10 md:gap-x-10 sm:gap-x-5 gap-x-3">
            <Section2Image src="https://img.freepik.com/free-vector/flat-cartoon-character-customer-50-percent-discount-with-coupon_1150-34877.jpg?w=740&t=st=1685812566~exp=1685813166~hmac=f030a479e2d57b2d27aff103da5db5bf8b49cf2b9733f82d0fdfb7b5bf496f8b" />
            <Section2Text
              textTitle="Convenient Online Ordering"
              text="Experience the convenience of ordering your favorite food and beverages online. With our user-friendly interface, you can easily browse our menu, customize your order, and have it delivered right to your doorstep. Enjoy the comfort of delicious meals without the hassle."
            />
          </div>
        </Fade>
      </Slide>
    </div>
  );
};

const Section2Title = () => {
  return (
    <div className="my-3 text-3xl font-bold text-center xl:my-10 lg:my-10 md:my-10 sm:my-10">
      <Slide bottom duration={1000} delay={300}>
        <Fade duration={1000} delay={300}>
          <h1 className="">About Prooked</h1>
        </Fade>
      </Slide>
    </div>
  );
};

const Section2Text = (props) => {
  return (
    <div className="flex flex-col text-slate-700 text-[16px] xl:w-96 lg:w-96 mr-3  md:w-96 sm:w-80 lg:mx-0 xl:mx-0 md:mx-0 sm:mx-0 mx-8">
      <h1 className="my-2 text-[18px] font-medium">{props.textTitle}</h1>
      <p>{props.text}</p>
    </div>
  );
};

const Section2Image = (props) => {
  return (
    <div>
      <img src={props.src} alt="" className="lg:h-96 xl:h-96 md:h-80 sm:h-72" />
    </div>
  );
};

export default Section2;