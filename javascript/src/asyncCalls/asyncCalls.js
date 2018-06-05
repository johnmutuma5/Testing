const getMsgPromise = () => {
    prom = new Promise((resolve, reject) => {
        const msg = 'Hello world!';
        // delay the message 1 seconds. Simulates an asyc func
        // Or you can make an API call like in the tutorial
        setTimeout(() => {
            resolve(msg);
        }, 1000);
    });
    return prom;
};

const asyncCalls = {
    getMsgPromise: getMsgPromise
}

module.exports = asyncCalls;
