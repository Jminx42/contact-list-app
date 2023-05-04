import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Contact = ({ person }) => {
  const { actions } = useContext(Context);

  const deleteContact = async (contactId) => {
    const response = await fetch(
      "https://assets.breatheco.de/apis/fake/contact/" + contactId,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.ok) {
      await actions.updateContacts();
    }
  };

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
          <Link to={`/editContact/${person.id}`}>
            <button className="btn btn-outline-primary m-1" id={person.id}>
              <i className="bi bi-pen"></i>
            </button>
          </Link>
          {/* <!-- Button trigger modal --> */}
          <button
            type="button"
            className="btn btn-outline-secondary m-1"
            data-bs-toggle="modal"
            data-bs-target={`#deleteContactModal-${person.id}`}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id={`deleteContactModal-${person.id}`}
        tabIndex="-1"
        aria-labelledby="deleteContactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="deleteContactModalLabel">
                Are you sure?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              If you delete this thing the entire universe will implode!
              Just kidding... but you will delete the contact forever!
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Oh no!
              </button>
              <button
                type="button"
                id={person.id}
                className="btn btn-success"
                onClick={async (e) => {
                  await deleteContact(person.id);
                  e.target.setAttribute("data-bs-dismiss", "modal");
                }}
                data-bs-dismiss="modal"
              >
                Yes!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
