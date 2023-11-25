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
        //         <img loading="lazy" src="/images/logobiggg.webp" alt="" />
        //     </div>
        //     <p className='text-focus-in'>انجاز ، شريك رحلتك نحو التطور والتميز</p>
        // </div>

        <div className='Circles circles-loader' style={{background:'url("../../../public/images/خلفية افتتاح الشاشة .png")'}} data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>
            <section className="home-features d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-11 col-md-8 col-lg-5">
                            <div className="features-circles" >
                                <img loading="lazy"
                                    src="https://aait.sa/public/site/img/empty.png"
                                    alt=""
                                    className="empty"
                                />
                                <div className="center">
                                    <img loading="lazy"
                                        src="/images/logoCircle.webp"
                                        alt=""
                                        className="img"
                                    />
                                    <img loading="lazy"
                                        src="https://aait.sa/public/site/img/empty.png"
                                        alt=""
                                        className="empty"
                                    />
                                </div>
                                <span className="arounds">
                                    <img loading="lazy"
                                        src="https://aait.sa/public/site/img/empty.png"
                                        alt=""
                                        className="empty"
                                    />
                                    <span className="around">
                                        <span className="around">
                                            <span className="around">
                                                <span className="around"></span>
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