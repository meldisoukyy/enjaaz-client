import React, { useEffect, useState } from 'react'
import './Calculator.scss'
import { useMyContext } from '../../context/MyContext';
import { BsArrowCounterclockwise } from 'react-icons/bs';
const Calculator = ({ data }) => {
    const { lang, setlang, t, i18n } = useMyContext();
    const [numberOfEmployers, setnumberOfEmployers] = useState(null)
    const [packageType, setpackageType] = useState('bronze')
    const [annualCost, setAnnualCost] = useState(0)
    const [wageProtection, setwageProtection] = useState('true')
    const [numberOfYears, setnumberOfYears] = useState(1)

    const handlePrice = () => {
        setAnnualCost(0)
        if (numberOfEmployers <= data[packageType].empNum) {
            if (wageProtection === 'true') {
                setAnnualCost((data[packageType].price + 2000) * numberOfYears)
            } else {
                setAnnualCost((data[packageType].price) * numberOfYears)
            }
        }
        else {
            if (wageProtection === 'true') {
                setAnnualCost(((data[packageType].price + (300 * (numberOfEmployers - data[packageType].empNum))) + 2000) * numberOfYears)
            } else {
                setAnnualCost((data[packageType].price + (300 * (numberOfEmployers - data[packageType].empNum))) * numberOfYears)
            }
        }
    }
    useEffect(() => {
        numberOfYears<1&&setnumberOfYears(1)
        numberOfEmployers!==null&&numberOfEmployers<1&&setnumberOfEmployers(null)
        if (numberOfEmployers) {
            handlePrice()
        } else {
            setAnnualCost(0)
        }
    }, [numberOfEmployers, packageType, wageProtection, numberOfYears])


    return (
        <div className='Calculator' >
            <div className="top">{t("calc.title")}</div>
            <div className="container" style={lang === "ar" ? { direction: 'rtl' } : { direction: 'ltr' }}>
                <div className="bottom">
                    <div className="left">
                        <div className="item">
                            <label>{t("calc.f1")}</label>
                            <input type="number" min={1} value={numberOfEmployers} placeholder={t("calc.f1")} onChange={(e) => { setnumberOfEmployers(e.target.value); }} />
                        </div>
                        <div className="item">
                            <label>{t("calc.f2")}</label>
                            <select style={lang === "ar" ? { backgroundPositionX: '3%' } : { backgroundPositionX: '97%' }} onChange={(e) => { setpackageType(e.target.value); }}>
                                <option value="bronze" selected>{t("calc.s1")}</option>
                                <option value="silver">{t("calc.s2")}</option>
                                <option value="gold">{t("calc.s3")}</option>
                                <option value="diamond">{t("calc.s4")}</option>
                            </select>
                        </div>
                        <div className="item">
                            <label>{t("calc.f3")}</label>
                            <select style={lang === "ar" ? { backgroundPositionX: '3%' } : { backgroundPositionX: '97%' }} onChange={(e) => { setwageProtection(e.target.value); }}>
                                <option value='true' selected>{t("calc.true")}</option>
                                <option value='false'>{t("calc.false")}</option>
                            </select>
                        </div>
                        <div className="item">
                            <label>{t("calc.f4")}</label>
                            <input type="number" min={1} placeholder={t("calc.f4")} value={numberOfYears} onChange={(e) => { setnumberOfYears(e.target.value); }} />
                        </div>
                    </div>
                    <div className="right">
                        <div className="priceCon">
                            <h3>
                            {t("calc.much")}
                            </h3>
                            <div className="price">
                                <h2>{`${annualCost}`} {lang === "ar" ? 'ريال' : 'SAR'}</h2>
                                {/* <p>{lang === "ar" ? '/ سنويا' : '/ Yearly'}</p> */}
                            </div>
                        </div>
                        <button onClick={()=>{setAnnualCost(0);setnumberOfEmployers(0);setwageProtection('true');setnumberOfYears(1)}}>
                            <div className="icon">
                                <BsArrowCounterclockwise />
                            </div>
                            {t("calc.reset")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator