const submit = document.querySelector('#submit');
const cardArea = document.querySelector('.cards');
const title = document.querySelector('#bookName');
const author = document.querySelector('#author');
const year = document.querySelector('#year')

const cards = document.querySelector('.cards');



const myLibrary = [];
console.log('Library list:',myLibrary);


function Book(title, author, yearPublished) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
}

function addBookToLibrary(book) {
  // do stuff here
  const bookTitle = book.target[1].value;
  const bookAuthor = book.target[2].value;
  const bookPublished = book.target[3].value;

  var libraryLength = myLibrary.length;
  console.log('Library length:',libraryLength);
  console.log("book name =",bookTitle,"book AUthor:",bookAuthor,"Year:",bookPublished);
  myLibrary[libraryLength] = [bookTitle, bookAuthor, bookPublished];

  //test code
  console.log("Book target value",book.target[1].value)

  var newRow = document.createElement('div');
  var newTitle = document.createElement('p');
  var newAuthor = document.createElement('p');
  var newYear = document.createElement('p');
  const removeButton = document.createElement('button');
  const readButton = document.createElement('button');
  readButton.classList.add('readStatus');
  removeButton.classList.add('removeItem');

  removeButton.textContent = 'Remove Book';
  newRow.className = 'card';
  readButton.textContent='Not read';
  newTitle.textContent = bookTitle;
  newAuthor.textContent = bookAuthor;
  newYear.textContent = bookPublished;
  newRow.appendChild(newTitle);
  newRow.appendChild(newAuthor);
  newRow.appendChild(newYear);
  newRow.appendChild(readButton);
  newRow.appendChild(removeButton)
  cards.appendChild(newRow);

}


// submit.addEventListener('click',addBookToLibrary(e));
// Do no include parenthesis after function name or it will automatically run
form.addEventListener('submit', addBookToLibrary);

myLibrary.forEach((bookItem)=>{
  console.log("display book test",bookItem);
  var newRow = document.createElement('div');
  newRow.className = 'card';
  newRow.textContent = bookItem;
  cards.appendChild(newRow);
});

// const book1 = new Book("Eragon","Christopher","2004");
// addBookToLibrary(book1);

// console.log(myLibrary);




