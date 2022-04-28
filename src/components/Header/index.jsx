import React, {useEffect, useState} from 'react';
import './style.css';
import logoImg from "../../assets/img/logo.png"

const Header = ({cartQuantity}) => {

    console.log(window.innerWidth)

    return window.innerWidth > 768 ? (
        <header className='header'>
            <div className='header-main-container'>
                <div className='header-logo'>
                <a href="/">
                    <img src={logoImg} alt="Corebiz Logo" />
                </a>
                </div>
                <div className='header-search'>
                <form className='search' action="">
                    <input className='search-form' type="text" placeholder='O que você está procurando?'/>
                </form>
                </div>
                <div className='header-nav-account'>
                    <a className='account-text' href="#">Minha Conta</a>
                </div>
                <div className='header-nav-cart'>
                    <a className='cart-icon' href="#"></a>
                    <span className='cart-quantity'>{cartQuantity}</span>
                </div>
            </div>
        </header>
    ) : (
        <header className='header'>

        </header>
    )
}

export default Header;