// tuple = array-like structure where each element represents some property of a record
const drink = {
  color: 'Clear',
  carbonated: true,
  sugar: 30
};

// alternate using type alias
type Drink = [string, boolean, number];

// tuple is created by types by order of elements
const ramune: [string, boolean, number] = ['Clear', true, 30];
const coffee: Drink = ['Brown', false, 0];
