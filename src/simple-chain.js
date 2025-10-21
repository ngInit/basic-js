const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  newChain: [],
  getLength() {
    return this.newChain.length;
  },
  addLink(value) {
    this.newChain.push(`( ${value} )`);
    return this;
  },
  removeLink(/* position */) {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  },
  reverseChain() {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  },
  finishChain() {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  },
};

module.exports = {
  chainMaker,
};
