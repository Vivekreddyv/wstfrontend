import { Link, useNavigate } from 'react-router-dom'
import '../styles/nav.css'
import { useEffect } from 'react'

const Nav = () => {
    const navigate=useNavigate()
    useEffect(() => {
        const nav = document.querySelector('.nav')
        const logo = document.querySelector('.logo')
        const login = document.querySelector('.loginnav')
        const signup = document.querySelector('.signupnav')
        const middlenavli1 = document.querySelector('.middlenavli1')
        const middlenavli2 = document.querySelector('.middlenavli2')
        const handlescroll = () => {
            if (window.scrollY > 1) {
                nav.classList.add('navscrolled')
                logo.classList.add('logoscrolled')
                login.classList.add('loginnavscrolled')
                signup.classList.add('signupnavscrolled')
                middlenavli1.classList.add('middlenavliscrolled1')
                middlenavli2.classList.add('middlenavliscrolled2')
            } else {
                nav.classList.remove('navscrolled')
                logo.classList.remove('logoscrolled')
                login.classList.remove('loginnavscrolled')
                signup.classList.remove('signupnavscrolled')
                middlenavli1.classList.remove('middlenavliscrolled1')
                middlenavli2.classList.remove('middlenavliscrolled2')
            }
        }
        window.addEventListener('scroll', handlescroll)
        return () => {
            window.removeEventListener('scroll', handlescroll)
        }
    }, [])
    const handlelogout=()=>{
        localStorage.removeItem("authtoken")
        navigate('/')
    }
    return (
        <div className="nav">
            <div>
                <Link to='/'><h1 className="logo">WST</h1></Link>
            </div>
            {localStorage.getItem("authtoken") ? <div>
                <ul className="middlenav">
                    <Link to='/buyers'><li className="middlenavli1">Buyers</li></Link>
                    <Link to='/sellers'><li className="middlenavli2">Sellers</li></Link>
                </ul>
            </div> : <div>
                <ul className="middlenav">
                    <Link to='/login'><li className="middlenavli1">Buyers</li></Link>
                    <Link to='/login'><li className="middlenavli2">Sellers</li></Link>
                </ul>
            </div>}
            {localStorage.getItem("authtoken")?<div>
                <button style={{display:'none'}} className="loginnav">Log in</button>
                <button onClick={handlelogout} className="signupnav">Logout</button>
            </div>:<div>
                <Link to='/login'><button className="loginnav">Log in</button></Link>
                <Link to='/signup'><button className="signupnav">Sign up</button></Link>
            </div>}
            
        </div>
    )
}
export default Nav