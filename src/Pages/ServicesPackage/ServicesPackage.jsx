import React, { useEffect, useState } from 'react'
import './ServicesPackage.scss'
import CommonHead from '../../Components/CommonHead/CommonHead'
import PackageAcc from '../../Components/PackageAcc/PackageAcc'
import Calculator from '../../Components/Calculator/Calculator'
import { useMyContext } from '../../context/MyContext'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { ServiceManagemenApi } from '../../Apis/Apis'
const ServicesPackage = () => {
    const { lang, setlang, t, i18n } = useMyContext();
    useEffect(() => {
        AOS.init();
      }, []);
    //   const [data, setdata] = useState([])
    // useEffect(() => {
    //     ServiceManagemenApi().then((res)=>{console.log(res);setdata(res)})
    //   }, []);
    return (
        <>
            <CommonHead title={t('package1.h1')} path={t('package1.path')} />
            <div className='ServicesPackage' style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }} data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'><div className="container">
                <h1>{t('package1.h2')}</h1>
                <p>{t('package1.p')}</p>
                <h2 className='section-title text-center my-5'>{t('package1.h3')}</h2>
                <div className="packs">
                    <div className="pack " data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>
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
                    <div className="pack " data-aos="fade-in" data-aos-duration="2000" data-aos-delay='200'>
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
                    <div className="pack " data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
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
                    <div className="pack " data-aos="fade-in" data-aos-duration="2000" data-aos-delay='400'>
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