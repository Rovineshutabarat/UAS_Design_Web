import React from "react";
import { BrowserRouter as Router, Routes, Route , Switch   } from "react-router-dom";
import CrudHomepage from "./component/Crud/CrudHomepage";
import Homepage from "./component/Homepage/Homepage";
import Admin from "./component/Crud/Admin";
import Product from "./component/Crud/Product";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/*" element={<Homepage />} />
          <Route path="/Home" element={<Homepage />} />
          <Route path="/crud" element={<CrudHomepage />} />
          <Route path="admin" element={<Admin />} />
          <Route path="crudHomepage" element={<CrudHomepage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;