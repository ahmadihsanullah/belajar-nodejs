const validator = require('validator');
const chalk = require('chalk')

console.log(validator.isEmail("ahmad@gmail.com"))
console.log(validator.isNumeric('9309103'))
console.log(validator.isMobilePhone('0782345678','id-ID'))

console.log(chalk.italic.bgBlack("hello world"))
console.log(chalk.italic.bgBlue.bold("hello world"))

const pesan = chalk`halo nama saya {bgGreen.white ahmad} umur saya {bgBlue.bold 21} tahun`
console.log(pesan);