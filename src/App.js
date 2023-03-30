import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Error from "./pages/errors/Error";
import NotFound from "./pages/errors/NotFound";
import PhoneCard from "./components/PhoneCard";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <List />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phone-details/:phoneId" element={<PhoneCard />} />
        <Route path="/error" element={<Error />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
