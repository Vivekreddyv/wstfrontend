import play from './utils/googleplay.svg'
import app from './utils/appstore.svg'
const Store=()=>{
    return(
        <div className='store'>
            <div className='store1'>
                <h1 style={{fontFamily:'poppins',fontSize:'2.65rem',marginTop:'100px'}}>Download our app to get most out of it</h1>
                <p style={{fontFamily:'rubik',color:'#706f7b',lineHeight:'1.5'}}>Experience the skies like never before with our user-friendly aircraft components platform. Explore a diverse range of parts, from intricate avionics to sturdy airframes, and make hassle-free selections in a few clicks. Benefit from smooth transactions, dedicated customer support, and remarkable flights on your own schedule.</p>
                <div>
                    <img style={{margin:'25px 30px 0 0'}} src={play} alt=""></img>
                    <img style={{margin:'25px 0 0 0'}} src={app} alt=""></img>
                </div>
            </div>
        </div>
    )
}
export default Store