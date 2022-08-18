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



