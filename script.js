const tableBody = document.querySelector('#table-body');
const addButton = document.querySelector('.add-btn');
const form = document.querySelector('.form');
const main = document.querySelector('main');
const returnBtn = document.querySelector('.return');
const submit = document.querySelector('.submit');

let title = document.querySelector('#title');
let author = document.querySelector('#author');
let page = document.querySelector('#pages');
let myLibrary = [];

addButton.addEventListener('click', displayForm);
returnBtn.addEventListener('click', returnToTable);
submit.addEventListener('click', getUserInput);
submit.addEventListener('click', displayBook);


function displayForm() {
  tableBody.innerHTML = '';
  form.classList.add('form');
  form.classList.remove('hide');
  main.style.display = 'none';
  returnBtn.style.display = 'initial';
  clearForm();
  
}

function clearForm() {
  title.value = '';
  author.value = '';
  page.value = '';
  newBook = '';
}

function returnToTable() {
  form.classList.add('hide');
  main.style.display = 'initial';
  displayBook();

}

// constructor function
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  }
  
  // collects user inputs and sends to myLibrary array of objects
function getUserInput() {
  let titleText = title.value;
  let authorText = author.value;
  let pageNumber = page.value;
  let readValue = getReadValue();
  let newBook = new Book(titleText, authorText, pageNumber, readValue);
  myLibrary.push(newBook);
  clearForm();

  }
  
function getReadValue() {
  if(document.querySelector("input[name='read-book']:checked").value == 'yes') return 'YES';
  else return 'NO';
}

  // displays myLibrary array of objects on the html table
function displayBook() {

  tableBody.innerHTML = '';
  main.style.display = 'initial';
  form.classList.add('hide');
  const bookTable = document.querySelector('tbody');
  bookTable.innerHTML = '';
  
  
  for (let bookIndex in myLibrary) {
      const bookRow = document.createElement('tr');
      
      for (let attrIndex in myLibrary[bookIndex]) {
          const cell = document.createElement('td');
          cell.textContent = myLibrary[bookIndex][attrIndex];
          bookRow.appendChild(cell);  
      }
      // attach edit button to DOM and add eventlistener to it
          const editBtn = document.createElement('td');
          editBtn.setAttribute('class', 'edit-btn');
          editBtn.textContent = 'Edit';
          editBtn.addEventListener('click', function(ev) {
          displayForm();
          returnBtn.style.display = 'none';
          title.value = myLibrary[bookIndex].title;
          author.value = myLibrary[bookIndex].author;
          page.value = myLibrary[bookIndex].pages;
          myLibrary.splice(bookIndex, 1);
          
             })
                           
      // append delete button to DOM and add eventlistener to it
          const deleteBtn = document.createElement('td');
          deleteBtn.setAttribute('class', 'delete-btn');
          deleteBtn.textContent = 'Delete'; 
          deleteBtn.addEventListener('click', function() {
          myLibrary.splice(bookIndex, 1);
          displayBook();
          
          })
      bookRow.appendChild(editBtn);
      bookRow.appendChild(deleteBtn);  
      bookTable.appendChild(bookRow);
 }

}



