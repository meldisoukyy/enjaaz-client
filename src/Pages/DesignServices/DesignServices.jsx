import React from 'react'
import './DesignServices.scss'
import CommonHead from '../../Components/CommonHead/CommonHead'

const DesignServices = () => {
    const data = [
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
    ]
    return (
        <>
            <CommonHead title="باقة خدمات التصميم" path="الصفحة الرئيسية \ الباقات \" />
            <div className='DesignServices'><div className="container">
                <h1>باقة خدمات التصميم</h1>
                <p>تهدف هذه الخدمة من تعزيز الهوية الفريدة التي تميز الشركة عن منافسيها في السوق، فهي تلعب دورًا حاسمًا في بناء الثقة والولاء لدى العملاء، وزيادة الوعي بالشركة، وتحقيق النجاح في السوق.</p>
                <h1 className='text-center py-5'>باقة خدمات التصميم</h1>
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
                <p className='pt-5'>هذه مجرد أمثلة قليلة من خدمات التصميم المتاحة، ويمكن تخصيصها حسب احتياجات العملاء والصناعات المختلفة.</p>
            </div></div>
        </>
    )
}

export default DesignServices