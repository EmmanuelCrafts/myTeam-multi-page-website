// mobile  side menu
const menu = document.getElementById("menu");
const close =document.getElementById("close")
const scrollMenu = document.getElementById("menu-slide")

menu.addEventListener("click", ()=>{
    scrollMenu.classList.add("menu-slide-in");
});

close.addEventListener("click", ()=>{
    scrollMenu.classList.remove("menu-slide-in");
});

// form validation
const form = document.getElementById("contact-form");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const companyError = document.getElementById("companyError");
const messageError = document.getElementById("messageError");
const {fullname, email, companyName, message} = form.elements;

// hide label on focus
const inputs = [fullname, email, companyName, message];

inputs.forEach((input) => {
    const label = input.previousElementSibling;

    input.addEventListener("focus",() => {
        label.style.opacity = 0;
    });

    input.addEventListener("blur", () => {
          label.style.opacity = 0.6;
        });
})