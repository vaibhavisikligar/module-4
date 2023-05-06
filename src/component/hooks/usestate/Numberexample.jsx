import React, { useState } from 'react'

function Numberexample() {
    function increment(){
        setNumber (isNumber +1)
    }
    function decrement(){
        if(isNumber > 0){
            setNumber (isNumber -1)
        }
       
    }
    function Square(){
        setSquare (isSquare * 2)
    }
        
const [isNumber , setNumber] = useState(0)
const [isSquare , setSquare] = useState(2)

  return (
    <div className="container-fluid ">
    <div className="container">
        <div className="row">
            <div className="card mb-5 ">
                <div className="card-header">
                    <h2>Number example</h2>
                    
                </div>
                <div className="card-body">
                    <h2>Number: {isNumber}</h2>
                </div>
                <div className="card-footer d-block">
                    <button className="btn btn-danger me-2" onClick={() => increment() }>+</button>
                    <button className="btn btn-danger " onClick={() => decrement() }>-</button>
                </div>
            </div>
            <div className="card mb-5">
                <div className="card-header">
                    <h2>Square example</h2>
                    <button className='btn'>Theme Change</button>
                </div>
                <div className="card-body">
                    <h2>Number: {isSquare}</h2>
                </div>
                <div className="card-footer d-block">
                    <button className="btn btn-danger me-2" onClick={() => Square() }>*</button>
                    
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Numberexample