import React from 'react'
import './style.css'
import logo from './hero-image-1.png'
import Rectangle from './Rectangle'
function Header() {
  return (
    <div className='header'>
        <div className='lheader'>
        <div className='lbox'>
            <div className='temp'>
            <div className='heading'>
            Be better at DSA & CP
            </div>
            <div className='txt'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
            <div className='buttons'>
                <button className='bt1'>
                    <div className='btxt1'>Join Now &nbsp;<i class="fa-solid fa-arrow-right"></i></div>
                </button>
                <button className='bt2'>
                    <div className='btxt2'>View Curicullum</div>
                </button>
            </div>
            <div className='Rectbb'>
            <div className='Rectb'>
             <Rectangle></Rectangle>
             <div className='hehe'>
             <Rectangle></Rectangle>
             </div>
           
            </div>
            <div className='Rectb'>
             <Rectangle></Rectangle>
             <div className='hehe'>
             <Rectangle></Rectangle>
             </div>
            </div>
            </div>
            </div>
        </div>
        </div>
        <div className='rheader'>
        <img src ={logo} className='mlogo'></img>
        </div>
    </div>
  )
}

export default Header