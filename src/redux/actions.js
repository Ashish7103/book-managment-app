export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export const SET_SEARCH = "SET_SEARCH";
export const SET_GENRE_FILTER = "SET_GENRE_FILTER";
export const SET_STATUS_FILTER = "SET_STATUS_FILTER";
export const SET_VIEW_MODE = "SET_VIEW_MODE";
export const TOGGLE_BOOK_MODAL = "TOGGLE_BOOK_MODAL";
export const TOGGLE_DELETE_MODAL = "TOGGLE_DELETE_MODAL";
export const SET_SELECTED_BOOK = "SET_SELECTED_BOOK";
export const SET_BOOKS = "SET_BOOKS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_DELETE_ID = "SET_DELETE_ID";

export const toggleSidebar = () => ({ type: TOGGLE_SIDEBAR });
export const setSearch = (search) => ({ type: SET_SEARCH, payload: search });
export const setGenreFilter = (genre) => ({
  type: SET_GENRE_FILTER,
  payload: genre,
});
export const setStatusFilter = (status) => ({
  type: SET_STATUS_FILTER,
  payload: status,
});
export const setViewMode = (mode) => ({ type: SET_VIEW_MODE, payload: mode });
export const toggleBookModal = (isOpen) => ({
  type: TOGGLE_BOOK_MODAL,
  payload: isOpen,
});
export const toggleDeleteModal = (isOpen) => ({
  type: TOGGLE_DELETE_MODAL,
  payload: isOpen,
});
export const setSelectedBook = (book) => ({
  type: SET_SELECTED_BOOK,
  payload: book,
});
export const setBooks = (books) => ({ type: SET_BOOKS, payload: books });
export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});
export const setDeleteId = (id) => ({ type: SET_DELETE_ID, payload: id });