import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
  <>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end p-5">
      <Link to="/Contact">
	  <button className="btn btn-success" type="button">
        {" "}
        Add new contact
      </button>
	  </Link>
    </div>

    <div className="container ">
      <ul className=" list-group list-group-flush">
      
           <li className="card mb-3">
          <div className="row g-0">
            <div className="col-2 p-5">
              <img
                src="rigo-baby.jpg"
                class="img-fluid rounded-circle"
                alt="Contact"
              />
            </div>
            <div className="col-8 m-2">
              <div className="card-body text-secondary">
                <h4 className="card-title">Daniel</h4>
                <p className="card-text">
                  <i className="fa-solid fa-location-dot"></i> direccion
                </p>
                <p className="card-text">
				<small className="text-body-secondary ">
                  <i className="fa-solid fa-phone"></i> telefono
                </small>
				</p>
                <span className="card-text">
                  <small className="text-body-secondary">
                    <i className="fa-sharp fa-solid fa-envelope"></i> email
                  </small>
                </span>
              </div>
            </div>
            <div className="col-1 text-end ">
              <Link><i className="fa-solid fa-pencil p-4"></i></Link>
			
              <Link><i className="fa-solid fa-trash-can"></i></Link>
            </div>
          </div>
        </li>

        
      </ul>
    </div>
  
  </>
);
