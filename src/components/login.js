import { Link, useNavigate } from "react-router-dom"
// import Footer from "../footer.js"
// import Nav from "./nav.js"
import { useState } from "react"
import '../styles/login.css'
import '../styles/nav.css'


const Login=()=>{
    const[credentials,setCredentials]=useState({email:"",password:""})
    const navigate=useNavigate()
    const handlevalue=(event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }
    const handlesubmit=async()=>{
        const response=await fetch('https://wingspantrade.onrender.com/api/login',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})
        })
        const json=await response.json()
        if(!json.success){
            alert('enter valid credentials')
        }
        if(json.success){
            localStorage.setItem("useremail",credentials.email)
            localStorage.setItem("authtoken",json.authtoken)
            navigate('/')
        }
    }
    return(
        <div>
        <div className="navscrolled">
                <div>
                    <Link to='/'><h1 style={{marginLeft:'2rem'}} className="logoscrolled">WST</h1></Link>
                </div>
                {/* <div>
                    <ul className="middlenav">
                        <li className="middlenavliscrolled1">Buyers</li>
                        <li className="middlenavliscrolled2">Sellers</li>
                    </ul>
                </div> */}
            <div>
                <Link to='/login'><button className="loginnavscrolled">Log in</button></Link>
                <Link to='/signup'><button className="signupnavscrolled">Sign up</button></Link>
            </div>
        </div>
        <div className="loginnode">
        <div className="loginnode1">
            <div>
                <div className="test" style={{}}>
                    <h4 style={{fontSize:'1.5rem'}}><span style={{fontWeight:'700',fontSize:'1.7rem'}}>Email:</span>&nbsp;test123@gmail.com</h4>
                    <h4 style={{fontSize:'1.5rem'}}><span style={{fontWeight:'700',fontSize:'1.7rem'}}>Password:</span>&nbsp;test1234</h4>
                </div>
            <div>
                <h1 className="headingloginnode">Email address</h1>
                <input className="inputloginnode" type="email" name="email" value={credentials.email} onChange={handlevalue}></input>
            </div>
            <div>
                <h1 className="headingloginnode">Password</h1>
                <input className="inputloginnode" type="password" name="password" value={credentials.password} onChange={handlevalue}></input>
            </div>
            <div>
            <button className="loginnodebtn1" onClick={handlesubmit}>Login</button>
            <Link to='/signup'><button className="loginnodebtn2">New User</button></Link>
            </div>
            </div>
        </div> 
        </div>
        {/* <Footer/> */}
    </div>
    )
}
export default Login