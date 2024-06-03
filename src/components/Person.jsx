import React from 'react'
import { Prof } from '../Data/prof'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
import './Person.css'


function Person() {
  return (
    <div className='cover-page'>
      <div className="title">
      <p>Lorem ipsum dolor sit amet.</p>
      <h2>WORK IN PROGRESS</h2>
      </div>
      <div className="contianer">
        {
       Prof.map((item)=> (

      <div className="card" key={item.id}>
        <img src={item.imgUrl} alt="" />
        <div className="description">
        <div className="hr">
        <h2>{item.title}</h2>
        </div>
        <p>{item.description}</p>
        <div></div>
        <div className="link-sec">
        <Link to={item.Link}>Explore  <FaLongArrowAltRight /></Link>
        </div>
        </div>

      </div>
       ))
        }
        </div>
    
    </div>
  )
}

export default Person