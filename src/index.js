const sectionProject = document.querySelector('.section__open');
const wrapper = document.querySelector('.wrapper');
const containerProject = document.querySelectorAll('.container__project');



function scrollBg(e){
  let barra = sectionProject.getBoundingClientRect();
  let posicion = barra * 0.01;

  // sectionProject.style.backgroundPosition = '0 ' + posicion+'px';
  // console.log(barra,window.scrollY)

  containerProject.forEach(image=>{

    const coordinatesImage = image.getBoundingClientRect()
    console.log(coordinatesImage)
    //half way trhough the image

    const windowHeight = window.innerHeight;

    const halfScreen = windowHeight / 2 > coordinatesImage.top
    // console.log(windowHeight/2,coordinatesImage.top,halfScreen)


    /*
    const slideInAt = (-sectionProject.getBoundingClientRect().top + window.innerHeight) * coordinatesImage.height / 2;

    const imageBottom = coordinatesImage.top + coordinatesImage.height;
    const isHalfShown = slideInAt > coordinatesImage.top;
    const isNotScrolledPast = -sectionProject.getBoundingClientRect().top  < imageBottom;


    if (isHalfShown && isNotScrolledPast){
      image.classList.add('black');
      // console.log(image)
    }else{
      image.classList.remove('black')
    }
*/
    // console.log(-sectionProject.getBoundingClientRect().top)
    // console.log (sectionProject.getBoundingClientRect().y , window.innerHeight)
    //  console.log(slideInAt,imageBottom,isHalfShown,isNotScrolledPast)
    // console.log(-sectionProject.getBoundingClientRect().top + window.innerHeight)
    // console.log(imageBottom,coordinatesImage.top ,coordinatesImage.height,isHalfShown)
    // console.log(image, -sectionProject.getBoundingClientRect().top  , imageBottom)
  })

}




//aplica un delay a la funcion para que no se ejecute constantemente
function debounce(func, wait = 20, immediate = true) {
   var timeout;
   return function() {
   var context = this, args = arguments;
   var later = function() {
   timeout = null;
   if (!immediate) func.apply(context, args);
     };
   var callNow = immediate && !timeout;
   clearTimeout(timeout);
   timeout = setTimeout(later, wait);
   if (callNow) func.apply(context, args);
     };
 }


// document.addEventListener('DOMContentLoaded',function(){
//    window.addEventListener('scroll',scrollBg);
// })
// wrapper.addEventListener('scroll',debounce(scrollBg));
wrapper.addEventListener('scroll',scrollBg);