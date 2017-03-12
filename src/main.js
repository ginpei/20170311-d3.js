import SimpleLineChart from './charts/simple-line-chart.js';
import SpiralTimeChart from './charts/spiral-time-chart.js';
import dailySchedule from './data/daily-schedule.js';

const d3 = require('d3');
document.querySelector('#js-version').textContent = `v${d3.version}`;

new SimpleLineChart({
	data: require('./data/monthly-values.js').default,
	selector: '#simple-line-chart',
}).start();

new SpiralTimeChart({
	data: dailySchedule,
	selector: '#spiral-time-chart',
}).start();
