import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import GistsPage from "@/pages/GistsPage";
import GistRedirect from "@/pages/GistRedirect";

function AppContent() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there's a redirect path from the 404 page
    const redirectPath = sessionStorage.getItem("redirectPath");
    if (redirectPath) {
      sessionStorage.removeItem("redirectPath");
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  return (
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
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
