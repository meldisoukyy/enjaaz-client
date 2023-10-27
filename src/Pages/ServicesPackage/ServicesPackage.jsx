import React, { useEffect, useState } from 'react'
import './ServicesPackage.scss'
import CommonHead from '../../Components/CommonHead/CommonHead'
import PackageAcc from '../../Components/PackageAcc/PackageAcc'
import Calculator from '../../Components/Calculator/Calculator'
import { useMyContext } from '../../context/MyContext'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet, HelmetAr, ServiceManagemenApi } from '../../Apis/Apis'
const ServicesPackage = () => {
    const { lang, setlang, t, i18n } = useMyContext();
    lang==='ar'?HelmetAr('إدارة الخدمات'):
    Helmet('Services Managment')
    useEffect(() => {
        AOS.init();
    }, []);
    const [data, setdata] = useState([])
    useEffect(() => {
        ServiceManagemenApi().then((res) => { console.log(res); setdata(res) })
    }, []);
    const data1 = {
        "إصدار تأشيرات العمل (حسب ما يسمح به النظام)": "Work Visa Issuance (as allowed by the system)",
        "إصدار رخصة عمل": "Work Permit Issuance",
        "نقل خدمات عامل (نقل كفالة)": "Worker Service Transfer (Sponsorship Transfer)",
        "شهادة السعودة": "Saudi Citizenship Certificate",
        "تغيير المهنة": "Change of Profession",
        "خدمة لوائح تنظيم العمل": "Labor Regulations Service",
        "توثيق عقود العمل": "Authentication of Employment Contracts",
        "تحديث بيانات الموظفين": "Employee Data Update"
    }
    const data2 = {
        "حجز اسم تجاري": "Reservation of a Trade Name",
        "إصدار سجل تجاري لمؤسسة": "Issuance of a Commercial Register for an Establishment",
        "تعديل سجل تجاري لمؤسسة": "Modification of a Commercial Register for an Establishment",
        "شطب سجل تجاري لمؤسسة": "Cancellation of a Commercial Register for an Establishment",
        "نقل ملكية سجل تجاري": "Transfer of Ownership of a Commercial Register",
        "تأسيس الشركات": "Company Establishment",
        "تحويل المؤسسات إلى شركات والعكس": "Conversion of Establishments to Companies and Vice Versa",
        "إصدار التفاويض": "Issuance of Licenses",
        "توثيق التجارة الإلكترونية": "Authentication of Electronic Commerce",
        "إصدار تراخيص منشآت التعليم العام/الأهلي": "Issuance of Public/Private Education Facility Licenses",
        "إصدار الرخص الإعلامية": "Issuance of Media Licenses",
        "إصدار وكالة إلكترونية": "Issuance of Electronic Agency"
    };
    const data3 = {
        "إصدار إقامة": "Residence Permit Issuance",
        "تجديد إقامة": "Residence Permit Renewal",
        "إصدار تأشيرة خروج وعودة": "Exit and Re-entry Visa Issuance",
        "تمديد تأشيرة خروج وعودة": "Exit and Re-entry Visa Extension",
        "إصدار تأشيرة خروج نهائي": "Final Exit Visa Issuance",
        "نقل معلومات جواز سفر": "Passport Information Transfer",
        "تقرير مقيم": "Resident Report",
        "نقل معلومات جوازين": "Passport Information Transfer (Two Passports)",
        "تمديد صلاحية الجواز": "Passport Renewal",
        "خدمات التفاويض (إنشاء/قبول/إلغاء)": "Delegation Services (Creation/Acceptance/Cancellation)",
        "طلب توصيل الوثائق بالبريد": "Document Delivery Request"
    };
    const data4 = {
        "إصدار رخص البلدية": "Municipal License Issuance",
        "تجديد الرخص": "License Renewal",
        "إلغاء الرخص": "License Cancellation"
    };
    const data5 = { "التصديق على الطلبات والعقود": "Authentication of Requests and Contracts" }

    const data6 = {
        "تسجيل حساب للمنشأة": "Register Establishment Account",
        "تحديث بيانات المنشأة": "Update Establishment Information",
        "إصدار شهادة": "Issue Certificate",
        "التسجيل/إلغاء التسجيل في ضريبة القيمة المضافة": "Register/Cancel VAT Registration",
        "التسجيل في الضريبة الانتقائية": "Register Excise Tax",
        "التسجيل في ضريبة الدخل": "Register Income Tax",
        "تقديم إشعار عن إقامة فعالية داخل المملكة": "Submit Notice of Holding an Event Inside the Kingdom",
        "طلب تسجيل عقار (قبل الإفراغ)": "Request Property Registration (Pre-Occupancy)",
        "طلب الدفع بالتقسيط": "Request Payment in Installments",
        "تقديم/تعديل الإقرار الضريبي/الزكوي (بدون حسابات)": "Submit/Amend Tax/Zakat Declaration (Without Accounts)",
        "طلب استرداد أموال ضريبة القيمة المضافة": "Request VAT Refund",
        "إلغاء تسجيل فرع": "Deregister Branch",
        "إيقاف الرقم المميز": "Suspend VAT Number"
    }
    const data7 = {
        "إصدار ترخيص سلامة": "Safety License Issuance"
    };

    return (
        <>
            <CommonHead title={t('package1.h1')} path={t('package1.path')} />
            <div className='ServicesPackage' style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }} data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'><div className="container">
                <h1>{t('package1.h2')}</h1>
                <p>{t('package1.p')}</p>
                <h2 className='section-title3 text-center my-5'>{t('package1.h3')}</h2>
                <div className="packs">

                    <div className="pack " data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100">
                        <div className="top">
                            <div className="banner">
                                <h2>{lang === "ar" ? 'الباقة البرونزية' : 'Bronze package'}</h2>
                                {lang === "ar" ? (
                                    <>
                                        <p>بقيمة<span>3499</span>ريال فقط</p>
                                        <p className='instead'>بدلا من<span>3499</span></p>
                                    </>
                                ) : (
                                    <>
                                        <p>For only <span>$3499</span></p>
                                        <p className='instead'>Instead of <span>$3499</span></p>
                                    </>

                                )}
                            </div>
                            {lang === "ar" ? (
                                <>
                                    <PackageAcc title={"عدد الموظفين 4 فأقل"} />
                                    <PackageAcc title={"إدارة خدمات قوى"} data={Object.keys(data1)} />
                                    <PackageAcc title={"إدارة خدمات التأمينات الإجتماعية"} />
                                    <PackageAcc title={"إدارة خدمات وزارة التجارة"} data={Object.keys(data2)} />
                                    <PackageAcc title={"إدارة خدمات أبشر (مقيم)"} data={Object.keys(data3)} />
                                    <PackageAcc title={"إدارة خدمات بلدي"} data={Object.keys(data4)} />
                                    <PackageAcc title={"إدارة خدمات الغرفة التجارية"} data={Object.keys(data5)} />
                                    <PackageAcc title={"إدارة خدمات الزكاة والدخل"} data={Object.keys(data6)} />
                                    <PackageAcc title={"إدارة خدمات مكتب العمل"} />
                                    <PackageAcc title={"إدارة خدمات برامج الدعم"} />
                                    <PackageAcc title={"إدارة خدمات التأمين الطبي"} />
                                </>
                            ) : (
                                <>
                                    <PackageAcc title={"Number of Employees 4 or Less"} />
                                    <PackageAcc title={"Human Resources Management"} data={Object.values(data1)} />
                                    <PackageAcc title={"Social Security Services Management"} />
                                    <PackageAcc title={"Ministry of Commerce Services Management"} data={Object.values(data2)} />
                                    <PackageAcc title={"Absher Services (Resident)"} data={Object.values(data3)} />
                                    <PackageAcc title={"Municipality Services Management"} data={Object.values(data4)} />
                                    <PackageAcc title={"Chamber of Commerce Services Management"} data={Object.values(data5)} />
                                    <PackageAcc title={"Zakat and Income Services Management"} data={Object.values(data6)} />
                                    <PackageAcc title={"Labor Office Services Management"} />
                                    <PackageAcc title={"Support Programs Services Management"} />
                                    <PackageAcc title={"Medical Insurance Services Management"} />
                                </>
                            )}
                        </div>
                        <div className="bottom">
                            <Link to='/askforaservice'>
                                <div>{t('subsc.h1')}</div>
                            </Link>                        </div>
                    </div>

                    <div className="pack " data-aos="fade-in" data-aos-duration="2000" data-aos-delay='200'>
                        <div className="top">
                            <div className="banner">
                                <h2>{lang === "ar" ? 'الباقة الفضية' : 'Silver package'}</h2>
                                {lang === "ar" ? (
                                    <>
                                        <p>بقيمة<span>3499</span>ريال فقط</p>
                                        <p className='instead'>بدلا من<span>3499</span></p>
                                    </>
                                ) : (
                                    <>
                                        <p>For only <span>$3499</span></p>
                                        <p className='instead'>Instead of <span>$3499</span></p>
                                    </>

                                )}
                            </div>

                            {lang === "ar" ? (
                                <>
                                    <PackageAcc title={"عدد الموظفين 9 فأقل"} />
                                    <PackageAcc title={"إدارة خدمات قوى"} data={Object.keys(data1)} />
                                    <PackageAcc title={"إدارة خدمات التأمينات الإجتماعية"} />
                                    <PackageAcc title={"إدارة خدمات وزارة التجارة"} data={Object.keys(data2)} />
                                    <PackageAcc title={"إدارة خدمات أبشر أعمال - مقيم"} data={Object.keys(data3)} />
                                    <PackageAcc title={"إدارة خدمات بلدي"} data={Object.keys(data4)} />
                                    <PackageAcc title={"إدارة خدمات الغرفة التجارية"} data={Object.keys(data5)} />
                                    <PackageAcc title={"إدارة خدمات الزكاة والدخل"} data={Object.keys(data6)} />
                                    <PackageAcc title={"إدارة خدمات سلامة"} data={Object.keys(data7)} />
                                    <PackageAcc title={"إدارة خدمات التأمين الطبي"} />
                                    <PackageAcc title={"إدارة خدمات مكتب العمل"} />
                                    <PackageAcc title={"إدارة خدمات برامج الدعم"} />
                                </>
                            ) : (
                                <>
                                    <PackageAcc title={"Number of Employees 9 or Less"} />
                                    <PackageAcc title={"Human Resources Management"} data={Object.values(data1)} />
                                    <PackageAcc title={"Social Security Services Management"} />
                                    <PackageAcc title={"Ministry of Commerce Services Management"} data={Object.values(data2)} />
                                    <PackageAcc title={"Absher Business Services (Resident)"} data={Object.values(data3)} />
                                    <PackageAcc title={"Municipality Services Management"} data={Object.values(data4)} />
                                    <PackageAcc title={"Chamber of Commerce Services Management"} data={Object.values(data5)} />
                                    <PackageAcc title={"Zakat and Income Services Management"} data={Object.values(data6)} />
                                    <PackageAcc title={"Safety Services Management"} data={Object.values(data7)} />
                                    <PackageAcc title={"Medical Insurance Services Management"} />
                                    <PackageAcc title={"Labor Office Services Management"} />
                                    <PackageAcc title={"Support Programs Services Management"} />
                                </>
                            )}


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
                                <h2>{lang === "ar" ? 'الباقة الذهبية' : 'Golden package'}</h2>
                                {lang === "ar" ? (
                                    <>
                                        <p>بقيمة<span>3499</span>ريال فقط</p>
                                        <p className='instead'>بدلا من<span>3499</span></p>
                                    </>
                                ) : (
                                    <>
                                        <p>For only <span>$3499</span></p>
                                        <p className='instead'>Instead of <span>$3499</span></p>
                                    </>

                                )}
                            </div>
                            {lang === "ar" ? (
                                <>
                                    <PackageAcc title={"عدد الموظفين 9 فأقل"} />
                                    <PackageAcc title={"إدارة خدمات قوى"} data={Object.keys(data1)} />
                                    <PackageAcc title={"إدارة خدمات التأمينات الإجتماعية"} />
                                    <PackageAcc title={"إدارة خدمات وزارة التجارة"} data={Object.keys(data2)} />
                                    <PackageAcc title={"إدارة خدمات أبشر (مقيم)"} data={Object.keys(data3)} />
                                    <PackageAcc title={"إدارة خدمات بلدي"} />
                                    <PackageAcc title={"إدارة خدمات الغرفة التجارية"} data={Object.keys(data5)} />
                                    <PackageAcc title={"إدارة خدمات الزكاة والدخل"} data={Object.keys(data6)} />
                                    <PackageAcc title={"إدارة خدمات سلامة"} data={Object.keys(data7)} />
                                    <PackageAcc title={"إدارة خدمات التأمين الطبي"} />
                                    <PackageAcc title={"إدارة خد ات ناجز"} />
                                    <PackageAcc title={"إدارة خد ات نافد"} />
                                    <PackageAcc title={"اشتراك إدارة الرواتب وحماية الأجور"} />
                                    <PackageAcc title={"توثيق عقود العمل للموظفين"} />
                                    <PackageAcc title={"إدارة خدمات مكتب العمل"} />
                                    <PackageAcc title={"إدارة خدمات برامج الدعم"} />
                                </>
                            ) : (
                                <>
                                    <PackageAcc title={"Number of Employees 9 or Less"} />
                                    <PackageAcc title={"Human Resources Management"} data={Object.values(data1)} />
                                    <PackageAcc title={"Social Security Services Management"} />
                                    <PackageAcc title={"Ministry of Commerce Services Management"} data={Object.values(data2)} />
                                    <PackageAcc title={"Absher Business Services (Resident)"} data={Object.values(data3)} />
                                    <PackageAcc title={"Municipality Services Management"} />
                                    <PackageAcc title={"Chamber of Commerce Services Management"} data={Object.values(data5)} />
                                    <PackageAcc title={"Zakat and Income Services Management"} data={Object.values(data6)} />
                                    <PackageAcc title={"Safety Services Management"} data={Object.values(data7)} />
                                    <PackageAcc title={"Medical Insurance Services Management"} />
                                    <PackageAcc title={"Pending Services Management"} />
                                    <PackageAcc title={"Expired Services Management"} />
                                    <PackageAcc title={"Salary and Wage Protection Subscription"} />
                                    <PackageAcc title={"Documenting Employment Contracts for Employees"} />
                                    <PackageAcc title={"Labor Office Services Management"} />
                                    <PackageAcc title={"Support Programs Services Management"} />
                                </>
                            )}

                        </div>
                        <div className="bottom">
                            <Link to='/askforaservice'>
                                <div>{t('subsc.h1')}</div>
                            </Link>                        </div>
                    </div>
                    <div className="pack " data-aos="fade-in" data-aos-duration="2000" data-aos-delay='400'>
                        <div className="top">
                            <div className="banner">
                                <h2>{lang === "ar" ? 'الباقة الماسية' : 'Diamond package'}</h2>
                                {lang === "ar" ? (
                                    <>
                                        <p>بقيمة<span>3499</span>ريال فقط</p>
                                        <p className='instead'>بدلا من<span>3499</span></p>
                                    </>
                                ) : (
                                    <>
                                        <p>For only <span>$3499</span></p>
                                        <p className='instead'>Instead of <span>$3499</span></p>
                                    </>

                                )}
                            </div>
                            {lang === "ar" ? (
                                <>
                                    <PackageAcc title={"عدد الموظفين 9 فأقل"} />
                                    <PackageAcc title={"إدارة خدمات قوى"} data={Object.keys(data1)} />
                                    <PackageAcc title={"إدارة خدمات التأمينات الإجتماعية"} />
                                    <PackageAcc title={"إدارة خدمات وزارة التجارة"} data={Object.keys(data2)} />
                                    <PackageAcc title={"إدارة خدمات أبشر (مقيم)"} data={Object.keys(data3)} />
                                    <PackageAcc title={"إدارة خدم ات بلدي"} />
                                    <PackageAcc title={"إدارة خدمات الغرفة التجارية"} data={Object.keys(data5)} />
                                    <PackageAcc title={"إدارة خدمات الزكاة والدخل"} data={Object.keys(data6)} />
                                    <PackageAcc title={"إدارة خدمات سلامة"} data={Object.keys(data7)} />
                                    <PackageAcc title={"إدارة خدمات التأمين الطبي"} />
                                    <PackageAcc title={"إدارة خدمات مكتب العمل"} />
                                    <PackageAcc title={"إدارة خدمات برامج الدعم"} />
                                    <PackageAcc title={"إدارة خد ات ناجز"} />
                                    <PackageAcc title={"إدارة خد ات نافد"} />
                                    <PackageAcc title={"اشتراك إدارة الرواتب وحماية الأجور"} />
                                    <PackageAcc title={"توثيق عقود العمل للموظفين"} />
                                    <PackageAcc title={"تصميم موقع الكتروني"} />
                                    <PackageAcc title={"تصميم متجر الكتروني"} />
                                    <PackageAcc title={"تصميم لوقو احترافي"} />
                                    <PackageAcc title={"التسويق"} />
                                </>
                            ) : (
                                <>
                                    <PackageAcc title={"Number of Employees 9 or Less"} />
                                    <PackageAcc title={"Human Resources Management"} data={Object.values(data1)} />
                                    <PackageAcc title={"Social Security Services Management"} />
                                    <PackageAcc title={"Ministry of Commerce Services Management"} data={Object.values(data2)} />
                                    <PackageAcc title={"Absher Business Services (Resident)"} data={Object.values(data3)} />
                                    <PackageAcc title={"Municipality Services Management"} />
                                    <PackageAcc title={"Chamber of Commerce Services Management"} data={Object.values(data5)} />
                                    <PackageAcc title={"Zakat and Income Services Management"} data={Object.values(data6)} />
                                    <PackageAcc title={"Safety Services Management"} data={Object.values(data7)} />
                                    <PackageAcc title={"Medical Insurance Services Management"} />
                                    <PackageAcc title={"Pending Services Management"} />
                                    <PackageAcc title={"Expired Services Management"} />
                                    <PackageAcc title={"Salary and Wage Protection Subscription"} />
                                    <PackageAcc title={"Documenting Employment Contracts for Employees"} />
                                    <PackageAcc title={"Website Design"} />
                                    <PackageAcc title={"E-commerce Store Design"} />
                                    <PackageAcc title={"Professional Logo Design"} />
                                    <PackageAcc title={"Marketing"} />
                                </>
                            )}
                        </div>
                        <div className="bottom">
                            <Link to='/askforaservice'>
                                <div>{t('subsc.h1')}</div>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <Calculator/> */}
            </div></div >
        </>
    )
}

export default ServicesPackage