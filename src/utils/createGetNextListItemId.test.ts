import createGetNextListItemId from './createGetNextListItemId';

describe('createGetNextListItemId', () => {
    test('getNextListItemId should return a string', () => {
        const namespace = 'my-namespace';
        const nextListItemGetter = createGetNextListItemId(namespace);

        expect(typeof nextListItemGetter.getNextListItemId()).toBe('string');
    });

    test('subsequent calls to getNextListItemId should return unique ids', () => {
        const namespace = 'my-namespace';
        const nextListItemGetter = createGetNextListItemId(namespace);
        
        const listId1 = nextListItemGetter.getNextListItemId();
        const listId2 = nextListItemGetter.getNextListItemId();
        const listId3 = nextListItemGetter.getNextListItemId();
        
        expect(listId1).not.toBe(listId2);
        expect(listId2).not.toBe(listId3);
        expect(listId3).not.toBe(listId1);
    });
});