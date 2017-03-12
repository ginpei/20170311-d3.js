const d3 = require('d3');

export default class ChartBase {
	constructor(options) {
		this.data = options.data;
		this.height = options.height;
		this.selector = options.selector;
		this.width = options.width;

		this.element = d3.select(this.selector);
	}

}
