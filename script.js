


function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.toggle('show');
}
const loginForm = document.querySelector(`.login-form-container`)
const loginName = document.querySelector(`.loginUsername`)
const loginEmail = document.querySelector(`.loginEmail`)



const setError = (element, message)=>{
  
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-message');
    if (!errorDisplay){
        const errorDiv = document.createElement(`div`)
        errorDiv.className = `error-message`;
        inputControl.appendChild(errorDiv)
    }
    errorDisplay.innerHTML = message;
    inputControl.classList.add(`error`);
    inputControl.classList.remove('success');

};
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-message');
    if (errorDisplay){
       errorDisplay.innerText = '';
    }
    
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const validateInputs = ()=>{
    const usernameValue = loginName.value.trim();
    const emailValue = loginEmail.value.trim();
    let isValid = true;

    if (usernameValue === ''){
        setError(loginName,`The username cannot be blank.`);
        usernameValue.focus();
        isValid=false;
    }else if (usernameValue.length < 4) {
        setError(loginName,`Username must be at least 4 characters`);
        usernameValue.focus();
        isValid=false;
    }else if (new Set(usernameValue).size < 2){
        setError(loginName,`The username must contain at least two unique characters.`);
        usernameValue.focus();
        isValid=false;
    }else if (!/^\w+$/.test(usernameValue)) {
            setError(loginName,`The username cannot contain any special characters or whitespace.`);
            usernameValue.focus();
            isValid=false;
    }else {
        setSuccess(loginName);
    }


    if (emailValue === ''){
        setError(emailValue,`Email is required`); 
    }
    return isValid

};
loginForm.addEventListener(`submit`,e => {
    e.preventDefault();

    validateInputs();
});
loginName.addEventListener(`submit`,e => {
    e.preventDefault();
    if(loginName.value.trim() !== ''){
       validateInputs(); 
    }
    
    
});
const login = document.querySelector(`#loginbtn`)
const dateForm = document.getElementById('dateForm');
const carouselSlides = document.querySelector('#carousel-slides');

function calculateDays(){
    const d1= document.getElementById(`date1`).value;
    const d2= document.getElementById(`date2`).value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    document.getElementById(`output`).innerHTML=days;
    
}
