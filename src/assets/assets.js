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