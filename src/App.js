import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Homepage/homepage";
import InvoiceForm from "./InvoiceForm/form";
import DetailsPage from "./DetailsPage/details";
import { ToastContainer } from "react-toastify";

function App() {
  const [invoices, setInvoices] = useState([]);

  const addInvoice = (invoice) => {
    const id = invoices.length + 1;
    setInvoices([
      ...invoices,
      {
        id,
        ...invoice,
      },
    ]);

    return id;
  };

  const updateInvoice = (updatedInvoice) => {
    const updatedInvoices = invoices.map((invoice) =>
      invoice.id === updatedInvoice.id ? updatedInvoice : invoice
    );
    setInvoices(updatedInvoices);
  };

  const deleteInvoice = (invoiceId) => {
    const updatedInvoices = invoices.filter(
      (invoice) => invoice.id !== invoiceId
    );
    setInvoices(updatedInvoices);
  };

  return (
    <Router>
      <div className="App">
        <ToastContainer theme="colored" />
        <Routes>
          {" "}
          <Route
            path="/form"
            element={<InvoiceForm addInvoice={addInvoice} />}
          />
          <Route path="/homepage" element={<HomePage />} />
          <Route
            path="/invoice/:id"
            element={
              <DetailsPage
                invoices={invoices}
                updateInvoice={updateInvoice}
                deleteInvoice={deleteInvoice}
              />
            }
          />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
