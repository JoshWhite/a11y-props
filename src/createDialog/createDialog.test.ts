import createDialog from './createDialog';

describe('createDialog', () => {
  test('factory should output correct props', () => {
    const obj = createDialog('some label', 'some button label');

    expect(obj.dialogBody.role).toBe('dialog');
    expect(obj.dialogBody['aria-label']).toBe('some label');
    expect(obj.dialogButton['aria-label']).toBe('some button label');
    expect(obj.dialogBody['aria-modal']).toBe(true);
  });
});
