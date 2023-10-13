import Carousel from 'nuka-carousel'
import React, { useEffect, useState } from 'react'
import './Reviews.scss'
import { Link } from 'react-router-dom'
import { AiFillStar, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { useMyContext } from '../../context/MyContext';
const Reviews = () => {
    const [num, setNum] = useState(3);
    const { lang, setlang, t, i18n } = useMyContext();
    useEffect(() => {
      const screenWidth = window.innerWidth;
  
      if (screenWidth <= 767) {
        setNum(1);
      } else if (screenWidth <= 992) {
        setNum(2);
      } else {
        setNum(3);
      }
  
      // Add a listener to update num on window resize
      const handleResize = () => {
        const newScreenWidth = window.innerWidth;
        if (newScreenWidth <= 767) {
          setNum(1);
        } else if (newScreenWidth <= 992) {
          setNum(2);
        } else {
          setNum(3);
        }
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  return (
    <div className='Reviews'>
        <div className="container" >
        <h1 className='secH' style={lang === "ar" ? {direction: 'rtl'} : {direction: 'ltr'}}>{t('reviews.h1')}</h1>

        <Carousel
                wrapAround={true}
                slidesToShow={num}
                animation={'fade'}
                speed={1000}
                pauseOnHover={true}
                dragging={true}
                autoplay={true}
                autoplayInterval={3000}
                renderCenterLeftControls={({ previousSlide }) => (
                    <div className='arrow'  onClick={previousSlide}>
                        {/* <AiOutlineArrowLeft/> */}
                    </div>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <div className='arrow' onClick={nextSlide}>
                        {/* <AiOutlineArrowRight/> */}
                    </div>
                )}
            >
                {[...Array(7)].map((item)=>{
                    return(
                        <div className="slide">
                            <div className="image">
                                <img src="/images/wired-outline-21-avatar.webp" alt="" />
                            </div>
                            <div className="stars">
                                <div className="star"><AiFillStar/></div>
                                <div className="star"><AiFillStar/></div>
                                <div className="star"><AiFillStar/></div>
                                <div className="star"><AiFillStar/></div>
                                <div className="star"><AiFillStar/></div>
                            </div>
                            <p>تقدم "إنجاز" جميع الخدمات الإلكترونية للمنشآت الإلكترونية حيث تمتلك فريق عمل ذو خبرة عالية،</p>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    </div>
  )
}

export default Reviews