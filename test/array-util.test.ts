import { ArrayUtil } from "../src";

it('delDuplicateX', async function () {
    const array = [
        { id: 1, name: 'John', age: 25 },
        { id: 2, name: 'Jane', age: 30 },
        { id: 1, name: 'John', age: 25 },
        { id: 3, name: 'Bob', age: 35 },
        { id: 2, name: 'Janex', age: 30 },
    ];
    let objects = ArrayUtil.deDuplicateX(array, ['id', 'name']);
    console.log(objects);
}, 30000);
