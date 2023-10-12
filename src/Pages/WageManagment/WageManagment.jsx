import React from 'react'
import './WageManagment.scss'
import CommonHead from '../../Components/CommonHead/CommonHead'
import { useMyContext } from '../../context/MyContext';
import { Link } from 'react-router-dom';
const WageManagment = () => {
    const { lang, setlang, t, i18n } = useMyContext();

    return (
        <>
            <CommonHead title="باقة إدارة الأجور" path="الصفحة الرئيسية \ الباقات \" />
            <div className='WageManagment' style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }}><div className="container">
                <h1>باقة إدارة الأجور</h1>
                <p>وهي باقة متخصصة في تقديم حلاً متكاملاً لإدارة الرواتب والمزايا للشركات، مما يساعدها على تحقيق كفاءة أعلى وتركيز أفضل على نمو أعمالها</p>
                <h2 className='section-title text-center my-5'>باقة إدارة الأجور</h2>
                <div className="packs">
                    {[...Array(8)].map((item) => {
                        return (
                            <div className="pack ">
                                <div className="top">
                                    <div className="banner">
                                        <h2>الباقة البرونزية</h2>
                                        <p>بقيمة<span>3499</span>ريال </p>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <Link to='/askforaservice'>
                                        <div>
                                            اشترك الآن
                                        </div>
                                    </Link>                                </div>
                            </div>
                        )
                    })}
                </div>
            </div></div>
        </>
    )
}

export default WageManagment