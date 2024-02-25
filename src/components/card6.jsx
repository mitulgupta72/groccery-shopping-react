import React from 'react'

const card6 = ({imgName="image/blog-1.jpg"}) => {
  return (
    <>
    <div className="box">
        <img src={imgName} />
        <div className="content">
          <div className="icons">
            <a href="#">
              <i className="fa fa-user" /> By User
            </a>
            <a href="#">
              <i className="fa fa-calendar" /> 9th jun, 2023
            </a>
          </div>
          <h3>Fresh And Organic Vegetables And Fruits</h3>
          <p>
            Many of these are antioxidants, and may reduce the risk of many
            diseases: vitamin A (beta-carotene) vitamin C. vitamin E.
          </p>
          <a href="#" className="btn">
            {" "}
            read more
          </a>
        </div>
      </div>
    </>
  )
}

export default card6
