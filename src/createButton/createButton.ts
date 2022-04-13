import generateNamespace from '../utils/generateNamespace';

const createButton = (namespace: string) : {
    role: string,
    'aria-haspopup': boolean,
    'aria-expanded': boolean,
    'aria-controls': string,
} => {
    
    const baseIdStr = generateNamespace(namespace);
    const ariaControlsId = baseIdStr + 'controlsId'

    return {
        role: 'button',
        'aria-haspopup': true,
        'aria-expanded': false,
        'aria-controls': ariaControlsId,
    }
}

export default createButton;