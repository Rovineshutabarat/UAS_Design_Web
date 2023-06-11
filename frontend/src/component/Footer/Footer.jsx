import React from "react";

const Footer = () => {
  return (
    <div className="mt-20 mb-5">
      <FooterComponent />
      <FooterImage />
    </div>
  );
};

const FooterComponent = () => {
  return (
    <div className="justify-center text-white xl:flex lg:flex md:flex sm:flex sm:gap-x-10 xl:gap-x-20 lg:gap-x-20 md:gap-x-20 gap-x-10">
      <FooterText
        title="Programming"
        text1="React JS"
        text2="Tailwind CSS"
        text3="Express Js"
        text4="mongoDB"
        link1="https://react.dev/"
        link2="https://tailwindcss.com/"
        link3="ons8.com/icons/set/website"
        link4="https://www.mongodb.com/"
      />
      <FooterText
        title="Project"
        text1="Crud Project"
        text3="Database"
        text2="Shopping Website"
      />
      <FooterText
        title="Contact us"
        text1="WhatsApp"
        link1="https://wa.me/6285158838022"
      />
    </div>
  );
};

const FooterText = (props) => {
  return (
    <div className="flex flex-col pt-10 text-center xl:pt-0 lg:pt-0 pd:mt-0">
      <h1 className="mb-2 font-medium">{props.title}</h1>
      <a href={props.link1} target="blank">
        {props.text1}
      </a>
      <a href={props.link2} target="blank">
        {props.text2}
      </a>
      <a href={props.link3} target="blank">
        {props.text3}
      </a>
      <a href={props.link4} target="blank">
        {props.text4}
      </a>
    </div>
  );
};

const FooterImage = () => {
  return (
    <div className="flex justify-center py-10 gap-x-5 pt-14">
      <a href="https://github.com/Rovineshutabarat" target="blank">
        <img
          src="https://img.icons8.com/ios-filled/50/FFFFFF/github.png"
          alt=""
          className="h-7 w-7"
        />
      </a>
      <a href="https://www.google.com/intl/id/gmail/about/" target="blank">
        <img
          src="https://img.icons8.com/ios-filled/50/FFFFFF/new-post.png"
          alt=""
          className="h-7 w-7"
        />
      </a>
      <a href="https://twitter.com/RovinesHutabarat" target="blank">
        <img
          src="https://img.icons8.com/ios-filled/50/FFFFFF/twitter.png"
          alt=""
          className="h-7 w-7"
        />
      </a>
    </div>
  );
};

export default Footer;