import React from 'react'
import './WageManagment.scss'
import CommonHead from '../../Components/CommonHead/CommonHead'
const WageManagment = () => {
    return (
        <>
            <CommonHead title="باقة إدارة الأجور" path="الصفحة الرئيسية \ الباقات \" />
            <div className='WageManagment'><div className="container">
                <h1>باقة إدارة الأجور</h1>
                <p>وهي باقة متخصصة في تقديم حلاً متكاملاً لإدارة الرواتب والمزايا للشركات، مما يساعدها على تحقيق كفاءة أعلى وتركيز أفضل على نمو أعمالها</p>
                <h1 className='text-center py-5'>باقة إدارة الأجور</h1>
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
                                    اشترك الآن
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div></div>
        </>
    )
}

export default WageManagment