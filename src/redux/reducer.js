import {
  TOGGLE_SIDEBAR,
  SET_SEARCH,
  SET_GENRE_FILTER,
  SET_STATUS_FILTER,
  SET_VIEW_MODE,
  TOGGLE_BOOK_MODAL,
  TOGGLE_DELETE_MODAL,
  SET_SELECTED_BOOK,
  SET_BOOKS,
  SET_CURRENT_PAGE,
  SET_DELETE_ID,
} from "./actions";

const initialState = {
  sidebarOpen: false,
  search: "",
  genreFilter: "All",
  statusFilter: "All",
  viewMode: "table",
  isBookModalOpen: false,
  isDeleteModalOpen: false,
  selectedBook: null,
  books: [],
  currentPage: 1,
  totalPages: 5,
  itemsPerPage: 10,
  deleteId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sidebarOpen: !state.sidebarOpen };
    case SET_SEARCH:
      return { ...state, search: action.payload, currentPage: 1 };
    case SET_GENRE_FILTER:
      return { ...state, genreFilter: action.payload, currentPage: 1 };
    case SET_STATUS_FILTER:
      return { ...state, statusFilter: action.payload, currentPage: 1 };
    case SET_VIEW_MODE:
      return { ...state, viewMode: action.payload };
    case TOGGLE_BOOK_MODAL:
      return { ...state, isBookModalOpen: action.payload };
    case TOGGLE_DELETE_MODAL:
      return { ...state, isDeleteModalOpen: action.payload };
    case SET_SELECTED_BOOK:
      return { ...state, selectedBook: action.payload };
    case SET_BOOKS:
      return { ...state, books: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case SET_DELETE_ID:
      return { ...state, deleteId: action.payload };
    default:
      return state;
  }
};

export default reducer;