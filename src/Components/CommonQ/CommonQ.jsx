import React, { useEffect, useState } from "react";
import "./CommonQ.scss";
import { Accordion } from 'react-bootstrap';
import { useMyContext } from "../../context/MyContext";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { PopularQuestionsApi, QuestionsApi } from "../../Apis/Apis";

const CommonQ = ({ full }) => {
  const { lang, setlang, t, i18n } = useMyContext();

  const [data, setdata] = useState([]);
  const [expandedItems, setExpandedItems] = useState([]);

  useEffect(() => {
    if (full) {
      QuestionsApi().then((res) => setdata(res));
    } else {
      PopularQuestionsApi().then((res) => setdata(res));
    }
  }, []);

  const handleToggle = (index) => {
    const isExpanded = expandedItems.includes(index);
    setExpandedItems((prev) =>
      isExpanded ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <div className="CommonQ">
      <div
        className="container"
        style={
          lang === "ar" ? { direction: "rtl" } : { direction: "ltr" }
        }
      >
        <div className="top">
          <h1 className="section-title3">{t("cq.h1")}</h1>
          {!full && (
            <Link to="/questions">
              <p>{`${t("cq.p1")} >>`}</p>
            </Link>
          )}
        </div>
        <div className="bottom">
          <Accordion>
            {data.map((item, i) => (
              <Accordion.Item
                eventKey={`${i}`}
                key={i}
                onClick={() => handleToggle(i)}
              >
                <Accordion.Header>
                  <div className="d-flex justify-content-between w-100 align-items-center">
                    <p>{lang === "ar" ? item.question_ar : item.question_en}</p>
                    {expandedItems.includes(i) ? (
                      <IoIosArrowUp size={25} />
                    ) : (
                      <IoIosArrowDown size={25} />
                    )}
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <p>{lang === "ar" ? item.answer_ar : item.answer_en}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default CommonQ;
