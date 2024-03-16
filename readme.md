# Sweet Console
Sweet Console is a basic package to help you add basic styles to your terminal. 
Example usage would be to log an error with bold text and red color, or a success prompt. 

## Installation
npm install sweet-console

## Usage
```javascript
const { SLText } = require('sweet-console');

console.log(SLText(true, 'red', 'Error: Something went wrong'));
console.log(SLText(false, 'yellow', 'Warning: This operation may take a while', 'black'));
console.log(SLText(true, 'cyan', 'Success: Operation completed successfully', 'white'));
```

![alt text](https://github.com/sindre-gangeskar/sweet-console/blob/master/example.jpg?raw=true)

### Note
For optimal readability, ensure that your 'Minimum Contrast Ratio' setting is adjusted to 1. 
This adjustment enhances contrast and ensures vibrant colors, offering an improved viewing experience.
