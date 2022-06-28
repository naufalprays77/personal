import React from 'react';
import Medsos from '../Components/Medsos';
import { FiArrowDownCircle } from 'react-icons/fi';
import Logo from '../Assets/Img/NPLogo1.1.png';
import AutoType from '../Components/AutoType';

function Home() {
  return (
    <section className="bg-home" id="contact">
      <div className="container flex flex-col items-center mx-auto w-[80%] min-h-[100vh] lg:py-20 md:py-12 py-28 px-4">
        <div className="text-center text-white z-10">
          <img src={Logo} className="w-[50%] pt-10 mx-auto" />
          <h1 className="font-bold md:text-[40px] text-[18px] pt-10 ">
            <span className="text-white">
              Hi, I am
              <AutoType />
            </span>
          </h1>
        </div>
        <div className="flex text-white justify-center md:pt-7 z-10">
          <Medsos />
        </div>
        <div className="text-white pt-20 lg:pt-28 z-10">
          <FiArrowDownCircle className="animate-ping hover:animate-bounce absolute justify-center items-center self-center text-center mx-auto cursor-pointer" />
        </div>
      </div>
    </section>
  );
}

export default Home;
