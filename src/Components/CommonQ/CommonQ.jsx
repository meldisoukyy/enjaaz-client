import React, { useEffect } from "react";
import "./CommonQ.scss";
import Accordion from "react-bootstrap/Accordion";
import { useMyContext } from "../../context/MyContext";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const CommonQ = ({ full }) => {
  const { lang, setlang, t, i18n } = useMyContext();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="CommonQ" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='200'>
      <div
        className="container"
        style={lang === "ar" ? { direction: "rtl" } : { direction: "ltr" }}
      >
        <div className="top">
          <h1 className="section-title">{t('cq.h1')}</h1>
          {!full && (
            <Link to="/questions">
              <p>{`${t('cq.p1')} >>`}</p>
            </Link>
          )}
        </div>
        {!full && (
          <div className="bottom" >
            <Accordion alwaysOpen>
              <Accordion.Item eventKey="0" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>
                <Accordion.Header>
                  <p>ما هي أنواع المنشآت التي تقدم انجاز الخدمات لها؟</p>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    الشركات <br />
                    المصانع <br />
                    المؤسسات الخاصة والفردية <br />
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>
                <Accordion.Header>
                  <p>
                    هل تقدم إنجاز خدمات بإدارة الخدمات الإلكترونيّة لجميع
                    المنصّات الحكوميّة؟
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    تقدم "إنجاز" جميع الخدمات الإلكترونية للمنشآت الإلكترونية
                    حيث تمتلك فريق عمل ذو خبرة عالية،
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>
                <Accordion.Header>
                  <p>هل لدى انجاز خدمات عقود شهرية أو سنوية؟</p>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    لدينا باقات خدمات متنوعة تتناسب مع أنواع واحتياجات المنشآت
                    المختلفة ويمكنكم الاطلاع عليها واختيار المناسب منها، كما
                    تشرفنا بتوقيع عدة عقود مع شركات ومؤسسات ونتشرف دائما بخدمتكم
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        )}
        {full && (
          <div className="bottom" >
            <Accordion alwaysOpen>
              {[...Array(7)].map((item, i) => {
                return (
                  <Accordion.Item eventKey={`${i}`} data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>
                    <Accordion.Header>
                      <p>هل لدى انجاز خدمات عقود شهرية أو سنوية؟</p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        لدينا باقات خدمات متنوعة تتناسب مع أنواع واحتياجات
                        المنشآت المختلفة ويمكنكم الاطلاع عليها واختيار المناسب
                        منها، كما تشرفنا بتوقيع عدة عقود مع شركات ومؤسسات ونتشرف
                        دائما بخدمتكم
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonQ;
