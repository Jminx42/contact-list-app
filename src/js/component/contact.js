import React from 'react'

const Contact = ({ person }) => {
    console.log(person)
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

            </div>
        </div>
        

    </div>
  )
}

export default Contact;