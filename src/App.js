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
          {/* Use Routes instead of Switch */}
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

// const invoices = [
//   {
//     Name:'Abigail Wambui',
//     Date:'1/04/2023',
//     Amount:'20000',
//     Status:'Paid',
//     Action:''
//   },

//   {
//     Name:'Allan Mbuthia',
//     Date:'3/01/2023',
//     Amount:'60000',
//     Status:'Pending',

//   },
//    {
//     Name:'Faith Mutua',
//     Date:'23/02/2023',
//     Amount:'200000',
//     Status:'Paid',

//   } ,

//   {
//     Name:'Winnie Mwangi',
//     Date:'25/02/2023',
//     Amount:'50000',
//     Status:'Pending',
//   },
//    {
//     Name:'Wawira Muthoni ',
//     Date:'14/02/2023',
//     Amount:'30000',
//     Status:'Paid',

//   },

//   {
//     Name:'Nyambura Jane',
//     Date:'20/01/2023',
//     Amount:'10000',
//     Status:'Pending',

//   }
// ]
// function App() {
// const arrayDataItems = invoices.map(invoice =>
//   <li key={invoice.Name}>
//       <p>{invoice.Date}</p>
//     <p>{invoice.Amount}</p>
//     <p>{invoice.Status}</p>
//   </li>
//   )
//   return (
//     // arrayDataItems
//     <>
//     <main>
//       <header>
//         <div className="header1">
//       <table className="invoices">
//   <tr>
//     <th>Name</th>
//     <th>Date</th>
//     <th>Amount</th>
//     <th>Status</th>
//     <th>Actions</th>
//   </tr>
//   <tr>
//     <td>Abigail Ndung'u</td>
//     <td>1/04/2023</td>
//     <td>Ksh.20000</td>
//     <td>Paid</td>
//     <button>Create New Invoice</button>
//   </tr>
//   <tr>
//     <td>Allan Mbuthia</td>
//     <td>3/01/2023</td>
//     <td>Ksh.60000</td>
//     <td>Pending</td>
//     <button>Create New Invoice</button>
//   </tr>
//   <tr>
//     <td>Faith Mutua</td>
//     <td>23/02/2023</td>
//     <td>ksh.200000</td>
//     <td>Paid</td>
//     <button>Create New Invoice</button>
//   </tr>
//   <tr>
//     <td>Winnie Mwangi</td>
//     <td>25/02/2023</td>
//     <td>ksh.50000</td>
//     <td>Pending</td>
//     <button>Create New Invoice</button>
//   </tr>
//   <tr>
//     <td>Wawira Muthoni</td>
//     <td>14/02/2023</td>
//     <td>ksh.30000</td>
//     <td>Paid</td>
//     <button>Create New Invoice</button>
//   </tr>
//   <tr>
//     <td>Nyambura Jane</td>
//     <td>20/01/2023</td>
//     <td>ksh.10000</td>
//     <td>Pending</td>
//     <button>Create New Invoice</button>
//   </tr>
// </table>
//         </div>
//         <div>
//         </div>
//       </header>
//     </main>
//     </>
//   );
// }

// export default App;
