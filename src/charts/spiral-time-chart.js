import * as d3 from 'd3';
import ChartBase from './chart-base.js';
import moment from 'moment';

export default class SpiralTimeChart extends ChartBase {
	constructor(options) {
		super(options);

		this.convertDate(options.data);
		this.sideLength = Math.min(this.width, this.height);
	}

	/**
	 * Convert date time string to Date object.
	 *
	 * @param {Array} data Original data. Destructive.
	 * @param {string} data[].datetime Date and time in string.
	 * @returns {Array} data Original data.
	 */
	convertDate(data) {
		data.forEach(d=>d.date=moment(d.datetime));
		return data;
	}

	start() {
		const line = this.generateLine(this.data, this.sideLength);
		const svg = this.generateSvg(this.element, this.sideLength);

		svg.append('path')
			.datum(this.data)
			.attr('d', line);
	}

	/**
	 * @param {Array} data
	 * @param {number} sideLength
	 */
	generateLine(data, sideLength) {
		const spiralPositionF = (funcName)=>{
			const fullDegree = Math.PI * 2;
			const offsetDegree = fullDegree / -4;

			const center = sideLength / 2;
			const dataLength = data.length;
			const rollings = this.countDates(data);

			const wholeDegree = fullDegree * rollings;

			return (d, index)=>{
				const progress = (dataLength - (index + 1)) / dataLength;
				const radius = center * progress;
				const degree = (wholeDegree * progress) + offsetDegree;
				return center + (radius * Math[funcName](degree));
			};
		};

		return d3.line()
			.x(spiralPositionF('cos'))
			.y(spiralPositionF('sin'));
	}

	/**
	 * Count how many dates are.
	 *
	 * @param {Array} data
	 * @param {String} data
	 * @returns {number}
	 */
	countDates(data) {
		let min = data[0].date;
		let max = data[0].date;
		data.forEach((d)=>{
			if (d.date < min) {
				min = d.date;
			}
			if (d.date > max) {
				max = d.date;
			}
		});
		return max.diff(min, 'days') + 1;
	}

	/**
	 * @param {d3 element} element
	 * @param {number} sideLength
	 */
	generateSvg(element, sideLength) {
		return element.append('svg')
			.attr('width', sideLength)
			.attr('height', sideLength)
			.style('fill', 'none')
			.style('stroke', '#000');
	}
}
