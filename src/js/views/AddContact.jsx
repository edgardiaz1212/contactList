import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const AddContact = () => {
  const { store, actions } = useContext(Context);
  const [inputContacts, setInputContacts] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleInputs = (event) => {
    const { id, value } = event.target;
    setInputContacts({ ...inputContacts, [id]: value });
  };
  const handleSave = () => {
    actions.addNewContact(inputContacts);
  };

  return (
    <>
      <div className="container">
        <ul className="list-group">
          {store.demo.map((item, index) => {
            return (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between"
                style={{ background: item.background }}
              >
                <Link to={"/single/" + index}>
                  <span>Link to: {item.title}</span>
                </Link>
                {
                  // Conditional render example
                  // Check to see if the background is orange, if so, display the message
                  item.background === "orange" ? (
                    <p style={{ color: item.initial }}>
                      Check store/flux.js scroll to the actions to see the code
                    </p>
                  ) : null
                }
                <button
                  className="btn btn-success"
                  onClick={() => actions.changeColor(index, "orange")}
                >
                  Change Color
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="container">
        <h1 className="text-center">Add a new contact</h1>
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
              onChange={handleInputs}
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
              onChange={handleInputs}
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
              onChange={handleInputs}
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
              onChange={handleInputs}
            />
          </div>
        </div>

        <br />
        <div className="d-grid gap-2">
          <button
            className="btn btn-primary mb-2"
            type="button"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
        <Link to="/"> or get back to contacts</Link>
      </div>
    </>
  );
};
