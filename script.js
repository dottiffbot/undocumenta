const aboutButton = document.querySelector("#about");
const aboutSection = document.querySelector(".call")
const submitButton = document.querySelector("#guide");
const submitSection = document.querySelector(".submission")
const translationMenuButton = document.querySelector("#translationMenu");
const translationMenu = document.querySelector(".translation-menu");
const closeButton = document.querySelector(".close");
const body = document.querySelector("body");




const activateState = function(){
  
  const pixels = window.pageYOffset
  // console.log(pixels)
  
  if(pixels > 715){
    aboutButton.classList.add('active');
  } else {
    aboutButton.classList.remove('active')
  }
 
  
  
  if(pixels > 1720){
    submitButton.classList.add('active')
    aboutButton.classList.remove('active')
  } else {
    submitButton.classList.remove('active')
  }
  
  
}

document.addEventListener('scroll', function (){

  activateState();
})

translationMenuButton.addEventListener('click', function (){
  if(window.outerWidth <= 414 || window.outerWidth <= 800){
    translationMenu.style.width = "100vw"
   
  
  
  } else{
    translationMenu.style.width = "30vw"

  }
})

closeButton.addEventListener('click', function (){
  translationMenu.style.width = "0"
  body.style.overflowY = "scroll"
})

const tab = document.querySelector(".tab");


tab.addEventListener("click", function (){
  toggleTab()
  scrollToTab()
})

// aboutButton.addEventListener("click", function(){
//   scrollToAbout()
// })
// submitButton.addEventListener("click", function(){
//   scrollToSubmit()
// })




function toggleTab () {
  tab.classList.toggle("open")

}

function scrollToTab(){
tab.scrollIntoView({behavior:"smooth"});
}

// function scrollToAbout(){
// aboutSection.scrollIntoView({behavior:"smooth"});
// }

// function scrollToSubmit(){
// submitSection.scrollIntoView({behavior:"smooth"});
// }