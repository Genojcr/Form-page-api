import { useState } from "react";
import RegisterForm from "./RegistrationForm.js";
import LoginForm from "./LoginForm.js";




function Button1() {
  const [isClickLogin, isSetClickLogin] = useState(false)

    const [isColor, isSetolor] = useState(false)

  return(
<div>
<div className="wrapper">
    <div className="Homepage">
    <div class="slideControls">

    <button className="title" onClick = {()=> {isSetClickLogin(false)}}>Login</button>
    <button className="title" onClick = {()=> {isSetClickLogin(true)}}>SignUp</button>
    </div>
    </div>
    {isClickLogin? <div><RegisterForm/></div>: <div><LoginForm/></div>}
  </div>
    </div>
  );
}

export default Button1;

