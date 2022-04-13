const createDialog = (ariaLabel: string, ariaLabelButton: string) : {
    dialogBody: {
        role: string,
        'aria-modal': boolean,
        'aria-label': string,
    },
    dialogButton: {
        'aria-label': string,
    }
} => {
    
    if (!ariaLabel) {
        console.warn('aria-label required');
    }
    if (!ariaLabelButton) {
        console.warn('Button aria-label required');
    }

    return {
        dialogBody: {
            role: 'dialog',
            'aria-modal': true,
            'aria-label': ariaLabel,
        },
        dialogButton: {
            'aria-label': ariaLabelButton,
        },
    };
};

export default createDialog;