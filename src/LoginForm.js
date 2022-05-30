  import React, { useState, useEffect, } from 'react';
  import {getUsers} from './users.js';
  import {useNavigate} from "react-router-dom"
  import "./App.css"

  const LoginForm = ()=> {

    const navigate =useNavigate();

    const[logInput, setLogInput] = useState({
  email:"",
  password:""
    });

    const[logError, setLogError] = useState({});
    const[isLogSubmit, setIsLogSubmit] = useState(false);
    const [users, setUsers] = useState([]);
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setLogInput({...logInput, [name]:value})
    
  };   

  useEffect(() => {  getUsers()
    .then(items => {
      setUsers(items);
    })
  }, [users]);




  const logFormSubmit = () =>{  
    setIsLogSubmit(true);
  setLogError(validate(logInput));    

      }


    const onSubmit = (e)=>{
      e.preventDefault();
      if (Object.keys(logError).length === 0 && isLogSubmit ){
        let email =logInput.email;
        var dataUser
        var data=users.filter(x=>{
          if(x.email==email){
            console.log('pfhshuhfu');
          dataUser=x
          }
          console.log(dataUser);
        })
        navigate('/UserDetails/'+dataUser.id)
        
      }
    };

    const validate = (values) =>{
      const errors = {};

      const foundEmail = users.find(obj => {
        return obj.email === logInput.email;
      })

      const foundPassword = users.find(obj => {
        return obj.password === logInput.password;
      })
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
      
      if (!values.email) {
        errors.email = "Email is required!";
      }
      else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      else if (!foundEmail){
        errors.email = "This is not a valid email. If not register.Kindly Register first";
      }

      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
      else if (!foundPassword){
        errors.password = "This is not a valid password!";
      }

        return errors;
    };

    
    return (
      
        
      <div className="formContainer"> 
      <div className="formInner">


      <form onSubmit={onSubmit} action="#" className="login">
        
      <h1 style={{fontSize: "28px"
      ,color: "brown"
        ,textAlign: "center",
          paddingTop: "20px"}}>Login Page</h1>
      <div className ="field">
          <label htmlFor="email">Email ID</label>
          <br />
          <input type="text" name="email" value={logInput.email} onChange={handleChange} placeholder="Enter a email" />
          </div>
          <br />
        
  <div style = {{color:"red",
      marginTop: "24px"
    
  }}><p>{logError.email}</p></div>

  <div className="field">
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" name="password" value={logInput.password} onChange={handleChange} placeholder="Enter a password" />
          </div>
          <br />
          
          <div style = {{color:"red", marginTop: "24px"}}><p>{logError.password}</p></div>
  <div class="field btn">
                      <div class="btnLayer"></div>
                      <input type="submit"onClick={logFormSubmit} value="Login"></input>
                    </div>
          
        </form>
        </div> 
      </div>
    );
  }
  export default LoginForm;
