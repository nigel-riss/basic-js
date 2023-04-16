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
const ENCRYPT = 1
const DECRYPT = -1
const ALPHABET_START = 65
const ALPHABET_LENGTH = 26

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect
  }

  _checkArgs(text, key) {
    if (!text || !key) {
      throw new Error(`Incorrect arguments!`)
    }
  }

  _getFullKey(key, textLength) {
    const keyRepeat = Math.ceil(textLength / key.length)
    return key
      .repeat(keyRepeat)
      .toUpperCase()
      .split(``)
  }

  _getCryptedChar(char, direction = ENCRYPT) {
    const charCode = char.charCodeAt(0)

    if (
      charCode < ALPHABET_START 
      || charCode > ALPHABET_START + ALPHABET_LENGTH - 1
    ) { return char }

    const keyCode = this.fullKey.shift().charCodeAt(0)

    let shift = (keyCode - ALPHABET_START) * direction;
    if (direction === DECRYPT) { shift += ALPHABET_LENGTH }
    const newCharCode = (charCode - ALPHABET_START + shift)
      % ALPHABET_LENGTH
      + ALPHABET_START

    return String.fromCharCode(newCharCode)
  }

  _processText(text, key, direction = ENCRYPT) {
    this._checkArgs(text, key)

    this.fullKey = this._getFullKey(key, text.length)
    text = text.toUpperCase()

    let cryptedText = ``
    for (let i = 0; i < text.length; i++) {
      cryptedText += this._getCryptedChar(text[i], direction)
    }

    if (!this.isDirect) {
      return cryptedText.split(``).reverse().join(``)
    }

    return cryptedText
  }

  encrypt(text, key) {
    return this._processText(text, key, ENCRYPT)
  }

  decrypt(text, key) {
    return this._processText(text, key, DECRYPT)
  }
}


module.exports = {
  VigenereCipheringMachine
};
