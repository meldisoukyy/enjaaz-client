import React from 'react'
import CommonHead from '../../Components/CommonHead/CommonHead'

const FreeConsulting = () => {
    return (
        <div>
            <CommonHead title="استشارة مجانية" path="الصفحة الرئيسية \" />
            <div className="EnjazzForm">
                <div className="container">
                    <h1>طلب استشارة مجانية</h1>
                    <p>نوفر لمنشأتكم خدمة استشارات الأعمال وذلك بهدف التوجيه ووضع سير إدارة المنشأة على الطريق الصحيح مما يدعم نمو نشاطك في بيئة عمل متزنة وهادئة .</p>
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

export default FreeConsulting