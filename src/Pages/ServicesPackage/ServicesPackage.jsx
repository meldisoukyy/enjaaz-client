import React from 'react'
import './ServicesPackage.scss'
import CommonHead from '../../Components/CommonHead/CommonHead'
import PackageAcc from '../../Components/PackageAcc/PackageAcc'
import Calculator from '../../Components/Calculator/Calculator'
import { useMyContext } from '../../context/MyContext'
import { Link } from 'react-router-dom'

const ServicesPackage = () => {
    const { lang, setlang, t, i18n } = useMyContext();

    return (
        <>
            <CommonHead title={t('package1.h1')} path={t('package1.path')} />
            <div className='ServicesPackage' style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }}><div className="container">
                <h1>{t('package1.h2')}</h1>
                <p>{t('package1.p')}</p>
                <h2 className='section-title text-center my-5'>{t('package1.h3')}</h2>
                <div className="packs">
                    <div className="pack ">
                        <div className="top">
                            <div className="banner">
                                <h2>الباقة البرونزية</h2>
                                <p>بقيمة<span>3499</span>ريال فقط</p>
                            </div>

                            {[...Array(4)].map((item) => {
                                return (
                                    <PackageAcc title={"عدد الموظفين 9 فأقل"} />
                                )
                            })}
                        </div>
                        <div className="bottom">
                        <Link to='/askforaservice'>
                                <div>{t('subsc.h1')}</div>
                            </Link>                        </div>
                    </div>
                    <div className="pack ">
                        <div className="top">
                            <div className="banner">
                                <h2>الباقة البرونزية</h2>
                                <p>بقيمة<span>3499</span>ريال فقط</p>
                            </div>

                            {[...Array(4)].map((item) => {
                                return (
                                    <PackageAcc title={"عدد الموظفين 9 فأقل"} />
                                )
                            })}
                        </div>
                        <div className="bottom">
                        <Link to='/askforaservice'>
                                <div>{t('subsc.h1')}</div>
                            </Link>
                        </div>
                    </div>
                    <div className="pack ">
                        <div className="top">
                            <div className="banner">
                                <h2>الباقة البرونزية</h2>
                                <p>بقيمة<span>3499</span>ريال فقط</p>
                            </div>

                            {[...Array(4)].map((item) => {
                                return (
                                    <PackageAcc title={"عدد الموظفين 9 فأقل"} />
                                )
                            })}
                        </div>
                        <div className="bottom">
                        <Link to='/askforaservice'>
                                <div>{t('subsc.h1')}</div>
                            </Link>                        </div>
                    </div>
                    <div className="pack ">
                        <div className="top">
                            <div className="banner">
                                <h2>الباقة البرونزية</h2>
                                <p>بقيمة<span>3499</span>ريال فقط</p>
                            </div>

                            {[...Array(4)].map((item) => {
                                return (
                                    <PackageAcc title={"عدد الموظفين 9 فأقل"} />
                                )
                            })}
                        </div>
                        <div className="bottom">
                            <Link to='/askforaservice'>
                                <div>{t('subsc.h1')}</div>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <Calculator/> */}
            </div></div>
        </>
    )
}

export default ServicesPackage