import '../styles/companyitems.css'
import companylogos from './companydata'
const Companyitems=()=>{
    return(
        <div className='company'>
            {companylogos.map((data)=>(
                <div className='containercompany'>
                    <img className='companyimg' src={data.img} alt=''></img>
                </div>
            ))}
        </div>
    )
}
export default Companyitems