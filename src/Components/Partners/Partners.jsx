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
    // const data=["/images/partners/1partners.png","/images/partners/2partners.png","/images/partners/3partners.png","/images/partners/4partners.png","/images/partners/5partners.png","/images/partners/6partners.png","/images/partners/7partners.png",]
  return (
    <div className='Partners' data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
        <div className="container" style={lang === "ar" ? {direction: 'rtl'} : {direction: 'ltr'}}>
            <h1 className='secH'>{t('partners.h1')}</h1>
            <div className="row d-flex justify-content-evenly">
                {data.map((item)=>{
                    return(
                        <div className="image col-lg-3 col-md-6 mb-3" >
                            <img src={item.logo} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Partners