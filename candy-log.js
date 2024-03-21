const util = require('./utilities');
const { candyText } = require('./utilities');
class Candy {
    static log(message, bold = false, color, bgColor, ...args) {
        console.log(candyText(util.format(message), bold, color, bgColor), candyText(...args.map(arg => util.format(arg)), bold, color, bgColor));
    }
    static success(message, ...args) {
        console.log(candyText(util.format(message), false, 'green', ''), candyText(...args.map(arg => util.format(arg)), false, 'green', ''));
    }
    static error(message, ...args) {
        console.error(candyText(util.format(message), false, 'red', ''), candyText(...args.map(arg => util.format(arg)), false, 'red', ''));
    }
    static warning(message, ...args) {
        console.warn(candyText(util.format(message), false, 'yellow', ''), candyText(...args.map(arg => util.format(arg)), false, 'yellow', ''));
    }
    log(message, bold = false, color, bgColor, ...args) {
        console.log(candyText(util.format(message), bold, color, bgColor), candyText(...args.map(arg => util.format(arg)), bold, color, bgColor));
    }
    success(message, ...args) {
        console.log(candyText(util.format(message), false, 'green', ''), candyText(...args.map(arg => util.format(arg)), false, 'green', ''));
    }
    error(message, ...args) {
        console.error(candyText(util.format(message), false, 'red', ''), candyText(...args.map(arg => util.format(arg)), false, 'red', ''));
    }
    warning(message, ...args) {
        console.warn(candyText(util.format(message), false, 'yellow', ''), candyText(...args.map(arg => util.format(arg)), false, 'yellow', ''));
    }
}


module.exports = {
    Candy
}