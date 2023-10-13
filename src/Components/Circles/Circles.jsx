import React from 'react'
import './circles.scss'
import { useMyContext } from '../../context/MyContext';
const Circles = () => {
    const { lang, setlang, t, i18n } = useMyContext();

    return (
        <div className='Circles'>
            <section className="home-features">
                <h2 className="section-title text-center mb-5">{t('circles.h1')}</h2>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12 col-lg-3">
                            <div className="feature-box w-100 d-flex flex-column justify-content-center align-items-center justify-content-lg-center align-items-lg-end">
                                <div className="img">
                                    <img
                                        loading="lazy"
                                        src="/images/updateS1.png"
                                        alt=""
                                    />
                                </div>
                                <p className="title text-center">{t('circles.c1')}</p>
                            </div>
                            <div className="feature-box w-100 d-flex flex-column justify-content-center align-items-center">
                                <div className="img">
                                    <img
                                        loading="lazy"
                                        src="/images/r.png"
                                        alt=""
                                    />
                                </div>
                                <p className="title text-center">{t('circles.c2')}</p>
                            </div>
                            <div className="feature-box w-100 d-flex flex-column justify-content-center align-items-center justify-content-lg-center align-items-lg-end">
                                <div className="img">
                                    <img
                                        loading="lazy"
                                        src="/images/buildings.png"
                                        alt=""
                                    />
                                </div>
                                <p className="title text-center">{t('circles.c3')}</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-6">
                            <div className="features-circles">
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
                            <div className="feature-box w-100 d-flex flex-column justify-content-center align-items-center justify-content-lg-center align-items-lg-start">
                                <div className="img">
                                    <img
                                        loading="lazy"
                                        src="/images/law.png"
                                        alt=""
                                    />
                                </div>
                                <p className="title text-center text-lg-start">{t('circles.c4')}</p>
                            </div>
                            <div className="feature-box w-100 d-flex flex-column justify-content-center align-items-center">
                                <div className="img">
                                    <img
                                        loading="lazy"
                                        src="/images/governrate.png"
                                        alt=""
                                    />
                                </div>
                                <p className="title">{t('circles.c5')}</p>
                            </div>
                            <div className="feature-box w-100 d-flex flex-column justify-content-center align-items-center justify-content-lg-center align-items-lg-start">
                                <div className="img">
                                    <img
                                        loading="lazy"
                                        src="/images/wage.png"
                                        alt=""
                                    />
                                </div>
                                <p className="title text-center text-lg-start">{t('circles.c6')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly">
                        
                        <div className="feature-box w-auto mb-0 d-flex justify-content-center align-items-center flex-column">
                            <div className="img">
                                <img
                                    loading="lazy"
                                    src="/images/free2.png"
                                    alt=""
                                />
                            </div>
                            <p className="title w-100">{t('circles.c7')}</p>
                        </div>
                        <div className="feature-box w-auto d-flex justify-content-center align-items-center flex-column">
                            <div className="img">
                                <img
                                    loading="lazy"
                                    src="/images/updatef.png"
                                    alt=""
                                />
                            </div>
                            <p className="title w-100">{t('circles.c8')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Circles