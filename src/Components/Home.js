import React from 'react';
import naranImg from '../newnaranimg.JPG';

const Home = ({ el }) => {
  return (
    <section className="home" id="home">
      <div className="social">
        <a href="https://www.linkedin.com/in/naran-nathan/" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="https://github.com/narann28" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-github"></i>
        </a>
        <a href="https://www.instagram.com/naran2n/" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-instagram"></i>
        </a>
      </div>
      <div className="home-img">
        <img className="hero user-image" src={naranImg} alt="" />
      </div>
      <div className="home-text">
        <span>Hello, I'm</span>
        <h1>Naran Nathan</h1>
        <h2>
          I am a <span className="role" ref={el}></span>
        </h2>
        <p>
          I'm a Computer Science Student at UCR and here is my portfolio website. Here you'll
          learn about my journey as a CS Student.
        </p>
        <a href="https://drive.google.com/file/d/1EeLoh3IndHZxFnFv7OsTIUg_4-x1wixL/view?usp=sharing" className="btn" target="_blank" rel="noopener noreferrer">
          Download Resume
        </a>
        <div className="absolute faded-text">Naran Nathan</div>
      </div>
    </section>
  );
};

export default Home;