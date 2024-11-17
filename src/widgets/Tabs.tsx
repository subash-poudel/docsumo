export interface TabInfo {
  id: number;
  title: string;
  type: string;
}

export function Tabs({ tabs }: { tabs: TabInfo[] }) {
  const tabsUI = tabs.map((t) => {
    return (
      <li className="mr-2" key={t.id}>
        <a
          href="#"
          className="inline-block p-4 border-b-2 border-transparent rounded-t-lg text-md font-bold text-gray-900 hover:text-blue-600 hover:border-blue-600 dark:text-gray-400 dark:hover:text-white dark:hover:border-blue-600"
        >
          {t.title}
        </a>
      </li>
    );
  });
  return <ul className="flex flex-wrap -mb-px">{tabsUI}</ul>;
}
