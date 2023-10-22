import React, { useEffect } from 'react'
import './circles.scss'
import { useMyContext } from '../../context/MyContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const Circles = () => {
    const { lang, setlang, t, i18n } = useMyContext();
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='Circles' data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>
            <section className="home-features">
                <h2 className="section-title3 text-center mb-5">{t('circles.h1')}</h2>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12 col-lg-3">
                            <Link to='/askforaservice/service-management'>
                                <div className="feature-box w-100 d-flex flex-column justify-content-center align-items-center justify-content-lg-center align-items-lg-end" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>
                                    <div className="img">
                                        <img
                                            loading="lazy"
                                            src="/images/updateS1.png"
                                            alt=""
                                        />
                                    </div>
                                    <p className="title text-center">{t('circles.c1')}</p>
                                </div>
                            </Link>
                            <Link to='/askforaservice/register-a-trademark'>
                                <div className="feature-box w-100 d-flex flex-column justify-content-center align-items-center" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>
                                    <div className="img">
                                        <img
                                            loading="lazy"
                                            src="/images/r.png"
                                            alt=""
                                        />
                                    </div>
                                    <p className="title text-center">{t('circles.c2')}</p>
                                </div>
                            </Link>
                            <Link to='/askforaservice/establishment-of-facilities'>
                                <div className="feature-box w-100 d-flex flex-column justify-content-center align-items-center justify-content-lg-center align-items-lg-end" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>
                                    <div className="img">
                                        <img
                                            loading="lazy"
                                            src="/images/buildings.png"
                                            alt=""
                                        />
                                    </div>
                                    <p className="title text-center">{t('circles.c3')}</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-md-8 col-lg-6">
                            <div className="features-circles" >
                                <img
                                    loading="lazy"
                                    src="https://aait.sa/public/site/img/empty.png"
                                    alt=""
                                    className="empty"
                                />
                                <div className="center">
                                    <img
                                        loading="lazy"
                                        src="/images/logoCircle.png"
                                        alt=""
                                        className="img"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://aait.sa/public/site/img/empty.png"
                                        alt=""
                                        className="empty"
                                    />
                                </div>
                                <span className="arounds">
                                    <img
                                        loading="lazy"
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
                        <div className="col-12 col-lg-3 f-flex">

                        <Link to='/askforaservice/legal-advice'>
                            <div className="feature-box w-100 d-flex flex-column justify-content-center align-items-center justify-content-lg-center align-items-lg-start" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>
                                <div className="img">
                                    <img
                                        loading="lazy"
                                        src="/images/law.png"
                                        alt=""
                                    />
                                </div>
                                <p className="title text-center text-lg-start">{t('circles.c4')}</p>
                            </div>
                        </Link>
                        <Link to='/askforaservice/all-government-services'>
                            <div className="feature-box w-100 d-flex flex-column justify-content-center align-items-center" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>
                                <div className="img">
                                    <img
                                        loading="lazy"
                                        src="/images/governrate.png"
                                        alt=""
                                    />
                                </div>
                                <p className="title">{t('circles.c5')}</p>
                            </div>
                        </Link>
                        <Link to='/askforaservice/wage-protection'>
                            <div className="feature-box w-100 d-flex flex-column justify-content-center align-items-center justify-content-lg-center align-items-lg-start" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>
                                <div className="img">
                                    <img
                                        loading="lazy"
                                        src="/images/wage.png"
                                        alt=""
                                    />
                                </div>
                                <p className="title text-center text-lg-start">{t('circles.c6')}</p>
                            </div>
                        </Link>
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly">
                    <Link to='/askforaservice/reducing-financial-burdens'>
                        <div className="feature-box w-auto mb-0 d-flex justify-content-center align-items-center flex-column" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>
                            <div className="img">
                                <img
                                    loading="lazy"
                                    src="/images/free2.png"
                                    alt=""
                                />
                            </div>
                            <p className="title w-100">{t('circles.c7')}</p>
                        </div>
                    </Link>
                    <Link to='/askforaservice/free-tryme-service'>
                        <div className="feature-box w-auto d-flex justify-content-center align-items-center flex-column" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>
                            <div className="img">
                                <img
                                    loading="lazy"
                                    src="/images/updatef.png"
                                    alt=""
                                />
                            </div>
                            <p className="title w-100">{t('circles.c8')}</p>
                        </div>
                    </Link>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Circles