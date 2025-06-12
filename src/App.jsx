import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* <Sidebar /> */}
      <Dashboard />
      <Toaster />
      
    </div>
  );
}

export default App;