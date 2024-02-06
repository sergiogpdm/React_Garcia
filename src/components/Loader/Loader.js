import React, { useEffect } from 'react';
import { gsap, Power1 } from 'gsap';
import './Loader.css';

const Loader = () => {
  useEffect(() => {
    const circles = document.querySelectorAll('.circle');
    const tl = gsap.timeline();
    const random1 = getRandomNumber();
    const imgUrl1 = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/valley.jpg?' + random1;
    const image1 = new Image();

    function loaderOut() {
      console.log('Image is done loading.');
    }

    function getRandomNumber() {
      return Math.floor(Math.random() * 10000);
    }

    image1.onload = loaderOut;
    image1.src = imgUrl1;

    gsap.set(circles, { scale: 0 });

    tl.to(circles, {
      duration: 1,
      opacity: 1,
      scale: 1,
      ease: Power1.easeIn,
      stagger: 0.2
    }).to(circles, {
      duration: 0.5,
      scale: 1.2,
      boxShadow: '0 25px 25px rgba(0, 0, 0, 0.4)',
      repeat: -1,
      yoyo: true,
      ease: Power1.easeOut,
      stagger: 0.2
    }, '-=0.4');
  }, []);

  return (
    <div className="loader-container">
      <div className="img-container">
        <h2>Welcome!</h2>
        <h3>Insert Subtitle here</h3>
      </div>
      <div className="preloader">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
      </div>
    </div>
  );
};

export default Loader;
