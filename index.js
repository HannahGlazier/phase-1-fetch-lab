function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  // fetch("https://anapioficeandfire.com/api/books")
  // .then(function(res){
  //   return res.json
  // .then (renderBooks(res))
  // }) 
  
  return fetch("https://anapioficeandfire.com/api/books")
    .then(res => {
      return res.json()})
    .then(res => renderBooks(res));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

