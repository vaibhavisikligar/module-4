import React, { useState } from 'react'

function Objectexample() {
  const [themeChange, setThemeChange] = useState(false)
  const [personData, setPersonData] = useState({
    firstName: "Vaibhavi",
    birthyear: 1997,
    sport: "Cricket"
  })
  function changeName() {
    setPersonData(
      {
        ...personData,
        firstName: "Tranisha"
      }
    )
  }
     function cardThemechange (){
      setThemeChange(!themeChange)
     }
  return (
    <div className="container-fluid ">
      <div className="container">
        <div className="row">
          <div className={`card ${themeChange ? `bg-dark text-white` : `bg-light` } mb-5 `}>         
          <div className="card-header d-flex justify-content-between align-items-center">
              <h2>object example</h2>
              <button className='btn btn-primary' onClick={ ()=> cardThemechange ()}>Theme Change</button>
            </div>
            <div className="card-body  ">
              <h4>My Name :{personData.firstName}</h4>
              <h4>My Birth year: {personData.birthyear}</h4>
              <h4>I love to Play: {personData.sport}</h4>
            </div>
            <div className='card-footer'>
              <button className="btn btn-danger me-2" onClick={() => changeName()}>Change value</button>
            </div>
          
          </div>

        </div>
      </div>

    </div>
  )
}

export default Objectexample