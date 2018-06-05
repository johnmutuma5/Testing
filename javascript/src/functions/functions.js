const asyncCalls = require('../asyncCalls/asyncCalls');

const functions = {
    add: (num, num1) => num + num1,
    isNull: () => null,
    getUser: () => ({
        name: "John",
        occupation: "Software"
    }),
    getResponse: () => 'Successful. Operation approved!',
    // this will return a promise returned by getMsgAsync
    getMsgPromise: () => asyncCalls.getMsgPromise(),
    // this will not return a promise but it is asynchronous
}

module.exports = functions;
