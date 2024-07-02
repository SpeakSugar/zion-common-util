class Zion {
    print() {
        console.log(`${this.constructor.name} output`)
    }
}

it(`class test`, () => {
    new Zion().print();
});
