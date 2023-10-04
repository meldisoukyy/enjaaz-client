import React from 'react'
import CommonHead from '../../Components/CommonHead/CommonHead'

const TryMeService = () => {
    return (
        <div>
            <CommonHead title="خدمة جربني" path="الصفحة الرئيسية \" />
            <div className="EnjazzForm">
                <div className="container">
                    <h1>خدمة جربني</h1>
                    <p>خدمة جربني هي خدمة مجانية تقدمها إنجاز لعملائها ، وتتيح لك كحد أقصي خدمتين مجانًا.</p>
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