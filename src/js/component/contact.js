import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Contact = ({ person }) => {
    const {actions}= useContext(Context);
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-2'>
            <img className='' src=""/>
            </div>
            <div className='col-8'>
                <p>{person.full_name}</p>
                <p> <i className="bi bi-geo-alt"></i>{person.address}</p>
                <p><i className="bi bi-telephone"></i>{person.phone}
                </p>
                <p><i className="bi bi-envelope"></i>{person.email}</p>
            </div>
            <div className='col-2'>
           <Link to ="/editContact"><i className="bi bi-pen" onClick={()=>{
            actions.editPerson(person.id);
           }} ></i></Link> 
            </div>
        </div>
        

    </div>
  )
}

export default Contact;