const d3 = require('d3');
import monthlyValues from './data/monthly-values.js';

document.querySelector('#js-version').textContent = `v${d3.version}`;

class Main {
	constructor(options) {
		this.data = options.data;
		this.height = options.height;
		this.selector = options.selector;
		this.width = options.width;

		this.element = d3.select(this.selector);
	}

	start() {
		var sizes = getSizes();
		var width = sizes.baseWidth;
		var height = sizes.baseHeight;

		// something
		// to convert values to coordinates
		var x = d3.scaleTime().range([0,width]);
		var y = d3.scaleLinear().range([height,0]);

		// line generator
		// to write a line (path)
		var line = d3.line();
		line.x(d=>x(d.date));
		line.y(d=>y(d.value));

		// --------------------------------
		// render a chart according to the data

		var data = this.data;

		// desice extents of both axises
		x.domain(d3.extent(data, d=>d.date));
		y.domain(d3.extent(data, d=>d.value));

		// create a root SVG element
		var svg = this.element.append('svg');
		svg.attr('width', this.width);
		svg.attr('height', this.height);

		// write a line
		svg.append('path')
			.datum(data)
			.style('fill', 'none')
			.style('stroke', '#000')
			.attr('d', line);
	}
}

function getSizes() {
	var sizes = {
		baseHeight: 300,
		margin: {
			bottom: 30,
			left: 50,
			right: 20,
			top: 20,
		},
		baseWidth: 650,
	};
	sizes.height = sizes.baseHeight - sizes.margin.top - sizes.margin.bottom;
	sizes.width = sizes.baseWidth - sizes.margin.left - sizes.margin.right;
	return sizes;
}

const main = new Main({
	data: monthlyValues,
	height: 300,
	selector: '#basic',
	width: 300,
});
main.start();
