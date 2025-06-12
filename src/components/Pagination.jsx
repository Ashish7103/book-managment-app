import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/actions";

function Pagination() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const totalPages = useSelector((state) => state.totalPages);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  const books = useSelector((state) => state.books);

  const handlePrevious = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const handlePageClick = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="bg-white border-t border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">
              {(currentPage - 1) * itemsPerPage + 1}
            </span>{" "}
            to{" "}
            <span className="font-medium">
              {Math.min(currentPage * itemsPerPage, books.length)}
            </span>{" "}
            of <span className="font-medium">{books.length}</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              onClick={(e) => {
                e.preventDefault();
                handlePrevious();
              }}
            >
              <span className="sr-only">Previous</span>
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-arrow-left-s-line"></i>
              </div>
            </a>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              if (page === 4 && totalPages > 5) {
                return (
                  <span
                    key="ellipsis"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
                  >
                    ...
                  </span>
                );
              }
              if (page > 3 && page < totalPages && totalPages > 5) return null;
              return (
                <a
                  key={page}
                  href="#"
                  className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${
                    currentPage === page
                      ? "bg-primary text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageClick(page);
                  }}
                >
                  {page}
                </a>
              );
            })}
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              onClick={(e) => {
                e.preventDefault();
                handleNext();
              }}
            >
              <span className="sr-only">Next</span>
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-arrow-right-s-line"></i>
              </div>
            </a>
          </nav>
        </div>
      </div>
      <div className="flex items-center justify-between w-full sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          onClick={(e) => {
            e.preventDefault();
            handlePrevious();
          }}
        >
          Previous
        </a>
        <div className="text-sm text-gray-500">
          Page {currentPage} of {totalPages}
        </div>
        <a
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          onClick={(e) => {
            e.preventDefault();
            handleNext();
          }}
        >
          Next
        </a>
      </div>
    </div>
  );
}

export default Pagination;