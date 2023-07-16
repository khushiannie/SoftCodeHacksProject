import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar';
 
export default function Signup() {
    const [credentials,setcredentials] = useState({name:"",email:"",password:""})

    const handleSubmit = async (e)=>
    {
       e.preventDefault();
       console.log(JSON.stringify({name:credentials.name, email:credentials.email,password:credentials.password}))
       const response = fetch("",method:'POST',header:{

       },body:JSON.stringify(name:credentials.name,email:credentials.email,password:credentials.password));
       const json = await response.json()
       console.log(json);
       if(!json.success){
         alert("Enter Valid Credentials")
       }
    }
    
    const onChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }
  return (
    <div>
    <div> <Navbar /></div>
    <div className='container'>
     <form onSubmit={handleSubmit}>
     <div className="mb-3">
    <label for="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control"name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className=" m-3 btn btn-success">Submit</button>
  <Link to="/Login" className=" m-3 btn btn-danger">Already a user</Link>
</form>

</div>
</div>
  )
}
