import React from 'react'
import { Link } from "react-router-dom";

const AddEnquiry = () => {
  return (
    <div className="product-details">
      <h2>Add Enquiry</h2>
     
      <button>
        {" "}
        <Link to="/enquiry-management">Enquiry Management</Link>
      </button>
    </div>
  )
}

export default AddEnquiry