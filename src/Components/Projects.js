import React, { useState } from 'react';
import { dataProject } from '../Data';
import ProjectMenu from './ProjectMenu';
import MenuProject from './MenuProject';

// const allCategories = ['All', ...new Set(dataProject.map((item) => dataProject.category))];
// const allCategories = { dataProject };
const allCategories = ['All', ...new Set(dataProject.map((item) => item.category))];

console.log(allCategories);
export const Projects = () => {
  const [menuItem, setMenuItem] = useState(dataProject);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) => {
    if (button === 'All') {
      setMenuItem(dataProject);
      return;
    }

    const filteredData = dataProject.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };

  return (
    <div className="justify-center text-center">
      <MenuProject button={buttons} filter={filter} />
      <ProjectMenu menuItem={menuItem} />
    </div>
  );
};
