let wraped = document.querySelector(".wrapper");
let login = document.querySelector(".login-link");
console.log(login)
let register = document.querySelector(".register-link");
console.log(register);
register.addEventListener("click", () => {
    wraped.classList.add('active')
})
login.addEventListener("click", () => {
	wraped.classList.remove("active");
});