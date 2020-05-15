let data = [
  {
    name: 'Пояснюючи світ. Історія сучасної науки',
    author: 'С. Вайнберг',
    image: 'https://www.bookclub.ua/images/db/goods/50220_86846.jpg',
    plot: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam doloremque pariatur impedit sint, neque numquam ipsam.',
    id: '1'
  },
  {
    name: 'Homo Deus: за лаштунками майбутнього',
    author: 'Юваль Харари',
    image: 'https://www.bookclub.ua/images/db/goods/48656_79863.jpg',
    plot: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam doloremque pariatur impedit sint, neque numquam ipsam.',
    id: '2'
  },
  {
    name: 'Ми - це наш мозок',
    author: 'Дик Франс Свааб',
    image: 'https://www.bookclub.ua/images/db/goods/40072_65378.jpg',
    plot: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam doloremque pariatur impedit sint, neque numquam ipsam.',
    id: '3'
  }
];

if(localStorage.getItem('library') === null){
  localStorage.setItem("library", JSON.stringify(data));
}

