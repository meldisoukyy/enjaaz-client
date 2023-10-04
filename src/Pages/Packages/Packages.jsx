import React from 'react'
import './Packages.scss'
import CommonHead from '../../Components/CommonHead/CommonHead'
import CommonQ from '../../Components/CommonQ/CommonQ'
import { Link } from 'react-router-dom'

const Packages = () => {
    return (
        <>
            <CommonHead title="الباقات" path="الصفحة الرئيسية \" />
            <div className='Packages'>
                <div className="container">
                    <h1>باقات إنجاز</h1>
                    <p>نُقدر احتياج العملاء بحسب حجم شركاتهم، لذا نقدم أسعاراً تناسب تلبية الاحتياج بأعلى الإمكانات وبجودة عالمية.</p>
                    <h1 className='text-center py-5'>مجموعات باقات الخدمات الإلكترونية المتاحة لجمهور العملاء</h1>
                    <div className="packs">
                        <div className="pack ">
                            <div className="top">
                                <div className="image">
                                    <img src="/images/packages/1.png" alt="" />
                                </div>
                                <p>لدينا درجات مختلفة تصنف الخدمة المتعلقة بالاحتياج المتخصص، وتهدف لتقديم أفضل خدمة للمتخصص.</p>
                            </div>
                            <Link to='/servicespackage'>
                                <div className="btn">باقة إدارة الخدمات</div>
                            </Link>
                        </div>
                        <div className="pack">
                            <div className="top">
                                <div className="image">
                                    <img src="/images/packages/2.png" alt="" />
                                </div>
                                <p>وهي باقة متخصصة في تقديم حلاً متكاملاً لإدارة الرواتب والمزايا للشركات، مما يساعدها على تحقيق كفاءة أعلى وتركيز أفضل على نمو أعمالها.</p>
                            </div>
                            <div className="btn">باقة إدارة الأجور</div>
                        </div>
                        <div className="pack">
                            <div className="top">
                                <div className="image">
                                    <img src="/images/packages/3.png" alt="" />
                                </div>
                                <p>تحتاج الشركات بشكل حاسم إلى الخدمات القانونية بمختلف أشكالها نظرًا للتعقيدات المتزايدة في البيئة التشريعية والتنظيمية.</p>
                            </div>
                            <div className="btn">باقة الخدمات القانونية</div>
                        </div>
                        <div className="pack">
                            <div className="top">
                                <div className="image">
                                    <img src="/images/packages/4.png" alt="" />
                                </div>
                                <p>تهدف هذه الخدمة من تعزيز الهوية الفريدة التي تميز الشركة عن منافسيها في السوق، فهي تلعب دورًا حاسمًا في بناء الثقة والولاء لدى العملاء، وزيادة الوعي بالشركة، وتحقيق النجاح في السوق.</p>
                            </div>
                            <div className="btn">باقة خدمات التصميم</div>
                        </div>
                        <div className="pack">
                            <div className="top">
                                <div className="image">
                                    <img src="/images/packages/5.png" alt="" />
                                </div>
                                <p>خدمات التسويق تشمل مجموعة من الأنشطة والاستراتيجيات التي تهدف إلى تعزيز منتجات أو خدمات أو علامات تجارية معينة وزيادة وعي الجمهور بها.</p>
                            </div>
                            <div className="btn">باقة خدمات التسويق</div>
                        </div>
                    </div>
                </div>
            </div>
            <CommonQ/>
        </>
    )
}

export default Packages