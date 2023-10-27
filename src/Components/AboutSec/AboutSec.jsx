import React, { useEffect } from 'react'
import './AboutSec.scss'
import { useMyContext } from '../../context/MyContext';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const AboutSec = () => {
  const { lang, setlang, t, i18n } = useMyContext();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='AboutSec' data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
      <div className="container" style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }}>
        <h1 className='section-title3' data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>{t('aboutus.h2')}</h1>
        <div className='image' data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>
          <img src="/images/1.webp" alt="" />
        </div>
        <p data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>{t('aboutus.p1')}</p>
        <h1 className='section-title3' data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>{t('aboutus.h3')}</h1>
        <p data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>{t('aboutus.p2')}</p>
        <h1 className='section-title3' data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>{t('aboutus.h4')}</h1>
        <p data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>{t('aboutus.p3')}</p>
      </div>
    </div>
  )
}

export default AboutSec