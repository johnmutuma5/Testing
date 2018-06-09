import React from 'react';
import renderer from 'react-test-renderer';
import MyComponent from '../MyComponent';


describe("MyComponent TestCase", () => {
    test("MyComponent renders correctly", () => {
        const tree = renderer
            .create(<MyComponent />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
