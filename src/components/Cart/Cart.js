import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  //   const totalSalary = cart.reduce((total, user) => total + user.salary, 0);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const user = cart[i];
    total = total + user.salary;
  }
  return (
    <div className="bg-warning shadow mt-5 rounded p-4">
      <h4 className="fw-bold">User Cart</h4>
      <p className="fw-bold">Total User Added: {cart.length}</p>
      <p className="fw-bold fs-3">Total Salary: ${total}</p>
    </div>
  );
};

export default Cart;
