"use strict";
// ! index.js
// ! version : 1.0.1
// ! authors : Mukesh Soni, Moment.js contributors
// ! momentjs.com
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * convert unix timestamp into user local time zone
 * momentjs auto detect user local timezone
 * @param unixTimestamp
 */
function datetime(unixTimestamp, format) {
    const moment = require('moment');
    let datetimeValue = '';
    if ((typeof unixTimestamp !== 'undefined' && unixTimestamp !== null && unixTimestamp > 0) &&
        (typeof format !== 'undefined' && format !== null && format !== '')) {
        datetimeValue = moment.unix(unixTimestamp).format(format);
    }
    else {
        datetimeValue = moment.unix(unixTimestamp).format();
    }
    return (datetimeValue);
}
exports.datetime = datetime;
/**
 * return user local timezone
 */
function getTimeZone() {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return (userTimeZone);
}
exports.getTimeZone = getTimeZone;
