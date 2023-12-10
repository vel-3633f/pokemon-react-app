import Header from "./components/Header";
import Detail from "./components/Detail";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex flex-col w-screen min-h-screen justify-center items-center" id="home">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aaaa" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
