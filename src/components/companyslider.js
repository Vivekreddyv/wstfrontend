import Companyitems from "./companyitems.js";
import '../styles/companyslider.css'

const Companyslider=()=>{
    const slideleft=()=>{
        const slider=document.querySelector('#slider')
        slider.scrollLeft=slider.scrollLeft-605
    }
    const slideright=()=>{
        const slider=document.querySelector('#slider')
        slider.scrollLeft=slider.scrollLeft+605
    }
    return(
        <div className="slider1">
            <button style={{marginRight:'1rem'}} className="sliderbtn" onClick={slideleft}><i class="fa-solid fa-arrow-right fa-rotate-180"></i></button>
            <div id="slider" className="slider2">
            <Companyitems/>
            </div>
            <button  className="sliderbtn" onClick={slideright}><i class="fa-solid fa-arrow-right"></i></button>
        </div>
    )
}
export default Companyslider