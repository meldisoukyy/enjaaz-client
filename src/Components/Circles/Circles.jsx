import React from 'react'
import './circles.scss'
const Circles = () => {
    return (
        <div className='Circles'>
            <section className="home-features">
                <h2 className="section-title text-center mb-5">خدمات إنجاز</h2>
                {/* <img
                    loading="lazy"
                    src="https://aait.sa/public/site/img/logo.png"
                    alt=""
                    className="title-logo"
                /> */}
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12 col-lg-3">
                            <div className="feature-box w-100 d-flex flex-column justify-content-center align-items-center justify-content-lg-center align-items-lg-end">
                                <div className="img">
                                    <img
                                        loading="lazy"
                                        src="/images/serveces.png"
                                        alt=""
                                    />
                                </div>
                                <p className="title text-center">إدارة الخدمات</p>
                            </div>
                            <div className="feature-box w-100 d-flex flex-column justify-content-center align-items-center">
                                <div className="img">
                                    <img
                                        loading="lazy"
                                        src="/images/r.png"
                                        alt=""
                                    />
                                </div>
                                <p className="title text-center">تسجيل علامة تجارية</p>
                            </div>
                            <div className="feature-box w-100 d-flex flex-column justify-content-center align-items-center justify-content-lg-center align-items-lg-end">
                                <div className="img">
                                    <img
                                        loading="lazy"
                                        src="/images/buildings.png"
                                        alt=""
                                    />
                                </div>
                                <p className="title text-center">تأسيس المنشآت</p>
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
                                <p className="title text-center text-lg-start">الاستشارات القانونية</p>
                            </div>
                            <div className="feature-box w-100 d-flex flex-column justify-content-center align-items-center">
                                <div className="img">
                                    <img
                                        loading="lazy"
                                        src="/images/governrate.png"
                                        alt=""
                                    />
                                </div>
                                <p className="title">جميع الخدمات الحكومية</p>
                            </div>
                            <div className="feature-box w-100 d-flex flex-column justify-content-center align-items-center justify-content-lg-center align-items-lg-start">
                                <div className="img">
                                    <img
                                        loading="lazy"
                                        src="/images/wage.png"
                                        alt=""
                                    />
                                </div>
                                <p className="title text-center text-lg-start">حماية الأجور</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly">
                        
                        <div className="feature-box w-auto mb-0 d-flex justify-content-center align-items-center flex-column">
                            <div className="img">
                                <img
                                    loading="lazy"
                                    src="/images/money.png"
                                    alt=""
                                />
                            </div>
                            <p className="title w-100">تخفيف الاعباء الماليه</p>
                        </div>
                        <div className="feature-box w-auto d-flex justify-content-center align-items-center flex-column">
                            <div className="img">
                                <img
                                    loading="lazy"
                                    src="/images/free.png"
                                    alt=""
                                />
                            </div>
                            <p className="title w-100">الاستشارات المجانية</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Circles