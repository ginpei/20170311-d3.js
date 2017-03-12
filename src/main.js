import SimpleLineChart from './charts/simple-line-chart.js';

const d3 = require('d3');
document.querySelector('#js-version').textContent = `v${d3.version}`;

new SimpleLineChart({
	data: require('./data/monthly-values.js'),
	selector: '#simple-line-chart',
}).start();
