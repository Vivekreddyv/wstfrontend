import { useState } from "react"

const Faq=()=>{
    const [active,setActive]=useState("")
    const activeq=(id)=>{
        setActive(active===id?"":id)
    }
    const activequestion=(id)=>{
        return(active===id?"accordionqactive":"accordionq")
    }
    const activeanswer=(id)=>{
        return(active===id?"accordionaactive":"accordiona")
    }
    return(
        <div className="faqmain">
            <div className="faq">
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'100px'}}>
                <h3 style={{fontFamily:'poppins',fontSize:'1.5rem',margin:'0'}}>FAQ</h3>
                <h1 style={{fontFamily:'poppins',fontSize:'2.5rem',margin:'0'}}>Frequently Asked Questions</h1>
                <p style={{fontFamily:'poppins',color:'#706f7b',textAlign:'center'}}>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
            </div>
            <div className="accordion">
            <div className="accordion1">
                <div className={`${activequestion("q1")}`} onClick={()=>activeq("q1")}>
                <h4 style={{fontWeight:'500'}}>1. What is special about comparing rental car deals?</h4>
                <i class="fa-solid fa-angle-down"></i>
                </div>
                <div className={`${activeanswer("q1")}`} onClick={()=>activeq("q1")}>
                 <p>Comparing rental car deals is important as it helps find the
                  best deal that fits your budget and requirements, ensuring you
                  get the most value for your money. By comparing various
                  options, you can find deals that offer lower prices,
                  additional services, or better car models. You can find car
                  rental deals by researching online and comparing prices from
                  different rental companies.</p>
                  </div>
            </div>
            <div className="accordion1">
            <div className={`${activequestion("q2")}`} onClick={()=>activeq("q2")}>
                <h4 style={{fontWeight:'500'}}>2. How do I find the car rental deals?</h4>
                <i class="fa-solid fa-angle-down"></i>
                </div>
                <div className={`${activeanswer("q2")}`} onClick={()=>activeq("q1")}>
                <p>You can find car rental deals by researching online and
                  comparing prices from different rental companies. Websites
                  such as Expedia, Kayak, and Travelocity allow you to compare
                  prices and view available rental options. It is also
                  recommended to sign up for email newsletters and follow rental
                  car companies on social media to be informed of any special
                  deals or promotions.</p>
                  </div>
            </div>
            <div className="accordion1">
            <div className={`${activequestion("q3")}`} onClick={()=>activeq("q3")}>
                <h4 style={{fontWeight:'500'}}>3. How do I find such low rental car prices?</h4>
                <i class="fa-solid fa-angle-down"></i>
                </div>
                <div className={`${activeanswer("q3")}`} onClick={()=>activeq("q1")}>
                 <p>Book in advance: Booking your rental car ahead of time can
                  often result in lower prices. Compare prices from multiple
                  companies: Use websites like Kayak, Expedia, or Travelocity to
                  compare prices from multiple rental car companies. Look for
                  discount codes and coupons: Search for discount codes and
                  coupons that you can use to lower the rental price. Renting
                  from an off-airport location can sometimes result in lower
                  prices.</p>
                  </div>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Faq