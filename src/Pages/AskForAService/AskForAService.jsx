import React from 'react'
import CommonHead from '../../Components/CommonHead/CommonHead'

const AskForAService = () => {
    return (
        <div>
            <CommonHead title="طلب خدمة" path="الصفحة الرئيسية \" />
            <div className="EnjazzForm">
                <div className="container">
                    <h1 className='section-title'>طلب خدمة</h1>
                    <p>نحن هنا من أجلك لذا لا تتردد في الاتصال بنا وسوف نبذل كل جهدنا للتواصل معك في أقرب وقت.</p>
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

export default AskForAService