import React from 'react'
import './BankAccounts.scss'
import CommonHead from '../../Components/CommonHead/CommonHead'
import { useMyContext } from '../../context/MyContext';
const BankAccounts = () => {
    const { lang, setlang, t, i18n } = useMyContext();

    return (
        <>
            <CommonHead title={t('nav.bank')} path={t('aboutus.path')} />
            <div className="BankAccounts">
                <div className="container">
                    <div className="bank-card">
                        <div className="image">
                            <img src="/images/شعار مصرف الراجحي .png" alt="" />
                        </div>
                        <div className="item">
                            <h5>شركة إنجاز الأعمال للخدمات التجارية</h5>
                        </div>
                        <div className="item">
                            <p>رقم الحساب: </p>
                            <span>681608010088777</span>
                        </div>
                        <div className="item">
                            <p>الآيبان: </p>
                            <span>SA0780000681608010088777</span>
                        </div>
                    </div>
                    <div className="bank-card">
                        <div className="image">
                            <img src="/images/شعار حساب البنك الأهلي.png" alt="" />
                        </div>
                        <div className="item">
                            <h5>شركة إنجاز الأعمال للخدمات التجارية</h5>
                        </div>
                        <div className="item">
                            <p>رقم الحساب: </p>
                            <span>11100374759506 </span>
                        </div>
                        <div className="item">
                            <p>الآيبان: </p>
                            <span>SA2110000011100374759506</span>
                        </div>
                    </div>
                </div>
                <div className="container justify-content-start">
                    <p className='pt-5 fs-5'><span className='text-danger fs-4 fw-bold'>تنوية: </span>الحسابات البنكية المشار إليها أعلاة هي الحسابات الخاصة بشركة إنجاز للخدمات فقط، نود أن نؤكد اننا غير مسئولين عن أي حسابات بنكية اخرى</p>
                </div>
            </div>
        </>
    )
}

export default BankAccounts