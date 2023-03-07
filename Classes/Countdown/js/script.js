import Countdown from './countdown.js'

const tempoParaONatal = new Countdown('25 December 2023 00:00:00 GMT-0300')
const tempoParaMeuAniv = new Countdown('15 December 2023 00:00:00 GMT-0300')

console.log(tempoParaONatal.total)
console.log(tempoParaMeuAniv.total)