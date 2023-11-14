import {} from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks, socialDev } from '../constants/data';
import DarkModeToggle from './DarkModeToggle';
import { useDarkMode } from '../hooks/useDarkMode';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(navLinks[0].id);
  const handleLink = (id) => {
    setActiveLink(id);
  };

  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`w-14 xs:w-64 min-h-screen px-2 sm:px-4 py-4 flex flex-col justify-between fixed z-50 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
      }  transition-all duration-300 ease-linear`}
    >
      <div className='flex flex-col gap-2'>
        <img
          src='https://raw.githubusercontent.com/eMartin94/portafolio-react/master/src/assets/photo.webp'
          alt='photo user'
          className='rounded-lg object-cover w-24'
        />
        <div>
          <h2
            className={`hidden xs:block font-bold tracking-wider ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}
          >
            Martin Pizango
          </h2>
          <p className='hidden xs:block text-gray-500'>
            eduardo.martin688@gmail.com
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        {navLinks.map((link) => (
          <Link
            to={link.to}
            key={link.id}
            className={`flex flex-row gap-4 pl-2 sm:pl-0 relative group ${
              activeLink === link.id
                ? isDarkMode
                  ? 'text-white'
                  : 'text-black'
                : `text-gray-500 ${
                    isDarkMode ? 'hover:text-white' : 'hover:text-black'
                  }`
            }`}
            onClick={() => handleLink(link.id)}
          >
            <link.icon className='' />
            <span className='hidden xs:block capitalize'>{link.name}</span>
            <span
              className={`group-hover:visible invisible xs:hidden capitalize absolute left-14 after:w-4 after:h-4 after:absolute after:-left-2 after:top-1 after:rotate-45 transition-all duration-300 ease-linear ${
                isDarkMode
                  ? 'bg-gray-900 px-4 rounded-r-lg after:bg-gray-900'
                  : 'bg-gray-100 px-4 rounded-r-lg after:bg-gray-100'
              }`}
            >
              {link.name}
            </span>
          </Link>
        ))}
      </div>
      <div className='w-full flex flex-col xs:flex-row gap-2 justify-evenly items-center'>
        {socialDev.map((social) => (
          <a
            key={social.id}
            href={social.link}
            target='_blank'
            rel='noreferrer'
          >
            <social.icon
              className={`cursor-pointer text-gray-500 hover:text-black ${
                isDarkMode ? 'hover:text-white' : 'hover:text-black'
              }`}
            />
          </a>
        ))}
      </div>
      <div className='w-full flex xs:flex-row pb-12 justify-center sm:justify-start items-center'>
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Sidebar;
