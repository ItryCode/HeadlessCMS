import React from "react";
import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            architecto nobis deleniti totam esse explicabo. Odio ipsa ex ducimus
            hic libero quisquam sapiente a veniam sunt omnis obcaecati,
            doloribus quae.
          </p>
        </div>
        <div className="img-container">
          <img className="img" src={heroImg} alt="woman and browser" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
