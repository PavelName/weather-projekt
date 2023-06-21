export const getCurrentDateTime = () => {
    
const monts = [
    'янв',
    'фев',
    'март',
    'апр',
    'май',
    'июнь',
    'июль',
    'авг',
    'сент',
    'окт',
    'ноя',
    'дек',
  ];

const weekdays = [
    'воскесенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
   ];

const date = new Date();
const dayOfMonth = date.getDate();
const month = monts[date.getMonth()];
const year = date.getFullYear();
const dayOfWeek = weekdays[date.getDay()];

let hours = date.getHours();
let minutes = date.getMinutes();

if (hours < 10) {
    hours = `0${hours}`;
}
return { month, year, dayOfMonth, dayOfWeek, hours, minutes};

};