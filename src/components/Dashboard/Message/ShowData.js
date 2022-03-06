import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowData = () => {
    const {contactId} = useParams();
    const [showContact, setShowContact] = useState([])
     useEffect(() => {
              
             fetch(`https://nextit-center.herokuapp.com/showSingleContact/${contactId}`)
             .then(res =>  res.json())
             .then( result => {
                   setShowContact(result)
             })
     }, [])
    return (
        <div className='container'>
             <h2 className='text-danger'>Message of {showContact.name}</h2>
           
             <p className=' p-2 '>Email : {showContact.email}</p>
             <p className=' p-2 '>Message : {showContact.message}</p>
            
        </div>
    );
};

export default ShowData;