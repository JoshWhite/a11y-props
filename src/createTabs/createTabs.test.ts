import createTabs from './createTabs';

describe('createTabs', () => {
  test('factory should output correct a11y props', () => {
    const namespace = 'ARIA_NAME_SPACE';
    const ariaLabel = 'ARIA_LABEL';
    const tabId = 'SELECTED_TAB_ID';
    const tabName = 'SELECTED_TAB_NAME';

    const expectedPanelId = `panel_${tabId}`;
    const expectedTabId = `tab_${tabId}`;

    const tabs = [
      {
        id: tabId,
        name: tabName,
      },
    ];

    const result = createTabs({
      namespace,
      ariaLabel,
      tabs,
    });

    expect(result).toEqual(
      expect.objectContaining({
        tabListAttributes: expect.objectContaining({
          role: 'tablist',
          'aria-label': ariaLabel,
        }),
        tabButtons: expect.arrayContaining([
          expect.objectContaining({
            tabAttributes: {
              tabIndex: -1,
              role: 'tab',
              'aria-selected': false,
              'aria-controls': expect.stringContaining(expectedPanelId),
              id: expect.stringContaining(expectedTabId),
            },
          }),
        ]),
        tabPanels: expect.arrayContaining([
          expect.objectContaining({
            id: tabId,
            panelAttributes: {
              role: 'tabpanel',
              id: expect.stringContaining(expectedPanelId),
              'aria-labelledby': expect.stringContaining(expectedTabId),
              hidden: true,
              tabIndex: -1,
            },
          }),
        ]),
      }),
    );
  });

  test('should console.warn when ariaLabel not provided', () => {
    jest.spyOn(console, 'warn');

    createTabs({
      namespace: 'a',
      ariaLabel: '',
      tabs: [],
    });

    expect(console.warn).toHaveBeenCalledWith('aria-label required');
  });
});
