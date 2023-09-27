import { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Select = ({ categories, onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isDarkMode } = useDarkMode();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
    onCategoryChange(category);
  };

  return (
    <div className='relative z-20 animate-opacity-in'>
      <button
        onClick={toggleDropdown}
        className={`flex sm:hidden outline-none px-4 py-2 justify-start items-center max-w-[150px] border rounded-md focus:outline-none ${
          isDarkMode
            ? 'border-slate-800 bg-gray-900 text-white'
            : 'border-gray-200 bg-gray-100 text-black'
        }`}
      >
        {/* {selectedCategory.name} */}
        {selectedCategory}
        <svg
          className={`ml-2 h-5 w-5 ${
            isDropdownOpen ? 'transform rotate-180' : ''
          } transition-all duration-300 ease-linear`}
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M5.293 6.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      {isDropdownOpen && (
        <ul
          className={`absolute mt-2 w-56 backdrop-blur-sm border rounded-md shadow-lg z-10 ${
            isDarkMode
              ? 'bg-gray-900/90 border-gray-900'
              : 'bg-white/70 border-gray-300'
          } animate-opacity-out`}
        >
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => handleCategorySelect(category.name)}
              className={`px-4 py-2 cursor-pointer  ${
                selectedCategory === category.name
                  ? ` ${
                      isDarkMode
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-950'
                    }`
                  : `text-gray-500 ${
                      isDarkMode
                        ? 'hover:bg-gray-900 hover:text-white'
                        : 'hover:bg-gray-100 hover:text-black'
                    }`
              }`}
            >
              {category.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
