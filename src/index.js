const sectionProject = document.querySelector('#section__project');



function scrollBg(e){
   let barra = window.scrollY;
   let posicion = barra * 0.10;

   sectionProject.style.backgroundPosition = '0 ' + posicion+'px';
   console.log(posicion)
}

document.addEventListener('DOMContentLoaded',function(){
   window.addEventListener('scroll',scrollBg);
})