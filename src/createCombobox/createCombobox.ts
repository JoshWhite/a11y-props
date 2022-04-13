import generateNamespace from '../utils/generateNamespace';
import createGetNextListItemId from '../utils/createGetNextListItemId';

/**
 * Factory to generate all ids and methods required for aria's combobox spec
 * 
 * @method createCombobox
 * @param {string} - namespace 
 * @url https://www.w3.org/TR/wai-aria-practices/#combobox
 */
const createCombobox = (namespace: string) : {
    getNextListItemId: ReturnType<typeof createGetNextListItemId>['getNextListItemId'],
    comboboxId: string,
    inputId: string,
    listboxId: string,
} => {

    const baseIdStr = generateNamespace(namespace);

    // generate all static ids
    const comboboxId = baseIdStr + 'combobox';
    const inputId = baseIdStr + 'input';
    const listboxId = baseIdStr + 'listbox';

    return {
        ...createGetNextListItemId(baseIdStr),
        comboboxId: comboboxId,
        inputId: inputId,
        listboxId: listboxId
    }
};

export default createCombobox;