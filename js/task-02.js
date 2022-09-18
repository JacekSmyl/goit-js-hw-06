const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsElement = document.querySelector("#ingredients");

ingredients.map(ingredients => {
  const element = document.createElement("li")
  element.innerText = ingredients
  element.classList.add(`item`) 
  ingredientsElement.append(element)
}

)
