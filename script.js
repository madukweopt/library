const tableBody = document.querySelector('#table-body');
const addButton = document.querySelector('.add-btn');
const form = document.querySelector('.form');
const main = document.querySelector('main');
const returnBtn = document.querySelector('.return');
const submit = document.querySelector('.submit');
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let page = document.querySelector('#pages');
let myLibrary = [
  {
    title: 'Rich Dad and Poor Dad',
    author: 'Robert Kiyosaki',
    pages: '350',
    comment: true
  }
];




addButton.addEventListener('click', displayForm)
returnBtn.addEventListener('click', returnToTable)
submit.addEventListener('click', getUserInput)
submit.addEventListener('click', displayArray)

function displayForm() {
    form.classList.add('form')
    form.classList.remove('hide');
    main.style.display = 'none'
  
}

function returnToTable() {
    form.classList.add('hide')
    main.style.display = 'unset'

}

// constructor function
function Book(title, author, pages, comment) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.comment = comment;
  }
  
  // collects user inputs and sends to myLibrary array of objects
function getUserInput() {
  let titleText = title.value;
  let authorText = author.value;
  let pageNumber = page.value;
  let commentValue = getReadValue();
  let newBook = new Book(titleText, authorText, pageNumber, commentValue);
  myLibrary.push(newBook);
  title.value = ''
  author.value = ''
  page.value = ''
  newBook = ''

  }
  
function getReadValue() {
    if(document.querySelector("input[name='read-book']:checked").value == 'yes') return true;
    else return false;
  }

  // displays myLibrary array of objects on the html table
 function displayArray() {
  tableBody.innerHTML = ''
  main.style.display = 'initial'

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

    let editBtn = document.createElement('td');
    let editBtnTd = document.createElement('button');
    editBtnTd.textContent = 'Edit';
    editBtn.appendChild(editBtnTd);
    tableRow.appendChild(editBtn)

    let deleteBtn = document.createElement('td') 
    let deleteBtnTd = document.createElement('button')
    deleteBtnTd.textContent = 'Delete';
    deleteBtn.appendChild(deleteBtnTd);
    tableRow.appendChild(deleteBtn);

    tableBody.appendChild(tableRow);
    form.classList.add('hide');
   
  console.log(myLibrary)
  }

 } 
 
  



