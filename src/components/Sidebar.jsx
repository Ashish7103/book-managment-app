import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../redux/actions";

function Sidebar() {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state) => state.sidebarOpen);

  const handleCloseSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <aside
      id="sidebar"
      className={`fixed inset-y-0 left-0 z-50 w-64 transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300 ease-in-out bg-white border-r border-gray-200 shadow-sm`}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b">
        <div className="flex items-center">
          <span className="text-2xl font-['Pacifico'] text-primary">logo</span>
        </div>
        <button
          id="closeSidebar"
          className="p-1 rounded-full md:hidden hover:bg-gray-100"
          onClick={handleCloseSidebar}
        >
          <div className="w-8 h-8 flex items-center justify-center text-gray-500">
            <i className="ri-close-line ri-lg"></i>
          </div>
        </button>
      </div>
      <nav className="p-4 space-y-1">
        <a
          href="#"
          className="flex items-center px-3 py-2 text-sm font-medium rounded-button text-white bg-primary"
        >
          <div className="w-5 h-5 mr-3 flex items-center justify-center">
            <i className="ri-dashboard-line"></i>
          </div>
          <span>Dashboard</span>
        </a>
        <a
          href="https://readdy.ai/home/da242548-7dd0-4c62-92cb-caa44b1792d4/a0136972-8495-4e6f-ab4a-aec82828d3b0"
          data-readdy="true"
          className="flex items-center px-3 py-2 text-sm font-medium rounded-button text-gray-700 hover:bg-gray-100"
        >
          <div className="w-5 h-5 mr-3 flex items-center justify-center">
            <i className="ri-book-2-line"></i>
          </div>
          <span>Books</span>
        </a>
        <a
          href="#"
          className="flex items-center px-3 py-2 text-sm font-medium rounded-button text-gray-700 hover:bg-gray-100"
        >
          <div className="w-5 h-5 mr-3 flex items-center justify-center">
            <i className="ri-user-line"></i>
          </div>
          <span>Authors</span>
        </a>
        <a
          href="#"
          className="flex items-center px-3 py-2 text-sm font-medium rounded-button text-gray-700 hover:bg-gray-100"
        >
          <div className="w-5 h-5 mr-3 flex items-center justify-center">
            <i className="ri-price-tag-3-line"></i>
          </div>
          <span>Categories</span>
        </a>
        <a
          href="#"
          className="flex items-center px-3 py-2 text-sm font-medium rounded-button text-gray-700 hover:bg-gray-100"
        >
          <div className="w-5 h-5 mr-3 flex items-center justify-center">
            <i className="ri-settings-line"></i>
          </div>
          <span>Settings</span>
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;