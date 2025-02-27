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
              console.error(this.errorMessage);
              throw this.errorMessage;
          }
      } catch (error) {
          throw new Error(error);
      } finally {
      }
      return this
  },
  reverseChain() {
    this.newChain.reverse();
    return this;
  },
  finishChain() {
      const result = this.newChain.join('~~');
      this.newChain = [];
      return result;
  }
};

module.exports = {
  chainMaker
};
