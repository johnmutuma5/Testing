const burger = require('../burger');

describe("Burge Test Case", () => {
    beforeEach (() => {
        let _burger = new burger.Burger();
    });

    test("Burger is delicious", () => {
        let delicious = burger.isDelicious;
        expect(delicious).toBeTruthy;
    });

    test("Burger is hot", () => {
        let notHot = burger.isNotHot;
        expect(notHot).toBeFasly;
    });
});
