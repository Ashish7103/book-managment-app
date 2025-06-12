import { useDispatch } from "react-redux";
import { toggleBookModal, setSelectedBook } from "../redux/actions";

function EmptyState() {
  const dispatch = useDispatch();

  const handleAddBook = () => {
    dispatch(setSelectedBook(null));
    dispatch(toggleBookModal(true));
  };

  return (
    <div id="tableEmpty" className="py-12">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-gray-400">
          <i className="ri-book-2-line ri-3x"></i>
        </div>
        <h3 className="text-lg font-medium text-gray-900">No books found</h3>
        <p className="mt-1 text-sm text-gray-500">
          Try adjusting your search or filter to find what you're looking for.
        </p>
        <div className="mt-6">
          <button
            id="addBookEmptyBtn"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-button shadow-sm text-white bg-primary hover:bg-primary/90 whitespace-nowrap"
            onClick={handleAddBook}
          >
            <div className="w-4 h-4 mr-2 flex items-center justify-center">
              <i className="ri-add-line"></i>
            </div>
            Add a new book
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmptyState;