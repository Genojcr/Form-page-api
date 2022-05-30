import { getUsers } from './users.js';
import React, { useState, useEffect, } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import  "./UserDetails.css"

function UserDetails() {
  const [users, setUsers] = useState([]);

  useEffect(() => 
  {  getUsers()
    .then(items => {
      setUsers(items);
    })
  }, [users]);

console.log(users);

 
  let { userId } = useParams();
  let navigate = useNavigate();


  
  var userProfile;
  users.filter((user) => {
    console.log(user);
    if (user.id === parseInt(userId)) {
      userProfile = user
    }
  }

  );
  console.log(userProfile);

  return (
    <div>
      <div className = "cardContainer">
      <div class="upper-container">
            <div class="image-container">
               <img src="https://as1.ftcdn.net/v2/jpg/03/58/90/78/1000_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg" />
            </div>
         </div>
         <div class="lower-container">
            <div>
            <h3>Profile Details</h3>
        <h4>Role : {userProfile? userProfile.role:''}  </h4></div>
      <p>Name : {userProfile? userProfile.name:''}</p>
      <p>Email : {userProfile? userProfile.email:''}</p>
      <p>Password : {userProfile? userProfile.password:''}</p>
      <p>Address : {userProfile? userProfile.address:''}</p>
      <p>City : {userProfile? userProfile.city:''}</p>
      <p>Country : {userProfile? userProfile.country:''}</p>
      <p>PhoneNumber : {userProfile? userProfile.phonenumber:''}</p>
      <button ClassName=" " onClick={() => navigate('/')}>LogOut</button>
    
      </div>
    </div>
    </div>

  );
}
export default UserDetails;