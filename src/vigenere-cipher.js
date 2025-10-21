const { NotImplementedError } = require('../lib');

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
  constructor(isDirectText = true) {
    this.isDirectText = isDirectText;
  }

  cipheringMachine(text, key, action) {
    let index = 0;
    let shift = 0;
    let result = '';
    text.split('').map((item) => {
      if (index === key.length) {
        index = 0;
      }
      const shifter = key[index].charCodeAt(0) - 65;
      if (item.charCodeAt(0) > 64 && item.charCodeAt(0) < 91) {
        if (action === 'encrypt') {
          shift = item.charCodeAt(0) + shifter;
          if (shift >= 91) {
            shift = (shift - 91) + 65;
          }
        }
        if (action === 'decrypt') {
          shift = item.charCodeAt(0) - shifter;
          if (shift < 65) {
            shift = (shift + 91) - 65;
          }
        }
        result += String.fromCharCode(shift);
        index += 1;
      } else {
        result += item;
      }
    })
    return this.reverseText(result);
  }

  reverseText(text) {
    return this.isDirectText ?
      text :
      text.split('').reverse().join('');
  }

  checkData(text, key) {
    if (!text || !key) {
      throw new Error("Incorrect arguments!");
    }
    return true;
  }

  encrypt(text, key) {
    if (this.checkData(text, key)) {
      text = text.toUpperCase();
      key = key.toUpperCase();
      return this.cipheringMachine(text, key, 'encrypt');
    }
  }

  decrypt(text, key) {
    if (this.checkData(text, key)) {
      text = text.toUpperCase();
      key = key.toUpperCase();
      return this.cipheringMachine(text, key, 'decrypt');
    }
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
