import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import CommonHead from '../../Components/CommonHead/CommonHead'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useMyContext } from '../../context/MyContext';
import { ServiceManagemenApi } from '../../Apis/Apis';
import { useParams } from 'react-router-dom';
const FreeConsulting = () => {
    // const id =useParams().id
    // const links=['service-management','register-a-trademark','establishment-of-facilities','legal-advice','all-government-services','wage-protection','reducing-financial-burdens','free-tryme-service']
    
    useEffect(() => {
        AOS.init();
    }, []);
    const { lang, setlang, t, i18n } = useMyContext();
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [mobile, setmobile] = useState('')
    const [city, setcity] = useState('')
    const [service_type, setservice_type] = useState('Service Management')
    const [notes, setnotes] = useState('')
    const [data, setdata] = useState([])

    function isEmailValid(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    const handleSubmit = () => {
        if (name !== '' && mobile !== '' && isEmailValid(email)) {
            console.log(name, email, mobile, city, service_type, notes)
            // ServiceManagemenApi(name, email, mobile, city, service_type, notes).then((res) => { console.log(res); setdata(res); }).then(()=>data&&Swal.fire({
            //     title: lang === "ar" ? 'تم' : 'Submited',
            //     text: lang === "ar" ?'تم ارسال البيانات بنجاح':'Data was sent successfully',
            //     icon: 'success',
            //     timer: 2000,
            //     confirmButtonText: lang === "ar" ?'الرجوع':'Return'
            // }))
        }
        else {
            Swal.fire({
                title: lang === "ar" ? '! خطأ' : 'Error!',
                text: lang === "ar" ?`${name === ''?"لم يتم ادخال الاسم .":""} ${mobile === ''?"لم يتم ادخال رقم الهاتف .":""} ${!isEmailValid(email)?"البريد الالكتروني غير صالح":""}`:`${name === ''?"The Name is Missing .":""}${mobile === ''?"The Mobile is Missing .":""}${!isEmailValid(email)?"The Email isn't valid .":""}`,
                icon: 'error',
                timer: 2000,
                confirmButtonText: lang === "ar" ?'الرجوع':'Return'
            })
        }
    }

    return (
        <div>
            <CommonHead title={t('FreeConsulting.h1')} path={t('FreeConsulting.path')} />
            <div className="EnjazzForm" style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }} data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                <div className="container">
                    <h1 className='section-title3'>{t('FreeConsulting.h2')}</h1>
                    <p>{t('FreeConsulting.p')}</p>
                    <span>{t('form.p1')}</span>

                    <div className="EnjazzFormInputs">
                        <input className='EnjazzFormInput' type="text" placeholder={t('form.fullName')} onChange={(e) => setname(e.target.value)} />
                        <span style={{ color: 'red', marginTop: '-10px' }}>{t('form.required')}</span>

                        <input className='EnjazzFormInput' type="text" placeholder={t('form.email')} onChange={(e) => setemail(e.target.value)} />
                        <input className='EnjazzFormInput' type="text" placeholder={t('form.phone')} onChange={(e) => setmobile(e.target.value)} />
                        <span style={{ color: 'red', marginTop: '-10px' }}>{t('form.required')}</span>

                        <input className='EnjazzFormInput' type="text" placeholder={t('form.city')} onChange={(e) => setcity(e.target.value)} />
                        <p>{t('form.typeS')}:</p>
                        <select className='EnjazzFormInput' onChange={(e) => setservice_type(e.target.value)}>
                            <option value="service-management" selected>{t('circles.c1')}</option>
                            <option value="register-a-trademark">{t('circles.c2')}</option>
                            <option value="establishment-of-facilities">{t('circles.c3')}</option>
                            <option value="legal-advice">{t('circles.c4')}</option>
                            <option value="all-government-services">{t('circles.c5')}</option>
                            <option value="wage-protection">{t('circles.c6')}</option>
                            <option value="reducing-financial-burdens">{t('circles.c7')}</option>
                            <option value="free-tryme-service">{t('circles.c8')}</option>
                        </select>
                        {/* <span style={{ color: 'red', marginTop: '-10px' }}>{t('form.required')}</span> */}

                        <textarea className='EnjazzFormInput' cols="30" rows="4" placeholder={t('form.details')} onChange={(e) => setnotes(e.target.value)}></textarea>
                    </div>
                    <div className="EnjazzFormBtn" onClick={() => handleSubmit()}>{t('form.send')}</div>
                </div>
            </div>

        </div>
    )
}

export default FreeConsulting