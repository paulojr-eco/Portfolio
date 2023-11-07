interface Contact {
  type: string;
  themeColor: string;
  link: string;
  alt: string;
  image: string;
  imageGradient: string;
  id: number;
}

const contactData: Contact[] = [
  {
    type: 'linkedin',
    themeColor: 'bg-blue-gradient',
    link: 'https://www.linkedin.com/in/paulojr-eco/',
    alt: 'linkedin contact',
    image: '/images/linkedin.png',
    imageGradient: '/images/linkedin-gradient.png',
    id: 3
  },
  {
    type: 'github',
    themeColor: 'bg-orange-gradient',
    link: 'https://github.com/paulojr-eco',
    alt: 'github contact',
    image: '/images/github.png',
    imageGradient: '/images/github-gradient.png',
    id: 2
  },
  {
    type: 'email',
    themeColor: 'bg-purple-gradient',
    link: 'mailto:paulojr.eco@gmail.com',
    alt: 'email contact',
    image: '/images/email.png',
    imageGradient: '/images/email-gradient.png',
    id: 1
  }
];

export default contactData;
