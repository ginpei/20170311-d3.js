import SpiralTimeChart from '../src/charts/spiral-time-chart.js';

const expect = require('chai').expect;
const moment = require('moment');
const jsdom = require('jsdom');

describe('Foo Text', ()=>{
	const originalData = [
	];

	let chart;

	beforeEach((done)=>{
		jsdom.env('<canvas></canvas>', (error, window)=>{
			const elCanvas = window.document.createElement('canvas');

			chart = new SpiralTimeChart({
				data: originalData,
				el: elCanvas,
			});

			done();
		});
	});

	it('is OK', ()=>{
		expect(chart).not.to.equal(null);
	});
});
