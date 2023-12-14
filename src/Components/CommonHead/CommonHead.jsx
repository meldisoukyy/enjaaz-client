import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './CommonHead.scss'
import { useMyContext } from "../../context/MyContext";

const CommonHead = ({ title, path }) => {
  const location = useLocation()?.pathname
  const { lang, setlang, t, i18n } = useMyContext();

  return (
    <div className="CommonHead" style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }}>
      <div className="container">
        <h1>{title}</h1>
        {lang === "ar" ? (
          <div className="path">
            <p>{path}
            </p>
            <span>{title}</span>
          </div>
        ) : (
          <div className="path">
            <p style={{ color: '#c7c5c5' }}>{path}
            </p>
            <span style={{ color: '#fff' }}>{title}</span>
          </div>

        )}
        <div className="buttons">
          {location !== "/freeconsulting" && (
            <Link to="/freeconsulting">
              <div className="button button2">{t('carousel1.btn1')}</div>
            </Link>
          )}
          {location !== "/askforaservice" && (
            <Link to="/askforaservice">
              <div className="button button1">{t('carousel1.btn2')}</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommonHead;
