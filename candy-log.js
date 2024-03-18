class Candy {

    /**
     * 
     * @param {string} text Text 
     * @param {*} bold Make the text bold
     * @param {*} color Color for text
     * @param {*} bgColor Background color
     * @param  {...any} args Additional arguments
     */
    static log(text, bold = false, color, bgColor, ...args) {
        console.log(candyText(text, bold, color, bgColor), candyText(args, bold, color, bgColor));
    }
    /**
     * @param {string} text Text
     * @param {boolean} bold Make the text bold
     * @param  {...any} args Additional arguments
     */
    static success(text, bold = false, background = false, ...args) {
        const color = 'green';
        let bgColor = 'black';
        background = background === true ? bgColor = 'black' : bgColor = '';
        console.log(candyText(text, bold, color, bgColor), candyText(args, bold, color, bgColor));
    }
    /**
 * @param {string} text Text
 * @param {boolean} bold Make the text bold
 * @param  {...any} args Additional arguments
 */
    static error(text, bold = false, background = false, ...args) {
        const color = 'red';
        let bgColor = 'black';
        background = background === true ? bgColor = 'black' : bgColor = '';
        console.error(candyText(text, bold, color, bgColor), candyText(`\n${args}`, bold, color, bgColor));
    }
    /**
 * @param {string} text Text
 * @param {boolean} bold Make the text bold
 * @param  {...any} args Additional arguments
 */
    static warning(text, bold = false, background = false, ...args) {
        const color = 'yellow';
        let bgColor = 'black';
        background = background === true ? bgColor = 'black' : bgColor = '';
        console.warn(candyText(text, bold, color, bgColor), candyText(args, bold, color, bgColor));
    }

    log(text, bold = false, color, bgColor, ...args) {
        console.log(candyText(text, bold, color, bgColor), candyText(args, bold, color, bgColor));
    }
    /**
     * @param {string} text Text
     * @param {boolean} bold Make the text bold
     * @param  {...any} args additional arguments
     */
    success(text, bold = false, background = false, ...args) {
        const color = 'green';
        let bgColor = 'black';
        background = background === true ? bgColor = 'black' : bgColor = '';
        console.log(candyText(text, bold, color, bgColor), candyText(args, bold, color, bgColor));
    }
    /**
 * @param {string} text Text
 * @param {boolean} bold Make the text bold
 * @param  {...any} args additional arguments
 */
    error(text, bold = false, background = false, ...args) {
        const color = 'red';
        let bgColor = 'black';
        background = background === true ? bgColor = 'black' : bgColor = '';
        console.error(candyText(text, bold, color, bgColor), candyText(`\n${args}`, bold, color, bgColor));
    }
    /**
 * @param {string} text Text
 * @param {boolean} bold Make the text bold
 * @param  {...any} args additional arguments
 */
    warning(text, bold = false, background = false, ...args) {
        const color = 'yellow';
        let bgColor = 'black';
        background = background === true ? bgColor = 'black' : bgColor = '';
        console.warn(candyText(text, bold, color, bgColor), candyText(args, bold, color, bgColor));
    }
}
function candyText(text, bold, color, bgColor = '') {
    color = candyColor(color);
    bgColor = candyBackgroundColor(bgColor);

    if (bold === true) {
        text = `\u001b[1m${color}${bgColor}${text}\u001b[0m`;

    } else {
        text = `\u001b[0m${color}${bgColor}${text}\u001b[0m`;
    }

    return text;
}
function candyColor(color) {
    switch (color) {
        case 'green':
            return color = `\u001b[32m`;
        case 'blue':
            return color = `\u001b[34m`;
        case 'red':
            return color = `\u001b[31m`;
        case 'magenta':
            return color = `\u001b[35m`;
        case 'cyan':
            return color = `\u001b[36m`;
        case 'yellow':
            return color = `\u001b[33m`;
        case 'black':
            return color = `\u001b[30m`;
        case 'white':
            return color = `\u001b[37m`;
        default:
            return color = `\u001b[0m`;
    }
}
function candyBackgroundColor(color) {
    switch (color) {
        case 'green':
            return color = `\u001b[42m`;
        case 'blue':
            return color = `\u001b[44m`;
        case 'red':
            return color = `\u001b[41m`;
        case 'magenta':
            return color = `\u001b[45m`;
        case 'cyan':
            return color = `\u001b[46m`;
        case 'yellow':
            return color = `\u001b[43m`;
        case 'black':
            return color = `\u001b[40m`;
        case 'white':
            return color = `\u001b[47m`;
        default:
            return color = '';
    }
}
module.exports = {
    Candy
}