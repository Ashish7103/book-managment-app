import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBooks, toggleBookModal, setSelectedBook, setDeleteId, toggleDeleteModal } from "../redux/actions";
import Header from "./Header";
import Filters from "./Filter";
import BookTable from "./BookTables";
import BookGrid from "./BookGrid";
import EmptyState from "./EmptyState";
import LoadingState from "./LoadingState";
import Pagination from "./Pagination";
import BookModal from "./BookModal";
import DeleteModal from "./DeleteModal";

const initialBooks = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Fiction",
    year: "2020",
    status: "Available",
    cover:
      "https://readdy.ai/api/search-image?query=book%20cover%20with%20dark%20blue%20background%20showing%20a%20library%20at%20midnight%20with%20glowing%20shelves%20of%20books%2C%20minimalist%20design%2C%20professional%20book%20cover&width=200&height=300&seq=1&orientation=portrait",
  },
  {
    id: "2",
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    year: "2018",
    status: "Available",
    cover:
      "https://readdy.ai/api/search-image?query=book%20cover%20with%20simple%20geometric%20shapes%20on%20light%20background%2C%20professional%20self-help%20book%20design%2C%20minimalist%2C%20clean%20layout&width=200&height=300&seq=2&orientation=portrait",
  },
  {
    id: "3",
    title: "Dune",
    author: "Frank Herbert",
    genre: "Science Fiction",
    year: "1965",
    status: "Issued",
    cover:
      "https://readdy.ai/api/search-image?query=book%20cover%20with%20desert%20landscape%2C%20orange%20and%20brown%20tones%2C%20sci-fi%20aesthetic%2C%20professional%20book%20cover%20design&width=200&height=300&seq=3&orientation=portrait",
  },
  {
    id: "4",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Thriller",
    year: "2019",
    status: "Available",
    cover:
      "https://readdy.ai/api/search-image?query=book%20cover%20with%20minimalist%20design%2C%20face%20silhouette%2C%20dark%20background%20with%20subtle%20red%20accents%2C%20thriller%20book%20cover&width=200&height=300&seq=4&orientation=portrait",
  },
  {
    id: "5",
    title: "Educated",
    author: "Tara Westover",
    genre: "Biography",
    year: "2018",
    status: "Available",
    cover:
      "https://readdy.ai/api/search-image?query=book%20cover%20with%20simple%20typography%20on%20light%20background%2C%20memoir%20style%2C%20professional%20book%20design%2C%20mountains%20in%20background&width=200&height=300&seq=5&orientation=portrait",
  },
  {
    id: "6",
    title: "The Song of Achilles",
    author: "Madeline Miller",
    genre: "Fantasy",
    year: "2011",
    status: "Issued",
    cover:
      "https://readdy.ai/api/search-image?query=book%20cover%20with%20ancient%20Greek%20imagery%2C%20gold%20accents%20on%20dark%20background%2C%20professional%20fantasy%20book%20design&width=200&height=300&seq=6&orientation=portrait",
  },
  {
    id: "7",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "Non-Fiction",
    year: "2011",
    status: "Available",
    cover:
      "https://readdy.ai/api/search-image?query=book%20cover%20with%20human%20evolution%20silhouette%2C%20earth%20tones%2C%20professional%20non-fiction%20book%20design&width=200&height=300&seq=7&orientation=portrait",
  },
  {
    id: "8",
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    genre: "Fiction",
    year: "2018",
    status: "Available",
    cover:
      "https://readdy.ai/api/search-image?query=book%20cover%20with%20marsh%20landscape%2C%20misty%20water%20scene%2C%20subtle%20colors%2C%20professional%20fiction%20book%20design&width=200&height=300&seq=8&orientation=portrait",
  },
  {
    id: "9",
    title: "The Invisible Life of Addie LaRue",
    author: "V.E. Schwab",
    genre: "Fantasy",
    year: "2020",
    status: "Issued",
    cover:
      "https://readdy.ai/api/search-image?query=book%20cover%20with%20stars%20and%20constellation%20pattern%2C%20dark%20blue%20background%2C%20professional%20fantasy%20book%20design&width=200&height=300&seq=9&orientation=portrait",
  },
  {
    id: "10",
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Biography",
    year: "2018",
    status: "Available",
    cover:
      "https://readdy.ai/api/search-image?query=book%20cover%20with%20portrait%20style%20photo%2C%20soft%20lighting%2C%20professional%20memoir%20book%20design&width=200&height=300&seq=10&orientation=portrait",
  },
];

function Dashboard() {
  const dispatch = useDispatch();
  const {
    search,
    genreFilter,
    statusFilter,
    viewMode,
    currentPage,
    itemsPerPage,
    books: allBooks,
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(setBooks(initialBooks));
  }, [dispatch]);

  const filteredBooks = allBooks.filter((book) => {
    const matchesSearch = search
      ? book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
      : true;
    const matchesGenre = genreFilter !== "All" ? book.genre === genreFilter : true;
    const matchesStatus =
      statusFilter !== "All" ? book.status === statusFilter : true;
    return matchesSearch && matchesGenre && matchesStatus;
  });

  const paginatedBooks = filteredBooks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleEdit = (book) => {
    dispatch(setSelectedBook(book));
    dispatch(toggleBookModal(true));
  };

  const handleDelete = (id, title) => {
    dispatch(setDeleteId(id));
    dispatch(toggleDeleteModal(true));
  };

  return (
    <div className="flex-1 md:ml-64 flex flex-col h-screen overflow-hidden">
      <Header />
      <Filters />
      <div className="flex-1 overflow-auto p-4">
        {paginatedBooks.length === 0 && !filteredBooks.length ? (
          <EmptyState />
        ) : (
          <>
            <BookTable
              books={viewMode === "table" ? paginatedBooks : []}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
            <BookGrid
              books={viewMode === "grid" ? paginatedBooks : []}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </>
        )}
        <LoadingState />
      </div>
      <Pagination />
      <BookModal />
      <DeleteModal />
    </div>
  );
}

export default Dashboard;