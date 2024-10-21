
const login = document.querySelector(`#loginbtn`)
const dateForm = document.getElementById('dateForm');
const carouselSlides = document.querySelector('#carousel-slides');


// login.onclick=

function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.toggle('show');
}
function calculateDays(){
    const d1= document.getElementById(`date1`).value;
    const d2= document.getElementById(`date2`).value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    document.getElementById(`output`).innerHTML=days;
    
}
