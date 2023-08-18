import { useParams } from "react-router-dom"
import { createContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import '../styles/productsdetails.css'
import Footer from "../footer.js"
import Cart from "../components/cart.js"

export const CartContext=createContext([])
const Productdesc=()=>{
    const navigate = useNavigate()
    const handlelogout = () => {
        localStorage.removeItem("authtoken")
        navigate('/')
    }
    const [cartitems,setCartitems]=useState([])
    const [Quantity,setQuantity] = useState(1)
    const addproduct=(item,Quantity)=>{
        const existing=(cartitems.find((data)=>data.id===item.id))
        console.log(existing)
        if (existing){
            setCartitems((prevCartitems)=>
            prevCartitems.map((data)=>data.id===item.id?{...data,quantity:data.quantity+Quantity}:data))
            setQuantity(1)
        }else{
        setCartitems((prevCartitems)=>[...prevCartitems,{...item,quantity:Quantity}])
        setQuantity(1)
        }
    }
    const {id}=useParams()
    const items=[{
        id:1,
        title:"awf",
        description:"wafawf",
        price:200,
        imageurl:"",
        city:"fwaf",
        name:"awf",
        date:18
    }]
    const item=items.filter((data)=>data.id===parseInt(id))
    const {img,price,description,title,city,name,date}=item[0]
    const [image,setImage]=useState(img)
    const imgchange=(newimg)=>{
        setImage(newimg)
    }
    const increase=()=>{
        if(Quantity >= 1){
            setQuantity(Quantity+1)
        }
    }
    const decrease=()=>{
        if(Quantity>1){
            setQuantity(Quantity-1)
        }
    }
    const calcquantity=()=>{
        return(
            (Quantity*price).toLocaleString('EN-IN')
        )
    }
    useEffect(()=>{
        window.scrollTo(0,0)
        imgchange(img)
    },[id,img])
    return(
        <CartContext.Provider value={cartitems}>
        <div>
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
            <h1 className="productdescname">{title}</h1>
            <div className="productdesc1">
                <div>
            <div>
                <img className="mainimg" src={items[0].imageurl} alt=""></img>
            </div>
            </div>
            <div className="productdesc3">
                <p className="productdescription">{description}</p>
                <div>
                    <div className="productdesc4">
                    <h2 className="quantityhead">Quantity</h2>
                    <div className="productdesc5">
                        <button className="quantbtn" onClick={decrease}>-</button>
                        <p className="quantity">{Quantity}</p>
                        <button className="quantbtn" onClick={increase}>+</button>
                        </div>
                    <p className="totalquantity"><span className="rupee"><i class="fa-solid fa-indian-rupee-sign"></i></span>&nbsp;&nbsp;{calcquantity(Quantity)}</p>
                    </div>
                </div>
                <div className="productdesc6">
                    <button className="addcart" onClick={()=>addproduct(item[0],Quantity)} >ADD TO CART</button>
                    <button className="buynow">BUY NOW</button>
                </div>
            </div>
            </div>
                <div className="productdesc7">
                    <div className="productdesc8">
                        <h3 className="textureweightsize">Location:</h3>
                        <p className="textureweightsizedesc">{city}</p>
                    </div>
                    <div className="productdesc8">
                        <h3 className="textureweightsize">Posted by</h3>
                        <p className="textureweightsizedesc">{name}</p>
                    </div>
                    <div className="productdesc8">
                        <h3 className="textureweightsize">Date</h3>
                        <p className="textureweightsizedesc">{date}</p>
                    </div>
                </div>
                <Footer/>
        </div>
        </CartContext.Provider>
    )
}
export default Productdesc