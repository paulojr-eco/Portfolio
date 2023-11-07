export interface CardFlipOption {
  name: string;
  themeColor: string;
  link: string;
  id: number;
}

const cardFlipOptions: CardFlipOption[] = [
  {
    name: 'clean node api',
    themeColor: 'bg-green-card',
    link: '/clean-node-api',
    id: 1
  },
  {
    name: 'task mate',
    themeColor: 'bg-blue-card',
    link: '/task-mate',
    id: 2
  },
  {
    name: 'school system',
    themeColor: 'bg-purple-card',
    link: '/school-system',
    id: 3
  },
  {
    name: 'vakinha burger',
    themeColor: 'bg-orange-card',
    link: '/vakinha-burger',
    id: 4
  }
];

export default cardFlipOptions;
