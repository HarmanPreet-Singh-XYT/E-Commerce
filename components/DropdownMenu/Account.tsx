import React, { useState } from 'react';

const Account = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div onMouseEnter={()=>setDropdownVisible(true)} onMouseLeave={()=>setDropdownVisible(false)} className="relative items-center">
      <button className='mb-2'>
        <i className="fa-regular fa-user fa-2xl"></i>
      </button>
      {isDropdownVisible && (
        <div id="dropdownAvatar" className="z-30 bg-white divide-y divide-gray-100 rounded-lg absolute shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Bonnie Green</div>
            <div className="font-medium truncate">name@flowbite.com</div>
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Orders</a>
            </li>
          </ul>
          <div className="py-2">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
