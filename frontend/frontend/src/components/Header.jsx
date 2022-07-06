import React from 'react';
import LogoGlt from './../images/LogoGlt.png'
import login from './../images/login.png'
import logoNav from './../images/logoNav.jpeg';
import '.././header.css'


function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <div>
                        <img  className='logo2' src={logoNav} alt="Logo" />
                    </div>
                    <div className='login'>
                        <img className='log-img' src={login} alt='Connexion' />
                    </div>
                </ul>
                    <div className='logo1' >
                        <img src={LogoGlt} alt="Logo GreenLandTech" />
                    </div>
            </nav>
        </header>
    );
}

export default Header;  