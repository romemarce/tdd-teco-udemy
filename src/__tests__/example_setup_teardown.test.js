describe('setup and teardown examples',()=>{
    beforeAll(()=>{
        console.log("beforeAll"); // se ejecuta antes de todos los tests
    })
    beforeEach(()=>{
        console.log("beforeEach"); // se ejecuta antes de cada uno de los test
    })

    afterAll(()=>{
        console.log('afterAll'); // se ejecuta al final de todos los test
    });

    afterEach(()=>{
        console.log('afterEach'); // se ejecuta al final de cada uno de los test
    });

    test('Example 1', ()=> {
        expect(true).toBe(true);
    })
    test('Example 2', ()=> {
        expect(true).toBe(true);
    })
})