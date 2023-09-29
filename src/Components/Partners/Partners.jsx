import React from 'react'
import './Partners.scss'
const Partners = () => {
    const data=["/images/partners/1partners.png","/images/partners/2partners.png","/images/partners/3partners.png","/images/partners/4partners.png","/images/partners/5partners.png","/images/partners/6partners.png","/images/partners/7partners.png",]
  return (
    <div className='Partners'>
        <div className="container">
            <h1 className='secH'>شركاء النجاح</h1>
            <div className="row d-flex justify-content-evenly">
                {data.map((item)=>{
                    return(
                        <div className="image col-lg-3 col-md-6 mb-3" >
                            <img src={item} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Partners