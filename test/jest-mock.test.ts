class FuncFlow {
    static funcA = () => {
        console.log(`funcA`);
    }

    static funcB = () => {
        console.log(`funcB`);
    }

    static funcC = () => {
        console.log(`funcC`);
    }

    static exec() {
        this.funcA();
        this.funcB();
    //    this.funcC();
    }
}

it('jest mock', async function () {
    FuncFlow.funcC = jest.fn();
    FuncFlow.exec();
    expect(FuncFlow.funcC).not.toHaveBeenCalled();
}, 30000);
