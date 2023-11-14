import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useDarkMode } from '../hooks/useDarkMode';

const CarouselText = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`w-[200px] sm:w-full max-w-sm animate-opacity-in`}>
      <Carousel
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showThumbs={false}
        className={`${isDarkMode ? '' : 'light'}`}
      >
        <div className='w-full h-full py-4 '>
          <p
            className={`text-base ${isDarkMode ? 'text-white' : 'text-black'}`}
          >
            ¡Hola! Soy un apasionado desarrollador web con un fuerte enfoque en
            tecnologías front-end. Me encanta crear aplicaciones web
            interactivas y receptivas utilizando React y JavaScript. Tailwind
            CSS es mi framework favorito para diseñar hermosas interfaces de
            usuario.
          </p>
        </div>
        <div className='w-full h-full py-4 '>
          <p
            className={`text-base ${isDarkMode ? 'text-white' : 'text-black'}`}
          >
            Mi viaje en el mundo del desarrollo web comenzó con una curiosidad
            por cómo funcionan los sitios web. Con el tiempo, he perfeccionado
            mis habilidades tanto en desarrollo front-end como back-end.
            Disfruto construyendo aplicaciones escalables y eficientes en el
            lado del servidor utilizando Node.js y gestionando bases de datos
            con MongoDB.
          </p>
        </div>
        <div className='w-full h-full py-4 '>
          <p
            className={`text-base ${isDarkMode ? 'text-white' : 'text-black'}`}
          >
            Cuando no estoy programando, me encontrarás explorando las últimas
            tendencias en desarrollo web, contribuyendo a proyectos de código
            abierto o compartiendo mis conocimientos a través de publicaciones y
            tutoriales. Estoy comprometido en crear experiencias web
            excepcionales y siempre estoy listo para un nuevo desafío de
            codificación.
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselText;
