import createButton from './createButton';

describe('createButton', () => {
  test('factory should output correct props', () => {
    const obj = createButton('some_name_space');

    expect(obj.role).toBe('button');
    expect(obj['aria-haspopup']).toBe(true);
    expect(obj['aria-expanded']).toBe(false);
    expect(typeof obj['aria-controls']).toBe('string');
  });
});
