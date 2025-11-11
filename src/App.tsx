import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import GistsPage from "@/pages/GistsPage";
import GistRedirect from "@/pages/GistRedirect";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gists" element={<GistsPage />} />
            <Route path="/:gistId" element={<GistRedirect />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
