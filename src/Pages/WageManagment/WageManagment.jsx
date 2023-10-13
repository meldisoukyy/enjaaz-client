import React from 'react'
import './WageManagment.scss'
import CommonHead from '../../Components/CommonHead/CommonHead'
import { useMyContext } from '../../context/MyContext';
import { Link } from 'react-router-dom';
const WageManagment = () => {
    const { lang, setlang, t, i18n } = useMyContext();

    return (
        <>
            <CommonHead title={t('package2.h1')} path={t('package2.path')} />
            <div className='WageManagment' style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }}><div className="container">
                <h1>{t('package2.h2')}</h1>
                <p>{t('package2.p')}</p>
                <h2 className='section-title text-center my-5'>{t('package2.h3')}</h2>
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
                                        <div>{t('subsc.h1')}</div>
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