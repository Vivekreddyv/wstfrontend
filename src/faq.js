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
                <p style={{fontFamily:'poppins',color:'#706f7b',textAlign:'center'}}>Answers to Common Queries About Aircraft Component Procurement on Our Platform: Addressing Frequently Asked Questions.</p>
            </div>
            <div className="accordion">
            <div className="accordion1">
                <div className={`${activequestion("q1")}`} onClick={()=>activeq("q1")}>
                <h4 style={{fontWeight:'500'}}>1. What sets apart the process of comparing aircraft component deals?</h4>
                <i class="fa-solid fa-angle-down"></i>
                </div>
                <div className={`${activeanswer("q1")}`} onClick={()=>activeq("q1")}>
                 <p>Comparing aircraft component deals is crucial as it enables you to discover the most suitable options that align with your budget and needs, ensuring optimal value for your investment. Through comparisons, you can identify offers with reduced costs, extra services, or superior component choices. By conducting online research and contrasting prices from diverse suppliers, you can access lucrative aircraft component deals.</p>
                  </div>
            </div>
            <div className="accordion1">
            <div className={`${activequestion("q2")}`} onClick={()=>activeq("q2")}>
                <h4 style={{fontWeight:'500'}}>2. How can I locate aircraft component deals?</h4>
                <i class="fa-solid fa-angle-down"></i>
                </div>
                <div className={`${activeanswer("q2")}`} onClick={()=>activeq("q1")}>
                <p>To discover aircraft component deals, you can conduct online research and analyze prices from various component suppliers. Platforms like Expedia, Kayak, and Travelocity offer the ability to compare prices and explore available component options. Additionally, subscribing to email newsletters and following component companies on social media can keep you updated about exclusive deals and promotions.</p>
                  </div>
            </div>
            <div className="accordion1">
            <div className={`${activequestion("q3")}`} onClick={()=>activeq("q3")}>
                <h4 style={{fontWeight:'500'}}>3. How do I find such affordable aircraft component prices?</h4>
                <i class="fa-solid fa-angle-down"></i>
                </div>
                <div className={`${activeanswer("q3")}`} onClick={()=>activeq("q1")}>
                 <p>Plan ahead: Booking your aircraft components in advance often leads to more budget-friendly prices. Compare across various suppliers: Utilize platforms like Kayak, Expedia, or Travelocity to compare prices from different aircraft component providers. Seek out promo codes and coupons: Search for available promo codes and coupons to reduce the rental cost. Opting for off-airport pickup locations occasionally offers reduced prices.</p>
                  </div>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Faq