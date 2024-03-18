# Candy Log
Candy Log simplifies the process of styling your terminal logs. It offers four predefined options: 
   
    - success
    - error 
    - warning
    - log

While the success, error, and warning presets come with predefined color codes for standard conventions, the log option provides full customization, allowing you to tailor your log's styles according to your preferences.

## Installation
npm install candy-log

## Usage
```javascript
/* Access static class */
const { Candy } = require('candy-log');  
Candy.log('Application started', false, 'blue', 'black');
Candy.success('Payment successful', true, true, 'Payment of $50.00 completed.');
Candy.error(errorMessage, false, true, errorStack);
Candy.warning(warningMessage, true, false, 'Available space: 2.5GB');

/* Create an instance of the class */
const { Candy } = require('candy-log');
const c = new Candy();
c.log('Application started', false, 'blue', 'black');
c.success('Payment successful', true, true, 'Payment of $50.00 completed.');
c.error(errorMessage, false, true, errorStack);
c.warning(warningMessage, true, false, 'Available space: 2.5GB');
```

![alt text]([https://raw.githubusercontent.com/sindre-gangeskar/candy-log/master/example1.png?raw=true])
![alt text]([https://raw.githubusercontent.com/sindre-gangeskar/candy-log/master/example2.png?raw=true])
### Available Colors

'green'
'blue'
'red'
'magenta'
'cyan'
'yellow'
'black'
'white'


### Note
Colors may be affected by how your terminal handles the brightness.
Changes to those settings may be needed to get good contrasts between the different colors. 
