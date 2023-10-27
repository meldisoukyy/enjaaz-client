import { Link } from "react-router-dom";
import { useMyContext } from "../../context/MyContext";
import "./Footer.scss";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SubscribersApi } from "../../Apis/Apis";
import Swal from "sweetalert2";
const Footer = () => {
  const { lang, setlang, t, i18n } = useMyContext();
  useEffect(() => {
    AOS.init();
  }, []);
  const [email, setemail] = useState('')
  const [error, seterror] = useState('')
  const [data, setdata] = useState([])
  function isEmailValid(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
  
  const handleSubmit=()=>{
    if (isEmailValid(email)) {

      SubscribersApi(email).then((res)=>{
        if (res.id) {
          // console.log(res);
          setdata(res)
          Swal.fire({
            title: lang === "ar" ? `تم الاشتراك بنجاح` : 'You have successfully subscribed',
            icon: 'success',
            timer: 2000,
            confirmButtonText: lang === "ar" ?'الرجوع':'Return'
        })
    
        }
        else{
          seterror('المشترك بهذا البريد الإلكتروني موجود بالفعل.')
        }
      })
      seterror('')
    } else {
      lang === "ar" ?seterror('أدخل بريد الكتروني صالح'):seterror('Enter a valid email')
    }
  }
  return (
    <div className="Footer" >
      <div
        className="container"
        data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'
        style={lang === "ar" ? { direction: "rtl" } : { direction: "ltr" }}
      >
        <div className="top">
          <h1>{t('footer.toph1')}</h1>
          <div className="footer-form">
            <span className="email">
            <input type="email2" placeholder={t('footer.topemail')} onChange={(e)=>setemail(e.target.value)} />
              {error!==''&&(
                <p className="text-danger pt-2">{error}</p>
              )}
            </span>
            <div onClick={()=>handleSubmit()}>{t('footer.topbtn')}</div>
          </div>
        </div>
        <div className="center">
          <div className="row d-flex ">
            <div className="part col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="image">
                <img loading="lazy" src="/images/logo.webp" alt="" />
              </div>
              <h1>{t('footer.bottomh1')}</h1>
              <p>{t('footer.bottomp1')}</p>
            </div>
            <div className="part col-lg-4 col-md-6 mb-4 mb-lg-0">
              <h1>{t('footer.bottomh2')}</h1>
              <ul>
                <Link to="/askforaservice">
                  <li>
                    {t('footer.ul1')}
                    <div className="arrow"></div>
                  </li>
                </Link>
                <Link to="/about">
                  <li>
                    {t('footer.ul2')}
                    <div className="arrow"></div>
                  </li>
                </Link>
                <Link to='/questions'>
                  <li>
                    {t('footer.ul3')}
                    <div className="arrow"></div>
                  </li>
                </Link>
                <Link to='/callus'>
                  <li>
                    {t('footer.ul4')}
                    <div className="arrow"></div>
                  </li>
                </Link>
                <Link to='/joinus'>
                  <li>
                    {t('footer.ul5')}
                    <div className="arrow"></div>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="part col-lg-4 col-md-6 mb-4 mb-lg-0">
              <h1>{t('footer.bottomh3')}</h1>
              <div className="item">
                <div className="icon">
                  <img loading="lazy" src="/images/footer1.webp" alt="" />
                </div>
                <span>{t('footer.address')}</span>
              </div>
              <div className="item">
                <div className="icon">
                  <img loading="lazy" src="/images/footer2.webp" alt="" />
                </div>
                <span>920013581 - 966502144449</span>
              </div>
              <div className="item">
                <div className="icon">
                  <img loading="lazy" src="/images/footer3.webp" alt="" />
                </div>
                <span>info@enjaaz.com.sa</span>
              </div>
              <div className="social">
                <div className="image">
                  <img loading="lazy" src="/images/footer/FooterIcon-6.webp" alt="" />
                </div>
                <div className="image">
                  <img loading="lazy" src="/images/footer/FooterIcon.webp" alt="" />
                </div>
                <div className="image">
                  <img loading="lazy" src="/images/footer/FooterIcon-7.webp" alt="" />
                </div>
                <div className="image">
                  <img loading="lazy" src="/images/footer/FooterIcon-2.webp" alt="" />
                </div>
                <div className="image">
                  <img loading="lazy" src="/images/footer/FooterIcon-3.webp" alt="" />
                </div>
                <div className="image">
                  <img loading="lazy" src="/images/footer/FooterIcon-1.webp" alt="" />
                </div>
                <div className="image">
                  <img loading="lazy" src="/images/footer/FooterIcon-4.webp" alt="" />
                </div>
                <div className="image">
                  <img loading="lazy" src="/images/footer/FooterIcon-5.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <p>{t('footer.bottomp5')}</p>
          <p>{t('footer.bottomp6')}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
