const util = require('./utilities');
const { candyText } = require('./utilities');
class Candy {
    static log(message, options = { bold: false, color: '', background: '' }, ...args) {
        if (typeof options !== 'object') options = null;
        
        if (args.length > 0)
            console.log(candyText(util.format(message), options?.bold, options?.color, options?.background), candyText(...args?.map(arg => util.format(arg)), options?.bold, options?.color, options?.background));
        else
            console.log(candyText(util.format(message), options?.bold, options?.color, options?.background));
    }

    static success(message, ...args) {
        if (args.length > 0)
            console.log(candyText(util.format(message), false, 'green', ''), candyText(...args?.map(arg => util.format(arg)), false, 'green', ''));
        else
            console.log(candyText(util.format(message), false, 'green', ''));
    }
    static error(message, ...args) {
        if (args.length > 0)
            console.error(candyText(util.format(message), false, 'red', ''), candyText(...args?.map(arg => util.format(arg)), false, 'red', ''));
        else
            console.error(candyText(util.format(message), false, 'red', ''));
    }
    static warning(message, ...args) {
        if (args.length > 0)
            console.warn(candyText(util.format(message), false, 'yellow', ''), candyText(...args?.map(arg => util.format(arg)), false, 'yellow', ''));
        else
            console.warn(candyText(util.format(message), false, 'yellow', ''));

    }
}


module.exports = {
    Candy
}