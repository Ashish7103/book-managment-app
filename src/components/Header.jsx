import { useSelector, useDispatch } from "react-redux";
import {
  toggleSidebar,
  setSearch,
  toggleBookModal,
  setSelectedBook,
} from "../redux/actions";

function Header() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);

  const handleOpenSidebar = () => {
    dispatch(toggleSidebar());
  };

  const handleAddBook = () => {
    dispatch(setSelectedBook(null));
    dispatch(toggleBookModal(true));
  };

  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <button
            id="openSidebar"
            className="p-1 mr-3 rounded-full md:hidden hover:bg-gray-100"
            onClick={handleOpenSidebar}
          >
            <div className="w-8 h-8 flex items-center justify-center text-gray-500">
              <i className="ri-menu-line ri-lg"></i>
            </div>
          </button>
          <div>
            <h1 className="text-xl font-semibold text-gray-800">
              Book Management
            </h1>
            <p className="text-xs text-gray-500">
              {new Date().toLocaleString("en-IN", {
                timeZone: "Asia/Kolkata",
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
          </div>
        </div>
        <div className="relative mx-4 flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <div className="w-5 h-5 flex items-center justify-center text-gray-400">
              <i className="ri-search-line"></i>
            </div>
          </div>
          <input
            type="search"
            id="searchInput"
            className="w-full pl-10 pr-4 py-2 border-none rounded-button bg-gray-100 focus:bg-white focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="Search books or authors..."
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <div>
          <button
            id="addBookBtn"
            className="flex items-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-button hover:bg-primary/90 whitespace-nowrap"
            onClick={handleAddBook}
          >
            <div className="w-4 h-4 mr-2 flex items-center justify-center">
              <i className="ri-add-line"></i>
            </div>
            Add Book
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;