import React from 'react'
import './Menu.css'
import { menu_list } from '../../assets/assets'
const Menu = () => {

    // ฟังก์ชันเลื่อนซ้าย/ขวา
    const scrollMenu = (direction) => {
        if (menuRef.current) {
            const scrollAmount = direction === "left" ? -200 : 200;
            menuRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };


  return (
    <div className='menu'>
        <div className="menu-list">
            {menu_list.map((item, index)=>{
                return(
                    <div className="menu-list-item">
                        <img src={item.menu_img} />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Menu;