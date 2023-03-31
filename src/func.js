import React from 'react';

function Header() {
  return (
    <header>
      <img src="logo.svg" alt="Company Logo" className="logo" />
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about-us">About Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

function Products() {
    return (
        <section>
        <h2>Our Products</h2>
        <ul>
          <li>LINE 1</li>
          <li>LINE 2</li>
          <li>LINE 3</li>
        </ul>
      </section>
    );
  }

  function AboutUs() {
    return (
      <section>
        <h2>About Us</h2>
        <p>this is our first start up website</p>
      </section>
    );
  }

  export {Header,Products,AboutUs};