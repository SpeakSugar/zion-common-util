import { SingletonFactory } from "../src";

it('factory test', function () {
    class Mobx {
        print() {
            console.log(`fxxk`);
        }
    }
    SingletonFactory.getInstance(Mobx).print();
});
