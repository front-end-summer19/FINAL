const recipes = [
  {
    ingredients: ['salt', 'honey', 'sugar', 'rice', 'walnuts', 'lime juice'],
    preparation: [
      { step: 'Boil water' },
      { step: 'Fry the eggs' },
      { step: 'Serve hot' },
    ],
    _id: '5d555137ab25eb07faaf8203',
    title: 'Lasagna',
    description:
      'Lasagna noodles piled high and layered full of three kinds of cheese to go along with the perfect blend of meaty and zesty, tomato pasta sauce all loaded with herbs.',
    image: 'pho.png',
    created: '2019-08-15T12:33:59.150Z',
    __v: 0,
  },
  {
    ingredients: ['salt', 'honey', 'sugar', 'rice', 'walnuts', 'lime juice'],
    preparation: [
      { step: 'Boil water' },
      { step: 'Fry the eggs' },
      { step: 'Serve hot' },
    ],
    _id: '5d555137ab25eb07faaf8204',
    title: 'Pho Soup',
    description:
      'Pho (pronounced "fuh") is the most popular food in Vietnam, often eaten for breakfast, lunch and dinner. It is made from a special broth that simmers for several hours infused with exotic spices and served over rice noodles with fresh herbs.',
    image: 'pho.png',
    created: '2019-08-15T12:33:59.151Z',
    __v: 0,
  },
  {
    ingredients: ['salt', 'honey', 'sugar', 'rice', 'walnuts', 'lime juice'],
    preparation: [
      { step: 'Boil water' },
      { step: 'Fry the eggs' },
      { step: 'Serve hot' },
    ],
    _id: '5d555137ab25eb07faaf8205',
    title: 'Guacamole',
    description:
      'Guacamole is definitely a staple of Mexican cuisine. Even though Guacamole is pretty simple, it can be tough to get the perfect flavor - with this authentic Mexican guacamole recipe, though, you will be an expert in no time.',
    image: 'guacamole.png',
    created: '2019-08-15T12:33:59.152Z',
    __v: 0,
  },
  {
    ingredients: ['salt', 'honey', 'sugar', 'rice', 'walnuts', 'lime juice'],
    preparation: [
      { step: 'Boil water' },
      { step: 'Fry the eggs' },
      { step: 'Serve hot' },
    ],
    _id: '5d555137ab25eb07faaf8206',
    title: 'Hamburger',
    description:
      'A Hamburger (often called a burger) is a type of sandwich in the form of rounded bread sliced in half with its center filled with a patty which is usually ground beef, then topped with vegetables such as lettuce, tomatoes and onions.',
    image: 'hamburger.png',
    created: '2019-08-15T12:33:59.152Z',
    __v: 0,
  },
];

recipeId = '5d555137ab25eb07faaf8203';
updatedRecipe = {
  ingredients: ['salt', 'honey', 'sugar', 'rice', 'walnuts', 'lime juice'],
  preparation: [
    { step: 'Boil water' },
    { step: 'Fry the eggs' },
    { step: 'Serve hot' },
  ],
  _id: '5d555137ab25eb07faaf8203',
  title: 'Lasagna Updated',
  description:
    'Updated! Lasagna noodles piled high and layered full of three kinds of cheese to go along with the perfect blend of meaty and zesty, tomato pasta sauce all loaded with herbs.',
  image: 'lasagna.png',
  created: '2019-08-15T12:33:59.150Z',
  __v: 0,
};

const newRecipes = [...recipes];
const updatedRecipes = newRecipes.map(recipe => {
  if (recipe._id === recipeId) {
    recipe = updatedRecipe;
    console.log(recipe);
  }
  return recipe;
});
console.log(updatedRecipes);
