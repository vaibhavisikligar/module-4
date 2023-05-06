import React, { useState } from 'react'

function Arrayexample() {
  
    const [productList, setProductlist] = useState (["Toy" , "Car" , "Tablet" , "Mobile"])
  return (
    <div className="container-fluid ">
    <div className="container">
        <div className="row">
            <div className="card mb-5 ">
                <div className="card-header">
                    <h2>array example</h2>
                    
                </div>
                <div className="card-body ">
                {
                    productList.map((item,index,Array)=>{
                        return <h2 key={index}>{item}</h2>
                    }) 
                }
                </div> 
            </div>
            
        </div>
    </div>

    </div>
  )
}

export default Arrayexample