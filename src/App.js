import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Wishlist from "./pages/wishlist/Wishlist";

import Women from "./components/categories/Women";
import Mens from "./pages/categories/Mens";
import Accounts from "./pages/Accounts/Accounts";
import ImporterSignup from "./pages/Accounts/ImporterSignup/ImporterSignup";
import ExporterSignup from "./pages/Accounts/ExporterSignup/ExporterSignup";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/Accounts" element={<Accounts />} />
        <Route path="/signup/importer" element={<ImporterSignup />} />
        <Route path="/signup/exporter" element={<ExporterSignup />} />
        <Route path="/categories/womens-fashion" element={<Women />} />
        <Route path="/categories/mens-fashion" element={<Mens />} />
      </Routes>
    </Router>
  );
}

export default App;
