import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SideNavbar from "./components/Navigation/SideNaveBar/SideNaveBar";
import TopNavBar from "./components/Navigation/TopNavBar/TopNavBar";
import UserManagement from "./components/Screen/UserManagement/UserManagement";
import EnquiryManagement from "./components/Screen/EnquiryManagement/EnquiryManagement";
import ProductManagement from "./components/Screen/ProductManagement/ProductManagement";
import Reports from "./components/Screen/Reports/Reports";
import AddEnquiry from "./components/Screen/EnquiryManagement/AddEnquery/AddEnquiry";

function App() {
  return (
    <Router>
      <div className="App">
        <TopNavBar />
        <div className="main-content">
          <SideNavbar />
          <div className="content">
            <Routes>
              <Route path="/user-management" element={<UserManagement />} />
              <Route path="/enquiry-management" element={<EnquiryManagement />} />
              <Route path="/product-management" element={<ProductManagement />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/add-enquiry" element={<AddEnquiry />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
