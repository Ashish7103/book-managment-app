import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  toggleDeleteModal,
  setDeleteId,
  setBooks,
} from "../redux/actions";

function DeleteModal() {
  const dispatch = useDispatch();
  const isDeleteModalOpen = useSelector((state) => state.isDeleteModalOpen);
  const deleteId = useSelector((state) => state.deleteId);
  const books = useSelector((state) => state.books);

  const bookToDelete = books.find((book) => book.id === deleteId);

  const handleCloseModal = () => {
    dispatch(toggleDeleteModal(false));
    dispatch(setDeleteId(null));
  };

  const handleDelete = () => {
    dispatch(setBooks(books.filter((book) => book.id !== deleteId)));
    toast.success("Book deleted successfully");
    handleCloseModal();
  };

  return (
    <div
      id="deleteModal"
      className={`fixed inset-0 z-50 overflow-y-auto ${
        isDeleteModalOpen ? "" : "hidden"
      }`}
      onClick={(e) => {
        if (e.target.id === "deleteModal") handleCloseModal();
      }}
    >
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          ​
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <div className="w-6 h-6 flex items-center justify-center text-red-600">
                  <i className="ri-error-warning-line"></i>
                </div>
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Delete Book
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500" id="deleteConfirmText">
                    Are you sure you want to delete "{bookToDelete?.title}"? This
                    action cannot be undone.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              id="confirmDeleteBtn"
              className="w-full inline-flex justify-center rounded-button border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm whitespace-nowrap"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              type="button"
              id="cancelDeleteBtn"
              className="mt-3 w-full inline-flex justify-center rounded-button border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm whitespace-nowrap"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;