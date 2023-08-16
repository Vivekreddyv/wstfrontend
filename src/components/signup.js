import { useState } from "react"
// import Footer from "../footer.js"
// import Nav from "./nav.js"
import { Link, useNavigate } from "react-router-dom"
import '../styles/nav.css'
import '../styles/signup.css'


const Signup=()=>{
    const [credentials,setCredentials]= useState({name:"",email:"",password:""})
    const navigate=useNavigate()
    const handlevalue=(event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }
    const handlesubmit=async(e)=>{
        e.preventDefault()
        const response=await fetch('https://wingspantrade.onrender.com/api/signup',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password})
        })
        const json=await response.json()
        if(!json.success){
            alert("enter valid credentials")
        }
        else{
            navigate('/login')
        }
    }
    
    return(
        <div>
            <div className="navscrolled">
                <div>
                    <Link to='/'><h1 className="logoscrolled">WST</h1></Link>
                </div>
                <div>
                    <ul className="middlenav">
                        <li className="middlenavliscrolled1">Buyers</li>
                        <li className="middlenavliscrolled2">Sellers</li>
                    </ul>
                </div>
            <div>
                <Link to='/login'><button className="loginnavscrolled">Log in</button></Link>
                <Link to='/signup'><button className="signupnavscrolled">Sign up</button></Link>
            </div>
        </div>
            <div className="signupnode">
            <div className="signupnode1">
                <div>
                <div>
                    <h1 className="heading">Name</h1>
                    <input className="input" type="text" name="name" value={credentials.name} onChange={handlevalue}></input>
                </div>
                <div>
                    <h1 className="heading">Email address</h1>
                    <input className="input" type="email" name="email" value={credentials.email} onChange={handlevalue}></input>
                </div>
                <div>
                    <h1 className="heading">Password</h1>
                    <input className="input" type="password" name="password" value={credentials.password} onChange={handlevalue}></input>
                </div>
                <div>
                <button className="signupnodebtn1" onClick={handlesubmit}>Submit</button>
                <Link to='/login'><button className="signupnodebtn2">Already a user</button></Link>
                </div>
                </div>
            </div> 
            </div>
            {/* <Footer/> */}
        </div>
    )
}
export default Signup