import './styles/body.css'
import Nav from './components/nav'
import { Link } from 'react-router-dom'
const Navland=()=>{
    return(
        <div className="land">
        <Nav/>
            <div className='land1'>
                <h1 className='landhead'>Aerospace Trading and Insights.<br></br>
                    Made Simpler, Done Better.</h1>
                <p className='landpara'>Soaring to New Heights: Explore the Sky of Possibilities with Our Aero Components Ecommerce Store.<br></br>Join now for free and start saving time and money.</p>
                {localStorage.getItem("authtoken")?"":<Link to='/signup' ><button className='landbtn'>Join now</button></Link>}
            </div>
        </div>
    )
}
export default Navland