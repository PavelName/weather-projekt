import { fetchWeather } from './APIservice.js';

import {
    renderWidgetToday,
    renderWidgetOther,
    renderWidgetForecast,
} from './render.js';


export const startWidget = async () => {
    const widget = document.createElement('div');
    widget.classList.add('widget');

    const dataWeather = await fetchWeather('Калининград');

    if(dataWeather.success) {
        renderWidgetToday(widget, dataWeather.data);
    renderWidgetOther(widget, dataWeather.data);

    } else {

    }
    
    renderWidgetForecast(widget);

    return widget;
};