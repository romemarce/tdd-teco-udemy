const { toHaveFormValues } = require("@testing-library/jest-dom/matchers");

test('first example', () => {
    const myMock = jest.fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce('Hi')
    .mockReturnValueOnce(5)

    const result1 = myMock();
    const result2 = myMock();
    const result3 = myMock();

    expect(myMock).toHaveBeenCalledTimes(3)

    expect(result1).toBe(true)
    expect(result2).toBe('Hi')
    expect(result3).toBe(5)
})