export const searchInArray = (data, term) =>
  data.filter(o => o.title.toLowerCase().includes(term.trim().toLowerCase()));

export const sortArray = (data, term) => {
  switch (term) {
    case 'Date':
      return data.sort((a, b) => b.date - a.date);
    case 'Price':
      return data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    case 'Name':
      return data.sort((a, b) => a.title.localeCompare(b.title));
    case 'Category':
      return data.sort((a, b) => a.category.localeCompare(b.category));
    default:
      return data;
  }
};

export const performOperations = (data, sort, search) => {
  const searchedData = searchInArray(data, search);
  return sortArray(searchedData, sort);
};

export const generatePieData = data => {
  const priceArray = data.map(item => item.price);
  const count = {};
  priceArray.forEach(i => {
    count[i] = (count[i] || 0) + 1;
  });
  const pieArray = [['Apps', 'Top Apps Prices']];
  for (const [key, value] of Object.entries(count)) {
    pieArray.push([`$${key}`, value]);
  }

  return [...pieArray];
};

export const simplifyArray = data =>
  data.map(o => ({
    id: o.id.attributes['im:id'],
    title: o.title.label,
    price: o['im:price'].attributes.amount,
    image: o['im:image'][2].label,
    summary: o.summary.label,
    link: o.link[0].attributes.href,
    category: o.category.attributes.label,
    date: o['im:releaseDate'].label,
    dateText: o['im:releaseDate'].attributes.label,
  }));
