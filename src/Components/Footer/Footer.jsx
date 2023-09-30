import './Footer.scss'
const Footer = () => {
  return (
    <div className='Footer'>
      <div className="container">
        <div className="top">
          <h1>اشترك في النشرة الإخبارية</h1>
          <div className="footer-form">
            <input type="email" placeholder="البريد الإلكتروني" />
            <div>اشترك الآن</div>
          </div>
        </div>
        <div className="center">
          <div className="row d-flex ">
            <div className="part col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="image">
                <img src="/images/logo.png" alt="" />
              </div>
              <h1>شركة إنجاز للخدمات</h1>
              <p>مع أكثر الكوادر تميّزاً نبتكر الأفكار ونلفت الأنظار، وذلك تقديم خدمة مهنية مبهرة تتمتع بجودة عالمية، كي نمنح الفرصة لعملائنا بالنمو والتطور والتفرّد بالأداء في عالم الأعمال.</p>
            </div>
            <div className="part col-lg-4 col-md-6 mb-4 mb-lg-0">
              <h1>روابط هامة</h1>
              <ul>
                <li>
                   طلب خدمة
                  <div className="arrow"></div>
                </li>
                <li>
                   من نحن؟
                  <div className="arrow"></div>
                  </li>
                <li>
                   الأسئلة الشائعة
                  <div className="arrow"></div>
                  </li>
                <li>
                   اتصل بنا
                  <div className="arrow"></div>
                  </li>
                <li>
                   انضم إلينا
                  <div className="arrow"></div>
                  </li>
              </ul>
            </div>
            <div className="part col-lg-4 col-md-6 mb-4 mb-lg-0">
              <h1>اتصل بنا</h1>
              <div className="item">
                <div className="icon">
                  <img src="/images/footer1.png" alt="" />
                </div>
                <span>المركز الرئيسي - الرياض - طريق الدائري الشمالي</span>
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
          <p>شركة إنجاز للخدمات شركة موثقة برقم ضريبي: 300629475600003</p>
          <p>جميع الحقوق محفوظة لشركة إنجاز للخدمات 2023 ©</p>
        </div>
      </div>
    </div>
  )
}

export default Footer