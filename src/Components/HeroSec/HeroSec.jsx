import React from 'react'
import './HeroSec.scss'
import Carousel from 'nuka-carousel'; import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const HeroSec = () => {

    return (
        <div className='HeroSec'>
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
                    <div className="container">
                        <h1>شركة إنجاز للخدمات</h1>
                        <p>رواد ذوو خبرة في عالم الأعمال حيث نقدم حلول سريعة ومتكاملة</p>
                        <div className="buttons">
                            <Link to='/shop'>
                                <div className="button button1">استشارة مجانية</div>
                            </Link>
                            <Link to='/shop'>
                                <div className="button button2">طلب خدمة</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="slide slide2">
                    <div className="container">
                        <h1>شركة إنجاز للخدمات</h1>
                        <p>رواد ذوو خبرة في عالم الأعمال حيث نقدم حلول سريعة ومتكاملة</p>
                        <div className="buttons">
                            <Link to='/shop'>
                                <div className="button button1">استشارة مجانية</div>
                            </Link>
                            <Link to='/shop'>
                                <div className="button button2">طلب خدمة</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="slide slide3">
                    <div className="container">
                        <h1>شركة إنجاز للخدمات</h1>
                        <p>رواد ذوو خبرة في عالم الأعمال حيث نقدم حلول سريعة ومتكاملة</p>
                        <div className="buttons">
                            <Link to='/shop'>
                                <div className="button button1">استشارة مجانية</div>
                            </Link>
                            <Link to='/shop'>
                                <div className="button button2">طلب خدمة</div>
                            </Link>
                        </div>
                    </div>
                </div>

            </Carousel>
        </div>
    )
}

export default HeroSec