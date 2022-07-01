import React from 'react';
import LogoGlt from './../images/LogoGlt.png'
import login from './../images/login.png'
import '.././header.css'


function Header() {
    return (
        <div>
            <header>
                <ul>
                    <div className='logo2'>
                        <img src="" alt="Logo" />
                    </div>
                    <div className='login'>
                        <img className='log-img' src={login} alt='Connexion' />
                    </div>
                </ul>
                    <div className='logo1' >
                        <img src={LogoGlt} alt="Logo GreenLandTech" />
                    </div>
            </header>
        </div>
    );
}

export default Header;  