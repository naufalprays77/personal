import React from 'react';
import { Projects } from '../Components/Projects';
// import Projects from '../Components/Projects';

function Project() {
  return (
    <section className="project bg-blackSoft" id="project">
      <div className="container flex flex-col items-center mx-auto md:w-[80%] w-[95%] min-h-[100vh] md:py-28 py-0 pb-10 px-4">
        <div className="md:py-8 py-6 text-center items-center">
          <h5 className="text-white text-[15px] leading-5 uppercase bg-blueSoft lg:w-[20%] md:w-[30%] w-[65%] p-2 justify-center mx-auto">Gabut Project</h5>
          <h2 className="text-white md:text-[45px] text-[20px] pb-4 pt-7 md:pt-0">How my knowledge can be implemented?</h2>
          <hr className=" md:w-[60%] w-[100%] justify-center mx-auto" />
        </div>
        <div>
          <Projects />
        </div>
      </div>
    </section>
  );
}

export default Project;
