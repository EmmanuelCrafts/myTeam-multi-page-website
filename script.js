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

const validateInput = (input, errorElement, minlength, message) => {
      const value = input.value.trim();

      if (value.length === 0) {
        input.previousElementSibling.style.color = "#f67e7e";
        input.style.borderBottom = "1px solid #f67e7e";
        errorElement.textContent = "This field is required";
        return false;
      }

      if(value.length < minlength) {
        input.previousElementSibling.style.color = "#f67e7e";
        input.style.borderBottom = "1px solid #f67e7e";
        error.textContent =  message;
        return false;
      }
      
      return true;
}

const validateEmail = (input, error) => {

    const value = input.value.trim();
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value.length === 0) {
        input.previousElementSibling.style.color = "#f67e7e";
        input.style.borderBottom = "1px solid #f67e7e";
        error.textContent = "This field is required";
        return false;
    }

    if (!pattern.test(value)) {
        input.previousElementSibling.style.color = "#f67e7e";
        input.style.borderBottom = "1px solid #f67e7e";
        error.textContent = "please enter a valid email";
        return false;
    }

    return true;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameValid = validateInput(fullname, nameError , 3 , "name must be at least 3 characters long");
    const emailValid = validateEmail(email, emailError);
    const companyValid = validateInput(companyName, companyError , 3 , " company name must be at least 3 characters long")
    const messageValid = validateInput(message, messageError ,10, "message must be at least 10 characters long");

    if (nameValid && emailValid && companyValid && messageValid) {
        form.submit();
    }

});