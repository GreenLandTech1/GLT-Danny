import React from 'react';
import LogoGlt from './../images/LogoGlt.png'
import login from './../images/login.png'


function Header() {
    return (
        <div>
            <header>
                <ul>
                    <div>
                        <img src="" alt="Logo" />
                    </div>
                    <div>
                        <img src={login} alt='Connexion' />
                    </div>
                </ul>
                    <div>
                        <img src={LogoGlt} alt="Logo GreenLandTech" />
                    </div>
            </header>
        </div>
    );
}

export default Header;  