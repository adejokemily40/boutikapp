import React from 'react';
import logo from '../images/logo_resize.png';



const Navbar = () => {

return(
    <>
        <div className='container'>
        <div>
            <img src={logo} alt="logo"/>
        </div>
        <div class="navitems">
            
            <div>
                <ul className='navlinks'>
                    <li><a href="#home">Home</a></li> 
                    <li><a href="#about">About</a></li>
                    <li><a href="#newarrivals">New Arrivals</a></li>
                    <li><a href="#Products">Products</a></li>
                </ul>
            </div>
        </div>
    </div>   
    </>
)
}

export default Navbar;

