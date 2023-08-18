const Footer=()=>{
    return(
        <div className="footer">
            <div style={{width:'40%'}} className="footer1">
                <h2 style={{fontFamily:'poppins'}}>Aircraft <span>Components</span></h2>
                <p  style={{fontFamily:'poppins',color:'#706f7b',marginBottom:'40px'}}>Explore our extensive selection of aircraft components to fulfill your aviation requirements. Discover the ideal parts to match your needs.</p>
                <button className="footerbtn"><i class="fa-solid fa-phone"></i>&nbsp;&nbsp;+91-9876543210</button>
                <button className="footerbtn"><i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;WingSpanTrade@gmail.com</button>
            </div>
            <div  className="footer1">
                <h2 style={{fontFamily:'poppins'}}>COMPANY</h2>
                <p className="pagefooter" style={{fontFamily:'poppins'}}>Rental</p>
                <p className="pagefooter" style={{fontFamily:'poppins'}}>Careers</p>
                <p className="pagefooter" style={{fontFamily:'poppins'}}>Mobile</p>
                <p className="pagefooter" style={{fontFamily:'poppins'}}>Blog</p>
                <p className="pagefooter" style={{fontFamily:'poppins'}}>How we work</p>
            </div>
            <div  className="footer1">
                <h2 style={{fontFamily:'poppins'}}>WORKING HOURS</h2>
                <p style={{fontFamily:'poppins'}}>Mon - Fri: 9:00AM - 9:00PM</p>
                <p style={{fontFamily:'poppins'}}>Sat: 9:00AM - 19:00PM</p>
                <p style={{fontFamily:'poppins'}}>Sun: Closed</p>
            </div>
            <div  className="footer1">
                <h1 style={{fontFamily:'poppins'}}>SUBSCRIPTION</h1>
                <p style={{fontFamily:'poppins'}}>Subscribe your Email address for latest news & updates.</p>
                <input className="footeremail" placeholder="Enter Email Address"></input>
                <button className="footersubmit">Submit</button>
            </div>
        </div>
    )
}
export default Footer