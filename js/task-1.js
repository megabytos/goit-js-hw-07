const categories = document.querySelectorAll('#categories .item');

console.log(`Numbers of categories: ${categories.length}`);

categories.forEach(elm => {
  const h2 = elm.querySelector('H2');
  console.log(`Category: ${h2.textContent}`);
  const items = elm.querySelectorAll('ul li');
  console.log(`Elements: ${items.length}`);
});
