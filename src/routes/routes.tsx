import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../containers/Home";
import Farm from "../containers/farm";

function MyRoutes(){
    return (
        <Router>
          <Routes>
          <Route path="/" element={<Home/>} />
          </Routes>

          <Routes>
          <Route path="/farm" element={<Farm/>} />
          </Routes>
        </Router>
    );
};

export default MyRoutes;