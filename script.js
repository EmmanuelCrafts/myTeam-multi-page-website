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
        label.classList.add("label-hidden");
        label.classList.remove("label-show")
    });

    input.addEventListener("blur", () => {
          label.classList.add("label-show");
          label.classList.remove("label-hidden");
        });
})


// show errors by adding classes
const setError = (input, errorElement, message) => {
    input.classList.add("input-error");
    input.previousElementSibling.classList.add("label-error");
    errorElement.textContent = message;
}

// clear  error by removing classes
const clearError = (input, errorElement) => {
    input.classList.remove("input-error");
    input.previousElementSibling.classList.remove("label-error")

    errorElement.textContent = '';
}

const validateInput = (input, errorElement, minlength, message) => {
      const value = input.value.trim();

      if (value.length === 0) {
        setError(input, errorElement, "This field is required");
        return false;
      }

      if(value.length < minlength) {
       setError(input, errorElement, message);
        return false;
      }
      
      clearError(input, errorElement);
      return true;
}

const validateEmail = (input, errorElement) => {

    const value = input.value.trim();
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value.length === 0) {
        setError(input, errorElement, "This field is required");
        return false;
    }

    if (!pattern.test(value)) {
       setError(input, errorElement, "Please enter a valid email")
        return false;
    }
    
    clearError(input, errorElement);
    return true;
}

// live validation
fullname.addEventListener("input", () => {
    validateInput(fullname, nameError , 3 , "name must be at least 3 characters long");
});

email.addEventListener("input", () => {
    validateEmail(email, emailError);
});

companyName.addEventListener("input", () => {
    validateInput(companyName, companyError , 3 , " company name must be at least 3 characters long")
});

message.addEventListener("input", () => {
    validateInput(message, messageError ,10, "message must be at least 10 characters long");
});

// form submit validation
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