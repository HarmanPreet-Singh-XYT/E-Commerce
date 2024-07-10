import React, { useEffect, useState } from 'react';
interface option{
    title: string,
    link: string,
}
const Dropdown = ({ options,orderid }:{options:option[],orderid:number}) => {
  const [margin, setMargin] = useState(10);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMargin(0);
      setOpacity(1);
    }, 5);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="dropdownAvatar"
      style={{
        marginTop: `${margin * 0.25}rem`,
        opacity: opacity,
        transition: 'margin-top 0.2s ease-in-out, opacity 0.3s ease-in-out'
      }}
      className="z-30 bg-white divide-y divide-gray-100 rounded-lg absolute shadow drop-shadow-xl w-44 py-2 -left-36"
    >
      <ul className="py-0 text-sm" aria-labelledby="dropdownUserAvatarButton">
        {options.map((each, index) => (
          <li key={index}>
            <a href={`${each.link}${orderid}`} className="block px-4 py-2 text-base text-silver hover:text-black hover:bg-gray-100">
              {each.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
