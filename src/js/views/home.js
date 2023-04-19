import React, { useContext } from "react";
import Contact from "../component/contact";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Home = () => {
const {store, actions} = useContext(Context);

	return (
		<div className="container text-center mt-5">
			<Link to="/addcontact">
			<button className="btn btn-primary">Add new contact</button>
			</Link>
		
		<ul className="list-group">
		{
			store.contacts.map((contact) => {
				return <li className="list-group-item" key={contact.id}><Contact  person={contact}/></li>
			})
		}
		</ul>	
		
		
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
	)
	
	};
