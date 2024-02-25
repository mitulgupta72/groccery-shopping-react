import React from 'react'

const card3 = ({image,title,desc}) => {
  return (
   <>
   <div className="box">
        
        <img src={image}/>
        <h3>{title}</h3>
        <p>
          {desc}
        </p>
        <a href="#" className="btn">
          read more
        </a>
      </div>
   </>
  )
}

export default card3

