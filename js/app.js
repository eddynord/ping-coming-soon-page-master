let form = document.getElementById('form');
let email = document.getElementById('email');
let submit = document.getElementById('submit-btn');
let error = document.querySelector('.error')
let loading = document.querySelector('.loading')



form.addEventListener('submit', (e) => {
    const regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(email.value === '' || email.value === null) {
        
        error.style.display = 'block'
        
        e.preventDefault()
    } if(regEmail.value = false) {
        
        // error.style.display = 'block'
        e.preventDefault()

    } 
    
    else {
        document.querySelector('.loader').style.display = 'block';
        setTimeout(loading, 6000);
    }
        
})
