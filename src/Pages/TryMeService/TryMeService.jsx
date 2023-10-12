import React from 'react'
import CommonHead from '../../Components/CommonHead/CommonHead'
import { useMyContext } from '../../context/MyContext';

const TryMeService = () => {
    const { lang, setlang, t, i18n } = useMyContext();

    return (
        <div>
            <CommonHead title="خدمة جربني" path="الصفحة الرئيسية \" />
            <div className="EnjazzForm" style={lang === "ar" ? {direction: 'rtl'} : {direction: 'ltr'}}>
                <div className="container">
                    <h1 className='section-title'>خدمة جربني</h1>
                    <p>خدمة جربني هي خدمة مجانية تقدمها إنجاز لعملائها ، وتتيح لك كحد أقصي خدمتين مجانًا.</p>
                    <span>* يمكنك التواصل معنا عن طريق الواتساب او ملئ البيانات الاتية</span>
                    <div className="EnjazzFormInputs">
                    <input className='EnjazzFormInput' type="text" placeholder='اسم المنشأة / الاسم بالكامل' />
                        <input className='EnjazzFormInput' type="text" placeholder='البريد الإلكتروني' />
                        <input className='EnjazzFormInput' type="text" placeholder='رقم الجوال' />
                        <input className='EnjazzFormInput' type="text" placeholder='المدينة' />
                        <input className='EnjazzFormInput' type="text" placeholder='نوع الخدمة' />
                        <textarea className='EnjazzFormInput' cols="30" rows="4" placeholder='تفاصيل الطلب'></textarea>
                    </div>
                    <div className="EnjazzFormBtn">إرسال</div>
                </div>
            </div>
        </div>
    )
}

export default TryMeService