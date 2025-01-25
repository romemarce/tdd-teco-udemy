// callbacks
const asynCallback = (cb)=>{
    setTimeout(()=>{
        cb(true);
    }, 1000);
}

// promise

describe('async code', ()=>{
    it('example of async with callback', ()=>{
        asynCallback((result)=>{
            expect(result).toBe(true)
        })
    })
})