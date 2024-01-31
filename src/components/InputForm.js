import { useState } from "react";
import './inputForm.css'

function InputForm() {
  const [currData, setCurrData] = useState({
    firstName: "Gaurav",
    lastName: "Singh",
    email: "gauravsingh21100@gmail.com",
    password: "1233",
    confirmPassword: "1233",
  });

  const changeHandler = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    setCurrData((prevData) => {
      return {
        ...prevData,
        [name]: val,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    alert('Form Submitted, Thanks!!')
    console.log(currData);
  };
  return (
    <>
      <form className="main-form" onSubmit={submitHandler}>
        <p>Please Enter Your Details.</p>
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          onChange={changeHandler}
          id="firstName"
          name="firstName"
          value={currData.firstName}
          placeholder="FirstName"
          required
        />
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          onChange={changeHandler}
          id="lastName"
          name="lastName"
          value={currData.lastName}
          placeholder="lastName"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          onChange={changeHandler}
          id="email"
          name="email"
          value={currData.email}
          placeholder="email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={changeHandler}
          id="password"
          name="password"
          value={currData.password}
          placeholder="password"
          required
          type="password"
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          onChange={changeHandler}
          id="confirmPassword"
          name="confirmPassword"
          value={currData.confirmPassword}
          placeholder="confirmPassword"
          required
          type="password"
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default InputForm;
