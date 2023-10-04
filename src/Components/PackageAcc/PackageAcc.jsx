import React, { useState } from 'react'
import './PackageAcc.scss'
import { BsCheck } from 'react-icons/bs';
import { BsPlus } from 'react-icons/bs';
import { BsDash } from 'react-icons/bs';

const PackageAcc = ({title}) => {
    const [open, setopen] = useState(false)
    return (
        <div className='PackageAcc'>
            <div className="head" onClick={()=>setopen(!open)}>
                <div className="left">
                    <div className="icon">
                        <BsCheck/>
                    </div>
                    <span>{title}</span>
                </div>
                <div className="right" >
                    {open?<BsDash/>:<BsPlus/>}
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