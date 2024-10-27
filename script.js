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
const loginPassword = document.querySelector(`.loginPassword`)


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
    const passwordValue = loginPassword.value.trim();
    let isValid = true;

    if (usernameValue === ''){
        setError(loginName,`The username cannot be blank.`);
        loginName.focus();
        isValid=false;
    }else if (usernameValue.length < 4) {
        setError(loginName,`Username must be at least 4 characters`);
        loginName.focus();
        isValid=false;
    }else if (new Set(usernameValue).size < 2){
        setError(loginName,`The username must contain at least two unique characters.`);
        loginName.focus();
        isValid=false;
    }else if (!/^\w+$/.test(usernameValue)) {
            setError(loginName,`The username cannot contain any special characters or whitespace.`);
            loginName.focus();
            isValid=false;
    }else {
        setSuccess(loginName);
    }


    if (emailValue === ''){
        setError(loginEmail,`Email is required`); 
    }else setSuccess(loginEmail)


    if ( passwordValue === ''){
        setError(loginPassword,`The password cannot be blank.`);
        loginPassword.focus();
        isValid=false;
    }else if ( passwordValue.length < 8) {
        setError(loginPassword,`Username must be at least 8 characters`);
        loginPassword.focus();
        isValid=false;
    }else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
        setError(loginPassword,`Passwords must have at least one uppercase and one lowercase letter.`);
        loginPassword.focus();
        isValid=false;

    }else if (!/[0-9]/.test(password)) {
            setError(loginPassword,`Passwords must contain at least one number.`);
            loginPassword.focus();
            isValid=false;
    }else if (!/[!@#$%^&*]/.test(password))  {
            setError(loginPassword,`Passwords must contain at least one number.`);
            loginPassword.focus();
            isValid=false;
    }else {
        setSuccess(loginPassword);
    }
    return isValid


};
loginForm.addEventListener(`submit`,e => {
    e.preventDefault();
    validateInputs();
});
loginName.addEventListener(`blur`,e => {
    e.preventDefault();
    if(loginName.value.trim() !== ''){
       validateInputs(); 
    }   
});
loginPassword.addEventListener(`blur`,e => {
    e.preventDefault();
    if(loginPassword.value.trim() !== ''){
       validateInputs(); 
    }


});

//calculator dates info
const startDateInput = document.getElementById(`date1`);
const endDateInput = document.getElementById(`date2`);
const numberOfNights = document.getElementById(`output`);

//setting today as minimum day
const today = new Date();
const todayFormat = today.toISOString().split(`T`)[0];


//setting min dates for startdate and end date
startDateInput.min = todayFormat;
endDateInput.min = todayFormat;


//calculating number of nights 
function calculateNights() {

    const startDate = startDateInput.value;
    const endDate = endDateInput.value;


    if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const timeDifference = end - start;
        const nights = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        //display the number of nights 
        if (nights > 0) {
            numberOfNights.textContent = `${nights} Night(s)`
            numberOfNights.style.color = `green`;
        } else {
            numberOfNights.textContent = `Invalid dates`
            numberOfNights.style.color = `red`;
        }
    }
}


startDateInput.addEventListener(`change`, calculateNights);
endDateInput.addEventListener(`change`, calculateNights);

//this makes sure that the date is not befor the state date using an alert 
endDateInput.addEventListener('change', () => {
    if (startDateInput.value && endDateInput.value < startDateInput.value) {
        alert('End date cannot be before start date');
        endDateInput.value = '';
    }


})



//this is for the log in form 

loginForm.onsubmit = function (e) {
    e.preventDefault();
    hideError();

    if (
        usernameValue() &&
        emailValue() &&
      passwordValue()
    ) {
      const user = {
        username: usernameValue.value.trim().toLowerCase(),
        email:  emailValue.trim().toLowerCase(),
        password: passwordValue.value,
      };
      localStorage.setItem( usernameValue.value, JSON.stringify(user));
      showSuccess("Login successful!");
      loginForm.reset();
    }
  };