// Link.test.js
import React from 'react';
import Link from './link';
import renderer from 'react-test-renderer';

describe('<Link />', () => {
    let tree;
    let component;
    beforeAll(() => {
        component = renderer.create(
            <Link page="http://www.facebook.com">Facebook</Link>,
        );
        tree = component.toJSON();
    });

    test('Link component rendered successfully', () => {
        expect(tree).toMatchSnapshot();
    })

    test('Link changes when mouse enter', () => {
        // manually trigger the callback
        tree.props.onMouseEnter();
        // re-rendering
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
    
    test('Link changes when mouse leave', () => {
        // manually trigger the callback
        tree.props.onMouseLeave();
        // re-rendering
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})
