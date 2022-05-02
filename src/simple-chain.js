const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return chainMaker;
  },
  removeLink(position) {
    if (Number.isInteger(position) && position >= 1 && position <= this.chain.length) {
      this.chain.splice(position - 1, 1);
      return chainMaker;
    } else {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
  },
  reverseChain() {
    this.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    let str = '';
    console.log(this.chain);
    for (let i = 0; i < this.chain.length; i++) {
      if (i + 1 === this.chain.length) {
        str += `( ${this.chain[i]} )`;
      } else {
        str += `( ${this.chain[i]} )~~`;
      }
    }
    this.chain = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
