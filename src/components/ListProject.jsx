import { IconBrandGithub, IconWorld } from '@tabler/icons-react';
import { isNewProject } from '../utils/date';
import { useEffect, useState } from 'react';
import SkeletonLoader from './SkeletonLoader';

const ListProject = ({ projects }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsToShow, setProjectsToShow] = useState(
    projects.slice(0, currentPage * 8)
  );
  const [loading, setLoading] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);

  useEffect(() => {
    setProjectsToShow(projects.slice(0, currentPage * 8));
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
              currentPage * 8,
              (currentPage + 1) * 8
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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 lg:gap-8'>
        {projectsToShow.map((project) => (
          <div
            key={project.id}
            className='group max-w-full w-auto aspect-square relative overflow-hidden rounded-lg animate-zoom-in mb-4'
          >
            <img
              src={project.image}
              alt={project.name}
              className='object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-300 ease-linear'
            />

            <div className='absolute bottom-0 left-0 flex flex-col justify-between w-full h-[40%] group-hover:h-full bg-black/50 backdrop-blur-sm transition-all duration-300 ease-linear px-4 py-3 z-10'>
              <div className='flex flex-col'>
                <h3 className='text-white text-base sm:text-xl mb-2 font-bold tracking-wider'>
                  {project.name}
                </h3>
                <ul className='flex flex-wrap text-[10px] gap-[2px] mb-2'>
                  {project.tags.map((tag, index) => (
                    <li key={index} className='rounded px-1'>
                      {/* {`#${tag.name}`} */}
                      <tag.icon
                        className={`${tag.color} text-[14px] inline-block w-5 h-5`}
                      />
                    </li>
                  ))}
                </ul>
                <p className='hidden group-hover:flex text-white text-sm'>
                  {project.description}
                </p>
              </div>
              <div className='hidden group-hover:flex w-full justify-end gap-4'>
                <div className='flex gap-2'>
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noreferrer'
                    className='cursor-pointer w-full h-full '
                  >
                    <IconBrandGithub
                      className='text-white hover:animate-bounce'
                      size={30}
                    />
                  </a>
                  <a
                    href={project.demo}
                    target='_blank'
                    rel='noreferrer'
                    className='cursor-pointer'
                  >
                    <IconWorld
                      className='text-white hover:animate-bounce'
                      size={30}
                    />
                  </a>
                </div>
              </div>
            </div>
            {isNewProject(project.createAt) && (
              <div className='absolute -top-2 -right-2 transition-all duration-300 ease-linear bg-yellow-400 rounded-[50%] w-14 h-14 shadow-lg'>
                <span className='h-full w-full flex justify-center items-center'>
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

export default ListProject;
