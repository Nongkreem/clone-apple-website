import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <div className='header'>
        <div className="text-container">
            <h1 className='header-text'>ร้านของเรา</h1>
            <div className='sub-header-text'>คือที่ที่ดีที่สุดในการ<br/>ซื้อผลิตภัณฑ์ที่คุณรัก</div>
        </div>
        <div className="chatstore-section">
            <div className="shop-chat">
                <div className="profile-specialist"> </div>
                <div className="shop-chat-container">
                    <div className="shop-chat-title">ต้องการความช่วยเหลือในการช้อปปิ้งใช่มั้ย</div>
                    <div className="shop-chat-content">
                        <a href="#">ถาม Specialist ได้เลย</a>
                    </div>
                </div>
            </div>
            <div className="shop-neareststore">
                <div className='icon-store'></div>
                <div className="store-content-container">
                    <div className="store-title">แวะไปที่ Apple Store</div>
                    <div className="store-content">
                        <a href="#">ค้นหาร้านที่อยู่ใกล้คุณ &gt; </a> /* ใช้ HTML entity เครื่องหมาย &gt;*/
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header;