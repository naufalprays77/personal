import React from 'react';

import { ContentAbout, ProfilePic } from '../Components/ContentAbout';

function About() {
  return (
    <section className="about bg-blackSoft" id="about">
      <div className="container mx-auto w-[100%] py-10 md:pt-20 px-4">
        <div className="flex flex-col lg:flex-row flex-auto lg:gap-24 gap-4 justify-center items-center self-center">
          <div className=" xl:w-[30%] lg:w-[50%] w-100% ">
            <ProfilePic />
          </div>
          <div className=" xl:w-[45%] lg:w-[100%] md:w-[90%] ">
            <ContentAbout />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
