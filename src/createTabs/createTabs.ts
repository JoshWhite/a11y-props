import generateNamespace from '../utils/generateNamespace';

interface Tab {
  id: string;
  name: string;
}

interface TabAttributes {
  role: string;
  'aria-selected': false;
  'aria-controls': string;
  id: string;
  tabIndex: -1;
}

interface PanelAttributes {
  role: string;
  id: string;
  'aria-labelledby': string;
  hidden: true;
  tabIndex: -1;
}

const createTab =
  (baseIdStr: string) =>
  (
    tab: Tab,
  ): {
    tab: Tab & { tabAttributes: TabAttributes };
    panel: { id: string; panelAttributes: PanelAttributes };
  } => {
    const tabId = `${baseIdStr}_tab_${tab.id}`;
    const panelId = `${baseIdStr}_panel_${tab.id}`;

    return {
      tab: {
        ...tab,
        tabAttributes: {
          tabIndex: -1,
          role: 'tab',
          'aria-selected': false,
          'aria-controls': panelId,
          id: tabId,
        },
      },
      panel: {
        id: tab.id,
        panelAttributes: {
          role: 'tabpanel',
          id: panelId,
          'aria-labelledby': tabId,
          hidden: true,
          tabIndex: -1,
        },
      },
    };
  };

const createTabs = ({
  namespace,
  ariaLabel,
  tabs = [],
}: {
  namespace: string;
  ariaLabel: string;
  tabs: Array<Tab>;
}): {
  tabListAttributes: {
    role: string;
    'aria-label': string;
  };
  tabButtons: Array<ReturnType<ReturnType<typeof createTab>>['tab']>;
  tabPanels: Array<ReturnType<ReturnType<typeof createTab>>['panel']>;
} => {
  if (!ariaLabel) {
    console.warn('aria-label required');
  }

  const baseIdStr = generateNamespace(namespace);
  const mappedTabs = tabs.map(createTab(baseIdStr));
  const tabButtons = mappedTabs.map((mappedTab) => mappedTab.tab);
  const tabPanels = mappedTabs.map((mappedTab) => mappedTab.panel);

  return {
    tabListAttributes: {
      role: 'tablist',
      'aria-label': ariaLabel,
    },
    tabButtons,
    tabPanels,
  };
};

export default createTabs;
