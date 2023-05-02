import React, { useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

const EditContact = () => {
  const { store } = useContext(Context);
  const params = useParams();
  const [editContact, setEditContact] = useState({});

  const [successMsg, setSuccessMsg] = useState("");

  
  useEffect(() => {
    getContactToEdit();
    console.log(editContact);
  }, []);

  const getContactToEdit = async () => {
    const response = await fetch(
      "https://assets.breatheco.de/apis/fake/contact/" + params.id
    );
    const data = await response.json();
    setEditContact(data);

  }
  const updateContact = async () => {
    const response = await fetch(
      "https://assets.breatheco.de/apis/fake/contact/",
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editContact),
      }
    );

    if (response.ok) {
      setSuccessMsg("Contact successfully added.");
      setEditContact({});
    } else {
      setSuccessMsg("");
    }
  };

  

  return (
    <div className="container">
      <h1 className="text-center">Edit contact with id: {params.id}</h1>
      <form className="row g-3">
        <div className="col-md-12">
          <label htmlFor="inputName" className="form-label">
            Full name: 
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            value={editContact.full_name}
            onChange={(e) => setEditContact({...editContact, full_name: e.target.value})}
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
            placeholder="Edit email"
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
            placeholder="Edit phone number"
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
            placeholder="Edit address"
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Save edit
          </button>
        </div>
      </form>
      <Link to="/">or get back to contacts</Link>
    </div>
  );
};

export default EditContact;
