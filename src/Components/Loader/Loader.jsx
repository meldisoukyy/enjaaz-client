import React, { useEffect } from 'react'
import './Loader.scss'
import { useMyContext } from '../../context/MyContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const Loader = () => {
    const { lang, setlang, t, i18n } = useMyContext();
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        // <div className='Loader'>
        //     <div className="image text-focus-in">
        //         <img alt="Enjazz_image" loading="lazy" src="/images/logobiggg.webp" />
        //     </div>
        //     <p className='text-focus-in'>انجاز ، شريك رحلتك نحو التطور والتميز</p>
        // </div>

        <div className='Circle circles-loader' data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>
            <section className="home-features d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-11 col-md-8 col-lg-5">
                            <div className="features-circles" >
                                <img alt="Enjazz_image" loading="lazy"
                                    src="https://aait.sa/public/site/img/empty.png"
                                   
                                    className="empty"
                                />
                                <div className="center" style={{minWidth:"30px",minHeight:'30px'}}>
                                    <img alt="Enjazz_image" loading="lazy"
                                        src="/images/logoCircle.webp"
                                       
                                        className="img"
                                    />
                                    <img alt="Enjazz_image" loading="lazy"
                                        src="https://aait.sa/public/site/img/empty.png"
                                       
                                        className="empty"
                                    />
                                </div>
                                <span className="arounds">
                                    <img alt="Enjazz_image" loading="lazy"
                                        src="https://aait.sa/public/site/img/empty.png"
                                       
                                        className="empty"
                                    />
                                    <span className="aroun">
                                        <span className="aroun">
                                            <span className="aroun">
                                                <span className="aroun"></span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Loader