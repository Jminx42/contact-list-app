import React, { useContext, useEffect } from "react";
import Contact from "../component/contact";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.updateContacts();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-end">
        <div className="col-auto m-3">
          <Link to="/addcontact">
            <button className="btn btn-primary">Add new contact</button>
          </Link>
        </div>
      </div>
      <div className="row p-3">
        <ul className="list-group">
          {store.contacts.map((contact) => {
            return (
              <li className="list-group-item" key={contact.id}>
                <Contact person={contact} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
