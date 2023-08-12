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

export const projects: Project[] = [
  {
    title: 'School Management System',
    description: 'School Management System Description',
    images: [
      { id: '1', path: '/school-system-login.png' },
      { id: '2', path: '/school-system-login.png' },
      { id: '3', path: '/school-system-login.png' }
    ],
    tools: [
      {
        id: '1',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg',
        link: 'https://www.typescriptlang.org/'
      },
      {
        id: '2',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        link: 'https://www.postgresql.org/'
      },
      {
        id: '3',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        link: 'https://expressjs.com/pt-br/'
      },
      {
        id: '4',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        link: 'https://nextjs.org/'
      },
      {
        id: '5',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
        link: 'https://mui.com/'
      },
      {
        id: '6',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
        link: 'https://tailwindcss.com/'
      }
    ],
    linkSite: 'comming soon',
    linkGitHub: 'https://github.com/paulojr-eco/COM222-Frontend'
  }
];
