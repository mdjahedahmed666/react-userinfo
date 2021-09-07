import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./Userinfo.css";

const Userinfo = (props) => {
  const { name, email, phone, gender, photo, salary } = props.user;
  return (
    <div className="border mb-2">
      <div className="row bg-light shadow d-flex align-items-center">
        <div className="col-md-4">
          <img className="img-fluid w-100 m-2" src={photo} alt="" />
        </div>
        <div className="col-md-8 p-4 text-center">
          <p className="text-dark fw-bold">Name: {name}</p>
          <p className="text-dark fw-bold">Email: {email}</p>
          <p className="text-dark fw-bold">Phone: {phone}</p>
          <p className="text-dark fw-bold">Gender: {gender}</p>
          <p className="text-dark fw-bold">salary: ${salary}</p>
          <button
            className="mb-2 btn btn-primary"
            onClick={() => props.handleAddUser(props.user)}
          >
            <FontAwesomeIcon className="me-2" icon={faPlus} />
            Add user
          </button>
        </div>
      </div>
    </div>
  );
};

export default Userinfo;
