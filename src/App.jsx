import Detail from "./routes/Detail";
import Home from "./routes/Home";

import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex flex-col w-screen min-h-screen justify-start items-center">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:pokemonId" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
