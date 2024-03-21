import React, { useState } from "react";
import "./SideNavBar.css";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, List } from "react-feather";
import { Logo } from "../../../theme/Images";

const SideNavbar = () => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [enquiryDropdownOpen, setEnquiryDropdownOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [reportsDropdownOpen, setReportsDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar visibility

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  const toggleEnquiryDropdown = () => {
    setEnquiryDropdownOpen(!enquiryDropdownOpen);
  };

  const toggleProductDropdown = () => {
    setProductDropdownOpen(!productDropdownOpen);
  };

  const toggleReportsDropdown = () => {
    setReportsDropdownOpen(!reportsDropdownOpen);
  };

  return (
    <div className={`sidenavbar ${sidebarOpen ? 'open' : ''}`}>
      <div className="sidenavbar-content">
      <div className="toggle-icon" onClick={toggleSidebar}> {/* Add toggle icon */}
          <List size={24} />
        </div>
        <img src={Logo} alt="Logo Missing" className="company-logo" />
        <h2 className="title">Administration</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li className="menu-item">
            <div className="menu-item-container">
              {/* Using Link to navigate to the user management page */}
              <Link to="/user-management" className="nav-link">
                User Management
              </Link>
              <button onClick={toggleUserDropdown} className="dropdown-button">
                {userDropdownOpen ? <ChevronUp /> : <ChevronDown />}
              </button>
            </div>
            {userDropdownOpen && (
              <ul className="submenu">
                {/* You can keep the dropdown options here */}
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
            )}
          </li>
        </ul>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li className="menu-item">
            <div className="menu-item-container">
              {/* Using Link to navigate to the enquiry management page */}
              <Link to="/enquiry-management" className="nav-link">
                Enquiry Management
              </Link>
              <button
                onClick={toggleEnquiryDropdown}
                className="dropdown-button"
              >
                {enquiryDropdownOpen ? <ChevronUp /> : <ChevronDown />}
              </button>
            </div>
            {enquiryDropdownOpen && (
              <ul className="submenu">
                <Link to="/add-enquiry" className="nav-link">
                <li>Add Enquiry</li>
                </Link>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
            )}
          </li>
        </ul>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li className="menu-item">
            <div className="menu-item-container">
              {/* Using Link to navigate to the product management page */}
              <Link to="/product-management" className="nav-link">
                Product Management
              </Link>
              <button
                onClick={toggleProductDropdown}
                className="dropdown-button"
              >
                {productDropdownOpen ? <ChevronUp /> : <ChevronDown />}
              </button>
            </div>
            {productDropdownOpen && (
              <ul className="submenu">
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
            )}
          </li>
        </ul>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li className="menu-item">
            <div className="menu-item-container">
              {/* Using Link to navigate to the reports page */}
              <Link to="/reports" className="nav-link">
                Reports
              </Link>
              <button
                onClick={toggleReportsDropdown}
                className="dropdown-button"
              >
                {reportsDropdownOpen ? <ChevronUp /> : <ChevronDown />}
              </button>
            </div>
            {reportsDropdownOpen && (
              <ul className="submenu">
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
