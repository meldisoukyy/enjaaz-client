import React from 'react'
import CommonHead from '../../Components/CommonHead/CommonHead'
import './Offers.scss'
import { useMyContext } from '../../context/MyContext';
const Offers = () => {
    const { lang, setlang, t, i18n } = useMyContext();

    const data = [
        {
            img: '/images/1offer.png',
            title: 'الباقة البرونزية',
            p1: '3499',
            p2: '5000',
        },
        {
            img: '/images/2offer.png',
            title: 'الباقة الفضية',
            p1: '4999',
            p2: '7000',
        },
        {
            img: '/images/3offer.png',
            title: 'الباقة الماسية',
            p1: '14999',
            p2: '19000',
        },
        {
            img: '/images/4offer.png',
            title: 'الباقة الذهبية',
            p1: '7999',
            p2: '12500',
        },
        {
            img: '/images/5offer.png',
            title: 'الاستشارات القانونية',
            p1: '700',
            p2: '1000',
        },
    ]
    return (
        <>
            <CommonHead title="العروض" path="الصفحة الرئيسية \" />
            <div className='Offers' style={lang === "ar" ? {direction: 'rtl'} : {direction: 'ltr'}}>
                <div className="container">
                    <h1>عروضنا</h1>
                    <h1 className='text-center py-5'>العروض  الحالية</h1>
                    <div className="packs">
                        {data.map((item, i) => {
                            return (
                                <div className="pack" key={i}>
                                    <div className="image">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <h1 className="text-center">{item.title}</h1>
                                    <div className="price">
                                        <span>{item.p1} ر.س</span>
                                        <span>{item.p2} ر.س</span>
                                    </div>
                                    <div className="bottom">
                                        اشترك الآن
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Offers