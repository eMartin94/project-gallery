import CarouselText from '../components/CarouselText';
import PhotoSvg from '../components/PhotoSvg';
import { useDarkMode } from '../hooks/useDarkMode';
import { socialMedia } from '../constants/data';

const AboutPage = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <section
      className={`w-[calc(100%-56px)] lg:w-[calc(100%-256px)] min-h-screen ml-14 lg:ml-64 px-8 py-8 flex flex-col gap-4 transition-all duration-300 ease-linear ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className=' w-full h-full flex flex-col-reverse lg:flex-row justify-between lg:justify-evenly items-center'>
        <div className='flex flex-col h-full sm:h-auto gap-4 justify-center'>
          <h1
            className={`text-3xl font-bold tracking-wider ${
              isDarkMode ? 'text-white' : 'text-black'
            } animate-opacity-out`}
          >
            About me
          </h1>
          <div className='w-full flex justify-start gap-4 mb-4 animate-opacity-in'>
            {socialMedia.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target='_blank'
                rel='noreferrer'
                className={`flex items-center gap-2 text-gray-500 ${
                  isDarkMode ? 'hover:text-white' : 'hover:text-black'
                } transition-all duration-300 ease-linear`}
              >
                <item.icon size={25} />
              </a>
            ))}
          </div>
          <CarouselText />
        </div>
        <PhotoSvg />
      </div>
    </section>
  );
};

export default AboutPage;
