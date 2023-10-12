import React from 'react'
import './callUs.scss'
import CommonHead from '../../Components/CommonHead/CommonHead'
import { useMyContext } from '../../context/MyContext';
const CallUs = () => {
    const { lang, setlang, t, i18n } = useMyContext();

    return (
        <div className='CallUs'>
            <CommonHead title="اتصل بنا" path="الصفحة الرئيسية \" />
            <div className="Map">
                <div className="container" style={lang === "ar" ? {direction: 'rtl'} : {direction: 'ltr'}}>
                    <div className="top">
                        <div className="row gap-3">
                            <div className="col item">
                                <div className="icon">
                                    <img src="/images/carbon_home.png" alt="" />
                                </div>
                                <span>المركز الرئيسي - الرياض - طريق الدائري الشمالي</span>
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
            <div className="EnjazzForm" style={lang === "ar" ? {direction: 'rtl'} : {direction: 'ltr'}}>
                <div className="container">
                    <h1 className='section-title'>اتصل بنا</h1>
                    <p>نحن هنا من أجلك لذا لا تتردد في الاتصال بنا وسوف نبذل كل جهدنا للتواصل معك في أقرب وقت.</p>
                    <div className="EnjazzFormInputs">
                        <input className='EnjazzFormInput' type="text" placeholder='اسم المنشأة / الاسم بالكامل' />
                        <input className='EnjazzFormInput' type="text" placeholder='البريد الإلكتروني' />
                        <input className='EnjazzFormInput' type="text" placeholder='رقم الجوال' />
                        <input className='EnjazzFormInput' type="text" placeholder='سبب التواصل' />
                        <textarea className='EnjazzFormInput' cols="30" rows="4" placeholder='التفاصيل'></textarea>
                    </div>
                    <div className="EnjazzFormBtn">إرسال</div>
                </div>
            </div>
        </div>
    )
}

export default CallUs