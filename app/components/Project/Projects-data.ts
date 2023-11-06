interface Image {
  id: string;
  path: string;
  alt: string;
}

interface Link {
  id: string;
  path: string;
  link: string;
  alt: string;
  invert?: boolean;
}

export interface Project {
  title: string;
  description: string;
  images: Image[];
  tools: Link[];
  linkSite: string;
  linkGitHub: string;
  linkCertificate?: string;
}

const schoolRootFolder = 'images/school-management-system';
const nodeApiRootFolder = 'images/clean-node-api';
const taskMateRootFolder = 'images/task-mate';
const vakinhaBurgerRootFolder = 'images/vakinha-burger';
const codePixRootFolder = 'images/code-pix';

export const projects: Project[] = [
  {
    title: 'school system',
    description: 'school system description',
    images: [
      { id: '1', path: `/${schoolRootFolder}/login-page.png`, alt: 'school system login page' },
      { id: '2', path: `/${schoolRootFolder}/home-page.png`, alt: 'school system home page' },
      { id: '3', path: `/${schoolRootFolder}/list-page.png`, alt: 'school system list page' },
      { id: '4', path: `/${schoolRootFolder}/create-page.png`, alt: 'school system creation page' },
      { id: '5', path: `/${schoolRootFolder}/avatars-page.png`, alt: 'school system avatars page' }
    ],
    tools: [
      {
        id: '1',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg',
        link: 'https://www.typescriptlang.org/',
        alt: 'TypeScript'
      },
      {
        id: '2',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        link: 'https://nodejs.org/en',
        alt: 'NodeJs'
      },
      {
        id: '3',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        link: 'https://www.postgresql.org/',
        alt: 'PostgreSQL'
      },
      {
        id: '4',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        link: 'https://expressjs.com/pt-br/',
        alt: 'ExpressJs',
        invert: true
      },
      {
        id: '5',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        link: 'https://nextjs.org/',
        alt: 'NextJs',
        invert: true
      },
      {
        id: '6',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
        link: 'https://mui.com/',
        alt: 'Mui'
      },
      {
        id: '7',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
        link: 'https://tailwindcss.com/',
        alt: 'Tailwind'
      }
    ],
    linkSite: 'comming soon',
    linkGitHub: 'https://github.com/paulojr-eco/COM222-Frontend'
  },
  {
    title: 'clean node api',
    description: 'clean node api description',
    images: [
      { id: '1', path: `/${nodeApiRootFolder}/diagram-login.png`, alt: 'clean node api structure diagram' },
      { id: '2', path: `/${nodeApiRootFolder}/tdd.png`, alt: 'clean node api tdd diagram' }
    ],
    tools: [
      {
        id: '1',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg',
        link: 'https://www.typescriptlang.org/',
        alt: 'TypeScript'
      },
      {
        id: '2',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        link: 'https://nodejs.org/en',
        alt: 'NodeJs'
      },
      {
        id: '3',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        link: 'https://expressjs.com/pt-br/',
        alt: 'ExpressJs',
        invert: true
      },
      {
        id: '4',
        path: '/images/vitest.svg',
        link: 'https://vitest.dev/',
        alt: 'Vitest'
      },
      {
        id: '5',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        link: 'https://www.mongodb.com/',
        alt: 'MongoDB'
      }
    ],
    linkSite: 'comming soon',
    linkGitHub: 'https://github.com/paulojr-eco/Clean-Node-API'
  },
  {
    title: 'task mate',
    description: 'task mate description',
    linkCertificate: 'https://www.udemy.com/certificate/UC-188234fd-e7f8-4754-b7f7-25a63287e6d4/',
    images: [
      { id: '1', path: `/${taskMateRootFolder}/home-page.png`, alt: 'task mate home page' },
      { id: '2', path: `/${taskMateRootFolder}/completed-page.png`, alt: 'task mate completion page' }
    ],
    tools: [
      {
        id: '1',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg',
        link: 'https://www.typescriptlang.org/',
        alt: 'TypeScript'
      },
      {
        id: '2',
        path: 'https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg',
        link: 'https://graphql.org/',
        alt: 'GraphQL'
      },
      {
        id: '3',
        path: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/prisma.svg',
        link: 'https://www.prisma.io/',
        alt: 'Prisma ORM',
        invert: true
      },
      {
        id: '4',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        link: 'https://nextjs.org/',
        alt: 'NextJs',
        invert: true
      },
      {
        id: '5',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        link: 'https://www.docker.com/',
        alt: 'Docker'
      }
    ],
    linkSite: 'comming soon',
    linkGitHub: 'https://github.com/paulojr-eco/Task-Mate'
  },
  {
    title: 'vakinha burger',
    description: 'vakinha burger description',
    images: [
      { id: '1', path: `/${vakinhaBurgerRootFolder}/login-page.png`, alt: 'vakinha burger login page' },
      { id: '2', path: `/${vakinhaBurgerRootFolder}/products-page.png`, alt: 'vakinha burger products page' },
      { id: '3', path: `/${vakinhaBurgerRootFolder}/edit-product-page.png`, alt: 'vakinha burger edit product page' },
      { id: '4', path: `/${vakinhaBurgerRootFolder}/payment-methods-page.png`, alt: 'vakinha burger payment methods page' }
    ],
    tools: [
      {
        id: '1',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
        link: 'https://dart.dev/',
        alt: 'Dart'
      },
      {
        id: '2',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
        link: 'https://flutter.dev/',
        alt: 'Flutter'
      },
      {
        id: '3',
        path: '/images/vakinha-burger/mobx.svg',
        link: 'https://mobx.netlify.app/',
        alt: 'MobX'
      },
      {
        id: '4',
        path: '/images/vakinha-burger/modular-logo.png',
        link: 'https://modular.flutterando.com.br/',
        alt: 'Modular Flutter'
      },
    ],
    linkSite: 'comming soon',
    linkCertificate: 'https://www.linkedin.com/in/paulojr-eco/overlay/1635534544889/single-media-viewer/?profileId=ACoAADYFUdwBzt7PB5-MeyRC3uQRj-naLw6rNWA',
    linkGitHub: 'https://github.com/paulojr-eco/Vakinha-Burger'
  },
  {
    title: 'code pix',
    description: 'code pix description',
    images: [
      { id: '1', path: `/${codePixRootFolder}/login-page.png`, alt: 'vakinha burger login page' },
      { id: '2', path: `/${codePixRootFolder}/products-page.png`, alt: 'vakinha burger products page' },
      { id: '3', path: `/${codePixRootFolder}/edit-product-page.png`, alt: 'vakinha burger edit product page' },
      { id: '4', path: `/${codePixRootFolder}/payment-methods-page.png`, alt: 'vakinha burger payment methods page' }
    ],
    tools: [
      {
        id: '1',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
        link: 'https://dart.dev/',
        alt: 'Dart'
      },
      {
        id: '2',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
        link: 'https://flutter.dev/',
        alt: 'Flutter'
      },
      {
        id: '3',
        path: '/mobx.svg',
        link: 'https://mobx.netlify.app/',
        alt: 'MobX'
      },

      {
        id: '4',
        path: '/modular-logo.png',
        link: 'https://modular.flutterando.com.br/',
        alt: 'Modular Flutter'
      },
    ],
    linkSite: 'comming soon',
    linkGitHub: 'https://github.com/paulojr-eco/Vakinha-Burger'
  }
];
