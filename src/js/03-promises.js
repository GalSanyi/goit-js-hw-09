const form = document.querySelector('.form');


form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
    e.preventDefault();
    const formData = new FormData(form);

    const user = {};
    formData.forEach((value, name) => {
        user[name] = value;
    });

    const amount = user.amount;
    console.log(amount);

    const delayUser = user.delay;
    console.log(delayUser);

    const stepUser = user.step;
    console.log(stepUser);


    let position = '';
    let delay = Number(delayUser);
    let step = Number(stepUser);
    for (let i = 1; i <= amount; i += 1) {
        position = i;


        delay += step



        const createPromise = (position, delay) => {

            return new Promise((resolve, reject) => {
                const shouldResolve = Math.random() > 0.3;

                setInterval(() => {


                    if (shouldResolve) {
                        // Fulfill 
                        resolve({ position, delay });
                    }
                    // Reject
                    reject({ position, delay });

                }, delay)
            });
        };
        createPromise(2, 1500)
            .then(({ position, delay }) => {
                console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
            })
            .catch(({ position, delay }) => {
                console.log(`❌ Rejected promise ${position} in ${delay}ms`);
            });

    }
}