import * as flavorsAPI from "./flavorService";

const drinks = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Kennth's Cider",
    flavor: { _id: "5b21ca3eeb7f6fbccd471820", name: "Beer and Cider" },
    numberInStock: 6,
    purchaseCost: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "AJ Vodka",
    flavor: { _id: "5b21ca3eeb7f6fbccd471814", name: "Liqour" },
    numberInStock: 5,
    purchaseCost: 4
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Regina Triple Distilled Voka",
    flavor: { _id: "5b21ca3eeb7f6fbccd471814", name: "Liqour" },
    numberInStock: 8,
    purchaseCost: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Ahmed's Aged Brandy",
    flavor: { _id: "5b21ca3eeb7f6fbccd471818", name: "Mixed" },
    numberInStock: 7,
    purchaseCost: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Mel's Sleeping Cider",
    flavor: { _id: "5b21ca3eeb7f6fbccd471820", name: "Beer and Cider" },
    numberInStock: 7,
    purchaseCost: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Derek's Dark Amber",
    flavor: { _id: "5b21ca3eeb7f6fbccd471820", name: "Beer and Cider" },
    numberInStock: 7,
    purchaseCost: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Panatda's Strawberry Wine",
    flavor: { _id: "5b21ca3eeb7f6fbccd471818", name: "Mixed" },
    numberInStock: 7,
    purchaseCost: 4
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "Ernest's Light Beer",
    flavor: { _id: "5b21ca3eeb7f6fbccd471820", name: "Beer and Cider" },
    numberInStock: 4,
    purchaseCost: 4
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "Epicodus Dream",
    flavor: { _id: "5b21ca3eeb7f6fbccd471818", name: "Mixed" },
    numberInStock: 7,
    purchaseCost: 4
  }
];

export function getDrinks() {
  return drinks;
}

export function getDrink(id) {
  return drinks.find(m => m._id === id);
}

export function saveDrink(drink) {
  let drinkInDb = drinks.find(m => m._id === drink._id) || {};
  drinkInDb.title = drink.title;
  drinkInDb.flavor = flavorsAPI.flavors.find(g => g._id === drink.flavorId);
  drinkInDb.numberInStock = drink.numberInStock;
  drinkInDb.purchaseCost = drink.purchaseCost;

  if (!drinkInDb._id) {
    drinkInDb._id = Date.now().toString();
    drinks.push(drinkInDb);
  }

  return drinkInDb;
}

export function deleteDrink(id) {
  let drinkInDb = drinks.find(m => m._id === id);
  drinks.splice(drinks.indexOf(drinkInDb), 1);
  return drinkInDb;
}
