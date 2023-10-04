import React from "react";
import { Link, useLocation } from "react-router-dom";
import './CommonHead.scss'
const CommonHead = ({ title, path }) => {
  const location = useLocation()?.pathname
  return (
    <div className="CommonHead">
      <div className="container">
        <h1>{title}</h1>
        <p>{path}
          <span>{title}</span>
        </p>
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
