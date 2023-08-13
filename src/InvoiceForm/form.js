import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./form.css";

function InvoiceForm({ addInvoice }) {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [invoiceItems, setInvoiceItems] = useState([{ name: "", price: "" }]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newInvoice = {
      clientName,
      email,
      address,
      items: invoiceItems,
      status: "pending",
    };

    const id = addInvoice(newInvoice);
    setClientName("");
    setAddress("");
    setEmail("");
    setInvoiceItems();

    toast.success("Invoice sent!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

    navigate("/invoice/" + id);
  };

  return (
    <div className="whole">
      <div className="invoice-form">
        <h1>New Invoice Form</h1>
        <form method="post" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            required
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="address"
            placeholder="Address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button className="btn" type="submit">
            Submit
          </button>

          {/* {invoiceItems.map((item, index) => (
          <div key={index} className="item">
          <p>Soap Products <span>$2000</span></p>
          </div>
        ))} */}
        </form>
      </div>
    </div>
  );
}

export default InvoiceForm;
