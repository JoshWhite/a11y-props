import createLabelBy from './createLabelledBy';
import { testFuncThrowsWhenCalledWithInvalidIdString, stringIsValidForIdAttribute } from '../utils/testUtils'

describe('createLabelBy', () => {
    test('factory should output correct props', () => {
        const namespace = 'my_name_space';
        const obj = createLabelBy(namespace);

        expect(typeof obj.id).toBe('string');
        expect(typeof obj['aria-labelledby']).toBe('string');
    });
    
    test('returned ids should contain namespace', () => {
        const namespace = 'my_name_space';
        const obj = createLabelBy(namespace);

        expect(obj.id).toContain(namespace);
        expect(obj['aria-labelledby']).toContain(namespace);
    })
    
    test('returned ids should contain "labelledby-id"', () => {
        const namespace = 'my_name_space';
        const obj = createLabelBy(namespace);

        expect(obj.id).toContain('labelledby-id');
        expect(obj['aria-labelledby']).toContain('labelledby-id');
    });

    test('returned ids should be valid for an id attribute', () => {
        const obj = createLabelBy('my_name_space');
        
        stringIsValidForIdAttribute(obj.id);
        stringIsValidForIdAttribute(obj['aria-labelledby']);
    });

    test('factory should throw if namespace is not valid id string', () => {
        testFuncThrowsWhenCalledWithInvalidIdString(createLabelBy);
    });
});