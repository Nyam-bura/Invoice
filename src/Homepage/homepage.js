import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./homepage.css";

const invoices = [
  { id: 1, clientName: "Abigail", status: "pending" },
  { id: 2, clientName: "Faith", status: "paid" },
  { id: 3, clientName: "Winnie", status: "Pending" },
  { id: 4, clientName: "Nancy", status: "paid" },
  { id: 5, clientName: "Jane", status: "Pending" },
  { id: 6, clientName: "Christine", status: "paid" },
];

function HomePage() {
  const handleCreateInvoice = () => {
    // Simulate creating a new invoice
    toast.success("Invoice created successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };
  handleCreateInvoice();

  return (
    <div className="header">
    <div className="home-page">
      <h1>Invoices</h1>
      <Link to="/form" exact="true">Create New Invoice</Link>
      <table>
        <thead>
          <tr>
            <th>Invoice Number</th>
            <th>Client Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>
                <Link to={`/invoice/${invoice.id}`}>{invoice.id}</Link>
              </td>
              <td>{invoice.clientName}</td>
              <td>{invoice.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default HomePage;
