import qe1 from './utils/qe1.png'
import qe2 from './utils/qe2.png'
import qe3 from './utils/qe3.png'
const Quickeasy=()=>{
    return(
        <div>
            <div>
                <div className="quick1">
                <h1 style={{margin:'15px 0 80px 0',fontSize:"2.7rem",fontFamily:'poppins',marginTop:'5rem'}}>Rapid Aircraft Parts Acquisition</h1>
                </div>
            </div>
            <div className="quick2">
                <div className='quick3'>
                    <img style={{width:'55%'}} src={qe1} alt=""></img>
                    <h2 style={{fontFamily:'poppins',margin:'10px 0 0 0'}}>Search Component</h2>
                    <p style={{fontFamily:'rubik',color:'#706f7b',textAlign:'center',width:'90%',lineHeight:'1.5'}}>We provide a wide variety of aircraft components to fulfill your aviation requirements. Our inventory ensures the perfect fit for your needs.</p>
                </div>
                <div className='quick3'>
                    <img style={{width:'55%'}} src={qe2} alt=""></img>
                    <h2 style={{fontFamily:'poppins',margin:'10px 0 0 0'}}>Contact Operator</h2>
                    <p style={{fontFamily:'rubik',color:'#706f7b',textAlign:'center',width:'90%',lineHeight:'1.5'}}>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                </div>
                <div className='quick3'>
                    <img style={{width:'55%'}} src={qe3} alt=""></img>
                    <h2 style={{fontFamily:'poppins',margin:'10px 0 0 0'}}>Buy/Sell</h2>
                    <p style={{fontFamily:'rubik',color:'#706f7b',textAlign:'center',width:'90%',lineHeight:'1.5'}}>Seamlessly buy and sell aircraft components with ease.
Your one-stop platform for effortless aviation parts transactions.</p>
                </div>
            </div>
        </div>
    )
}
export default Quickeasy
