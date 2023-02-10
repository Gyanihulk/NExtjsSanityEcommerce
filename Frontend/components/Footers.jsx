import React from 'react'

const Footers = () => {
  return (
   <>
   <section id="features">
                    <div id="feat">
                        <div className="overall">
                            <div className="icon"><i className="fa-solid fa-truck"></i></div>
                            <div className="info">
                                <span className="uppercase">FREE SHIPPING</span><br/>
                                <span className="light">From all orders over $100</span>
                            </div>
                        </div>

                        <div className="overall">
                            <div className="icon"><i className="fa-solid fa-retweet"></i></div>
                            <div className="info">
                                <span className="uppercase">FREE RETURNS</span><br/>
                                <span className="light">Return money within 30 days</span>
                            </div>
                        </div>

                        <div className="overall">
                            <div className="icon"><i className="fa-solid fa-lock"></i></div>
                            <div className="info">
                                <span className="uppercase">SECURE SHOPPING</span><br/>
                                <span className="light">You're in safe hands</span>
                            </div>
                        </div>

                        <div className="overall">
                            <div className="icon"><i className="fa-solid fa-tag"></i></div>
                            <div className="info">
                                <span className="uppercase">OVER 10,000 STYLES</span><br/>
                                <span className="light">We have everything you need</span>
                            </div>
                        </div>

                    </div>
                  </section>
                
                  <footer id="footer_box">
                    <section id="footer_content">
                        <div className="f_foot"> 
                            
                            <h2 className="want">Want style Ideas and Treats?</h2>
                          <div className="inputs">
                            <input type="email" className="form_input" id="email" placeholder="Enter Email *" />
                            <input type="submit" className="form_input" id="submit" value="Subscribe" />
                            </div>
                        </div>
                        <div className="s_foot">
                            <div className="img_links">
                                <h2 className="f_logo">Shopper.</h2>
                                <a href="" className="logo_link">
                                  <i className="fa-brands fa-facebook gray"></i>
                
                                </a>  
                                <a href="" className="logo_link">
                                   <i className="fa-brands fa-youtube gray"></i>
                                </a>
                                <a href="" className="logo_link">
                                   <i className="fa-brands fa-twitter gray"></i>
                                </a>  
                                <a href="" className="logo_link">
                                    <i className="fa-brands fa-instagram gray"></i>
                                </a>
                                <a href="" className="logo_link">
                                   <i className="fa-brands fa-medium gray"></i>
                                </a>
                            </div>
                          <div className="space">
                            <div className="other_links">
                                <span className="bold">SUPPORT</span><br/>
                                <a href="" className="block_links">Contact us</a>
                                <a href="" className="block_links">FAQs</a>
                                <a href="" className="block_links">Size Guide</a>
                                <a href="" className="block_links">Shipping & Returns</a>
                            </div>

                            <div className="other_links">
                                <span className="bold">SHOP</span><br/>
                                <a href="" className="block_links">Men's Shopping</a>
                                <a href="" className="block_links">Women's Shopping</a>
                                <a href="" className="block_links">Kid's Shopping</a>
                                <a href="" className="block_links">Discounts</a>
                            </div>

                            <div className="other_links">
                                <span className="bold">COMPANY</span><br/>
                                <a href="" className="block_links">Our Story</a>
                                <a href="" className="block_links">Careers</a>
                                <a href="" className="block_links">Terms & Conditions</a>
                                <a href="" className="block_links">Privacy & Cookie Policy</a>
                            </div>
                            <div className="other_links">
                                <span className="bold">CONTACT</span><br/>
                                <a href="" className="block_links">1-202-555-0105</a>                      
                                <a href="" className="block_links">1-202-555-0106</a>
                                <a href="" className="block_links">help@shopper.com</a>
                            </div>
                          </div>
                        </div>
                      
                        <div id="extras">
                            <p className="copy">&copy; 2022 All rights reserved. Designed by GyaniHulk.</p>
                            <div className="pay">
                            {/* <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/mastercard.svg" className="payments" />
                            <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/visa.svg" className="payments" />
                            <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/amex.svg" className="payments" />
                            <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/paypal.svg" className="payments" />
                            <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/maestro.svg" className="payments" /> */}
                            </div>
                        </div>
                    </section>
                  </footer>
</>
  )
}

export default Footers