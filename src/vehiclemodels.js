import { CAR_DATA } from './cardata'
import { useState } from 'react'
import Carcard from './carcard'
const Vehicles =()=>{
    const [active,setActive]=useState("firstcar")
    const [colorbtn,setColorbtn]=useState("btn1")
    const btnId=(id)=>{
        setColorbtn(id)
    }
    console.log(colorbtn)
    const coloringbtn=(id)=>{
        return colorbtn===id?"vehiclebtn" : "vehiclebtnnonclicked"
        
    }
    return(
        <div className="vehicles1">
                <div className="vehicles2">
                    <h2 style={{fontFamily:'rubik',margin:'0 0 0 0'}}>Vehicle Models</h2>
                    <h1 style={{margin:'0 0 0 0',fontFamily:'poppins',fontSize:'2.5rem'}}>Our rental fleet</h1>
                    <p style={{fontFamily:'rubik',color:'#706f7b',textAlign:'center',lineHeight:'1.4'}}>Choose from a variety of our amazing vehicles to rent for your next<br></br> adventure or business trip</p>
                </div>
                <div className='vehicles'>
                <div style={{display:'flex',justifyContent:'space-between',margin:'0 35px'}}>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <button className={`${coloringbtn("btn1")}`} onClick={()=>{
                            setActive("firstcar")
                            btnId("btn1")
                        }}>Audi A1 S-Line</button>
                        <button className={`${coloringbtn("btn2")}`} onClick={()=>{
                            setActive("secondcar")
                            btnId("btn2")
                        }}>VW Golf 6</button>
                        <button className={`${coloringbtn("btn3")}`} onClick={()=>{
                            setActive("thirdcar")
                            btnId("btn3")
                        }}>Toyota Camry</button>
                        <button className={`${coloringbtn("btn4")}`} onClick={()=>{
                            setActive("fourthcar")
                            btnId("btn4")
                        }}>BMW 320 ModernLine</button>
                        <button className={`${coloringbtn("btn5")}`} onClick={()=>{
                            setActive("fifthcar")
                            btnId("btn5")
                        }}>Mercedes-Benz GLK</button>
                        <button className={`${coloringbtn("btn6")}`} onClick={()=>{
                            setActive("sixthcar")
                            btnId("btn6")
                        }}>VW Passat CC</button>
                    </div>
                </div>
                    {active ==="firstcar" && <Carcard data={CAR_DATA} carid={0}/>}
                    {active ==="secondcar" && <Carcard data={CAR_DATA} carid={1}/>}
                    {active ==="thirdcar" && <Carcard data={CAR_DATA} carid={2}/>}
                    {active ==="fourthcar" && <Carcard data={CAR_DATA} carid={3}/>}
                    {active ==="fifthcar" && <Carcard data={CAR_DATA} carid={4}/>}
                    {active ==="sixthcar" && <Carcard data={CAR_DATA} carid={5}/>}
                </div>
        </div>
    )
}
export default Vehicles