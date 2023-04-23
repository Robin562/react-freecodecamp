import DataProvider from "./context";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Description from "./Description";
import About from "./About";

function App() {
  return (
    <div className="app">
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="description/:id" element={<Description />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
