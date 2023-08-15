interface Image {
  id: string;
  path: string;
}

interface Link {
  id: string;
  path: string;
  link: string;
}

export interface Project {
  title: string;
  description: string;
  images: Image[];
  tools: Link[];
  linkSite: string;
  linkGitHub: string;
}

const schoolRootFolder = 'school-management-system';
const nodeApiRootFolder = 'clean-node-api';
const taskMateRootFolder = 'task-mate';
const vakinhaBurgerRootFolder = 'vakinha-burger';

export const projects: Project[] = [
  {
    title: 'School Management System',
    description: 'School Management System Description',
    images: [
      { id: '1', path: `/${schoolRootFolder}/login-page.png` },
      { id: '2', path: `/${schoolRootFolder}/home-page.png` },
      { id: '3', path: `/${schoolRootFolder}/list-page.png` },
      { id: '4', path: `/${schoolRootFolder}/create-page.png` },
      { id: '5', path: `/${schoolRootFolder}/avatars-page.png` }
    ],
    tools: [
      {
        id: '1',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg',
        link: 'https://www.typescriptlang.org/'
      },
      {
        id: '2',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        link: 'https://nodejs.org/en'
      },
      {
        id: '3',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        link: 'https://www.postgresql.org/'
      },
      {
        id: '4',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        link: 'https://expressjs.com/pt-br/'
      },
      {
        id: '5',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        link: 'https://nextjs.org/'
      },
      {
        id: '6',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
        link: 'https://mui.com/'
      },
      {
        id: '7',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
        link: 'https://tailwindcss.com/'
      }
    ],
    linkSite: 'comming soon',
    linkGitHub: 'https://github.com/paulojr-eco/COM222-Frontend'
  },
  {
    title: 'Clean Node API',
    description: 'Clean Node API Description',
    images: [
      { id: '1', path: `/${nodeApiRootFolder}/diagram-login.png` },
      { id: '2', path: `/${nodeApiRootFolder}/tdd.png` }
    ],
    tools: [
      {
        id: '1',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg',
        link: 'https://www.typescriptlang.org/'
      },
      {
        id: '2',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        link: 'https://nodejs.org/en'
      },
      {
        id: '3',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        link: 'https://expressjs.com/pt-br/'
      },
      {
        id: '4',
        path: '/vitest.svg',
        link: 'https://vitest.dev/'
      },
      {
        id: '5',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        link: 'https://www.mongodb.com/'
      }
    ],
    linkSite: 'comming soon',
    linkGitHub: 'https://github.com/paulojr-eco/Clean-Node-API'
  },
  {
    title: 'Task Mate',
    description: 'Task Mate Description',
    images: [
      { id: '1', path: `/${taskMateRootFolder}/home-page.png` },
      { id: '2', path: `/${taskMateRootFolder}/completed-page.png` }
    ],
    tools: [
      {
        id: '1',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg',
        link: 'https://www.typescriptlang.org/'
      },
      {
        id: '2',
        path: 'https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg',
        link: 'https://graphql.org/'
      },
      {
        id: '3',
        path: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/prisma.svg',
        link: 'https://www.prisma.io/'
      },
      {
        id: '4',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        link: 'https://nextjs.org/'
      },
      {
        id: '5',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        link: 'https://www.docker.com/'
      }
    ],
    linkSite: 'comming soon',
    linkGitHub: 'https://github.com/paulojr-eco/Task-Mate'
  },
  {
    title: 'Vakinha Burger',
    description: 'Vakinha Burger Description',
    images: [
      { id: '1', path: `/${vakinhaBurgerRootFolder}/login-page.png` },
      { id: '2', path: `/${vakinhaBurgerRootFolder}/products-page.png` },
      { id: '3', path: `/${vakinhaBurgerRootFolder}/edit-product-page.png` },
      { id: '4', path: `/${vakinhaBurgerRootFolder}/pagment-methods-page.png` }
    ],
    tools: [
      {
        id: '1',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
        link: 'https://dart.dev/'
      },
      {
        id: '2',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
        link: 'https://flutter.dev/'
      },
      {
        id: '3',
        path: '/mobx.svg',
        link: 'https://mobx.netlify.app/'
      },

      {
        id: '4',
        path: '/modular-logo.png',
        link: 'https://modular.flutterando.com.br/'
      },
    ],
    linkSite: 'comming soon',
    linkGitHub: 'https://github.com/paulojr-eco/Vakinha-Burger'
  }
];
