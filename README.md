# user-timezone

> Format unix timestamp into date time format according to user local timezone



## Install

```
$ npm install --save user-timezone
```


## Usage
```js
import * as usertz from 'user-timezone';

// Convert unix timestamp into date time format

const unixTimeStamp = 1555923762;
const dateTimeFormat = 'MMMM Do, YYYY h:mm ss A';
const datetime = usertz.datetime(unixTimeStamp,dateTimeFormat);

console.log(datetime);
// April 22nd, 2019 2:32 42 PM


// Get user local time zone 
const timezone = usertz.getTimeZone();
console.log(timezone);
// Asia/Calcutta
```


## Date time format

For more datetime display format please refer 
[Momentjs Docs](https://momentjs.com/docs/#/displaying/format)