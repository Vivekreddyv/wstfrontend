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
                        <p style={{fontFamily:'poppins',fontSize:'1.35rem',fontWeight:'500',marginTop:'2rem'}}>"We sourced aircraft components from this platform and had an outstanding experience! The procurement process was seamless, and the component prices were highly competitive. "</p>
                    </div>
                    <div  className="review4">
                        <div className='review5'>
                            <img style={{height:'6rem'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfkjs8Do84Lf8ih3xdxWI3zrqb7LcHHQhuMelIZ5ct1w&s" alt=""></img>
                        <div className='review6'>
                            <h3 style={{fontFamily:'poppins',margin:'0 0 0 0'}}>Andy March</h3>
                            <p style={{fontFamily:'rubik',margin:'0 0 0 0'}}>Director of Operations at March Aviation</p>
                            </div>
                        </div>
                         <i style={{fontSize:'4em',marginTop:'10px',color:'#ff4d30'}} className='reviewicon' class="fa-solid fa-quote-right"></i>
                    </div>
                </div>
                <div  className="review3">
                    <div>
                        <p style={{fontFamily:'poppins',fontSize:'1.35rem',fontWeight:'500'}}>"The aircraft component was in excellent condition and significantly enhanced our project. Highly recommend this aircraft components platform!"</p>
                    </div>
                    <div  className="review4">
                        <div className='review5'>
                        <img style={{width:'8rem',height:'4rem'}} src="https://img.aviationpros.com/files/base/cygnus/cavc/image/2015/09/Red_Aviation_Logo__Final_.56055ff051469.png?auto=format,compress&fit=fill&fill=blur&w=1200&h=630" alt=""></img>
                        <div className='review6'>
                            <h3 style={{fontFamily:'poppins',margin:'0 0 0 0'}}>Josh Abelson</h3>
                            <p style={{fontFamily:'rubik',margin:'0 0 0 0'}}>CEO at Red Aviation</p>
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