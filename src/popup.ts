
const buttonBTN = document.querySelector('.btn') as HTMLElement
const popup = document.querySelector('.popup-wrapper') as HTMLElement
const closePop = document.querySelector('.popup-close') as HTMLElement

buttonBTN.addEventListener('click', ()=>{
popup.style.display = 'block'
})

closePop.addEventListener('click', ()=>{
popup.style.display = 'none'
})

// popup.addEventListener('click', ()=>{
// popup.style.display = 'none'
// })