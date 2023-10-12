import React, { useState } from 'react'
import './navbar.scss'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import { useMyContext } from '../../context/MyContext';
const Navbar = () => {
    const [isOpened, setIsOpened] = useState(false);

    const toggleMenu = () => {
        setIsOpened((prevIsOpened) => !prevIsOpened);
    };
    const handleClose = () => setIsOpened(false);
    const handleShow = () => setIsOpened(true);
    const { lang, setlang, t, i18n } = useMyContext();
    return (
        <div className='Navbar pt-5' style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }}>
            <div className="container">
                <div className="top d-flex justify-content-between align-items-end  pb-3">
                    <div className="image">
                        <Link to="/">
                            <img src="/images/logo.png" alt="" />
                        </Link>
                    </div>
                    <p className='mb-0' onClick={() => {
                        setlang(lang === "ar" ? "en" : "ar"),
                            i18n.changeLanguage(lang === "en" ? "ar" : "en");
                    }}>{t('nav.lang')}</p>
                </div>
                <div className="bottom"  >
                    <ul className="links">
                        <NavLink to="/">
                            <li>الصفحة الرئيسية</li>
                        </NavLink>
                        <NavLink to="/about">
                            <li>نبذة عنا</li>
                        </NavLink>
                        <NavLink to="/trymeservice">
                            <li>خدمة جربني</li>
                        </NavLink>
                        <NavLink to="/service-guide">
                            <li>دليل الخدمات</li>
                        </NavLink>
                        <NavLink to="/callus">
                            <li>اتصل بنا</li>
                        </NavLink>
                        <NavLink to="/packages">
                            <li>الباقات</li>
                        </NavLink>
                        <NavLink to="/questions">
                            <li>الأسئلة الشائعة</li>
                        </NavLink>
                        <NavLink to="/joinus">
                            <li>انضم إلينا</li>
                        </NavLink>
                        <NavLink to="/offers">
                            <li className='sale'>العروض</li>
                        </NavLink>
                    </ul>
                    <div className="numbers">
                        <div className="num">
                            <div className="icon">
                                <img src="/images/phoneNav.png" alt="" />
                            </div>
                            <p>0112634168</p>
                        </div>
                        <div className="num">
                            <div className="icon">
                                <img src="/images/whatsappnav.png" alt="" />
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
                            <NavLink to="/">
                                <li onClick={() => handleClose()}>الصفحة الرئيسية</li>
                            </NavLink>
                            <NavLink to="/about">
                                <li onClick={() => handleClose()}>نبذة عنا</li>
                            </NavLink>
                            <NavLink to="/trymeservice">
                                <li onClick={() => handleClose()}>خدمة جربني</li>
                            </NavLink>
                            <NavLink to="/service-guide">
                                <li onClick={() => handleClose()}>دليل الخدمات</li>
                            </NavLink>
                            <NavLink to="/callus">
                                <li onClick={() => handleClose()}>اتصل بنا</li>
                            </NavLink>
                            <NavLink to="/packages">
                                <li onClick={() => handleClose()}>الباقات</li>
                            </NavLink>
                            <NavLink to="/questions">
                                <li onClick={() => handleClose()}>الأسئلة الشائعة</li>
                            </NavLink>
                            <NavLink to="/joinus">
                                <li onClick={() => handleClose()}>انضم إلينا</li>
                            </NavLink>
                            <NavLink to="/offers">
                                <li className='sale' onClick={() => handleClose()}>العروض</li>
                            </NavLink>
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </div>
    )
}

export default Navbar