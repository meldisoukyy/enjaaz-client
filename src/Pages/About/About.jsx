import React from "react";
import CommonHead from "../../Components/CommonHead/CommonHead";
import Different from "../../Components/Different/Different";
import CounterUp from "../../Components/CounterUp/CounterUp";
import Partners from "../../Components/Partners/Partners";
import Reviews from "../../Components/Reviews/Reviews";
import AboutSec from "../../Components/AboutSec/AboutSec";

const About = () => {
  return (
    <div>
      <CommonHead title="نبذة عنا" path="الصفحة الرئيسية \"/>
      <AboutSec/>
      <Different/>
      <CounterUp/>
      <Partners/>
      <Reviews/>
    </div>
  );
};

export default About;
