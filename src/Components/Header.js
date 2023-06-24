import React, { useState } from 'react'
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { HiPhone } from "react-icons/hi";
import { HiMagnifyingGlass, HiEllipsisVertical } from "react-icons/hi2";
import { SlBasket } from "react-icons/sl";
import { TbTruckDelivery } from "react-icons/tb";
import LOGO from '../Components/img/LOGO.svg';
import kitchenIcon from '../Components/img/kitchenIcon.svg';
import bedroomIcon from '../Components/img/bedroomIcon.svg';
import livingroomIcon from '../Components/img/livingroomIcon.svg';
import closetIcon from '../Components/img/closetIcon.svg';
import officeIcon from '../Components/img/officeIcon.svg';
import childrensroomIcon from '../Components/img/childrensroomIcon.svg';
import Order from './Order';


export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)
    
  return (
    <header>
        {/* Menu's up bar */}
        <div className="black-menu">
            <div className="black-menu-main">
                <ul className="name-about-contacts">
                    <li className="black-menu-item">Главная</li>
                    <li className="black-menu-item">О нас</li>
                    <li className="black-menu-item">Контакты</li>
                </ul>
            </div> 

            <div className="black-menu-delivery">
                <HiPhone className='icon' size={25}/>
                <p className="black-menu-item">8 (964) 89 99 119</p>
                <TbTruckDelivery className='icon' size={25}/>
                <p className="black-menu-item">Доставка</p>
            </div>
        </div>     

        {/* Search form */}
        <div className="menu-search">
            <img src={LOGO} alt="Logo" class="logo"/>
            <form action="">
                <div className="search-border">
                    <HiMagnifyingGlass className="magnifying-glass" size={25}/>
                    <input type="text" className="search" placeholder="Поиск"/>   
                </div>
            </form>
            <div className="icons-up-bar">
                <AiOutlineHeart className="icon-heart" size={25}/>
                <SlBasket className={`icon-basket ${cartOpen &&'active'}`} size={25}
                onClick={()=>setCartOpen(cartOpen =! cartOpen)}
                />
                <AiOutlineUser className="icon-user" size={25}/>
            </div>
            {cartOpen &&(
                <div className='cart-shop'>
                    {props.orders.map(el=>
                    <Order key={el.id} item={el} off={props.off}/>
                    )}
                  
                </div>
            )}
        </div>

        {/* Navigation bar */}
        
        <div className="menu-bar">
            <ul className="menu-bar-items">
                <li className="menu-items">
                    <img src={kitchenIcon} alt="" className="icons"/>
                    <p className="menu-text">Кухни</p>
                </li>
                <li className="menu-items">
                    <img src={bedroomIcon} alt="" className="icons"/>
                    <p className="menu-text">Спальни</p>
                </li>
                <li className="menu-items">
                    <img src={livingroomIcon} alt="" className="icons"/>
                    <p className="menu-text">Гостиные</p>
                </li>
                <li className="menu-items">
                    <img src={closetIcon} alt="" className="icons"/>
                    <p className="menu-text">Прихожие</p>
                </li>
                <li className="menu-items">
                    <img src={officeIcon} alt="" className="icons"/>
                    <p className="menu-text">Офисная мебель</p>
                </li>
                <li className="menu-items">
                    <img src={childrensroomIcon} alt="" className="icons"/>
                    <p className="menu-text">Детская</p>
                </li>
                <li className="menu-items">
                    <p className="menu-text-event">Акция</p>
                </li>
                <li className="menu-items">
                    <HiEllipsisVertical size={25}/>
                </li>
            </ul>
        </div>

        <div className='presentation'>
            <div className="button-div">
                <form action="">
                    <button className="button"><h4>СМОТРЕТЬ КАТАЛОГ</h4></button>
                </form>
            </div>
        </div>
    <div className='sales-hits'>
        <p>Хиты продаж</p>
    </div>      
    </header>
  )
}
