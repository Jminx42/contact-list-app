import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Contact = ({ person }) => {
  const { actions } = useContext(Context);
  return (
    <div className="container p-3">
      <div className="row justify-content-evenly">
        <div className="col-2">
          <img className="rounded-circle" src="https://picsum.photos/200" />
        </div>
        <div className="col-6">
          <p className="fs-2">{person.full_name}</p>
          <p className="fw-lighter">
            <i className="bi bi-geo-alt pe-3"></i>
            {person.address}
          </p>
          <p className="fw-lighter">
            <i className="bi bi-telephone pe-3"></i>
            {person.phone}
          </p>
          <p className="fw-lighter">
            <i className="bi bi-envelope pe-3"></i>
            {person.email}
          </p>
        </div>
        <div className="col-2">
          <Link to="/editContact">
            <button
              className="btn btn-outline-primary m-1"
              onClick={() => {
                actions.getPerson(person.id);
              }}
            >
              <i className="bi bi-pen"></i>
            </button>
          </Link>
          <button className="btn btn-outline-secondary m-1">
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
