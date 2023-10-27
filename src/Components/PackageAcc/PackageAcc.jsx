import React, { useState } from 'react'
import './PackageAcc.scss'
import { BsCheck } from 'react-icons/bs';
import { BsPlus } from 'react-icons/bs';
import { BsDash } from 'react-icons/bs';

const PackageAcc = ({ title, data }) => {
    const [open, setopen] = useState(false)
    
    return (
        <div className='PackageAcc'>
            <div className="head" onClick={() => setopen(!open)}>
                <div className="left">
                    <div className="icon">
                        <BsCheck />
                    </div>
                    <span>{title}</span>
                </div>
                {data && (
                    <div className="right" >
                        {open ? <BsDash /> : <BsPlus />}
                    </div>
                )}
            </div>
            {open && (
                <div className="tail">
                    {data.map((item, i) => {
                        return (
                            <div className="item" key={i}>{item}</div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default PackageAcc