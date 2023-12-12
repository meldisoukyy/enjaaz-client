import React, { useEffect, useState } from "react";
import "./CommonQ.scss";
import Accordion from "react-bootstrap/Accordion";
import { useMyContext } from "../../context/MyContext";
import { Link } from "react-router-dom";

import { PopularQuestionsApi, QuestionsApi } from "../../Apis/Apis";
const CommonQ = ({ full }) => {
  const { lang, setlang, t, i18n } = useMyContext();

  const [data, setdata] = useState([])
  useEffect(() => {
    if (full) {
      QuestionsApi().then((res) => { setdata(res) })
    } else {
      PopularQuestionsApi().then((res) => { setdata(res) })
    }
  }, []);
  return (
    <div className="CommonQ" >
      <div
        className="container"
        style={lang === "ar" ? { direction: "rtl" } : { direction: "ltr" }}
      >
        <div className="top">
          <h1 className="section-title3">{t('cq.h1')}</h1>
          {!full && (
            <Link to="/questions">
              <p>{`${t('cq.p1')} >>`}</p>
            </Link>
          )}
        </div>
        {!full && (
          <div className="bottom" >
            <Accordion alwaysOpen>
              {data.map((item, i) => {
                return (
                  <Accordion.Item eventKey={`${i}`} key={i} >
                    <Accordion.Header>
                      <p>{lang === "ar" ?item.question_ar:item.question_en}</p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="answer">{lang === "ar" ?item.answer_ar:item.answer_en}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                )
              })}

            </Accordion>
          </div>
        )}
        {full && (
          <div className="bottom" >
            <Accordion alwaysOpen>
              {data.map((item, i) => {
                return (
                  <Accordion.Item eventKey={`${i}`} key={i}>
                    <Accordion.Header>
                    <p>{lang === "ar" ?item.question_ar:item.question_en}</p>
                    </Accordion.Header>
                    <Accordion.Body>
                    <p className="answer">{lang === "ar" ?item.answer_ar:item.answer_en}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonQ;
