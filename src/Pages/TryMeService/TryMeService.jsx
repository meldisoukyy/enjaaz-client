import React, { useEffect } from 'react'
import CommonHead from '../../Components/CommonHead/CommonHead'
import { useMyContext } from '../../context/MyContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
const TryMeService = () => {
    const { lang, setlang, t, i18n } = useMyContext();
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div >
            <CommonHead title={t('Tryme.h1')} path={t('Tryme.path')} />
            <div className="EnjazzForm" style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }} data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                <div className="container">
                    <h1 className='section-title'>{t('Tryme.h2')}</h1>
                    <p>{t('Tryme.p1')}</p>
                    <span>{t('Tryme.p2')}</span>
                    <div className="EnjazzFormInputs">
                        <input className='EnjazzFormInput' type="text" placeholder={t('form.fullName')} />
                        <span style={{ color: 'red', marginTop: '-10px' }}>{t('form.required')}</span>

                        <input className='EnjazzFormInput' type="text" placeholder={t('form.email')} />
                        <input className='EnjazzFormInput' type="text" placeholder={t('form.phone')} />
                        <span style={{ color: 'red', marginTop: '-10px' }}>{t('form.required')}</span>

                        <input className='EnjazzFormInput' type="text" placeholder={t('form.city')} />
                        <input className='EnjazzFormInput' type="text" placeholder={t('form.typeS')} />
                        <span style={{ color: 'red', marginTop: '-10px' }}>{t('form.required')}</span>

                        <textarea className='EnjazzFormInput' cols="30" rows="4" placeholder={t('form.details')}></textarea>
                    </div>
                    <div className="EnjazzFormBtn">{t('form.send')}</div>
                </div>
            </div>
        </div>
    )
}

export default TryMeService