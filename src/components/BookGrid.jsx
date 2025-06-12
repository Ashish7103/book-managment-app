function BookGrid({ books, onEdit, onDelete }) {
  return (
    <div
      id="gridView"
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ${
        books.length === 0 ? "hidden" : ""
      }`}
    >
      {/* {books.map((book) => (
        <div
          key={book.id}
          className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col"
        >
          <div className="h-48 overflow-hidden">
            <img
              src={book.cover}
              alt={book.title}
              className="w-5 h-5 object-cover"
            />
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="text-lg font-medium text-gray-900 mb-1">
              {book.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">{book.author}</p>
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                {book.genre}
              </span>
              <span className="text-sm text-gray-500">{book.year}</span>
            </div>
            <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
              <span
                className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  book.status === "Available"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {book.status}
              </span>
              <div className="flex space-x-2">
                <button
                  className="p-1 rounded-full text-primary hover:bg-gray-100"
                  onClick={() => onEdit(book)}
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-edit-line"></i>
                  </div>
                </button>
                <button
                  className="p-1 rounded-full text-red-600 hover:bg-gray-100"
                  onClick={() => onDelete(book.id, book.title)}
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-delete-bin-line"></i>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
}

export default BookGrid;