// callbacks
const asyncCallback = (cb)=>{
    setTimeout(()=>{
        cb(true);
    }, 1000);
}

// promise
const asyncPromise = () => new Promise((resolve) => resolve(true))

describe('async code', ()=>{
    it('example of async with callback', (done)=>{
        asyncCallback((result)=>{
            expect(result).toBe(true)
            done();
        })
    })
    it('example of async with Promises', ()=>{
        return asyncPromise().then(
            (result)=>{
               expect(result).toBe(true)
            }
        )
    })
    it('example of async with Promises 2', ()=>{
        return expect(asyncPromise()).resolves.toBe(true)
    })
    it('example of async with async await', async ()=>{
        const result = await asyncPromise();
        expect(result).toBe(true)
    })
})