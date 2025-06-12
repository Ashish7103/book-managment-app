function BookTable({ books, onEdit, onDelete }) {
  return (
    <div
      id="tableView"
      className={`bg-white rounded-xl shadow-md border ${books.length === 0 ? "hidden" : ""}`}
    >
      <div className="overflow-x-auto bg-white shadow-sm rounded-xl border">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 text-left font-semibold">BOOK</th>
              <th className="px-6 py-3 text-left font-semibold">AUTHOR</th>
              <th className="px-6 py-3 text-left font-semibold">GENRE</th>
              <th className="px-6 py-3 text-left font-semibold">PUBLISHED</th>
              <th className="px-6 py-3 text-left font-semibold">LANGUAGE</th>
              <th className="px-6 py-3 text-left font-semibold">STATUS</th>
              <th className="px-6 py-3 text-left font-semibold">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {books.map((book) => (
              <tr key={book.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-4">
                    {book.cover && (
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="h-16 w-12 rounded-md  shadow-sm border"
                      />
                    )}
                    <div className="font-semibold text-gray-900 text-sm">
                      {book.title}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-700">{book.author}</td>
                <td className="px-6 py-4 text-gray-700">{book.genre}</td>
                <td className="px-6 py-4 text-gray-600">{book.year}</td>
                <td className="px-6 py-4 text-gray-600">{book.language}</td>
                <td className="px-6 py-4 text-gray-600">{book.status}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => onEdit(book)}
                      className="w-6 h-6 flex items-center justify-center text-blue-600 hover:text-blue-800"
                    >
                      <i className="ri-edit-line text-sm"></i>
                    </button>
                    <button
                      onClick={() => onDelete(book.id, book.title)}
                      className="w-6 h-6 flex items-center justify-center text-red-600 hover:text-red-800"
                    >
                      <i className="ri-delete-bin-line text-sm"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookTable;