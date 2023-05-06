import React, { useEffect, useState } from 'react'

function MainuseEffect() {
    const [products, setProducts]=useState([]);
     const [isloading, setisLoding]=useState(true);
    const [lodingview, setlodingview] = useState([1, 2, 3, 4, 5, 6, 7, 8,9,10]);
    useEffect(()=>{
        fetch(`https://api.escuelajs.co/api/v1/products`)
        .then((resp) => resp.json())
        .then((data)=> {setProducts(data);
          setisLoding(false)})
        .catch((e)=> {console.log("error", e)
        setisLoding(false)})
    },[]);
    
if (isloading) {
  return(
      <>
     
        <div className="container">
          <div className="row">
            {
              lodingview.map((item, index) => {
              return (
                <div className="col-md-4 mb-5" key={index} >
                  <div className="card" aria-hidden="true">
                    <div className="card-body">
                      <h5 className="card-title placeholder-glow">
                        <span className="placeholder col-6"></span>
                      </h5>
                      <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    
 
  );
}
  return (
    <div className='container py-5'>
    <h2>Total Product: {products.length}</h2>
            <hr />
        <div className='row'>
            
            {
                products.map((item)=>{
                    const {id,title,price,description,images}=item;
                    return (
            <div className="col-6 col-md-3 mb-5" key={id}>
              <div className="card">
                <img
                  src={images}
                  className="w-100"
                  style={{ height: "300px", objectFit: "cover" }}
                  alt=""
                />
                <div className='card-body'>
                  <h3 title={title} className="text-truncate">
                    {title}
                  </h3>
                  <p className="text-truncate">{description}</p>
                  <p>Price: {price}</p>
                </div>
              </div>
            </div>
          );
          })}
        </div>
    </div>
  )
}

export default MainuseEffect