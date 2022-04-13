import generateNamespace from './generateNamespace';
import { testFuncThrowsWhenCalledWithInvalidIdString } from './testUtils';

test('subsequent calls with the same namespace should generate unique ids', () => {
    const namespace = 'my-namespace';
    const generatedIds1 = generateNamespace(namespace);
    const generatedIds2 = generateNamespace(namespace); 
    const generatedIds3 = generateNamespace(namespace); 
    
    expect(generatedIds1).not.toBe(generatedIds2);
    expect(generatedIds2).not.toBe(generatedIds3);
    expect(generatedIds3).not.toBe(generatedIds1);
});

test('function should throw if returned value contains spaces', () => {
    const namespace = 'my spacey namespace';
    const callFunctionWithNamespace = () => generateNamespace(namespace);
    
    expect(callFunctionWithNamespace).toThrow();
});

test('function should throw if provided namespace is not a string', () => {
    testFuncThrowsWhenCalledWithInvalidIdString(generateNamespace);
});