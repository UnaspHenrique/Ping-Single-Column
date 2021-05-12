const init = () => {
    const emailInput = document.getElementById('email');
    const button = document.getElementById('button');
    const error = document.querySelector('span.error');

    const validEmail = (event) => {
        const input = event.currentTarget;
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailTest = regex.test(input.value);

        if (!emailTest) {
            button.setAttribute('disabled', 'disabled');
            emailInput.classList.add('errorBorder');
            error.innerHTML = 'Please provide a valid email address';
            error.style.marginBottom = '20px'
        } else {
            button.removeAttribute('disabled', 'disabled');
            emailInput.classList.remove('errorBorder');
            error.innerHTML = '';
            error.style.marginBottom = '0px'
        }
    }

    emailInput.addEventListener('input', validEmail);

}

window.onload = init;