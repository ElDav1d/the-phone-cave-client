import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Error from "./pages/errors/Error";
import NotFound from "./pages/errors/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<Error />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
