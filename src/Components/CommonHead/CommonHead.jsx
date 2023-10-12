import React from "react";
import { Link, useLocation } from "react-router-dom";
import './CommonHead.scss'
import { useMyContext } from "../../context/MyContext";
const CommonHead = ({ title, path }) => {
  const location = useLocation()?.pathname
  const { lang, setlang, t, i18n } = useMyContext();

  return (
    <div className="CommonHead" style={lang === "ar" ? {direction: 'rtl'} : {direction: 'ltr'}}>
      <div className="container">
        <h1>{title}</h1>
        {lang === "ar" ? (

        <p>{path}
          <span>{title}</span>
        </p>
        ) : (
        <p style={{color:'#fff'}}>{title}
          <span style={{color:'#c7c5c5'}}>{path}</span>
        </p>

        )}
        <div className="buttons">
          {location !== "/freeconsulting" && (
            <Link to="/freeconsulting">
              <div className="button button2">استشارة مجانية</div>
            </Link>
          )}
          {location !== "/askforaservice" && (
            <Link to="/askforaservice">
              <div className="button button1">طلب خدمة</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommonHead;
