/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  _chain: [],

  _resetChain() {
    this._chain = []
  },

  getLength() {
    return this._chain.length
  },

  addLink(value) {
    this._chain.push(value)
    return this
  },

  removeLink(position) {
    if (
      isNaN(position) 
      || position < 1
      || position > this._chain.length
    ) {
      this._resetChain();
      throw new Error(`You can\'t remove incorrect link!`)
    }

    this._chain.splice(position - 1, 1)
    return this
  },

  reverseChain() {
    this._chain.reverse()
    return this
  },

  finishChain() {
    const chain = this._chain
      .map(link => `( ${link} )`)
      .join(`~~`)

    this._resetChain()
    return chain
  }
};


module.exports = {
  chainMaker
};
