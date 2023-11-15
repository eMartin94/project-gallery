import { useState } from 'react';
import { categories, projects } from '../constants/data';
import Select from '../components/Select';
import ListCategory from '../components/ListCategory';
import { useDarkMode } from '../hooks/useDarkMode';
import ProjectCard from '../components/ProjectCard';
import { convertDate } from '../utils/date';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);
  const { isDarkMode } = useDarkMode();

  const handleCategory = (categoryName) => {
    setActiveCategory(categoryName);
  };

  const filterProjects = () => {
    if (activeCategory === 'All') {
      return projects;
    } else if (activeCategory === 'Html/Css') {
      return projects.filter((project) =>
        project.tags.some((tag) =>
          ['html', 'css'].includes(tag.name.toLowerCase())
        )
      );
    } else {
      return projects.filter((project) =>
        project.tags.some((tag) =>
          tag.name.toLowerCase().includes(activeCategory.toLowerCase())
        )
      );
    }
  };

  const filteredProjects = filterProjects();

  const sortedProjects = filteredProjects.sort((a, b) => {
    const dateA = convertDate(a.createAt);
    const dateB = convertDate(b.createAt);
    return dateB - dateA;
  });

  return (
    <section
      className={`w-[calc(100%-56px)] lg:w-[calc(100%-256px)] min-h-screen ml-14 lg:ml-64 px-4 py-4 flex flex-col gap-4 transition-all duration-300 ease-linear ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <h1
        className={`text-3xl font-bold tracking-wider mt-8 ${
          isDarkMode ? 'text-white' : 'text-black'
        } animate-opacity-out`}
      >
        Project Gallery
      </h1>
      <ListCategory
        categories={categories}
        activeCategory={activeCategory}
        handleCategory={handleCategory}
      />
      <Select categories={categories} onCategoryChange={handleCategory} />
      <ProjectCard projects={sortedProjects} />
    </section>
  );
};

export default Projects;
