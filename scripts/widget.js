import {startWidget  }from './modules/vidgetServise.js';

const initWidget = (app) => {
const widget = startWidget();

app.append(widget);
};

initWidget(document.querySelector('#app'));