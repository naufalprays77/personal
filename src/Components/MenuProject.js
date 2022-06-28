import React from 'react';

function MenuProject({ button, filter }) {
  return (
    <div className="md:py-10 py-0 pb-5 ">
      {button.map((data, i) => {
        return (
          <button type="button" onClick={() => filter(data)} className="text-white md:py-2 py-1 m-1 md:w-[70px] w-[27%]  bg-blueSoft hover:bg-white hover:text-black focus:p-3 focus:bg-white focus:text-black">
            {data}
          </button>
        );
      })}
    </div>
  );
}

export default MenuProject;
