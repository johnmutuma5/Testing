class Burger {
    constructor (){
        // ...
    }

    get isDelicious () {
        // ...
        return true;
    };

    get isNotHot () {
        // ...
        return false;
    };
}
const burger = {
    Burger: Burger,
};

module.exports = burger;
