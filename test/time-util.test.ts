import { TimeUtil } from "../src";

it('format', function () {
    console.log(TimeUtil.format(1709463970639));
});

it('date test', function () {
    console.log(`${new Date()}`);
});

it('date test 2', function () {
    console.log(`${Date.now().toString()}`);
});
