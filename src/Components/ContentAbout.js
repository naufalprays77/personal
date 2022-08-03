import React from 'react';
import ProfilePicure from '../Assets/Img/profile-pic2.png';

export const ProfilePic = () => {
  return (
    <div className=" border-8 border-blueSoft drop-shadow-lg">
      <img src={ProfilePicure} alt="profile pic" />
    </div>
  );
};

export const ContentAbout = () => {
  return (
    <div className="py-8">
      <h5 className="text-blueSoft border-b-2 mb text-[20px] pb-2">About Us</h5>
      <h2 className="text-white text-[26px] md:text-[45px] lg:text-[30px] xl:text-[45px] xl:leading-[3.2rem] xl:w-[70%] lg:w-[60%] w-[80%] lg:leading-[2.3rem] leading-[1.9rem] md:leading-[3rem] xl:pb-9 lg:pb-7 md:pb-9 pb-7 pt-5">
        Why hire me for your next project?
      </h2>
      <p className="text-paragraph text-[14px] md:text-[16px] lg:text-[15px] xl:text-[16px]  ">
        Computer Science/Informatics graduate with 1+ year experience as a Web Developer. Have passion in software development, especially in front end developer. Understanding and experience in front-end technologies, such as JavaScript,
        HTML, CSS and React JS, including implementing CSS framework (Tailwind CSS & Bootstrap),able to create and implement database designs into databases using MSSQL/MYSQL. Familiar with figma software for building low/high fidelity
        prototypes. I also like new challenges, especially to do development from scratch.
      </p>
      <div class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-2 lg:gap-2 md:gap-4 xl:grid-cols-3 xl:gap-4 mt-4 text-[14px] md:text-[16px]">
        <div className="text-paragraph">
          Name: <br />
          <span className="text-white">Nanda Naufal Prayasdewo</span>
        </div>
        <div className="text-paragraph ">
          From / Live: <br />
          <span className="text-white">Bandung West Java, Indonesia</span>
        </div>
        <div className="text-paragraph ">
          Email: <br />
          <span className="text-white">nanda.prayasdewo@gmail.com</span>
        </div>
      </div>
      <div className="flex xl:mt-8 mt-12 gap-4">
        <a href="https://drive.google.com/drive/folders/1z3BSre6-rpANe8Wnj9pocPYhp0SNwJyS?usp=sharing" className="text-white text-[14px] md:text[16px] hover:bg-blueSoft bg-[#808080] py-2 px-6 rounded-full animate-pulse">
          Download CV
        </a>
      </div>
    </div>
  );
};
