import React from 'react'
import './Different.scss'
const Different = () => {
    return (
        <div className='Different'>
            <h2 className="section-title text-center mb-5">لماذا انجاز</h2>

            <div className="container">
                <div className="row">
                    <div className="Diffcard col-lg-3 col-md-6 col-12">
                        <div className="image">
                            <img src="/images/1st1st.png" alt="" />
                        </div>
                        <h2>تجربة واعية</h2>
                        <p>9 سنوات من الخبرة، امتلكنا خلالها الخبرة العميقة ومئات التجارب الناجحة ونمنح عملائنا وعياً وفهماً لتفاصيل مجالنا.</p>
                    </div>
                    <div className="Diffcard col-lg-3 col-md-6 col-12">
                        <div className="image">
                            <img src="/images/2st2st.png" alt="" />
                        </div>
                        <h2>تفرد مخصص</h2>
                        <p>أنت لديك احتياجات فريدة، ونحن نلتزم بتقديم حلول مخصصة تناسب احتياجاتك تماماً.</p>
                    </div>
                    <div className="Diffcard col-lg-3 col-md-6 col-12">
                        <div className="image">
                            <img src="/images/3333.png" alt="" />
                        </div>
                        <h2>تميز الجودة</h2>
                        <p>نحن ملتزمون بتقديم أعلى مستويات الجودة في كل جانب من جوانب خدماتنا المتنوعة.</p>
                    </div>
                    <div className="Diffcard col-lg-3 col-md-6 col-12">
                        <div className="image">
                            <img src="/images/4444.png" alt="" />
                        </div>
                        <h2>شراكة طويلة الأمد</h2>
                        <p>نؤمن بأن علاقتنا معك ليست مجرد تعامل بل شراكة حتى تحقيق النجاح المشترك.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Different