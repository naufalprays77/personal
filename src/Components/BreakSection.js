import React from 'react';

export const BreakSection = () => {
  return (
    <div className="break-section py-20 text-center justify-center items-center flex flex-col">
      <h1 className="md:text-[40px] text-[20px] text-[#ccc] my-4 z-10 relative mb-5 w-[90%]">
        So, when can we <span className="font-bold text-white">start working</span> together?
      </h1>
      <a href="https://wa.me/628981609573?text=Hallo Perkenalkan saya" className="md:text-[15px] text-white z-10 relative bg-blueSoft px-6 py-2 hover:bg-white hover:text-black">
        Fast Contact
      </a>
    </div>
  );
};
