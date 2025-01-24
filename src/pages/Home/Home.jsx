import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { menu_list, responsive } from '../../assets/assets'


const Home = () => {
  console.log(menu_list);
  const menu = menu_list.map((item, index) => (
    <Menu 
      key={index}
      name={item.menu_name}
      menu_img={item.menu_img}
    />
  ));

  return (
    <>
      <Header/>
      <Carousel 
        responsive={responsive}
        itemClass="carousel-item-custom"  // ใช้ class ปรับแต่งระยะห่าง
        partialVisibilityGutter={0}
        focusOnSelect={false}
      >
        {menu}
      </Carousel>;
    
    </>
  )
}
export default Home;