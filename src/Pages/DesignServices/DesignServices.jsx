import React, { useEffect } from 'react'
import './DesignServices.scss'
import CommonHead from '../../Components/CommonHead/CommonHead'
import { useMyContext } from '../../context/MyContext';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const DesignServices = () => {
    const { lang, setlang, t, i18n } = useMyContext();
    useEffect(() => {
        AOS.init();
      }, []);
    const data =lang === "ar" ? [
        {
            arTitle: 'تصميم الشعار',
            enTitle: 'Logo Design',
            p: 'إنشاء شعار مميز يعكس هوية العلامة التجارية ويمكن التعرف عليه بسهولة.'
        },
        {
            arTitle: 'تصميم المواقع الإلكترونية',
            enTitle: 'Web Design',
            p: 'إنشاء تصميم جذاب وسهل الاستخدام لموقع الويب لتعزيز تجربة المستخدم وجاذبية المحتوى.'
        },
        {
            arTitle: 'تصميم الجرافيكس',
            enTitle: 'Graphic Design',
            p: 'إنشاء مواد تسويقية مثل بروشورات، نشرات، وإعلانات إلكترونية بتصميم جذاب وإبداعي.'
        },
        {
            arTitle: 'تصميم العبوات والتغليف',
            enTitle: 'Packaging Design',
            p: 'تصميم عبوات المنتجات بطريقة تجعلها ملفتة للنظر على الرفوف وتساعد في تسويق المنتج'
        },
        {
            arTitle: 'تصميم الملصقات واللافتات',
            enTitle: 'Poster and Signage Design',
            p: 'إنشاء تصميم جذاب وسهل الاستخدام لموقع الويب لتعزيز تجربة المستخدم وجاذبية المحتوى.'
        },
        {
            arTitle: 'تصميم الهوية البصرية',
            enTitle: 'Visual Identity Design',
            p: 'تطوير هوية متكاملة للعلامة التجارية تتضمن الشعار، والألوان، والأنماط، والأيقونات.'
        },
        {
            arTitle: 'تصميم واجهات المستخدم',
            enTitle: 'UI/UX Design',
            p: 'تصميم واجهات مستخدم جذابة وسهلة الاستخدام لتطبيقات الجوال أو المواقع الإلكترونية.'
        },
        {
            arTitle: 'تصميم الكتب والمجلات',
            enTitle: 'Book and Magazine Design',
            p: 'تصميم صفحات الكتب والمجلات بطريقة جمالية ومنظمة'
        },
        {
            arTitle: 'تصميم الشعارات الشخصية',
            enTitle: 'Personal Branding',
            p: 'تطوير هوية بصرية للأفراد تميزهم في مجالاتهم المهنية'
        },
        {
            arTitle: 'تصميم الرسوم المتحركة',
            enTitle: 'Animation Design',
            p: 'إنشاء رسوم متحركة وفيديوهات توضيحية لتوصيل رسائل أو شرح منتجات'
        },
    ]:[
        {
            arTitle: 'تصميم الشعار',
            enTitle: 'Logo Design',
            p: 'Creating a distinctive logo that reflects the brand identity and is easily recognizable.'
        },
        {
            arTitle: 'تصميم المواقع الإلكترونية',
            enTitle: 'Web Design',
            p: 'Creating an attractive and user-friendly web design to enhance the user experience and content appeal.'
        },
        {
            arTitle: 'تصميم الجرافيكس',
            enTitle: 'Graphic Design',
            p: 'Creating marketing materials such as brochures, flyers, and digital ads with attractive and creative designs.'
        },
        {
            arTitle: 'تصميم العبوات والتغليف',
            enTitle: 'Packaging Design',
            p: 'Designing product packaging in a way that makes it eye-catching on the shelves and helps market the product.'
        },
        {
            arTitle: 'تصميم الملصقات واللافتات',
            enTitle: 'Poster and Signage Design',
            p: 'Creating an attractive and user-friendly web design to enhance the user experience and content appeal.'
        },
        {
            arTitle: 'تصميم الهوية البصرية',
            enTitle: 'Visual Identity Design',
            p: 'Developing a comprehensive brand identity, including the logo, colors, patterns, and icons.'
        },
        {
            arTitle: 'تصميم واجهات المستخدم',
            enTitle: 'UI/UX Design',
            p: 'Designing attractive and user-friendly user interfaces for mobile applications or websites.'
        },
        {
            arTitle: 'تصميم الكتب والمجلات',
            enTitle: 'Book and Magazine Design',
            p: 'Designing book and magazine pages in an aesthetic and organized manner.'
        },
        {
            arTitle: 'تصميم الشعارات الشخصية',
            enTitle: 'Personal Branding',
            p: 'Developing a visual identity for individuals to distinguish them in their professional fields.'
        },
        {
            arTitle: 'تصميم الرسوم المتحركة',
            enTitle: 'Animation Design',
            p: 'Creating animations and explanatory videos to convey messages or explain products.'
        },
    ];
    return (
        <>
            <CommonHead title={t('package3.h1')} path={t('package3.path')} />
            <div className='DesignServices' data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300' style={lang === "ar" ? {direction: 'rtl'} : {direction: 'ltr'}}><div className="container">
                <h1>{t('package3.h2')}</h1>
                <p>{t('package3.p')}</p>
                <h2 className='section-title3 text-center my-5'>{t('package3.h3')}</h2>
                <div className="packs">
                    {data.map((item, i) => {
                        return (
                            <div className="pack" key={i}>
                                <h1>{item.arTitle}</h1>
                                <h1>{item.enTitle}</h1>
                                <p>{item.p}</p>
                                <span>{t('subsc.h1')}</span>
                            </div>
                        )
                    })}

                </div>
                <p className='pt-5'>{t('package3.p2')}</p>
            </div></div>
        </>
    )
}

export default DesignServices