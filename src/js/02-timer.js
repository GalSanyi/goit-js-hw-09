// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";



const refs = {
    inputData: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),


};


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,


    onClose(selectedDates) {

        // console.log(selectedDates[0]);
        if (selectedDates[0] < Date.now()) {
            refs.startBtn.setAttribute('disabled', true);
            window.alert("Please choose a date in the future")
        }
        refs.startBtn.removeAttribute('disabled');

        refs.inputData.setAttribute('disabled', true);
        refs.startBtn.addEventListener('click', () => {
            function timer() {
                let currentData = new Date();
                const dataTime = selectedDates[0] - currentData;
                if (dataTime < 0) {
                    return;
                }

                let time = convertMs(dataTime);

                console.log(time)

                updateTimer(time)


            }
            setInterval(timer, 1000);


        })
    },
};
flatpickr('#datetime-picker', options);





// const startTime = Date.now();


// function onClickTimer() {
//     setInterval(() => {
//         let currentTime = Date.now();
//         const dataTime = startTime - currentTime;

//         if (dataTime < 0) {
//             return;
//         }
//         let time = convertMs(dataTime);
//         updateTimer(time);


//     }, 1000);
// }

function updateTimer({ days, hours, minutes, seconds }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.minutes.textContent = `${minutes}`;
    refs.seconds.textContent = `${seconds}`;

}



function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}