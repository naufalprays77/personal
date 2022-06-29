import React from 'react';
import Logo from '../Assets/Img/NPLogo1.1.png';

function Footer() {
  return (
    <footer className="contact bg-black" id="contact">
      <div className="text-center text-white py-10">
        <h1>
          <img src={Logo} className="lg:w-[3%] md:w-[5%] w-[13%] mx-auto pb-2" />
          Develop 2022 by
          <a href="https://www.instagram.com/naufalprays77/" className="hover:text-blueSoft px-1">
            @naufalprays77
          </a>
          <br />
          version 3.1.1
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
