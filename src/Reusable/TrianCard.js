import React from 'react'

function TrianCard(props) {
  return (
    <div>
        <img src={props.lists.imgUrl} alt="" />
            <div className="sub">
                <h2>{props.lists.title}</h2>
                <p>{props.lists.description}</p>
                <h2>{props.lists.trian}</h2>
            </div>
    </div>
  )
}

export default TrianCard