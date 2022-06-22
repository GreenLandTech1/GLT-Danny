import React, { Component } from 'react';
import Image from 'next/image';
import LogoGlt from '../public/LogoGlt.png';
import login from '../public/login.jpg'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div>
                    <div>
                        <Image 
                            src={LogoGlt}
                            alt= "Logo GreenLandTech"
                        />
                    </div>

                    <nav>
                        <ul>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Contact</a></li>
                            <li><a href='#'>
                                <Image
                                    src={login}
                                />
                            </a></li>
                        </ul>
                    </nav>
                </div>

                <div>
                    
                </div>
            </header>
        )
    }
}
