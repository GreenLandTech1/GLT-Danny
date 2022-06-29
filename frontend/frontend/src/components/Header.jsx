import React from 'react';
import LogoGlt from './../images/LogoGlt.png'


function Header() {
    return (
        <div>
            <header>
                    <div>
                        <img src={LogoGlt} alt="Logo GreenLandTech" />
                    </div>
            </header>
        </div>
    );
}

export default Header;  