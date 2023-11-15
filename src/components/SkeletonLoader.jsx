import { useDarkMode } from '../hooks/useDarkMode';

const SkeletonLoader = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className='grid grid-cols-1 gap-4 lg:gap-8'>
      <div
        className={`block group w-full xs:w-[300px] h-[380px] aspect-square relative overflow-hidden rounded-lg animate-zoom-in ${
          isDarkMode ? 'bg-gray-700/50' : 'bg-gray-200/50'
        }`}
      >
        <div className='w-full h-full scale-100'></div>
        <div
          className={`absolute bottom-0 left-0 flex flex-col justify-between w-full h-[40%] px-4 py-3 z-10 ${
            isDarkMode ? 'bg-gray-800/50' : 'bg-gray-300/50'
          }`}
        >
          <div className='flex flex-col gap-4'>
            <div
              className={`w-[60%] h-4 rounded animate-pulse ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
              }`}
            ></div>
            <ul className='flex flex-wrap text-[10px] gap-2 mb-2'>
              {[...Array(4)].map((_, index) => (
                <li
                  key={index}
                  className={`w-5 h-5 list-none rounded-full animate-pulse ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
                  }`}
                ></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
