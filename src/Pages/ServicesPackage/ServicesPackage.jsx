import React from 'react'
import './ServicesPackage.scss'
import CommonHead from '../../Components/CommonHead/CommonHead'
import PackageAcc from '../../Components/PackageAcc/PackageAcc'

const ServicesPackage = () => {
    return (
        <>
            <CommonHead title="باقة إدارة الخدمات" path="الصفحة الرئيسية \ الباقات \" />
            <div className='ServicesPackage'><div className="container">
                    <h1>باقات إدارة الخدمات</h1>
                    <p>لدينا درجات مختلفة تصنف الخدمة المتعلقة بالاحتياج المتخصص، وتهدف لتقديم أفضل خدمة للمتخصص.</p>
                    <h1 className='text-center py-5'>باقات إدارة الخدمات</h1>
                    <div className="packs">
                        <div className="pack ">
                            <div className="top">
                                <div className="banner">
                                    <h2>الباقة البرونزية</h2>
                                    <p>بقيمة<span>3499</span>ريال فقط</p>
                                </div>

                                {[...Array(4)].map((item)=>{
                                    return(
                                        <PackageAcc title={"عدد الموظفين 9 فأقل"}/>
                                    )
                                })}
                            </div>
                            <div className="bottom">
                            </div>
                        </div>
                        <div className="pack ">
                            <div className="top">
                                <div className="banner">
                                    <h2>الباقة البرونزية</h2>
                                    <p>بقيمة<span>3499</span>ريال فقط</p>
                                </div>

                                {[...Array(4)].map((item)=>{
                                    return(
                                        <PackageAcc title={"عدد الموظفين 9 فأقل"}/>
                                    )
                                })}
                            </div>
                            <div className="bottom">
                            </div>
                        </div>
                        <div className="pack ">
                            <div className="top">
                                <div className="banner">
                                    <h2>الباقة البرونزية</h2>
                                    <p>بقيمة<span>3499</span>ريال فقط</p>
                                </div>

                                {[...Array(4)].map((item)=>{
                                    return(
                                        <PackageAcc title={"عدد الموظفين 9 فأقل"}/>
                                    )
                                })}
                            </div>
                            <div className="bottom">
                            </div>
                        </div>
                        <div className="pack ">
                            <div className="top">
                                <div className="banner">
                                    <h2>الباقة البرونزية</h2>
                                    <p>بقيمة<span>3499</span>ريال فقط</p>
                                </div>

                                {[...Array(4)].map((item)=>{
                                    return(
                                        <PackageAcc title={"عدد الموظفين 9 فأقل"}/>
                                    )
                                })}
                            </div>
                            <div className="bottom">
                            </div>
                        </div>
                    </div>
                </div></div>
        </>
    )
}

export default ServicesPackage