let show = true;

const menuSection = document.querySelector('.menu-section')
const menuToggle = menuSection.querySelector('.menu-toggle')
const nav = document.querySelector('.nav')
const linkOne = document.querySelector('.linkOne')
const linkTwo = document.querySelector('.linkTwo')
const linkThree = document.querySelector('.linkThree')

menuToggle.addEventListener('click', toggle)
linkOne.addEventListener('click', toggle)
linkTwo.addEventListener('click', toggle)
linkThree.addEventListener('click', toggle)

function toggle(e){
  if(e.view.innerWidth >= 650){
    document.body.style.overflow = show ? "initial" : "hidden"
  } 
  else{
    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle('on', show)
    show = !show
}
}