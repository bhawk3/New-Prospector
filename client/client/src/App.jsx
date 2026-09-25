import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Infobar from "./components/Infobar"

const App = () => {
  return (
    <div className="w-full p-6">
      <Navbar />
      <Infobar />
      <Outlet />
    </div>
  );
};
export default App;