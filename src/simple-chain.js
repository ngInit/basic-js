const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  newChain: [],
  errorMessage: `You can't remove incorrect link!`,
  getLength() {
    return this.newChain.length;
  },
  addLink(value) {
    this.newChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    try {
      if (typeof position === 'number' && position > 0 && position <= this.newChain.length) {
        this.newChain.splice(position - 1, 1)
      } else {
        this.newChain = [];
        throw this.errorMessage;
      }
    } catch (error) {
      throw new Error(error);
    } finally {
    }
    return this
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
