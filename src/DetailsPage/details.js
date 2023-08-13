import React, { useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './details.css'; // Import your CSS file

function InvoiceDetailsPage({ invoices, updateInvoice, deleteInvoice }) {
  const history = useNavigate();
  const { id } = useParams();
  const invoice = invoices.find((inv) => inv.id === parseInt(id));

  const [status, setStatus] = useState(invoice.status);

  const handleStatusToggle = () => {
    const newStatus = status === 'pending' ? 'paid' : 'pending';
    setStatus(newStatus);
    updateInvoice({ ...invoice, status: newStatus });
  };
  const handleDelete = () => {
    deleteInvoice(invoice.id);
    toast.success('Invoice deleted!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    history.push('/'); // Redirect back to Home Page
  };

  return (
    <div className="invoice-details">
      <h1>Invoice Details</h1>
      {/* Display invoice details including items */}
      <div>
        <p>Client Name: {invoice.clientName}</p>
        <p>Email: {invoice.email}</p>
        <p>Address: {invoice.address}</p>
        <p>Status: {status}</p>
        <button onClick={handleStatusToggle}   className='toggle-button'>
          Toggle Status
        </button>
        {status === 'pending' && (
          <button onClick={handleDelete} className="delete-button">
            Delete Invoice
          </button>
        )}
      </div>
      {/* <h2>Invoice Items</h2> */}
      <ul className="items-list">
        {invoice.items.map((item, index) => (
          <li key={index}>
            {/* {item.name} - ${item.price} */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InvoiceDetailsPage;