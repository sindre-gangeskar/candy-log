# Candy Log [![Downloads](https://badgen.net/npm/dt/candy-log)](https://www.npmjs.com/package/candy-log)
> ### An easy to use utility for logging your terminal logs in style.
    - success
    - error 
    - warning
    - log
---
While the success, error, and warning presets come with predefined color codes for standard conventions, the log option provides full customization, allowing you to tailor your log's styles according to your preferences.

## Installation
<pre>npm i candy-log</pre>

## Usage
```javascript
// Examples

/* Access static class */
const { Candy } = require('candy-log');  
const options = {bold: false, color: 'blue', background: 'red'}

Candy.log('Application started', options, ...data);
Candy.log('Application started', null, ...data);
Candy.success('Payment successful', ...data);
Candy.error(errorMessage, ...data);
Candy.warning(warningMessage, ...data);


/* Create an instance of the class */
const { Candy } = require('candy-log');
const c = new Candy();

c.log('Application started', options, ...data);
c.log('Application started', null, ...data);
c.success('Payment successful', ...data);
c.error(errorMessage, ...data);
c.warning(warningMessage, ...data);
```
### Demo 1
![Demo 1](https://github.com/sindre-gangeskar/candy-log/blob/master/example1.png?raw=true)

### Demo 2
![Demo 2](https://github.com/sindre-gangeskar/candy-log/blob/master/example2.png?raw=true)

### Available Colors

> 'green'  
> 'blue'  
> 'red'  
> 'magenta'  
> 'cyan'  
> 'yellow'  
> 'black'  
> 'white'  


### Note
Colors may be affected by how your terminal handles the brightness.
Changes to those settings may be needed to get good contrasts between the different colors. 
