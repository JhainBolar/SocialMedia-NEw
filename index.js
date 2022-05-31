const toggle = document.querySelector('.toggle')
const body = document.querySelector('.body')
const white = document.querySelector('.white')

toggle.addEventListener('click', ()=>{
    body.classList.toggle('active-a')
    white.classList.toggle('active-b')
})