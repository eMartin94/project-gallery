import { useState } from 'react';
import { categories, projects } from '../constants/data';
import Select from './Select';
import ListProject from './ListProject';
import ListCategory from './ListCategory';
import { useDarkMode } from '../hooks/useDarkMode';

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

  return (
    <section
      className={`w-[calc(100%-56px)] xs:w-[calc(100%-256px)] min-h-screen ml-14 xs:ml-64 px-8 py-4 flex flex-col gap-4 transition-all duration-300 ease-linear ${
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
      <ListProject projects={filterProjects()} />
    </section>
  );
};

export default Projects;
