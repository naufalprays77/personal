import { datasocial } from '../Data';

const Medsos = () => {
  return (
    <ul className="flex ">
      {datasocial.map((item, index) => {
        return (
          <li className="flex justify-center items-center" key={index}>
            <a className="hover:bg-blueSoft p-4 rounded-full" href={item.href}>
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Medsos;
