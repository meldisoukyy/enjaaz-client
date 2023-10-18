import React, { useEffect } from 'react'
import './callUs.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import CommonHead from '../../Components/CommonHead/CommonHead'
import { useMyContext } from '../../context/MyContext';
const CallUs = () => {
    const { lang, setlang, t, i18n } = useMyContext();
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className='CallUs'>
            <CommonHead title={t('callus.h1')} path={t('callus.path')} />
            <div className="Map" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                <div className="container" style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }}>
                    <div className="top">
                        <div className="row gap-3">
                            <div className="col item">
                                <div className="icon">
                                    <img src="/images/carbon_home.png" alt="" />
                                </div>
                                <span>{t('callus.address')}</span>
                            </div>
                            <div className="col item">
                                <div className="icon">
                                    <img src="/images/carbon_phone.png" alt="" />
                                </div>
                                <span>920013581 - 966502144449</span>
                            </div>
                            <div className="col item">
                                <div className="icon">
                                    <img src="/images/carbon_mail.png" alt="" />
                                </div>
                                <span>info@enjaaz.com.sa</span>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54695.266018435694!2d31.417859310767867!3d31.041454962463455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79db7a9053547%3A0xf8dab3bbed766c97!2z2KfZhNmF2YbYtdmI2LHYqdiMINin2YTZhdmG2LXZiNix2KkgKNmC2LPZhSAyKdiMINin2YTZhdmG2LXZiNix2KnYjCDYp9mE2K_ZgtmH2YTZitip!5e0!3m2!1sar!2seg!4v1675376055504!5m2!1sar!2seg" style={{ border: '0;' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div className="EnjazzForm" style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }} data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                <div className="container">
                    <h1 className='section-title'>{t('callus.h2')}</h1>
                    <p>{t('callus.p')}</p>
                    <span>{t('form.p1')}</span>

                    <div className="EnjazzFormInputs">
                        <input className='EnjazzFormInput' type="text" placeholder={t('form.fullName')} />
                        <span style={{ color: 'red', marginTop: '-10px' }}>{t('form.required')}</span>
                        <input className='EnjazzFormInput' type="text" placeholder={t('form.email')} />
                        <input className='EnjazzFormInput' type="text" placeholder={t('form.phone')} />
                        <span style={{ color: 'red', marginTop: '-10px' }}>{t('form.required')}</span>
                        <input className='EnjazzFormInput' type="text" placeholder={t('form.reason')} />
                        <textarea className='EnjazzFormInput' cols="30" rows="4" placeholder={t('form.details2')}></textarea>
                    </div>
                    <div className="EnjazzFormBtn">{t('form.send')}</div>
                </div>
            </div>
        </div>
    )
}

export default CallUs