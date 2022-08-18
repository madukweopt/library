const button = document.querySelector('.add-btn');
const form = document.querySelector('.form')
const main = document.querySelector('main')


button.addEventListener('click', function() {
form.classList.add('form')
form.classList.remove('hide');
main.style.display = 'none'

})


let myLibrary = {};

function Book(title, author, pages, read) {
    this.tittle = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

