import { JsonUtil } from "../src";
import { PromiseUtil } from "../src";
import axios from "axios";

it(`undefined test`, () => {
    const s: any = undefined;
    const arr = [];
    // @ts-ignore
    arr.push({}.xxx)
    console.log(JsonUtil.format(arr));
})

it(`await debug`, async () => {
    async function asyncF() {
        console.log(`fxxk`);
        await PromiseUtil.sleep(1);
        console.log(`sxxt`);
    }

    await asyncF();
})

it(`this test`, () => {
    function xxx() {
        // @ts-ignore
        console.log(this.xiaoming);
    }

    xxx();
})

it(`exception test`, async () => {

    class A {
        static async parentFunc() {
            this.sonFunc()
        }

        static async sonFunc() {
            throw new Error("son E")
        }
    }

    await A.parentFunc();
});

it(`axios exception test`, async () => {

    class A {
        static async parentFunc() {
            await this.sonFunc()
        }

        static async sonFunc() {
            await axios.get(`http//:1.1.1.3:4444/xxx`)
        }
    }

    await A.parentFunc();
})
