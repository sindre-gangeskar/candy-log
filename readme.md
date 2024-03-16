# Sweet Log
Sweet Console is a basic package to help you add basic styles to your terminal. 
Example usage would be to log an error with bold text and red color, or a success prompt. 

## Installation
npm install sweet-log

## Usage
```javascript
const { SLText } = require('sweet-log');

console.log(SLText(true, 'red', 'Error: Something went wrong'));
console.log(SLText(false, 'yellow', 'Warning: This operation may take a while', 'black'));
console.log(SLText(true, 'cyan', 'Success: Operation completed successfully', 'white'));
```

![alt text](https://github.com/sindre-gangeskar/sweet-log/blob/master/Example1.jpg?raw=true)

### Note
To ensure the best readability, adjust your *'Minimum Contrast Ratio'* setting to 1 in your preferred code editor, such as Visual Studio Code or an equivalent, especially for use within your IDE's terminal.
