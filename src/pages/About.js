import React from "react";
import BannerImage from "../assets/1beef.jpg";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Welcome to Burger Bonanza! Our journey began with a simple idea: to create the best burgers in town using the freshest ingredients. At Burger Bonanza, we believe in quality and taste. Our beef patties are made from 100% grass-fed beef, seasoned to perfection, and grilled to juicy goodness. We also offer a variety of other delicious options, including chicken, turkey, black bean, and veggie burgers to cater to all tastes and preferences.
          <br /><br />
          Our mission is to provide a delightful dining experience for our customers. From our friendly staff to our cozy atmosphere, we strive to make every visit a memorable one. Whether you're dining in, taking out, or ordering for delivery, we ensure that every burger is crafted with care and served with a smile.
          <br /><br />
          Thank you for choosing Burger Bonanza. We look forward to serving you the best burgers you've ever tasted!
        </p>
      </div>
    </div>
  );
}

export default About;
