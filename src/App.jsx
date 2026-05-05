import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-stone-900 transition-colors duration-300">
      {/* The Header stays globally visible */}
      <Header />

      {/* The Routes control what page content is displayed below the header */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      {/* The Footer stays globally visible */}
      <Footer />
    </div>
  );
}

export default App;
