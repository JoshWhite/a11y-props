import createCombobox from './createCombobox';

describe('createCombobox', () => {
    test('factory should output correct props', () => {
        const obj = createCombobox('some_name_space');
        
        expect(typeof obj.comboboxId).toBe('string');
        expect(typeof obj.inputId).toBe('string');
        expect(typeof obj.listboxId).toBe('string');
        expect(typeof obj.getNextListItemId).toBe('function');

    });
});