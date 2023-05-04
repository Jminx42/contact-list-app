import React, { useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";

const EditContact = () => {
  
  const params = useParams();
  const [editContact, setEditContact] = useState({});

  const [successMsg, setSuccessMsg] = useState("");

  
  useEffect(() => {
    getContactToEdit();
    
  }, []);

  const getContactToEdit = async () => {
    const response = await fetch(
      "https://assets.breatheco.de/apis/fake/contact/" + params.theid
    );
    const data = await response.json();
    setEditContact(data);
  };

  const updateContact = async () => {
    const response = await fetch(
      "https://assets.breatheco.de/apis/fake/contact/" + params.theid,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editContact),
      }
    );

    if (response.ok) {
      setSuccessMsg("Contact successfully edited.");
      setEditContact({});
    } else {
      setSuccessMsg("");
    }
  };

  

  return (
    <div className="container p-4">
      <h1 className="text-center">Edit contact with ID: {params.theid}</h1>
      <form className="row g-3"
      onSubmit={(event) => {
        event.preventDefault();
        updateContact();
      }}>
        <div className="col-md-12">
          <label htmlFor="inputName" className="form-label">
            Full name: 
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            value={editContact.full_name}
            onChange={(e) => {setEditContact({...editContact, full_name: e.target.value});
            setSuccessMsg("");}}
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="inputEmail" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            value={editContact.email}
            onChange={(e) => {setEditContact({...editContact, email: e.target.value});
            setSuccessMsg("");}}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputNumber" className="form-label">
            Phone number:
          </label>
          <input
            type="tel"
            className="form-control"
            id="inputNumber"
            value={editContact.phone}
            onChange={(e) => {setEditContact({...editContact, phone: e.target.value});
            setSuccessMsg("");}}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address:
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            value={editContact.address}
            onChange={(e) => {setEditContact({...editContact, address: e.target.value});
            setSuccessMsg("");}}

          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-warning">
            Save edit
          </button>
        </div>
      </form>
      {successMsg && (
        <div className="alert alert-success mt-3" role="alert">
          {successMsg}
        </div>
      )}

      <Link to="/">or get back to contacts</Link>
    </div>
  );
};

export default EditContact;
