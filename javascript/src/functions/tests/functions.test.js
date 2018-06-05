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
    // using toBe here in place of toEqual fails the test, try
    expect(functions.getUser()).toEqual(user);
});

test("response begins with Successful", () => {
    let match = /^Successful/;
    let response = functions.getResponse();
    expect(response).toMatch(match);
})

test("it gets correct async message: with promise", () => {
    expect.assertions(1);
    return functions.getMsgPromise().then((message) => {
        expect(message).toEqual('Hello world!');
    });
})
