import why1 from './utils/why1.png'
import why2 from './utils/why2.png'
import why3 from './utils/why3.png'
const Whyus=()=>{
    return(
        <div className="why">
            <div className="why1">
                <h4 style={{fontFamily:'rubik',fontSize:'1.4rem',margin:'0 0 0 0',fontWeight:'500'}}>Why Choose Us</h4>
                <h1 style={{fontFamily:'poppins',fontSize:'2.7rem',margin:'0 0 0 0',lineHeight:'1.3',marginTop:'10px'}}>Best valued deals you<br></br> will ever find</h1>
                <p style={{fontFamily:'rubik',color:'#706f7b',lineHeight:'1.5'}}>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
                <button className='whybtn'>Find Details&nbsp;<i class="fa-solid fa-angle-right"></i></button>
            </div>
            <div className="why2">
            <div className='why3'>
                    <div>
                        <img src={why1} alt=""></img>
                    </div>
                    <div>
                        <h2 style={{fontFamily:'poppins',margin:'0 0 0 0'}}>Cross Country Drive</h2>
                        <p style={{fontFamily:'rubik',color:'#706f7b',margin:'5px 0 0 0',lineHeight:'1.4'}}>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                    </div>
                </div>
                <div className='why3'>
                    <div>
                        <img src={why2} alt=""></img>
                    </div>
                    <div>
                        <h2 style={{fontFamily:'poppins'}}>All Inclusive Pricing</h2>
                        <p style={{fontFamily:'rubik',color:'#706f7b',lineHeight:'1.4'}}>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
                    </div>
                </div>
                <div className='why3'>
                    <div>
                        <img src={why3} alt=""></img>
                    </div>
                    <div>
                        <h2 style={{fontFamily:'poppins'}}>No Hidden Charges</h2>
                        <p style={{fontFamily:'rubik',color:'#706f7b',lineHeight:'1.4'}}>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Whyus