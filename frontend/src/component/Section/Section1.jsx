import React from "react";
import wallpaper from '../Images/wallpaper.jpeg'
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <div>
      <Section1Image />
      <Section1Text />
    </div>
  );
};

const Section1Text = () => {
  return (
    <div className="flex transition-opacity justify-center xl:translate-y-[-70vh] lg:translate-y-[-65vh] md:translate-y-[-55vh] sm:translate-y-[-50vh] translate-y-[17vh] relative z-40">
      <Section1TextComponent />
    </div>
  );
};

const Section1TextComponent = () => {
  return (
    <div className="flex justify-center">
      <div className="font-medium text-center">
        <h1 className="text-3xl font-bold xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl xl:w-96 lg:w-96 md:w-96 sm:w-96 w-80">
          Discover Delicious Food and Drinks
        </h1>
        <p className="mx-3 mt-3 mb-4 xl:mx-0 lg:mx-0 md:mx-0 sm:mx-0 xl:w-96 lg:w-96 md:w-96 sm:w-96 w-72 text-slate-700">
          Indulge in a wide variety of mouthwatering dishes and refreshing
          beverages. Savor the flavors that will satisfy your cravings!
        </p>
        <Link to={"/Crud"}>
          <button className="px-10 py-2 tracking-wide text-white transition-all bg-cyan-400 hover:outline hover:outline-1 hover:outline-cyan-400 hover:text-cyan-500 hover:bg-transparent">
            Explore Now
          </button>
        </Link>
      </div>
    </div>
  );
};
const Section1Image = () => {
  return (
    <div className="">
      <img
      src={wallpaper}
        alt=""
        className="w-full object-fill xl:h-[103vh] lg:h-[95vh] md:h-[75vh] sm:h-[65vh] xl:flex lg:flex md:flex z-20 sm:flex hidden"
      />
    </div>
  );
};

export default Section1;