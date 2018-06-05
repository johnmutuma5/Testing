const functions = {
    add: (num, num1) => num + num1,
    isNull: () => null,
    getUser: () => ({
        name: "John",
        occupation: "Software"
    }),
    getResponse: () => 'Successful. Operation approved!'
}

module.exports = functions;
