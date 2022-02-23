const steps_container = document.querySelector('.steps-container')
const indicatorBar = document.querySelector('#indicator')
const steps = [...document.querySelectorAll('.step')]
let current = 0
const buttons = [...document.querySelectorAll('button')]


buttons.forEach((el)=>{
  el.addEventListener("click", (e)=>{
    console.log(current)
    if((current >= steps.length-1 && !e.target.matches('[data-decrement]')) || (current <= 0 && !e.target.matches('[data-increment]'))) return
    if(e.target.matches('[data-increment]')) current++
    else current--
    changeIndicator()
  })
})


function changeIndicator(){
  steps.forEach((el,idx)=>{
    indicatorBar.style.width = `${((current))*100/steps.length}vw`
  })
}