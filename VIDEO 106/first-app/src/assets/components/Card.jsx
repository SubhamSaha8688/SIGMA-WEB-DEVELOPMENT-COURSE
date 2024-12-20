import React from 'react'
import "./Card.css";

const Card = (props) => {
  return (
    <div>
      <div className="card" style= {{overflow : "hidden"}}>
      <img src="https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283" alt="" width={333} style={{border: "2px solid black"}} />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Card
