function CLText(isBold, color, text, bgColor = '') {
    color = CLColor(color);
    bgColor = CLBackgroundColor(bgColor);

    if (isBold === true) {
        text = `\u001b[1m${color}${bgColor}${text}\u001b[0m`;
    } else {
        text = `\u001b[0m${color}${bgColor}${text}\u001b[0m`;
    }

    return text;
}
function CLColor(color) {
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
function CLBackgroundColor(color) {
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
/**
 * 
 * @param {boolean} isBold Make text bold - true / false
 * @param {string} color Text color
 * @param {string} text Text 
 * @param {string} bgColor Background color for text (optional)
 */
function CLLog(isBold, color, text, bgColor = '') {
    console.log(CLText(isBold, color, text, bgColor));
}
module.exports = {
    CLLog
}