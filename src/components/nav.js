import '../styles/nav.css'
import { useEffect } from 'react'

const Nav = () => {
    useEffect(()=>{
        const nav=document.querySelector('.nav')
        const logo=document.querySelector('.logo')
        const login=document.querySelector('.login')
        const signup=document.querySelector('.signup')
        const handlescroll=()=>{
            if(window.scrollY>1){
                nav.classList.add('navscrolled')
                logo.classList.add('logoscrolled')
                login.classList.add('loginscrolled')
                signup.classList.add('signupscrolled')
            }else{
                nav.classList.remove('navscrolled')
                logo.classList.remove('logoscrolled')
                login.classList.remove('loginscrolled')
                signup.classList.remove('signupscrolled')
            }
        }
            window.addEventListener('scroll',handlescroll)
            return()=>{
                window.removeEventListener('scroll',handlescroll)
        }
    },[])
    return (
        <div className="nav">
                <div>
                    <h1 className="logo">WST</h1>
                </div>
                <div>
                    <ul className="middlenav">
                        <li className="middlenavli">Buyers</li>
                        <li className="middlenavli">Sellers</li>
                    </ul>
                </div>
            <div>
                <button className="login">Log in</button>
                <button className="signup">Sign up</button>
            </div>
        </div>
    )
}
export default Nav