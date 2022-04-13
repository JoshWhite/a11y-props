export const stringIsValidForIdAttribute = (string: string) => {
    expect(typeof string === 'string').toBe(true);
    expect(string.length).toBeGreaterThan(0);
    expect(string).not.toContain(' ');
};

export const testFuncThrowsWhenCalledWithInvalidIdString = (func: Function) => {
    const INVALID_ID_ATTRIBUTE_VALUES = [
        null,
        '',
        ' ',
        'I have spaces',
        1,
        true,
        false,
        undefined,
    ];
    
    const VALID_ID_ATTRIBUTE_VALUES = ['validIdString'];
    const callFunctionWithParam = (param: any) => () => func(param);

    expect(func).toThrow();

    INVALID_ID_ATTRIBUTE_VALUES.forEach((value) => {
        expect(callFunctionWithParam(value)).toThrow();
    });
    
    VALID_ID_ATTRIBUTE_VALUES.forEach((value) => {
        expect(callFunctionWithParam(value)).not.toThrow();
    });
};