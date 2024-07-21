import React from "react";
import { Link } from "react-router-dom";
import BannerImage from '../assets/banner.jpg'

function Home () {
    return(
        <div className="home" style={{backgroundImage:`url(${BannerImage})`}}>
            <div className="headerContainer">
                <h1>Burger Bonanza</h1>
                <p>The Ultimate Burger Experience<br />
                Taste the Joy in Every Bite</p>
               <Link to="/menu"> <button>Order Now</button></Link>
            </div>
        </div>
    );
}

export default Home;