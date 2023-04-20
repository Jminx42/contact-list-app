import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddContact = () => {
  const [newContact, setNewContact] = useState({});
  const [formInput, setFormInput] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [successMsg, setSuccessMsg] = useState("");

  const createContact = async (newContact) => {
    const response = await fetch(
      "https://assets.breatheco.de/apis/fake/contact/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newContact),
      }
    );

    if (response.ok) {
      setSuccessMsg("Contact successfully added.");
      setNewContact({});
    } else {
      setSuccessMsg("");
    }

    setFormInput({
      full_name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
    setNewContact({
      ...newContact,
      [name]: value,
      ["agenda_slug"]: "my_super_pepe_agenda",
    });
  };

  return (
    <div className="container p-4">
      <h1 className="text-center">Add a new contact</h1>
      <form
        className="row g-3"
        onSubmit={(event) => {
          event.preventDefault();
          createContact(newContact);
        }}
      >
        <div className="col-md-12">
          <label htmlFor="inputName" className="form-label">
            Full name:
          </label>
          <input
            type="text"
            className="form-control"
            name="full_name"
            id="inputName"
            value={formInput.full_name}
            placeholder="Enter name"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="inputEmail" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="inputEmail"
            value={formInput.email}
            placeholder="Enter email"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputNumber" className="form-label">
            Phone number:
          </label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            id="inputNumber"
            value={formInput.phone}
            placeholder="Enter phone number"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address:
          </label>
          <input
            type="text"
            className="form-control"
            name="address"
            id="inputAddress"
            value={formInput.address}
            placeholder="Enter address"
            onChange={handleInputChange}
          />
        </div>

        <div className="col-12 pt-3">
          <button type="submit" className="btn btn-primary">
            Create contact
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

export default AddContact;
