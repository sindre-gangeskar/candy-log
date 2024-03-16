# Sweet Logs
Sweet Logs is a basic package to help you add basic styles to your terminal. 
Example usage would be to log an error with bold text and red color, or a success prompt. 

## Installation
npm install sweet-logs

## Usage
```javascript
const { SLText } = require('sweet-logs');

console.log(SLText(true, 'red', 'Error: Something went wrong'));
console.log(SLText(false, 'yellow', 'Warning: This operation may take a while', 'black'));
console.log(SLText(true, 'cyan', 'Success: Operation completed successfully', 'white'));
```
### Note
For optimal readability, ensure that your 'Minimum Contrast Ratio' setting is adjusted to 1. 
This adjustment enhances contrast and ensures vibrant colors, offering an improved viewing experience.
