import React, { useEffect, useState } from 'react'
import './Partners.scss'
import { useMyContext } from '../../context/MyContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PartnersApi } from '../../Apis/Apis';
const Partners = () => {
    const { lang, setlang, t, i18n } = useMyContext();
    useEffect(() => {
      AOS.init();
    }, []);
    const [data, setdata] = useState([])
    useEffect(() => {
        PartnersApi().then((res)=>{setdata(res)})
      }, []);
    // const data=["/images/partners/1partners.webp","/images/partners/2partners.webp","/images/partners/3partners.webp","/images/partners/4partners.webp","/images/partners/5partners.webp","/images/partners/6partners.webp","/images/partners/7partners.webp",]
  return (
    <div className='Partners' data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
        <div className="container" style={lang === "ar" ? {direction: 'rtl'} : {direction: 'ltr'}}>
            <h1 className='secH'>{t('partners.h1')}</h1>
            <div className="row d-flex justify-content-evenly">
                {data.map((item,i)=>{
                    return(
                        <div className="image col-lg-3 col-md-6 mb-3" key={i} >
                            <img alt="Enjazz_image" loading="lazy" src={item.logo} />
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Partners