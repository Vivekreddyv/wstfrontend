import tonystark from './utils/tonystark.jpg'
import justinbieber from './utils/justinbieber.jpg'
const Review=()=>{
    return(
        <div style={{backgroundColor:'#f8f8f8',marginTop:'50px'}}>
            <div className="review1">
                <h3 style={{fontFamily:'rubik',margin:'0 0 0 0',fontSize:'1.25rem',marginTop:'100px'}}>Reviewed by People</h3>
                <h1 style={{fontFamily:'poppins',margin:'0 0 0 0',fontSize:'2.7rem'}}>Client's Testimonials</h1>
                <p style={{fontFamily:'rubik',color:'#706f7b',textAlign:'center',lineHeight:'1.5'}}>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
            </div>
            <div className="review2">
                <div className="review3">
                    <div>
                        <p style={{fontFamily:'poppins',fontSize:'1.35rem',fontWeight:'500'}}>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</p>
                    </div>
                    <div  className="review4">
                        <div className='review5'>
                        <img style={{borderRadius:'50%',width:'4.5rem',height:'4.5rem'}} src={tonystark} alt=""></img>
                        <div className='review6'>
                            <h3 style={{fontFamily:'poppins',margin:'0 0 0 0'}}>Tony Stark</h3>
                            <p style={{fontFamily:'rubik',margin:'0 0 0 0'}}>Bengaluru</p>
                            </div>
                        </div>
                         <i style={{fontSize:'4em',marginTop:'10px',color:'#ff4d30'}} className='reviewicon' class="fa-solid fa-quote-right"></i>
                    </div>
                </div>
                <div  className="review3">
                    <div>
                        <p style={{fontFamily:'poppins',fontSize:'1.35rem',fontWeight:'500'}}>"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"</p>
                    </div>
                    <div  className="review4">
                        <div className='review5'>
                        <img style={{borderRadius:'50%',width:'4.5rem',height:'4.5rem'}} src={justinbieber} alt=""></img>
                        <div className='review6'>
                            <h3 style={{fontFamily:'poppins',margin:'0 0 0 0'}}>Justin Bieber</h3>
                            <p style={{fontFamily:'rubik',margin:'0 0 0 0'}}>Mumbai</p>
                            </div>
                        </div>
                         <i style={{fontSize:'4em',marginTop:'10px',color:'#ff4d30'}} className='reviewicon' class="fa-solid fa-quote-right"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Review