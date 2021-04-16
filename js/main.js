const iconHam = document.querySelector('.icon-ham');

const navBar = document.querySelector('.navbar');

iconHam.addEventListener('click', ()=> {
    // console.log("clicked");
    navBar.classList.toggle('change');
})