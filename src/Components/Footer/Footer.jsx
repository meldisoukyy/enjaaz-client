import { Link } from "react-router-dom";
import { useMyContext } from "../../context/MyContext";
import "./Footer.scss";
const Footer = () => {
  const { lang, setlang, t, i18n } = useMyContext();
  return (
    <div className="Footer">
      <div
        className="container"
        style={lang === "ar" ? { direction: "rtl" } : { direction: "ltr" }}
      >
        <div className="top">
          <h1>{t('footer.toph1')}</h1>
          <div className="footer-form">
            <input type="email" placeholder={t('footer.topemail')} />
            <div>{t('footer.topbtn')}</div>
          </div>
        </div>
        <div className="center">
          <div className="row d-flex ">
            <div className="part col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="image">
                <img src="/images/logo.png" alt="" />
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
                  <img src="/images/footer1.png" alt="" />
                </div>
                <span>{t('footer.address')}</span>
              </div>
              <div className="item">
                <div className="icon">
                  <img src="/images/footer2.png" alt="" />
                </div>
                <span>920013581 - 966502144449</span>
              </div>
              <div className="item">
                <div className="icon">
                  <img src="/images/footer3.png" alt="" />
                </div>
                <span>info@enjaaz.com.sa</span>
              </div>
              <div className="social">
                <div className="image">
                  <img src="/images/footer/FooterIcon-6.png" alt="" />
                </div>
                <div className="image">
                  <img src="/images/footer/FooterIcon.png" alt="" />
                </div>
                <div className="image">
                  <img src="/images/footer/FooterIcon-7.png" alt="" />
                </div>
                <div className="image">
                  <img src="/images/footer/FooterIcon-2.png" alt="" />
                </div>
                <div className="image">
                  <img src="/images/footer/FooterIcon-3.png" alt="" />
                </div>
                <div className="image">
                  <img src="/images/footer/FooterIcon-1.png" alt="" />
                </div>
                <div className="image">
                  <img src="/images/footer/FooterIcon-4.png" alt="" />
                </div>
                <div className="image">
                  <img src="/images/footer/FooterIcon-5.png" alt="" />
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
