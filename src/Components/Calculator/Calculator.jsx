import React from 'react'
import './Calculator.scss'
const Calculator = () => {
    return (
        <div className='Calculator'>
            <div className="top">
                حساب قيمة الاشتراك
            </div>
            <div className="container">
                <div className="bottom">
                    <div className="left">
                        <div className="item">
                            <label>عدد الموظفين</label>
                            <input type="number" min={0} placeholder='عدد الموظفين' />
                        </div>
                        <div className="item">
                            <label>نوع الباقة</label>
                            <select name="" id="">
                                <option value="">لا</option>
                                <option value="">نعم</option>
                            </select>
                        </div>
                        <div className="item">
                            <label>هل ترغب باشتراك حماية الأجور؟</label>
                            <select name="" id="">
                                <option value="">لا</option>
                                <option value="">نعم</option>
                            </select>                        </div>
                        <div className="item">
                            <label>عدد السنوات</label>
                            <input type="number" min={0} placeholder='عدد السنوات' />
                        </div>
                    </div>
                    <div className="right">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator