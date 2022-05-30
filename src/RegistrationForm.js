import React, { useState, useEffect, useReducer } from "react";
import { postUser } from './users.js';



const RegistrationForm = () => {


  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    city: "",
    country: "",
    phonenumber: "",
    role: ""
  });

  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit1, setIsSubmit1] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input, [name]:
        value
    });
  };


  const formSubmit = () => {
    console.log(input);
    setFormErrors(validate(input));
    setIsSubmit(true);

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setIsSubmit1(true);
      var formValue = input;
      postUser(formValue)
        .then(() => {
          setInput({
            name: "",
            email: "",
            password: "",
            address: "",
            city: "",
            country: "",
            phonenumber: "",
            role: ""
          });
        })
    }

  }
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.address) {
      errors.address = "address is required!";
    }
    if (!values.city) {
      errors.city = "city is required!";
    }
    if (!values.country) {
      errors.country = "country is required!";
    }
    if (!values.phonenumber) {
      errors.phonenumber = "phonenumber is required!";
    }
    if (!values.role) {
      errors.role = "role is required!";
    }
    return errors;
  };

  return (


    <div className="formContainer">
      <div >{isSubmit1 && <div style={{ paddingTop: "20px", fontSize: "25px", paddingBottom: "10px", color: "green" }}>Signed in successfully</div>}</div>
      <div className="formInner">
        <form onSubmit={handleSubmit}>
          <div><h1 style={{
            fontSize: "28px"
            , color: "brown"
            , textAlign: "center",
            paddingTop: "25px"
          }}>Register</h1></div>
          <div className="field">
            <label htmlFor="name">Enter the Name</label>
            <br />
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={handleChange}
              placeholder="Enter a name"
            />
          </div>
          <br />
          <div style = {{color:"red",
    marginTop: "24px"
  
}}> <p>{formErrors.name}</p></div>
          <div className="field">
            <label htmlFor="email">Email ID</label>
            <br />
            <input
              type="text"
              name="email"
              value={input.email}
              onChange={handleChange}
              placeholder="Enter a email"
            />
          </div>
          <br />
          <div style = {{color:"red",
    marginTop: "24px"
  
}}><p>{formErrors.email}</p></div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={handleChange}
              placeholder="Enter a password"
            />
          </div>
          <br />
          <div style = {{color:"red",
    marginTop: "24px"
  
}}><p>{formErrors.password}</p></div>

          <div className="field1">
            <label htmlFor="address">Address</label>
            <br />
            <div>
              <textarea
                name="address"
                value={input.address}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <br />
          <div style = {{color:"red",
    marginTop: "24px"
  
}}> <p>{formErrors.address}</p></div>
          <div className="field">
            <label htmlFor="city">City</label>
            <br />
            <input
              type="text"
              name="city"
              value={input.city}
              onChange={handleChange}
              placeholder="City"
            />
          </div>
          <br />
          <div style = {{color:"red",
    marginTop: "24px"
  
}}> <p>{formErrors.city}</p></div>
          <div className="field">
            <label htmlFor="country">Country</label>
            <br />
            <input
              type="text"
              name="country"
              value={input.country}
              onChange={handleChange}
              placeholder="Country"
            />
          </div>
          <br />
          <div style = {{color:"red",
    marginTop: "24px"
  
}}> <p>{formErrors.country}</p></div>
          <div className="field">
            <label htmlFor="phonenumber">Phonenumber</label>
            <br />
            <input
              type="text"
              name="phonenumber"
              value={input.phonenumber}
              onChange={handleChange}
              placeholder="Phonenumber"
            />
          </div>
          <br />
          <div style = {{color:"red",
    marginTop: "24px"
  
}}> <p>{formErrors.phonenumber}</p></div>
          <br />
          <div className="field">
            <label htmlFor="role">Role : </label>
            <select
              name="role"
              value={input.role}
              onChange={handleChange}
              id="role"
            >
              <option value="">Select Role</option>
              <option value="guest">Guest </option>
              <option value="admin">Admin</option>
            </select>
            <br />
            <div style = {{color:"red",
    marginTop: "24px"
  
}}>  <p>{formErrors.role}</p></div>
          </div>

          <div class="field btn">
            <div class="btnLayer"></div>
            <input type="submit" onClick={formSubmit} value="Register"></input>
          </div>
        </form>
      </div>
    </div>
  );
}
export default RegistrationForm;
