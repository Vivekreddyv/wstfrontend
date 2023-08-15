import qe1 from './utils/qe1.png'
import qe2 from './utils/qe2.png'
import qe3 from './utils/qe3.png'
const Quickeasy=()=>{
    return(
        <div>
            <div>
                <div className="quick1">
                <h3 style={{margin:"150px 0 0 0",fontSize:"1.4rem",fontFamily:'rubik',color:'#010103',fontWeight:'600'}}>Plan your trip now</h3>
                <h1 style={{margin:'15px 0 80px 0',fontSize:"2.7rem",fontFamily:'poppins'}}>Quick & easy car rental</h1>
                </div>
            </div>
            <div className="quick2">
                <div className='quick3'>
                    <img style={{width:'55%'}} src={qe1} alt=""></img>
                    <h2 style={{fontFamily:'poppins',margin:'10px 0 0 0'}}>Select Car</h2>
                    <p style={{fontFamily:'rubik',color:'#706f7b',textAlign:'center',width:'90%',lineHeight:'1.5'}}>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                </div>
                <div className='quick3'>
                    <img style={{width:'55%'}} src={qe2} alt=""></img>
                    <h2 style={{fontFamily:'poppins',margin:'10px 0 0 0'}}>Contact Operator</h2>
                    <p style={{fontFamily:'rubik',color:'#706f7b',textAlign:'center',width:'90%',lineHeight:'1.5'}}>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                </div>
                <div className='quick3'>
                    <img style={{width:'55%'}} src={qe3} alt=""></img>
                    <h2 style={{fontFamily:'poppins',margin:'10px 0 0 0'}}>Let's Drive</h2>
                    <p style={{fontFamily:'rubik',color:'#706f7b',textAlign:'center',width:'90%',lineHeight:'1.5'}}>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
                </div>
            </div>
        </div>
    )
}
export default Quickeasy
