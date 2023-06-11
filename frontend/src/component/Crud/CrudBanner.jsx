import React, { useState, useEffect } from "react";
import "./Crud.css";
import spicy from "../Images/spicy.png";
import pizza from "../Images/pizza.png";
import chicken from "../Images/chicken.png";
import { Fade, Slide } from "react-reveal";

const CrudBanner = () => {
  return (
    <div className="mt-20">
      <CrudHomepageBanner />
    </div>
  );
};

const CrudHomepageBanner = () => {
  return (
    <div className="flex flex-col justify-center p-3 py-20 text-white bg-slate-900 gap-x-10 xl:flex-row lg:flex-row md:flex-row sm:flex-row">
      <Slide left duration={800} delay={200}>
        <Fade duration={800} delay={200}>
          <CrudHomepageBannerTextComponent />
        </Fade>
      </Slide>
      <CrudHomepageBannerImageComponent />
    </div>
  );
};

const CrudHomepageBannerTextComponent = () => {
  const [fadeText, setFadeText] = useState(false);
  const [bannerData, setBannerData] = useState({
    bannerTitles: [
      "Spicy Chicken Burger",
      "Crispy and Flavorful Chicken Wings",
      "Cheesy Margherita Pizza",
    ],
    bannerTexts: [
      "Indulge in the fiery flavors of our Spicy Chicken Burger. This mouthwatering creation features a juicy chicken patty marinated in a special blend of spices, topped with fresh lettuce, tomatoes, and a zesty chipotle mayo sauce, all sandwiched between a soft, toasted bun. Get ready for a burst of bold and savory flavors that will leave you craving for more.",
      "Get ready to indulge in the irresistible delight of our Crispy and Flavorful Chicken Wings. These delectable wings are a true crowd-pleaser, offering a perfect balance of crispy skin and tender, juicy meat. Each wing is carefully seasoned with a tantalizing blend of herbs and spices, creating a symphony of flavors that will leave your taste buds craving for more.",
      "Treat yourself to our classic Cheesy Margherita Pizza, a delightful combination of simplicity and taste. Made with a thin, crispy crust, our pizza is generously topped with fresh tomato sauce, melted mozzarella cheese, and a sprinkle of aromatic basil leaves. Each bite is a harmony of tomato, creamy cheese, creating a timeless favorite that pizza lovers can't resist.",
    ],
    currentIndex: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeText(true);
      setTimeout(() => {
        setBannerData((prevData) => {
          const nextIndex =
            (prevData.currentIndex + 1) % prevData.bannerTitles.length;
          setFadeText(false);
          return {
            ...prevData,
            currentIndex: nextIndex,
          };
        });
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col ml-5">
      <p className="mb-10 text-4xl font-semibold text-white">
        Featured Product
      </p>
      <h1
        className={`text-4xl font-medium transition-all delay-100 xl:w-full lg:w-96 md:w-[60vh] sm:w-[50vh] tracking-wide ${
          fadeText ? "fade-out" : "fade-in"
        }`}
      >
        {bannerData.bannerTitles[bannerData.currentIndex]}
      </h1>
      <h1
        className={`my-5 mb-6 text-stone-300 delay-100 transition-all text-[15px] xl:w-[100vh] lg:w-[80vh] md:w-[60vh] sm:w-[50vh] ${
          fadeText ? "fade-out" : "fade-in"
        }`}
      >
        {bannerData.bannerTexts[bannerData.currentIndex]}
      </h1>
      <CrudHomepageBannerButton />
    </div>
  );
};

const CrudHomepageBannerButton = () => {
  return (
    <div className="flex mt-5 font-medium text-white">
      <button className="px-5 py-1 mr-5 rounded-sm outline outline-1 outline-white">
        View Product
      </button>
    </div>
  );
};

const CrudHomepageBannerImageComponent = () => {
  const [imageSrc, setImageSrc] = useState([spicy, chicken, pizza]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSrc.length);
        setFade(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      <Slide bottom duration={800} delay={200}>
        <Fade duration={800} delay={200}>
          <CrudHomepageBannerImage src={imageSrc[currentIndex]} fade={fade} />
        </Fade>
      </Slide>
    </div>
  );
};

const CrudHomepageBannerImage = (props) => {
  return (
    <div
      className={`transition-all delay-100 image-transition ${
        props.fade ? "fade-out" : "fade-in"
      }`}
    >
      <img
        src={props.src}
        alt=""
        className="mt-10 xl:mt-5 lg:mt-16 md:mt-16 sm:mt-32 xl:h-72 lg:h-72 md:h-72 sm:h-60 h-60 xl:w-96 lg:w-96 md:w-80 sm:w-72 w-80"
      />
    </div>
  );
};

export default CrudBanner;
