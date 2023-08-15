import banner from './utils/banner.png'
const Banner=()=>{
    return(
        <div className='banner'>
            <div  className='banner1'>
            <h1 style={{color:'white',fontFamily:'poppins',fontSize:'3.3rem',margin:'0 0 0 0'}}>Save big with our cheap car rental!</h1>
            <h2 style={{color:'white',fontFamily:'poppins',margin:'10px 0 0 0',fontWeight:'400',fontSize:'1.5rem'}}>Latest Cars. Local Suppliers. <span style={{color:'#ff4d30'}}>24/7</span> Support.</h2>
            </div>
            <div>
                <img className='bannerimg' src={banner} alt=""></img>
            </div>
        </div>
    )
}
export default Banner