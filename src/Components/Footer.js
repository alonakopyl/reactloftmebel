import React from 'react';
import { RiPhoneFill } from "react-icons/ri";
import { AiOutlineInstagram } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer>
        <nav className='navigation'>
            <div className="navi-logo">
                <h4>НАВИГАЦИЯ</h4>
                <h2 className="logo-footer">LM</h2>
            </div>
            <div className="nav">
                <div className="navi-list">
                    <ul className="navi-list-1">
                        <li>Кухни</li>
                        <li>Спальни</li>
                        <li>Гостинные</li>
                    </ul>
                    <ul className="navi-list-1">
                        <li>Прихожие</li>
                        <li>Офисная мебель</li>
                        <li>Детские</li>
                    </ul>
                    <ul className="navi-list-1">
                        <li>Шкафы</li>
                        <li>Матрасы</li>
                        <li>Мягкая мебель</li>
                    </ul>       
                </div>
               
                <div className="address">
                    <ul>
                        <li>г. Анапа, Анапское шоссе, 30</li>
                        <li>Ж/К Черное море</li>
                    </ul>
                </div>
            </div> 
                <div className="contacts-footer">
                    <ul className="navi-list-2">
                        <li className="event-footer-red">Акции</li>
                        <li className="event-footer">Новинки</li>
                    </ul>
                    <div className='navi-list-2'>
                    <RiPhoneFill className='footer-icons' size={20}/><p className='ft-phone'>8 (964) 89 99 119</p> 
                    <AiOutlineInstagram className='footer-icons' size={20}/><p className='ft-phone'>instagram</p>
                    <HiOutlineMail className='footer-icons' size={20}/> <p className='ft-phone'>mebel_loft_anapa@mail.ru</p>
                    </div>
                </div>  
        </nav>
    </footer>
  )
}
