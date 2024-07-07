import React from 'react';
import './App.css';

function Home() {
  return (
    <div>
      <header className="App-header" id="home">
        <h1>Welcome to [Your Company]</h1>
        <p>We are committed to providing the best services to our customers.</p>
      </header>
      <main>
        <section className="company-overview">
          <h2>About Us</h2>
          <p>[Your Company] is a leading provider of innovative solutions...</p>
        </section>
        <section className="services">
          <h2>Our Services</h2>
          <p>We offer a wide range of services including...</p>
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <p>Feel free to reach out to us at contact@yourcompany.com</p>
        </section>
      </main>
    </div>
  );
}

export default Home;

