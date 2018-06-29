let fname = document.getElementById("full-name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let button = document.getElementById("button");
let form = document.querySelector("form");
let emailFormat = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;

function handleForm() {
    
    // clear the console
    console.clear();
    
    // collect your error messages in the array
    let errors = [];
    
    // collect user input into object
    let data = {};
    
    
    // Validate full name
    if (fname.value) {
            data.fnameValue = fname.value;  
    } else {
        errors.push("Full-Name is missing!");
    }
    
    
    // Email validation
    if (email.value) {
        
        if (emailFormat.test(email.value)) {
            data.emailValue = email.value;
        } else {
            errors.push("Email is missing!");
        }
        
    } else {
        errors.push("Email is missing!");
    }
    
    
    // Validate message
    
    if (message.value) {
            data.messageValue = message.value;  
    } else {
        errors.push("Message name is missing!");
    }
    
    
    // create feedback
    if (errors.length > 0) {
        console.log(errors);
    } else {
        console.log(data);
        form.reset();
    }
}

button.addEventListener("click", handleForm);
