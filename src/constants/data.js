import {
  IconBrandAngular,
  IconBrandCodepen,
  IconBrandCss3,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandJavascript,
  IconBrandKotlin,
  IconBrandLinkedin,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandThreads,
  IconBrandTwitter,
  IconBrandTypescript,
  IconBriefcase,
  IconHtml,
  IconPhone,
  IconUser,
} from '@tabler/icons-react';

const navLinks = [
  {
    id: 1,
    to: '/',
    name: 'projects',
    icon: IconBriefcase,
  },
  {
    id: 2,
    to: '/about',
    name: 'about',
    icon: IconUser,
  },
  {
    id: 3,
    to: '/contact',
    name: 'contact',
    icon: IconPhone,
  },
];

const categories = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'Html/Css',
  },
  {
    id: 3,
    name: 'JavaScript',
  },
  {
    id: 4,
    name: 'TypeScript',
  },
  {
    id: 5,
    name: 'React',
  },
  {
    id: 6,
    name: 'Nextjs',
  },
  {
    id: 7,
    name: 'Node',
  },
  {
    id: 8,
    name: 'MongoDB',
  },
  {
    id: 9,
    name: 'Kotlin',
  },
];

const projects = [
  {
    id: 1,
    name: 'Before Trilogy',
    description:
      'The "Before" trilogy is a cinematic achievement that invites us to reflect on love, human connection, and the passage of time in a way that few other films achieve.',
    image:
      'https://res.cloudinary.com/dxbbbewxt/image/upload/v1699986930/project-gallery/before-trilogy_gmigrp.webp',
    github: 'https://github.com/eMartin94/before-trilogy-review',
    demo: 'https://before-trilogy-review.vercel.app/',
    tags: [
      {
        name: 'html',
        icon: IconHtml,
        color: 'text-orange-400',
      },
      {
        name: 'css',
        icon: IconBrandCss3,
        color: 'text-blue-400',
      },
      {
        name: 'javascript',
        icon: IconBrandJavascript,
        color: 'text-yellow-300',
      },
      {
        name: 'react',
        icon: IconBrandReact,
        color: 'text-sky-300',
      },
      {
        name: 'tailwindcss',
        icon: IconBrandTailwind,
        color: 'text-sky-400',
      },
      {
        name: 'nodejs',
        icon: IconBrandNodejs,
        color: 'text-green-600',
      },
      {
        name: 'mongodb',
        icon: IconBrandMongodb,
        color: 'text-green-400',
      },
      {
        name: 'angular',
        icon: IconBrandAngular,
        color: 'text-red-600',
      },
      {
        name: 'kotlin',
        icon: IconBrandKotlin,
        color: 'text-purple-600',
      },
      {
        name: 'typescript',
        icon: IconBrandTypescript,
        color: 'text-blue-700',
      },
    ],
    createAt: '18-09-2023',
  },
  {
    id: 2,
    name: 'Clone Instagram',
    description:
      'I recreated the Instagram login form using HTML, CSS, and JavaScript. This project showcases my ability to work with essential web development technologies, delivering an attractive and functional interface.',
    image:
      'https://res.cloudinary.com/dxbbbewxt/image/upload/v1699930421/project-gallery/clone-instagram_oewp3q.webp',
    category: 2,
    github: '',
    codepen: 'https://codepen.io/emartin94/pen/OJrXrEz',
    demo: 'https://codepen.io/emartin94/pen/OJrXrEz',
    tags: [
      {
        name: 'html',
        icon: IconHtml,
        color: 'text-orange-400',
      },
      {
        name: 'css',
        icon: IconBrandCss3,
        color: 'text-blue-400',
      },
      {
        name: 'javascript',
        icon: IconBrandJavascript,
        color: 'text-yellow-300',
      },
    ],
    createAt: '16-09-2023',
  },
  {
    id: 3,
    name: 'Project Name',
    description: 'Project Description',
    image:
      'https://res.cloudinary.com/dxbbbewxt/image/upload/v1699986930/project-gallery/before-trilogy_gmigrp.webp',
    github: 'https://github.com/eMartin94/project-gallery',
    demo: 'https://project-gallery-em.vercel.app/',
    tags: [
      {
        name: 'react',
        icon: IconBrandReact,
        color: 'text-sky-300',
      },
      {
        name: 'javascript',
        icon: IconBrandJavascript,
        color: 'text-yellow-300',
      },
      {
        name: 'tailwindcss',
        icon: IconBrandTailwind,
        color: 'text-sky-400',
      },
      {
        name: 'nodejs',
        icon: IconBrandNodejs,
        color: 'text-green-600',
      },
      {
        name: 'mongodb',
        icon: IconBrandMongodb,
        color: 'text-green-400',
      },
    ],
    createAt: '01-10-2022',
  },
  {
    id: 4,
    name: 'Project Name',
    description: 'Project Description',
    image: 'https://picsum.photos/200/300',
    github: 'https://github.com/eMartin94/project-gallery',
    demo: 'https://project-gallery-em.vercel.app/',
    tags: [
      {
        name: 'angular',
        icon: IconBrandAngular,
        color: 'text-red-600',
      },
      {
        name: 'typescript',
        icon: IconBrandTypescript,
        color: 'text-blue-700',
      },
      {
        name: 'tailwindcss',
        icon: IconBrandTailwind,
        color: 'text-sky-400',
      },
    ],
    createAt: '01-10-2022',
  },
  {
    id: 5,
    name: 'Project Name',
    description: 'Project Description',
    image: 'https://picsum.photos/200/300',
    github: 'https://github.com/eMartin94/project-gallery',
    demo: 'https://project-gallery-em.vercel.app/',
    tags: [
      {
        name: 'kotlin',
        icon: IconBrandKotlin,
        color: 'text-purple-600',
      },
    ],
    createAt: '01-10-2022',
  },
  {
    id: 6,
    name: 'Project Name',
    description: 'Project Description',
    image: 'https://picsum.photos/200/300',
    github: 'https://github.com/eMartin94/project-gallery',
    demo: 'https://project-gallery-em.vercel.app/',
    tags: [
      {
        name: 'nextjs',
        icon: IconBrandNextjs,
        color: 'text-gray-700',
      },
      {
        name: 'tailwindcss',
        icon: IconBrandTailwind,
        color: 'text-sky-400',
      },
    ],
    createAt: '01-10-2022',
  },
  {
    id: 7,
    name: 'Project Name',
    description: 'Project Description',
    image: 'https://picsum.photos/200/300',
    github: 'https://github.com/eMartin94/project-gallery',
    demo: 'https://project-gallery-em.vercel.app/',
    tags: [
      {
        name: 'nextjs',
        icon: IconBrandNextjs,
        color: 'text-gray-700',
      },
      {
        name: 'tailwindcss',
        icon: IconBrandTailwind,
        color: 'text-sky-400',
      },
    ],
    createAt: '01-10-2022',
  },
  {
    id: 8,
    name: 'Project Name',
    description: 'Project Description',
    image: 'https://picsum.photos/200/300',
    github: 'https://github.com/eMartin94/project-gallery',
    demo: 'https://project-gallery-em.vercel.app/',
    tags: [
      {
        name: 'nextjs',
        icon: IconBrandNextjs,
        color: 'text-gray-700',
      },
      {
        name: 'tailwindcss',
        icon: IconBrandTailwind,
        color: 'text-sky-400',
      },
    ],
    createAt: '01-10-2022',
  },
  {
    id: 9,
    name: 'Project Name',
    description: 'Project Description',
    image: 'https://picsum.photos/200/300',
    github: 'https://github.com/eMartin94/project-gallery',
    demo: 'https://project-gallery-em.vercel.app/',
    tags: [
      {
        name: 'nextjs',
        icon: IconBrandNextjs,
        color: 'text-gray-700',
      },
      {
        name: 'tailwindcss',
        icon: IconBrandTailwind,
        color: 'text-sky-400',
      },
    ],
    createAt: '01-10-2022',
  },
  {
    id: 10,
    name: 'Project Name',
    description: 'Project Description',
    image: 'https://picsum.photos/200/300',
    github: 'https://github.com/eMartin94/project-gallery',
    demo: 'https://project-gallery-em.vercel.app/',
    tags: [
      {
        name: 'nextjs',
        icon: IconBrandNextjs,
        color: 'text-gray-700',
      },
      {
        name: 'tailwindcss',
        icon: IconBrandTailwind,
        color: 'text-sky-400',
      },
    ],
    createAt: '01-10-2022',
  },
  {
    id: 11,
    name: 'Project Name',
    description: 'Project Description',
    image: 'https://picsum.photos/200/300',
    github: 'https://github.com/eMartin94/project-gallery',
    demo: 'https://project-gallery-em.vercel.app/',
    tags: [
      {
        name: 'nextjs',
        icon: IconBrandNextjs,
        color: 'text-gray-700',
      },
      {
        name: 'tailwindcss',
        icon: IconBrandTailwind,
        color: 'text-sky-400',
      },
    ],
    createAt: '01-10-2022',
  },
  {
    id: 12,
    name: 'Project Name',
    description: 'Project Description',
    image: 'https://picsum.photos/200/300',
    github: 'https://github.com/eMartin94/project-gallery',
    demo: 'https://project-gallery-em.vercel.app/',
    tags: [
      {
        name: 'nextjs',
        icon: IconBrandNextjs,
        color: 'text-gray-700',
      },
      {
        name: 'tailwindcss',
        icon: IconBrandTailwind,
        color: 'text-sky-400',
      },
    ],
    createAt: '01-10-2022',
  },
  {
    id: 13,
    name: 'Project Name',
    description: 'Project Description',
    image: 'https://picsum.photos/200/300',
    github: 'https://github.com/eMartin94/project-gallery',
    demo: 'https://project-gallery-em.vercel.app/',
    tags: [
      {
        name: 'nextjs',
        icon: IconBrandNextjs,
        color: 'text-gray-700',
      },
      {
        name: 'tailwindcss',
        icon: IconBrandTailwind,
        color: 'text-sky-400',
      },
    ],
    createAt: '01-10-2022',
  },
  {
    id: 14,
    name: 'Project Name',
    description: 'Project Description',
    image: 'https://picsum.photos/200/300',
    github: 'https://github.com/eMartin94/project-gallery',
    demo: 'https://project-gallery-em.vercel.app/',
    tags: [
      {
        name: 'nextjs',
        icon: IconBrandNextjs,
        color: 'text-gray-700',
      },
      {
        name: 'tailwindcss',
        icon: IconBrandTailwind,
        color: 'text-sky-400',
      },
    ],
    createAt: '01-10-2022',
  },
  {
    id: 15,
    name: 'Project Name',
    description: 'Project Description',
    image: 'https://picsum.photos/200/300',
    github: 'https://github.com/eMartin94/project-gallery',
    demo: 'https://project-gallery-em.vercel.app/',
    tags: [
      {
        name: 'nextjs',
        icon: IconBrandNextjs,
        color: 'text-gray-700',
      },
      {
        name: 'tailwindcss',
        icon: IconBrandTailwind,
        color: 'text-sky-400',
      },
    ],
    createAt: '01-10-2022',
  },
  {
    id: 16,
    name: 'Project Name',
    description: 'Project Description',
    image: 'https://picsum.photos/200/300',
    github: 'https://github.com/eMartin94/project-gallery',
    demo: 'https://project-gallery-em.vercel.app/',
    tags: [
      {
        name: 'nextjs',
        icon: IconBrandNextjs,
        color: 'text-gray-700',
      },
      {
        name: 'tailwindcss',
        icon: IconBrandTailwind,
        color: 'text-sky-400',
      },
    ],
    createAt: '01-10-2022',
  },
  {
    id: 17,
    name: 'Project Name',
    description: 'Project Description',
    image: 'https://picsum.photos/200/300',
    github: 'https://github.com/eMartin94/project-gallery',
    demo: 'https://project-gallery-em.vercel.app/',
    tags: [
      {
        name: 'nextjs',
        icon: IconBrandNextjs,
        color: 'text-gray-700',
      },
      {
        name: 'tailwindcss',
        icon: IconBrandTailwind,
        color: 'text-sky-400',
      },
    ],
    createAt: '01-10-2022',
  },
  {
    id: 18,
    name: 'Project Name',
    description: 'Project Description',
    image: 'https://picsum.photos/200/300',
    github: 'https://github.com/eMartin94/project-gallery',
    demo: 'https://project-gallery-em.vercel.app/',
    tags: [
      {
        name: 'nextjs',
        icon: IconBrandNextjs,
        color: 'text-gray-700',
      },
      {
        name: 'tailwindcss',
        icon: IconBrandTailwind,
        color: 'text-sky-400',
      },
    ],
    createAt: '01-10-2022',
  },
  {
    id: 19,
    name: 'Project Name',
    description: 'Project Description',
    image: 'https://picsum.photos/200/300',
    github: 'https://github.com/eMartin94/project-gallery',
    demo: 'https://project-gallery-em.vercel.app/',
    tags: [
      {
        name: 'nextjs',
        icon: IconBrandNextjs,
        color: 'text-gray-700',
      },
      {
        name: 'tailwindcss',
        icon: IconBrandTailwind,
        color: 'text-sky-400',
      },
    ],
    createAt: '01-10-2022',
  },
];

const socialDev = [
  {
    id: 1,
    name: 'linkedin',
    icon: IconBrandLinkedin,
    link: 'https://www.linkedin.com/in/emartinpizango/',
  },
  {
    id: 2,
    name: 'codepen',
    icon: IconBrandCodepen,
    link: 'https://codepen.io/emartin94/',
  },
  {
    id: 3,
    name: 'github',
    icon: IconBrandGithub,
    link: 'https://github.com/eMartin94',
  },
];

const socialMedia = [
  {
    id: 1,
    name: 'instagram',
    icon: IconBrandInstagram,
    link: 'https://www.instagram.com/emartiiin/',
  },
  {
    id: 2,
    name: 'twitter',
    icon: IconBrandTwitter,
    link: 'https://twitter.com/eMartiiin94',
  },
  {
    id: 3,
    name: 'threads',
    icon: IconBrandThreads,
    link: 'https://www.threads.net/@emartiiin',
  },
];

export { navLinks, categories, projects, socialDev, socialMedia };
