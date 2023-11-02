interface Letter {
  word: string;
  key: string;
}

interface Name {
  letters: Letter[];
}

export const name: Name = {
  letters: [
    {word: 'P', key: '1'},
    {word: 'a', key: '2'},
    {word: 'u', key: '3'},
    {word: 'l', key: '4'},
    {word: 'o', key: '5'},
    {word: ' ', key: '6'},
    {word: 'P', key: '7'},
    {word: 'a', key: '8'},
    {word: 'i', key: '9'},
    {word: 'v', key: '10'},
    {word: 'a', key: '11'},
  ]
};
