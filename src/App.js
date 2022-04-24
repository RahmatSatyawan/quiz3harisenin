
// import "./assets/css/style.css";
// import Router from "./router/Router";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail";
import List from "./pages/List";


const App = () => {
  return (
    <>
      {/* <p>This app</p> */}
      {/* <Router /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/List" element={<List />} />
          <Route path='/Detail/:productId' element={<Detail />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
