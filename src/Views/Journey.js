import React from 'react';
import Timeline from '../Components/Timeline';

function Journey() {
  return (
    <section className="journey bg-blackSoft" id="journey">
      <div className="container flex flex-col items-center mx-auto w-[80%] min-h-[100vh] pb-28 px-4">
        <div className="py-8">
          <h5 className="text-blueSoft border-b-2 mb text-[20px] pb-2 ">My Journey</h5>
        </div>
        <div className="flex justify-center">
          <Timeline />
        </div>
      </div>
    </section>
  );
}

export default Journey;
