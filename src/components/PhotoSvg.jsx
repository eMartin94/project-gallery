import { useDarkMode } from '../hooks/useDarkMode';

const PhotoSvg = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`relative md:flex w-full max-w-lg lg:justify-end justify-center hidden mb-8 sm:mb-0 ${
        isDarkMode
          ? 'drop-shadow-[10px_10px_0px_rgba(17,24,39,1)]'
          : 'drop-shadow-[10px_10px_0px_rgba(167,168,169,1)]'
      } animate-zoom-in`}
    >
      <svg
        viewBox='0 0 200 200'
        xmlns='http://www.w3.org/2000/svg'
        className='absolute top-0 left-0 '
        style={{ zIndex: 0 }}
        stroke={`${isDarkMode ? '#111827' : '#a7a8a9'}`}
      >
        <path
          d='M 0, 87.5
                  C 0, 23.625 23.625, 0 87.5, 0
                  S 175, 23.625 175, 87.5
                  151.375, 175 87.5, 175
                  0, 151.375 0, 87.5'
          fill='none'
          transform='rotate(-30, 100, 100) translate(12.5 12.5)'
        ></path>
      </svg>

      <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <mask id='myMask'>
            <path
              d='M 0, 87.5
                      C 0, 23.625 23.625, 0 87.5, 0
                      S 175, 23.625 175, 87.5
                      151.375, 175 87.5, 175
                      0, 151.375 0, 87.5'
              fill='white'
              transform='rotate(-30, 100, 100) translate(12.5 12.5)'
            ></path>
          </mask>
        </defs>
        <image
          xlinkHref={
            'https://raw.githubusercontent.com/eMartin94/portafolio-react/master/src/assets/photo.webp'
          }
          width='200'
          height='200'
          mask='url(#myMask)'
        />
      </svg>
    </div>
  );
};

export default PhotoSvg;
