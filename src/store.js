import play from './utils/googleplay.svg'
import app from './utils/appstore.svg'
const Store=()=>{
    return(
        <div className='store'>
            <div className='store1'>
                <h1 style={{fontFamily:'poppins',fontSize:'2.65rem',marginTop:'100px'}}>Download our app to get most out of it</h1>
                <p style={{fontFamily:'rubik',color:'#706f7b',lineHeight:'1.5'}}>Discover the freedom of the open road with our intuitive car rental app. Browse a vast selection of vehicles, from sleek sedans to rugged SUVs, and book with ease in just a few taps. Enjoy seamless pick-up and drop-off, exceptional customer service, and unforgettable journeys on your terms.</p>
                <div>
                    <img style={{margin:'25px 30px 0 0'}} src={play} alt=""></img>
                    <img style={{margin:'25px 0 0 0'}} src={app} alt=""></img>
                </div>
            </div>
        </div>
    )
}
export default Store