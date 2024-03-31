function format(val, indent = 2) {
    if (Array.isArray(val) && val.length > 0) {
        const json = JSON.stringify(val, null, indent);
        const unquoted = json.replace(/"([^"]+)":/g, "$1:");
        return unquoted;
    }
    if (val === null) return val = '';

    if (typeof val === 'object') {
        const json = JSON.stringify(val, null, indent);
        const unquoted = json.replace(/"([^"]+)":/g, '$1:');
        return unquoted;
    }
    if (typeof val === 'number') {
        console.log('THIS IS A NUMBER');
        return Number(val);
    }
    if (typeof val === 'boolean')
        return Boolean(val);

    if (typeof val === 'function')
        return val;

    if (typeof val === 'string')
        return val.toString();

    return val;
}
function candyText(text, bold = false, color = '', background = '') {
    color = candyColor(color);
    background = candyBackgroundColor(background);

    if (bold === true) {
        text = `\u001b[1m${color}${background}${text}\u001b[0m`;

    } else {
        text = `\u001b[0m${color}${background}${text}\u001b[0m`;
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
    format,
    candyText,
    candyColor,
    candyBackgroundColor
}