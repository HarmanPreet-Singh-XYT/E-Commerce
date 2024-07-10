import React, { useEffect, useState } from 'react';
interface option{
    title: string,
    link: string,
}
const Product = ({ options }:{options:option[]}) => {
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
      className="z-30 bg-white divide-y divide-gray-100 rounded-lg absolute shadow drop-shadow-xl w-52 py-4 px-2"
    >
      <ul className="py-0 text-sm" aria-labelledby="dropdownUserAvatarButton">
        {options.map((each, index) => (
          <li key={index}>
            <a href={each.link} className="block px-4 py-2 text-base text-silver hover:text-salmon">
              {each.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
