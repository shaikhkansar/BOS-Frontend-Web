import React from "react";
import { Link } from "react-router-dom";
import "./EnquiryManagement.css"; // Import your CSS file

const EnquiryManagement = () => {
  return (
    <div className="enquiry-management-container">
      <h2>Enquiry Management</h2>
      <button>
        <Link to="/add-enquiry">Add Enquiry</Link>
      </button>
    </div>
  );
};

export default EnquiryManagement;
