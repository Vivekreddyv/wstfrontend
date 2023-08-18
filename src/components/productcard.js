import { Link } from "react-router-dom"
import '../styles/card.css'

const Productcard=({props,size})=>{
    return(
        <div className="productcard">
            <Link to={`/productdetails/${props._id}`}>
                    <img style={{width: size,height: size}} src={props.imageurl} alt=""></img>
                    <p style={{fontFamily:'blinker',fontSize:'1.1rem',marginLeft:'0.5rem',marginBottom:'1rem'}}>{props.title}</p>
                    <h4 style={{fontFamily:'blinker',fontSize:'1.4rem',marginLeft:'0.5rem',marginBottom:'0.5rem'}}><span style={{fontSize:'1.1rem'}}><i class="fa-solid fa-indian-rupee-sign"></i></span>&nbsp;&nbsp;{props.price.toLocaleString('En-In')}</h4>
                    </Link>
         </div>
    )
}
export default Productcard