# Candy Log
Candy Log is a basic package to help you add basic styles to your terminal. 
Example usage would be to log an error with bold text and red color, or a success prompt. 

## Installation
npm install candy-log

## Usage
```javascript

const cl = require('candy-log');  
/* OR */
const { CLLog } = require('candy-log');

CLLog(true, 'red', 'Error: Something went wrong');
CLLog(false, 'yellow', 'Warning: This operation may take a while', 'black');
CLLog(true, 'cyan', 'Success: Operation completed successfully', 'white');

cl.CLLog(true, 'red', 'Error: Something went wrong');
```

![alt text](https://github.com/sindre-gangeskar/candy-log/blob/master/example.jpg?raw=true)

### Note
To ensure the best readability, adjust your *'Minimum Contrast Ratio'* setting to 1 in your preferred code editor, such as Visual Studio Code or an equivalent, especially for use within your IDE's terminal.
