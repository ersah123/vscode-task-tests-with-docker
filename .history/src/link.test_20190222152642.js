// Link.react.test.js
import React from 'react';
import Link from './link';
import renderer from 'react-test-renderer';

describe('/POST login', () => {
    let tree;
    beforeAll(() => {
        const component = renderer.create(
            <Link page="http://www.facebook.com">Facebook</Link>,
        );
        tree = component.toJSON();
    });
    test('Link component rendered successfully', () => {

    })
    test('Link changes the class when hovered', () => {
        expect(tree).toMatchSnapshot();
      
        // manually trigger the callback
        tree.props.onMouseEnter();
        // re-rendering
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      
        // manually trigger the callback
        tree.props.onMouseLeave();
        // re-rendering
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})
