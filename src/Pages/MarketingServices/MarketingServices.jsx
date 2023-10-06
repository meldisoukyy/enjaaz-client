import React from 'react'
import './../DesignServices/DesignServices.scss'
import CommonHead from '../../Components/CommonHead/CommonHead'
const MarketingServices = () => {
    const data = [
        {
            arTitle: 'التسويق الرقمي',
            enTitle: 'Digital Marketing',
            p: ' يهدف الوصول إلى الجمهور المستهدف وتعزيز المنتجات أو الخدمات من خلال وسائل التواصل الاحتماعي'
        },
        {
            arTitle: 'الإعلان والعلاقات العامة',
            enTitle: 'Advertising and Public Relations',
            p: 'إنشاء حملات إعلانية وإدارة العلاقات مع وسائل الإعلام والصحافة لزيادة التواجد الإعلامي والتفاعل مع الجمهور'
        },
        {
            arTitle: 'تسويق المحتوى',
            enTitle: 'Content Marketing',
            p: 'إنشاء محتوى ذو جودة عالية مثل المقالات والمدونات ومقاطع الفيديو لجذب وتثقيف الجمهور وتعزيز العلامة التجارية.'
        },
        {
            arTitle: 'تسويق وسائل التواصل',
            enTitle: 'Social Media Marketing',
            p: 'استخدام منصات وسائل التواصل الاجتماعي للتفاعل مع الجمهور ونشر محتوى تسويقي'
        },
        {
            arTitle: 'التسويق بالبريد الإلكتروني',
            enTitle: 'Email Marketing',
            p: 'إرسال رسائل بريد إلكتروني إلى قاعدة بيانات العملاء لتعزيز المنتجات أو الخدمات وتعزيز التواصل'
        },
        {
            arTitle: 'البحث عن الكلمات الرئيسية',
            enTitle: 'Keyword Research',
            p: 'بحث عن الكلمات والعبارات التي يستخدمها الجمهور للبحث على الإنترنت وتحسين موقع الشركة في نتائج محركات البحث'
        },
        {
            arTitle: 'تسويق التأثير',
            enTitle: 'Influencer Marketing',
            p: 'التعاون مع مؤثرين رقميين أو شخصيات على وسائل التواصل الاجتماعي للترويج للمنتجات أو الخدمات'
        },
        {
            arTitle: 'التسويق التجريبي',
            enTitle: 'Experiential Marketing',
            p: 'إنشاء تجارب تفاعلية للعملاء لتعزيز العلامة التجارية وتوصيل رسالة معينة.'
        },
        {
            arTitle: 'البحث السوقي',
            enTitle: 'Market Research',
            p: 'جمع وتحليل البيانات حول السوق والعملاء لفهم احتياجات الجمهور وتوجيه استراتيجيات التسويق.'
        },
        {
            arTitle: 'تسويق المواقع',
            enTitle: 'Location-Based Marketing',
            p: 'استخدام تقنيات تحديد المواقع لتوجيه العروض والإعلانات إلى الجمهور في مواقع معينة.'
        },
    ]
    return (
        <>
            <CommonHead title="باقة خدمات التسويق" path="الصفحة الرئيسية \ الباقات \" />
            <div className='DesignServices'><div className="container">
                <h1>باقة خدمات التسويق</h1>
                <p>خدمات التسويق تشمل مجموعة من الأنشطة والاستراتيجيات التي تهدف إلى تعزيز منتجات أو خدمات أو علامات تجارية معينة وزيادة وعي الجمهور بها</p>
                <h1 className='text-center py-5'>باقة خدمات التسويق</h1>
                <div className="packs">
                    {data.map((item, i) => {
                        return (
                            <div className="pack" key={i}>
                                <h1>{item.arTitle}</h1>
                                <h1>{item.enTitle}</h1>
                                <p>{item.p}</p>
                                <span>اشترك الآن</span>
                            </div>
                        )
                    })}

                </div>
                <p className='pt-5'>تلعب خدمات التسويق دورًا حاسمًا في تعزيز نجاح الشركات وزيادة مبيعاتها وبناء علاقات قوية مع العملاء. تتنوع هذه الخدمات وفقًا لاحتياجات العملاء والصناعات المختلفة.</p>
            </div></div>
        </>
    )
}

export default MarketingServices