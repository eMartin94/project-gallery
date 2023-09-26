import { useDarkMode } from '../hooks/useDarkMode';

const ListCategory = ({ categories, activeCategory, handleCategory }) => {
  const { isDarkMode } = useDarkMode();
  return (
    <ul className='hidden sm:flex flex-wrap gap-x-2 gap-y-1 select-none animate-opacity-in '>
      {categories.map((category) => (
        <li
          key={category.id}
          className={`px-2 text-sm cursor-pointer ${
            activeCategory === category.name
              ? `underline underline-offset-4  ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`
              : `text-gray-500 ${
                  isDarkMode ? ' hover:text-white' : ' hover:text-black'
                }`
          } transition-all duration-300 ease-linear`}
          onClick={() => handleCategory(category.name)}
        >
          {category.name}
        </li>
      ))}
    </ul>
  );
};

export default ListCategory;
