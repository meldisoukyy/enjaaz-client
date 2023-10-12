import React from 'react'
import CommonHead from '../../Components/CommonHead/CommonHead'

const FreeConsulting = () => {
    return (
        <div>
            <CommonHead title="استشارة مجانية" path="الصفحة الرئيسية \" />
            <div className="EnjazzForm">
                <div className="container">
                    <h1 className='section-title'>طلب استشارة مجانية</h1>
                    <p>نوفر لمنشأتكم خدمة استشارات الأعمال وذلك بهدف التوجيه ووضع سير إدارة المنشأة على الطريق الصحيح مما يدعم نمو نشاطك في بيئة عمل متزنة وهادئة .</p>
                    <span>* يمكنك التواصل معنا عن طريق الواتساب او ملئ البيانات الاتية</span>

                    <div className="EnjazzFormInputs">
                        <input className='EnjazzFormInput' type="text" placeholder='اسم المنشأة / الاسم بالكامل' />
                        <span style={{color:'red', marginTop:'-10px'}}>* مطلوب</span>

                        <input className='EnjazzFormInput' type="text" placeholder='البريد الإلكتروني' />
                        <input className='EnjazzFormInput' type="text" placeholder='رقم الجوال' />
                        <span style={{color:'red', marginTop:'-10px'}}>* مطلوب</span>

                        <input className='EnjazzFormInput' type="text" placeholder='المدينة' />
                        <input className='EnjazzFormInput' type="text" placeholder='نوع الخدمة' />
                        <span style={{color:'red', marginTop:'-10px'}}>* مطلوب</span>

                        <textarea className='EnjazzFormInput' cols="30" rows="4" placeholder='تفاصيل الطلب'></textarea>
                    </div>
                    <div className="EnjazzFormBtn">إرسال</div>
                </div>
            </div>

        </div>
    )
}

export default FreeConsulting