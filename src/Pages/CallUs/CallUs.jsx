import React, { useEffect, useState } from 'react'
import './callUs.scss'
import AOS from 'aos';
import Swal from 'sweetalert2'
import 'aos/dist/aos.css';
import CommonHead from '../../Components/CommonHead/CommonHead'
import { useMyContext } from '../../context/MyContext';
import { ContactUsApi, Helmet, HelmetAr } from '../../Apis/Apis';
const CallUs = () => {
    const { lang, setlang, t, i18n } = useMyContext();
    lang === 'ar' ? HelmetAr('اتصل بنا') :
        Helmet('Contact')
    useEffect(() => {
        AOS.init();
    }, []);
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [mobile, setmobile] = useState('')
    const [reason, setreason] = useState('')
    const [message, setmessage] = useState('')
    const [selectedMap, setselectedMap] = useState(1)

    const [data, setdata] = useState([])

    // function isEmailValid(email) {
    //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return emailPattern.test(email);
    // }

    const handleSubmit = () => {
        if (name !== '' && mobile !== '') {
            // console.log(name, email, mobile, reason, message)
            ContactUsApi(name, mobile, reason, message).then((res) => {
                //  console.log(res)
                ; setdata(res);
            }).then(() => data.id && Swal.fire({
                title: lang === "ar" ? 'تم' : 'Submited',
                text: lang === "ar" ? 'تم ارسال البيانات بنجاح' : 'Data was sent successfully',
                icon: 'success',
                timer: 2000,
                confirmButtonText: lang === "ar" ? 'الرجوع' : 'Return'
            }))
        }
        else {
            Swal.fire({
                title: lang === "ar" ? '! خطأ' : 'Error!',
                text: lang === "ar" ? `${name === '' ? "لم يتم ادخال الاسم ." : ""} ${mobile === '' ? "لم يتم ادخال رقم الهاتف ." : ""}` : `${name === '' ? "The Name is Missing ." : ""}${mobile === '' ? "The Mobile is Missing ." : ""}`,
                icon: 'error',
                timer: 2000,
                confirmButtonText: lang === "ar" ? 'الرجوع' : 'Return'
            })
        }
    }
    return (
        <div className='CallUs'>
            <CommonHead title={t('callus.h1')} path={t('callus.path')} />
            <div className="Map" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                <div className="container" style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }}>
                    <div className="top">
                        <div className="row gap-3">
                            <div className="col item">
                                <div className="icon">
                                    <img loading="lazy" src="/images/carbon_home.webp" alt="" />
                                </div>
                                <span>{t('callus.address')}</span>
                            </div>
                            <div className="col item">
                                <div className="icon">
                                    <img loading="lazy" src="/images/carbon_phone.webp" alt="" />
                                </div>
                                <span>920013581 - 966502144449</span>
                            </div>
                            <div className="col item">
                                <div className="icon">
                                    <img loading="lazy" src="/images/carbon_mail.webp" alt="" />
                                </div>
                                <span>info@enjaaz.com.sa</span>
                            </div>
                        </div>
                    </div>
                    <div className="switch" >
                        <p className="mapL" style={selectedMap === 1 ? { color: '#0fa9f0' } : {}} onClick={() => setselectedMap(1)}>
                            فرع الرياض
                            <div className="line" style={selectedMap === 1 ? { width: '100%' } : { width: '0%' }}>
                            </div>
                        </p>
                        <p className="mapL" style={selectedMap === 2 ? { color: '#0fa9f0' } : {}} onClick={() => setselectedMap(2)}>
                            فرع جيزان
                            <div className="line" style={selectedMap === 2 ? { width: '100%' } : { width: '0%' }}>
                            </div>
                        </p>
                    </div>
                    <div className="bottom">
                        {selectedMap===1&&(
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.646291990671!2d46.7560625!3d24.8075625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2effdaaab7d58f%3A0xea15c20d6324425c!2z2LTYsdmD2Kkg2KfZhtis2KfYsiDZhNiu2K_Zhdin2Kog2KfZhNij2LnZhdin2YQ!5e0!3m2!1sar!2seg!4v1697991472116!5m2!1sar!2seg" style={{ border: '0;' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        )}
                        {selectedMap===2&&(
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.646291990671!2d46.7560625!3d24.8075625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2effdaaab7d58f%3A0xea15c20d6324425c!2z2LTYsdmD2Kkg2KfZhtis2KfYsiDZhNiu2K_Zhdin2Kog2KfZhNij2LnZhdin2YQ!5e0!3m2!1sar!2seg!4v1700601993167!5m2!1sar!2seg" style={{ border: '0;' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        )}
                    </div>
                </div>
            </div>
            <div className="EnjazzForm" style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }} data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                <div className="container">
                    <h1 className='section-title3'>{t('callus.h2')}</h1>
                    <p>{t('callus.p')}</p>
                    <span>{t('form.p1')}</span>

                    <div className="EnjazzFormInputs">
                        <input className='EnjazzFormInput' type="text" placeholder={t('form.fullName')} onChange={(e) => setname(e.target.value)} />
                        {/* <span style={{ color: 'red', marginTop: '-10px' }}>{t('form.required')}</span> */}
                        {/* <input className='EnjazzFormInput' type="text" placeholder={t('form.email')} onChange={(e) => setemail(e.target.value)} /> */}
                        <input className='EnjazzFormInput' type="text" placeholder={t('form.phone')} onChange={(e) => setmobile(e.target.value)} />
                        {/* <span style={{ color: 'red', marginTop: '-10px' }}>{t('form.required')}</span> */}
                        <input className='EnjazzFormInput' type="text" placeholder={t('form.reason')} onChange={(e) => setreason(e.target.value)} />
                        <textarea className='EnjazzFormInput' cols="30" rows="4" placeholder={t('form.details2')} onChange={(e) => setmessage(e.target.value)}></textarea>
                    </div>
                    <div className="EnjazzFormBtn" onClick={() => handleSubmit()}>{t('form.send')}</div>
                </div>
            </div>
        </div>
    )
}

export default CallUs