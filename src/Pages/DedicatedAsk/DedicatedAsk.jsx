import React, { useEffect } from 'react'
import CommonHead from '../../Components/CommonHead/CommonHead'
import AOS from 'aos';
import 'aos/dist/aos.css';
const DedicatedAsk = () => {
    useEffect(() => {
        AOS.init();
      }, []);
      const namear={
            "service-management" :["طلب خدمة إدارة الخدمات","نعمل كوسيط غير مباشر بينك وبين عملائك من خلال تقديم الحلول المتكاملة لتطوير وتصميم وتشغيل المنصات الإلكترونية، مع التركيز على تحسين تجربة المستخدم وضمان الأمان في عالم التحول الرقمي."],
            "register-a-trademark" :["طلب خدمة تسجيل علامة تجارية","نقدم لك استشارة قانونية لحماية علامتك التجارية ونعمل على إعداد وتقديم المستندات اللازمة لضمان تسجيلها بموجب القوانين والتشريعات المعمول بها داخل المملكة."],
            "establishment-of-facilities" :["طلب خدمة تأسيس المنشآت","نضمن لك بداية قوية وسلسة، للوصول إلى تحقيق رؤيتك وفكرتك إلى حقيقة مُنافسة، لذا خدماتنا تشمل التوجيه في كل مرحلة من تأسيس مؤسستك أو شركتك، بدءا من اختيار الهيكل القانوني المناسب وصولا إلى إعداد وتقديم الوثائق المطلوبة للجهات المختصة."],
            "legal-advice" :["طلب خدمة الاستشارات القانونية","نحن برفقتك شركاء في تحقيق النجاح، لدينا فريق متخصص في مجال الأعمال، لا نتأخر في تقديم استشارات متقدمة تشمل تحليل السوق ووضع استراتيجية واضحة لتطوير ونجاح مشروعك."],
            "all-government-services" :["طلب خدمة جميع الخدمات الحكومية",""],
            "wage-protection" :["طلب خدمة حماية الأجور","لدينا تجربة فريدة في إدارة رواتب موظفيك بأمان ودقة تامة، مع الاهتمام بأحدث التطورات القانونية والضريبية، كما نحسن حسابات الرواتب وتوزيع المزايا بدقة متناهية واحترافية، ونتكفل بالامتثال للقوانين واللوائح والأنظمة التابعة للمملكة."],
            "reducing-financial-burdens" :["طلب خدمة تخفيف الاعباء المالية","احصل على استشارات مالية مبتكرة تساعدك على تخفيف أعباء مؤسستك المالية، نقوم بتحليل وضعك المالي ونقدم استراتيجيات فعالة، إذ نمتلك حلولاً مخصصة تضمن استدامة مشروعك بنجاح."],
            "free-tryme-service" :["طلب خدمة خدمة جربني المجانية",""]
      }
      const nameen={
            "service-management" :["",""],
            "register-a-trademark" :["",""],
            "establishment-of-facilities" :["",""],
            "legal-advice" :["",""],
            "all-government-services" :["",""],
            "wage-protection" :["",""],
            "reducing-financial-burdens" :["",""],
            "free-tryme-service" :["",""]
      }
  return (
    <div>
    <CommonHead title="طلب خدمة" path="الصفحة الرئيسية \" />
    <div className="EnjazzForm" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='500'>
        <div className="container">
            <h1 className='section-title'>طلب خدمة</h1>
            <p>نحن هنا من أجلك لذا لا تتردد في الاتصال بنا وسوف نبذل كل جهدنا للتواصل معك في أقرب وقت.</p>
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

export default DedicatedAsk