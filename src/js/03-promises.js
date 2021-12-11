const refs = {
    form: document.querySelector('.form'),
    inputDelay: document.querySelector('input[name="delay"]'),
    inpuStep: document.querySelector('input[name="step"]'),
    inputAmount: document.querySelector('input[name="amount"]'),
}

refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
    e.preventDefault();

    let formData = new FormData([form]);
    console.log(formData);
}




function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
        // Fulfill
    } else {
        // Reject
    }
}





createPromise(2, 1500)
    .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })