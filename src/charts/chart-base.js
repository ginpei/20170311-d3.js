const d3 = require('d3');

export default class ChartBase {
	constructor(options) {
		this.data = options.data;

		const domNode = this.constructor_initDomNode(options);
		this.height = domNode.clientHeight;
		this.width = domNode.clientWidth;
		this.element = d3.select(domNode);
	}

	constructor_initDomNode(options) {
		let domNode;
		if (options.el) {
			domNode = options.el;
		}
		else {
			domNode = document.querySelector(options.selector);
		}

		if (!domNode) {
			throw new Error('DOM node needs to be specified by `options.el` or `options.selector`.');
		}

		return this.domNode = domNode;
	}
}
