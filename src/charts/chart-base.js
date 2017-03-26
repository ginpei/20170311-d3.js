import * as d3 from 'd3';

export default class ChartBase {
	constructor(options) {
		this.data = options.data;

		const domNode = this._initDomNode(options);
		this.height = domNode.clientHeight;
		this.width = domNode.clientWidth;
		this.element = d3.select(domNode);
	}

	_initDomNode(options) {
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

		this.domNode = domNode;
		return domNode;
	}
}
