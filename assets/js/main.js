const navbar = document.querySelector('header');
const course = document.querySelector('.first-section');
window.onscroll =()=>{
    console.log(course.offsetTop)
    if(window.scrollY > course.offsetTop){
        navbar.classList.add('navbar-scroll');
    }else{
        navbar.classList.remove('navbar-scroll');
    }
}
setTimeout(()=>{
    document.querySelector('.overlay').classList.add('d-none');
},3000)