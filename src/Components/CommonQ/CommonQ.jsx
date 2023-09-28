import React from 'react'
import './CommonQ.scss'
import Accordion from 'react-bootstrap/Accordion';
const CommonQ = () => {
    return (
        <div className='CommonQ'>
            <div className="container">
                <div className="top">
                    <h1>الأسئلة الشائعة</h1>
                    <p>{`كل الاسئلة >>`}</p>
                </div>
                <div className="bottom">
                    <Accordion alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <p>
                                    ما هي أنواع المنشآت التي تقدم انجاز الخدمات لها؟
                                </p>
                            </Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    الشركات <br />
                                    المصانع <br />
                                    المؤسسات الخاصة والفردية <br />
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <p>
                                    هل تقدم إنجاز خدمات بإدارة الخدمات الإلكترونيّة لجميع المنصّات الحكوميّة؟
                                </p>
                            </Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    تقدم "إنجاز" جميع الخدمات الإلكترونية للمنشآت الإلكترونية حيث تمتلك فريق عمل ذو خبرة عالية،
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <p>
                                    هل لدى انجاز خدمات عقود شهرية أو سنوية؟
                                </p>
                            </Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    لدينا باقات خدمات متنوعة تتناسب مع أنواع واحتياجات المنشآت المختلفة ويمكنكم الاطلاع عليها واختيار المناسب منها، كما تشرفنا بتوقيع عدة عقود مع شركات ومؤسسات ونتشرف دائما بخدمتكم
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default CommonQ