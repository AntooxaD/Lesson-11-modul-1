import TimerTemplate from './timer.js';

const timer = new TimerTemplate({ selector: '#timer'});

document.getElementById('start').addEventListener('click', timer.start);

document.getElementById('stop').addEventListener('click', timer.stop);