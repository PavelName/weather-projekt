
const addZero = (n) => {
  if (n < 10) {
    n = `0${n}`;
};
  return n;
};

// const addZero = (n) => n < 10 ? `0${n}`: n;



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

const hours = addZero(date.getHours()) ;
const minutes = addZero(date.getMinutes()) ;

return { month, year, dayOfMonth, dayOfWeek, hours, minutes};

};