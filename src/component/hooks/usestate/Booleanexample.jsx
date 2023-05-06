
import React, { useState } from 'react'

function Booleanexample() {
    
    const [isShowimg , setIsshowimg] = useState(false)
  return (
    <>
    <div className="container-fluid ">
    <div className="container">
        <div className="row">
            <div className="card mb-5 ">
                <div className="card-header">
                    <h2>Boolean example</h2>
                    
                </div>
                <div className="card-body ">
                    <button className="btn btn-danger me-2" onClick={() => setIsshowimg(true)}  >show</button>
                    <button className="btn btn-success" onClick={() => setIsshowimg(false)} >hide</button>
                    <button className="btn btn-warning ms-2" onClick={() => setIsshowimg(!isShowimg)}  >hide / show </button>
                    <br />
                    {
                        isShowimg ? <img src="https://static.vecteezy.com/system/resources/previews/004/226/762/non_2x/panda-cartoon-cute-say-hello-panda-animals-illustration-vector.jpg" alt='' className='w-25 mt-3'/> : null
                    }
                    
                </div>
                
            </div>
            
        </div>
    </div>

    </div>

    </>
  )
}

export default Booleanexample