import React, { Component } from 'react';
import Image from 'next/image';
import LogoGlt from '../public/LogoGlt.png'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div>
                    <Image 
                        src={LogoGlt}
                        alt= "Logo GreenLandTech"
                    />
                </div>
            </header>
        )
    }
}
