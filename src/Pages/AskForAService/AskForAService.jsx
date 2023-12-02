import React, { useEffect, useState } from 'react'
import CommonHead from '../../Components/CommonHead/CommonHead'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import { useMyContext } from '../../context/MyContext';
import Swal from 'sweetalert2';
import { Helmet, HelmetAr, ServiceRequestApi } from '../../Apis/Apis';
const AskForAService = () => {
    const { lang, setlang, t, i18n } = useMyContext();
    
    lang==='ar'?HelmetAr('طلب خدمة'):Helmet('Ask For A Service')
    
    useEffect(() => {
        AOS.init();
      }, []);
      const [name, setname] = useState('')
      const [email, setemail] = useState('')
      const [mobile, setmobile] = useState('')
      const [city, setcity] = useState('')
      const [service_type, setservice_type] = useState('service-management-yearly')
      const [notes, setnotes] = useState('')
  
      const [data, setdata] = useState([])
  
    //   function isEmailValid(email) {
    //       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //       return emailPattern.test(email);
    //   }
    const services={
        "Issuance of Commercial Register for an Establishment": "إصدار سجل تجاري لمؤسسة",
        "Modification of Commercial Register for an Establishment": "تعديل سجل تجاري لمؤسسة",
        "Residence Permit Issuance": "إصدار إقامة",
        "Residence Permit Renewal": "تجديد إقامة",
        "Issuance of Exit and Re-Entry Visa": "إصدار تأشيرة خروج وعودة",
        "Extension of Exit and Re-Entry Visa": "تمديد تأشيرة خروج وعودة",
        "Issuance of Final Exit Visa": "إصدار تأشيرة خروج نهائي",
        "Resident Report": "تقرير مقيم",
        "Transfer of Passport Information": "نقل معلومات جوازين",
        "Registration of an Account for the Institution at the Zakat, Tax, and Customs Authority": "تسجيل حساب للمنشأة هيئة الزكاة والضريبة والجمارك",
        "Update of Institution Data at the Zakat, Tax, and Customs Authority": "تحديث بيانات المنشأة هيئة الزكاة والضريبة والجمارك",
        "Issuance of Zakat and Tax Certificate": "إصدار شهادة الزكاة والضريبة",
        "Delegation for Visa": "التفويض على تأشيرة",
        "Request for Business Visit": "طلب زيارة تجارية",
        "Registration on the Mudad Platform": "التسجيل في منصة مدد",
        "Data Update": "تحديث البيانات",
        "Opening an Institution File": "فتح ملف منشأة",
        "Update of Data at the Labor Office": "تحديث البيانات في مكتب العمل",
        "Issuance of Work License": "إصدار رخصة عمل",
        "Transfer of Worker Services": "نقل خدمات عامل",
        "Issuance of Saudi Certificate": "اصدار شهادة السعودة",
        "Authentication of Employment Contracts": "توثيق عقود العمل",
        "Update of Employee Data": "تحديث بيانات الموظفين"
        }
  
      const handleSubmit = () => {
          if (name !== '' && mobile !== '') {
            //   console.log(name,email,mobile,city,service_type,notes)
              ServiceRequestApi(name,mobile,service_type,notes).then((res) => { 
                console.log(res);
                 setdata(res); 
            }).then(()=>Swal.fire({
                  title: lang === "ar" ? 'تم' : 'Submited',
                  text: lang === "ar" ?'تم ارسال البيانات بنجاح':'Data was sent successfully',
                  icon: 'success',
                  timer: 2000,
                  confirmButtonText: lang === "ar" ?'الرجوع':'Return'
              }))
          }
          else {
              Swal.fire({
                  title: lang === "ar" ? '! خطأ' : 'Error!',
                  text: lang === "ar" ?`${name === ''?"لم يتم ادخال الاسم .":""} ${mobile === ''?"لم يتم ادخال رقم الهاتف .":""}`:`${name === ''?"The Name is Missing .":""}${mobile === ''?"The Mobile is Missing .":""}`,
                  icon: 'error',
                  timer: 2000,
                  confirmButtonText: lang === "ar" ?'الرجوع':'Return'
              })
          }
      }
    return (
        <div>
            <CommonHead title={t('askService.h1')} path={t('askService.path')} />
            <div className="EnjazzForm" style={lang === "ar" ? {direction: 'rtl'} : {direction: 'ltr'}} data-aos="fade-in" data-aos-duration="2000" data-aos-delay='500'>
                <div className="container">
                    <h1 className='section-title3'>{t('askService.h1')}</h1>
                    <p>{t('askService.p')}</p>
                    <span>{t('form.p1')}</span>

                    <div className="EnjazzFormInputs">
                        <input className='EnjazzFormInput' type="text" placeholder={t('form.fullName')} onChange={(e) => setname(e.target.value)} />

                        <input className='EnjazzFormInput' type="text" placeholder={t('form.phone')} onChange={(e) => setmobile(e.target.value)} />

                        <p>{t('form.typeS')}:</p>
                        <select className='EnjazzFormInput' style={lang === "ar" ?{backgroundPositionX: '3%'}:{backgroundPositionX: '97%'}} onChange={(e) => setservice_type(e.target.value)}>
                            <option value="service-management-yearly" selected>{t('circles.c11')}</option>
                            <option value="service-management-simi-annual" >{t('circles.c12')}</option>
                            <option value="service-management-three-months" >{t('circles.c13')}</option>
                            <option value="wage-protection-yearly">{t('circles.c21')}</option>
                            <option value="wage-protection-monthly">{t('circles.c22')}</option>
                            <option value="register-a-trademark">{t('circles.c2')}</option>
                            <option value="establishment-of-facilities">{t('circles.c3')}</option>
                            <option value="legal-advice">{t('circles.c4')}</option>
                            <option value="all-government-services">{t('circles.c5')}</option>
                            <option value="reducing-financial-burdens">{t('circles.c7')}</option>
                            <option value="free-tryme-service">{t('circles.c8')}</option>
                            {Object.entries(services).map(([en,ar])=>{
                                return(
                                    <option value={en.toLowerCase().replaceAll(' ','-')}>{lang==='ar'?ar:en}</option>
                                )
                            })}
                        </select>
                        {/* <span style={{color:'red', marginTop:'-10px'}}>{t('form.required')}</span> */}

                        <textarea className='EnjazzFormInput' cols="30" rows="4" placeholder={t('form.details')} onChange={(e) => setnotes(e.target.value)}></textarea>
                    </div>
                    <div className="EnjazzFormBtn" onClick={() => handleSubmit()}>{t('form.send')}</div>
                </div>
            </div>

        </div>
    )
}

export default AskForAService