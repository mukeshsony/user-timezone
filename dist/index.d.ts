/**
 * convert unix timestamp into user local time zone
 * momentjs auto detect user local timezone
 * @param unixTimestamp
 */
export declare function datetime(unixTimestamp: number, format: string): string;
/**
 * return user local timezone
 */
export declare function getTimeZone(): string;
