"use client"
import React from 'react'

const EventHandling = () => {

    const addNums=(a,b) => {
        return a+b;
    }

    const num=76543;
  return (
    <div className='container'>
        <h1 className='text-center'>Event Handling</h1>
        <hr />
        <h1>{num}</h1>
        <h2>
            {addNums(74,17)}
        </h2>
        <h4>
            {4+9}
        </h4>

        <button className='btn btn-primary' onClick={() => {alert("Button was clicked")}}>Click me</button>
        <input type="color" onChange={ (e) => {console.log(e.target.value)}} />
        <input type="color" onChange={ (e) => {document.body.style.background=e.target.value}} />

    </div>
  )
}

export default EventHandling