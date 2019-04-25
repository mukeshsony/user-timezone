// ! index.js
// ! version : 1.0.1
// ! authors : Mukesh Soni, Moment.js contributors
// ! momentjs.com

/**
 * convert unix timestamp into user local time zone
 * momentjs auto detect user local timezone
 * @param unixTimestamp
 */
export function datetime(unixTimestamp: number, format: string): string {
    const moment = require('moment');
    let datetimeValue = '';
    if (
        (typeof unixTimestamp !== 'undefined' && unixTimestamp !== null && unixTimestamp > 0) &&
        (typeof format !== 'undefined' && format !== null && format !== '')
    ) {
        datetimeValue =  moment.unix(unixTimestamp).format(format);
    } else {
        datetimeValue =  moment.unix(unixTimestamp).format();
    }
    return (datetimeValue);
}

/**
 * return user local timezone
 */
export function getTimeZone(): string {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return (userTimeZone);
}
