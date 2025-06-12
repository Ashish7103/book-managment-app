import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGenreFilter, setStatusFilter, setViewMode } from "../redux/actions";

function Filters() {
  const dispatch = useDispatch();
  const genreFilter = useSelector((state) => state.genreFilter);
  const statusFilter = useSelector((state) => state.statusFilter);
  const viewMode = useSelector((state) => state.viewMode);
  const [genreDropdownOpen, setGenreDropdownOpen] = useState(false);
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const genreRef = useRef(null);
  const statusRef = useRef(null);

  const handleGenreFilter = (genre) => {
    dispatch(setGenreFilter(genre));
    setGenreDropdownOpen(false);
  };

  const handleStatusFilter = (status) => {
    dispatch(setStatusFilter(status));
    setStatusDropdownOpen(false);
  };

  const handleTableView = () => {
    dispatch(setViewMode("table"));
  };

  const handleGridView = () => {
    dispatch(setViewMode("grid"));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (genreRef.current && !genreRef.current.contains(event.target)) {
        setGenreDropdownOpen(false);
      }
      if (statusRef.current && !statusRef.current.contains(event.target)) {
        setStatusDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative" ref={genreRef}>
            <button
              id="genreFilterBtn"
              className="flex items-center px-3 py-2 text-sm font-medium bg-gray-100 rounded-button hover:bg-gray-200 whitespace-nowrap"
              onClick={() => setGenreDropdownOpen(!genreDropdownOpen)}
            >
              <span>Genre: {genreFilter}</span>
              <div className="w-4 h-4 ml-2 flex items-center justify-center">
                <i className="ri-arrow-down-s-line"></i>
              </div>
            </button>
            <div
              id="genreDropdown"
              className={`absolute left-0 mt-1 w-48 bg-white border border-gray-200 rounded shadow-lg z-10 ${
                genreDropdownOpen ? "" : "hidden"
              }`}
            >
              <div className="py-1">
                {[
                  "All",
                  "Fiction",
                  "Non-Fiction",
                  "Science Fiction",
                  "Fantasy",
                  "Mystery",
                ].map((genre) => (
                  <a
                    key={genre}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      handleGenreFilter(genre);
                    }}
                  >
                    {genre}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="relative" ref={statusRef}>
            <button
              id="statusFilterBtn"
              className="flex items-center px-3 py-2 text-sm font-medium bg-gray-100 rounded-button hover:bg-gray-200 whitespace-nowrap"
              onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
            >
              <span>Status: {statusFilter}</span>
              <div className="w-4 h-4 ml-2 flex items-center justify-center">
                <i className="ri-arrow-down-s-line"></i>
              </div>
            </button>
            <div
              id="statusDropdown"
              className={`absolute left-0 mt-1 w-48 bg-white border border-gray-200 rounded shadow-lg z-10 ${
                statusDropdownOpen ? "" : "hidden"
              }`}
            >
              <div className="py-1">
                {["All", "Available", "Issued"].map((status) => (
                  <a
                    key={status}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      handleStatusFilter(status);
                    }}
                  >
                    {status}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-gray-100 rounded-button p-1">
          <button
            id="tableViewBtn"
            className={`flex items-center justify-center w-8 h-8 rounded-button ${
              viewMode === "table" ? "bg-white shadow-sm" : ""
            }`}
            onClick={handleTableView}
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-table-line"></i>
            </div>
          </button>
          <button
            id="gridViewBtn"
            className={`flex items-center justify-center w-8 h-8 rounded-button ${
              viewMode === "grid" ? "bg-white shadow-sm" : ""
            }`}
            onClick={handleGridView}
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-grid-line"></i>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filters;