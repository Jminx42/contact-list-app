import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from "../store/appContext";



const Edit = () => {

    const {store, actions}= useContext(Context);

   // const  personA =store.person;

    console.log(" isafh "+store.contacts.full_name); 
    return (
        <div className="container">
            <h1 className="text-center">
                Add a new contact
            </h1>
            <form className="row g-3">
                <div className="col-md-12">
                    <label htmlFor="inputName" className="form-label">Full name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="" />
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Enter email" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputNumber" className="form-label">Phone number</label>
                    <input type="tel" className="form-control" id="inputNumber" placeholder="Enter phone number" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Enter address" />
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Create contact</button>
                </div>
            </form>
            <Link to="/">
                or get back to contacts
            </Link>
        </div>



    )
}

export default Edit;