import React from 'react'
import Carousel from 'nuka-carousel';
import './SecondSlider.scss'
import { Link } from 'react-router-dom';
import { useMyContext } from '../../context/MyContext';

const SecondSlider = () => {
    const { lang, setlang, t, i18n } = useMyContext();

    return (
        <div className='SecondSlider'>
            <Carousel
                wrapAround={true}
                slidesToShow={1}
                animation={'fade'}
                speed={1000}
                pauseOnHover={true}
                dragging={true}
                autoplay={true}
                autoplayInterval={3000}
                renderCenterLeftControls={({ previousSlide }) => (
                    <div className='arrow' onClick={previousSlide}>
                        {/* <AiOutlineArrowLeft/> */}
                    </div>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <div className='arrow' onClick={nextSlide}>
                        {/* <AiOutlineArrowRight/> */}
                    </div>
                )}
            >
                <div className="slide slide1">
                    <div className="container" style={lang === "ar" ? {direction: 'rtl'} : {direction: 'ltr'}}>
                        <h1>
                            يمكنك طلب استشارة مجانية
                        </h1>
                        <p>نوفر لمنشأتكم خدمة استشارات الأعمال وذلك بهدف التوجيه ووضع سير إدارة المنشأة على الطريق الصحيح مما يدعم نمو نشاطك في بيئة عمل متزنة وهادئة . <a href='https://github.com/ahmed24666' target='_blank'><span>اطلب الآن</span></a></p>

                    </div>
                </div>
                <div className="slide slide2">
                    <div className="container" style={lang === "ar" ? {direction: 'rtl'} : {direction: 'ltr'}}>
                        <h1>
                            يمكنك طلب استشارة مجانية
                        </h1>
                        <p>نوفر لمنشأتكم خدمة استشارات الأعمال وذلك بهدف التوجيه ووضع سير إدارة المنشأة على الطريق الصحيح مما يدعم نمو نشاطك في بيئة عمل متزنة وهادئة . <a href='https://github.com/ahmed24666' target='_blank'><span>اطلب الآن</span></a></p>
                    </div>
                </div>

            </Carousel ></div >
    )
}

export default SecondSlider