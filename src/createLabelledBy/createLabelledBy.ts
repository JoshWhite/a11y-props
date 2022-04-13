import generateNamespace from '../utils/generateNamespace';

/**
 * Factory to generate ids required for labelled-by pattern
 * @param { string } namespace - identifier from which to generate unique ID string
*/ 

const createLabelBy = (namespace: string) : {
    id: string,
    'aria-labelledby': string,
} => {
    const baseIdStr = generateNamespace(namespace);
    const id = baseIdStr + 'labelledby-id';

    return {
        ['aria-labelledby']: id,
        id,
    }
};

export default createLabelBy;