it('proto', () => {
    class Person {

        name: string
        age: number

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }
    // @ts-ignore
    Person.prototype.motherland = 'China';
    let person01 = new Person('小明', 18);
    // @ts-ignore
    console.log(`name = ${person01.name}, age = ${person01.age}, motherland = ${person01.motherland}`);

    // @ts-ignore
    console.log(person01.__proto__) // { motherland: 'china' }
    console.log(Person.prototype)

    console.log(Person.prototype.constructor) // [Class Person]
    // @ts-ignore
    console.log(person01.__proto__.constructor)
});

it('proto 2', () => {
    class Foo {}
    let f1 = new Foo();
    let f2 = new Foo();

    // @ts-ignore
    Object.prototype.fxxk = 'xxx'
    // @ts-ignore
    console.log(Foo.prototype.__proto__)
    console.log(Object.prototype)
    // @ts-ignore
    console.log(Foo.__proto__)
    console.log(Function.prototype)
});
