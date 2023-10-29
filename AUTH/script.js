let form = document.getElementById('form')
const error = []
form.addEventListener('submit', function(e){
    e.preventDefault()//prevents auto submission of the form
    

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    if(name.value == ""){
        error.push("please enter you name")
    }
    if(email.value == ""){
        error.push("please enter your email")
    }
    if(password.value == ""){
        error.push("please enter a password")
    }
    // const message

    
})