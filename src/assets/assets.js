import menu1 from './mac-menu.png'
import menu2 from './iphone-menu.png'
import menu3 from './ipad-menu.png'
import menu4 from './watch-menu.png'
import menu5 from './airpods-menu.png'
import menu6 from './airtag-menu.png'
import menu7 from './tv-menu.png'
import menu8 from './homepod-menu.png'
import menu9 from './etc-menu.png'
import menu10 from './gif-menu.png'

import newproduct1 from './iphone16pro-np.jpg'
import newproduct2 from './watch10-np.jpg'
import newproduct3 from './ipadmini-np.jpg'
import newproduct4 from './macbookPro-np.jpg'
import newproduct5 from './iphone16-np.jpg'
import newproduct6 from './watchUltra2-np.jpg'
import newproduct7 from './ipadAir-np.jpg'
import newproduct8 from './macMini-np.jpg'
import newproduct9 from './ipadPro-np.jpg'
import newproduct10 from './macbookAir-np.jpg'
import newproduct11 from './imac-np.jpg'
import newproduct12 from './watchSE-np.jpg'


export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1440 },
      items: 7,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2,
      slidesToSlide: 1,
    }
};

export const menu_list = [
    {
        menu_img: menu1,
        menu_name: "Mac"
    },
    {
        menu_img: menu2,
        menu_name: "iPhone"
    },
    {
        menu_img: menu3,
        menu_name: "iPad"
    },
    {
        menu_img: menu4,
        menu_name: "Apple Watch"
    },
    {
        menu_img: menu5,
        menu_name: "AirPods"
    },
    {
        menu_img: menu6,
        menu_name: "AirTag"
    },
    {
        menu_img: menu7,
        menu_name: "Apple TV 4K"
    },
    {
        menu_img: menu8,
        menu_name: "HomePod"
    },
    {
        menu_img: menu9,
        menu_name: "อุปกรณ์เสริม"
    },
    {
        menu_img: menu10,
        menu_name: "บัตรของขวัญ Apple Store"
    }
]

export const newproduct = [
    {
        np_img = newproduct1,
        np_name = "iPhone 16 Pro",
        np_descript = "สร้างมาเพื่อ Apple Intealligence",
        np_price = 39900
    },
    {
        np_img = newproduct2,
        np_name = "Apple Watch Series 10",
        np_descript = "บางกว่าเคย คลาสสิกเหมือนเคย"
        np_price = 14999
    },
    {
        np_img = newproduct3,
        np_name = "iPad mini",
        np_descript = "สร้างมาเพื่อ Apple Intealligence"
        np_price = 17900
    },
    {
        np_img = newproduct4,
        np_name = "MacBook Pro",
        np_descript = "สร้างมาเพื่อ Apple Intealligence"
        np_price = 54900
    },
    {
        np_img = newproduct5,
        np_name = "iPhone 16",
        np_descript = "สร้างมาเพื่อ Apple Intealligence"
        np_price = 29900
    },
    {
        np_img = newproduct6,
        np_name = "Apple Watch Ultra 2",
        np_descript = "สีสันใหม่ พิชิตความท้าทายใหม่ๆ"
        np_price = 29900
    },
    {
        np_img = newproduct7,
        np_name = "iPad Air",
        np_descript = "สร้างมาเพื่อ Apple Intealligence"
        np_price = 21900
    },
    {
        np_img = newproduct8,
        np_name = "Mac mini",
        np_descript = "สร้างมาเพื่อ Apple Intealligence"
        np_price = 20900
    },
    {
        np_img = newproduct9,
        np_name = "iPad Pro",
        np_descript = "สร้างมาเพื่อ Apple Intealligence"
        np_price = 37900
    },
    {
        np_img = newproduct10,
        np_name = "MacBook Air",
        np_descript = "สร้างมาเพื่อ Apple Intealligence"
        np_price = 34900
    },
    {
        np_img = newproduct11,
        np_name = "iMac",
        np_descript = "สร้างมาเพื่อ Apple Intealligence"
        np_price = 44900
    },
    {
        np_img = newproduct12,
        np_name = "Apple Watch SE",
        np_descript = "ครบถูกใจ คุ้มถึงใจ"
        np_price = 7900
    }
]