import React, { useEffect } from 'react'
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
                autoplayInterval={6000}
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
                        <h1>{t('SS.h1')}</h1>
                        <p>{t('SS.p1')}</p>
                        <Link to="/askforaservice"><span>{t('SS.btn')}</span></Link>
                    </div>
                </div>
                <div className="slide slide2">
                    <div className="container" style={lang === "ar" ? {direction: 'rtl'} : {direction: 'ltr'}}>
                        <h1>
                            {t('SS.h2')}
                        </h1>
                        <p>{t('SS.p2')}</p>
                        <Link to="/trymeservice"><span>{t('SS.btn')}</span></Link>
                    </div>
                </div>

            </Carousel ></div >
    )
}

export default SecondSlider