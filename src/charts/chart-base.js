const d3 = require('d3');

export default class ChartBase {
	constructor(options) {
		this.data = options.data;

		const domNode = this.domNode = document.querySelector(options.selector);
		if (!this.domNode) {
			throw new Error('Element not found by the selector `' + options.selector + '`.');
		}
		this.height = domNode.clientHeight;
		this.width = domNode.clientWidth;

		this.element = d3.select(domNode);
	}

}
