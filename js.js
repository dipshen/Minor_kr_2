const items = [
  { name: "Шоппер", value: 1000 },
  { name: "Кружка", value: 300 },
  { name: "Термос", value: 600 },
  { name: "Тарелка", value: 400 },
  { name: "Мороженое", value: 100 },
  { name: "Ланч", value: 350 },
  { name: "Рожок", value: 70 },
  { name: "Пицца", value: 450 },
  { name: "Шоколад", value: 150 },
  { name: "Леденец", value: 50 },
];

// sort by value
items.sort((a, b) => a.value - b.value);

// sort by name
items.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
