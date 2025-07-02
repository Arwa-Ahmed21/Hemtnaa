import React, { Suspense, lazy, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

const HomePage = lazy(() => import("./Pages/HomePage"));
const Stories = lazy(() => import("./Pages/Stories"));
const Game = lazy(() => import("./components/audiology"));
const PuzzleGame = lazy(() => import("./Pages/PuzzleGame"));
const Games = lazy(() => import("./Pages/Games"));
const Puzzle = lazy(() => import("./components/Puzzle"));
const MatchingShapes = lazy(() => import("./Pages/MatchingShapes"));
const MemoryGame = lazy(() => import("./Pages/MemoryGame"));

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="w-16 h-16 border-4 border-white border-t-blue-800 rounded-full animate-spin"></div>
    </div>
  );
}

function AppWrapper() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    const pathTitles = {
      "/": "Home",
      "/stories": "Stories",
      "/audiology": "Audiology Game",
      "/MatchingShapes": "Matching Shapes",
      "/MemoryGame": "Memory Game",
      "/puzzle": "Puzzle Game",
      "/puzzleGame": "Puzzle",
      "/container-game": "Games",
    };
    document.title = pathTitles[location.pathname] || "App";
  }, [location]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/audiology" element={<Game />} />
        <Route path="/MatchingShapes" element={<MatchingShapes />} />
        <Route path="/MemoryGame" element={<MemoryGame />} />
        <Route path="/puzzle" element={<PuzzleGame />} />
        <Route path="/puzzleGame" element={<Puzzle />} />
        <Route path="/container-game" element={<Games />} />
      </Routes>
    </Suspense>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
