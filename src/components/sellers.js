import { Link, useNavigate } from "react-router-dom"
import '../styles/sellers.css'
import { useState } from "react"
import Footer from '../footer'
const Sellers = () => {
    const [credentials,setCredentials]=useState({title:"",description:"",price:"",imageurl:"",city:"",name:""})
    const{title,description,price,imageurl,city,name}=credentials
    const navigate = useNavigate()
    const handlelogout = () => {
        localStorage.removeItem("authtoken")
        navigate('/')
    }
    const handlevalue=(event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }
    const handlepostnow=async(e)=>{
        e.preventDefault()
        const response=await fetch('http://localhost:5000/api/sellers',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({title:name,description:description,price:price,imageurl:imageurl,city:city,name:name})
    })
    const json=await response.json()
    if(!json.success){
        alert('enter valid details')
    }else{
        navigate('/')
    }
    }
    return (
        <div>
            <div className="navscrolled">
                <div>
                    <Link to='/'><h1 style={{ marginLeft: '2rem' }} className="logoscrolled">WST</h1></Link>
                </div>
                {/* <div>
                    <ul className="middlenav">
                        <li className="middlenavliscrolled1">Buyers</li>
                        <li className="middlenavliscrolled2">Sellers</li>
                    </ul>
                </div> */}
                <button onClick={handlelogout} className="signupnavscrolled">Logout</button>
            </div>
            <h1 style={{marginTop:'7rem',textAlign:'center',marginBottom:'1rem'}}>POST YOUR PRODUCT</h1>
            <div className="sellers">
                <div className="sellers1">
                    <div className="sellers2">
                        <h2 style={{marginTop:'1.5rem',marginBottom:'0.5rem'}}>INCLUDE SOME DETAILS</h2>
                        <p style={{margin:'0'}}>Ad title*</p>
                        <input name="title" value={title} className="inputseller" onChange={handlevalue}></input>
                        <p style={{margin:'0'}}>Description*</p>
                        <input name="description" value={description} className="inputseller1" onChange={handlevalue}></input>
                    </div>
                    <div className="sellers3">
                        <h2 style={{marginTop:'1rem',marginBottom:'2rem'}}>SET A PRICE</h2>
                        <p style={{margin:'0'}}>Price*</p>
                        <input name="price" value={price} className="inputseller" onChange={handlevalue}></input>
                        <p style={{margin:'0'}}>Img URL*</p>
                        <input style={{fontSize:'1rem'}} name="imageurl" value={imageurl} className="inputseller" onChange={handlevalue}></input>
                        <p style={{margin:'0'}}>City*</p>
                        <input name="city" value={city} className="inputseller" onChange={handlevalue}></input>
                    </div>
                    <div className="sellers4">
                        <h2 style={{marginTop:'1rem',marginBottom:'2rem'}}>REVIEW YOUR DETAILS</h2>
                        <p style={{margin:'0'}}>Name</p>
                        <input name="name" value={name} className="inputseller" onChange={handlevalue}></input>
                    </div>
                    <div className="sellers5">
                        <button onClick={handlepostnow} className="postnow">Post now</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Sellers