const tableBody = document.querySelector('#table-body');
const button = document.querySelector('.add-btn');
const form = document.querySelector('.form');
const main = document.querySelector('main');
const returnBtn = document.querySelector('.return');
const submit = document.querySelector('.submit');
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let page = document.querySelector('#pages');
let myLibrary = [];



button.addEventListener('click', displayForm)
returnBtn.addEventListener('click', returnToHome)
submit.addEventListener('click', getUserInput)

function displayForm() {
    form.classList.add('form')
    form.classList.remove('hide');
    main.style.display = 'none'
    form.title.textContent = ''
}

function returnToHome() {
    form.classList.add('hide')
    main.style.display = 'unset'

}
function Book(title, author, pages, comment) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.comment = comment;
  }
  
function getUserInput() {
  let titleText = title.value;
  let authorText = author.value;
  let pageNumber = page.value;
  let commentValue = getReadValue();
  let newBook = new Book(titleText, authorText, pageNumber, commentValue);
  myLibrary.push(newBook);
  displayArray();
  title.value = ''
  author.value = ''
  page.value = ''

  }
  
function getReadValue() {
    if(document.querySelector("input[name='read-book']:checked").value == 'yes') return true;
    else return false;
  }

 function displayArray() {
  for (let library of myLibrary) {
    let tableRow = document.createElement('tr');
    let tableData1 = document.createElement('td');
    tableData1.textContent = library.title;
    tableRow.appendChild(tableData1);

    let tableData2 = document.createElement('td');
    tableData2.textContent = library.author;
    tableRow.appendChild(tableData2);

    let tableData3 = document.createElement('td');
    tableData3.textContent = library.pages;
    tableRow.appendChild(tableData3);

    let tableData4 = document.createElement('td');
    tableData4.textContent = library.comment;
    tableRow.appendChild(tableData4);

    tableBody.appendChild(tableRow);
    form.classList.add('hide');
  main.style.display = 'initial'
  }

 } 
 
  



