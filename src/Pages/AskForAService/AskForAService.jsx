import React from 'react'
import CommonHead from '../../Components/CommonHead/CommonHead'

const AskForAService = () => {
    return (
        <div>
            <CommonHead title="طلب خدمة" path="الصفحة الرئيسية \" />
            <div className="EnjazzForm">
                <div className="container">
                    <h1>اتصل بنا</h1>
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

export default AskForAService