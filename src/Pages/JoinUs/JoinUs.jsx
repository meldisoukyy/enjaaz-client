import React, { useEffect, useState } from 'react'
import CommonHead from '../../Components/CommonHead/CommonHead'
import { useMyContext } from '../../context/MyContext';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Swal from 'sweetalert2';
import { JoinUsApi } from '../../Apis/Apis';
const JoinUs = () => {
    const { lang, setlang, t, i18n } = useMyContext();
    useEffect(() => {
        AOS.init();
      }, []);
      const [name, setname] = useState('')
      const [email, setemail] = useState('')
      const [mobile, setmobile] = useState('')
      const [city, setcity] = useState('')
      const [partnership_type, setpartnership_type] = useState('')
      const [notes, setnotes] = useState('')
      const [portfolio, setportfolio] = useState('')
  
      const [data, setdata] = useState([])
  
      
      function isEmailValid(email) {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailPattern.test(email);
      }
      
      const portfolioFile = new FormData();
      portfolioFile.append('file', portfolio);
      const handleSubmit = () => {
          if (name !== '' && mobile !== '' &&partnership_type!== '' && isEmailValid(email)) {
              console.log(name,email,mobile,city,partnership_type,notes,portfolioFile)
              JoinUsApi(name,email,mobile,city,partnership_type,notes,portfolioFile).then((res) => { console.log(res); setdata(res); }).then(()=>data.portfolio[0]==='The submitted data was not a file. Check the encoding type on the form.'?Swal.fire({
                title: lang === "ar" ? '! خطأ' : 'Error!',
                text: `${lang === "ar" ?"البيانات المقدمة لم تكن ملفا. يرجي التحقق منها ثانيا":data.portfolio}`,
                icon: 'error',
              //   timer: 2000,
                confirmButtonText: lang === "ar" ?'الرجوع':'Return'
            }):Swal.fire({
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
                  text: lang === "ar" ?`${name === ''?"لم يتم ادخال الاسم .":""} ${mobile === ''?"لم يتم ادخال رقم الهاتف .":""} ${partnership_type === ''?"لم يتم تحديد نوع الشراكة .":""} ${!isEmailValid(email)?"البريد الالكتروني غير صالح":""}`:`${name === ''?"The Name is Missing .":""}${mobile === ''?"The Mobile is Missing .":""} ${partnership_type === ''?"The type of partnership is not specified .":""} ${!isEmailValid(email)?"The Email isn't valid .":""}`,
                  icon: 'error',
                //   timer: 2000,
                  confirmButtonText: lang === "ar" ?'الرجوع':'Return'
              })
          }
      }
    return (
        <div>
            <CommonHead title={t('joinus.h1')} path={t('joinus.path')} />
            <div className="EnjazzForm" style={lang === "ar" ? {direction: 'rtl'} : {direction: 'ltr'}} data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                <div className="container">
                    <h1 className='section-title'>{t('joinus.h2')}</h1>
                    <p>{t('joinus.p')}</p>
                    <span>{t('form.p1')}</span>

                    <div className="EnjazzFormInputs">
                        <input className='EnjazzFormInput' type="text" placeholder={t('form.fullName')} onChange={(e) => setname(e.target.value)} />
                        <span style={{color:'red', marginTop:'-10px'}}>{t('form.required')}</span>
                        <input className='EnjazzFormInput' type="text" placeholder={t('form.email')} onChange={(e) => setemail(e.target.value)} />
                        <input className='EnjazzFormInput' type="text" placeholder={t('form.phone')} onChange={(e) => setmobile(e.target.value)} />
                        <span style={{color:'red', marginTop:'-10px'}}>{t('form.required')}</span>

                        <input className='EnjazzFormInput' type="text" placeholder={t('form.city')} onChange={(e) => setcity(e.target.value)} />
                        <input className='EnjazzFormInput' type="text" placeholder={t('form.typeC')} onChange={(e) => setpartnership_type(e.target.value)} />
                        <span style={{color:'red', marginTop:'-10px'}}>{t('form.required')}</span>

                        <textarea className='EnjazzFormInput' cols="30" rows="4" placeholder={t('form.details3')} onChange={(e) => setnotes(e.target.value)}></textarea>
                        <div className="EnjazzFormInput EnjazzFormInputFile">
                            <div className="icon">
                                <img src="/images/upload.png" alt="" />
                            </div>
                            <p>{t('form.upload')}</p>
                            <span>{t('form.upload2')}</span>
                            <span>{portfolio.name}</span>
                            <input type="file" id="myfile" name="filename" onChange={(e) => setportfolio(e.target.files[0])}/>
                        </div>
                    </div>
                    <div className="EnjazzFormBtn" onClick={() => handleSubmit()}>{t('form.send')}</div>
                </div>
            </div>
        </div>
    )
}

export default JoinUs