
import {startWidget  }from './modules/vidgetServise.js';

const initWidget = async (app) => {
const widget = await startWidget();

app.append(widget);


};

initWidget(document.querySelector('#app'));