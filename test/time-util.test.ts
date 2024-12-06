import { TimeUtil } from "../src";
import * as moment from 'moment';

it('format', function () {
    console.log(TimeUtil.format(1733302943 * 1000));
});

it(`getStampRangeBeforeNDays`, () => {
    const stampRange = TimeUtil.getStampRangeBeforeNDays(1);
    console.log({
        start: TimeUtil.format(stampRange.startTimestamp, `UTC`),
        end: TimeUtil.format(stampRange.endTimestamp, `UTC`),
    })
});

it(`spent`, () => {
    console.log(1733302943 / (60 * 60 * 1000));
});

it('date test', function () {
    console.log(`${new Date()}`);
});

it('date test 2', function () {
    console.log(`${Date.now().toString()}`);
});

it('date parse', function () {
    const timestamp = Date.parse('2024-03-29T17:43:58.835');
    console.log(timestamp);

});

it('moment test', async () => {
    console.log(moment().subtract(moment().day(), 'days'))
})
