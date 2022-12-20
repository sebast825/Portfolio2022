const preloader = document.querySelector('.preloader');

window.addEventListener('load',()=>{
  preloader.style.display = 'none';
})



const checkboxLanguage = document.querySelector('.checkboxLanguage');


checkboxLanguage.addEventListener('click',()=>{
  let checkboxValue = checkboxLanguage.checked;

  if (checkboxValue){
    location.href = "spanish.html"
  }else{
    location.href = "index.html"
  }
})