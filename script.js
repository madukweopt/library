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
  }v
  
  function getUserInput() {
  let titleText = title.value;
  let authorText = author.value;
  let pageNumber = page.value;
  let commentValue = getReadValue();
  let newBook = new Book(titleText, authorText, pageNumber, commentValue);
  myLibrary.push(newBook);
  }
  
  function getReadValue() {
    if(document.querySelector("input[name='read-book']:checked").value == 'yes') return true;
    else return false;
  }
  



