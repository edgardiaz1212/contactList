import React, {useState} from 'react'
import { Link } from "react-router-dom";

const getAllNames = async () => {
    try {
      let response = await fetch(`${URLBASE}`);
      let data = await response.json();
      if (response.ok) {
        
        
      } else {
       
      }
    } catch (err) {
      console.log(err);
    }
  };


const ContactCard = () => {
  return (
   <>
   <div className="container">
    <div className="mb-3">
      <label for="fullname" className="form-label">
        Full name
      </label>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          id="fullname"
          placeholder="Fullname"
        />
      </div>
    </div>

    <div className="mb-3">
      <label for="email" className="form-label">
        Email
      </label>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          id="email"
          placeholder="Enter email"
        />
      </div>
    </div>

    <div className="mb-3">
      <label for="phone" className="form-label">
        Phone
      </label>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          id="phone"
          placeholder="Enter phone"
        />
      </div>
    </div>

    <div className="mb-3">
      <label for="address" className="form-label">
        Address
      </label>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          id="address"
          placeholder="Enter address"
        />
      </div>
    </div>

    <br />
    <div className="d-grid gap-2">
      <button className="btn btn-primary mb-2" type="button">
        Save
      </button>
    </div>
    <Link to="/"> or get back to contacts</Link>
  </div>
  </>
  )
}

export default ContactCard