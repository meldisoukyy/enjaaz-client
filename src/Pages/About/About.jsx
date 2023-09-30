import React from "react";
import CommonHead from "../../Components/CommonHead/CommonHead";
import Different from "../../Components/Different/Different";
import CounterUp from "../../Components/CounterUp/CounterUp";
import Partners from "../../Components/Partners/Partners";
import Reviews from "../../Components/Reviews/Reviews";

const About = () => {
  return (
    <div>
      <CommonHead title="نبذة عنا" path=" من نحن ؟"/>
      <Different/>
      <CounterUp/>
      <Partners/>
      <Reviews/>
    </div>
  );
};

export default About;
