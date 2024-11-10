import React from 'react'
import './Detail.css'
import assets from '../../assets/assets'

const Detail = () => {
  return (
    <div className='profile'>
      <div className="top">
        <div className="leftsection">
          <h1>Hi i Am <span className='orange'>Anish</span> and I am passionate <span className='orange'>Web Developer</span></h1>
        </div>
        <div className="rightsection">
          <img src={assets.web2} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Detail
