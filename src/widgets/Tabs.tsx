export function Tabs() {
    return (
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg font-medium text-sm text-gray-900 hover:text-blue-600 hover:border-blue-600 dark:text-gray-400 dark:hover:text-white dark:hover:border-blue-600"
            >
              Regular fields
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg font-medium text-sm text-gray-900 hover:text-blue-600 hover:border-blue-600 dark:text-gray-400 dark:hover:text-white dark:hover:border-blue-600"
            >
              Column fields
            </a>
          </li>
        </ul>
    )
}