
const login = document.querySelector(`#loginbtn`)
const dateForm = document.getElementById('dateForm');
const carouselSlides = document.querySelector('#carousel-slides');



function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.toggle('show');
}
const loginForm = document.querySelector(`.login-form-container`)
const loginName = document.querySelector(`.loginUsername`)
const loginEmail = document.querySelector(`.loginEmail`)

loginForm.addEventListener(`submit`,e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message)=>{
  
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerHTML = message;
    inputControl.classList.add(`error`);
    inputControl.classList.remove('success');

}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const validateInputs = ()=>{
    const usernameValue = loginName.value.trim();
    const emailValue = loginEmail.value.trim();

    if (usernameValue === ''){
        setError(username,`Usernamem is required`);
    }else if (usernameValue.length < 4) {
        showError(`Username must be at least 4 characters`);
    }else {
        setSuccess(username);
    }
    if (emailValue === ''){
        setError(username,`Usernamem is required`); 
    }

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
