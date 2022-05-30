import Button1 from "./Button1.js";
import { BrowserRouter } from 'react-router-dom';
import UserDetails from "./UserDetails.js";
import  {BrowserRouter as Router,
Routes,
Route,
Link} from 'react-router-dom';
import "./App.css"



export default function App() {
  return (
  
    
  <div className="App">
   
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Button1 />} />
  <Route path="/UserDetails/:userId" element={<UserDetails />} />
      </Routes>
      </BrowserRouter>
      </div>
  


  );
}
