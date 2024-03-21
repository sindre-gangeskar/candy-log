## [1.2.1] - 2024-03-21
Made all available options into an options object that can be passed into the log function. 
If no options specify as 'null'

## [1.2.0] - 2024-03-21

## Added
Created utilities.js and a format function to properly format the data being passed into the different logs based on type of data.

## Changed
Changed the way the preset functions work. 
In prior version you could pass in bold and background options as boolean values, now that's gone
and they work now by simply passing in the message, then the data to be logged. 

All customization options are accessible by using the log function instead.
Made this change for simplicity reasons. 




