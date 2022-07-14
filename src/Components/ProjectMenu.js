import React from 'react';
import '../Assets/CSS/Style.css';

function ProjectMenu({ menuItem }) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {menuItem.map((item) => {
        return (
          <div class="container-menu">
            <img src={item.image} alt="project" className="w-[100%] md:h-[280px] h-[200px] block" />
            <div class="overlay">
              <div class="text">
                <div className="text-[20px] pb-4 uppercase">{item.title}</div>
                <p className="text-[10px] md:text-[14px]">{item.description}</p>
                <div className="pt-5">
                  <a href={item.linkView} className=" text-white hover:text-black bg-blackSoft hover:bg-white p-2 text-[9px] md:text-[12px] mx-1">
                    View Project
                  </a>
                  <a href={item.documentation} className=" text-white hover:text-black bg-blackSoft hover:bg-white p-2 text-[9px] md:text-[12px] mx-1">
                    Documentation
                  </a>
                  <a href={item.linkCode} className=" text-white hover:text-black bg-blackSoft hover:bg-white p-2 text-[9px] md:text-[12px] mx-1">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectMenu;
