import ChartBase from './chart-base.js';

const d3 = require('d3');

export default class SimpleLineChart extends ChartBase {
	constructor(options) {
		super(options);
	}

	start() {
		const line = this.generateLine(this.data, this.width, this.height);
		const svg = this.generateSvg(this.element, this.width, this.height);

		svg.append('path')
			.datum(this.data)
			.attr('d', line);
	}

	/**
	 * @param {Array} data
	 * @param {number} width
	 * @param {number} height
	 */
	generateLine(data, width, height) {
		var fx = d3.scaleTime()
			.range([0, width])
			.domain(d3.extent(data, d=>d.date));

		var fy = d3.scaleLinear()
			.range([height, 0])
			.domain(d3.extent(data, d=>d.value));

		return d3.line()
			.x(d=>fx(d.date))
			.y(d=>fy(d.value));
	}

	/**
	 * @param {d3 element} element
	 * @param {number} width
	 * @param {number} height
	 */
	generateSvg(element, width, height) {
		return element.append('svg')
			.attr('width', width)
			.attr('height', height)
			.style('fill', 'none')
			.style('stroke', '#000');
	}
}
