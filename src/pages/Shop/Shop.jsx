import React from 'react'
import './Shop.css'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { menu_list, responsiveMenu, responsiveNewProduct, newproduct } from '../../assets/assets'
import NewProduct from '../../components/NewProduct/NewProduct';


const Shop = () => {
  console.log(menu_list);
  const menu = menu_list.map((item, index) => (
    <Menu 
      key={index}
      name={item.menu_name}
      menu_img={item.menu_img}
    />
  ));

  const new_product = newproduct.map((item) => (
    <NewProduct
      name={item.np_name}
      product_img={item.np_img}
      description={item.np_descript}
      price={item.np_price}
    />
  ))

  return (
    <>
      <Header/>
      <Carousel 
        responsive={responsiveMenu}
        itemClass="carousel-item-custom"  // ใช้ class ปรับแต่งระยะห่าง
        partialVisibilityGutter={0}
        focusOnSelect={false}
      >
        {menu}
      </Carousel>

      <div className="new-product-section">
        <div className='title-wrapper'>
          <h1 className='title'>ผลิตภัณฑ์ล่าสุดของเรา</h1> 
          <h1 className='sub-title'> มาดูว่ามีอะไรใหม่บ้างได้เลย</h1>
        </div> 
        <Carousel 
          responsive={responsiveNewProduct}
          itemClass="new-product-carousel-item"  // ใช้ class ปรับแต่งระยะห่าง
          partialVisibilityGutter={0}
          focusOnSelect={false}
        >
          {new_product}
        </Carousel>
      </div>
      
    
    </>
  )
}
export default Shop;