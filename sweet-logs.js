function SLText(isBold, color, text, bgColor = '') {
    color = SLColor(color);
    bgColor = SLBackgroundColor(bgColor);

    if (isBold === true) {
        text = `\u001b[1m${color}${bgColor}${text}\u001b[0m`;
    } else {
        text = `\u001b[0m${color}${bgColor}${text}\u001b[0m`;
    }
    return text;
}
function SLColor(color) {
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
function SLBackgroundColor(color) {
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
/* 
console.log(SLText(false, 'red', 'Red text on default background'));
console.log(SLText(false, 'green', 'Green text on default background'));
console.log(SLText(false, 'blue', 'Blue text on default background'));
console.log(SLText(false, 'yellow', 'Yellow text on default background'));
console.log(SLText(false, 'cyan', 'Cyan text on default background'));
console.log(SLText(false, 'magenta', 'Magenta text on default background'));
console.log(SLText(false, 'white', 'White text on default background'));
console.log(SLText(false, 'black', 'Black text on default background'));
console.log(SLText(false, 'white', 'White text on black background', 'black'));
console.log(SLText(false, 'black', 'Black text on white background', 'white')); */


console.log(SLText(true, 'red', 'Error: Something went wrong'));
console.log(SLText(false, 'yellow', 'Warning: This operation may take a while', 'black'));
console.log(SLText(true, 'black', 'Success: Operation completed successfully', 'green'));


/* console.log(SLText(false, 'yellow', 'Yellow text on blue background', 'blue'));
console.log(SLText(false, 'white', 'White text on green background', 'green'));
console.log(SLText(false, 'black', 'Black text on magenta background', 'magenta'));
console.log(SLText(false, 'red', 'Red text on cyan background', 'cyan'));
console.log(SLText(false, 'green', 'Green text on yellow background', 'yellow')); */




