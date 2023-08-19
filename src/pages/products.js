import { useEffect, useState } from "react"
import Productcard from "../components/productcard"
import { Link,useNavigate } from "react-router-dom"
import Nav from "../components/nav.js"
import Footer from '../footer.js'
import '../styles/products.css'
import Cart from "../components/cart"

const ProductCards=(category)=>{ 
    const [productdata,setProductdata]=useState([])
    console.log(productdata)
    const navigate = useNavigate()
    const handlelogout = () => {
        localStorage.removeItem("authtoken")
        navigate('/')
    }
    useEffect(()=>{
        window.scrollTo(0,0)
        getdata()
    },[])
    useEffect(()=>{
        sizefunc()
    })
    const getdata=async()=>{
        let response=await fetch('http://localhost:5000/api/productsdata',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        }})
        const data=await response.json()
        console.log(data)
        setProductdata(data[0])
    }
    // const {id}=useParams()
   
    const [size,setSize] = useState('')
    // const [filtername,setFiltername]=useState("ALL")
    // const filterproduct=(category)=>{
    //     if(category==="all"){
    //         // setProductdata(items)
    //         setFiltername("ALL")
    //     }else{
    //     const filtereddata=productdata.filter((data)=>data.category===category)
    //     setProductdata(filtereddata)
    //     const filteredname=category
    //     setFiltername(filteredname)
    //     }
    // }
    const sizefunc=()=>{
        const siz=window.innerWidth >=720?'17rem':'91vw';
        setSize(siz)
      }
  
    return(
        <div className="products1">
            <div className="navscrolled">
                <div>
                    <Link to='/'><h1 style={{ marginLeft: '2rem' }} className="logoscrolled">WST</h1></Link>
                </div>
                {/* <div>
                    <ul className="middlenav">
                        <li className="middlenavliscrolled1">Buyers</li>
                        <li className="middlenavliscrolled2">Sellers</li>
                    </ul>
                </div> */}
                <div style={{marginRight:'2rem'}}>
                <button onClick={handlelogout} className="signupnavscrolled">Logout</button>
                <Cart/>
                </div>
            </div>
        <div className="products2">
            <div className="products3">
                <Link to='/'><h4 className="homeproducts"><i class="fa-solid fa-angle-left"></i>Home</h4></Link>
                {/* <h2 className="productshead">{filtername}</h2> */}
            </div>
            {/* <div className="products4">
                <button className="filterbtn" onClick={()=>filterproduct("all")}>All</button>
                <button className="filterbtn" onClick={()=>filterproduct("furniture")}>Furnitures</button>
                <button className="filterbtn" onClick={()=>filterproduct("electronic")}>Electronics</button>
                <button className="filterbtn" onClick={()=>filterproduct("lamp")}>Lamps</button>
                <button className="filterbtn" onClick={()=>filterproduct("kitchen")}>Kitchen</button>
                <button className="filterbtn" onClick={()=>filterproduct("chair")}>Chairs</button>
                <button className="filterbtn" onClick={()=>filterproduct("skin-care")}>Skin Care</button>
            </div> */}
        <div className="products5">
            {productdata.map((data)=>(
                <Productcard key={data.id} size={size} props={data}/>
            ))}
        </div>
        </div>
        </div>
    )
}
const Products=()=>{
    return(
        <div>
            <Nav/>
            <ProductCards/>
            <Footer/>
        </div>
    )
}
export default Products