import React from "react";
import { Link } from "react-router-dom";
import './CommonHead.scss'
const CommonHead = ({title,path}) => {
  return (
    <div className="CommonHead">
        <div className="container">
            <h1>{title}</h1>
            <p>الصفحة الرئيسية \
                <span>{path}</span>
            </p>
            <div className="buttons">
                <Link to="/shop">
                <div className="button button2">استشارة مجانية</div>
                </Link>
                <Link to="/shop">
                <div className="button button1">طلب خدمة</div>
                </Link>
            </div>
        </div>
    </div>
  );
};

export default CommonHead;
