import React from "react";
import CommonHead from "../../Components/CommonHead/CommonHead";
import Different from "../../Components/Different/Different";
import CounterUp from "../../Components/CounterUp/CounterUp";
import Partners from "../../Components/Partners/Partners";
import Reviews from "../../Components/Reviews/Reviews";
import AboutSec from "../../Components/AboutSec/AboutSec";
import { useMyContext } from "../../context/MyContext";
import { Helmet, HelmetAr } from "../../Apis/Apis";

const About = () => {
  const { lang, setlang, t, i18n } = useMyContext();

  lang==='ar'?HelmetAr('نبذه عنا'):Helmet('About')
  return (
    <div>
      <CommonHead title={t('aboutus.h1')} path={t('aboutus.path')}/>
      <AboutSec/>
      <Different/>
      <CounterUp/>
      <Partners/>
      <Reviews/>
    </div>
  );
};

export default About;
