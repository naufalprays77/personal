import React from 'react';
import Medsos from '../Components/Medsos';

function Contact() {
  return (
    <section className="contact bg-blackSoft" id="contact">
      <div className="container mx-auto md:w-[80%] w-[100%] py-10 md:py-20 px-4">
        <div className=" lg:w-[40%] md:w-[45%] text-white">
          <h2 className="text-[45px] leading-[3rem] pb-16 font-bold">Let's get in touch</h2>
          <p className=" text-paragraph leading-[1.5rem] w-[95%] pb-8 ">It's an honor and pleasure if I can contribute to your team. Please share as much information as possible, so that we can get the most out of our first catch-up.</p>
          <div className="text-[30px]">
            <h3 className="leading-[3rem] font-[600]">Living In</h3>
            <h4 className="text-paragraph text-[15px] pb-4 "> Bandung, Indonesia.</h4>
            <h3 className="leading-[3rem] font-[600]">Call</h3>
            <h4 className="text-paragraph text-[15px]"> (+62) 813 8804 8997</h4>
            <h4 className="text-paragraph text-[15px] pb-4 "> (+62) 898 1609 573</h4>
            <h3 className="leading-[3rem] font-[600]">Email</h3>
            <h4 className="text-paragraph text-[15px] pb-16 "> nanda.prayasdewo@gmail.com</h4>
          </div>
        </div>
        <div className="flex text-white md:justify-end justify-center">
          <Medsos />
        </div>
      </div>
    </section>
  );
}

export default Contact;
