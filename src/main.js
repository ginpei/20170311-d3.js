import SimpleLineChart from './charts/simple-line-chart.js';

const d3 = require('d3');
document.querySelector('#js-version').textContent = `v${d3.version}`;

const simpleChart = new SimpleLineChart({
	data: require('./data/monthly-values.js'),
	height: 300,
	selector: '#basic',
	width: 300,
});
simpleChart.start();
