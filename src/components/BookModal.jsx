import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import {
  toggleBookModal,
  setSelectedBook,
  setBooks,
} from "../redux/actions";

const bookSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  author: Yup.string().required("Author is required"),
  genre: Yup.string().required("Please select a genre"),
  year: Yup.number()
    .required("Published year is required")
    .min(1000, "Year must be at least 1000")
    .max(2025, "Year cannot be in the future"),
});

function BookModal() {
  const dispatch = useDispatch();
  const isBookModalOpen = useSelector((state) => state.isBookModalOpen);
  const selectedBook = useSelector((state) => state.selectedBook);
  const [coverImage, setCoverImage] = useState(selectedBook?.cover || "");
  const fileInputRef = useRef(null);

  const handleCloseModal = () => {
    dispatch(toggleBookModal(false));
    dispatch(setSelectedBook(null));
    setCoverImage("");
  };

  const handleUploadCover = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCoverImage(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const newBook = {
      ...values,
      status: values.status ? "Available" : "Issued",
      cover:
        coverImage ||
        selectedBook?.cover ||
        "https://via.placeholder.com/200x300",
      id: selectedBook ? selectedBook.id : Date.now().toString(),
    };

    try {
      if (selectedBook) {
        // Update book
        dispatch(
          setBooks(
            store.getState().books.map((book) =>
              book.id === selectedBook.id ? newBook : book
            )
          )
        );
        toast.success("Book updated successfully");
      } else {
        // Add book
        dispatch(setBooks([newBook, ...store.getState().books]));
        toast.success("Book added successfully");
      }
      handleCloseModal();
      resetForm();
    } catch (error) {
      toast.error("Failed to save book");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      id="bookModal"
      className={`fixed inset-0 z-50 overflow-y-auto ${
        isBookModalOpen ? "" : "hidden"
      }`}
      onClick={(e) => {
        if (e.target.id === "bookModal") handleCloseModal();
      }}
    >
      {/* <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
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
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modalTitle"
                >
                  {selectedBook ? "Edit Book" : "Add New Book"}
                </h3>
                <div className="mt-4">
                  <form id="bookForm" className="space-y-4">
                    <input type="hidden" id="bookId" />
                    <div>
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        className="mt-1 block w-full border-gray-300 rounded-button shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                        defaultValue={selectedBook?.title || ""}
                        required
                      />
                      <div
                        id="titleError"
                        className="hidden mt-1 text-sm text-red-600"
                      ></div>
                    </div>
                    <div>
                      <label
                        htmlFor="author"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Author
                      </label>
                      <input
                        type="text"
                        name="author"
                        id="author"
                        className="mt-1 block w-full border-gray-300 rounded-button shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                        defaultValue={selectedBook?.author || ""}
                        required
                      />
                      <div
                        id="authorError"
                        className="hidden mt-1 text-sm text-red-600"
                      ></div>
                    </div>
                    <div>
                      <label
                        htmlFor="genre"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Genre
                      </label>
                      <div className="relative">
                        <select
                          id="genre"
                          name="genre"
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-button"
                          defaultValue={selectedBook?.genre || ""}
                          required
                        >
                          <option value="">Select a genre</option>
                          <option value="Fiction">Fiction</option>
                          <option value="Non-Fiction">Non-Fiction</option>
                          <option value="Science Fiction">Science Fiction</option>
                          <option value="Fantasy">Fantasy</option>
                          <option value="Mystery">Mystery</option>
                          <option value="Thriller">Thriller</option>
                          <option value="Romance">Romance</option>
                          <option value="Biography">Biography</option>
                          <option value="History">History</option>
                          <option value="Self-Help">Self-Help</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <div className="w-5 h-5 flex items-center justify-center text-gray-400">
                            <i className="ri-arrow-down-s-line"></i>
                          </div>
                        </div>
                      </div>
                      <div
                        id="genreError"
                        className="hidden mt-1 text-sm text-red-600"
                      ></div>
                    </div>
                    <div>
                      <label
                        htmlFor="year"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Published Year
                      </label>
                      <input
                        type="number"
                        name="year"
                        id="year"
                        min="1000"
                        max="2025"
                        className="mt-1 block w-full border-gray-300 rounded-button shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                        defaultValue={selectedBook?.year || ""}
                        required
                      />
                      <div
                        id="yearError"
                        className="hidden mt-1 text-sm text-red-600"
                      ></div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Status
                      </label>
                      <div className="mt-2">
                        <div className="flex items-center">
                          <div className="relative inline-block w-10 mr-2 align-middle select-none">
                            <input
                              type="checkbox"
                              name="status"
                              id="status"
                              className="absolute opacity-0 w-0 h-0"
                              defaultChecked={
                                selectedBook
                                  ? selectedBook.status === "Available"
                                  : true
                              }
                            />
                            <label
                              htmlFor="status"
                              className={`block overflow-hidden h-6 rounded-full cursor-pointer ${
                                selectedBook?.status === "Issued"
                                  ? "bg-primary"
                                  : "bg-gray-300"
                              }`}
                            ></label>
                            <div
                              className={`toggle-dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 ease-in-out ${
                                selectedBook?.status === "Issued"
                                  ? "translate-x-4"
                                  : ""
                              }`}
                            ></div>
                          </div>
                          <span
                            id="statusText"
                            className="text-sm text-gray-700"
                          >
                            {selectedBook ? selectedBook.status : "Available"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Cover Image
                      </label>
                      <div className="mt-1 flex items-center">
                        <div
                          id="coverPreview"
                          className="w-20 h-28 bg-gray-100 rounded flex items-center justify-center overflow-hidden"
                        >
                          {coverImage ? (
                            <img
                              src={coverImage}
                              alt="Cover Preview"
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="w-8 h-8 flex items-center justify-center text-gray-400">
                              <i className="ri-image-line ri-lg"></i>
                            </div>
                          )}
                        </div>
                        <button
                          type="button"
                          id="uploadCoverBtn"
                          className="ml-4 bg-white py-2 px-3 border border-gray-300 rounded-button shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary whitespace-nowrap"
                          onClick={handleUploadCover}
                        >
                          Upload
                        </button>
                        <input
                          type="file"
                          id="coverUpload"
                          className="hidden"
                          accept="image/*"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              id="saveBookBtn"
              className="w-full inline-flex justify-center rounded-button border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-3 sm:w-auto sm:text-sm whitespace-nowrap"
              onClick={() => {
                const form = document.getElementById("bookForm");
                const formData = new FormData(form);
                const values = {
                  title: formData.get("title").trim(),
                  author: formData.get("author").trim(),
                  genre: formData.get("genre"),
                  year: formData.get("year"),
                  status: formData.get("status") === "on",
                };

                bookSchema
                  .validate(values, { abortEarly: false })
                  .then(() => {
                    handleSubmit(values, {
                      setSubmitting: () => {},
                      resetForm: () => form.reset(),
                    });
                  })
                  .catch((errors) => {
                    errors.inner.forEach((error) => {
                      const errorElement = document.getElementById(
                        `${error.path}Error`
                      );
                      if (errorElement) {
                        errorElement.textContent = error.message;
                        errorElement.classList.remove("hidden");
                      }
                    });
                  });
              }}
            >
              Save
            </button>
            <button
              type="button"
              id="cancelBookBtn"
              className="mt-3 w-full inline-flex justify-center rounded-button border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm whitespace-nowrap"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default BookModal;