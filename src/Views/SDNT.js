import React from 'react';
import Tools from '../Components/Tools';
import SelfDevelopment from '../Components/SelfDevelopment';

function SDNT() {
  return (
    <section className="SDNT bg-blackSoft" id="SDNT">
      <div className="container flex flex-col items-center mx-auto w-[80%] md:min-h-[100vh] min-h-[70vh] md:py-28 py-0 px-4">
        <div className="py-8 text-center items-center">
          <h5 className="text-white text-[15px] leading-5 uppercase bg-blueSoft md:w-[25%] w-[60%] p-2 justify-center mx-auto">Self Development</h5>
          <h2 className="text-white md:text-[45px] text-[20px] pb-4 pt-7 md:pt-0">How my knowledge can be implemented?</h2>
          <hr className="md:w-[60%] w-[100%] justify-center mx-auto" />
        </div>
        <div className="w-[100%] md:pt-8 ">
          <SelfDevelopment />
        </div>
      </div>
      <div className="w-[100%] bg-blueSoft">
        <Tools />
      </div>
    </section>
  );
}

export default SDNT;
