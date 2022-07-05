import React from 'react';
import '../footer.css'

function Footer() {
    return (
        <footer>
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div style={{textAlign: "center"}}>
                                <h3>AgTech WILLEMS</h3>
                                <h4>by Euratechnologie</h4>
                                <h4 >Company<span> GreenLand</span><span>Tech </span><i className="fa fa-leaf"></i></h4>
                            </div>    
                                <div>
                                <h4><i className="fa fa-map-marker"></i> Place de SAINTIGNON</h4>
                                <h4>165 Avenue de Bretagne</h4>
                                <h4>59000 LILLE</h4>
                                </div>
                                <div>
                                <h4><strong><i className="fa fa-phone"></i></strong> +33 6 23 88 96 34</h4>
                                </div>
                                <div>
                                <h4><strong><i className="fa fa-envelope"></i></strong><a href="mailto:MyEmail@gmail.com"> yabarji1@gmail.com</a></h4>
                                </div>
                        </div>

                        <div className="col-lg-2 col-sm-6 footer-menus">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="fas fa-check"></i> <a href="#">Home</a></li>
                                <li><i className="fas fa-check"></i> <a href="#">About us</a></li>
                                <li><i className="fas fa-check"></i> <a href="#">Services</a></li>
                                <li><i className="fas fa-check"></i> <a href="#">Terms of service</a></li>
                                <li><i className="fas fa-check"></i> <a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-sm-6 footer-menus">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="fas fa-check"></i> <a href="#">Web Design</a></li>
                                <li><i className="fas fa-check"></i> <a href="#">Web Development</a></li>
                                <li><i className="fas fa-check"></i> <a href="#">Product Management</a></li>
                                <li><i className="fas fa-check"></i> <a href="#">Marketing</a></li>
                                <li><i className="fas fa-check"></i> <a href="#">Graphic Design</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-sm-6 newsletter">
                            <h4>Our Newsletter</h4>
                            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                            <form action="" method="post"><input type="email" name="email" /><input type="submit" value="Subscribe" /></form>

                            <div className="social-links mt-3">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#"><i className="fab fa-youtube"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a> 
                                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-2">&copy; Copyright <strong>Yassen</strong>. All Rights Reserved</p>
                            <p className="text-center mb-0">Created by <a href="https://www.markuptag.com/">Yassen ABARJI</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;