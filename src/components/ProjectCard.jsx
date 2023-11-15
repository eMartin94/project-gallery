import {
  IconBrandCodepen,
  IconBrandGithub,
  IconMenuDeep,
  IconWorld,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import SkeletonLoader from './SkeletonLoader';
import { isNewProject } from '../utils/date';

const ProjectCard = ({ projects }) => {
  const gradientDark =
    'rgba(17, 24, 39, 0.65), rgba(17, 24, 39, 0.85), #111827';
  const gradientLight =
    'rgba(209, 213, 219, 0.6), rgba(209, 213, 219, 0.75), #d1d5db';

  const { isDarkMode } = useDarkMode();

  const [currentPage, setCurrentPage] = useState(1);
  const [projectsToShow, setProjectsToShow] = useState(
    projects.slice(0, currentPage * 5)
  );
  const [loading, setLoading] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);

  useEffect(() => {
    setProjectsToShow(projects.slice(0, currentPage * 5));
  }, [projects, currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        if (!loading && !reachedEnd) {
          setLoading(true);
          setTimeout(() => {
            const nextPageProjects = projects.slice(
              currentPage * 5,
              (currentPage + 1) * 5
            );
            if (nextPageProjects.length === 0) {
              setReachedEnd(true);
            } else {
              setCurrentPage(currentPage + 1);
            }
            setLoading(false);
          }, 2000);
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage, loading, projects, reachedEnd]);

  return (
    <>
      <div className='w-full h-full flex flex-wrap gap-x-6 gap-y-6 justify-center items-start'>
        {projectsToShow.map((project) => (
          <div
            key={project.id}
            style={{
              backgroundImage: `radial-gradient( ${
                isDarkMode ? gradientDark : gradientLight
              }), url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            className='w-full xs:w-[300px] h-[380px] rounded-3xl flex flex-col p-4 justify-between relative shadow-lg'
          >
            <div
              className={`absolute -top-4 -right-4 w-20 h-20 rounded-full flex justify-center items-center ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div
                className={`group w-4/5 h-4/5 rounded-full flex flex-col justify-center items-center cursor-pointer ${
                  isDarkMode ? 'bg-gray-900' : 'bg-gray-300'
                }`}
              >
                <IconMenuDeep
                  className={`${isDarkMode ? 'text-white' : 'text-black'}`}
                />
                <div className='absolute top-1/2 pt-10 right-6 z-10 hidden opacity-0 group-hover:block group-hover:opacity-100'>
                  <ul className='flex flex-col mt-2 justify-center items-end gap-2'>
                    <li
                      className={`w-12 h-12 flex justify-center items-center rounded-full ${
                        isDarkMode
                          ? 'bg-gray-900 shadow-low-light'
                          : 'bg-gray-300 shadow-low-dark'
                      }`}
                    >
                      <a
                        href={
                          project.github.length > 0
                            ? project.github
                            : project.codepen
                        }
                        target='_blank'
                        rel='noreferrer'
                        className='cursor-pointer w-full h-full'
                      >
                        {project.github.length > 0 ? (
                          <IconBrandGithub
                            className={`w-full h-full p-3 ${
                              isDarkMode
                                ? 'text-gray-700 hover:text-white'
                                : 'text-gray-500 hover:text-black'
                            }`}
                            size={24}
                          />
                        ) : (
                          <IconBrandCodepen
                            className={`w-full h-full p-3 ${
                              isDarkMode
                                ? 'text-gray-700 hover:text-white'
                                : 'text-gray-500 hover:text-black'
                            }`}
                            size={24}
                          />
                        )}
                      </a>
                    </li>
                    <li
                      className={`w-12 h-12 flex justify-center items-center rounded-full ${
                        isDarkMode
                          ? 'bg-gray-900 shadow-low-light'
                          : 'bg-gray-300 shadow-low-dark'
                      }`}
                    >
                      <a
                        href={project.demo}
                        target='_blank'
                        rel='noreferrer'
                        className='cursor-pointer w-full h-full'
                      >
                        <IconWorld
                          className={`w-full h-full p-3 ${
                            isDarkMode
                              ? 'text-gray-700 hover:text-white'
                              : 'text-gray-500 hover:text-black'
                          }`}
                          size={24}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='w-full h-24'>
              <div className='flex gap-2'>
                {[...Array(7).keys()].map((item) => (
                  <span
                    key={item}
                    className={`w-[2px] h-4 rotate-12 ${
                      isDarkMode ? 'bg-white' : 'bg-black'
                    }`}
                  ></span>
                ))}
              </div>
            </div>

            <div className='group w-full h-full flex flex-col items-start relative'>
              <h3
                className={`text-3xl sm:text-4xl uppercase font-black drop-shadow-strong-dark ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                {project.name}
              </h3>
              <div
                className={`absolute w-full h-0 group-hover:h-32 origin-bottom -bottom-3 opacity-0 group-hover:opacity-100 rounded-t-xl py-3 pl-3 pr-2 ${
                  isDarkMode
                    ? 'bg-gray-900 shadow-strong-light'
                    : 'bg-gray-300 shadow-strong-dark'
                } transition-all duration-300 ease-linear`}
              >
                <p
                  className={`text-sm h-full overflow-auto text-scroll mr-px ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}
                >
                  {project.description}
                </p>
              </div>
            </div>

            <div
              className={`w-full h-px my-3 z-10 ${
                isDarkMode ? 'bg-white' : 'bg-black'
              }`}
            ></div>
            <div className='w-full flex justify-between items-center overflow-hidden'>
              <ul className='flex gap-1'>
                {project.tags.map((tag, index) => (
                  <li key={index} className='list-none'>
                    <tag.icon className={`${tag.color}`} size={20} />
                  </li>
                ))}
              </ul>
              <div className='flex gap-2 mr-1'>
                {[...Array(3).keys()].map((item) => (
                  <span
                    key={item}
                    className={`w-[2px] h-4 rotate-12 ${
                      isDarkMode ? 'bg-white' : 'bg-black'
                    }`}
                  ></span>
                ))}
              </div>
            </div>
            {isNewProject(project.createAt) && (
              // <div className='absolute top-0 right-1/4 transition-all duration-300 ease-linear bg-yellow-400 rounded-[50%] w-14 h-14 shadow-lg'>
              //   <span className='h-full w-full flex justify-center items-center'>
              //     new
              //   </span>
              // </div>
              <div
                className={`bookmark absolute top-0 right-1/3 xs:right-1/4 ${
                  isDarkMode ? 'bg-gray-200' : 'bg-gray-700'
                }`}
              >
                <span
                  className={`h-1/2 w-full flex justify-center items-center ${
                    isDarkMode ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  new
                </span>
              </div>
            )}
          </div>
        ))}
        {loading && <SkeletonLoader />}
      </div>
      {reachedEnd && (
        <div className='text-center mt-4 w-full'>
          <p className='text-gray-500'>Fin</p>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
