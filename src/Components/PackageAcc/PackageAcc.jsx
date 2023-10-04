import React, { useState } from 'react'
import './PackageAcc.scss'
import { TiTick } from 'react-icons/ti';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';

const PackageAcc = ({title}) => {
    const [open, setopen] = useState(false)
    return (
        <div className='PackageAcc'>
            <div className="head" onClick={()=>setopen(!open)}>
                <div className="left">
                    <div className="icon">
                        <TiTick/>
                    </div>
                    <span>{title}</span>
                </div>
                <div className="right" >
                    {open?<BiMinus/>:<BiPlus/>}
                </div>
            </div>
            {open&&(
                <div className="tail">
                    {[...Array(2)].map((item,i)=>{
                        return(
                        <>
                        <div className="item">خصم 30% على خدمات  </div>
                        <div className="item">خصم 30% على خدمات التصميم والتسويق</div>
                        </>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default PackageAcc