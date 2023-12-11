import Detail from "./routes/Detail";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex flex-col w-screen min-h-screen justify-start items-center">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:pokemonId" element={<Detail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
