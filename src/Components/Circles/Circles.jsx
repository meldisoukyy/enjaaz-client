import React, { useEffect } from 'react'
import './circles.scss'
import { useMyContext } from '../../context/MyContext';

import { Link } from 'react-router-dom';
import beldings from "../../assets/images/circles/beldings.webp"
import wage from "../../assets/images/circles/wage.webp"
import servicemanagment from "../../assets/images/circles/servicemanagment.webp"
import r from "../../assets/images/circles/r.webp"
import logoCircle from "../../assets/images/logoCircle.webp"
import law from "../../assets/images/circles/law.webp"
import governrate from "../../assets/images/circles/governrate.webp"
import free2 from "../../assets/images/circles/free2.webp"
import freeTry from "../../assets/images/circles/freeTry.webp"

const Circles = () => {
    const { lang, setlang, t, i18n } = useMyContext();

    return (
        <div className='Circles'>
            <section className="home-features">
                <h2 className="section-title3 text-center mb-5">{t('circles.h1')}</h2>
                <div className="container">
                    <div className="row align-items-center justify-content-center">

                        <div className="d-flex justify-content-evenly mx-lg-5 order1" >
                            <Link to='/askforaservice/establishment-of-facilities' className='w-fet'>
                                <div className="feature-box w-auto mb-0 d-flex justify-content-center align-items-center flex-column" >
                                    <div className="img">
                                        <img loading="lazy" alt="Enjazz_image"
                                            src={beldings}

                                        />
                                    </div>
                                    <p className="title w-100 text-center text-lg-end">{t('circles.c3')}</p>
                                </div>
                            </Link>
                            <Link to='/wagemanagment' className='w-fet'>
                                <div className="feature-box w-auto d-flex justify-content-center align-items-center flex-column" >
                                    <div className="img">
                                        <img loading="lazy" alt="Enjazz_image"
                                            src={wage}

                                        />
                                    </div>
                                    <p className="title w-100 text-center text-lg-start">{t('circles.c6')}</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-lg-3 d-flex flex-lg-column gap100 order2">
                            <Link to='/servicespackage'>
                                <div className="feature-box w-100 d-flex flex-column justify-content-center align-items-center justify-content-lg-center align-items-lg-center">
                                    <div className="img">
                                        <img loading="lazy" alt="Enjazz_image"
                                            src={servicemanagment}

                                        />
                                    </div>
                                    <p className="title text-center">{t('circles.c1')}</p>
                                </div>
                            </Link>
                            <Link to='/askforaservice/register-a-trademark'>
                                <div className="feature-box w-100 d-flex flex-column justify-content-center align-items-center" >
                                    <div className="img">
                                        <img loading="lazy" alt="Enjazz_image"
                                            src={r}

                                        />
                                    </div>
                                    <p className="title text-center">{t('circles.c2')}</p>
                                </div>
                            </Link>
                            {/* <Link to='/askforaservice/establishment-of-facilities'>
                                <div className="feature-box w-100 d-flex flex-column justify-content-center align-items-center justify-content-lg-center align-items-lg-end">
                                    <div className="img">
                                        <img loading="lazy" alt="Enjazz_image" 
                                            src="../../assets/images/circles/beldings.webp"
                                           
                                        />
                                    </div>
                                    <p className="title text-center">{t('circles.c3')}</p>
                                </div>
                            </Link> */}
                        </div>
                        <div className="col-9 col-md-8 col-lg-5">
                            <div className="features-circles" >
                            <div className="empty" style={{aspectRatio: '1 / 1'}}></div>

                                <div className="center" style={{minWidth:"30%",minHeight:'30%'}}>
                                    <img loading="lazy" alt="Enjazz_image"
                                        src={logoCircle}
                                       
                                        className="img"
                                    />
                                    <div className="empty" style={{aspectRatio: '1 / 1'}}></div>

                                </div>
                                <span className="arounds">
                                        {/* <img loading="lazy" alt=""
                                            src="https://aait.sa/public/site/img/empty.png"
                                            className="empty"
                                        /> */}
                                        <div className="empty" style={{aspectRatio: '1 / 1'}}></div>
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
                        <div className="col-12 col-lg-3 d-flex flex-lg-column gap100">

                            <Link to='/askforaservice/legal-advice'>
                                <div className="feature-box w-100 d-flex flex-column justify-content-center align-items-center justify-content-lg-center align-items-lg-center">
                                    <div className="img">
                                        <img loading="lazy" alt="Enjazz_image"
                                            src={law}

                                        />
                                    </div>
                                    <p className="title text-center text-lg-start">{t('circles.c4')}</p>
                                </div>
                            </Link>
                            <Link to='/askforaservice/all-government-services'>
                                <div className="feature-box w-100 d-flex flex-column justify-content-center align-items-center">
                                    <div className="img">
                                        <img loading="lazy" alt="Enjazz_image"
                                            src={governrate}

                                        />
                                    </div>
                                    <p className="title text-center">{t('circles.c5')}</p>
                                </div>
                            </Link>
                            {/* <Link to='/askforaservice/wage-protection'>
                            <div className="feature-box w-100 d-flex flex-column justify-content-center align-items-center justify-content-lg-center align-items-lg-start">
                                <div className="img">
                                    <img loading="lazy" alt="Enjazz_image" 
                                        src="../../assets/images/circles/wage.webp"
                                       
                                    />
                                </div>
                                <p className="title text-center text-lg-start">{t('circles.c6')}</p>
                            </div>
                        </Link> */}
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly mx-lg-5" >
                        <Link to='/askforaservice/reducing-financial-burdens' className='w-fet'>
                            <div className="feature-box w-auto mb-0 d-flex justify-content-center align-items-center flex-column">
                                <div className="img">
                                    <img loading="lazy" alt="Enjazz_image"
                                        src={free2}

                                    />
                                </div>
                                <p className="title w-100 text-center text-lg-end">{t('circles.c7')}</p>
                            </div>
                        </Link>
                        <Link to='/trymeservice' className='w-fet'>
                            <div className="feature-box w-auto d-flex justify-content-center align-items-center flex-column">
                                <div className="img">
                                    <img loading="lazy" alt="Enjazz_image"
                                        src={freeTry}

                                    />
                                </div>
                                <p className="title w-100 text-center text-lg-start">{t('circles.c8')}</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Circles