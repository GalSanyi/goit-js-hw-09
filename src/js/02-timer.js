// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";



const refs = {
    input: document.querySelector('input[type="text"]'),
    button: document.querySelector('button[data-start]'),
};


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,


    onClose(selectedDates) {

        // console.log(selectedDates[0]);
        if (selectedDates[0] < new Date()) {
            refs.button.disabled = true;


            window.alert("Please choose a date in the future");
        }
        if (selectedDates[0] > new Date()) {

            refs.button.disabled = false;
        }
    },
};

flatpickr('#datetime-picker', options);