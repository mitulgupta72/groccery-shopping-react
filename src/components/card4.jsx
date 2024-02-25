import React from 'react'

const card4 = ({name='vegetabel',discount='Upto 45% Off' , imgName="/image/product-6.png"}) => {
  return (
    <>
    <div className="box">
        <img src={imgName} alt='img here' />
        <h3>{name}</h3>
        <p>{discount}</p>
        <a href="#" className="btn">
          shop now
        </a>
      </div>
    </>
  )
}

export default card4

