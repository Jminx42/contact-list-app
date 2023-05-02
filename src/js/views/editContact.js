import React from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

const EditContact = () => {
  const { store } = useContext(Context);
  const params = useParams();

  // const  personA =store.person;
  console.log(store.person);

  return (
    <div className="container">
      <h1 className="text-center">Edit contact</h1>
      <form className="row g-3">
        <div className="col-md-12">
          <label htmlFor="inputName" className="form-label">
            Full name: {store.person.full_name}
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Edit name"
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
