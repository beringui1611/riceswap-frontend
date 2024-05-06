import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../containers/Home";

function MyRoutes(){
    return (
        <Router>
          <Routes>
          <Route path="/" element={<Home/>} />
          </Routes>
        </Router>
    );
};

export default MyRoutes;