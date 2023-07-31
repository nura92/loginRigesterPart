let wraped = document.querySelector(".wrapper");
let login = document.querySelector(".login-link");
let register = document.querySelector(".register-link");
const btn = document.querySelector(".login-popup");
const clos = document.querySelector(".close-icon");


console.log(clos);
register.addEventListener("click", () => {
	wraped.classList.add("active");
});
login.addEventListener("click", () => {
	wraped.classList.remove("active");
});
btn.addEventListener("click", () => {
	wraped.classList.add("pop-active");
});
clos.addEventListener("click", () => {
	wraped.classList.remove("pop-active");
});

