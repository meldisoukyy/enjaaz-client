import React, { useState } from 'react'
import './PackageAcc.scss'
import { BsCheck } from 'react-icons/bs';
import { BsPlus } from 'react-icons/bs';
import { BsDash } from 'react-icons/bs';

const PackageAcc = ({ title, data,empty }) => {
    const [open, setopen] = useState(false)
    
    return (
        <div className='PackageAcc'>
            <div className="head" onClick={() => setopen(!open)}>
                <div className="left">
                    <div className="icon">
                        <BsCheck />
                    </div>
                    <span style={empty?{border:'1px solid #2d1989',width:'150px'}:{}}>{title}</span>
                </div>
                {data && (
                    <div className="right" >
                        {open ? <BsDash /> : <BsPlus />}
                    </div>
                )}
            </div>
            {open && data && (
                <div className="tail">
                    {data &&data.map((item, i) => {
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