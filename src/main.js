import * as d3 from 'd3';
import * as monthlyValues from './data/monthly-values.js';
import SimpleLineChart from './charts/simple-line-chart.js';
import SpiralTimeChart from './charts/spiral-time-chart.js';
import dailySchedule from './data/daily-schedule.js';

document.querySelector('#js-version').textContent = `v${d3.version}`;

new SimpleLineChart({
	data: monthlyValues,
	selector: '#simple-line-chart',
}).start();

new SpiralTimeChart({
	data: dailySchedule,
	selector: '#spiral-time-chart',
}).start();
