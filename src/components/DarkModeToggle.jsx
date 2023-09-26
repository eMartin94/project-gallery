import { IconMoon, IconSun } from '@tabler/icons-react';
import { useDarkMode } from '../hooks/useDarkMode';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      onClick={toggleDarkMode}
      className='w-full flex justify-center items-center'
    >
      {isDarkMode ? (
        <IconSun
          className='text-white hover:-rotate-90 transition-all duration-300 ease-linear'
          size={30}
        />
      ) : (
        <IconMoon
          className={
            'text-black hover:-rotate-90 transition-all duration-300 ease-linear'
          }
          size={30}
        />
      )}
    </button>
  );
};

export default DarkModeToggle;
