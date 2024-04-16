import { TimeUtil } from "../src";

it('format', function () {
    console.log(TimeUtil.format(1711705438835));
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
