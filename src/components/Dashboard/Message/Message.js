import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';


const Message = () => {

      const [contactInfo, setContactInfo] = useState([]);
      useEffect(() => {
            fetch('https://nextit-center.herokuapp.com/getContactData')
                  .then(res => res.json())
                  .then(result => {
                        setContactInfo(result)
                  })
      }, [])

      const handleContactDelete = (id) => {
              fetch(`https://nextit-center.herokuapp.com/deleteContact/${id}`,{
                    method:"DELETE"
              })
              .then(res => res.json())
              .then(result => {
                      if(result){
                              document.querySelector(".rows").style.display="none" ;
                              alert( "Are you sure delete this Message",window.location.reload())
                             
                      }
              })
      }

      return (
            <div className='container'>
                  <h1>there is <span style={{ color: "purple" }}>{contactInfo.length}</span> contact message</h1>

                  <table class="table table-striped ">
                        <thead>  
                              <tr>

                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Action</th>
                                    <th scope="col">post time</th>
                              </tr>
                        </thead>
                        <tbody>

                              {
                                    contactInfo.map(item => 

                                          <tr className='rows'>
                                                {/* <th scope="row">1</th> */}
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td> <Link to={`/contactId/${item._id}`}> <button>view</button></Link> <button onClick={() => handleContactDelete(`${item._id}`)}>delete</button></td>
                                                <td>{item.postTime}</td>
                                                
                                          </tr>

                                    )
                              }

                        </tbody>
                  </table>


            </div>
      );
};

export default Message;