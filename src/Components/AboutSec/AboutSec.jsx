import React from 'react'
import './AboutSec.scss'
import { useMyContext } from '../../context/MyContext';
const AboutSec = () => {
  const { lang, setlang, t, i18n } = useMyContext();

  return (
    <div className='AboutSec'>
      <div className="container" style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }}>
        <h1 className='section-title'>{t('aboutus.h2')}</h1>
        <div className='image'>
          <img src="/images/1.png" alt="" />
        </div>
        <p>{t('aboutus.p1')}</p>
        <h1 className='section-title'>{t('aboutus.h3')}</h1>
        <p>{t('aboutus.p2')}</p>
        <h1 className='section-title'>{t('aboutus.h4')}</h1>
        <p>{t('aboutus.p3')}</p>
      </div>
    </div>
  )
}

export default AboutSec