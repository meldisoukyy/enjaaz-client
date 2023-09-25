import React, { useState } from 'react'
import './navbar.scss'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineClose } from 'react-icons/ai';
const Navbar = () => {
    const [isOpened, setIsOpened] = useState(false);

    const toggleMenu = () => {
        setIsOpened((prevIsOpened) => !prevIsOpened);
    };
    const handleClose = () => setIsOpened(false);
    const handleShow = () => setIsOpened(true);
    return (
        <div className='Navbar pt-5'>
            <div className="container">
                <div className="top d-flex justify-content-between align-items-end  pb-3">
                    <div className="image">
                        <img src="/images/logo.png" alt="" />
                    </div>
                    <p className='mb-0'>العربية</p>
                </div>
                <div className="bottom" onClick={handleShow} >
                    <ul className="links">
                        <li>الصفحة الرئيسية</li>
                        <li>نبذة عنا</li>
                        <li>خدمة جربني</li>
                        <li>دليل الخدمات</li>
                        <li>اتصل بنا</li>
                        <li>الباقات</li>
                        <li>الأسئلة الشائعة</li>
                        <li>انضم إلينا</li>
                        <li>العروض</li>
                    </ul>
                    <div className="numbers">
                        <div className="num">
                            <div className="icon">
                                <img src="../../../public/images/phoneNav.png" alt="" />
                            </div>
                            <p>0112634168</p>
                        </div>
                        <div className="num">
                            <div className="icon">
                                <img src="../../../public/images/whatsappnav.png" alt="" />
                            </div>
                            <p>+966502144449</p>
                        </div>
                    </div>
                    <button
                        className={`menu ${isOpened ? 'opened' : ''}`}
                        onClick={toggleMenu}
                        aria-expanded={isOpened}
                        aria-label="Main Menu"
                    >
                        <svg width="100" height="100" viewBox="0 0 100 100">
                            <path
                                className="line line1"
                                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                            />
                            <path className="line line2" d="M 20,50 H 80" />
                            <path
                                className="line line3"
                                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                            />
                        </svg>
                    </button>
                </div>
                <Offcanvas show={isOpened} onHide={handleClose} placement='end'>
                    <Offcanvas.Header >
                        <div className="image">
                            <img src="/images/logo.png" alt="" />
                        </div>
                        <div className="closeBtn" >
                            <button
                                className={`menu ${isOpened ? 'opened' : ''}`}
                                onClick={toggleMenu}
                                aria-expanded={isOpened}
                                aria-label="Main Menu"
                            >
                                <svg width="100" height="100" viewBox="0 0 100 100">
                                    <path
                                        className="line line1"
                                        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                                    />
                                    <path className="line line2" d="M 20,50 H 80" />
                                    <path
                                        className="line line3"
                                        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                                    />
                                </svg>
                            </button>
                        </div>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul className="sideLinks">
                            <li>الصفحة الرئيسية</li>
                            <li>نبذة عنا</li>
                            <li>خدمة جربني</li>
                            <li>دليل الخدمات</li>
                            <li>اتصل بنا</li>
                            <li>الباقات</li>
                            <li>الأسئلة الشائعة</li>
                            <li>انضم إلينا</li>
                            <li>العروض</li>
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </div>
    )
}

export default Navbar