import SpiralTimeChart from '../src/charts/spiral-time-chart.js';

const expect = require('chai').expect;
const moment = require('moment');

describe('Foo Text', ()=>{
	const originalData = [
	];

	let chart;

	beforeEach(()=>{
		const elCanvas = document.createElement('canvas');

		chart = new SpiralTimeChart({
			data: originalData,
			el: elCanvas,
		});
	});

	it('is OK', ()=>{
		expect(chart).not.to.equal(null);
	});
});
