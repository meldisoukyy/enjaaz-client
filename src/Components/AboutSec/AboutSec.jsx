import React, { useEffect, useState } from 'react'
import './AboutSec.scss'
import { useMyContext } from '../../context/MyContext';

import Modal from "react-bootstrap/Modal";
import webp2 from "../../assets/images/2.webp"
import play from "../../assets/images/play-button.webp"


const AboutSec = () => {
  const { lang, setlang, t, i18n } = useMyContext();
  const [selectedVision, setselectedVision] = useState(1)


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='AboutSec'>
      <div className="container" style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }}>
        {/* <h1 className='section-title3' data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>{t('aboutus.h2')}</h1> */}
        <div className="switch" >
                        <p className="mapL" style={selectedVision === 1 ? { color: '#0fa9f0' } : {}} onClick={() => setselectedVision(1)}>
                        {t('aboutus.h2')}
                            <div className="line" style={selectedVision === 1 ? { width: '100%' } : { width: '0%' }}>
                            </div>
                        </p>
                        <p className="mapL" style={selectedVision === 2 ? { color: '#0fa9f0' } : {}} onClick={() => setselectedVision(2)}>
                        {t('aboutus.h3')}
                            <div className="line" style={selectedVision === 2 ? { width: '100%' } : { width: '0%' }}>
                            </div>
                        </p>
                        <p className="mapL" style={selectedVision === 3 ? { color: '#0fa9f0' } : {}} onClick={() => setselectedVision(3)}>
                        {t('aboutus.h4')}
                            <div className="line" style={selectedVision === 3 ? { width: '100%' } : { width: '0%' }}>
                            </div>
                        </p>
                    </div>
                    {selectedVision===1&&(
                    <>
        <div className='image'>
          <img loading="lazy" alt="Enjazz_image"  src={webp2} />
          <div className="play" onClick={handleShow}>

            <img loading="lazy" alt="Enjazz_image"  src={play} />
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
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/LlxxMIuIWBI" frameborder="0" allowfullscreen></iframe>              </Modal.Body>
        </Modal>
        <p >{t('aboutus.p1')}</p>
                    </>
                    )}
        
        {/* <h1 className='section-title3' data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>{t('aboutus.h3')}</h1> */}
        {selectedVision===2&&(
        <p >{t('aboutus.p2')}</p>
        )}
        {/* <h1 className='section-title3' data-aos="fade-in" data-aos-duration="2000" data-aos-delay='100'>{t('aboutus.h4')}</h1> */}
        {selectedVision===3&&(
        <p>{t('aboutus.p3')}</p>
        )}
      </div>
    </div>
  )
}

export default AboutSec