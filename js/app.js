let form = document.getElementById('form');
let email = document.getElementById('email');
let submit = document.getElementById('submit-btn');
let error = document.querySelector('.error')
let success = document.querySelector('.success')



form.addEventListener('submit', (e) => {
    const regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(email.value === '' || email.value === null) {
        error.style.display = 'block'
        success.style.display = 'none'
        
        e.preventDefault()
    }else if(regEmail.value = false) {
        error.style.display = 'block'
        success.style.display = 'none'
        e.preventDefault()
    } 

    
    else {
        success.style.display = 'block';
        setTimeout(success, 6000);
    }
        
})
