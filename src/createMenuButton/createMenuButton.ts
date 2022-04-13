import generateNamespace from '../utils/generateNamespace';

const createMenuButton = (namespace: string) : {
    role: string,
    'aria-haspopup': boolean,
    'aria-expanded': boolean,
    'aria-controls': string,
    ariaControlsId: string,
} => {
    
    const baseIdStr = generateNamespace(namespace);
    const ariaControlsId = baseIdStr + 'controlsId'

    return {
        role: 'button',
        'aria-haspopup': true,
        'aria-expanded': false,
        'aria-controls': ariaControlsId,
        ariaControlsId,
    }
}

export default createMenuButton;