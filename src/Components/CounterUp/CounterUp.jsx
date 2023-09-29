import React, { useEffect, useRef, useState } from 'react'
import './CounterUp.scss'
import CountUp from 'react-countup';
const CounterUp = () => {
    const [scrolledToSection, setScrolledToSection] = useState(false);
    const scrolled = useRef()
    const handleScroll = () => {

        if (scrolled.current) {
            const sectionTop = scrolled.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight) {
                setScrolledToSection(true);
            } else {
                setScrolledToSection(false);
            }
        }
    };

    // Add an event listener for scroll events when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='CounterUp' >
            <div className="container">
                <div className="row">
                    <div ref={scrolled} className="col-lg-3 col-md-6 d-flex flex-column gap-3 justify-content-center align-items-center mt-4">
                        <div className="image">
                            <img src="/images/count1.png" alt="" />
                        </div>
                        <h1>
                            {scrolledToSection && (

                                <CountUp
                                    start={0}
                                    end={500}
                                    duration={5}
                                />
                            )}
                            +</h1>
                        <p>خدمة</p>
                        <span>اكثر من 500 خدمة للمنشأت</span>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex flex-column gap-3 justify-content-center align-items-center mt-4">
                        <div className="image">
                            <img src="/images/count2.png" alt="" />
                        </div>
                        <h1>{scrolledToSection && (

                            <CountUp
                                start={0}
                                end={2263}
                                duration={5}
                            />
                        )}+</h1>
                        <p>الاستشارات</p>
                        <span>اكثر من 2263+</span>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex flex-column gap-3 justify-content-center align-items-center mt-4">
                        <div className="image">
                            <img src="/images/count3.png" alt="" />
                        </div>
                        <h1>{scrolledToSection && (

                            <CountUp
                                start={0}
                                end={4952}
                                duration={5}
                            />
                        )}+</h1>
                        <p>تقييمات إيجابية</p>
                        <span>تقيمات نعتز بها</span>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex flex-column gap-3 justify-content-center align-items-center mt-4">
                        <div className="image">
                            <img src="/images/count4.png" alt="" />
                        </div>
                        <h1>{scrolledToSection && (

                            <CountUp
                                start={0}
                                end={7542}
                                duration={5}
                            />
                        )}+</h1>
                        <p>عدد العملاء</p>
                        <span>العملاء المهتمين</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterUp