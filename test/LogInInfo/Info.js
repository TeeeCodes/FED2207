// Main TAGS
const username = document.getElementById("username");
const password = document.getElementById("password");

const USERS_URL = "https://twitter-revised-default-rtdb.firebaseio.com/users"
const POSTS_URL = "https://twitter-revised-default-rtdb.firebaseio.com/posts"
const EXT = '.json'

const user = {
    username: 'JimmyNeutron',
    name: 'jimmy'
}

// const validateUser = (user) => new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res(JSON.stringify({user, status: 200, ok: true}))
//     },2000)
// })

const getUser = (user) => fetch(`${USERS_URL}/${user.username}${EXT}`);
const postUser = (user) => fetch(`${USERS_URL}${EXT}`,{
    method: "post",
    headers:{
        'content-type':'application/json'
    },
    body: JSON.stringify(user)
})

// Browser Validation
function browserValidation(){
    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
    if(!password.value || password.value.length < 5){
        return 'password failed'
    }
    return null
}

const submitBtn = document.getElementById('submitBtn')
submitBtn.addEventListener('click', handleLoginSubmit)

// Validate Username/Password
async function handleLoginSubmit(e){
    e.preventDefault()
    e.stopPropagation()

    const user ={
        username: username.value,
        password: password.value
    }
    try{
        const validationError = browserValidation()
        if(validationError){
            throw Error(validationError)
        }
        const checkIfUserExists = await getUser(user)
        if(!checkIfUserExists.ok){
            throw Error('Error validating the user')
        }
        const userInfoDb = await checkIfUserExists.json()
        if(!userInfoDb){
            throw Error("Username Doesn't exist")
        }
        if(userInfoDb){
            localStorage.setItem('userInfo', JSON.stringify(userInfoDb))
            location.replace('http://127.0.0.1:3000/MainLanding/landing.html')
        }
    }catch (error) {
        alert(error)
    }
}

// LogIn/SignUp FORM Methods

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    // document.querySelectorAll(".form__input").forEach(inputElement => {
    //     inputElement.addEventListener("blur", e => {
    //         if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
    //             setInputError(inputElement, "Username must be at least 10 characters in length");
    //         }
    //     });

    //     inputElement.addEventListener("input", e => {
    //         clearInputError(inputElement);
    //     });
    // });
});



