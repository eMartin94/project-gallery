import { Link } from 'react-router-dom';
import { useDarkMode } from '../hooks/useDarkMode';
import { IconArrowBarLeft } from '@tabler/icons-react';

const NotFound = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <section
      className={`w-[calc(100%-56px)] sm:w-[calc(100%-256px)] min-h-screen ml-14 sm:ml-64 px-8 py-8 flex flex-col gap-4 transition-all duration-300 ease-linear ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className='flex flex-col items-center justify-center h-full'>
        <div className='rounded-lg p-4 text-center animate-zoom-in'>
          <h1
            className={`text-9xl sm:text-[180px] lg:text-[250px] font-bold  ${
              isDarkMode ? 'text-gray-700' : 'text-gray-300'
            }`}
          >
            404
          </h1>
          <p
            className={`text-base lg:text-2xl ${
              isDarkMode ? 'text-gray-700' : 'text-gray-300'
            }`}
          >
            Página no encontrada
          </p>
        </div>
        <div className='flex flex-row justify-center items-center gap-2 animate-opacity-in'>
          <Link
            to='/'
            className={`flex flex-row justify-center items-center gap-2 text-xs sm:text-base ${
              isDarkMode
                ? ' text-gray-400 hover:text-white'
                : ' text-gray-500 hover:text-black'
            }`}
          >
            <IconArrowBarLeft className='animate-pulse' />
            Volver a la página de inicio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
