import React from 'react'
import CommonHead from '../../Components/CommonHead/CommonHead'
import { useMyContext } from '../../context/MyContext';

const JoinUs = () => {
    const { lang, setlang, t, i18n } = useMyContext();

    return (
        <div>
            <CommonHead title="انضم إلينا" path="الصفحة الرئيسية \" />
            <div className="EnjazzForm" style={lang === "ar" ? {direction: 'rtl'} : {direction: 'ltr'}}>
                <div className="container">
                    <h1 className='section-title'>انضم إلينا</h1>
                    <p>يسعدنا تعاونكم معنا لذا لا تتردد في أن تكون من شركاء نجاحنا.</p>
                    <div className="EnjazzFormInputs">
                        <input className='EnjazzFormInput' type="text" placeholder='اسم المنشأة / الاسم بالكامل' />
                        <input className='EnjazzFormInput' type="text" placeholder='البريد الإلكتروني' />
                        <input className='EnjazzFormInput' type="text" placeholder='رقم الجوال' />
                        <input className='EnjazzFormInput' type="text" placeholder='المدينة' />
                        <input className='EnjazzFormInput' type="text" placeholder='نوع الشراكة' />
                        <textarea className='EnjazzFormInput' cols="30" rows="4" placeholder='الملاحظات'></textarea>
                        <div className="EnjazzFormInput EnjazzFormInputFile">
                            <div className="icon">
                                <img src="/images/upload.png" alt="" />
                            </div>
                            <p>رفع مستند</p>
                            <span>(يمكنك رفع السيرةالذاتية أو البروفايل)</span>
                            <input type="file" id="myfile" name="filename"/>
                        </div>
                    </div>
                    <div className="EnjazzFormBtn">إرسال</div>
                </div>
            </div>
        </div>
    )
}

export default JoinUs