let form = document.getElementById('form');
let email = document.getElementById('email');
let submit = document.getElementById('submit-btn');
let error = document.querySelector('.error')
let loading = document.querySelector('.loading')



form.addEventListener('submit', (e) => {
    if(email.value === '') {
        error.style.display = 'block'
        e.preventDefault()
    } else {
        document.querySelector('.loader').style.display = 'block';
        setTimeout(loading, 6000);
    }
        
})
