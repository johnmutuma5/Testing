const functions = require('../functions');


test("it adds correctly", () => {
    expect(functions.add(2, 2)).toBe(4);
});


test("it does not return 5 for 2+2", () => {
    expect(functions.add(2, 2)).not.toBe(5);
});


test("it is null", () => {
    expect(functions.isNull()).toBeNull();
});

test("it returns the correct user", () =>{
    let user = {
        name: "John",
        occupation: "Software"
    };

    expect(functions.getUser()).toBe(user);
});
