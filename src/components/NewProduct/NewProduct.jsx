import React from 'react'
import './NewProduct.css'


export default function NewProduct(props) {
    

  return (
    <>   
      <div className="new-product">
        <img src={props.product_img} alt="" />
        <div className='content'>
            <p className='name'>{props.name}</p>
            <p className='description'>{props.description}</p>
            <p className='price'>เริ่มต้นที่ ฿{props.price}</p>
        </div>
      </div>
    </>
      
  )
}
