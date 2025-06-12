function LoadingState() {
  const skeletonRow = (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="h-10 w-8 skeleton rounded"></div>
          <div className="ml-4">
            <div className="h-4 w-32 skeleton rounded"></div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="h-4 w-24 skeleton rounded"></div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="h-6 w-20 skeleton rounded-full"></div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="h-4 w-12 skeleton rounded"></div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="h-6 w-20 skeleton rounded-full"></div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <div className="h-8 w-16 skeleton rounded inline-block"></div>
      </td>
    </tr>
  );

  return (
    <div id="loadingState">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="table-container">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Book
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Author
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Genre
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Published
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {skeletonRow}
              {skeletonRow}
              {skeletonRow}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LoadingState;