const add = require('../functions');


test("it adds correctly", () => {
    expect(add(2, 2)).toBe(4);
});


test("it does not return 5 for 2+2", () => {
    expect(add(2, 2)).not.toBe(5);
});


test("it is null", () => {
    expect(functions.isNull().toBeNull());
})
