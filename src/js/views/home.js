import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
  <>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end p-5">
      <button className="btn btn-success" type="button">
        {" "}
        Add new contact
      </button>
    </div>

    <div className="container ">
      <ul className=" list-group list-group-flush">
        <li className="list-group-item">
          An item
          <img src="rigo-baby.jpg" class="rounded-circle" alt="rigo"></img>
        </li>

        {/* <li className="list-group-item"> */}

        <li className="card mb-3">
          <div className="row g-0">
            <div className="col-2 p-5">
              <img
                src="rigo-baby.jpg"
                class="img-fluid rounded-circle"
                alt="..."
              />
            </div>
            <div className="col-8 border border-success m-2">
              <div className="card-body">
                <h4 className="card-title border dorder-danger">Daniel</h4>
                <p className="card-text">
                  <i className="fa-solid fa-location-dot"></i> direccion
                </p>
                <p className="card-text">
                  <i className="fa-solid fa-phone"></i> telefono
                </p>
                <span className="card-text">
                  <small className="text-body-secondary">
                    <i className="fa-sharp fa-solid fa-envelope"></i> email
                  </small>
                </span>
              </div>
            </div>
            <div className="col-1  border border-danger">
              <i className="fa-solid fa-pencil"></i>
              <i className="fa-solid fa-trash-can"></i>
            </div>
          </div>
        </li>

        {/* </li> */}
        <li className="list-group-item">A third item</li>
      </ul>
    </div>
    <div className="border boder-danger">hola</div>
    <div className="border boder-danger">hola</div>
    <div className="border boder-danger">hola</div>
  </>
);
