import React, { useEffect } from 'react'
import CommonHead from '../../Components/CommonHead/CommonHead'
import { useMyContext } from '../../context/MyContext';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const JoinUs = () => {
    const { lang, setlang, t, i18n } = useMyContext();
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div>
            <CommonHead title={t('joinus.h1')} path={t('joinus.path')} />
            <div className="EnjazzForm" style={lang === "ar" ? {direction: 'rtl'} : {direction: 'ltr'}} data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                <div className="container">
                    <h1 className='section-title'>{t('joinus.h2')}</h1>
                    <p>{t('joinus.p')}</p>
                    <span>{t('form.p1')}</span>

                    <div className="EnjazzFormInputs">
                        <input className='EnjazzFormInput' type="text" placeholder={t('form.fullName')} />
                        <span style={{color:'red', marginTop:'-10px'}}>{t('form.required')}</span>
                        <input className='EnjazzFormInput' type="text" placeholder={t('form.email')} />
                        <input className='EnjazzFormInput' type="text" placeholder={t('form.phone')} />
                        <span style={{color:'red', marginTop:'-10px'}}>{t('form.required')}</span>

                        <input className='EnjazzFormInput' type="text" placeholder={t('form.city')} />
                        <input className='EnjazzFormInput' type="text" placeholder={t('form.typeC')} />
                        <span style={{color:'red', marginTop:'-10px'}}>{t('form.required')}</span>

                        <textarea className='EnjazzFormInput' cols="30" rows="4" placeholder={t('form.details3')}></textarea>
                        <div className="EnjazzFormInput EnjazzFormInputFile">
                            <div className="icon">
                                <img src="/images/upload.png" alt="" />
                            </div>
                            <p>{t('form.upload')}</p>
                            <span>{t('form.upload2')}</span>
                            <input type="file" id="myfile" name="filename"/>
                        </div>
                    </div>
                    <div className="EnjazzFormBtn">{t('form.send')}</div>
                </div>
            </div>
        </div>
    )
}

export default JoinUs