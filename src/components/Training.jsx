import React from 'react'
import './Train.css'
import { BlogData } from '../Data/BlogData'
import TrianCard from '../Reusable/TrianCard'

function Training() {
  return (
    <div className="wrapper">
        <p>Lorem ipsum dolor sit amet.</p>
        <h1>TRAININGS</h1>
     <div className='cover'>
        
        {
            BlogData.map((list)=> (
          <div className="items" key={list.id}>
            <TrianCard lists={list}/>
          </div>
            ))
        }
    </div>
    </div>
  )
}

export default Training