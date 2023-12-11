import * as _ from "lodash";
import { StringUtil } from "../src";

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
