import React from 'react'

function Productlist(props) {
    let cardstyle ={
        width:"100%",
        height:"200px",
        objectfite: "cover"
        
    }
    const {productImg,productName,productDesc,productPrice,productInfo}=props
  return (
   <div className='col-md-4 mb-5 '>
      <div className='card  '   >
           <div className='card-header  ' >
                <img src={productImg} alt='' style={cardstyle }/>
            </div>
            <div className='card-body'>
                <h2 className='text-truncate'>{productName}</h2>
                <p className='text-truncate'>{productDesc}</p>
                <h3>{productPrice}</h3>
            </div>
            <div className='card-footer'>
                <a href={productInfo} className='btn btn-primary'>Add to Card</a>
            </div>
        </div>
    </div>


  )
}

export default Productlist