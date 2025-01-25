const ExceptionTest = () => {
    throw new Error("Bad code!")
};


describe('Matchers', ()=>{
    it('toBe - Equivalencia', ()=>{
        expect(true).toBe(true)
    })
    it('toEquals - Igualdades de array u objetos', ()=>{
        const objeto = { a: 1, b: 2 }
        expect(objeto).toEqual({a: 1, b: 2})

        const array = [3,4,5]
        expect(array).toEqual([3,4,5])
    })
    it('not niega como !condicion o !variable ', ()=>{
        expect(true).not.toBe(false)
    })
    it('manejo de strings', ()=>{
        const correo = "example1@gmail.com"
        const regularExpresion = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        expect(correo).toMatch(regularExpresion)
    })
    it('Contenido en []', ()=>{
        const fruit = [
            'pear',
            'apple',
            'banana',
            'orange'
        ]
        expect(fruit).not.toContain('tomato')
        expect(fruit).toContain('apple')
    })
    it('Testing de Excepciones - toThrow', ()=>{
        expect(ExceptionTest).toThrow()
    })
})

