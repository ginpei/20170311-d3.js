import SimpleLineChart from './charts/simple-line-chart.js';
import SpiralTimeChart from './charts/spiral-time-chart.js';

const d3 = require('d3');
document.querySelector('#js-version').textContent = `v${d3.version}`;

new SimpleLineChart({
	data: require('./data/monthly-values.js').default,
	selector: '#simple-line-chart',
}).start();

new SpiralTimeChart({
	data: require('./data/monthly-values.js').default,
	selector: '#spiral-time-chart',
}).start();
