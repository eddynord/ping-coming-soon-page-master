let form = document.getElementById('form');
let email = document.getElementById('email');
let submit = document.getElementById('submit-btn');
let error = document.querySelector('.error')
let success = document.querySelector('.success')



form.addEventListener('submit', (e) => {
    const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    
    if(regEmail.value = false) {
        error.style.display = 'block';
        success.style.display = 'none';
        e.preventDefault();
    } else if(email.value === '' || email.value === null) {
        error.style.display = 'block';
        e.preventDefault();
        
    }else {
        success.style.display = 'block';
        error.style.display = 'none';
    }
        
        
       
        
        
        
        

    
        
})
