const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect) {
    this.isDirect = isDirect
  }

  _checkArgs(text, key) {
    // throw new NotImplementedError('Not implemented');
    if (!text || !key) {
      throw new Error(`Incorrect arguments!`)
    }
  }

  encrypt(text, key) {
    this._checkArgs(text, key)
  }

  decrypt(text, key) {
    this._checkArgs(text, key)
  }
}

module.exports = {
  VigenereCipheringMachine
};
