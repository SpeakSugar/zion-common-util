import * as _ from "lodash";
import { StringUtil } from "../src";
import { JsonUtil } from "../src";

it('_.isEqual', function () {
    const obj1 = {
        name: 'John',
        age: 30,
        address: {
            city: 'New York',
            country: 'USA',
        },
        hobbies: ['reading', 'swimming'],
    };

    const obj2 = {
        name: 'John',
        age: 30,
        address: {
            city: 'New York',
            country: 'USA',
        },
        hobbies: ['reading', 'swimming'],
    };

    const obj3 = {
        name: 'Jane',
        age: 28,
        address: {
            city: 'Los Angeles',
            country: 'USA',
        },
        hobbies: ['reading', 'cooking'],
    };
    console.log(_.isEqual(obj1, obj2)); // true，两个对象的属性和嵌套的数组都相等
    console.log(_.isEqual(obj1, obj3)); // false，对象的属性或数组内容不相等
    console.log(obj1 == obj2);
    console.log(obj1 == obj3);
});

it('memoize', () => {
    const memoizedFunc = _.memoize((a: number, b: number) => {
        console.log('假设执行一个昂贵的计算...');
        return a + b;
    }, (a: number, b: number) => {
        console.log('缓存 key...');
        return `${a}-${b}`;
    });
    console.log(memoizedFunc(2, 3)); // 执行并缓存结果
    console.log(memoizedFunc(2, 3)); // 从缓存中获取结果，避免重复计算
});

it('boolean test', function () {
    console.log(`${JSON.parse("false")}`)
    console.log(Boolean(`false`));
});

it('|| test', function () {
    const x = false;
    const y = undefined;
    console.log(x || y);
});

it('string test', () => {
    const s = String(124143);
    console.log(s);
});

it('regex test', function () {
    let regex = "[.+]";
    const text = "Hello, world!";
    if (regex.indexOf("[") == 0) {
        regex = StringUtil.substringFromFirstChar(regex, '[');
        regex = StringUtil.substringToLastChar(regex, ']');
        console.log(text.match(new RegExp(regex, "g"))![0]);
    }
});

it('merge test', () => {
    const a = {
        name: 'xiaox',
        age: 9,
    };
    const b = {
        name: 'dcccc',
        high: 18,
    }
    const mergedObj = _.merge(a, b);
    console.log(`merged obj = ${JsonUtil.format(mergedObj)}`);
    //  {
    //       "name": "dcccc",
    //       "age": 9,
    //       "high": 18
    //  }
});

it('isMatch test', () => {
    const a = {
        "autostart-enabled": true,
        "autostart-silently-enabled": false,
        "user-login": false,
        "zoom-factor": 1,
        "persist-sentry-url": "",
        "notificationsRequested": true,
        "lazy-load-zoom": true,
        "web-app-config": {
            "domain": "https://mfe_a-mr-feature-fiji-71869.fiji.gliprc.com",
            "mode": "default"
        },
    };

    const b = {
        "web-app-config": {
            "domain": "https://mfe_a-mr-feature-fiji-71869.fiji.gliprc.com",
            "mode": "default"
        },
    }

    console.log(`isMatch = ${_.isMatch(a, b)}`);
});

it(`regex test 2`, function () {
    let s = "231.123.241.1xxxx"
    const match = s.match(new RegExp(/\d+\.\d+\.\d+\.\d+/))!;
    console.log(match[0]);
})

it(`regex test 3`, function () {
    let s = "xxxx john.doeyyyy"
    console.log(/John[\\. ]Doe/i.test(s));
})

it('regex test 4', () => {
    const result = `1.0 TB`
    const match = result.match(new RegExp(/\d+(\.\d+)?\s(GB|TB)/))!
    console.log(match[0]);
});
