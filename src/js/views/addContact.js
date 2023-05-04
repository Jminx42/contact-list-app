import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddContact = () => {
  const [newContact, setNewContact] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
    agenda_slug: "my_super_pepe_agenda",
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const createContact = async (newContact) => {
    try {
      console.log(newContact);
      const response = await fetch(
        "https://assets.breatheco.de/apis/fake/contact/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newContact),
        }
      );

      // if (response.ok) {
      //   setSuccessMsg("Contact successfully added.");
      //   setNewContact({});
      // } else {
      //   let responseText = JSON.parse(await response.text());
      //   console.log(
      //     `HTTP error! Status: ${response.status}, Message: ${responseText.msg}`
      //   );
      //   throw new Error(`${responseText.msg}`);
      // }

      setFormInput({
        full_name: "",
        email: "",
        phone: "",
        address: "",

      });
    } catch (error) {
      setErrorMsg(error.message);
    }
  };



  return (
    <div className="container p-4">
      <h1 className="text-center">Add a new contact</h1>
      <form
        className="row g-3"
        onSubmit={(event) => {
          event.preventDefault();
          createContact();
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
            value={newContact.full_name}
            placeholder="Enter name"
            onChange={(e) => {
              setNewContact({ ...newContact, full_name: e.target.value });
              setSuccessMsg("");
            }}
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
            value={newContact.email}
            placeholder="Enter email"
            onChange={(e) => {
              setNewContact({ ...newContact, email: e.target.value });
              setSuccessMsg("");
            }}
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
            value={newContact.phone}
            placeholder="Enter phone number"
            onChange={(e) => {
              setNewContact({ ...newContact, phone: e.target.value });
              setSuccessMsg("");
            }}
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
            value={newContact.address}
            placeholder="Enter address"
            onChange={(e) => {
              setNewContact({ ...newContact, address: e.target.value });
              setSuccessMsg("");
            }}
          />
        </div>

        <div className="col-12 pt-3">
          <button type="submit" className="btn btn-success">
            Create contact
          </button>
        </div>
      </form>
      {successMsg ? (
        <div className="alert alert-success mt-3" role="alert">
          {successMsg}
        </div>
      ) : (
        errorMsg && (
          <div className="alert alert-danger mt-3" role="alert">
            {errorMsg}
          </div>
        )
      )}

      <Link to="/">or get back to contacts</Link>
    </div>
  );
};

export default AddContact;
