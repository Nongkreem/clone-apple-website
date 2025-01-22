import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='navbar-menu'>
            <div className='icon'>1</div>
            <a href="#">ร้าน</a>
            <a href="#">Mac</a>
            <a href="#">iPad</a>
            <a href="#">iPhone</a>
            <a href="#">Watch</a>
            <a href="#">AirPods</a>
            <a href="#">TV และบ้าน</a>
            <a href="#">ความบรรเทิง</a>
            <a href="#">อุปกรณ์เสริม</a>
            <a href="#">บริการช่วยเหลือ</a>
            <div className='icon'>1</div>
            <div className='icon'>0</div>
        </ul>
    </div>
  )
}

export default Navbar;