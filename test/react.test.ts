import { NetUtil } from "../src";

it('func params', async function () {

    const func = ({ value: value }: { value: string }) => {
        console.log(`hello ${value}`)
    }

    func({ value: 'xxx' });
}, 30000);
