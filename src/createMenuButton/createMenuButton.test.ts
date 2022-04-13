import createMenuButton from './createMenuButton';

describe('createMenuButton', () => {
    test('factory should output correct props', () => {
        const obj = createMenuButton('some_name_space');
        
        expect(obj.role).toBe('button');
        expect(obj["aria-haspopup"]).toBe(true);
        expect(obj["aria-expanded"]).toBe(false);
        expect(typeof obj["aria-controls"]).toBe('string');

    });
});