import { useState } from "react"

function Stringexample() {
    
const [isUsername , setUsername] = useState ("Vaibhavi")


  return (
    <div className="container-fluid mb-5 mt-3">
    <div className="container">
        <div className="row">
            <div className="card">
                <div className="card-header ">
                    <h2>string example</h2>
                    
                </div>
                <div className="card-body">
                    <h2>My name is: {isUsername}</h2>
                </div>
                <div className="card-footer">
                    <button className="btn btn-danger" onClick={() => setUsername("Trisha") }>Change Name</button>
                </div>
            </div>
        </div>
    </div>

    </div>

)
}

export default Stringexample