import { Link } from "react-router-dom";
import { useMyContext } from "../../context/MyContext";
import "./Footer.scss";
import { useEffect, useState } from "react";
import { SubscribersApi } from "../../Apis/Apis";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
// Import statements for images
import enjazzImage from "../../assets/images/logo.webp";
import footerIcon6 from "../../assets/images/footer/FooterIcon-6.webp";
import footerIcon from "../../assets/images/footer/FooterIcon.webp";
import footerIcon7 from "../../assets/images/footer/FooterIcon-7.webp";
import footerIcon2 from "../../assets/images/footer/FooterIcon-2.webp";
import footerIcon3 from "../../assets/images/footer/FooterIcon-3.webp";
import footerIcon1 from "../../assets/images/footer/FooterIcon-1.webp";
import footerIcon4 from "../../assets/images/footer/FooterIcon-4.webp";
import footerIcon5 from "../../assets/images/footer/FooterIcon-5.webp";
import enjazzImage2 from "../../assets/images/نضيف دي معهم كصورة فقط.webp";
import vatLogo from "../../assets/images/لوجو ضريبة القيمة المضافة يدوس علية يفتح صورة القيمة المضافة.webp";
import saudiBusinessCenterLogo from "../../assets/images/لوجو المركز السعودي للأعمال يدوس علية يفتح الصورة مباشرة.webp";
import footer1 from "../../assets/images/footer1.webp";
import footer2 from "../../assets/images/footer2.webp";
import footer3 from "../../assets/images/footer3.webp";
import vatImage from "../../assets/images/القيمة المضافة .webp";
import saudiBusinessCenterImage from "../../assets/images/المركز السعودي للأعمال أسفل الموقع.webp";
import paymentsImage from "../../assets/images/جنب صورة المدفوعات أسفل الموقع.webp";
const Footer = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [loading, setloading] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const { lang, setlang, t, i18n } = useMyContext();
  const [email, setemail] = useState("");
  const [error, seterror] = useState("");
  const [data, setdata] = useState([]);
  function isEmailValid(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  const handleSubmit = () => {
    if (isEmailValid(email)) {
      setloading(true)
      SubscribersApi(email).then((res) => {
        if (res.id) {
          setloading(false)
          // console.log(res);
          setdata(res);
          Swal.fire({
            title:
              lang === "ar"
                ? `تم الاشتراك بنجاح`
                : "You have successfully subscribed",
            icon: "success",
            timer: 2000,
            confirmButtonText: lang === "ar" ? "الرجوع" : "Return",
          });
        } else {
          setloading(false)

          seterror("المشترك بهذا البريد الإلكتروني موجود بالفعل.");
        }
      });
      seterror("");
    } else {
      lang === "ar"
        ? seterror("أدخل بريد الكتروني صالح")
        : seterror("Enter a valid email");
    }
  };
  return (
    <div className="Footer">
      <div
        className="container"
        style={lang === "ar" ? { direction: "rtl",position:'relative' } : { direction: "ltr",position:'relative' }}
      >
        <div className="top">
          <h1>{t("footer.toph1")}</h1>
          <div className="footer-form">
            <span className="email">
              <input
                type="email"
                required
                placeholder={t("footer.topemail")}
                onChange={(e) => setemail(e.target.value)}
              />
              {error !== "" && <p className="text-danger pt-2">{error}</p>}
            </span>
            <div className="loaderBtnCont" onClick={() => handleSubmit()}>{t("footer.topbtn")}
            {loading&&(
              <span class="loaderBtn"></span>
            )}
            </div>
          </div>
        </div>
        <div className="center">
          <div className="row d-flex ">
            <div className="part col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="image">
                <img loading="lazy" alt="Enjazz_image"  src={enjazzImage} />
              </div>
              <h1>{t("footer.bottomh1")}</h1>
              <p style={{ textAlign: 'unset' }}>{t("footer.bottomp1")}</p>
              <div className="social">
                <a href="https://wa.me/+966502144449">
                  <div className="image">
                    <img loading="lazy" alt="Enjazz_image"
                      
                      src={footerIcon6}
                     
                    />
                  </div>
                </a>
                <a href="https://www.facebook.com/Enjaaz.2/">
                  <div className="image">
                    <img loading="lazy" alt="Enjazz_image"
                      
                      src={footerIcon}
                     
                    />
                  </div>
                </a>
                <a href="https://www.instagram.com/enjaaz.2/">
                  <div className="image">
                    <img loading="lazy" alt="Enjazz_image"
                      
                      src={footerIcon7}
                     
                    />
                  </div>
                </a>
                <a href="https://www.youtube.com/@Enjaaz_2">
                  <div className="image">
                    <img loading="lazy" alt="Enjazz_image"
                      
                      src={footerIcon2}
                     
                    />
                  </div>
                </a>
                <div className="image">
                  <img loading="lazy" alt="Enjazz_image"
                    
                    src={footerIcon3}
                   
                  />
                </div>
                <a href="https://www.snapchat.com/add/https://www.snapchat.com/add/enjaaz.2?share_id=vUU1nSI8BE4&locale=ar-EG">
                  <div className="image">
                    <img loading="lazy" alt="Enjazz_image"
                      
                      src={footerIcon1}
                     
                    />
                  </div>
                </a>
                <a href="https://twitter.com/Enjaaz_2">
                  <div className="image">
                    <img loading="lazy" alt="Enjazz_image"
                      
                      src={footerIcon4}
                     
                    />
                  </div>
                </a>
                <a href="https://www.tiktok.com/@enjaaz_2">
                  <div className="image">
                    <img loading="lazy" alt="Enjazz_image"
                      
                      src={footerIcon5}
                     
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="part col-lg-2 col-6 mb-4 mb-lg-0">
              <h1>{t("footer.bottomh2")}</h1>
              <ul>
                <li>
                  <a href="https://calendly.com/enjaaz/45" target="_blank">
                    <div className="arrow"></div>
                    {t("footer.ul6")}
                  </a>
                </li>
                <Link to="/joinus">
                  <li>
                    <div className="arrow"></div>
                    {t("footer.ul5")}
                  </li>
                </Link>
                <li>
                  <a href="https://enjaaz.sa/" target="_blank">
                    <div className="arrow"></div>
                    {t("footer.ul7")}
                  </a>
                </li>
                <Link to="/askforaservice">
                  <li>
                    <div className="arrow"></div>
                    {t("footer.ul1")}
                  </li>
                </Link>
                <li>
                  <a href="https://enjaz02.com/" target="_blank">
                    <div className="arrow"></div>
                    {t("footer.ul8")}
                  </a>
                </li>
              </ul>
              <h1>{t("footer.bottomh4")}</h1>
              <ul>
                <Link to="/servicespackage">
                  <li>
                    <div className="arrow"></div>
                    {t("packages.btn1")}
                  </li>
                </Link>
                <Link to="/wagemanagment">
                  <li>
                    <div className="arrow"></div>
                    {t("packages.btn2")}
                  </li>
                </Link>
                <Link to="/designservices">
                  <li>
                    <div className="arrow"></div>
                    {t("packages.btn3")}
                  </li>
                </Link>
              </ul>
            </div>
            <div className="part col-lg-2 col-6 mb-4 mb-lg-0">
              <h1>{t("footer.bottomh5")}</h1>
              <ul>
                <Link to="/company-policy">
                  <li>
                    <div className="arrow"></div>
                    {t("footer.ul9")}
                  </li>
                </Link>
                <Link to="/terms-and-conditions">
                  <li>
                    <div className="arrow"></div>
                    {t("footer.ul10")}
                  </li>
                </Link>
                <Link to="/copyrights">
                  <li>
                    <div className="arrow"></div>
                    {t("footer.ul11")}
                  </li>
                </Link>
                <Link to="/service-guide">
                  <li>
                    <div className="arrow"></div>
                    {t("nav.guide")}
                  </li>
                </Link>
                <Link to="/questions">
                  <li>
                    <div className="arrow"></div>
                    {t("footer.ul3")}
                  </li>
                </Link>
                <Link to="/about">
                  <li>
                    <div className="arrow"></div>
                    {t("footer.ul2")}
                  </li>
                </Link>
              </ul>
            </div>
            <div className="part col-lg-4 col-md-6 mb-4 mb-lg-0">
              <h1>{t("footer.bottomh6")}</h1>
              <div className="images">
                <div className="image">
                  <img loading="lazy" alt="Enjazz_image"
                    src={enjazzImage2}
                   
                  />
                </div>
                <div className="image" onClick={handleShow}>
                  <img loading="lazy" alt="Enjazz_image"
                    src={vatLogo}
                   
                  />
                </div>
                <div className="image" onClick={handleShow2} style={{ scale: "1.3" }}>
                  <img loading="lazy" alt="Enjazz_image"
                    src={saudiBusinessCenterLogo}
                   
                  />
                </div>
              </div>
              <h1>{t("footer.bottomh3")}</h1>
              <div className="item">
                <div className="icon">
                  <img loading="lazy" alt="Enjazz_image"  src={footer1} />
                </div>
                <span>{t("footer.address")}</span>
              </div>
              <div className="item">
                <div className="icon">
                  <img loading="lazy" alt="Enjazz_image"  src={footer2} />
                </div>
                <span>920013581 - 966502144449</span>
              </div>
              <div className="item">
                <div className="icon">
                  <img loading="lazy" alt="Enjazz_image"  src={footer3} />
                </div>
                <span>info@enjaaz.com.sa</span>
              </div>
            </div>
            <Modal
              show={show}
              size="lg"
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <img loading="lazy" alt="Enjazz_image"
                  src={vatImage}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    // filter: "saturate(0.1)"
                  }}
                 
                />
              </Modal.Body>
            </Modal>
            <Modal
              show={show2}
              size="lg"
              onHide={handleClose2}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <img loading="lazy" alt="Enjazz_image"
                  src={saudiBusinessCenterImage}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                 
                />
              </Modal.Body>
            </Modal>
          </div>
        </div>

        <div className="bottom">
          <div className="top">
            <p>{t("footer.bottomp5")}</p>
            <div className="payments">
              {/* style={{ scale: '1.9', margin: '0 25px 0 25px' }} */}
              <img loading="lazy" alt="Enjazz_image"  style={{ width: '120px', height: '50px' }} src={paymentsImage} />
              <img loading="lazy" alt="Enjazz_image"  src="https://aait.sa/public/site/img/icons/certificate.webp" style={{ height: "40px" }} />
              <img loading="lazy" alt="Enjazz_image"  src="https://aait.sa/public/site/img/icons/mada.webp" />
              <img loading="lazy" alt="Enjazz_image"  src="https://aait.sa/public/site/img/icons/visa.webp" />
              <img loading="lazy" alt="Enjazz_image"  src="https://aait.sa/public/site/img/icons/mastercard.webp" />
            </div>
          </div>
          <p>{t("footer.bottomp6")}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
