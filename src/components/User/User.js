import React, { useEffect, useState } from "react";
import { fakeData } from "../../fakeData/fakeData";
import Cart from "../Cart/Cart";
import Navbar from "../Navbar/Navbar";
import Userinfo from "../Userinfo/Userinfo";
import "./User.css";

const User = () => {
  const [users, setUsers] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setUsers(fakeData);
  }, []);

  const handleAddUser = (user) => {
    const newUser = [...cart, user];
    setCart(newUser);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2 className="text-primary p-4">
              User Information: {users.length}
            </h2>
            <div className="">
              {users.map((user) => (
                <Userinfo user={user} handleAddUser={handleAddUser}></Userinfo>
              ))}
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
